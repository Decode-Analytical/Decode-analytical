import React, { useState } from 'react'
import { PaystackButton } from 'react-paystack'

const PaystackCard = ({price, urlSuccess}) => {
  const publicKey = "pk_test_9e4f4a1e69f30c6b3199072b2fc90366468ef2cb"
  const amount = price
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () => {
      window.location.href = urlSuccess;
      alert("Thanks for doing business with us! Come back soon!!");
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  }
  return (
    <>
    <div className='flex justify-center'>
      <div className="border rounded-md border-gray-950 checkout-form px-6 py-3 bg-gray-100">
        <h2 className='text-xl font-semibold text-gray-800 mb-4'>Payment</h2>
        <div className="checkout-field mt-2 flex flex-col">
          <label className='text-gray-800 mb-2'>Name</label>
          <input
            type="text"
            id="name"
            className='px-4 py-2 border-2 border-gray-500 rounded'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="checkout-field mt-2 flex flex-col">
          <label className='text-gray-800 mb-2'>Email</label>
          <input
            type="text"
            id="email"
            className='px-4 py-2 border-2 border-gray-500 rounded'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="checkout-field mt-2 flex flex-col">
          <label className='text-gray-800 mb-2'>Phone</label>
          <input
            type="text"
            id="phone"
            className='px-4 py-2 border-2 border-gray-500 rounded'
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className='mt-8'>
          <PaystackButton className="paystack-button bg-blue-500 text-white py-2 px-4 rounded" {...componentProps} />
        </div>
      </div>
    </div>
      
    </>
  )
}

export default PaystackCard
