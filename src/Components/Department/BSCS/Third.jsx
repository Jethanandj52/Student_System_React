import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config'; // make sure the path is correct
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const CSThird = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [dataStructures, setDataStructures] = useState('');
  const [assembly, setAssembly] = useState('');
  const [probability, setProbability] = useState('');
  const [softwareEng, setSoftwareEng] = useState('');
  const [writing, setWriting] = useState('');

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
        dataStructures: dataStructures,
        assemblyLanguage: assembly,
        probability: probability,
        softwareEngineering: softwareEng,
        technicalWriting: writing,
        semester: semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);

      // Reset all fields
      setName('');
      setRollNo('');
      setDataStructures('');
      setAssembly('');
      setProbability('');
      setSoftwareEng('');
      setWriting('');
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold mb-4'>BSCS Third Semester</div>

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Enter Student Name' onChange={(e) => setName(e.target.value)} value={name} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Enter Student Roll No:' onChange={(e) => setRollNo(e.target.value)} value={rollNo} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Data Structures & Algorithms' onChange={(e) => setDataStructures(e.target.value)} value={dataStructures} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Computer Org & Assembly Language' onChange={(e) => setAssembly(e.target.value)} value={assembly} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Probability & Statistics' onChange={(e) => setProbability(e.target.value)} value={probability} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Software Engineering' onChange={(e) => setSoftwareEng(e.target.value)} value={softwareEng} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Technical & Business Writing' onChange={(e) => setWriting(e.target.value)} value={writing} />

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

export default CSThird;
