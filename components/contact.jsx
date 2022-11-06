import { useRef } from 'react'

const Contact = () => {
  const senderName = useRef(null)
  const senderEmail = useRef(null)
  const senderSubject = useRef(null)
  const senderText = useRef(null)

  const formHandler = (e) => {
    e.preventDefault()
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: process.env.NEXT_PUBLIC_SMTP_USERNAME,
      Password: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
      To: 'chirag.dev18@gmail.com',
      From: 'chirag.dev18@gmail.com',
      Subject: senderSubject.current.value,
      Body: `From ${senderName.current.value} \n ${senderEmail.current.value} ,\n ${senderText.current.value}`,
    }).then((message) => alert(message))
  }
  return (
    <div className="contact" id="contact">
      <img
        src="/contactus-illustration.svg"
        alt="Contact Me"
        data-aos="fade-right"
        loading='lazy'
      />
      <div data-aos="fade-left">
        <h1>{"Let's Get in Touch"}</h1>
        <form onSubmit={formHandler}>
          <input type="text" ref={senderName} placeholder="Your Name" />
          <input type="email" ref={senderEmail} placeholder="Your Email" />
          <input
            type="text"
            ref={senderSubject}
            placeholder="Reason for contact"
          />
          <textarea ref={senderText}></textarea>
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  )
}

export default Contact
