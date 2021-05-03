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
                    <div className="explain">
                        Code Repos
                    </div><br></br>
                    <p>The frontend and backend are deployed in separate pipelines. The backend is hosted on Heroku, the frontend is hosted using Github pages. You can find their relevant code here:</p>
                    <br></br>
                    <p>Frontend: https://github.com/thomas-hoversen/funbanners-client</p>
                    <p>Backend: https://github.com/thomas-hoversen/funbanners-server</p><br></br>

                    <p>The frontend is a React app and the backend is a Spring Boot application. This site does not use any databases.</p><br></br>
                    <HR ></HR>
                    <div className="explain">
                        Backstory
                    </div><br></br>
                    <p>I made this app because my friend used a few different apps to create a similar image for his birthday invitation. I thought it was cool and wanted experience working with images, so I decided to write this program. The entire project took around 40 hours to complete because the backend went through several iterations.
                        At first it saved the uploaded images to the harddrive, and then saved the filepaths in a SQL db along with the other user selections. The outputted image’s file path was then saved in a corresponding SQL table with the row id of its inputs. 
                        When I decided to use Heroku, I dealt with the ephemeral disk storage by saving the images to the db as blobs rather than the filepaths. After some experimenting with Amazon RDS and Postgresql, I finally decided that
                        no db was needed and refactored the server to just create the new image and return it as a base64 string without saving anything.</p><br></br>
                        <HR ></HR>
                    <div className="explain">
                        Core Flaw 1/2: Memory
                    </div><br></br>
                    <p>The uploaded images are copied to fill the grid size. These copies, let’s say 48 for a 12*4 grid, are held in working memory as Java BufferedImages. This uses a ton of heap space, which wasn't an issue during local development but often needs more working memory than Heroku pods allow on their free tier. This issue severely constrains the upload size and almost prevented me from publishing the site.</p> 
                    <p>
                        Because this project is for fun, works moderately well on desktops and likely won't be used much, I'm comfortable putting my name on it. For desktop users, this app will currently accept up to 5MB of pictures.
                    </p>
                    <p> One possible solution would be to temporarily save the images to the disk and call them only when needed, which uses much less memory than keeping them in working memory as BufferedImages.
                        </p>
                    <HR ></HR>
                    <div className="explain">
                        Core Flaw 2/2: Base64 Strings
                    </div><br></br>
                    <p>
                    This app returns the generated image as a base64 string which the frontend
                    decodes for displaying and downloading the result. I learned when I first deployed 
                    this to the web and accessed it on my phone that most mobile browsers will not decode base64. It seems that most 
                    desktop browsers do, and again, this was for fun, so I'm comfortable leaving this alone for now. 
                    </p>
                    <br></br>
                    <HR ></HR>
                    <br></br>
                    <p>
                        While these are important issues that would not fly in production code, I view this project more as a MVP or proof of concept rather than a final product. If you enjoy this service and or want to share feedback please send an email to funbanners2021@gmail.com. Thanks!
                    </p>
                        
                        <p>- Thomas Hoversen</p>
                </div>
                </Col>
            </Container>
           </div>
        )
    }
}
export default Specs;