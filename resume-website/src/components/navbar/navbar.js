import React from 'react';
import './navbar.css';

export default class Navbar extends React.Component {
    state={
        showCollapsedMenu: false
    }


    toggleMenu = () => {
        this.setState({
          showCollapsedMenu: !this.state.showCollapsedMenu
        })
    }

   
    render(){
        const show = (this.state.showCollapsedMenu) ? "show" : "" ;
        return(
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark navbar-custom">
                <div className="container-fluid">
                    <a className="navbar-brand"  href="#landing">CodeDanCode</a>
                    <button className="navbar-toggler" type="button" onClick={this.toggleMenu} data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className={"collapse navbar-collapse " + show} id="navbarNav">
                        <ul className="nav navbar-nav ml-auto header">
                            <li className="nav-item" onClick={this.toggleMenu}>
                                <a className="nav-link " href="#about">About</a>
                            </li>
                            <li className="nav-item"  onClick={this.toggleMenu}>
                                <a className="nav-link" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item"  onClick={this.toggleMenu}>
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
