import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const ITFour = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [oop, setOOP] = useState('');
  const [networks, setNetworks] = useState('');
  const [dbms, setDBMS] = useState('');
  const [softwareEngineering, setSoftwareEngineering] = useState('');
  const [islPak, setIslPak] = useState('');

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
        oop: oop.trim(),
        networks: networks.trim(),
        dbms: dbms.trim(),
        softwareEngineering: softwareEngineering.trim(),
        islPak: islPak.trim(),
        semester: semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);

      // Reset fields
      setName('');
      setRollNo('');
      setOOP('');
      setNetworks('');
      setDBMS('');
      setSoftwareEngineering('');
      setIslPak('');
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold'>BSIT Fourth Semester</div>

      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Enter Student Name' onChange={(e) => setName(e.target.value)} value={name} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Enter Roll No' onChange={(e) => setRollNo(e.target.value)} value={rollNo} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: OOP' onChange={(e) => setOOP(e.target.value)} value={oop} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Computer Networks' onChange={(e) => setNetworks(e.target.value)} value={networks} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: DBMS' onChange={(e) => setDBMS(e.target.value)} value={dbms} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Software Engineering' onChange={(e) => setSoftwareEngineering(e.target.value)} value={softwareEngineering} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Islamic & Pakistan Studies' onChange={(e) => setIslPak(e.target.value)} value={islPak} />

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

export default ITFour;
