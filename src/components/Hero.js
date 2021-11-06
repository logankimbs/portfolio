import React from 'react'

function Hero() {
    return (
        <section className='hero'>
            <div>
                <h1 className='greeting'>Hey, my name is</h1>
            </div>
            <div>
                <h1 className='sirname'>Logan Kimball.</h1>
            </div>
            <div>
                <h1 className='whatido'>I build things for the web.</h1>
            </div>
            <div>
                <p className='shortintro'>
                    I revel in building and designing efficient programs that enhance
                    user experience. With the use of agile methodologies I am a pro at
                    pushing the boundaries of customer needs without succumbing to scope creep.
                </p>
            </div>
            <div className='resume'>
                <button className='resume-btn big'>
                    <a href='../portfolio/src/resume.pdf' download>Check out me resume</a>
                </button>
            </div>
        </section>
    );
}

export default Hero;
