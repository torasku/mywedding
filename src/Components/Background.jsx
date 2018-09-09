import React, { Component } from 'react';
import logo from '../Assets/savedateNew.png';
import '../Style/background.css';

class Background extends Component {
    render() {
        return (
            <div className="background-image">
                <img src={logo} />
            </div>
        );
    }
}

export default Background;