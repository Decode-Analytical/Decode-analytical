import React from 'react'
import Header from './Header'
import CourseUpload from './CourseUpload'
import Footer from './Footer'
import Tracker from './Tracker'

const Upload = () => {
  return (
    <main className="flex flex-col justify-center mx-7 gap-6">
        <Header />
        <Tracker selectedCourse={true} />
        <CourseUpload />
        <Footer />
    </main>
  )
}

export default Upload