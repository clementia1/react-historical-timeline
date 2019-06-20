import React from 'react';
import axios from 'axios';

class Card extends React.Component {
        constructor() {
            super();
        }

        componentDidMount() {
        }

        render() {


        return (
            <div>
                <div className="card" >
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p claclassNamess="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;