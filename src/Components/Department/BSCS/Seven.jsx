import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const CSSeventh = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [fyp, setFYP] = useState('');
  const [ir, setIR] = useState('');
  const [sqe, setSQE] = useState('');
  const [elective1, setElective1] = useState('');
  const [elective2, setElective2] = useState('');

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
      // Optional validation: check marks between 0–100
      const marks = [fyp, ir, sqe, elective1, elective2];
      const valid = marks.every(mark => !isNaN(mark) && mark >= 0 && mark <= 100);
      if (!valid) {
        alert("Please enter valid marks between 0 and 100.");
        return;
      }

      await addDoc(collection(db, "StudentData"), {
        name,
        rollNo,
        fyp1: fyp,
        informationRetrieval: ir,
        softwareQualityEngineering: sqe,
        elective1,
        elective2,
        semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);

      setName('');
      setRollNo('');
      setFYP('');
      setIR('');
      setSQE('');
      setElective1('');
      setElective2('');
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold'>BSCS Seventh Semester</div>

      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Student Name' onChange={(e) => setName(e.target.value)} value={name} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Roll No' onChange={(e) => setRollNo(e.target.value)} value={rollNo} />
      <input type="number" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Final Year Project I' onChange={(e) => setFYP(e.target.value)} value={fyp} />
      <input type="number" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Information Retrieval' onChange={(e) => setIR(e.target.value)} value={ir} />
      <input type="number" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Software Quality Engineering' onChange={(e) => setSQE(e.target.value)} value={sqe} />
      <input type="number" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Elective I (e.g., Cloud Computing)' onChange={(e) => setElective1(e.target.value)} value={elective1} />
      <input type="number" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Elective II (e.g., IT Audit)' onChange={(e) => setElective2(e.target.value)} value={elective2} />

      <div className='flex justify-center items-center gap-5'>
        <button
          onClick={() => popup(false)}
          className='mt-5 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700 active:scale-90 transition-all'
        >
          Close
        </button>
        <button
          onClick={addProduct}
          className='mt-5 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-700 active:scale-90 transition-all'
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default CSSeventh;
