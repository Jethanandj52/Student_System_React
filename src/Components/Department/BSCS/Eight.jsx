import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const CSEight = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [fyp2, setFYP2] = useState('');
  const [professionalPractice, setProfessionalPractice] = useState('');
  const [elective1, setElective1] = useState('');
  const [elective2, setElective2] = useState('');

  const addProduct = async () => {
    try {
     const studentQuery = query(
             collection(db, "StudentData"),
             where("rollNo", "==", rollNo),
             where("department", "==", dept),
             where("semester", "==", semester)
           );
     
           const querySnapshot = await getDocs(studentQuery);
     
           if (!querySnapshot.empty) {
             alert("This student's data is already added for this semester.");
             return;
           }
      const marks = [fyp2, professionalPractice, elective1, elective2];
      const valid = marks.every(mark => !isNaN(mark) && mark >= 0 && mark <= 100);
      if (!valid) {
        alert("Please enter valid marks between 0 and 100.");
        return;
      }

      await addDoc(collection(db, "StudentData"), {
        name,
        rollNo,
        finalYearProject2: fyp2,
        professionalPractice,
        elective1,
        elective2,
        semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);

      // Reset fields
      setName('');
      setRollNo('');
      setFYP2('');
      setProfessionalPractice('');
      setElective1('');
      setElective2('');
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold'>BSCS Eighth Semester</div>

      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Student Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Roll No' value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
      <input type="number" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Final Year Project – II' value={fyp2} onChange={(e) => setFYP2(e.target.value)} />
      <input type="number" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Professional Practices in IT' value={professionalPractice} onChange={(e) => setProfessionalPractice(e.target.value)} />
      <input type="number" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Elective I (e.g., Blockchain)' value={elective1} onChange={(e) => setElective1(e.target.value)} />
      <input type="number" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Elective II (e.g., Ethical Hacking)' value={elective2} onChange={(e) => setElective2(e.target.value)} />

      <div className='flex justify-center items-center gap-5'>
        <button
          onClick={() => popup(false)}
          className='mt-5 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700 active:scale-90 transition-all'
        >
          Close
        </button>
        <button
          onClick={addProduct}
          className='mt-5 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-700 active:scale-90 transition-all'
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CSEight;
