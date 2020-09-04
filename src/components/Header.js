import React from 'react';

function Header(props) {
    return (
        <div className={`header ${props.newColor}`}  id="header">
            <div className="wrapper">
                <nav className="navBar">
                    <div className="logo">
                        <h1>MOODY</h1>
                        <div className="palette">
                            <div className={`colorOne ${props.newColor}`}></div>
                            <div className={`colorTwo ${props.newColor}`}></div>
                            <div className={`colorThree ${props.newColor}`}></div>
                        </div>
                    </div>
                    <label className="switch">
                        <input
                            type="checkbox"
                            defaultChecked
                            onChange={props.handleToggle}
                        />
                        <span className="slider"></span>
                    </label>
                </nav>
            </div>
        </div>
    )
};

export default Header;