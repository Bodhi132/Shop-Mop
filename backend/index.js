const dotenv = require("dotenv").config()
const express = require('express')
const cors = require('cors');
const mongoose = require("mongoose"); 
const User = require('./models/UserModel');
const Cart = require('./models/CartItems')
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
// const uploadUserMiddleware = multer({ dest: 'userUploads/' });
const fs = require('fs');
const bodyparser = require('body-parser');
const stripe = require('stripe')('sk_test_51MTeHYSFe9iNERqeQmzflPrsqoCAml9j7hfYymqmNwmVbRCAyieAhqZTNone27sdTIIYe2sQy50vqQtcOQSl67uG00WsZ8Znhq')
// const { log } = require("console");
//sk_test_51MTeHYSFe9iNERqeQmzflPrsqoCAml9j7hfYymqmNwmVbRCAyieAhqZTNone27sdTIIYe2sQy50vqQtcOQSl67uG00WsZ8Znhq
const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';

app.use(cors({ credentials: true, origin: ['http://localhost:5173','https://shop-mop-back.onrender.com','https://shop-mop.vercel.app/'] }));
app.use(express.json());
app.use(cookieParser());
// cors("*")
// app.use(express.static(__dirname))
// app.use('/uploads', express.static(__dirname + '/uploads'));

const userStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "../E-Store/public/profileImages/")
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const uploadUserMiddleware = multer({ storage: userStorage })

const uri = 'mongodb+srv://basubodhisattwa6:nums1@cluster0.uos8aaz.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(uri);

app.post('/signup', uploadUserMiddleware.single('file'), (req, res) => {

    // const { originalname, path } = req.file;
    // const parts = originalname.split('.');
    // const ext = parts[parts.length - 1];
    // const newPath = path + '.' + ext;
    // fs.renameSync(path, newPath);
    // console.log(newPath);

    // console.log(req.file);



    // try {
    //     const newUserData = await User.create({
    //         username,
    //         email,
    //         password: bcrypt.hashSync(password, bcryptSalt),
    //         photo,
    //         photoPath:newPath
    //     })
    //     res.json(newUserData)
    // } catch (e) {
    //     res.status(422).json(e)
    // }
    // const userExists =  User.findOne( req.body.email );

    // if (userExists) {
    //   res.status(404);
    //   throw new Error("Email has already been registered");
    // }

    const newUser = new User({

        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, salt),
        photo: req.file.originalname
    })

    newUser.save().then(() => res.json(newUser)).catch((err) => res.status(400).json(`Error:${err}`))
}
)

app.post('/login', async (req, res) => {
    const { email, password } = req.body
    const userDoc = await User.findOne({ email })
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password)
        if (passOk) {
            jwt.sign({
                email: userDoc.email,
                id: userDoc._id
            }, secret, {}, (err, token) => {
                if (err) throw err
                res.cookie('token', token).json({
                    username: userDoc.username,
                    photo: userDoc.photo
                })
            })
        }
        else {
            res.status(422).json('pass not ok')
        }
    }
    else {
        res.json('not found')
    }
})

app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, secret, {}, async (err, userData) => {
            if (err) throw err;
            const { name, email, _id } = await User.findById(userData.id);
            res.json({ name, email, _id });
        });
    } else {
        res.json(null);
    }
});
// app.post('/cart', (req, res) => {
//     const { token } = req.cookies;
//     const { details, count } = req.body

//     jwt.verify(token, secret, {}, async (err, userData) => {
//         if (err) throw err;
//         // res.json(details);

//         // const cart = await Cart.create({
//         //     image: details[0].images[0],
//         //     item: details[0].title,
//         //     price: details[0].price,
//         //     quantity: count,
//         //     subtotal: details[0].price * count,
//         //     purchaser: userData.id
//         // })
//         // res.json(cart)
//         if (token) res.json('present')
//     });

// });

// app.post('/checkout',async(req,res)=>{

//     console.log(req.body);
//     const items=req.body.items
//     let lineItems = []
//     items.forEach((item)=>{
//         lineItems.push(
//             {
//                 price:item.id,
//                 quantity:item.quantity
//             }
//         )
//     })

//     const session = await stripe.checkout.sessions.create({
//         line_items:lineItems,
//         mode:'payment',
//         success_url:'http://localhost:5173/success',
//         cancel_url:'http://localhost:5173/cancel',
//     })

//     res.send(JSON.stringify({
//         url:session.url
//     }))

// })

app.post("/create-checkout-session", async (req, res)=>{
    try{
        const session = await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            mode:"payment",
            line_items: req.body.items.map(item => {
                return{
                    price_data:{
                        currency:"inr",
                        product_data:{
                            name: item.productName
                        },
                        unit_amount: (item.price)*100,

                    },
                    quantity: item.quantity
                }
            }),
            success_url: 'http://localhost:5173/success',
            cancel_url: 'http://localhost:5173/cancel'
        })

        res.json({url: session.url})

    }catch(e){
     res.status(500).json({error:e.message})
    }
})

app.listen(4000, () => {
    console.log('App listening on port 4000');
})