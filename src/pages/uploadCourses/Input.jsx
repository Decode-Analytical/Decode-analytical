import React from 'react'

const Input = ({label, type, placeholder, name}) => {
  return (
    <div className='flex gap-2 flex-col'>
        <label className="font-semibold text-lg">{label}</label>
        <input name={name} className="border-gray-400 p-3 text-base" type={type} placeholder={placeholder} />
    </div>
  )
}

export default Input