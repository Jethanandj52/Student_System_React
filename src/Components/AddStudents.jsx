import React, { useEffect, useState,useTransition } from "react";
import Dashboard from "./Dashboard/Dashboard";
import AddStudent from "./Dashboard/AddStudent";
import Record from "./Dashboard/Record";
import Logout from "./Dashboard/Logout";
import User from "./Dashboard/User";
import searching from "../Components/Dashboard/Images/searching.svg";

import CSFirst from "./Department/BSCS/First";
import CSSecond from "./Department/BSCS/Second";
import CSThird from "./Department/BSCS/Third";
import CSFour from "./Department/BSCS/Fourth";
import CSFifth from "./Department/BSCS/Fifth";
import CSSix from "./Department/BSCS/Sixth";
import CSSeven from "./Department/BSCS/Seven";
import CSEight from "./Department/BSCS/Eight";

import ITFirst from "./Department/BSIT/First";
import ITSecond from "./Department/BSIT/Second";
import ITThird from "./Department/BSIT/Third";
import ITFour from "./Department/BSIT/Fourth";
import ITFifth from "./Department/BSIT/Fifth";
import ITSix from "./Department/BSIT/Sixth";
import ITSeven from "./Department/BSIT/Seven";
import ITEight from "./Department/BSIT/Eight";

import AIFirst from "./Department/BSAI/First";
import AISecond from "./Department/BSAI/Second";
import AIThird from "./Department/BSAI/Third";
import AIFour from "./Department/BSAI/Fourth";
import AIFifth from "./Department/BSAI/Fifth";
import AISix from "./Department/BSAI/Sixth";
import AISeven from "./Department/BSAI/Seven";
import AIEight from "./Department/BSAI/Eight";

import { collection, getDocs,deleteDoc,doc,updateDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase-config";

const AddStudents = () => {
  const [semester, setSemester] = useState("");
  const [department, setDepartment] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [componentToShow, setComponentToShow] = useState(null);
  const [data, setData] = useState([]);
  const [seatNo, setSeatNo] = useState("");

  const [pending, setPending] = useState(false);
  // ✅ Now array instead of single object
  const [filteredStudent, setFilteredStudent] = useState([]);
  const [isPending, startTransition] = useTransition();

  // ✅ Firebase data fetch
  async function studentData() {
    const sData = collection(db, "StudentData");
    const sDataArr = await getDocs(sData);
    let array = [];
    sDataArr.forEach((doc) => {
      array.push({ id: doc.id, ...doc.data() });
    });
    setData(array);
  }

  useEffect(() => {
    studentData();
  }, );


  async function deleteStudent(id) {
    try{
      const studentDoc= doc(db, "StudentData", id);
      await deleteDoc(studentDoc);  
      alert("Student deleted successfully");
      studentData(); // Refresh the data after deletion
    }catch (error) {
      console.error("Error deleting student:", error);
      alert("Failed to delete student");
    }
  }

  const handleUpdate = async (id) => {
  const studentRef = doc(db, "StudentData", id); // 🔑 id is document ID

  try {
    await updateDoc(studentRef, {
      name: "Updated Name",
      rollNo: "Updated RollNo",
      department: "Updated Dept",
      semester: "Updated Semester"
    });

    alert("Document updated successfully!");
  } catch (error) {
    console.error("Error updating document:", error);
    alert("Failed to update");
  }
};


  // ✅ Search Logic (multiple entries)
  const handleSearch = () => {
    startTransition(async () => {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000); // Simulate a delay for the search
      });
    });
    const filteredData = data
      .filter((d) => d.rollNo === seatNo)
      .sort((a, b) => parseInt(a.semester) - parseInt(b.semester));

    if (filteredData.length > 0) {
      setFilteredStudent(filteredData);
    } else {
      alert("No student found with this seat number");
      setFilteredStudent([]);
    }
  };

   async function search() {
    let Component = null;
setPending(true);
await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading delay
setPending(false);
    const componentMap = {
      BSCS: [CSFirst, CSSecond, CSThird, CSFour, CSFifth, CSSix, CSSeven, CSEight],
      IT: [ITFirst, ITSecond, ITThird, ITFour, ITFifth, ITSix, ITSeven, ITEight],
      AI: [AIFirst, AISecond, AIThird, AIFour, AIFifth, AISix, AISeven, AIEight],
    };

    if (componentMap[department]) {
      const Index = parseInt(semester) - 1;
      const DeptComp = componentMap[department][Index];
      if (DeptComp) {
        Component = <DeptComp popup={setShowPopup} semester={semester} dept={department} />;
      }
    }

    if (!Component) {
      Component = (
        <div>
          <div>No Component for this Dept/Semester. Please contact admin</div>
          <button
            onClick={() => setShowPopup(false)}
            className="mt-4 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700 active:scale-90 transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      );
    }

    setComponentToShow(Component);
    setShowPopup(true);
  }

  function edit(department, semester) {
    let Component = null;

    const componentMap = {
      BSCS: [CSFirst, CSSecond, CSThird, CSFour, CSFifth, CSSix, CSSeven, CSEight],
      IT: [ITFirst, ITSecond, ITThird, ITFour, ITFifth, ITSix, ITSeven, ITEight],
      AI: [AIFirst, AISecond, AIThird, AIFour, AIFifth, AISix, AISeven, AIEight],
    };

    if (componentMap[department]) {
      const Index = parseInt(semester) - 1;
      const DeptComp = componentMap[department][Index];
      if (DeptComp) {
        Component = <DeptComp popup={setShowPopup} semester={semester} dept={department} />;
      }
    }

    if (!Component) {
      Component = (
        <div>
          <div>No Component for this Dept/Semester. Please contact admin</div>
          <button
            onClick={() => setShowPopup(false)}
            className="mt-4 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700 active:scale-90 transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      );
    }

    setComponentToShow(Component);
    setShowPopup(true);
  }

  return (
    <>
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

        {/* Topbar */}
        <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-white-900">Student Dashboard</div>
          <div className="border w-100 rounded p-1 border-white flex justify-between px-4">
            <input
              type="text"
              placeholder="Enter Student Seat Number"
              className="w-full outline-none"
              onChange={(e) => setSeatNo(e.target.value)}
            />
            <div onClick={handleSearch} className="cursor-pointer">
              <img src={searching} alt="search" />
            </div>
          </div>
          <div className="flex gap-10">
            <div className="text-white text-xl cursor-pointer">🌓</div>
            <span className="text-white text-xl cursor-pointer">🔔</span>
            <span className="text-white text-xl cursor-pointer">👤</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gray-100 text-gray-800 overflow-y-auto p-4 flex flex-col">
          <div className="text-2xl font-bold text-white-900">Add Students</div>

          <div className="flex justify-center gap-10 mt-2">
            <select
              className="border rounded w-50 text-center"
              required
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="" disabled>Choose Dept</option>
              <option value="BSCS">BSCS</option>
              <option value="IT">BSIT</option>
              <option value="AI">BSAI</option>
            </select>

            <select
              className="border rounded w-50 text-center"
              required
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="" disabled>Choose Semester</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>

           {
            pending ? (
              <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 transition-all self-center ">
                Loading...    
              </button>
            ) : ( 
              <button
                onClick={search}
                className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-700  self-center cursor-pointer hoverscale-90 active:scale-95 transition-all"
              >
                Search
              </button>
            )
           }
          </div>

          {/* ✅ Reset Filter Button */}
          {filteredStudent.length > 0 && (
            <button
              onClick={() => setFilteredStudent([])}
              className="mt-4 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 transition-all self-center"
            >
              Show All Students
            </button>
          )}
{
            isPending ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
              </div>
            ) : (
               
          <div className="overflow-x-auto mt-4 rounded-2xl shadow-md scrollbar-hide">
            <table className="min-w-full divide-y divide-gray-200 bg-white rounded-2xl shadow-md text-center mt-4">
              <thead className="bg-gray-800 text-white text-center">
                <tr>
                  <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">Semester</th>
                  <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">Action</th>

                  
                </tr>
              </thead>

              <tbody className="bg-gray-200">

 
                {(filteredStudent.length > 0 ? filteredStudent : data).map((student, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100 cursor-pointer">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-700 font-bold border-r border-black">
                      {student.rollNo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r">
                      {student.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r">
                      {student.department}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 border-r">
                      {student.semester}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    
                    <button className="ml-2 text-white bg-red-600 rounded  px-2 py-1 cursor-pointer hover:scale-90 transition-all" onClick={()=>deleteStudent(student.id)}>Delete</button>
                    <button className="ml-2 text-white  bg-blue-600 px-2 py-1 rounded cursor-pointer hover:scale-90 transition-all " onClick={()=>edit(student.department,student.semester)} > Edit</button>

                    </td>
                  </tr>
                ))}


              </tbody>
            </table>
          </div>
            ) 
}
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed w-full h-screen top-0 bg-black/50 flex justify-center items-center text-center">
          <div className="bg-white p-4 rounded shadow-xl w-100">
            {componentToShow}
          </div>
        </div>
      )}
    </>
  );
};
export default AddStudents;