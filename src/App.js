import React, { Component } from 'react';
import './App.css';
import FileDirectory from './components/FileDirectory';
import DocumentViewer from './components/DocumentViewer';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import Header from './components/Header';
import './css/index.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MDBContainer>
          <MDBRow>
            
            <MDBCol md="4" className="border">
              
                <FileDirectory />
              
            </MDBCol>
            <MDBCol md="8">
            
              <DocumentViewer />
            
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}