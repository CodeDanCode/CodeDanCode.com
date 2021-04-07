import React, {useEffect,useState} from 'react';
import Aos from 'aos';
import ModalVideo from 'react-modal-video';

import 'aos/dist/aos.css';
import './projects.css';
import 'react-modal-video/css/modal-video.min.css';

import img1 from './img/p6.jpg';
import img2 from './img/p4.jpg';
import img3 from './img/p5.jpg';


const Projects =()=>{
    useEffect(()=>{
        Aos.init({duration:3000});
    },[]);

    

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 1000;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);

    const [isOpenProject1, setOpenProject1] = useState(false);
    const [isOpenProject2, setOpenProject2] = useState(false);
    const [isOpenProject3, setOpenProject3] = useState(false);
    const [isOpenProject4, setOpenProject4] = useState(false);
    const [isOpenProject5, setOpenProject5] = useState(false);

    return(
        <section className='projects' id='projects'>
            <div className='container box'>
                <h1 data-aos='fade-left' id='projectHeader'>Projects</h1>
                <div className={`${isMobile ? 'mobile-class': 'card-deck'}`}>
                    {/* Project 1 Tool ID Software */}
                    <div className='card' data-aos='fade-right'>
                        <a className='cardImage' href='#FinalModal' data-target="#FinalModal" data-toggle="modal" onClick={()=> setOpenProject1(true)}>
                            <img className="card-img-top" src='https://i.ytimg.com/vi/7cwCDVplHXE/maxresdefault.jpg' alt='Tool Measurement System'></img>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Tool ID App.</h5>
                            <p className="card-text">
                                This project shows how object recognition could be used to help identify
                                the size of hand tools that maybe worn down.
                            </p>
                        </div>
                        <div className='card-footer'>
                            <a className='cardAnchor' href="https://github.com/CodeDanCode/Tool-Id-Software" target="_blank" rel="noreferrer" >
                                <i className="fab fa-github" id='github'></i>
                            </a>
                        </div>
                    </div>

                    {/* Project 2 Faris */}
                    <div className='card' data-aos='flip-left'>
                        <a className='cardImage' href='#FarisModal' data-target="#FarisModal" data-toggle="modal" onClick={()=> setOpenProject2(true)}>
                            <img className="card-img-top" src='https://i.ytimg.com/vi/XpzB-bJoozw/maxresdefault.jpg' alt='Tool Measurement System'></img>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Fa.R.I.S.</h5>
                            <p className="card-text">
                                This project was created to show how image recognition can
                                be used to control a vehicle.
                            </p>
                        </div>
                        <div className='card-footer'>
                            <a className='cardAnchor' href="https://github.com/CodeDanCode/Fa.R.I.S" target="_blank" rel="noreferrer" >
                                <i className="fab fa-github" id='github'></i>
                            </a>
                        </div>
                    </div>

                    {/* Project 3  */}
                    <div className='card' data-aos='flip-up'>
                        <a className='cardImage' href='#CovidModal' data-target="#CovidModal" data-toggle="modal" onClick={()=> setOpenProject3(true)}>
                            <img className="card-img-top" src='https://i.ytimg.com/vi/43SVZ-pjuSs/maxresdefault.jpg' alt='Tool Measurement System'></img>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Covid-19 Tracker</h5>
                            <p className="card-text">
                                This application was developed within a couple of weeks after
                                the coronavirus pandemic hit the U.S.
                            </p> 
                        </div>
                        <div className='card-footer'>
                            <a className='cardAnchor' href="https://github.com/CodeDanCode/CoronavirusTracker" target="_blank" rel="noreferrer" >
                                <i className="fab fa-github" id='github'></i>
                            </a>
                        </div>
                    </div>

                    {/* Project 4 */}
                    <div className='card' data-aos='fade-left'>
                        <a className='cardImage' href='#21Modal' data-target="#21Modal" data-toggle="modal" onClick={()=> setOpenProject4(true)}>
                            <img className="card-img-top" src='https://i.ytimg.com/vi/t-ZAOaq-_4M/maxresdefault.jpg' alt='Tool Measurement System'></img>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">21 Card Game</h5>
                            <p className="card-text">
                                The 21 Card Game is created in Java and uses the Swing library.
                            </p>
                        </div>
                        <div className='card-footer'>
                            <a className='cardAnchor' href="https://github.com/CodeDanCode/21_Card_Game" target="_blank" rel="noreferrer" >
                                <i className="fab fa-github" id='github'></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={`${isMobile ? 'mobile-class': 'card-deck'}`}>
                    {/* Project 5 */}
                    <div className='card' data-aos='fade-up-right'>
                        <a className='cardImage' href='#DigitalLockModal' data-target="#DigitalLockModal" data-toggle="modal" onClick={()=> setOpenProject5(true)}>
                            <img className="card-img-top" src='https://i.ytimg.com/vi/s3pvt_3-JYw/maxresdefault.jpg' alt='Tool Measurement System'></img>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Digital Lock System</h5>
                            <p className="card-text">
                                This Digital Lock System was created using a PIC micro-controller.
                                It was writen in C and is a digital version of the classic combination
                                lock.
                            </p>
                        </div>
                        <div className='card-footer'>
                            <a className='cardAnchor' href="https://github.com/CodeDanCode/PIC16F1855_Digital_Lock" target="_blank" rel="noreferrer" >
                                <i className="fab fa-github" id='github'></i>
                            </a>
                        </div>
                    </div>
                    {/* Project 6 */}
                    <div className='card' data-aos='flip-down'>
                        <a className='cardImage' href='https://lamp.cse.fau.edu/~dleach2018/p6/index.php' target='_blank' rel='noreferrer'>
                            <img className='card-img-top web' src={img1} alt='webProject1'></img>
                        </a>
                        <div className='card-body'>
                            <h5 className="card-title">Popular Baby Names</h5>
                            <p className="card-text">
                                This project asks users to vote on their favorite baby names. 
                                The website uses PHP and SQL to create and store the users votes. 
                            </p>
                        </div>
                        <div className='card-footer'>
                            <a className='cardAnchor' href="https://github.com/CodeDanCode/Baby-Names" target="_blank" rel="noreferrer" >
                                <i className="fab fa-github" id='github'></i>
                            </a>
                        </div>
                    </div>
                    {/* Project 7 */}
                    <div className='card' data-aos='flip-right'>
                        <a className='cardImage' href='https://lamp.cse.fau.edu/~dleach2018/p4/index.html' target='_blank' rel='noreferrer'>
                            <img className='card-img-top web' src={img2} alt='webProject2'></img>
                        </a>
                        <div className='card-body'>
                            <h5 className="card-title">To-Do List</h5>
                            <p className="card-text">
                                The To-Do List uses JavaScript and Jquery. 
                                This project dynamically creates list elements as they are entered. 
                            </p>
                        </div>
                        <div className='card-footer'>
                            <a className='cardAnchor' href="https://github.com/CodeDanCode/jQuery-List" target="_blank" rel="noreferrer" >
                                <i className="fab fa-github" id='github'></i>
                            </a>
                        </div>
                    </div>
                    {/* Project 8 */}
                    <div className='card' data-aos='fade-up-left'>
                        <a className='cardImage' href='https://lamp.cse.fau.edu/~dleach2018/p5/index.php' target='_blank' rel='noreferrer'>
                            <img className='card-img-top web' src={img3} alt='webProject3' ></img>
                        </a>
                        <div className='card-body'>
                            <h5 className="card-title">Currency Converter</h5>
                            <p className="card-text">
                                This project is a Currency Conversion website that uses 
                                PHP to do the conversion on the backend.
                            </p>
                        </div>
                        <div className='card-footer'>
                            <a className='cardAnchor' href="https://github.com/CodeDanCode/currency-converter-php" target="_blank" rel="noreferrer" >
                                <i className="fab fa-github" id='github'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal 1 */}
            <ModalVideo id='FinalModal' channel='youtube' autoplay isOpen={isOpenProject1} videoId="7cwCDVplHXE" onClose={() => setOpenProject1(false)} />
            <ModalVideo id='FarisModal' channel='youtube' autoplay isOpen={isOpenProject2} videoId="XpzB-bJoozw" onClose={() => setOpenProject2(false)} />
            <ModalVideo id='CovidModal' channel='youtube' autoplay isOpen={isOpenProject3} videoId="43SVZ-pjuSs" onClose={() => setOpenProject3(false)} />
            <ModalVideo id='21Modal' channel='youtube' autoplay isOpen={isOpenProject4} videoId="t-ZAOaq-_4M" onClose={() => setOpenProject4(false)} />
            <ModalVideo id='DigitalLockModal' channel='youtube' autoplay isOpen={isOpenProject5} videoId="s3pvt_3-JYw" onClose={() => setOpenProject5(false)} />



        </section>

    );
}

export default Projects;