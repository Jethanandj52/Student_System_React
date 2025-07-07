import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const ITSeventh = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [cloudComputing, setCloudComputing] = useState('');
  const [infoSecurity, setInfoSecurity] = useState('');
  const [spm, setSpm] = useState('');
  const [hci, setHci] = useState('');
  const [iot, setIot] = useState('');

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
        cloudComputing:cloudComputing,
        infoSecurity:infoSecurity,
        spm:spm,
        hci:hci,
        iot:iot,
        semester:semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);

      // Clear fields
      setName('');
      setRollNo('');
      setCloudComputing('');
      setInfoSecurity('');
      setSpm('');
      setHci('');
      setIot('');
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold'>BSIT Seventh Semester</div>

      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Enter Student Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Enter Student Roll No' value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Cloud Computing' value={cloudComputing} onChange={(e) => setCloudComputing(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Information Security' value={infoSecurity} onChange={(e) => setInfoSecurity(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Software Project Management (SPM)' value={spm} onChange={(e) => setSpm(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Human Computer Interaction (HCI)' value={hci} onChange={(e) => setHci(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: IoT (Internet of Things)' value={iot} onChange={(e) => setIot(e.target.value)} />

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

export default ITSeventh;
