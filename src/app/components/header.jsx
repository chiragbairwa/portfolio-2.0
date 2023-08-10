"use client"
import { useRef, useEffect, useState } from 'react'

const Header = () => {
  let header = useRef(null)
  const [darkMode, setdarkMode] = useState('white')

  useEffect(() => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        header.current.style.boxShadow = '0 0 4px #888888'
        header.current.style.backgroundColor = darkMode
        header.current.style.top = '0'
      } else {
        header.current.style.top = '1rem'
        header.current.style.boxShadow = '0 0 0 #fff'
      }
    }
  }, [darkMode])

  const themeModeHandler = () => {
    if (darkMode === 'white') {
      header.current.style.backgroundColor = '#121212'
      setdarkMode('#121212')
    } else {
      header.current.style.backgroundColor = 'white'
      setdarkMode('white')
    }

    document.body.classList.toggle('dark-mode')
  }
  return (
    <div className="header md:px-24" ref={header}>
      <span>CHIRAG</span>
      <div>
        <nav className='text-lg'>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        {/* Dark mode Toggle */}
        <label className="switch transform-gpu">
          <input type="checkbox" id="dark-mode-toggle" onClick={themeModeHandler} />
          <span></span>
        </label>
      </div>
    </div>
  )
}

export default Header
