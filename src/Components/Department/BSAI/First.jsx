import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const AIFirst = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [computing, setComputing] = useState('');
  const [programming, setProgramming] = useState('');
  const [maths, setMaths] = useState('');
  const [communication, setCommunication] = useState('');
  const [pakStudies, setPakStudies] = useState('');

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
       

      await addDoc(collection(db, "StudentData"), {
        name: name,
        rollNo: rollNo,
        computing: computing,
        programming: programming,
        maths: maths,
        communication: communication,
        pakStudies: pakStudies,
        semester: semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);

      setName('');
      setRollNo('');
      setComputing('');
      setProgramming('');
      setMaths('');
      setCommunication('');
      setPakStudies('');
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold'>BSAI First Semester</div>

      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Enter Student Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Enter Student Roll No' value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Introduction to Computing' value={computing} onChange={(e) => setComputing(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Programming Fundamentals' value={programming} onChange={(e) => setProgramming(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Discrete Mathematics' value={maths} onChange={(e) => setMaths(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Communication Skills' value={communication} onChange={(e) => setCommunication(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Pakistan Studies' value={pakStudies} onChange={(e) => setPakStudies(e.target.value)} />

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

export default AIFirst;
