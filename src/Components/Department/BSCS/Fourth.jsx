import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const CSFour = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [database, setDatabase] = useState('');
  const [os, setOS] = useState('');
  const [daa, setDAA] = useState('');
  const [networks, setNetworks] = useState('');
  const [hci, setHCI] = useState('');
  const [math, setMath] = useState('');

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
        database: database,
        operatingSystems: os,
        designAnalysisAlgorithms: daa,
        computerNetworks: networks,
        hci: hci,
        differentialEquations: math,
        semester: semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);

      // Clear form
      setName('');
      setRollNo('');
      setDatabase('');
      setOS('');
      setDAA('');
      setNetworks('');
      setHCI('');
      setMath('');
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold mb-4'>BSCS Fourth Semester</div>

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Enter Student Name' required onChange={(e) => setName(e.target.value)} value={name} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Enter Roll No:' required onChange={(e) => setRollNo(e.target.value)} value={rollNo} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Database Systems' onChange={(e) => setDatabase(e.target.value)} value={database} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Operating Systems' onChange={(e) => setOS(e.target.value)} value={os} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Design & Analysis of Algorithms' onChange={(e) => setDAA(e.target.value)} value={daa} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Computer Networks' onChange={(e) => setNetworks(e.target.value)} value={networks} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Human Computer Interaction (HCI)' onChange={(e) => setHCI(e.target.value)} value={hci} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Differential Equations' onChange={(e) => setMath(e.target.value)} value={math} />

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

export default CSFour;
