// InformationTechnology.jsx
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

const IT = () => {
  const semesters = [
    {
      title: "1st Semester",
      courses: [
        ["IT 111", "Introduction to Information Technology", "3(2-1)"],
        ["IT 112", "Programming Fundamentals", "4(3-1)"],
        ["IT 113", "English Composition", "3(3-0)"],
        ["IT 114", "Mathematics I", "3(3-0)"],
        ["IT 115", "Physics", "3(2-1)"],
        ["IT 116", "Introduction to Software", "3(2-1)"],
      ],
    },
    {
      title: "2nd Semester",
      courses: [
        ["IT 121", "Object Oriented Programming", "4(3-1)"],
        ["IT 122", "Discrete Mathematics", "3(3-0)"],
        ["IT 123", "Communication Skills", "3(3-0)"],
        ["IT 124", "Digital Logic Design", "3(2-1)"],
        ["IT 125", "Database Fundamentals", "3(2-1)"],
        ["IT 126", "Probability & Statistics", "3(3-0)"],
      ],
    },
    {
      title: "3rd Semester",
      courses: [
        ["IT 211", "Data Structures", "4(3-1)"],
        ["IT 212", "Computer Organization", "3(2-1)"],
        ["IT 213", "Web Technologies", "3(2-1)"],
        ["IT 214", "Software Engineering", "3(3-0)"],
        ["IT 215", "Business Communication", "3(3-0)"],
        ["IT 216", "Islamic Studies / Ethics", "2(2-0)"],
      ],
    },
    {
      title: "4th Semester",
      courses: [
        ["IT 221", "Operating Systems", "3(2-1)"],
        ["IT 222", "Database Management Systems", "3(2-1)"],
        ["IT 223", "Human Computer Interaction", "3(2-1)"],
        ["IT 224", "Entrepreneurship", "3(3-0)"],
        ["IT 225", "Linear Algebra", "3(3-0)"],
        ["IT 226", "Pakistan Studies", "2(2-0)"],
      ],
    },
    {
      title: "5th Semester",
      courses: [
        ["IT 311", "Computer Networks", "3(2-1)"],
        ["IT 312", "Information Security", "3(2-1)"],
        ["IT 313", "Data Mining", "3(3-0)"],
        ["IT 314", "Artificial Intelligence", "3(2-1)"],
        ["IT 315", "Advanced Programming", "3(3-0)"],
        ["IT 316", "Technical & Business Writing", "3(3-0)"],
      ],
    },
    {
      title: "6th Semester",
      courses: [
        ["IT 321", "Mobile Application Development", "3(2-1)"],
        ["IT 322", "Cloud Computing", "3(2-1)"],
        ["IT 323", "E-Commerce", "3(3-0)"],
        ["IT 324", "Software Quality Assurance", "3(2-1)"],
        ["IT 325", "Project Management", "3(3-0)"],
        ["IT 326", "Elective-I", "3(3-0)"],
      ],
    },
    {
      title: "7th Semester",
      courses: [
        ["IT 411", "Final Year Project - I", "3(0-3)"],
        ["IT 412", "Big Data Analytics", "3(2-1)"],
        ["IT 413", "Cybersecurity", "3(2-1)"],
        ["IT 414", "Elective-II", "3(3-0)"],
        ["IT 415", "Elective-III", "3(3-0)"],
        ["IT 416", "Foreign Language", "2(2-0)"],
      ],
    },
    {
      title: "8th Semester",
      courses: [
        ["IT 421", "Final Year Project - II", "3(0-3)"],
        ["IT 422", "Internet of Things", "3(2-1)"],
        ["IT 423", "Elective-IV", "3(3-0)"],
        ["IT 424", "Internship", "3(1-2)"],
        ["IT 425", "Quranic Studies", "0(0-0)"],
      ],
    },
  ];

  const facultyMembers = [
    { name: 'Dr. Jethanand Malhi', title: 'HOD, PhD Information Systems', image: hodImage },
    { name: 'Mr. Jaipal Malhi', title: 'Lecturer, Network Security', image: faculty1 },
    { name: 'Mr. Jaiparkash Malhi', title: 'Assistant Professor, Software Development', image: faculty2 },
    { name: 'Mr. Aneel Kumar', title: 'Lecturer, Database Systems', image: faculty3 },
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
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">Department of Information Technology</h1>

          <p className='mb-6'>
            The Information Technology (IT) department aims to deliver cutting-edge knowledge and tools for students in the field
            of computing, systems analysis, cybersecurity, and database management. The department nurtures talent and leadership
            for future IT professionals.
          </p>

          <h2 className='text-2xl font-semibold mt-6 text-blue-700'>Vision</h2>
          <p className='mb-4'>
            To lead in IT education and produce world-class IT professionals who are ready to innovate and transform industries.
          </p>

          <h2 className='text-2xl font-semibold mt-6 text-blue-700'>Mission</h2>
          <p className='mb-4'>
            To deliver quality education in the IT domain and equip students with hands-on skills, ethical values, and research
            insights to address global tech challenges.
          </p>

          <h2 className='text-2xl font-semibold mt-6 text-blue-700'>Aims and Objectives</h2>
          <ul className='list-disc pl-6 mb-6'>
            <li>To develop IT professionals with technical, communication, and leadership skills.</li>
            <li>To prepare students for problem-solving in real-world computing systems.</li>
            <li>To enhance creativity and innovation in the IT field through projects and research.</li>
            <li>To build industry connections for student exposure and career advancement.</li>
          </ul>

          <h2 className='text-2xl font-semibold mt-6 text-blue-700 mb-10'>Faculty Members</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8'>
            {facultyMembers.map((faculty, i) => (
              <div key={i} className='bg-white shadow rounded  text-center hover:shadow-lg transition-shadow duration-300 w-70 cursor-pointer'>
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className='w-70 h-70 mx-auto   mb-2 border-blue-500 object-cover hover:scale-101 transition-transform duration-300'
                />
                <h3 className='text-lg font-semibold'>{faculty.name}</h3>
                <p className='text-gray-600 pb-5'>{faculty.title}</p>
              </div>
            ))}
          </div>

          <h2 className='text-2xl font-semibold mt-6 text-blue-700'>BS Information Technology Curriculum</h2>
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

export default IT;