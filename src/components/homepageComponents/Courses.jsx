import React from 'react'
import Coursecomponent from './Coursecomponent'


export default function Courses() {
  return (
    <div className="grid sm:grid-cols-3 gap-5 p-[5%]">
            <Coursecomponent />
            <Coursecomponent />
            <Coursecomponent />
            <Coursecomponent />
            <Coursecomponent />
            <Coursecomponent />
          </div>
  )
}
