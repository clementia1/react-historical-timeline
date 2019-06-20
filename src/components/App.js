import React from 'react';
import axios from 'axios';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/dist/rc-slider.min.css';
import svgfile from '../static/svg/ukraine.svg';
import SvgComponent from './SvgComponent.js';
import Card from './Card.js';

class App extends React.Component {
        constructor() {
            super();
            this.state = {
                events: [],
                value: 0,
                currentEventID: null
            }
        }

        componentDidMount() {
            axios.get('/api/getevents').then((response) => {
                this.setState({
                    events: response.data
                })
            });
        }

        onSliderChange = (value) => {
            this.setState({value});
        }

        handleClick = (e) => {
            console.log(e.target)
        }

        render() {
            const style = {
                width: 'auto',
                margin: 10
            };

            const marks = {};

            function addElement (marks, element) {
                let newList = Object.assign(marks, element)
                return newList
            }
            

            this.state.events.forEach((item, index) => {                
                let percent = 50;
                if (index == 0) {
                    addElement(marks, { 0: {style: {}, label: [item.date] }})
                } else if (index == this.state.events.length - 1) {
                    addElement(marks, { 100: {style: {}, label: [item.date] }})
                } else {
                    addElement(marks, { [percent]: {style: {}, label: [item.date] }})
                }
            })
            /*const marks = {
                5: {
                    style: {},
                    label: 'March 1939'
                },
                15: {
                    style: {},
                    label: 'April 1939'
                },
                30: {
                    style: {},
                    label: <strong>May 1939</strong>
                },
                45: {
                    style: {},
                    label: 'May 1941'
                },
                70: {
                    style: {},
                    label: 'June 1941'
                },
                100: {
                    style: {
                        color: 'red',                    
                    },
                    label: <strong>July 1941</strong>,
                },
            }; */

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
                                <div className="col-3">
                                    <Card/>
                                </div>
                                <div className="col-9">
                                    <div className="map-box">
                                        {/* <img src={svgfile} className="map" alt="Map" /> */}
                                        <SvgComponent />
                                    </div>
                                    <div style={style}>                                
                                        <Slider min={0} marks={marks} step={null} value={this.state.value} onMouseDown={this.handleClick} onChange={this.onSliderChange}/>
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