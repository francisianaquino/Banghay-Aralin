import React, { Component } from 'react';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Axios from 'axios';
import '../css/index.css';

export default class FileDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }

    }

    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        Axios.post("http://localhost:8000/upload", data, {
            // receive two    parameter endpoint url ,form data
        })
            .then(res => { // then print response status
                console.log(res.statusText)
            })
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <TreeView
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                    >
                        <TreeItem nodeId="1" label="Grade1">
                            <TreeItem label="English" />
                            <TreeItem label="Science" />
                            <TreeItem label="Math" />
                        </TreeItem>
                        <TreeItem nodeId="2" label="Grade2">
                            <TreeItem label="English" />
                            <TreeItem label="Science" />
                            <TreeItem label="Math" />
                        </TreeItem>
                        <TreeItem nodeId="3" label="Grade3">
                            <TreeItem label="English" />
                            <TreeItem label="Science" />
                            <TreeItem label="Math" />
                        </TreeItem>
                        <TreeItem nodeId="4" label="Grade4">
                            <TreeItem label="English" />
                            <TreeItem label="Science" />
                            <TreeItem label="Math" />
                        </TreeItem>
                        <TreeItem nodeId="5" label="Grade5">
                            <TreeItem label="English" />
                            <TreeItem label="Science" />
                            <TreeItem label="Math" />
                        </TreeItem>
                        <TreeItem nodeId="6" label="Grade6">
                            <TreeItem label="English" />
                            <TreeItem label="Science" />
                            <TreeItem label="Math" />
                        </TreeItem>
                    </TreeView>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group files">
                            <label>Upload Your File </label>
                            <input type="file" name="file" onChange={this.onChangeHandler} />
                        </div>
                        <button type="button" class="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
                    </div>
                </div>
            </div>
        );
    }
}