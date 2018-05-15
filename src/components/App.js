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
                    <ul className="nav nav-tabs nav-justified " id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab" aria-controls="first" aria-selected="true">First Tab</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="second-tab" data-toggle="tab" href="#second" role="tab" aria-controls="second" aria-selected="false">Second Tab</a>
                        </li>
                    </ul>

                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="first-tab">
                        1 <Slider/>                        
                        </div>
                        <div className="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">2</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;