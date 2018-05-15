import React from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/dist/rc-slider.min.css';

class App extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                        One of three columns
                        <Slider  />
                        </div>
                        <div className="col-sm">
                        One of three columns
                        </div>
                        <div className="col-sm">
                        One of three columns
                        </div>
                    </div>
                </div>               
            </div>
        );
    }
}

export default App;