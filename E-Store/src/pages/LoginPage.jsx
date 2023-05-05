import React from 'react'
import { Navigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import axios from 'axios'

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const {setUser} = useContext(UserContext);

  async function handleLoginSubmit(ev) 
  {
    ev.preventDefault()
    try {
      const { data } = await axios.post('/login', { email, password })
      setUser(data);
      alert('Login successful')
      setRedirect(true)
    } catch (e) {
      alert('Login Failed')
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className=' flex '>
      <div className="w-full max-w-xs mx-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLoginSubmit} >
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
            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password" type="password" placeholder="******************" name='password'
              value={password} onChange={ev => setPassword(ev.target.value)} />
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage