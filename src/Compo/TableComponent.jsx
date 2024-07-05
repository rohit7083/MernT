import React from 'react';
import Bar from './Bar.jsx';

import { useEffect, useState } from "react";
import UserData from "./UserData.jsx";

const API = "http://localhost:3000/api/data";

function TableComponent() {


  const [users, setUsers] = useState([]);

 
  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setUsers(data); // Update state with fetched data
    } catch (error) {
      console.error('Fetch error:', error);
      // Handle error state here (e.g., setUsers([]) or show an error message)
    }
  };
  
  useEffect(() => {
    fetchUsers(API);
  }, [fetchUsers]);
  









  const [selectedMonth, setSelectedMonth] = useState(null);

  useEffect(() => {
    fetchUsers(API, selectedMonth);
  }, [selectedMonth]);

  const handleMonthChange = async (Month) => {
    setSelectedMonth(Month);
  };



  return (

    <div className=" min-h-screen bg-base-100" data-theme="light">

      <div className='container mx-auto px-4 pt-20 pb-10 md:px-20 '>
        <h1 className="text-center text-3xl font-bold underline">
          Transaction Table <br /> Dashboard
        </h1>

        <div className="flex justify-center mt-4">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Month
            </div>
            <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            {[...Array(12).keys()].map((Month) => (
                <li key={Month}>
                  <a onClick={() => handleMonthChange(Month)}>{`Month ${Month + 1}`}</a>
                </li>
                              ))}

            </ul>
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>

        <div className=" bg-lime-700 text-white mt-11 overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className='text-white'>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Category</th>
                <th>Image</th>
                <th>Sold</th>

                <th>dateOfSale</th>
              </tr>
            </thead>
            <tbody>
            
              <UserData users={users} />
            </tbody>
          </table>
        </div>

        <div className="  flex justify-center my-4">
          <button className="bg-slate-500 join-item btn">«</button>
          <button className="bg-slate-500 join-item btn">Page 22</button>
          <button className="bg-slate-500 join-item btn">»</button>
        </div>

<div>
  <h2 className='text-2xl text-center font-bold mb-5'>Statistics -June</h2>
</div>
        <div className="bg-red-300 stats shadow flex justify-around">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Tota Sales</div>
            <div className="stat-value">31K</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Sold Item</div>
            <div className="stat-value">4,200</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Not Sold Item</div>
            <div className="stat-value">1,200</div>
          </div>
        </div>

        {/* Bar Component */}
        <div className='mt-10'> <Bar /></div>

      </div></div>
  );
}

export default TableComponent;

  