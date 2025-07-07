import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const AISix = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [deepLearning, setDeepLearning] = useState('');
  const [nlp, setNlp] = useState('');
  const [dataScience, setDataScience] = useState('');
  const [cv, setCV] = useState('');
  const [ethics, setEthics] = useState('');

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
        deepLearning:deepLearning,
        nlp:nlp,
        dataScience:dataScience,
        cv:cv,
        ethics:ethics,
        semester: semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);
      setName('');
      setRollNo('');
      setDeepLearning('');
      setNlp('');
      setDataScience('');
      setCV('');
      setEthics('');
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold'>BSAI Sixth Semester</div>

      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Enter Student Name' onChange={(e) => setName(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Enter Student Roll No:' onChange={(e) => setRollNo(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Marks: Deep Learning' onChange={(e) => setDeepLearning(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Marks: Natural Language Processing (NLP)' onChange={(e) => setNlp(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Marks: Data Science' onChange={(e) => setDataScience(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Marks: Computer Vision' onChange={(e) => setCV(e.target.value)} />
      <input type="text" className='border rounded w-full mt-5 p-1 outline-none' placeholder='Marks: Ethics in AI' onChange={(e) => setEthics(e.target.value)} />

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

export default AISix;
