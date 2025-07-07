 import React from 'react'
 import userImg from '../Dashboard/Images/user.svg'
 
 const User = () => {
     let userName="Jethanand"
     let userEmail="jethanandj52@gmail.com"
   return (
     <>
 <div className='p-4 border-b' >
        <div className='flex gap-2 flex-col items-center'>

        <div>
            <img src={userImg} alt="" srcSet="" className='w-18 text-white fill-current'/>
        </div>
        <div className='text-[18px] font-bold '>
            <div className='text-blue-300 mb-1'>{userName}</div>
            <div>{userEmail}</div>
        </div>
        </div>
    </div> 
     </>
   )
 }
 
 export default User