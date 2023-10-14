import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

const MainSideBar = () => {
  const [menuOpened, openMenu] = useState(false)
    const listOptions = [
        {
          title: "Dashboard",
          url: "/dashboard"
        },
        {
          title: "Courses",
          url: "/mycourses"
        },
        {
          title: "Forum",
          url: "/dashboard/forum"
        },
        {
          title: "Messages",
          url: "/dashboard/messages"
        },
        {
          title: "My purchases",
          url: "/dashboard/purchase"
        },
        {
          title: "Help center",
          url: "/dashboard/help"
        },
        {
          title: "Settings",
          url: "/dashboard/settings"
        },
        {
          title: "Log out",
          url: "/dashboard/logout"
        },
      ]
  return (
    <>
      <button onClick={() => openMenu(true)}
        className={`fixed top-2 left-2 bg-gray-950 p-3 rounded-md md:hidden fill-white ${menuOpened && 'hidden'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff">
          <path d="M4 6H20M4 12H20M4 18H20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div onMouseEnter={()=> openMenu(true)} onMouseLeave={()=>openMenu(false)}
      className={`flex flex-col fixed top-0 bottom-0 lg:left-0 border-r-2 text-center bg-cyan-950
      bg-gray-900 text-white ${!menuOpened && 'left-[-80px]'} md:left-0 profile-sidebar 
      overflow-y-hidden duration-500 ${menuOpened ? "w-[300px]" : "w-[80px]"}`}>
          <button onClick={()=> openMenu(false)}
            className='w-full flex justify-end absolute text-white px-4 pt-2 fill-white md:hidden'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 12 12">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L6 4.58579L10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893C12.0976 0.683417 12.0976 1.31658 11.7071 1.70711L7.41421 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.41421L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976311 11.3166 -0.0976311 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"/>
            </svg>
          </button>
          <div className="flex flex-col items-center pt-4 profile-sidebar-heading">
            <img src='https://cdn.vcgamers.com/news/wp-content/uploads/2022/01/paquito-ml-3.jpg' alt='profile' 
              className={`my-2 rounded-full duration-500 ${menuOpened ? 'w-16 h-16': 'w-12 h-12'}`}  />
              <div className={`flex flex-col duration-500 ${!menuOpened ? 'w-0 opacity-0 overflow-hidden' : 'w-fit h-fit overflow-hidden'}`}>
                <h2 className='font-bold'>Papaquito Vuenaos</h2>
                <div className='text-sm my-1'>
                  Reg. Student
                </div>
                <button className='border my-1 px-4 py-2 rounded-md text-xs border-gray-600 text-white hover:bg-gray-600 hover:text-white'>Edit Profile</button>
              </div>
          </div>

          <ul className="flex flex-col gap-1 mt-9 profile-sidebar-options">
            {listOptions.map(el => {
              return (
              <li className={`flex flex-row cursor-pointer duration-300 ${menuOpened && 'mx-6 px-2'} `}>
                <NavLink to={el.url} 
                  className={({isActive})=> `flex-1 duration-300 hover:bg-cyan-600 hover:font-semibold rounded-sm hover:text-cyan-950 hover:fill-cyan-950 ${menuOpened ? 'py-3 px-8' : 'mx-2 py-2'} ${!isActive && "fill-white"} ${isActive && "bg-cyan-600 text-cyan-950 fill-cyan-950 font-bold"}`}
                  >
                    <span className={`flex flex-row flex-1 gap-3 m-auto ${!menuOpened && 'justify-center'}`}>
                      {/* Icons */}
                      <>
                        {el.url == "/dashboard" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M1.33333 13.3333H9.33333C10.0667 13.3333 10.6667 12.7333 10.6667 12V1.33333C10.6667 0.6 10.0667 0 9.33333 0H1.33333C0.6 0 0 0.6 0 1.33333V12C0 12.7333 0.6 13.3333 1.33333 13.3333ZM1.33333 24H9.33333C10.0667 24 10.6667 23.4 10.6667 22.6667V17.3333C10.6667 16.6 10.0667 16 9.33333 16H1.33333C0.6 16 0 16.6 0 17.3333V22.6667C0 23.4 0.6 24 1.33333 24ZM14.6667 24H22.6667C23.4 24 24 23.4 24 22.6667V12C24 11.2667 23.4 10.6667 22.6667 10.6667H14.6667C13.9333 10.6667 13.3333 11.2667 13.3333 12V22.6667C13.3333 23.4 13.9333 24 14.6667 24ZM13.3333 1.33333V6.66667C13.3333 7.4 13.9333 8 14.6667 8H22.6667C23.4 8 24 7.4 24 6.66667V1.33333C24 0.6 23.4 0 22.6667 0H14.6667C13.9333 0 13.3333 0.6 13.3333 1.33333Z"/>
                          </svg>
                        )}
                        {el.url == "/mycourses" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20">
                            <path d="M9.31122 1.30007C7.50488 0.437646 4.98009 0.0151817 1.59987 0.000182944C1.28108 -0.00414815 0.968546 0.0888098 0.703944 0.266661C0.486756 0.413463 0.308969 0.611386 0.186222 0.84302C0.0634737 1.07465 -0.000474141 1.3329 2.64671e-06 1.59505V15.8989C2.64671e-06 16.8658 0.687945 17.5952 1.59987 17.5952C5.15307 17.5952 8.71727 17.9272 10.8521 19.945C10.8813 19.9727 10.918 19.9913 10.9577 19.9983C10.9973 20.0054 11.0382 20.0006 11.0751 19.9846C11.1121 19.9686 11.1435 19.9422 11.1656 19.9084C11.1876 19.8747 11.1993 19.8353 11.1991 19.795V2.94094C11.1992 2.82722 11.1748 2.71482 11.1277 2.61132C11.0806 2.50781 11.0119 2.41563 10.9261 2.34099C10.4371 1.92294 9.89389 1.57281 9.31122 1.30007ZM23.2941 0.265161C23.0293 0.0877525 22.7168 -0.00468643 22.3981 0.000182944C19.0179 0.0151817 16.4931 0.435646 14.6868 1.30007C14.1041 1.57231 13.5608 1.92176 13.0714 2.33899C12.9858 2.41376 12.9172 2.50598 12.8702 2.60946C12.8232 2.71294 12.7989 2.82528 12.7989 2.93894V19.794C12.7989 19.8327 12.8103 19.8706 12.8317 19.9028C12.8531 19.9351 12.8836 19.9603 12.9192 19.9753C12.9549 19.9903 12.9942 19.9944 13.0322 19.9872C13.0702 19.9799 13.1053 19.9616 13.1329 19.9345C14.4163 18.6596 16.6686 17.5937 22.4001 17.5942C22.8244 17.5942 23.2314 17.4257 23.5314 17.1256C23.8314 16.8256 24 16.4187 24 15.9943V1.59555C24.0006 1.33288 23.9365 1.07412 23.8134 0.842091C23.6902 0.610067 23.5119 0.411925 23.2941 0.265161Z"/>
                          </svg>
                        )}
                        {el.url == "/dashboard/forum" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18">
                            <path d="M0 6.64356C0 3.30576 2.7048 0.601562 6.042 0.601562H10.758C14.0958 0.601562 16.8 3.30636 16.8 6.64356C16.8 9.97956 14.0952 12.685 10.758 12.685H7.2V15.6016C7.2 15.6016 0 14.1436 0 6.64356Z"/>
                            <path d="M12.2862 13.7218C13.1855 14.5872 14.3855 15.0699 15.6336 15.0682H17.4V17.4016C17.4 17.4016 24 16.2352 24 10.2352C24 8.95332 23.4908 7.72396 22.5845 6.8175C21.6781 5.91104 20.4488 5.40172 19.167 5.40156H17.841C17.9448 5.79516 18 6.20856 18 6.63516C18 10.1116 15.552 13.0168 12.2862 13.7218Z"/>
                          </svg>
                        )}
                        {el.url == "/dashboard/messages" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18">
                            <path d="M21.2308 0.691406H2.76923C1.2 0.691406 0 1.89141 0 3.46064V14.5376C0 16.1068 1.2 17.3068 2.76923 17.3068H21.2308C22.8 17.3068 24 16.1068 24 14.5376V3.46064C24 1.89141 22.8 0.691406 21.2308 0.691406ZM21.9692 14.9068L14.7692 9.73756L12 11.5837L9.13846 9.73756L2.03077 14.9068L7.84615 8.90679L0.738462 3.36833L12 9.46064L23.1692 3.46064L16.1538 8.9991L21.9692 14.9068Z"/>
                          </svg>
                        )}
                        {el.url == "/dashboard/purchase" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18">
                            <path d="M3.75 0C2.75544 0 1.80161 0.395088 1.09835 1.09835C0.395088 1.80161 0 2.75544 0 3.75V5.7H24V3.75C24 2.75544 23.6049 1.80161 22.9017 1.09835C22.1984 0.395088 21.2446 0 20.25 0H3.75ZM0 14.25V7.2H24V14.25C24 15.2446 23.6049 16.1984 22.9017 16.9017C22.1984 17.6049 21.2446 18 20.25 18H3.75C2.75544 18 1.80161 17.6049 1.09835 16.9017C0.395088 16.1984 0 15.2446 0 14.25ZM16.35 12.3C16.1511 12.3 15.9603 12.379 15.8197 12.5197C15.679 12.6603 15.6 12.8511 15.6 13.05C15.6 13.2489 15.679 13.4397 15.8197 13.5803C15.9603 13.721 16.1511 13.8 16.35 13.8H19.65C19.8489 13.8 20.0397 13.721 20.1803 13.5803C20.321 13.4397 20.4 13.2489 20.4 13.05C20.4 12.8511 20.321 12.6603 20.1803 12.5197C20.0397 12.379 19.8489 12.3 19.65 12.3H16.35Z"/>
                          </svg>
                        )}
                        {el.url == "/dashboard/help" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                            <mask id="mask0_5020_52516" maskType="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="22" height="22">
                            <path d="M19.3333 1H2.66667C2.22464 1 1.80072 1.17559 1.48816 1.48816C1.17559 1.80072 1 2.22464 1 2.66667V19.3333C1 19.7754 1.17559 20.1993 1.48816 20.5118C1.80072 20.8244 2.22464 21 2.66667 21H19.3333C19.7754 21 20.1993 20.8244 20.5118 20.5118C20.8244 20.1993 21 19.7754 21 19.3333V2.66667C21 2.22464 20.8244 1.80072 20.5118 1.48816C20.1993 1.17559 19.7754 1 19.3333 1Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                            <path d="M10.9993 13.5686V11.3464C11.6586 11.3464 12.3031 11.1509 12.8513 10.7846C13.3994 10.4183 13.8267 9.89772 14.0789 9.28863C14.3312 8.67955 14.3973 8.00932 14.2686 7.36272C14.14 6.71612 13.8225 6.12217 13.3564 5.656C12.8902 5.18982 12.2963 4.87236 11.6497 4.74374C11.003 4.61512 10.3328 4.68113 9.72374 4.93342C9.11465 5.18572 8.59406 5.61296 8.22778 6.16112C7.86151 6.70929 7.66602 7.35375 7.66602 8.01302" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.0002 18.5707C11.3686 18.5707 11.7218 18.4244 11.9823 18.164C12.2428 17.9035 12.3891 17.5502 12.3891 17.1819C12.3891 16.8135 12.2428 16.4602 11.9823 16.1998C11.7218 15.9393 11.3686 15.793 11.0002 15.793C10.6319 15.793 10.2786 15.9393 10.0181 16.1998C9.75766 16.4602 9.61133 16.8135 9.61133 17.1819C9.61133 17.5502 9.75766 17.9035 10.0181 18.164C10.2786 18.4244 10.6319 18.5707 11.0002 18.5707Z" fill="black"/>
                            </mask>
                            <g mask="url(#mask0_5020_52516)">
                            <path d="M-2.33398 -2.33203H21.666V24.3346H-2.33398V-2.33203Z"/>
                            </g>
                          </svg>
                        )}
                        {el.url == "/dashboard/settings" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25">
                            <path d="M21.2561 12.3415C21.2561 12.0576 21.2438 11.7861 21.2191 11.5023L23.5146 9.76212C24.0083 9.39188 24.144 8.70075 23.8355 8.15773L21.5276 4.17142C21.3797 3.91001 21.1403 3.7125 20.8556 3.61682C20.5708 3.52115 20.2607 3.53406 19.9849 3.65308L17.3315 4.77616C16.8749 4.45528 16.3936 4.17142 15.8876 3.93694L15.5297 1.08605C15.4556 0.468977 14.9249 0 14.3079 0H9.70448C9.07507 0 8.54438 0.468977 8.47033 1.08605L8.11243 3.93694C7.60643 4.17142 7.12511 4.45528 6.66848 4.77616L4.01505 3.65308C3.44735 3.40625 2.78091 3.6284 2.47237 4.17142L0.16451 8.17007C-0.144028 8.71309 -0.00827135 9.39188 0.485388 9.77446L2.78091 11.5146C2.72975 12.0688 2.72975 12.6265 2.78091 13.1807L0.485388 14.9209C-0.00827135 15.2911 -0.144028 15.9822 0.16451 16.5253L2.47237 20.5116C2.78091 21.0546 3.44735 21.2767 4.01505 21.0299L6.66848 19.9068C7.12511 20.2277 7.60643 20.5116 8.11243 20.746L8.47033 23.5969C8.54438 24.214 9.07507 24.683 9.69214 24.683H14.2955C14.9126 24.683 15.4433 24.214 15.5173 23.5969L15.8752 20.746C16.3812 20.5116 16.8625 20.2277 17.3192 19.9068L19.9726 21.0299C20.5403 21.2767 21.2067 21.0546 21.5153 20.5116L23.8231 16.5253C24.1317 15.9822 23.9959 15.3035 23.5023 14.9209L21.2067 13.1807C21.2438 12.8969 21.2561 12.6253 21.2561 12.3415ZM12.0494 16.661C9.66746 16.661 7.72984 14.7234 7.72984 12.3415C7.72984 9.95958 9.66746 8.02197 12.0494 8.02197C14.4313 8.02197 16.3689 9.95958 16.3689 12.3415C16.3689 14.7234 14.4313 16.661 12.0494 16.661Z"/>
                          </svg>
                        )}
                        {el.url == "/dashboard/logout" && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25">
                            <path d="M1.5 24.6836C1.10218 24.6836 0.720645 24.5572 0.43934 24.3321C0.158036 24.1071 0 23.8019 0 23.4836V1.88359C0 1.56533 0.158036 1.26011 0.43934 1.03507C0.720645 0.810022 1.10218 0.683594 1.5 0.683594H22.5C22.8978 0.683594 23.2794 0.810022 23.5607 1.03507C23.842 1.26011 24 1.56533 24 1.88359V23.4836C24 23.8019 23.842 24.1071 23.5607 24.3321C23.2794 24.5572 22.8978 24.6836 22.5 24.6836H1.5ZM16.5 17.4836L24 12.6836L16.5 7.88359V11.4836H7.5V13.8836H16.5V17.4836Z"/>
                          </svg>
                        )}
                      </>
                      <span className={`duration-300 ${!menuOpened && 'w-0 h-0 overflow-hidden'}`}>
                        {el.title}
                      </span>
                    </span>
                </NavLink>
              </li>
              )
            })}
          </ul>
        </div>
    </>
  )
}

export default MainSideBar
