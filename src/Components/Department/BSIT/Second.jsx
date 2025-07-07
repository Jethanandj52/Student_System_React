import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const ITSecond = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [oop, setOOP] = useState('');
  const [communicationSkills, setCommunicationSkills] = useState('');
  const [electronics, setElectronics] = useState('');
  const [discreteMaths, setDiscreteMaths] = useState('');
  const [pakStudies, setPakStudies] = useState('');

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
        communicationSkills: communicationSkills.trim(),
        electronics: electronics.trim(),
        discreteMaths: discreteMaths.trim(),
        pakStudies: pakStudies.trim(),
        semester: semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);

      // Reset all fields
      setName('');
      setRollNo('');
      setOOP('');
      setCommunicationSkills('');
      setElectronics('');
      setDiscreteMaths('');
      setPakStudies('');
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold'>BSIT Second Semester</div>

      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Enter Student Name' onChange={(e) => setName(e.target.value)} value={name} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Enter Roll No' onChange={(e) => setRollNo(e.target.value)} value={rollNo} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Object Oriented Programming' onChange={(e) => setOOP(e.target.value)} value={oop} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Communication Skills' onChange={(e) => setCommunicationSkills(e.target.value)} value={communicationSkills} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Basic Electronics' onChange={(e) => setElectronics(e.target.value)} value={electronics} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Discrete Mathematics' onChange={(e) => setDiscreteMaths(e.target.value)} value={discreteMaths} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Pakistan Studies' onChange={(e) => setPakStudies(e.target.value)} value={pakStudies} />

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

export default ITSecond;
