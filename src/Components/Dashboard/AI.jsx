// AI.jsx
import React from 'react';
import Dashboard from './Dashboard';
import AddStudent from './AddStudent';
import Record from './Record';
import Logout from './Logout';
import User from './User';
import searching from './Images/searching.svg';
import hodImage from './Images/hod.jpg';
import faculty1 from './Images/hod.jpg';
import faculty2 from './Images/hod.jpg';
import faculty3 from './Images/hod.jpg';

const AI = () => {
  const semesters = [
    {
      title: "1st Semester",
      courses: [
        ["AI 111", "Introduction to AI", "3(2-1)"],
        ["AI 112", "Programming Fundamentals", "4(3-1)"],
        ["AI 113", "Discrete Mathematics", "3(3-0)"],
        ["AI 114", "Linear Algebra", "3(3-0)"],
        ["AI 115", "English Composition", "3(3-0)"],
        ["AI 116", "Basic Electronics", "3(2-1)"],
      ],
    },
    {
      title: "2nd Semester",
      courses: [
        ["AI 121", "Object Oriented Programming", "4(3-1)"],
        ["AI 122", "Probability and Statistics", "3(3-0)"],
        ["AI 123", "Communication Skills", "3(3-0)"],
        ["AI 124", "Calculus", "3(3-0)"],
        ["AI 125", "Digital Logic Design", "3(2-1)"],
        ["AI 126", "Ethics in Technology", "2(2-0)"],
      ],
    },
    {
      title: "3rd Semester",
      courses: [
        ["AI 211", "Data Structures", "4(3-1)"],
        ["AI 212", "Artificial Intelligence", "3(2-1)"],
        ["AI 213", "Database Systems", "3(2-1)"],
        ["AI 214", "Human Computer Interaction", "3(2-1)"],
        ["AI 215", "Islamic Studies / Ethics", "2(2-0)"],
        ["AI 216", "Technical Writing", "3(3-0)"],
      ],
    },
    {
      title: "4th Semester",
      courses: [
        ["AI 221", "Operating Systems", "3(2-1)"],
        ["AI 222", "Machine Learning", "3(2-1)"],
        ["AI 223", "Software Engineering", "3(3-0)"],
        ["AI 224", "Computer Organization", "3(2-1)"],
        ["AI 225", "Pakistan Studies", "2(2-0)"],
        ["AI 226", "Entrepreneurship", "2(2-0)"],
      ],
    },
    {
      title: "5th Semester",
      courses: [
        ["AI 311", "Computer Vision", "3(2-1)"],
        ["AI 312", "Deep Learning", "3(2-1)"],
        ["AI 313", "Natural Language Processing", "3(2-1)"],
        ["AI 314", "Software Project Management", "3(3-0)"],
        ["AI 315", "Cloud Computing", "3(2-1)"],
        ["AI 316", "Elective-I", "3(3-0)"],
      ],
    },
    {
      title: "6th Semester",
      courses: [
        ["AI 321", "Big Data Analytics", "3(2-1)"],
        ["AI 322", "Robotics", "3(2-1)"],
        ["AI 323", "IoT", "3(2-1)"],
        ["AI 324", "Information Security", "3(2-1)"],
        ["AI 325", "Mobile App Development", "3(2-1)"],
        ["AI 326", "Elective-II", "3(3-0)"],
      ],
    },
    {
      title: "7th Semester",
      courses: [
        ["AI 411", "Final Year Project - I", "3(0-3)"],
        ["AI 412", "Ethical Hacking", "3(2-1)"],
        ["AI 413", "Elective-III", "3(3-0)"],
        ["AI 414", "Elective-IV", "3(3-0)"],
        ["AI 415", "Foreign Language", "2(2-0)"],
        ["AI 416", "Professional Practices", "2(2-0)"],
      ],
    },
    {
      title: "8th Semester",
      courses: [
        ["AI 421", "Final Year Project - II", "3(0-3)"],
        ["AI 422", "Internship", "3(1-2)"],
        ["AI 423", "Quranic Studies", "0(0-0)"],
        ["AI 424", "Elective-V", "3(3-0)"],
      ],
    },
  ];

  const facultyMembers = [
    { name: 'Dr. Jethanand Malhi', title: 'HOD, PhD Artificial Intelligence', image: hodImage },
    { name: 'Mr. Jaipal Malhi', title: 'Lecturer, Machine Learning', image: faculty1 },
    { name: 'Mr. Jaiparkash Malhi', title: 'Assistant Professor, Robotics', image: faculty2 },
    { name: 'Mr. Aneel Kumar', title: 'Lecturer, Computer Vision', image: faculty3 },
  ];

  return (
    <div className='grid grid-cols-[280px_1fr] grid-rows-[70px_1fr] h-screen overflow-hidden'>
      <div className='bg-gray-900 text-white row-span-2 text-center'>
        <User />
        <Dashboard />
        <AddStudent />
        <Record />
        <div className='absolute bottom-4 w-70'>
          <Logout />
        </div>
      </div>

      <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
             <div className="text-2xl font-bold text-white-900 ">
               Student Dashboard
             </div>
             <div className="border w-100 rounded p-1 border-white flex justify-between px-4">
               <input
                 type="text"
                 placeholder="searching..."
                 className="w-full outline-none"
               />
               <img src={searching} alt="" className="cursor-pointer" />
             </div>
             <div className="flex gap-10">
                 <div className="text-white text-xl cursor-pointer">🌓</div>
            <span className="text-white text-xl cursor-pointer">🔔</span>
            <span className="text-white text-xl cursor-pointer">👤</span>
             </div>
           </div>

      <div className='overflow-y-scroll bg-gray-100 text-gray-800 p-6'>
        <div className='max-w-5xl mx-auto'>
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">Department of Artificial Intelligence</h1>

          <p className='mb-6'>
            The Artificial Intelligence (AI) department is committed to educating students in intelligent systems,
            machine learning, deep learning, and data science to prepare them for future challenges in AI-based innovations.
          </p>

          <h2 className='text-2xl font-semibold mt-6 text-blue-700'>Vision</h2>
          <p className='mb-4'>
            To be a pioneer in AI education and innovation that empowers students to lead globally in artificial intelligence applications.
          </p>

          <h2 className='text-2xl font-semibold mt-6 text-blue-700'>Mission</h2>
          <p className='mb-4'>
            To foster excellence in AI research, education, and applications by equipping students with theoretical foundations
            and practical experience in intelligent technologies.
          </p>

          <h2 className='text-2xl font-semibold mt-6 text-blue-700'>Aims and Objectives</h2>
          <ul className='list-disc pl-6 mb-6'>
            <li>To provide solid grounding in AI fundamentals and modern applications.</li>
            <li>To develop innovative thinking in machine learning and robotics.</li>
            <li>To prepare students for ethical AI development and deployment.</li>
            <li>To encourage research, creativity, and collaboration in intelligent systems.</li>
          </ul>

          <h2 className='text-2xl font-semibold mt-6 text-blue-700 mb-10'>Faculty Members</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8' >
            {facultyMembers.map((faculty, i) => (
              <div key={i} className='bg-white shadow rounded text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer w-70'>
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className='w-70 h-70 mx-auto  mb-2 border-blue-500 object-cover hover:scale-101 transition-transform duration-300'
                />
                <h3 className='text-lg font-semibold'>{faculty.name}</h3>
                <p className='text-gray-600 pb-5'>{faculty.title}</p>
              </div>
            ))}
          </div>

          <h2 className='text-2xl font-semibold mt-6 text-blue-700'>BS Artificial Intelligence Curriculum</h2>
          {semesters.map((sem, idx) => (
            <div key={idx} className='mb-8'>
              <h3 className='text-xl font-bold mb-2'>{sem.title}</h3>
              <table className='w-full border border-gray-300'>
                <thead className='bg-gray-200'>
                  <tr>
                    <th className='p-2 border'>S.No</th>
                    <th className='p-2 border'>Course Code</th>
                    <th className='p-2 border'>Course Title</th>
                    <th className='p-2 border'>Credit Hours</th>
                  </tr>
                </thead>
                <tbody>
                  {sem.courses.map(([code, title, credit], i) => (
                    <tr key={i} className='bg-white even:bg-gray-100'>
                      <td className='p-2 border'>{i + 1}</td>
                      <td className='p-2 border'>{code}</td>
                      <td className='p-2 border'>{title}</td>
                      <td className='p-2 border'>{credit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AI;
