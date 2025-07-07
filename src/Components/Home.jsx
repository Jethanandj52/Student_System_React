import React, { useEffect } from "react";
  import { collection, getDocs } from "firebase/firestore";
import { db } from "./../Firebase/firebase-config"; // your Firebase config
import Dashboard from "./Dashboard/Dashboard";
import AddStudent from "./Dashboard/AddStudent";
import Record from "./Dashboard/Record";
 
import Logout from "./Dashboard/Logout";
import User from "./Dashboard/User";
import searching from "../Components/Dashboard/Images/searching.svg";
 
import { useNavigate } from "react-router-dom";
import { TotpSecret } from "firebase/auth/web-extension";


const Home = () => {

const [studentCount, setStudentCount] = React.useState(0);
const [deptCount, setDeptCount] = React.useState(0);
const [toppers, setToppers] = React.useState(2);

useEffect(() => {
  const getStudentCount = async () => {
    const querySnapshot = await getDocs(collection(db, "StudentData"));
    const uniqueRollNumbers = new Set();
    const uniqueDept = new Set();

    querySnapshot.forEach((doc) => {
      const student = doc.data();2
      uniqueRollNumbers.add(student.rollNo);
      uniqueDept.add(student.department);
    });

    setStudentCount(uniqueRollNumbers.size);
    setDeptCount(uniqueDept.size);
  };

  getStudentCount();
}, []);




 
  let navigate= useNavigate()

  function pageChange(path){
    navigate(path)

  }
  
  return (
    <div className="grid grid-cols-[280px_1fr] grid-rows-[70px_1fr] h-screen">
      <div className="bg-gray-900 text-white row-span-2 text-center">
        <User />
        <Dashboard />
        <AddStudent />
        <Record />
        
        <div className="bottom-1 fixed w-70">
         
          <Logout />
        </div>
      </div>

      <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-white-900 ">
          Student Dashboard
        </div>
        <div className="border w-100 rounded p-1 border-white flex justify-between px-4">
          <input
            type="text"
            placeholder="searching..."
            className="w-full outline-none"
          />
          <img src={searching} alt="" className="cursor-pointer" />
        </div>
        <div className="flex gap-10">
             <div className="text-white text-xl cursor-pointer">🌓</div>
            <span className="text-white text-xl cursor-pointer">🔔</span>
            <span className="text-white text-xl cursor-pointer">👤</span>
        </div>
      </div>

      <div className="bg-gray-100 text-gray-800 overflow-y-auto p-4 flex flex-col">
         <div className="text-3xl font-bold text-left">Dashboard</div>
         <div className="flex justify-between mt-5">
          <div className="bg-gray-300 shadow-2xl w-70 text-2xl rounded font-bold text-center p-5 py-7 cursor-pointer text-blue-800 active:scale-90 transition-all">
            <div>{studentCount}</div>
            <div>Total Students</div>

          </div>
          <div className="bg-gray-300 shadow-2xl w-70 text-2xl rounded font-bold text-center p-5 py-7 cursor-pointer text-blue-800 active:scale-90 transition-all">
            <div>{deptCount}</div>
            <div>Total Department</div>

          </div>
            <div className="bg-gray-300 shadow-2xl w-70 text-2xl rounded font-bold text-center p-5 py-7 cursor-pointer text-blue-800 active:scale-90 transition-all">
            <div>
              {/* Assuming you have a way to calculate total toppers */
              toppers /* Placeholder for actual topper count */
               
                
              
              }


              
            


            </div>
            <div>Total Toppers</div>

          </div>
         </div>
        <div className="mt-20">
          <div className="text-2xl font-bold">Active Departments</div>
          <div className="flex flex-col">
            {/* // computer Science */}
            <div className="bg-gray-300 rounded  p-5 flex justify-between mt-5 cursor-pointer active:scale-90 transition-all shadow" onClick={()=>pageChange('/computerScience')}> 
              <div>
                <div className="text-2xl font-bold">Computer Science</div>
                <div className="text-[12px] mt-2">Head Of Department: <span className="font-bold">Jethanand Malhi</span></div>
              </div>
              <div className="font-bold flex flex-col gap-2">
                <div >Current Semester : <span className="text-green-600">1,5,7</span></div>
                <div>Total Students: <span className="text-green-600">100</span></div>
              </div>
            </div>
{/* // IT */}
            <div className="bg-gray-300 rounded  p-5 flex justify-between mt-5 cursor-pointer active:scale-90 transition-all shadow" onClick={()=>pageChange('/IT')}> 
              <div>
                <div className="text-2xl font-bold">Information Technology</div>
                <div className="text-[12px] mt-2">Head Of Department: <span className="font-bold">Jethanand Malhi</span></div>
              </div>
              <div className="font-bold flex flex-col gap-2">
                <div >Current Semester : <span className="text-green-600">1,5,7</span></div>
                <div>Total Students: <span className="text-green-600">100</span></div>
              </div>
            </div>

{/* // AI */}
             <div className="bg-gray-300 rounded  p-5 flex justify-between mt-5 cursor-pointer active:scale-90 transition-all shadow" onClick={()=>pageChange('/AI')}> 
              <div>
                <div className="text-2xl font-bold">Artifical Intelligence</div>
                <div className="text-[12px] mt-2">Head Of Department: <span className="font-bold">Jethanand Malhi</span></div>
              </div>
              <div className="font-bold flex flex-col gap-2">
                <div >Current Semester : <span className="text-green-600">1,5,7</span></div>
                <div>Total Students: <span className="text-green-600">100</span></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
