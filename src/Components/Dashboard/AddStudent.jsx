import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddStudent = ({search}) => {
  let navigate=useNavigate()
  function pageChange(){
    navigate('/addStudents')
  }
  return (
    <>
    <div onClick={pageChange} className='flex items-center gap-2  text-[20px] hover:bg-blue-200 hover:rounded-2xl hover:text-black cursor-pointer h-10   m-2 py-6  px-2.5'>
        <div>👨‍🎓</div>
        <div>Add Student</div>
    </div>
    </>
  )
}

export default AddStudent