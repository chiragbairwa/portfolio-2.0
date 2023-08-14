"use client"
import Image from 'next/image'
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
    <div className="contact flex flex-col md:flex-row mt-16 justify-between" id="contact">
      <Image
        src="/contactus-illustration.svg"
        alt="Contact Me"
        width={500}
        height={500}
      />
      <div className='pr-8 md:pt-8'>
        <p className='mb-4 text-3xl'>{"Let's Get in Touch"}</p>

        <form onSubmit={formHandler} className='flex flex-col gap-4 text-[currentcolor]'>
          <input type="text" name='senderName' onChange={inputHandler} placeholder="Your Name" />
          <input type="email" name='senderEmail' onChange={inputHandler} placeholder="Your Email" />
          <input type="text" name='senderSubject' onChange={inputHandler} placeholder="Reason for contact" />
          <textarea onChange={inputHandler} name='senderMsg' className='rounded border p-2 text-black' placeholder='Your message'/>
          <button type='submit' className='rounded bg-white text-black border border-[#aaa] py-1 px-2 hover:text-white hover:bg-[#99b4df] hover:border-[#99b4df]'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
