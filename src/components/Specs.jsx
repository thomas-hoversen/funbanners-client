import React from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import HR from './hr';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/purpose.css';

class Specs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
           <div className="purposePage">

                <div className="define-random">
                    This website generates grids of pictures of varying size, color, and "randomness." Randomness is defined by 4 features:
                    <ul>
                        <li>For N uploaded images, in what order are they copied to fill the grid size (w * h)?</li>
                        <li>In what order are the images colored from the selected theme?</li>
                        <li>What shape is used, a rounded square or a circle?</li>
                        <li>What direction is the top of the uploaded photo?</li>
                    </ul>
                </div>
                {/* <Container fluid>
                    <Col  md={{span:8, offset:2}} xs={12}>
                        <div className="explain">
                            Here are a few use cases for generating a grid of photos!
                        </div>
                        <HR ></HR>    
                    </Col>
                    <Col md={{span:8, offset:2}} xs={12}>
                        <div className="r1">
                            Social media like LinkedIn headers or Facebook page banners.
                        </div>
                        <Image src={require('../images/fun-banners-linkedIn.png').default} fluid className="display-container" />
                    </Col>
                    <Col md={{span:8, offset:2}} xs={12}>
                        <div className="r1">
                            Invitations to social gatherings, business retreats, or special occasions.
                        </div>
                        <Image src={require('../images/invitations.png').default} fluid className="display-container" />
                    </Col>
                    <Col lg={{span:3, offset:4}} sm={{span:6, offset:3}} xs={12}>
                        <div className="r1">
                            Appreciation posts.
                        </div>
                        <Image src={require('../images/otterBirthdayPost.jpg').default} fluid className="display-container insta-post" style={{paddingBottom:"35%",backgroundColor:"#F1F0EB"}} />
                    </Col>
                </Container> */}
           </div>
        )
    }
}
export default Specs;