import { createContext, useState } from "react";

export const CartContext = createContext({
    items: [],
    addOneToCart: () => { },
    deleteFromCart: () => { }
})



export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    function deleteFromCart(productName) {

        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.productName !== productName;
            })  
        )
    }
    function deleteAllFromCart() {

        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.productName !== currentProduct.productName;
            })  
        )
        
    }

    function addOneToCart(details, count) {

        // const addIn = (product) => {
        //     console.log(product);
        //     const newProduct = {
        //         productName: details[0].title,
        //         price: details[0].price,
        //         photo: details[0].images[0],
        //         quantity: count
        //     }
        //     setCartProducts([...cartProducts,newProduct])   
        // }


        // if(!cartProducts.includes(details[0].title) || !cartProducts.length)
        // {
        //     const newProduct = {
        //         productName: details[0].title,
        //         price: details[0].price,
        //         photo: details[0].images[0],
        //         quantity: count
        //     }
        //     setCartProducts([...cartProducts,newProduct]) 
        // }

        if (!cartProducts.length) {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        productName: details[0].title,
                        price: details[0].price,
                        photo: details[0].images[0],
                        quantity: count
                    }
                ]
            )
        }


        else {
            let filteredProducts = cartProducts.filter(prod => prod.productName !== details[0].title)
                const newProduct = {
                    productName: details[0].title,
                    price: details[0].price,
                    photo: details[0].images[0],
                    quantity: count
                }
            setCartProducts([...filteredProducts,newProduct])
        }
        // else{

        // setCartProducts(
        //     cartProducts.map(
        //         product =>
        //             product.productName === details[0].title                                // if condition
        //                 ? { ...product, quantity: count } // if statement is true
        //                 : (
        //                     // ...product,
        //                     // productName: details[0].title,
        //                     // price: details[0].price,
        //                     // photo: details[0].images[0],
        //                     // quantity: count
        //                     { ...product, quantity: count } 
        //                 )
        //     )
        // )
        // }


    }

    console.log(cartProducts);
    const contextValue = {
        items: cartProducts,
        addOneToCart,
        deleteFromCart,
        deleteAllFromCart
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;