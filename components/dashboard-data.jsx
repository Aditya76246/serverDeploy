import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function DashboardData() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://serverdeploy-3.onrender.com/get-data")
        .then((response) => {
            setData(response.data);
        })
    },[])

    console.log(data);

  return (
    <div>
        <h1>Admin Dashboard</h1>
        <h2>User Save Data</h2>
        {
            data.map((details, index) => {
                return(
                <div key={index}>
                    <div>Serial no. = {index + 1}</div>
                    <div>User Name = {details.name}</div>
                    <div>Age = {details.age}</div>
                    <div>Gender = {details.gender}</div>
                    <div>City = {details.city}</div>
                    <div>Job Domain = {details.job}</div>
                    <br /><br />
                </div>
                );
            })
        }
        <Link to="/">Go User Form</Link>
    </div>
  )
}