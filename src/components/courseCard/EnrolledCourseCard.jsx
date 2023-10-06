import React from 'react'
import './card.css'


const EnrolledCourseCard = (props) => {
    const {title, course} = props
    const {title: courseTitle, progress} = course
    const levelNumber = 0
  return (
    <>
    <div className='flex flex-col mt-16 mx-6 border border-gray-300 rounded-2xl p-3'>
        <div className='flex justify-between pt-3 pb-2 border-b-2 mb-4'>
            <h3 className='font-semibold text-lg'>{title}</h3>
            <p className='text-gray-400'>see all ongoing courses</p>
        </div>
        <div className="max-w-none w-full flex flex-wrap justify-center bg-white course-card">
            <div className="h-auto flex-1 m-2 bg-cover rounded text-center overflow-hidden img-container">
            </div>

            <div className='flex flex-1 flex-col lg:flex-row min-w-[350px]'>
                {/* Course content */}
                <div className="flex flex-col flex-1 justify-between leading-normal">
                    <div className="mb-1 mt-6 mx-4 lg:mt-0 flex flex-col justify-between">
                    <h3 className="text-gray-900 font-bold text-xl mb-2 ">Can coffee make you a better developer? {courseTitle}</h3>
                    <div className='flex flex-row items-center gap-2'>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500" style={{width: `${progress}%`}}></div>
                        </div>
                        <p className='bold'>{progress}%</p>
                    </div>

                    
                    <div className='flex flex-col flex-1 '>
                        
                        <div className="flex items-center mt-5 mb-4">
                        <img className="w-10 h-10 rounded-full mr-4" src="https://resize.prod.femina.ladmedia.fr/rblr/1200,806/img/var/2023-03/cool-girl-crop.jpg" alt="Avatar of Jonathan Reinink"/>
                        <div className="text-sm">
                            <p className="text-gray-500 leading-none text-center m-0">by Jonathan Reinink</p>
                        </div>
                        </div>
                        
                        <div className="flex items-center">
                            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <p className="m-0 text-sm font-medium text-gray-500 dark:text-gray-400 text-center">4.95 (24)</p>
                        </div>

                        <div className='flex flex-row mt-4 max-w-lg'>
                        <div className='flex flex-1 flex-row gap-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M10 7.16667V10.5L12.5 13M17.5 10.5C17.5 14.6421 14.1421 18 10 18C5.85786 18 2.5 14.6421 2.5 10.5C2.5 6.35786 5.85786 3 10 3C14.1421 3 17.5 6.35786 17.5 10.5Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className='text-sm'>
                            00h 00m left
                            </p>
                        </div>
                        <div className='flex flex-1 flex-row gap-1'>
                            {levelNumber ==0 && (
                            <>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                <path d="M7.5 16.3333V11.3333C7.5 10.4129 6.75381 9.66667 5.83333 9.66667H4.16667C3.24619 9.66667 2.5 10.4129 2.5 11.3333V16.3333C2.5 17.2538 3.24619 18 4.16667 18H5.83333C6.75381 18 7.5 17.2538 7.5 16.3333ZM7.5 16.3333V8C7.5 7.07953 8.24619 6.33333 9.16667 6.33333H10.8333C11.7538 6.33333 12.5 7.07953 12.5 8V16.3333M7.5 16.3333C7.5 17.2538 8.24619 18 9.16667 18H10.8333C11.7538 18 12.5 17.2538 12.5 16.3333M12.5 16.3333V4.66667C12.5 3.74619 13.2462 3 14.1667 3H15.8333C16.7538 3 17.5 3.74619 17.5 4.66667V16.3333C17.5 17.2538 16.7538 18 15.8333 18H14.1667C13.2462 18 12.5 17.2538 12.5 16.3333Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className='text-sm'>Beginner</p>
                            </>
                            )}
                        </div>
                        </div>

                        <ul className='flex flex-wrap mt-4'>
                        <li className='py-1 px-3 box rounded-2xl shadow-md text-sm'>Flexbox</li>
                        </ul>
                    </div>

                    </div>
                </div>

                <div className='w-0.5 bg-gray-200 my-10 rounded hidden lg:block'>{/* devider */}</div>

                {/* Action buttons */}
                <div className='flex flex-col justify-center items-center min-w-[200px] gap-6 lg:max-w-xs flex-1 py-3 px-3'>
                    <div className='flex row justify-end items-center w-full px-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="18" viewBox="0 0 4 18" fill="none">
                            <path d="M2 2L2 2.01M2 9L2 9.01M2 16L2 16.01M2 3C1.44772 3 1 2.55228 1 2C1 1.44772 1.44772 1 2 1C2.55228 1 3 1.44772 3 2C3 2.55228 2.55228 3 2 3ZM2 10C1.44771 10 1 9.55228 1 9C1 8.44772 1.44771 8 2 8C2.55228 8 3 8.44772 3 9C3 9.55228 2.55228 10 2 10ZM2 17C1.44771 17 0.999999 16.5523 0.999999 16C0.999999 15.4477 1.44771 15 2 15C2.55228 15 3 15.4477 3 16C3 16.5523 2.55228 17 2 17Z" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <button className='py-2 rounded w-full bg-cyan-700 font-semibold text-white'>Continue</button>
                    <a href="#" className=''>Unenroll course</a>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default EnrolledCourseCard
