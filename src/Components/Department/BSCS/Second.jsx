import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config'; // Make sure this path is correct
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const CSSecond = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [oop, setOOP] = useState('');
  const [dld, setDLD] = useState('');
  const [discrete, setDiscrete] = useState('');
  const [communication, setCommunication] = useState('');
  const [islamic, setIslamic] = useState('');
  const [linearAlgebra, setLinearAlgebra] = useState('');

  const addProduct = async () => {
    try {
      // Check if this student already has data for this semester in this department
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
        oop: oop,
        dld: dld,
        discrete: discrete,
        communication: communication,
        islamic: islamic,
        linearAlgebra: linearAlgebra,
        semester: semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);

      // Reset form
      setName('');
      setRollNo('');
      setOOP('');
      setDLD('');
      setDiscrete('');
      setCommunication('');
      setIslamic('');
      setLinearAlgebra('');
    } catch (error) {
      console.error("Error adding student: ", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold mb-4'>BSCS Second Semester</div>

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Enter Student Name' required onChange={(e) => setName(e.target.value)} value={name} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Enter Roll No.' required onChange={(e) => setRollNo(e.target.value)} value={rollNo} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Object Oriented Programming' onChange={(e) => setOOP(e.target.value)} value={oop} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Digital Logic Design' onChange={(e) => setDLD(e.target.value)} value={dld} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Discrete Structures' onChange={(e) => setDiscrete(e.target.value)} value={discrete} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Communication Skills' onChange={(e) => setCommunication(e.target.value)} value={communication} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Islamic Studies / Ethics' onChange={(e) => setIslamic(e.target.value)} value={islamic} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Linear Algebra' onChange={(e) => setLinearAlgebra(e.target.value)} value={linearAlgebra} />

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

export default CSSecond;
