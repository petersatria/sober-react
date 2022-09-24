import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './ProfileHeaders.module.css'

function ProfileHeader() {
  return (
    <div className={style.headers}>
      <div className='container'>
        <ul className={style.listheader}>
            <li><h2>My Account</h2></li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileHeader