import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faBagShopping,faRightFromBracket, faUserPen } from '@fortawesome/free-solid-svg-icons';
import style from './ProfileSidebar.module.css'
import { NavLink } from 'react-router-dom';
function ProfileSidebar() {
  const [id,setId] = useState('6329d1e25bd45490f86b955d')
  return (
      <ul className={style.list}>
        <li><NavLink to={'/profile/'+id}><FontAwesomeIcon icon={faUser} /><span className='ms-4'>Account Details</span></NavLink></li>
        <li><NavLink to={'/profile/'+id+'/settings'}><FontAwesomeIcon icon={faUserPen} /><span className='ms-3'>Account Settings</span></NavLink></li>
        <li><NavLink><FontAwesomeIcon icon={faBagShopping} /><span className='ms-4'>Order</span></NavLink></li>
        <li><NavLink><FontAwesomeIcon icon={faRightFromBracket} /><span className='ms-4'>Log Out</span></NavLink></li>
      </ul>
  )
}

export default ProfileSidebar