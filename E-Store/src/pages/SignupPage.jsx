import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Navigate } from 'react-router-dom';


const SignupPage = () => {



    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [files, setFiles] = useState('');
    const [preview, setPreview] = useState(false)
    const [navigate, setNavigate] = useState(false)


    console.log(files);

    const setImage = (ev) => {
        setPreview(true)
        setFiles(ev.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('username', username)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('file', files)

        // console.log(files);
        axios.post('http://localhost:4000/signup', formData)
            .then(res => {
                console.log(res);
                setNavigate(true)
                alert('SignUp successful')
                
            })
            .catch(err => {
                console.log(err);
            })

            //   console.log(res);
        }
        if(navigate) return <Navigate to={'/login'} />

    return (
        <div className=' flex '>
            <div className="w-full max-w-xs mx-auto">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} encType='multipart/form-data'>
                    <div className='ml-7'>
                        <label >
                            <input
                                type='file'
                                name='file'
                                accept='.png, .jpg, .jpeg'
                                onChange={ev => setImage(ev)}
                                className="hidden "
                            />
                            {!preview ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-48 h-48 py-2 hover:cursor-pointer text-blue-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg> :
                                <img src={URL.createObjectURL(files)}className="w-48 h-48 py-2 rounded-full z-40 hover:cursor-pointer" />
                            }
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username" type="text" placeholder="Username" name='username'
                            value={username} onChange={ev => setUsername(ev.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" type="email" placeholder="Email" name='email'
                            value={email} onChange={ev => setEmail(ev.target.value)} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" type="password" placeholder="******************" name='password'
                            value={password} onChange={ev => setPassword(ev.target.value)} />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign Up
                        </button>
                        <Link className="inline-block align-baseline font-medium text-xs text-blue-500 hover:text-blue-800" to="/login">
                            already a user ? Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupPage