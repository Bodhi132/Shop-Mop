import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../UserContext'
import SignupPage from '../pages/SignupPage'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const btnRef2 = useRef()
    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState()
    const [showModal, setShowModal] = useState(false);

    const { user } = useContext(UserContext)

    const navigateTo = () => {
        if (!user)
            navigate("/signup")
        else {
            navigate("/cart")
        }
    }

    return (
        <>
            <nav className='flex align-center sm:justify-around sm:p-3 sm:mx-3 justify-between'>
                <img src="./src/assets/Logo-Main.png" className='h-[6rem] w-[8rem] mb-8 rounded-md' alt="" />
                <div className='flex ml-10 mt-8 text-2xl font-light max-sm:hidden'>
                    <Link className='mx-4' to="/" >Home</Link>
                    <Link className='mx-4' to="/About">About</Link>
                    <Link className='mx-4' to="/products">Products</Link>
                </div>
                <div className='flex mt-8 max-sm:hidden' >
                    <button className='mx-8 mb-[7rem]' data-modal-target="defaultModal" data-modal-toggle="defaultModal" onClick={() => navigateTo()} >
                        <span className='mx-2 text-2xl'>Cart</span>
                        <i className="fa fa-cart-shopping text-2xl"></i>
                    </button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        navigate("signup");
                    }} className='mb-[7rem]' ref={btnRef2} >
                        {user ? <span className='mx-2 text-3xl'>{user.username}</span> : <span className='mx-2 text-3xl' >Profile</span>}
                        {!user ? <i className="fa fa-user text-2xl"></i> : <img src={`../public/profileImages/${user.photo}`} className='h-[2.5rem] w-[2.5rem] inline rounded-full' />}
                    </button>
                </div>
                <i className="fa-solid fa-bars mt-[3rem] mr-14 text-4xl text-amber-700 sm:hidden"></i>
            </nav>
        </>
    )
}

export default Header