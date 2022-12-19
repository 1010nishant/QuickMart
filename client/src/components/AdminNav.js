import React from 'react'
import { logout } from '../store/reducers/authReducer'
import { useDispatch } from 'react-redux'

const AdminNav = () => {
    const dispatch = useDispatch()
    const adminLogout = () => {
        dispatch(logout())
    }
    return (
        <nav className='w-screen bg-slate-400 h-12 flex flex-row justify-between px-40 p-3 text-lg'>
            <span className='cursor-pointer hover:text-stone-700 active:text-slate-500'>About</span>
            <span className='cursor-pointer hover:text-stone-700 active:text-slate-500' onClick={adminLogout}>Login</span>
        </nav>
    )
}

export default AdminNav