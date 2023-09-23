import React from 'react'

import CourseCard from '../../components/courseCard/courseCard';
import ProfileSideBar from './ProfileSideBar';


const Profile = () => {


  return (
    <>
      <div className="flex flex-row">
        <ProfileSideBar />
        <div className="flex flex-col ml-[300px] p-12 flex-1">{/* column2 */}
            <header>
              <h2>Welcom to your dashboard</h2>
              <nav>
                <ul>
                  <li>
                    <a href="/">Dashbord</a>
                  </li>
                  <li>
                    <a href="/points">Points</a>
                  </li>
                </ul>
              </nav>
            </header>

            <CourseCard />

        </div> 
      </div> 
    </>
  )
}

export default Profile