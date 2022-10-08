// import { useRef } from 'react'

const Header = () => {
  // let [header] = useRef(null)

  const themeModeHandler = () => {
    let element = document.body;
    element.classList.toggle("dark-mode");
    console.log("hello")
  }
  return (
    <div className="header">
      <img src="/vercel.svg" height={30}></img>
      <div>
        <nav>
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Work</a>
          <a href="#">Contact</a>
        </nav>
        {/* Dark mode Toggle */}
        <label className="switch" >
          <input type="checkbox" onClick={themeModeHandler}/>
          <span></span>
        </label>
      </div>
    </div>
  );
};

export default Header;
