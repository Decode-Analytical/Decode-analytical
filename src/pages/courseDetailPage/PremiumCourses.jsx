import React from 'react'

import { useParams } from 'react-router-dom';

import PremiumHero from '../../components/coursesComponents/premium/PremiumHero'
import CourseOverview from '../../components/coursesComponents/premium/CourseOverview'
import WhatToLearn from '../../components/coursesComponents/premium/WhatToLearn'
import AlsoLike from '../../components/coursesComponents/premium/AlsoLike'


export default function premiumCourses() {
  const { _id } = useParams();
  return (
    <>
        <PremiumHero />
        <CourseOverview _id={_id} />
        <WhatToLearn />
        <AlsoLike />
    </>
  )
}
