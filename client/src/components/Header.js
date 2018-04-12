import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a className="left brand-logo"></a>
                        <ul className="right">
                            <li>
                                <a>Login With Google</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        ) 
    }   
} 
