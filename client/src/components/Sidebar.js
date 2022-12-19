import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='h-screen bg-gray-500 w-44 inline-block'>
            <div className='flex flex-col text-white space-y-7 px-5 text-base'>
                <button className='mt-4 text-start'>Products</button>
                <button className='text-start'>Orders</button>
                <button className='text-start'>Customers</button>
                <Link to='/dashboard/categories' className='text-start'>Category</Link>
            </div>
        </div>
        // <div className="min-h-screen flex flex-row bg-gray-100">
        //     <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
        //         <div className="flex items-center justify-center h-20 shadow-md">
        //             <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
        //         </div>
        //         <ul className="flex flex-col py-4">
        //             <li>
        //                 <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        //                     <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
        //                     <span className="text-sm font-medium">Dashboard</span>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        //                     <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className='bx bx-grid-alt'></i></span>
        //                     <span className="text-sm font-medium">Products</span>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        //                     <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className='bx bx-check-square'></i></span>
        //                     <span className="text-sm font-medium">Orders</span>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        //                     <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
        //                     <span className="text-sm font-medium">Shopping</span>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        //                     <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
        //                     <span className="text-sm font-medium">Chat</span>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        //                     <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
        //                     <span className="text-sm font-medium">Profile</span>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        //                     <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell"></i></span>
        //                     <span className="text-sm font-medium">Notifications</span>
        //                     <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
        //                 </a>
        //             </li>
        //             <li>
        //                 <a href="#" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        //                     <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
        //                     <span className="text-sm font-medium">Logout</span>
        //                 </a>
        //             </li>
        //         </ul>
        //     </div>
        // </div>
    )
}

export default Sidebar