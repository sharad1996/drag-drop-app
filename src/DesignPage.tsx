import * as React from 'react';
import { Col, Row } from 'reactstrap';
import Canvas from './Canvas';
import Tools from './Tools';

class DesignPage extends React.Component {

    public state = {
        files: [],
        image: '',
        text: ''
    };

    public handleTextChange = (e: any) => {
        this.setState({text: e.target.value});
    };

    public handleFileDrop = (files: any) => {
        this.setState({
            files,
            image: files[0].preview
        });
    };

    public render() {
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