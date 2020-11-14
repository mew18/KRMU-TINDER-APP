import history from '../History'
import React, { Component } from "react";
import './page.css';
var listOfImages = [];

export default class Male extends Component {
    importAll(r) {
        return r.keys().map(r);
    }
 
    componentWillMount() {
        console.log("Male");
        listOfImages = this.importAll(require.context("../../../Classified_Images/male", true, /\.(jpg)$/));
    }

    render() {
        return (
            <div className="Male">
                <div className="bg-img"></div>
                <form>
                    <button type="submit" onClick={() => history.push('/')} className="back-hvr-float-shadow"><span>Go Back</span></button>
                </form>
                <div>
                    {
                        listOfImages.map((image, index) => <img key={index} src={image} alt="INVALID URL"></img>)
                    }
                </div>
            </div>
        )
    }
} 