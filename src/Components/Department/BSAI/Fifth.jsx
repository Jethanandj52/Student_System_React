import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const AIFive = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [ai, setAI] = useState('');
  const [ml, setML] = useState('');
  const [probability, setProbability] = useState('');
  const [se, setSE] = useState('');
  const [hci, setHCI] = useState('');

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
        ai: ai,
        ml: ml,
        probability: probability,
        se: se,
        hci: hci,
        semester: semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);

      setName('');
      setRollNo('');
      setAI('');
      setML('');
      setProbability('');
      setSE('');
      setHCI('');
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold'>BSAI Fifth Semester</div>

      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Enter Student Name' onChange={(e) => setName(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Enter Student Roll No:' onChange={(e) => setRollNo(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Marks: Artificial Intelligence' onChange={(e) => setAI(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Marks: Machine Learning' onChange={(e) => setML(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Marks: Probability & Statistics' onChange={(e) => setProbability(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Marks: Software Engineering' onChange={(e) => setSE(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Marks: Human Computer Interaction (HCI)' onChange={(e) => setHCI(e.target.value)} />

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

export default AIFive;
