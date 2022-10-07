import { useRef } from 'react'

const Header = () => {
  let [header] = useRef(null)

  //   console.log(header.current)
  return (
    <div className="header" ref={header}>
      <img src="/vercel.svg" height={30}></img>
      <div>
        <nav>
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Work</a>
          <a href="#">Contact</a>
        </nav>
        <div></div>
      </div>
    </div>
  )
}

export default Header
