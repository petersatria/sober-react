import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faBagShopping,faRightFromBracket, faUserPen } from '@fortawesome/free-solid-svg-icons';
import style from './ProfileSidebar.module.css'
import { Navigate, NavLink } from 'react-router-dom';
function ProfileSidebar() {
  let { id } = useParams()
  console.log(id)
  return (
      <ul className={style.list}>
      <li><NavLink to={'/profile/' + id+'/details'} style={({ isActive }) => ({ color: isActive ? "black" : "#909097" })}><FontAwesomeIcon icon={faUser} /><span className='ms-4'>Account Details</span></NavLink></li>
        <li><NavLink to={'/profile/'+id+'/settings'} style={({ isActive }) => ({ color: isActive ? "black" : "#909097" })}><FontAwesomeIcon icon={faUserPen} /><span className='ms-3'>Account Settings</span></NavLink></li>
        <li><NavLink to={'/profile/'+ id+'/order-list/'+id } style={({ isActive }) => ({ color: isActive ? "black" : "#909097" })}><FontAwesomeIcon icon={faBagShopping} /><span className='ms-4'>Order</span></NavLink></li>
      </ul>
  )
}

export default ProfileSidebar