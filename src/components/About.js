import React from 'react'
import { ReactComponent as Fish } from '../fish-01.svg';

function About() {
    return (
        <section className='about'>
            <h2 className='section-heading'>
                About Me
            </h2>
            <div className='about-text'>
                <div className='about-styled-text'>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices eros in cursus turpis massa tincidunt. A diam sollicitudin tempor id. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum varius sit amet mattis vulputate enim nulla aliquet. Tortor posuere ac ut consequat semper. A arcu cursus vitae congue mauris rhoncus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo laoreet sit amet cursus sit amet dictum.</p>
                        <p>Here are some languages and libraries I’ve been worked with:</p>
                    </div>
                    <ul className='skills'>
                        {['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL', 'React', 'Vue', 'Node'].map((value) => {
                            return <li key={value}>{value}</li>
                        })}
                    </ul>
                </div>
                <div className='about-styled-picture'>
                    <div className='pic-wrap'>
                        <Fish className='svg'/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;