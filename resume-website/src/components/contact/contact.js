import React from 'react';
import './contact.css';


class Contact extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            message: "",
            responseToPost: ""
        };
    }



    handleSubmit= async event => {
        event.preventDefault();
        this.setState({ status: "Sending"});
        const {name,email,message} = this.state

        const apiUrl = process.env.REACT_APP_PORT;
        console.log(apiUrl)

        let templateParams = {
            from_name: name,
            to_name: 'Daniel',
            subject: 'CodeDanCode Contact Form',
            email:email,
            message: message,
        }
        
        const response = await fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({templateParams})
        }).then(
            this.resetForm()
        )
        const result = await response.text();
        alert(result);
    }

    resetForm(){
        this.setState({
            name:'',
            email:'',
            message:'',
            responseToPost: '',
        })
    }

    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }

    render(){
        return(
            <section className='contact' id='contact'>
                <div className='contactBlock'>
                    <div className='title'>
                        <h3>Interested in my work or have a question?</h3>
                        <h2>Contact Me</h2>
                    </div>
                    <br/>
                    <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <input className='form-control' 
                            type='text' 
                            id='name' 
                            placeholder='Name'
                            value={this.state.name}
                            onChange={this.handleChange.bind(this,'name')}
                            required
                        />
                        <input className='form-control' 
                            type="email" 
                            id="email" 
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange.bind(this, 'email')}
                            required
                        />
                        <textarea className="form-control" 
                            type="text" 
                            id="message" 
                            placeholder='Type Message' 
                            rows="5"
                            value={this.state.message}
                            onChange={this.handleChange.bind(this, 'message')}
                            required
                        />
                        <br/>
                        <div className='text-right'>
                            <button type='submit' className='btn btn-outline-dark'>Submit</button>
                        </div>
                    </form>
                </div>
                
                <footer>
                    <div className='footerBlock'>
                    {/* linkedIn */}
                        <a className="footerAnchor" href="https://www.linkedin.com/in/daniel-leach-46bb4b116/" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in" id='linkedin'></i>
                        </a>

                    {/* Github */}
                        <a className="footerAnchor" href="https://github.com/CodeDanCode" target="_blank" rel="noreferrer">
                            <i className="fab fa-github" id='github'></i>
                        </a>

                    {/* Twitch */}
                        <a className="footerAnchor" href="https://www.twitch.tv/codedancode" target="_blank" rel="noreferrer">
                            <i class="fab fa-twitch" id='twitch'></i>
                        </a>

                    {/* Discord */}
                        <a className="footerAnchor" href="https://discordapp.com/users/CodeDanCode#0966/" target="_blank" rel="noreferrer">
                            <i class="fab fa-discord" id="discord"></i>
                        </a>
                    </div>
                </footer>
            </section>
        );
    }
}

export default Contact;