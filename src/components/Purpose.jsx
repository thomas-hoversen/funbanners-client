import React from 'react';
import { Col, Container, Image } from 'react-bootstrap';
import HR from './hr';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/purpose.css';

class Purpose extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
           <div className="purposePage">
                <Container fluid>
                    <Col  md={{span:10, offset:1}} xs={12}>
                        <div className="explain">
                            Here are some use cases for generating a grid of photos!
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
                </Container>
           </div>
        )
    }
}
export default Purpose;