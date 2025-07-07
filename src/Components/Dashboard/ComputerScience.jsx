/**
 * Computer Science Department Page with Full Curriculum and Faculty
 * Includes: Department History, Vision, Mission, HOD & Faculty Section
 */

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

const ComputerScience = () => {
const semesters = [
    {
      title: "1st Semester",
      courses: [
        ["GCT 311", "Introduction to Information and Communication Technology", "3(2-1)"],
        ["BCS 312", "Programming Fundamentals", "4(3-1)"],
        ["GEN 313", "Functional English", "3(3-0)"],
        ["GQR 314", "Discrete Structure", "3(3-0)"],
        ["GQR 315", "Calculus and Analytic Geometry", "3(3-0)"],
        ["GNS 316", "Applied Physics", "3(2-1)"],
      ],
    },
    {
      title: "2nd Semester",
      courses: [
        ["BCS 321", "Digital Logic Design", "3(2-1)"],
        ["BCS 322", "Object Oriented Programming", "4(3-1)"],
        ["BCS 323", "Data Structures", "4(3-1)"],
        ["GEN 324", "Expository Writing", "3(3-0)"],
        ["GCC 325", "Civic & Community Engagements", "2(2-0)"],
        ["BCS 326", "Multivariable Calculus", "3(3-0)"],
      ],
    },
    {
      title: "3rd Semester",
      courses: [
        ["BCS 431", "Computer Organization & Assembly Language", "3(2-1)"],
        ["GAH 432", "Professional Practices", "2(2-0)"],
        ["BCS 433", "Database Systems", "4(3-1)"],
        ["BCS 434", "Linear Algebra", "3(3-0)"],
        ["GIS 435", "Islamic Studies / Ethics", "2(2-0)"],
        ["GPS 436", "Ideology and Constitution of Pakistan", "2(2-0)"],
      ],
    },
    {
      title: "4th Semester",
      courses: [
        ["BCS 441", "Analysis of Algorithms", "3(3-0)"],
        ["BCS 442", "Advance Database Management Systems", "3(2-1)"],
        ["BCS 443", "Operating Systems", "3(2-1)"],
        ["GES 444", "Pakistan Studies", "2(2-0)"],
        ["GES 445", "Entrepreneurship & Startup", "2(2-0)"],
        ["BCS 446", "Financial Accounting", "3(3-0)"],
      ],
    },
    {
      title: "5th Semester",
      courses: [
        ["BCS 551", "Mobile Application Development", "3(2-1)"],
        ["BCS 552", "Theory of Automata", "3(3-0)"],
        ["BCS 553", "Computer Architecture", "3(2-1)"],
        ["BCS 554", "Software Engineering", "3(3-0)"],
        ["BCS 555", "Computer Networks", "3(2-1)"],
        ["BCS 556", "Compiler Construction", "3(2-1)"],
      ],
    },
    {
      title: "6th Semester",
      courses: [
        ["BCS 561", "Data Mining", "3(3-0)"],
        ["BCS 562", "Parallel & Distributed Computing", "3(2-1)"],
        ["BCS 563", "Artificial Intelligence", "3(2-1)"],
        ["BCS 564", "Information Security", "3(2-1)"],
        ["BCS 565", "Web Engineering", "3(2-1)"],
        ["BCS 566", "Data Science", "3(2-1)"],
      ],
    },
    {
      title: "7th Semester",
      courses: [
        ["BCS 671", "Final Year Project-1", "3(0-3)"],
        ["BCS 672", "Internet of Things (IoT)", "3(2-1)"],
        ["BCS 673", "HCI & Computer Graphics", "3(2-1)"],
        ["BCS 674", "Probability & Statistics", "3(3-0)"],
        ["GAH 675", "Foreign / Regional Languages", "2(2-0)"],
        ["GCC 676", "Human Rights & Peace Studies", "2(2-0)"],
      ],
    },
    {
      title: "8th Semester",
      courses: [
        ["BCS 681", "Final Year Project-II", "3(0-3)"],
        ["BCS 682", "Cloud Computing", "3(2-1)"],
        ["BCS 683", "Software Testing & Quality Assurance", "3(2-1)"],
        ["GEN 684", "Technical Business Writing", "3(3-0)"],
        ["BCS 684", "Internship", "3(1-2)"],
        ["BCS 485", "Quranic Studies", "0(0-0)"],
      ],
    },
  ];


  const facultyMembers = [
    { name: 'Prof. Dr. Jethanand Malhi', title: 'HOD, PhD Software Engineering', image: hodImage },
    { name: 'Mr. Jaipal Malhi', title: 'Lecturer, Data Structures', image: faculty1 },
    { name: 'Mr. Jaiparkash Malhi', title: 'Assistant Professor, AI & ML', image: faculty2 },
    { name: 'Mr. Aneel Kumar', title: 'Lecturer, Web Technologies', image: faculty3 },
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
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">Department of Computer Science</h1>

          {/* Department History */}
          <p className='mb-6'>
            Computer science (CS) is thinking, creating and inventing as well as conceptualizing,
            visualizing and communicating. Computer science bridges disciplinary boundaries, linking
            people and ideas together. Computer science is the extreme sport of academic pursuits,
            where you will encounter logic, philosophy, engineering, gaming, economics, art,
            aesthetics, law, ethics, social responsibility, and of course math and science.
          </p>

          {/* Vision */}
          <h2 className='text-2xl font-semibold mt-6 text-blue-700'>Vision</h2>
          <p className='mb-4'>
            To provide quality education focusing on the market trends and demands using computing
            systems and applications.
          </p>

          {/* Mission */}
          <h2 className='text-2xl font-semibold mt-6 text-blue-700'>Mission</h2>
          <p className='mb-4'>
            To impart the highly technical information on issues involving computer communication and
            networking, security, software development, database management systems, programming, and
            to examine the features, attributes, technical issues, and concepts in these areas.
          </p>

          {/* Aims & Objectives */}
          <h2 className='text-2xl font-semibold mt-6 text-blue-700'>Aims and Objectives</h2>
          <ul className='list-disc pl-6 mb-6'>
            <li>Enhance students' ability to analyze and solve Computing problems.</li>
            <li>Prepare students to be effective oral and written communicators and team players.</li>
            <li>Train the next generation of Computer Scientists with latest developments and research.</li>
            <li>Provide enterprise skills through industrially-related projects.</li>
            <li>Develop software systems for companies in information systems and networking.</li>
          </ul>

          {/* Degree Programs */}
          <h2 className='text-2xl font-semibold mt-6 text-blue-700'>Degree Programs</h2>
          <ul className='list-disc pl-6 mb-6'>
            <li>BS Computer Science (4-Year / 8 Semesters)</li>
            <li>BS Artificial Intelligence (4-Year / 8 Semesters)</li>
          </ul>

          {/* Faculty Section */}
          <h2 className='text-2xl font-semibold mt-6 text-blue-700 mb-10'>Faculty Members</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8'>
            {facultyMembers.map((faculty, i) => (
              <div key={i} className='bg-white shadow rounded w-70 text-center cursor-pointer hover:shadow-lg transition-shadow duration-300 rounded-l rounded-r'>
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className='w-70 h-70 mx-auto  mb-2   border-blue-500 object-cover hover:scale-101 transition-transform duration-300 rounded-l rounded-r'
                
                />
                <h3 className='text-lg font-semibold'>{faculty.name}</h3>
                <p className='text-gray-600'>{faculty.title}</p>
              </div>
            ))}
          </div>

          {/* Semesters */}
          <h2 className='text-2xl font-semibold mt-6 text-blue-700'>BS Computer Science Curriculum</h2>
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

export default ComputerScience;