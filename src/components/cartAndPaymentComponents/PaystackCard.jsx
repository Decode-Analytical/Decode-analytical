import React, { useState } from 'react'
// import { PaystackButton } from 'react-paystack'
// import { useParams } from 'react-router-dom'
import axios from 'axios';

const paymentKey = import.meta.env.PAYMENT_KEY;
const paymentToken = paymentKey;

export default function PaystackCard(){
  
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [paymentUrl, setPaymentUrl] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'https://decode-mnjh.onrender.com/api/payment/initializedPayment'

    try {
      const response = await axios.post(url, {
        headers: {
            Authorization: `Bearer ${paymentToken}`,
         },
        amount,
        email,
        cardNumber,
        cvv,
        expiryMonth,
        expiryYear
      });
      setPaymentUrl(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <>
        <div>
          {/* <form onSubmit={handleSubmit}>
            <label>
              Amount:
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </label>

            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label> */}
            {/* Add more input fields for card details */}
            {/* ... */}

            {/* <label>
              Card Number:
              <input type="number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
            </label>

            <label>
              Expiry Month:
              <input type="number" value={expiryMonth} onChange={(e) => setExpiryMonth(e.target.value)} />
            </label>

            <label>
              Expiry Year:
              <input type="number" value={expiryYear} onChange={(e) => setExpiryYear(e.target.value)} />
            </label>

            <label>
              CVV:
              <input type="number" value={cvv} onChange={(e) => setCvv(e.target.value)} />
            </label>

            <button type="submit">Submit</button>
          </form> */}
          {paymentUrl && (
            <div>
              <p>Payment URL: {paymentUrl}</p>
              {/* Redirect the user to paymentUrl to complete the payment */}
          </div>
        )}
      </div>
    </>
  )
  }

  // { urlSuccess}
  // const publicKey = "pk_test_9e4f4a1e69f30c6b3199072b2fc90366468ef2cb"
  // const { price } = useParams();
  // const amount = price
  // const [email, setEmail] = useState("")
  // const [name, setName] = useState("")
  // const [phone, setPhone] = useState("")

  // const componentProps = {
  //   email,
  //   amount,
  //   metadata: {
  //     name,
  //     phone,
  //   },
  //   publicKey,
  //   text: "Pay Now",
  //   onSuccess: () => {
  //     window.location.href = urlSuccess;
  //     alert("Thanks for doing business with us! Come back soon!!");
  //   },
  //   onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  // }


    // ==============RETURN===============
      {/* <div className='flex justify-center'>
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
      </div> */}