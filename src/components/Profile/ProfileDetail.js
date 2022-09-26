import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import style from './ProfileDetail.module.css'
function ProfileDetail() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirtdate] = useState('');  
  
 const {id}= useParams()
console.log(id)
  useEffect(() => {
   Getdata(id)
  },[])

  const Getdata = async (idUser) => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/profile/' + idUser);
      
      setName(data.data.name);
      setUsername(data.data.username);
      setEmail(data.data.email);
      setBirtdate(data.data.birthdate);
      
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='row'>
      <div className="col-xl-12 order-xl-1">
          <div className="card bg-light  border-0">
            <div className="card-header bg-white border-0">
              <div className="row align-items-center">
                <div className="col-8">
                  <h1 className="mb-0">Account Details</h1>
                </div>
              </div>
          </div>
          <div className={`card-body bg-white ${style.contentWrapper}` }>
            <h4 className="mt-3">User Information</h4>
            <hr />
            <div className="row">
              <div className="col-3"><h5>Name</h5></div>
              <div className="col-6"><h5>: { name }</h5></div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-3"><h5>Username</h5></div>
              <div className="col-6"><h5>: {username}</h5></div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-3"><h5>Email</h5></div>
              <div className="col-6"><h5>: {email}</h5></div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-3"><h5>Birth Date</h5></div>
              <div className="col-6"><h5>: {birthdate}</h5></div>
            </div>

          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default ProfileDetail