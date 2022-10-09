const Contact = () => {
  const formHandler = (e) => {
    e.preventdefault()
  }
  return (
    <div className="contact" id="contact">
      <div></div>
      <div>
        <h1>{"Let's Get in Touch"}</h1>
        <form onSubmit={formHandler}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Reason for contact" />
          <textarea></textarea>
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  )
}

export default Contact
