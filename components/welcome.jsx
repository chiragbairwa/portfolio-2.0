import Header from './header'

const Welcome = () => {
    return<>
        <div className="welcome">
            <Header />
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
                <button >Resume</button>
                <a href="#"><img src="/github.svg" height={25} /></a>
                <a href="#"><img src="/linkedin.svg" height={25} /></a>
                <a href="#"><img src="/twitter.svg" height={25} /></a>
                <a href="#"><img src="/discord.svg" height={25} /></a>
            </div>
        </div>
    </>    
}

export default Welcome