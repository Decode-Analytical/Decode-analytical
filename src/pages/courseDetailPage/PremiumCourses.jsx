import React from 'react'
import PremiumHero from '../../components/coursesComponents/premium/PremiumHero'
import CourseOverview from '../../components/coursesComponents/premium/CourseOverview'
import WhatToLearn from '../../components/coursesComponents/premium/WhatToLearn'
import AlsoLike from '../../components/coursesComponents/premium/AlsoLike'


export default function premiumCourses() {
  return (
    <>
        <PremiumHero />
        <CourseOverview />
        <WhatToLearn />
        <AlsoLike />
    </>
  )
}
