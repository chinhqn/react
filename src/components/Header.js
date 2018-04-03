import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target=".navbar-ex1-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand">Home</a>
                    <a className="navbar-brand">About</a>
                    <a className="navbar-brand">Contact</a>
                </div>
            </nav>

        );
    }
}

export default Header;
