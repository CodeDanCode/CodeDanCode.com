import React, {useEffect}from 'react';
import Aos from 'aos';

import 'aos/dist/aos.css';
import './about.css';

const About = () =>{

    useEffect(()=>{
        Aos.init({durration:3000});
    },[]);

    return(
        <section className="about" id='about'>
            <div className='slide' >
                <h1  id='aboutHeader' data-aos='fade-right'>About Me</h1>
            </div>
            <h2 className='aboutIntro' data-aos='fade-right'>
                    Hi. I'm Daniel, welcome to my website. Please take a look around!
            </h2>
            <div className='contentBlock' >    
                <p className='aboutP'data-aos='fade-left'>
                    I am a recent Florida Atlantic University graduate who is passionate about
                    software engineering. I have a wide range of skills that can benefit any project
                    and can be seen in my work. My interests are in application development but I also
                    enjoy other aspects of software engineering such a machine learning, data science, and
                    embedded systems.
                </p>
            </div>            
        </section>
    );
};

export default About;
