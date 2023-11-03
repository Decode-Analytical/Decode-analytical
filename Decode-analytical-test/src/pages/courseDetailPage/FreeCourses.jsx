import React from 'react'
import FreeHero from '../../components/coursesComponents/free/FreeHero'
import Curriculum from '../../components/coursesComponents/free/Curriculum'
import AlsoLike from '../../components/coursesComponents/premium/AlsoLike'
import WhatToLearn from '../../components/coursesComponents/premium/WhatToLearn'


export default function FreeCourses() {
  return (
    <>
        <FreeHero />
        <Curriculum />
        <WhatToLearn />
        <AlsoLike />
    </>
  )
}
