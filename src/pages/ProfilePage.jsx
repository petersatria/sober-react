import { Outlet } from 'react-router-dom';
import React from 'react'
import '../assets/css/profile/Profile.css' 
import { ProfileHeader, ProfileSidebar } from '../components/Profile'


function ProfilePage() {

  return (
    <>
        <ProfileHeader/>
        <div className='container wrapper'>
          <ProfileSidebar/>
        <div className='contentWrapper'>
          <Outlet/>
          </div>
        </div>
    </>
  )
}

export default ProfilePage