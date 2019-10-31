import React, { Component } from 'react';
import { MDBContainer, MDBIframe } from "mdbreact";

export default class DocumentViewer extends Component {
    render() {
        return (
            <MDBContainer className="text-center">
                <MDBIframe src="http://docs.google.com/gview?url=http://infolab.stanford.edu/pub/papers/google.pdf&embedded=true" height="750px" />
            </MDBContainer>
        );
    }
}