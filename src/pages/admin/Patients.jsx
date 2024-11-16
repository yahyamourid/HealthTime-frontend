import React from 'react'
import SideBarAdmin from '../../components/admin/SideBarAdmin'
const Patients = () => {
    return (
        <div className='flex items-start justify-center bg-whiteSmoke w-full min-h-screen font-[Lato]'>
            <SideBarAdmin />
            <div className="flex ml-1/6 flex-col items-center justify-center w-2/3 mt-10">
                patients
            </div>
        </div>
    )
}

export default Patients