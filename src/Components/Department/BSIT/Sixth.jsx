import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const ITSix = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [computerGraphics, setComputerGraphics] = useState('');
  const [distributedDatabases, setDistributedDatabases] = useState('');
  const [mobileAppDev, setMobileAppDev] = useState('');
  const [professionalPractices, setProfessionalPractices] = useState('');
  const [researchMethods, setResearchMethods] = useState('');

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
        computerGraphics:computerGraphics,
        distributedDatabases:distributedDatabases,
        mobileAppDev:mobileAppDev,
        professionalPractices:professionalPractices,
        researchMethods:researchMethods,
        semester:semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);

      // Clear input fields
      setName('');
      setRollNo('');
      setComputerGraphics('');
      setDistributedDatabases('');
      setMobileAppDev('');
      setProfessionalPractices('');
      setResearchMethods('');
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold'>BSIT Sixth Semester</div>

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Enter Student Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Enter Student Roll No' value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Computer Graphics' value={computerGraphics} onChange={(e) => setComputerGraphics(e.target.value)} />
      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Distributed Databases' value={distributedDatabases} onChange={(e) => setDistributedDatabases(e.target.value)} />
      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Mobile App Development' value={mobileAppDev} onChange={(e) => setMobileAppDev(e.target.value)} />
      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Professional Practices' value={professionalPractices} onChange={(e) => setProfessionalPractices(e.target.value)} />
      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Research Methods in IT' value={researchMethods} onChange={(e) => setResearchMethods(e.target.value)} />

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

export default ITSix;
