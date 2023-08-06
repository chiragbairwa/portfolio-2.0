"use client"
import { useState } from 'react'

const Contact = () => {
  const [data , setData] = useState({
    senderName: "",
    senderEmail: "",
    senderSubject: "",
    senderMsg: ""
  })

  const formHandler = (e) => {
    e.preventDefault()
    console.log(data)
    
    fetch("/api/contact",{
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
  }

  const inputHandler = (e)=>{
    let element = e.target.name;
    let value = e.target.value;

    setData({...data, [element]:value})
  }

  return (
    <div className="contact mt-16" id="contact">
      <img
        src="/contactus-illustration.svg"
        alt="Contact Me"
      />
      <div className='pr-8'>
        <p className='mb-4 text-3xl'>{"Let's Get in Touch"}</p>

        <form onSubmit={formHandler} className='flex flex-col gap-4'>
          <input type="text" name='senderName' onChange={inputHandler} placeholder="Your Name" />
          <input type="email" name='senderEmail' onChange={inputHandler} placeholder="Your Email" />
          <input type="text" name='senderSubject' onChange={inputHandler} placeholder="Reason for contact" />
          <textarea onChange={inputHandler} name='senderMsg' className='rounded border p-2' placeholder='Your Text'/>
          <button type='submit' className='rounded border py-1 px-2'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
