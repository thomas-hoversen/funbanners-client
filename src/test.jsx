import React from 'react';
import axios from 'axios';
import http from "./http-common";

class Testing extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            width: 5,
            length:15,
            theme: "pride",
            randomLevel: 3,
            imageBytes: null,
        }
    }
    
    onFileChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            selectedFile: e.target.files[0]
        });

        let properties = this.state.width.toString() + "," + this.state.length.toString() + ","
                        + this.state.theme + "," + this.state.randomLevel.toString();
        const formData = new FormData();
        formData.append("files", e.target.files[0]); // needs a promise
        formData.append("properties", properties);
    
        http.post('/upload', formData)
        //.then((res => res.json()))
        .then(res => {
            console.log(res.data);
            this.setState({imageBytes: res.data});
        });
    
    
    //{
        //if(res.ok) {
        //     this.setState({imageBytes: "data:image/png;base64," + res.data});
        // });
        //} else console.log(`failed to save`)});
    }
    
    
    
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                            <div className="form-group files color">
                                <label>Upload Your File </label>
                                {/* <form method="post" encType="multipart/form-data"> */}
                                    <input type="file" multiple accept="image/png, image/jpeg, image/bmp, image/wbmp, image/gif" className="form-control" name="file" onChange={this.onFileChangeHandler}/>
                                {/* </form> */}
                                
                            </div>
                    </div>
                </div>
                <div>
                <img style={{width: 1250, height: 475}} src={"data:image/png;base64," + this.state.imageBytes} />
                </div>
            </div>
        )
      }
}


export default Testing;