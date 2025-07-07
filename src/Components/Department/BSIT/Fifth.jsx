import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const ITFive = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [dataWarehousing, setDataWarehousing] = useState('');
  const [projectManagement, setProjectManagement] = useState('');
  const [operatingSystems, setOperatingSystems] = useState('');
  const [ecommerce, setEcommerce] = useState('');
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
        dataWarehousing: dataWarehousing.trim(),
        projectManagement: projectManagement.trim(),
        operatingSystems: operatingSystems.trim(),
        ecommerce: ecommerce.trim(),
        technicalWriting: technicalWriting.trim(),
        semester: semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);

      // Reset form
      setName('');
      setRollNo('');
      setDataWarehousing('');
      setProjectManagement('');
      setOperatingSystems('');
      setEcommerce('');
      setTechnicalWriting('');
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold mb-4'>BSIT Fifth Semester</div>

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Enter Student Name' onChange={(e) => setName(e.target.value)} value={name} />
      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Enter Roll No' onChange={(e) => setRollNo(e.target.value)} value={rollNo} />
      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Data Warehousing' onChange={(e) => setDataWarehousing(e.target.value)} value={dataWarehousing} />
      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: IT Project Management' onChange={(e) => setProjectManagement(e.target.value)} value={projectManagement} />
      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Operating Systems' onChange={(e) => setOperatingSystems(e.target.value)} value={operatingSystems} />
      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: E-Commerce' onChange={(e) => setEcommerce(e.target.value)} value={ecommerce} />
      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Technical & Business Writing' onChange={(e) => setTechnicalWriting(e.target.value)} value={technicalWriting} />

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

export default ITFive;
