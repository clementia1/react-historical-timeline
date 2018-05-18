import React from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/dist/rc-slider.min.css';

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        const style = {
            width: 'auto',
            margin: 50
        };
        const marks = {
            5: {
                style: {
                },
                label: 'March 1939'
            },
            15: {
                style: {                   
                },
                label: 'April 1939'
            },
            30: {
                style: {                    
                },
                label: <strong>May 1939</strong>
            },
            45: {
                style: {                   
                },
                label: 'May 1941'
            },
            70: {
                style: {                    
                },
                label: 'June 1941'
            },
            100: {
                style: {
                    color: 'red',                    
                },
                label: <strong>July 1941</strong>,
            },
        };

        return (
            <div>
                <div className="container-fluid">
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
                            <div className="row">
                                <div className="col">

                                    <div class="form-row">
                                        <div class="col">
                                        <input type="text" class="form-control" placeholder="Event title"/>
                                        </div>                                        
                                    </div>
                                    <div class="form-row">
                                        <div class="col">
                                        <input type="text" class="form-control" placeholder="Event summary"/>
                                        </div>                                        
                                    </div>
                                </div>
                                <div className="col">
                                Preview area
                                    <div style={style}>                                
                                        <Slider min={0} marks={marks} step={null} defaultValue={0} />
                                    </div>                                  
                                </div>
                            </div>
                   
                        </div>
                        <div className="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">2</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;