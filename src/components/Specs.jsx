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
                        This section explains some of the technical aspects of this project.
                    </div>
                    <HR ></HR>    
                </Col>
                <Col  md={{span:10, offset:1}} xs={12}>
                <div className="define-random">
                <div>This website generates grids of pictures of varying size, color, and "randomness." Randomness is defined by 4 features:</div><br></br>
                    <div>1. For N uploaded images, in what order are they copied to fill the grid size (w * h)?</div>
                    <div>2. In what order are the images colored from the selected theme?</div>
                    <div>3. What shape is used, a rounded square or a circle?</div>
                    <div>4. What direction is the top of the uploaded photo?</div><br></br>

                    <div>The frontend and server are deployed in separate pipelines, both using Heroku. You can find their relevant code here:</div>
                    <div>Frontend: https://github.com/thomas-hoversen/funbanners-client</div>
                    <div>Server: https://github.com/thomas-hoversen/funbanners-server</div><br></br>

                    <div>The frontend is a React app and the server is a Spring Boot application. This site does not use any databases.</div><br></br>
                    <HR ></HR><br></br>
                    <div>I made this because my friend used a few different apps to create a similar image. I thought it was cool and wanted experience working with images, so recreating his grid picture with a streamlined tool became a side project. The entire project took around 40 hours to complete because it went through several iterations.
                        At first it saved the uploaded images to the harddrive, and then saved the filepaths in a SQL db along with the other user selections. The outputted image was then saved in a corresponding SQL table with the row id of the inputs. 
                        When I decided to use Heroku, I delt with the ephemeral disk storage by saving the images to the db as blobs rather than the filepaths. After some experimenting with Amazon RDS and Postgresql, I finally decided that
                        no db was needed and refactored the server to just create the new image and return it as a byte[] without saving anything. 
                        Ultimately, for privacy and security reasons, I think this is the best outcome. If you enjoy this service and or want to share feedback please send an email to funbanners2021@gmail.com. Thanks! </div>
                        <div>- Thomas Hoversen</div>
                </div>
                </Col>
            </Container>
           </div>
        )
    }
}
export default Specs;