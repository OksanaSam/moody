import React, { Component } from 'react';

class Header extends Component {

    handlePrint = () => {
        window.print();
    }

    toggleClass = () => {
        const oldStyle = document.getElementById('test').className;
        const newClassName = oldStyle === 'mainGrid' ? 'newMainGrid' : 'mainGrid'
        document.getElementById('test').className =  newClassName;
      }

    render() {
        return (
            <div className='header'>
                <div className="wrapper">
                    <nav className="navBar">
                        <div className="logo">
                            <p>MOODY</p>
                        </div>
                        <button onClick={this.toggleClass}>Toggle</button>
                        <ul className="hamburger">
                        {/* <input type="checkbox" id="toggle" name="toggle"/> */}
                            
                        </ul>
                        <button className="print" onClick={this.handlePrint}><i className="fas fa-print"></i></button>
                    </nav>
                </div>
            </div>
        )
    }
};

export default Header;