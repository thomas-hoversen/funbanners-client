import React from 'react';
import http from "../http-common";
import { Col, Row, Container, Image } from 'react-bootstrap';
import { Button, Input } from 'reactstrap';
import FileList from './FileList';
import HR from './hr';
import Alert from 'react-bootstrap/Alert'
import 'bootstrap/dist/css/bootstrap.css';
import '../style/mainBody.css';

class MainBody extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            files: undefined,
            width: 1,
            height: 1,
            theme: "random",
            rLevel: 1,
            imageBytes: null,
            alert: false,
            message: "",
            type: "",
            prevW: 1,
            prevH: 1,
            hovered: false,
            prevT: "random"
        }
    }

    setFiles = (e) => {
        this.setState({
            files: e.target.files,
        });
    }

    setWidth = (e) => {
        this.setState({width: e.target.value});
    }

    setHeight = (e) => {
        this.setState({height: e.target.value});
    }

    setTheme = (e) => {
        this.setState({theme: e.target.value});
        if (e.target.value == "Random") {
            this.setState({theme: "random"});
        } else if (e.target.value == "Pride - Dark") {
            this.setState({theme: "pride"});
        } else if (e.target.value == "Pride - Light") {
            this.setState({theme: "pride2"});
        } else if (e.target.value == "The New iPhone") {
            this.setState({theme: "iphone"});
        } else if (e.target.value == "Royal") {
            this.setState({theme: "newRoyal"});
        } else if (e.target.value == "Coleus") {
            this.setState({theme: "coleus"});
        } else if (e.target.value == "Pumkin Spice") {
            this.setState({theme: "pumkin"});
        } else {
            this.setState({theme: "none"});
        }
    }

    setRValue = (e) => {
        if (e.target.value == "Not Random") {
            this.setState({rLevel: 1});
        } else if (e.target.value == "Random") {
            this.setState({rLevel: 2});
        } else {
            this.setState({rLevel: 3});
        }
    }

    onSubmit = () => {
        if (this.state.files != undefined) {
        this.setState({alert: false, prevW: this.state.width, prevH: this.state.height, prevT: this.state.theme});

        let properties = this.state.height.toString() + "," + this.state.width.toString() + ","
        + this.state.theme + "," + this.state.rLevel.toString();

        const formData = new FormData();
        for (let i = 0; i < this.state.files.length; i++) {
            formData.append("files", this.state.files[i]);
        }
        formData.append("properties", properties);

        setTimeout(()=> {
            if (!this.state.imageBytes && !this.state.alert) {
                this.setState({alert: true, type: "primary", message: "Our servers may be starting. This takes up to 30 seconds. Subsequent requests should be much shorter."});
            }
        }, 5000);

        let self = this;
        http.post('/upload', formData)
        .then(res => {
            this.setState({imageBytes: res.data, alert: false});
        }).catch(function (error) {
            console.log(error);
            self.setState({alert: true, type: "danger", message: "An error occurred. Please try again. There is a picture upload limit of 2MB. Mobile devices may not work at all. Please see Website Specs for details."});
        });
        }
    }

    setAlert = (message, type) => {
        this.setState({alert: true, message: message, type: type});
    }

    downloadImage = () => {
        window.location.href = 'data:application/octet-stream;base64,' + this.state.imageBytes;
    }

    clearListFromChild = () => {
        this.setState({files: undefined});
    }

    getSource = () => {
        if (this.state.imageBytes == undefined) {
            switch(this.state.theme) {
                case "pride2":
                    return require('../images/pride_light' + this.state.rLevel +'.png').default;
                case "iphone":
                    return require('../images/iphone' + this.state.rLevel +'.png').default;
                case "newRoyal":
                    return require('../images/newRoyal' + this.state.rLevel +'.png').default;
                case "coleus":
                    return require('../images/coleus' + this.state.rLevel +'.png').default;
                case "pumkin":
                    return require('../images/pumkin' + this.state.rLevel +'.png').default;
                case "none":
                    return require('../images/none' + this.state.rLevel +'.png').default;
                default:
                    return require('../images/pride_dark' + this.state.rLevel +'.png').default;
            }
        } else return 'data:application/octet-stream;base64,' + this.state.imageBytes;
    }

    render() {
        //let widthI = this.state.prevW == 1 ? 120 : this.state.prevW == 2 ? 200 : this.state.prevW == 3 ? 245 : this.state.prevW*75
        //let heightI = this.state.prevH == 1 ? 120 : this.state.prevH == 2 ? 200 : this.state.prevH == 3 ? 245 : this.state.prevH*75
        //style={{width:this.state.imageBytes == undefined ? 900 : widthI,height:this.state.imageBytes == undefined ? 300 : heightI}}
        let imageS = this.getSource();
        return (
            <div className="bodyPage">
                <Container fluid>
                    <Row>
                        <Col md={{span:10, offset:1}} xs={12} >
                            <div style={{fontWeight:"bold", paddingTop:"3%"}}>Note: This tool is a proof of concept and should only be used on desktop computers. Mobile devices may not work. See website specs for more info.</div>
                            <Image src={imageS} fluid className="display-container" style={{maxWidth:"100%", height:"auto"}} />
                            {/* {this.state.theme == undefined || this.state.prevT == "random" && this.state.theme == "random" ?
                            <div>Theme: {this.state.theme}, Randomness: {this.state.rLevel}</div> 
                            : null
                            } */}
                            {this.state.alert ? 
                            <Alert variant={this.state.type}>{this.state.message}</Alert>
                            : null}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{span:3, offset:2}} xs={{span:10, offset:1}}>                        
                        {this.state.imageBytes == null ?
                         <div className="disabled-download">Download</div>
                        : <a href={'data:application/octet-stream;base64,' + this.state.imageBytes} download="amazing-fun-banners-image.png" className="download-button" >Download</a>
                        }
                        {/* <div style={{fontWeight:"bold", marginTop:"3%"}}>Downloaded image may be higher quality.</div> */}
                        </Col>
                    </Row>
                    <HR ></HR>
                    <Row className="mainRow">
                    <Col md={{span:3, offset:2}} sm={{span:4, offset:1}} xs={{span:10, offset:1}}>
                        <FileList
                            addFiles={this.setFiles}
                            files={this.state.files}
                            clearList={this.clearListFromChild}
                            >
                        </FileList>
                    </Col>
                    <Col md={{span:3, offset:2}} sm={{span:3, offset:3}} xs={{span:10, offset:1}} >
                    <Row>
                        <div style={{fontWeight:"bold",marginBottom:"3%"}}>Before submitting, select different themes and random levels to preview above.</div>
                    <div for="exampleSelect" style={{fontWeight:"bold"}}>Width</div>
                        <Input type="select" name="select" id="exampleSelect" onChange={this.setWidth} style={{marginBottom:"3%"}}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </Input>
                        <div style={{fontWeight:"bold"}}>Height</div>
                        <Input type="select" name="select" id="exampleSelect" onChange={this.setHeight} style={{marginBottom:"3%"}}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </Input>
                    </Row>
                    <Row>
                        <div style={{fontWeight:"bold"}}>Theme</div>
                        <Input type="select" name="select" onChange={this.setTheme} style={{marginBottom:"3%"}}>
                            <option>Random</option>
                            <option>Pride - Dark</option>
                            <option>Pride - Light</option>
                            <option>The New iPhone</option>
                            <option>Royal</option>
                            <option>Coleus</option>
                            <option>Pumkin Spice</option>
                            <option>None</option>
                        </Input>
                        <div style={{fontWeight:"bold"}}>Randomness</div>
                        <Input type="select" name="select" onChange={this.setRValue} style={{marginBottom:"3%"}}>
                            <option>Not Random</option>
                            <option>Random</option>
                            <option>Party</option>
                        </Input>
                        <Button className="submitB" onClick={this.onSubmit} block >Submit</Button>
                    </Row>
                    </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default MainBody;