import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function EmpDetails() {
    const {empid} = useParams();
    const [users, setUsers] = useState({})

    const fetchData = () => {
      fetch("http://127.0.0.1:8000/user/"+empid)
        .then(response => {
          return response.json()
        })
        .then(data => {
          setUsers(data)
        })
    }
  
    useEffect(() => {
      fetchData()
    }, [])
  return (
    <div className='card' style={{"textAlign":"left"}}>
      <div className='card-title'>
        <h2>Employee Details</h2>
      </div>
      <div className='card-body'></div>
      {

        users &&
        <>
        <h3>The Employee name is : {users.name}</h3>
        <h2>Contact Details</h2>
        <h4>Email is : {users.email}</h4>
        <h4>Contact is : {users.contact}</h4>
        <Link  className='btn btn-success' to="/">Back To Listing</Link>
        </>
      }
    </div>
  )
}
