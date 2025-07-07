import React, { useState } from 'react';
import { db } from '../../../Firebase/firebase-config';
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

const AISecond = ({ popup, semester, dept }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [oop, setOop] = useState('');
  const [linearAlgebra, setLinearAlgebra] = useState('');
  const [dataStructures, setDataStructures] = useState('');
  const [dld, setDld] = useState('');
  const [islamicStudies, setIslamicStudies] = useState('');

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
        oop: oop,
        linearAlgebra: linearAlgebra,
        dataStructures: dataStructures,
        dld: dld,
        islamicStudies: islamicStudies,
        semester: semester,
        department: dept
      });

      alert("Student added successfully");
      popup(false);

      // Reset form
      setName('');
      setRollNo('');
      setOop('');
      setLinearAlgebra('');
      setDataStructures('');
      setDld('');
      setIslamicStudies('');
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <div className='text-2xl font-bold'>BSAI Second Semester</div>

      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Enter Student Name' onChange={(e) => setName(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Enter Student Roll No' onChange={(e) => setRollNo(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Object Oriented Programming' onChange={(e) => setOop(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Linear Algebra' onChange={(e) => setLinearAlgebra(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Data Structures' onChange={(e) => setDataStructures(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Digital Logic Design' onChange={(e) => setDld(e.target.value)} />
      <input type="text" className='border rounded w-full mt-4 p-1 outline-none' placeholder='Marks: Islamic Studies / Ethics' onChange={(e) => setIslamicStudies(e.target.value)} />

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

export default AISecond;
