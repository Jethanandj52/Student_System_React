import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const AIEight = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [capstone2, setCapstone2] = useState('');
  const [mlOps, setMlOps] = useState('');
  const [dataEthics, setDataEthics] = useState('');
  const [viva, setViva] = useState('');
  const [internship, setInternship] = useState('');

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
        capstone2:capstone2,
        mlOps:mlOps,
        dataEthics:dataEthics,
        viva:viva,
        internship:internship,
        semester: semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);
      setName('');
      setRollNo('');
      setCapstone2('');
      setMlOps('');
      setDataEthics('');
      setViva('');
      setInternship('');
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold'>BSAI Eighth Semester</div>

      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Enter Student Name' onChange={(e) => setName(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Enter Student Roll No' onChange={(e) => setRollNo(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Marks: Capstone Project II' onChange={(e) => setCapstone2(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Marks: AI Model Deployment & MLOps' onChange={(e) => setMlOps(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Marks: Data Ethics & Privacy' onChange={(e) => setDataEthics(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Marks: Final Year Viva' onChange={(e) => setViva(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Marks: Internship / Training' onChange={(e) => setInternship(e.target.value)} />

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

export default AIEight;
