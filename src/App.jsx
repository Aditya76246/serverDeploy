import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'

export default function App() {

  const formik = useFormik({
    initialValues: {
      name: "",
      age: 0,
      gender: "",
      city: "",
      job: ""
    },
    onSubmit: (data) => {
      axios.post("http://127.0.0.1:7000/add-data", data);
      alert("User Data Add Success fully");
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h1>User Details</h1>
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
      </form>
    </div>
  )
}