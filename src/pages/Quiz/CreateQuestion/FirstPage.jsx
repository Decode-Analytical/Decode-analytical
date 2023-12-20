import React from 'react'

const FirstPage = () => {
  return (
    <div className='w-auto h-auto'>
          <div className='w-full flex items-center pl-4 pr-4 justify-between mt-2'>
          <div className='flex text-purple-950'>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
              </div>
                <h2>Quiz Creation</h2>
            </div>

             <div className='flex items-center gap-2'>
             <p className='text-[12px]'>1/20</p>
                <div className='h-[10px]'>
                <hr className='absolute h-[10px] w-[100px] bg-[#040E53] rounded-full'>

                    </hr>
                    <hr className='h-[10px] w-[450px] bg-gray-400 rounded-full'>
                    </hr>
                    
                </div>
                <p className='text-[12px]'>10%</p>
             </div>

            <div  className='flex items-center text-[14px] text-gray-500'>
            <div>
                Edit
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>

            </div>
            </div>

          </div>
            <div className='w-[100%] h-[100%] flex items-center  justify-center'>

                  <div className='w-[650px] h-[400px] mt-10'>
                          <form action="">
                             
                             <div className='w-[100%] h-[100%] flex flex-col gap-8'>

                             <div>
                             <label>
                                Quiz Name
                                <br />
                                <input type="text" className='w-[100%] p-2 outline-none'/>
                             </label>
                              
                             </div>
                              <div>

                             <label>
                                Question Type
                                <br />
                                <select className='w-[100%] p-2 outline-none'>
                                <option value=""><span >Multiple Choice Question (4 Options)</span></option>
                                    <option value="2 options">2 Options</option>
                                    <option value="3 options">3 Options</option>
                                    <option value="4 options">4 Options</option>
                                    <option value="5 options">5 Options</option>
                                </select>
                             </label>

                              </div>

                              <div>
                             <label>
                                Number of Questions
                                <br />
                                <input type="text" className='w-[100%] p-2 outline-none' />
                             </label>
                              
                             </div>

                             <div>

                             <label>
                                Question Type
                                <br />
                                <select className='w-[100%] p-2 outline-none'>
                                <option value=""><span className='bg-green-400'>Question Duration</span></option>
                                    <option value="2 options">3mins</option>
                                    <option value="3 options">15mins</option>
                                    <option value="4 options">30mins</option>
                                    <option value="5 options">50mins</option>
                                </select>
                             </label>

                              </div>


                             </div>
                             

                          </form> 
                           
                  </div>

            </div>


    </div>
  )
}

export default FirstPage