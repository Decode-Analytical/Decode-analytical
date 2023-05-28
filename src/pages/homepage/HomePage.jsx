import React from 'react'


import HeroSection from '../../components/homeComponents/heroSection/HeroSection'
import HomeGrid from '../../components/homeComponents/homeGridComponents/HomeGrid'
import AddReview from '../../components/homeComponents/review/AddReview'
import Review from '../../components/homeComponents/review/Review'




export default function HomePage() {
  return (
    <>
      <div className=" max-w-[1100px] m-auto px-5 text-blue-950">
        <HeroSection/>
        <HomeGrid/>
        <AddReview/>
      </div>
      <Review/>
    </>
  )
}
