import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

export default function Login() {
let navigate = useNavigate();

let formik = useFormik({
    initialValues: {
        "phone":"",
        "password":""
    },
    onSubmit: values =>{
        // console.log(values);
        login(values)
        // navigate("/dashboard")
    }
})

async function login(values){
    let response =await axios.post(`http://192.168.1.10:8000/api/admin/login`,{
        ...values
    },{
        "Content-Type":"application/json"
    }).catch((err)=> console.log(err))

    console.log(response);
    // if(response.status === 200){
    //     navigate("/dashboard")
    // }
}


  return (
    <>
        <div className="container py-5">
            <div className="row py-5 ">
        <form onSubmit={formik.handleSubmit}>

            <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="tel" className="form-control" id="phone" name='phone' placeholder="Enter your phone" value={formik.values.phone} onBlur={formik.handleBlur}        onChange={formik.handleChange}/>
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type='password' className="form-control" placeholder="Enter your Password" id="password" name='password' value={formik.values.password} onBlur={formik.handleBlur}          onChange={formik.handleChange}></input>
            </div>
            <div className="mb-3 d-flex justify-content-end ">
            <button className='btn bg-primary text-white' type='submit'>Login</button>
                        </div>
        </form>

                        </div>
        </div>

    </>
  )
}

