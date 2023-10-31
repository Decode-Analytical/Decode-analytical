import React from 'react'


import PremiumHero from '../../components/coursesComponents/premium/PremiumHero'
import CourseOverview from '../../components/coursesComponents/premium/CourseOverview'
import WhatToLearn from '../../components/coursesComponents/premium/WhatToLearn'
import AlsoLike from '../../components/coursesComponents/premium/AlsoLike'

import { useLocation } from 'react-router-dom';

export default function premiumCourses() {
  const location = useLocation();
  // const { course_title, course_description, course_image } = location.state;
  const courseData = location.state;
  return (
    <>
        <PremiumHero course_title={courseData.course_title} course_image={courseData.course_image}/>
        <CourseOverview   course_description={courseData.course_description} />
        <WhatToLearn />
        <AlsoLike />
    </>
  )
}
