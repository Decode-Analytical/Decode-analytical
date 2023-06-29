import React from "react";
import HeroSection from "../../components/homeComponents/heroSection/HeroSection";
import HomeGrid from "../../components/homeComponents/homeGridComponents/HomeGrid";
import HardReviews from "../../components/homeComponents/review/HardReviews";
import feature1 from "../../assets/Images/feature1.png";
import feature2 from "../../assets/Images/feature2.png";
import feature3 from "../../assets/Images/feature3.png";

export default function HomePage() {
  return (
    <>
      <div className="px-4">
        <HeroSection />
        <HomeGrid
          img={feature1}
          title={`Develop practical skills on the go`}
          description={`Decode LMS is a learning management system that gives you all the tools required in your tech journey. It is comprised of the most resourceful materials one would ever think of. Have the  best experience from us.`}
        />
        <HomeGrid
          img={feature2}
          title={`Learn the basic  fundamentals from stratch`}
          description={`Lorem ipsum dolor sit amet consectetur. Cursus arcu nisl nulla id dolor at massa. Ac nibh mauris odio neque purus id magna. Nec id a elit tristique justo at. Eget aliquet sed arcu eget purus consequat ipsum sed interdum turpis nisi.`}
          orderleft={2}
        />
        <HomeGrid
          img={feature3}
          title={`Learn the basic  fundamentals from stratch`}
          description={`Lorem ipsum dolor sit amet consectetur. Cursus arcu nisl nulla id dolor at massa. Ac nibh mauris odio neque purus id magna. Nec id a elit tristique justo at. Eget aliquet sed arcu eget purus consequat ipsum sed interdum turpis nisi.`}
        />
      </div>
        <HardReviews />
    </>
  );
}
