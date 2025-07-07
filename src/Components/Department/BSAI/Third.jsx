import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const AIThird = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [statistics, setStatistics] = useState('');
  const [discreteStructures, setDiscreteStructures] = useState('');
  const [coaa, setCoaa] = useState('');
  const [python, setPython] = useState('');
  const [communicationSkills, setCommunicationSkills] = useState('');

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
        statistics: statistics,
        discreteStructures: discreteStructures,
        coaa: coaa,
        python: python,
        communicationSkills: communicationSkills,
        semester: semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);

      // Reset all fields
      setName('');
      setRollNo('');
      setStatistics('');
      setDiscreteStructures('');
      setCoaa('');
      setPython('');
      setCommunicationSkills('');
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold'>BSAI Third Semester</div>

      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Enter Student Name' onChange={(e) => setName(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Enter Student Roll No' onChange={(e) => setRollNo(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Probability & Statistics' onChange={(e) => setStatistics(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Discrete Structures' onChange={(e) => setDiscreteStructures(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: CO & Assembly Language' onChange={(e) => setCoaa(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Programming in Python' onChange={(e) => setPython(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Communication Skills' onChange={(e) => setCommunicationSkills(e.target.value)} />

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

export default AIThird;
