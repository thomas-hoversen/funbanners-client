import React from 'react';
import { Button, Label, Input } from 'reactstrap';
import { List } from "react-virtualized";
import 'bootstrap/dist/css/bootstrap.css';
import '../style/filelist.css';

class FileList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            files: this.props.files,
            rowHeight: 60
        }
    }

    setFiles = (e) => {
        this.setState({
            files: e.target.files,
        });
        this.props.addFiles(e);
    }

    rowRenderer = ({ index, isScrolling, key, style }) => {
        return (
          <div key={key} className="Trow" style={style}>
            <div className="content">
              <div>{this.state.files[index].name.substr(0, 35)}</div>
            </div>
          </div>
        );
      }

    emptyList = () => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = null)
          );
        this.setState({
            files: undefined
        });
        this.props.clearList();
    }

    render() {
        let listHeight = this.props.files === undefined ? null : this.props.files.length === 1 ? 62 : this.props.files.length === 2 ? 122 : this.props.files.length === 3 ? 182 : 250;
        return (
            <div className="select-files-container">
                <div>
                    <Label style={{fontWeight:"bold"}}>This site doesn't keep or save your images.</Label>
                    <Input type="file" multiple="multiple" accept="image/*" name="file" id="exampleFile" onChange={this.setFiles} />
                </div>
                {this.state.files?
                        <div md={{span:2, offset:1}} xs={{span:10, offset:1}}>
                            <Button onClick={this.emptyList} className="clear-button">Clear Images</Button>
                        </div>
                    : null}
                {this.state.files ?
                <div className="list">
                    <List
                        width={window.screen.width < 400 ? 200 : 275}
                        height={listHeight}
                        rowHeight={this.state.rowHeight}
                        rowRenderer={this.rowRenderer}
                        rowCount={this.state.files.length}
                        data={this.state.files}
                    />
                </div> : null }
            </div>
        )
    }
}
export default FileList;