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
               <Slider  />
            </div>
        );
    }
}

export default App;