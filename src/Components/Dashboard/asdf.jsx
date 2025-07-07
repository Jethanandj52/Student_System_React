import React from "react";

const CSDepartment = () => {
  return (
    <div className="p-6 space-y-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">Department of Computer Science</h1>
        <p className="text-lg text-gray-600">BS Computer Science & Artificial Intelligence</p>
      </div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-xl rounded-2xl p-6 border-t-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Vision</h2>
          <p className="text-gray-700">
            To provide quality education focusing on the market trends and demands using computing systems and applications.
          </p>
        </div>
        <div className="bg-white shadow-xl rounded-2xl p-6 border-t-4 border-green-500">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Mission</h2>
          <p className="text-gray-700">
            To impart highly technical information on issues involving computer communication and networking, security, software development, database management systems, and programming.
          </p>
        </div>
      </div>

      {/* Aims and Objectives */}
      <div className="bg-white shadow-xl rounded-2xl p-6 border-l-4 border-purple-500">
        <h2 className="text-2xl font-semibold text-purple-700 mb-3">Aims & Objectives</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Enhance students' capability to analyze and solve computing problems.</li>
          <li>Prepare effective oral and written communicators for multidisciplinary teams.</li>
          <li>Prepare the next generation of computer scientists aware of the latest developments.</li>
          <li>Develop enterprise skills via industrially-related project work.</li>
          <li>Enable graduates to design innovative systems to meet society's needs.</li>
          <li>Utilize talent in software system production and development for companies.</li>
        </ul>
      </div>

      {/* Degree Programs */}
      <div className="bg-white shadow-xl rounded-2xl p-6 border-t-4 border-indigo-500">
        <h2 className="text-2xl font-semibold text-indigo-700 mb-2">Degree Programs</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>BS Computer Science (4-Year / 8 Semesters)</li>
          <li>BS Artificial Intelligence (4-Year / 8 Semesters)</li>
        </ul>
      </div>

      {/* Semester-wise Courses Table */}
      <div className="bg-white shadow-xl rounded-2xl p-6 border-l-4 border-blue-500">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Semester-wise Courses (BSCS)</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-left border border-gray-300">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-2">Semester</th>
                <th className="px-4 py-2">Course Title</th>
                <th className="px-4 py-2">Credit Hours</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              {/* Sample Rows - Add more programmatically later */}
              <tr>
                <td className="px-4 py-2">1st</td>
                <td className="px-4 py-2">Programming Fundamentals</td>
                <td className="px-4 py-2">4(3-1)</td>
              </tr>
              <tr>
                <td className="px-4 py-2">1st</td>
                <td className="px-4 py-2">Discrete Structures</td>
                <td className="px-4 py-2">3(3-0)</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2nd</td>
                <td className="px-4 py-2">Data Structures</td>
                <td className="px-4 py-2">4(3-1)</td>
              </tr>
              <tr>
                <td className="px-4 py-2">3rd</td>
                <td className="px-4 py-2">Database Systems</td>
                <td className="px-4 py-2">4(3-1)</td>
              </tr>
              <tr>
                <td className="px-4 py-2">6th</td>
                <td className="px-4 py-2">Artificial Intelligence</td>
                <td className="px-4 py-2">3(2-1)</td>
              </tr>
              <tr>
                <td className="px-4 py-2">7th</td>
                <td className="px-4 py-2">Final Year Project - I</td>
                <td className="px-4 py-2">3(0-3)</td>
              </tr>
              <tr>
                <td className="px-4 py-2">8th</td>
                <td className="px-4 py-2">Cloud Computing</td>
                <td className="px-4 py-2">3(2-1)</td>
              </tr>
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-2">Note: Full course structure includes 8 semesters. You can scroll or expand as needed.</p>
        </div>
      </div>
    </div>
  );
};

export default CSDepartment;
