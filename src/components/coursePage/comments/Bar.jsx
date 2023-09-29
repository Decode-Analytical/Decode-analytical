import React from 'react'

const Bar = (props) => {
    const {barWidth} = props
  return (
    <div className="w-full h-2 cursor-pointer bg-gray-300">
    <div
       className="h-2 bg-[#040E53] rounded-full"
       style={{ width: barWidth }}
     ></div>
    </div>
  )
}

export default Bar