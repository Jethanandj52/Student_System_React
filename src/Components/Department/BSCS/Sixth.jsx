import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const CSSix = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [infoSec, setInfoSec] = useState('');
  const [compiler, setCompiler] = useState('');
  const [ml, setML] = useState('');
  const [spm, setSPM] = useState('');
  const [parallel, setParallel] = useState('');
  const [elective, setElective] = useState('');

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
        informationSecurity: infoSec,
        compilerConstruction: compiler,
        machineLearning: ml,
        softwareProjectManagement: spm,
        parallelComputing: parallel,
        elective: elective,
        semester: semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);

      // Reset input fields
      setName('');
      setRollNo('');
      setInfoSec('');
      setCompiler('');
      setML('');
      setSPM('');
      setParallel('');
      setElective('');
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold mb-4'>BSCS Sixth Semester</div>

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Enter Student Name' required onChange={(e) => setName(e.target.value)} value={name} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Enter Roll No:' required onChange={(e) => setRollNo(e.target.value)} value={rollNo} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Information Security' onChange={(e) => setInfoSec(e.target.value)} value={infoSec} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Compiler Construction' onChange={(e) => setCompiler(e.target.value)} value={compiler} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Machine Learning' onChange={(e) => setML(e.target.value)} value={ml} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Software Project Management' onChange={(e) => setSPM(e.target.value)} value={spm} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Parallel & Distributed Computing' onChange={(e) => setParallel(e.target.value)} value={parallel} />

      <input type="text" className='border rounded w-full mt-3 p-1 outline-none' placeholder='Marks: Elective Subject (Cloud / Data Science / etc)' onChange={(e) => setElective(e.target.value)} value={elective} />

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

export default CSSix;
