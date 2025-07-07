import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase/firebase-config";

const BsaiR5 = ({ seatNo }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const getGrade = (marks) => {
    const m = parseInt(marks);
    if (m >= 85) return "A+";
    if (m >= 75) return "A";
    if (m >= 65) return "B";
    if (m >= 55) return "C";
    if (m >= 50) return "D";
    return "F";
  };

  const getGPA = (marks) => {
    const m = parseInt(marks);
    if (m >= 85) return 4.0;
    if (m >= 75) return 3.7;
    if (m >= 65) return 3.3;
    if (m >= 55) return 2.7;
    if (m >= 50) return 2.0;
    return 0.0;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recordData = await getDocs(collection(db, "StudentData"));
        const students = [];
        recordData.forEach((doc) => {
          students.push(doc.data());
        });
        setData(students);
      } catch (error) {
        console.error("Error fetching student data: ", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (seatNo) {
      const result = data
        .filter((student) =>
          student.rollNo === seatNo &&
          student.semester === "5" &&
          student.department === "AI"
        )
        .sort((a, b) => parseInt(a.semester) - parseInt(b.semester));
      setFilteredData(result);
    }
  }, [seatNo, data]);

  return (
    <div className="bg-gray-100 p-4">
      {filteredData.length > 0 ? (
        filteredData.map((student, index) => {
          // Subject Marks
          const subjects = [
            { name: "Artificail Intelligence", marks: student.ai },
            { name: "Machine Learning", marks: student.ml },
            { name: "Probability", marks: student.probability },
            { name: "Software Engineering", marks: student.se },
            { name: "Human Computer Interaction", marks: student.hci }
          ];

          const totalGPA = subjects.reduce((sum, subj) => sum + getGPA(subj.marks), 0);
          const gpa = (totalGPA / subjects.length).toFixed(2);
          const cgpa = gpa; // Only 1st semester, so CGPA = GPA

          return (
            <div key={index} className="mb-6 p-4 bg-white shadow rounded">
              <div className='flex justify-between mb-4'>
                <div><strong>Name:</strong> {student.name}</div>
                <div><strong>Roll No:</strong> {student.rollNo}</div>
                <div><strong>Semester:</strong> 5</div>
                <div><strong>Department:</strong> BSAI</div>
              </div>
<table className="w-full mt-4 text-sm text-center border border-gray-300 rounded-lg overflow-hidden">
  <thead className="bg-gray-600 text-white">
    <tr>
      <th className="px-6 py-3 border border-gray-300">Subject</th>
      <th className="px-6 py-3 border border-gray-300">Marks Obtained</th>
      <th className="px-6 py-3 border border-gray-300">Total Marks</th>
      <th className="px-6 py-3 border border-gray-300">Grade</th>
    </tr>
  </thead>
  <tbody className="text-gray-800">
    {subjects.map((subj, i) => (
      <tr key={i} className="hover:bg-gray-100">
        <td className="px-6 py-3 border border-gray-300">{subj.name}</td>
        <td className="px-6 py-3 border border-gray-300">{subj.marks}</td>
        <td className="px-6 py-3 border border-gray-300">100</td>
        <td className="px-6 py-3 border border-gray-300">{getGrade(subj.marks)}</td>
      </tr>
    ))}

    {/* GPA Row */}
    <tr className="bg-gray-100 font-semibold">
      <td colSpan={3} className="px-6 py-3 border border-gray-300">GPA</td>
      <td  className="px-6 py-3 border border-gray-300 text-left">{gpa}</td>
    </tr>

    {/* CGPA Row */}
   
  </tbody>
</table>

            </div>
          );
        })
      ) : (
        // <p>No results found for BSCS Semester 2 with seat no: {seatNo}</p>
     <div></div>
     )}

    </div>
  );
};

export default BsaiR5;
