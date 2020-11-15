import history from '../History'
import React, { Component } from "react";
import './genderStyle.css';
var listOfImages = [];

export default class Gender extends Component {

    constructor(props) {
        super(props);
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    importAll(r) {
        return r.keys().map(r);
    }

    componentWillMount() {

            if (this.props.type === "male") {
                console.log("Male");
                listOfImages = this.importAll(require.context("../../../Classified_Images/male", true, /\.(jpg)$/));
            }

            if (this.props.type === "female") {
                console.log("Female");
                listOfImages = this.importAll(require.context("../../../Classified_Images/female", true, /\.(jpg)$/));
            }

            if (this.props.type === "both") {
                console.log("Both");
                listOfImages = this.importAll(require.context("../../../Images/", true, /\.(jpg)$/));
            }
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