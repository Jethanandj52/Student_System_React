import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const AIFour = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [dsa, setDsa] = useState('');
  const [os, setOs] = useState('');
  const [dataScience, setDataScience] = useState('');
  const [oop, setOop] = useState('');
  const [businessWriting, setBusinessWriting] = useState('');

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
        dsa: dsa,
        os: os,
        dataScience: dataScience,
        oop: oop,
        businessWriting: businessWriting,
        semester: semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);

      setName('');
      setRollNo('');
      setDsa('');
      setOs('');
      setDataScience('');
      setOop('');
      setBusinessWriting('');
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold'>BSAI Fourth Semester</div>

      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Enter Student Name' onChange={(e) => setName(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Enter Student Roll No' onChange={(e) => setRollNo(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Marks: Data Structures & Algorithms' onChange={(e) => setDsa(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Marks: Operating Systems' onChange={(e) => setOs(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Marks: Data Science' onChange={(e) => setDataScience(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Marks: OOP (Java)' onChange={(e) => setOop(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Marks: Business Writing' onChange={(e) => setBusinessWriting(e.target.value)} />

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

export default AIFour;
