import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

export default function AddData() {

  const formik = useFormik({
    initialValues: {
      name: "",
      age: 0,
      gender: "",
      city: "",
      job: ""
    },
    onSubmit: (data) => {
      axios.post("https://serverdeploy-3.onrender.com/add-data", data);
      alert("User Data Add Successfully \nThank You");
    }
  })

  return (
    <div style={{textAlign:"center"}}>
      <form onSubmit={formik.handleSubmit}>
        <h1>Fill User Details.</h1>
        <dl>
          <dt>Use Name</dt>
          <dd><input type="text" required name='name' onChange={formik.handleChange} /></dd>
          <dt>Your Age</dt>
          <dd><input type="number" required name='age' onChange={formik.handleChange}/></dd>
          <dt>Gender</dt>
          <dd><input type="text" required name='gender' onChange={formik.handleChange}/></dd>
          <dt>City</dt>
          <dd><input type="text" required name='city' onChange={formik.handleChange}/></dd>
          <dt>Job Roll</dt>
          <dd><input type="text" required name='job' onChange={formik.handleChange}/></dd>
        </dl>
        <button type='submit'>Submit</button>
      </form><br />
      <Link to="/dashboard-data">Office Use Only</Link>
    </div>
  )
}