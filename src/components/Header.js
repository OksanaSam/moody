import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className={`header ${this.props.newColor}`}  id="header">
                <div className="wrapper">
                    <nav className="navBar">
                        <div className="logo">
                            <h1>MOODY</h1>
                            <div className="palette">
                                <div className={`colorOne ${this.props.newColor}`}></div>
                                <div className={`colorTwo ${this.props.newColor}`}></div>
                                <div className={`colorThree ${this.props.newColor}`}></div>
                            </div>
                        </div>
                        <label className="switch">
                            <input
                                type="checkbox"
                                defaultChecked
                                onChange={this.props.handleToggle}
                            />
                            <span className="slider"></span>
                        </label>
                    </nav>
                </div>
            </div>
        )
    };
};

export default Header;