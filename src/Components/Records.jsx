import React, { useState, useEffect, useTransition } from "react";
import Dashboard from "./Dashboard/Dashboard";
import AddStudent from "./Dashboard/AddStudent";
import Record from "./Dashboard/Record";
 
import Logout from "./Dashboard/Logout";
import User from "./Dashboard/User";
import searching from "../Components/Dashboard/Images/searching.svg";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase/firebase-config";

import BscsR1 from "./Result/BSCS/BscsR1";
import BscsR2 from "./Result/BSCS/BscsR2";
import BscsR3 from "./Result/BSCS/BscsR3";
import BscsR4 from "./Result/BSCS/BscsR4";
import BscsR5 from "./Result/BSCS/BscsR5";
import BscsR6 from "./Result/BSCS/BscsR6";
import BscsR7 from "./Result/BSCS/BscsR7";
import BscsR8 from "./Result/BSCS/BscsR8";

import BsitR1 from "./Result/BSIT/BsitR1";
import BsitR2 from "./Result/BSIT/BsitR2";
import BsitR3 from "./Result/BSIT/BsitR3";
import BsitR4 from "./Result/BSIT/BsitR4";
import BsitR5 from "./Result/BSIT/BsitR5";
import BsitR6 from "./Result/BSIT/BsitR6";
import BsitR7 from "./Result/BSIT/BsitR7";
import BsitR8 from "./Result/BSIT/BsitR8";

import BsaiR1 from "./Result/BSAI/BsaiR1";
import BsaiR2 from "./Result/BSAI/BsaiR2";
import BsaiR3 from "./Result/BSAI/BsaiR3";
import BsaiR4 from "./Result/BSAI/BsaiR4";
import BsaiR5 from "./Result/BSAI/BsaiR5";
import BsaiR6 from "./Result/BSAI/BsaiR6";
import BsaiR7 from "./Result/BSAI/BsaiR7";
import BsaiR8 from "./Result/BSAI/BsaiR8";

const Records = () => {
  const [seatNo, setSeatNo] = useState("");
  const [data, setData] = useState([]);
  const [filteredStudent, setFilteredStudent] = useState(null); // 👈 holds the searched student
const [isPending,startTransition] = useTransition();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const recordData = await getDocs(collection(db, "StudentData"));
        const students = [];
        recordData.forEach((doc) => {
          students.push(doc.data());
        });
        setData(students);
      } catch (error) {
        console.error("Error fetching student data: ", error);
      }
    };
    fetchData();
  }, []);

  const   handleSearch = () => {
    startTransition(async() => {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000); // Simulate a delay for the search
      });
    })
    const filteredData = data
      .filter((student) => student.rollNo === seatNo)
      .sort((a, b) => parseInt(a.semester) - parseInt(b.semester));

    if (filteredData.length > 0) {
      setFilteredStudent(filteredData[0]); // 👈 only first (unique) student
    } else {
      alert("No student found with this seat number");
      setFilteredStudent(null);
    }
  };

  const department = filteredStudent?.department || "";
  const semester = filteredStudent?.semester || "";

  return (
    <div className="grid grid-cols-[280px_1fr] grid-rows-[70px_1fr] h-screen">
      {/* Sidebar */}
      <div className="bg-gray-900 text-white row-span-2 text-center">
        <User />
        <Dashboard />
        <AddStudent />
        <Record />
         
        <div className="bottom-1 fixed w-70">
          
          <Logout />
        </div>
      </div>

      {/* Top Bar */}
      <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-white-900">
          Student Dashboard
        </div>
        <div className="border w-100 rounded p-1 border-white flex justify-between px-4">
          <input
            type="text"
            placeholder="Enter Student Seat Number"
            className="w-full outline-none"
             onChange={(e) => setSeatNo(e.target.value)}
          />
          
         
          <img src={searching} alt="search" className="cursor-pointer"  onClick={handleSearch}/>
        </div>
        <div className="flex gap-10">
             <div className="text-white text-xl cursor-pointer">🌓</div>
            <span className="text-white text-xl cursor-pointer">🔔</span>
            <span className="text-white text-xl cursor-pointer">👤</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-100 text-gray-800 overflow-y-auto p-4 flex flex-col">
        <div className="text-4xl font-bold text-white-900 mb-4 text-center mt-5 text-blue-800">
          Students Records
        </div>
         
{
      isPending?(
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        
        <div className="overflow-x-auto mt-4 rounded-2xl shadow-md scrollbar-hide">
          {/* BSCS Results */}
          {department === "BSCS" && (
            <div className="mb-8 bg-white rounded-xl p-4 shadow">
              <h2 className="text-xl font-bold text-center mb-4 text-gray-700">
                BSCS Results
              </h2>
              <div>
                <BscsR1 seatNo={seatNo} />
                <BscsR2 seatNo={seatNo} />
                <BscsR3 seatNo={seatNo} />
                <BscsR4 seatNo={seatNo} />
                <BscsR5 seatNo={seatNo} />
                <BscsR6 seatNo={seatNo} />
                <BscsR7 seatNo={seatNo} />
                <BscsR8 seatNo={seatNo} />
              </div>
            </div>
          )}

          {/* BSIT Results */}
          {department === "IT" && (
            <div className="mb-8 bg-white rounded-xl p-4 shadow">
              <h2 className="text-xl font-bold text-center mb-4 text-gray-700">
                BSIT Results
              </h2>
              <div>
                <BsitR1 seatNo={seatNo} />
                <BsitR2 seatNo={seatNo} />
                <BsitR3 seatNo={seatNo} />
                <BsitR4 seatNo={seatNo} />
                <BsitR5 seatNo={seatNo} />
                <BsitR6 seatNo={seatNo} />
                <BsitR7 seatNo={seatNo} />
                <BsitR8 seatNo={seatNo} />
              </div>
            </div>
          )}

          {/* BSAI Results */}
          {department === "AI" && (
            <div className="mb-8 bg-white rounded-xl p-4 shadow">
              <h2 className="text-xl font-bold text-center mb-4 text-gray-700">
                BSAI Results
              </h2>
              <div>
                <BsaiR1 seatNo={seatNo} />
                <BsaiR2 seatNo={seatNo} />
                <BsaiR3 seatNo={seatNo} />
                <BsaiR4 seatNo={seatNo} />
                <BsaiR5 seatNo={seatNo} />
                <BsaiR6 seatNo={seatNo} />
                <BsaiR7 seatNo={seatNo} />
                <BsaiR8 seatNo={seatNo} />
              </div>
            </div>
          )}
        </div>
      )
}
      </div>
    </div>
  );
};

export default Records;
