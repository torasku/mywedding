import React, { Component } from 'react';
import SaveTheDateHeader from './SaveTheDateHeader';
import Background from './Background';

class SaveTheDateContainer extends Component {
    render() {
        return (
            <div className="frontpage-container">
                <SaveTheDateHeader/>
                <Background/>
            </div>
        );
    }
}

export default SaveTheDateContainer;