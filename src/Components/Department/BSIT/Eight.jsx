import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const ITEight = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [fyp2, setFyp2] = useState('');
  const [professional, setProfessional] = useState('');
  const [networkSecurity, setNetworkSecurity] = useState('');
  const [dataScience, setDataScience] = useState('');
  const [ai, setAi] = useState('');

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
        fyp2:fyp2,
        professional:professional,
        networkSecurity:networkSecurity,
        dataScience:dataScience,
        ai:ai,
        semester:semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);

      setName('');
      setRollNo('');
      setFyp2('');
      setProfessional('');
      setNetworkSecurity('');
      setDataScience('');
      setAi('');
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold'>BSIT Eight Semester</div>

      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Enter Student Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Enter Student Roll No' value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Final Year Project - II' value={fyp2} onChange={(e) => setFyp2(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Professional Practices' value={professional} onChange={(e) => setProfessional(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Network Security' value={networkSecurity} onChange={(e) => setNetworkSecurity(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Data Science' value={dataScience} onChange={(e) => setDataScience(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Artificial Intelligence (AI)' value={ai} onChange={(e) => setAi(e.target.value)} />

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

export default ITEight;
