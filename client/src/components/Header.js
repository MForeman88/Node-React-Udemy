import React, { Component } from 'react';
import { connect } from 'react-redux';

 class Header extends Component {
     renderContent() {
         switch (this.props.auth) {
             case null:
                return;
             case false:
                return 
                // eslint-disable-next-line
                <li><a href="/auth/google">Login With Google</a></li>
             default:
             return 
             // eslint-disable-next-line
             <li><a href="/api/logout"></a></li>
         }
     }
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <a className="left brand-logo">Reminder App</a>
                        <ul className="right">
                           {this.renderContent()}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }   
} 

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
