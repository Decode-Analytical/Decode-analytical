import React from 'react'
import { AiOutlineStop } from "react-icons/ai"

const noAuthPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <AiOutlineStop color='red' />
        <h2>You are not Authorize to view this page</h2>
    </div>
  )
}

export default noAuthPage