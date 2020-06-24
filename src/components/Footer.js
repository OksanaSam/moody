import React, { Component } from 'react';
import logo from '../logo.png';

class Footer extends Component {
    render() {
        return (
            <div className={`footer ${this.props.newColor}`} id="footer">
                <div className="wrapper">
                    <div className="footerFlex">
                        <div>
                            <img className="footerLogo" src={logo} alt="logo" />
                        </div>
                        <ul className="socialIcons">
                            <li><a href="https://github.com/OksanaSam" target="_blank" aria-label="GitHub account"><i aria-hidden="true" className="fab fa-github"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/oksana-samokhvalova-6b03521b0/" target="_blank" aria-label="LinkedIn account"><i aria-hidden="true" className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://twitter.com/oksanadev" target="_blank" aria-label="Twitter Account"><i aria-hidden="true" className="fab fa-twitter"></i></a></li>
                            <li><a href="https://open.spotify.com/playlist/2M9DHDbmG4bGKzeyL2auAq" target="_blank" aria-label="Spotify playlist"><i aria-hidden="true" className="fab fa-spotify"></i></a></li>
                        </ul>
                    </div>
                    <p className="copyright">© 2020 Oksana Samokhvalova</p>
                </div>
            </div>
        )
    }
};

export default Footer;