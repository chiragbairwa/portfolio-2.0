"use client"
import { useState } from 'react'

const Contact = () => {
  const [data , setData] = useState({
    senderName: "",
    senderEmail: "",
    senderSubject: "",
    senderText: ""
  })
  const formHandler = (e) => {
    e.preventDefault()
    console.log(e)
    // Email.send({
    //   Host: 'smtp.elasticemail.com',
    //   Username: process.env.NEXT_PUBLIC_SMTP_USERNAME,
    //   Password: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
    //   To: 'chirag.dev18@gmail.com',
    //   From: 'chirag.dev18@gmail.com',
    //   Subject: data.senderSubject.current.value,
    //   Body: `From ${data.senderName} \n ${data.senderEmail} ,\n ${data.senderText}`,
    // }).then((message) => alert(message))
  }

  const handler = (e)=>{
    console.log(e)
  }

  return (
    <div className="contact mt-16" id="contact">
      <img
        src="/contactus-illustration.svg"
        alt="Contact Me"
      />
      <div>
        <p className='mb-4 text-3xl'>{"Let's Get in Touch"}</p>

        <form onSubmit={formHandler} className='flex flex-col gap-4'>
          <input type="text" name='name' onChange={handler} placeholder="Your Name" />
          <input type="email" name='email' onChange={handler} placeholder="Your Email" />
          <input type="text" name='reason' onChange={handler} placeholder="Reason for contact" />
          <textarea onChange={handler} name='msg' className='rounded border p-2' placeholder='Your Text'/>
          <button type='submit' className='rounded border py-1 px-2'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
