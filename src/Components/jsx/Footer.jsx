import React from 'react';
import './../css/Footer.css';

const Footer = () => {
    return (
        <>
            <div className='footerOuter'>
                <div className="container footer">
                    <div className="infoSummary">
                        <h4>Shanmukh Magapu</h4>
                        <p><a href="mailto:shanmukhamagapu@gmail.com"><i className="fas fa-envelope"></i>  shanmukhmagapu@gmail.com</a></p>
                        <p><a href="tel:7075667333"><i className="fas fa-phone-alt"></i>  7075667333</a></p>
                        <p><a 
                                href="https://www.google.com/maps/place/Kakinada,+Andhra+Pradesh/@16.9767692,82.1771922,12z/data=!3m1!4b1!4m5!3m4!1s0x3a3827ddaf59b4f7:0x92f8ddb9c89a4803!8m2!3d16.9890648!4d82.2474648?hl=en"
                                target="_blank"
                            ><i className="fas fa-map-marker-alt"></i>  Kakinada,Andhra_pradesh,India</a></p>
                        <p><a href="https://www.linkedin.com/in/shanmukh-magapu-a6639520b" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a></p>
                        <p><a href="https://github.com/SHANMUKH405" target="_blank"><i className="fab fa-github"></i> Github</a></p>
                    </div>
                    <div className="projectSummary">
                        <h4>Projects</h4>
                        <p><a href="https://shanmukh405.github.io/Restaurant-Web-design/" target="_blank">Food_Cart</a></p>
                        <p><a href="https://legalseva.org/" target="_blank">L@Seva</a></p>
                        <p><a href="https://shanmukh405.github.io/Shanmukh-Portfolio/" target="_blank">Resume_webDesign</a></p>
                    </div>
                    <div className="servicesSummary">
                        <h4>Services</h4>
                        <p>Web Development</p>
                        <p>Frontend Development</p>
                        <p>Data Science</p>
                        <p>Backend Development</p>
                    </div>
                </div>
            </div>
            <div className="copyright" style={{ backgroundColor: `gray`, fontSize: '1rem', padding: '0' }}>
                <h1>
                    Illustrations from 
                    <a href='https://www.freepik.com/' target='_blank' style={{ textDecoration: 'none', color: 'white', margin: '0 0.5rem' }}>Freepik</a>
                    and
                    <a href='https://undraw.co/' target='_blank' style={{ textDecoration: 'none', color: 'white', margin: '0 0.5rem' }}>Undraw</a>
                </h1>
            </div>
            <div className="copyright">
                <h1>Copyright &copy; 2022 Shanmukh Magapu. All Rights Reserved</h1>
            </div>
        </>
    )
}

export default Footer
