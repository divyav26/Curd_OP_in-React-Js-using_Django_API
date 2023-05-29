import React, { useEffect, useState } from 'react'
import { Link, useNavigate ,useParams} from 'react-router-dom'

export default function Emplist() {
  
  const {empid} = useParams();
  const navigate = useNavigate();
const editfunction=(id)=>{
  navigate("/employee/edit/"+id)
}

const removefunction=(id)=>{
  
 
 
  if (window.confirm("Do You want to remove data ??"))
  {
    fetch("http://127.0.0.1:8000/user/"+id,{
      
      method:'DELETE',
      
      
      
    }).then((res)=>{
      
        console.warn("resp",res)
        alert("Data is Removed!!")
        window.location.reload();
      
    }).catch((err)=>{
      console.log(err.message)
    })
  }
}

const detailsfunction=(id)=>{
  navigate("/employee/details/"+id)
}




    const [users, setUsers] = useState([])

    const fetchData = () => {
      fetch("http://127.0.0.1:8000/user")
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
    <div className='container'>
      <div className='card'>
        <div className='card-title'>

            <h2>Employee Listing</h2>
        </div>

        <div className='card-body'>
            <div className='btndiv'>
                <Link to="employee/create" className='btn btn-success'>Add User (+)</Link>
            </div>
            <table className='table table-bordered'>
                <thead className='bg-dark text-white'>
                    <tr>
                        <td>
                            ID
                        </td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Contact</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.contact}</td>
                                <td>
                                    <a onClick={()=>{editfunction(user.id)}} className='btn btn-success'>Edit</a>
                                    <a onClick={()=>{removefunction(user.id)}} className='btn btn-danger'>Remove</a>
                                    <a onClick={()=>{detailsfunction(user.id)}} className='btn btn-primary'>Details</a>
                                </td>

                                </tr>
                          ))}
                                
                        
                    
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}
