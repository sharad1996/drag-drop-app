import React, {Component} from 'react';
import {
    Row,
    Col
} from 'reactstrap';

import Tools from "./Tools";
import Canvas from "./Canvas";

class DesignPage extends Component {

    state = {
        files: [],
        image: '',
        text: ''
    };

    handleTextChange = e => {
        this.setState({text: e.target.value});
    };

    handleFileDrop = files => {
        this.setState({
            files,
            image: files[0].preview
        });
    };

    render() {
        return <Row>
            <Col xs={12} md={4}>
                <Tools
                    files={this.state.files}
                    onTextChange={this.handleTextChange}
                    onFileDrop={this.handleFileDrop}/>
            </Col>
            <Col xs={12} md={5}>
                <Canvas
                    text={this.state.text}
                    image={this.state.image}/>
            </Col>
        </Row>;
    }
}

export default DesignPage;