import React from 'react'
import { RiUserSearchLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";

const SearchBar = () => {
    return (
        <div className="absolute bottom-14 left-10 flex flex-col w-3/5 bg-white p-4 rounded-md gap-1 shadow-sm">
            <p className='text-sky-900 font-semibold text-sm'>Qui cherchez-vous?</p>
            <div className='flex w-full bg-gray-200 rounded-full p-1 text-sm'>
                <span className='w-2/5 flex items-center px-2 border-r border-r-gray-400 rounded-l-2xl'>
                    <RiUserSearchLine size={18} className='text-gray-700'/>
                    <input type='text' placeholder='Nom, spécialité'
                        className='border-0 focus:ring-0 text-gray-700 w-full  bg-gray-200 text-sm' />
                </span>
                <span className='w-2/5 flex items-center px-2 border-r '>
                    <IoLocationOutline size={18} className='text-gray-700'/>
                    <input type='text' placeholder='Ville'
                        className='border-0 focus:ring-0 text-gray-700 w-full bg-gray-200 text-sm' />
                </span>
                <button className='w-1/5 bg-white rounded-r-full text-sky-900 hover:bg-white/90 duration-300 text-sm'>
                    Chercher
                </button>
            </div>
        </div>
    )
}

export default SearchBar
