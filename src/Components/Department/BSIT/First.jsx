import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const ITFirst = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [programming, setProgramming]= useState('');
  const [ict, setICT] = useState('');
  const [calculus, setCalculus] = useState('');
  const [english, setEnglish] = useState('');
  const [islamic, setIslamic] = useState('');

  const addProduct = async () => {
    if(name==""|| rollNo==""|| programming==""|| ict==""|| calculus=="" || english=="" || islamic==""){
      alert("please enter some field ")
    }else{

      
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
          rollNo: rollNo ,
          programming: programming ,
          ICT: ict,
          calculus: calculus ,
          english: english ,
          islamicStudies: islamic ,
          semester: semester,
          department: dept
        });
        
        alert("Student added successfully");
        popup(false);
        
        setName('');
        setRollNo('');
        setPF('');
        setICT('');
        setCalculus('');
        setEnglish('');
        setIslamic('');
      } catch (error) {
        console.error("Error adding student: ", error);
      }
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold'>BSIT First Semester</div>
      
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Enter Student Name' onChange={(e) => setName(e.target.value)} value={name}   />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Enter Roll No' onChange={(e) => setRollNo(e.target.value)} value={rollNo}  />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Programming Fundamentals' onChange={(e) => setProgramming(e.target.value)} value={programming}  />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: ICT' onChange={(e) => setICT(e.target.value)} value={ict}  />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Calculus' onChange={(e) => setCalculus(e.target.value)} value={calculus}  />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: English Composition' onChange={(e) => setEnglish(e.target.value)} value={english}  />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Islamic Studies' onChange={(e) => setIslamic(e.target.value)} value={islamic}  />

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

export default ITFirst;
