import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const CSFive = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [webTech, setWebTech] = useState('');
  const [automata, setAutomata] = useState('');
  const [softwareEng, setSoftwareEng] = useState('');
  const [mobileApp, setMobileApp] = useState('');
  const [ai, setAI] = useState('');
  const [professionalPractice, setProfessionalPractice] = useState('');

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
        webTechnologies: webTech,
        automataTheory: automata,
        softwareEngineering: softwareEng,
        mobileAppDevelopment: mobileApp,
        artificialIntelligence: ai,
        professionalPractices: professionalPractice,
        semester: semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);

      // Clear inputs
      setName('');
      setRollNo('');
      setWebTech('');
      setAutomata('');
      setSoftwareEng('');
      setMobileApp('');
      setAI('');
      setProfessionalPractice('');
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold mb-4'>BSCS Fifth Semester</div>

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Enter Student Name' required onChange={(e) => setName(e.target.value)} value={name} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Enter Student Roll No:' required onChange={(e) => setRollNo(e.target.value)} value={rollNo} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Web Technologies' onChange={(e) => setWebTech(e.target.value)} value={webTech} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Theory of Automata' onChange={(e) => setAutomata(e.target.value)} value={automata} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Software Engineering' onChange={(e) => setSoftwareEng(e.target.value)} value={softwareEng} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Mobile App Development' onChange={(e) => setMobileApp(e.target.value)} value={mobileApp} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Artificial Intelligence' onChange={(e) => setAI(e.target.value)} value={ai} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Professional Practices' onChange={(e) => setProfessionalPractice(e.target.value)} value={professionalPractice} />

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

export default CSFive;
