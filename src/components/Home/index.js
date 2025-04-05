import React, { useState } from "react";
import NavBar from "../NavBar";
import { FaGraduationCap } from "react-icons/fa6";
const Home = () => {
  const [selectedSemester, setSelectedSemester] = useState(1);
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="flex">
      <div className="w-3/12 bg-white text-white h-screen">
        <div className="flex items-center justify-center h-16">
          <h1 className="text-2xl font-bold">My App</h1>
        </div>
        <nav className="mt-10">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer text-customgrey">
              Dashboard
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer text-customgrey">
              BOS
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer text-customgrey">
              Program
            </li>
            <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer text-customgrey">
              Fees Creation
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-9/12 bg-gray-100 h-screen">
        <NavBar />
        <div className="m-5 p-5 rounded pt-0 bg-white">
          <h1 className="text-2xl font-bold mb-5">Fees Creation</h1>
          <div className="bg-white p-5 rounded shadow">
            <label className="block mb-2">Name a Fees Creation</label>
            <input
              type="text"
              placeholder="Type something"
              className="w-full p-2 border mb-3 rounded"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Program Level</label>
                <select className="p-2 border w-full rounded">
                  <option>Select</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Program Type</label>
                <select className="p-2 border w-full rounded">
                  <option>Select</option>
                </select>
              </div>
            </div>

            <label className="block mt-3 mb-2">Program Name</label>
            <select className="w-3/6 p-2 border rounded">
              <option>Select</option>
            </select>
          </div>
          <div className="mt-5 flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
            <div className="p-5 bg-white text-black p-4 rounded shadow text-center flex-1 relative">
              <p className="text-center absolute right-10 top-3 h-8 w-20 rounded bg-lemonYellow text-customYellow">
                Pending
              </p>
              <div className="flex justify-around pt-10">
                <div className="w-20 h-20 flex justify-center rounded-full bg-yellow-200 self-center">
                  <FaGraduationCap className="h-10 w-10 self-center text-customYellow" />
                </div>
                <span className="self-center">
                  College <br /> Name
                </span>
              </div>
            </div>
            <div className="p-5 pb-10 bg-blue-200 text-black rounded shadow text-center flex-1 relative">
              <div className="flex justify-around pt-10">
                <div className="w-20 h-20 flex justify-center rounded-full bg-customBlue  self-center">
                  <FaGraduationCap className="h-10 w-10 self-center text-white" />
                </div>
                <span className="self-center">
                  College <br /> Name
                </span>
              </div>
            </div>
            <div className="p-5 bg-white text-black p-4 rounded shadow text-center flex-1 relative">
              <p className="text-center absolute right-10 top-3 h-8 w-20 rounded bg-lemonYellow text-customYellow">
                Pending
              </p>
              <div className="flex justify-around pt-10">
                <div className="w-20 h-20 flex justify-center rounded-full bg-yellow-200 self-center">
                  <FaGraduationCap className="h-10 w-10 self-center text-customYellow" />
                </div>
                <span className="self-center">
                  College <br /> Name
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5 bg-white p-5 rounded shadow">
            <h1 className="pt-3 pb-3">Fees Details</h1>
            <div className="flex flex-wrap space-x-2 border-b pb-2">
              {semesters.map((sem) => (
                <button
                  key={sem}
                  onClick={() => setSelectedSemester(sem)}
                  className={`${
                    selectedSemester === sem
                      ? "bg-customBlue text-white p-3 rounded"
                      : "bg-white text-black p-3 rounded"
                  }`}
                >
                  Sem {sem}
                </button>
              ))}
            </div>
            <div>
              <div className="flex flex-col w-2/4">
                <div className="flex flex-col">
                  <lable>Select Fees Payment Templates</lable>
                  <select className="w-3/2 p-2 border rounded mt-5">
                    <option>Select</option>
                  </select>
                </div>
                <div className="flex">
                  <div className="flex flex-col">
                    <lable>Fees Name</lable>
                    <select className="w-2/4 p-2 border rounded mt-5">
                      <option>Select</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <lable> Fees Amount</lable>
                    <select className="w-2/4 p-2 border rounded mt-5">
                      <option>Select</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <lable>Total Fee Amount</lable>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-5 space-y-2 md:space-y-0 md:space-x-3">
            <button className="bg-blue-500 text-white p-2 rounded">
              Next / Apply
            </button>
            <button className="bg-gray-400 text-white p-2 rounded">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
