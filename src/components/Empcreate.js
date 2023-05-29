import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Empcreate() {

  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[contact, setContact] = useState("");
  const[active, setActive] = useState(true);
  const nevigate = useNavigate()

  const handlesubmit =(e)=>{
    e.preventDefault();
    // console.warn(name,email,contact)
    let data = {name, email,contact}
    

    fetch("http://127.0.0.1:8000/user",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      result.json().then((resp)=>{
        console.warn("resp",resp)
        alert("Data is saved!!")
        nevigate("/")
      })
    })
  }

  return (
    <div>
      <div className='row'>
        <div className='offset-lg-3 col-lg-6 mt-5'>
          <form className='container' onSubmit={handlesubmit}>
            <div className='card' style={{"textAlign":"left"}}>
              <div className='card-title'><h2>Employee Create!!</h2></div>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>Name</label>
                      <input type='text' value={name} onChange={e=>setName(e.target.value)} className='form-control'></input>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>Email</label>
                      <input type='text' value={email} onChange={e=>setEmail(e.target.value)} className='form-control'></input>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>Contact</label>
                      <input type='text' value={contact} onChange={e=>setContact(e.target.value)} className='form-control'></input>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-check'>
                      <label className='form-check-label'>Is Active</label>
                      <input type='checkbox' value={active} onChange={e=>setActive(e.target.checked)} className='form-check-input'></input>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-check'>
                      <button className='btn btn-success' type='submit'>Save</button>
                      <Link to="/" className='btn btn-danger'>Back</Link>
                    </div>
                  </div>

                  
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
