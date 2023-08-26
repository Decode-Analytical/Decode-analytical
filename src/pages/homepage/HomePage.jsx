import React from 'react'


import HeroSection from '../../components/homeComponents/heroSection/HeroSection'
import HomeGrid from '../../components/homeComponents/homeGridComponents/HomeGrid'
import HardReviews from '../../components/homeComponents/review/HardReviews'




export default function HomePage() {
  return (
    <>
      <div className=" max-w-[1100px] m-auto px-5 text-blue-950">
        <HeroSection/>
        <HomeGrid/>
      </div>
      <HardReviews />
    </>
  );
}
