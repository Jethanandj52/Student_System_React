import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config'; // Firebase config ka sahi path dena
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const CSFirst = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [computing, setComputing] = useState('');
  const [programming, setProgramming] = useState('');
  const [physics, setPhysics] = useState('');
  const [calculus, setCalculus] = useState('');
  const [english, setEnglish] = useState('');
  const [pakStudies, setPakStudies] = useState('');

  const addProduct = async () => {
    try {
      // Check if same rollNo + department + semester already exists
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

      // If not found, allow inserting for this semester
      await addDoc(collection(db, "StudentData"), {
        name: name,
        rollNo: rollNo,
        computing: computing,
        programming: programming,
        physics: physics,
        calculus: calculus,
        english: english,
        pakStudies: pakStudies,
        semester: semester,
        department: dept,
      });

      alert("Student added successfully");
      popup(false);

      // Clear inputs
      setName('');
      setRollNo('');
      setComputing('');
      setProgramming('');
      setPhysics('');
      setCalculus('');
      setEnglish('');
      setPakStudies('');
    } catch (error) {
      console.error("Error adding student: ", error);
      alert("Something went wrong while adding the student.");
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold'>BSCS First Semester</div>

      <input
        type="text"
        className='border rounded w-full mt-5 p-1 outline-none'
        placeholder='Enter Student Name'
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        className='border rounded w-full mt-5 p-1 outline-none'
        placeholder='Enter Student Roll No:'
        required
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />

      <input
        type="text"
        className='border rounded w-full mt-3 p-1 outline-none'
        placeholder='Enter Marks of Introduction to Computing'
        required
        value={computing}
        onChange={(e) => setComputing(e.target.value)}
      />

      <input
        type="text"
        className='border rounded w-full mt-3 p-1 outline-none'
        placeholder='Enter Marks of Programming Fundamentals'
        required
        value={programming}
        onChange={(e) => setProgramming(e.target.value)}
      />

      <input
        type="text"
        className='border rounded w-full mt-3 p-1 outline-none'
        placeholder='Enter Marks of Applied Physics'
        required
        value={physics}
        onChange={(e) => setPhysics(e.target.value)}
      />

      <input
        type="text"
        className='border rounded w-full mt-3 p-1 outline-none'
        placeholder='Enter Marks of Calculus & Analytical Geometry'
        required
        value={calculus}
        onChange={(e) => setCalculus(e.target.value)}
      />

      <input
        type="text"
        className='border rounded w-full mt-3 p-1 outline-none'
        placeholder='Enter Marks of English Composition'
        required
        value={english}
        onChange={(e) => setEnglish(e.target.value)}
      />

      <input
        type="text"
        className='border rounded w-full mt-3 p-1 outline-none'
        placeholder='Enter Marks of Pakistan Studies'
        required
        value={pakStudies}
        onChange={(e) => setPakStudies(e.target.value)}
      />

      <div className='flex justify-center items-center gap-5'>
        <button
          onClick={() => popup(false)}
          className='mt-4 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700 active:scale-90 transition-all cursor-pointer'
        >
          Close
        </button>
        <button
          onClick={addProduct}
          className='mt-4 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-700 active:scale-90 transition-all cursor-pointer'
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CSFirst;
