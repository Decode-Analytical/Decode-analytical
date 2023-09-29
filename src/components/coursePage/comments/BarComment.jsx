import React from 'react'
import { AiFillStar } from "react-icons/ai";
import Bar from './Bar'

const BarComment = ({barwidth, ratingvalue}) => {
    const Carray = new Array(5).fill(";")
  return (
    <div className="w-full flex items-center">
    <Bar
      barWidth={barwidth}
    />
    {Carray.map((value, index) => {
      const updateIndex = index + 1
      return (
      <div key={index}>
        <AiFillStar color={updateIndex<= ratingvalue ? "#ffc107" : "#e4e5e9"} size={20} />
      </div>
      )
    })}
</div>
  )
}

export default BarComment