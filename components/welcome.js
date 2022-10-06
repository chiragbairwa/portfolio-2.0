const Welcome = () => {
    return<>
        <div className="welcome-photo">
            <img src="/hero.png" />
            <div></div>
        </div>
        <div className="welcome-msg">
            <h2>Hi, I'm Chirag</h2>
            <h1>Full Stack Developer.</h1>
            <h3>I love creating sleek UI & bring them to life with code.</h3>
        </div>
        <div className="welcome-cta">
            <a href="#">Resume</a>
            <img src="/github.svg" height={25}></img>
            <img src="/linkedin.svg" height={25}></img>
            <img src="/twitter.svg" height={25}></img>
            <img src="/discord.svg" height={25}></img>
        </div>


    </>
}

export default Welcome