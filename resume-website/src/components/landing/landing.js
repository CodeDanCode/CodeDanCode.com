import React from 'react';
import './landing.css';

export default class Landing extends React.Component{

    render(){
        return(
            <section className='landing' id='landing'>
                <div className='landingSub'>
                    <h1>Daniel Leach</h1>
                    <p>Software Engineer</p>
                </div>
            </section>
        );
    }
};

