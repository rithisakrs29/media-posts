import React from 'react'
import Header from '../components/Header'
import Notification from '../components/Notification'
import Profile from '../components/Profile'

function ProfilePage() {
  return (
    <div>
      <div className="bg-gray-200 dark:bg-gray-600 h-[90vh] fixed top-[10vh] left-0 w-full py-5">
      <Header />
        <div className="container mx-auto flex justify-between gap-10">
          <div className="hidden lg:block flex-[0.6]">
            <Profile />
          </div>
          <div className="flex-1 h-[90vh] overflow-auto pb-10">
            <Profile/>
          </div>
          <div className="hidden lg:block flex-[0.6]">
            <Notification/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
