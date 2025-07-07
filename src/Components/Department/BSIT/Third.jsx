import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const ITThird = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [dataStructures, setDataStructures] = useState('');
  const [dll, setDLL] = useState('');
  const [probability, setProbability] = useState('');
  const [os, setOS] = useState('');
  const [technicalWriting, setTechnicalWriting] = useState('');

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
        name: name.trim(),
        rollNo: rollNo.trim().toUpperCase(),
        dataStructures: dataStructures.trim(),
        dll: dll.trim(),
        probability: probability.trim(),
        os: os.trim(),
        technicalWriting: technicalWriting.trim(),
        semester: semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);

      // Reset fields
      setName('');
      setRollNo('');
      setDataStructures('');
      setDLL('');
      setProbability('');
      setOS('');
      setTechnicalWriting('');
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold'>BSIT Third Semester</div>

      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Enter Student Name' onChange={(e) => setName(e.target.value)} value={name} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Enter Roll No' onChange={(e) => setRollNo(e.target.value)} value={rollNo} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Data Structures' onChange={(e) => setDataStructures(e.target.value)} value={dataStructures} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Digital Logic Design' onChange={(e) => setDLL(e.target.value)} value={dll} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Probability & Statistics' onChange={(e) => setProbability(e.target.value)} value={probability} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Operating Systems' onChange={(e) => setOS(e.target.value)} value={os} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Technical Report Writing' onChange={(e) => setTechnicalWriting(e.target.value)} value={technicalWriting} />

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

export default ITThird;
