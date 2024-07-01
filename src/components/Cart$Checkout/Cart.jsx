import React from 'react'
import NavBar from '../StudentDashboard1/NavBar'
import CartSection, { CartCode } from './CartSection'
import image1 from '../../assets/StudentImages/analysisphone.png'
import image2 from '../../assets/StudentImages/jsimage.png'
import CourseFrame from '../StudentDashboard1/CourseFrame'

const Cart = () => {
  return (
    <>
        <div className=' p-[20px] flex flex-col gap-5'>
            <NavBar
            Dashboard="My Cart"/>
            <div className='bg-white bg-shadow rounded-sm p-[60px] flex flex-col gap-10'>
                <div>
                    <div className=' font-montserrat font-bold text-3xl text-[#303030] border-b-2 py-4'>Shopping cart</div>
                    <div className='flex items-center justify-between flex-wrap'>
                        <div>
                            <CartSection
                            cartimage={image1}
                            title="Data Analytics"/>
                            <CartSection
                            cartimage={image2}
                            title="Front End Web Development"/>
                            <CartSection
                            cartimage={image2}
                            title="Data Analytics-Beginner course"/>
                        </div>
                        <div>
                            <CartCode/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' font-montserrat font-bold text-3xl text-[#303030] border-b-2 py-4'>You might also be interested in</div>
                    <div className='flex items-center justify-between pt-8'>
                            <CourseFrame
                            imageProp={image2}
                            second="Early Design and its Principle (Part 2)"
                            author="by Gabrielle Torrez"
                            stage="4/5"
                            rate="(124 verified ratings)"
                            level="Immediate"
                            Continu="Enroll"/>
                            <CourseFrame
                            imageProp={image2}
                            second="Early Design and its Principle (Part 2)"
                            author="by Gabrielle Torrez"
                            stage="4/5"
                            rate="(124 verified ratings)"
                            level="Immediate"
                            Continu="Enroll"/>
                            <CourseFrame
                            imageProp={image2}
                            second="Early Design and its Principle (Part 2)"
                            author="by Gabrielle Torrez"
                            stage="4/5"
                            rate="(124 verified ratings)"
                            level="Immediate"
                            Continu="Enroll"/>
                            <CourseFrame
                            imageProp={image2}
                            second="Early Design and its Principle (Part 2)"
                            author="by Gabrielle Torrez"
                            stage="4/5"
                            rate="(124 verified ratings)"
                            level="Immediate"
                            Continu="Enroll"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart