import React from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import HR from './hr';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/specs.css';

class Specs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
           <div className="specPage">

            <Container fluid>
                <Col  md={{span:8, offset:2}} xs={12}>
                    <div className="explain">
                        This section explains some technical details of the project, my inspiration for it, and some of its core flaws.
                    </div>
                    <HR ></HR>    
                </Col>
                <Col  md={{span:10, offset:1}} xs={12}>
                <div className="define-random">

                    <div>The frontend and server are deployed in separate pipelines. The backend is hosted on Heroku, the frontend is hosted using Github pages. You can find their relevant code here:</div>
                    <div>Frontend: https://github.com/thomas-hoversen/funbanners-client</div>
                    <div>Server: https://github.com/thomas-hoversen/funbanners-server</div><br></br>

                    <div>The frontend is a React app and the server is a Spring Boot application. This site does not use any databases.</div><br></br>
                    <HR ></HR><br></br>
                    <div>I made this app because my friend used a few different apps to create a similar image. I thought it was cool and wanted experience working with images, so recreating his grid picture with a streamlined tool became a side project. The entire project took around 40 hours to complete because it went through several iterations.
                        At first it saved the uploaded images to the harddrive, and then saved the filepaths in a SQL db along with the other user selections. The outputted image was then saved in a corresponding SQL table with the row id of the inputs. 
                        When I decided to use Heroku, I dealt with the ephemeral disk storage by saving the images to the db as blobs rather than the filepaths. After some experimenting with Amazon RDS and Postgresql, I finally decided that
                        no db was needed and refactored the server to just create the new image and return it as a base64 string without saving anything. 
                        Ultimately, for privacy reasons, I think this is the best outcome. </div><br></br>
                        
                    <div>This app has 2 core flaws. First, it uses a ton of heap space and memory to generate new images, usually more memory than Heroku allocates for their free tier. The BufferedImage data structure quickly builds up in memory, and this app uses a lot of them. 
                        The memory issue is so important I almost did not publish this site. Ultimately, it is an optimization problem that I may try resolving in the future. In the meantime this project was for fun, works moderately well on desktops (it's pretty bad on mobile, especially because of flaw 2 below), and likely won't be used much. Therefore
                        I'm comfortable putting my name on it despite its poor memory allocation and the major limitations that imposes, especially it seems for mobile users. <br></br><br></br>
                        The second flaw is that this app returns the generated images 
                        as base64 strings which the frontend decodes both for displaying the result as well as downloading the result. I learned when I first deployed this to the web and accessed it on my phone that some browsers will not decode base64. Most desktop browsers do, and again, this was for fun, so I'm comfortable leaving this alone for now. 
                    </div><br></br>

                    <div>
                        While these are important issues that would not fly in production code, I view this project more as an MVP or proof of concept rather than a final product. If you would like to use this app, desktop yields best results. If you enjoy this service and or want to share feedback please send an email to funbanners2021@gmail.com. Thanks!
                    </div>
                        
                        <div>- Thomas Hoversen</div>
                </div>
                </Col>
            </Container>
           </div>
        )
    }
}
export default Specs;