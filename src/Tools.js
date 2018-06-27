import React, {Component} from 'react';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
    FormGroup,
    Label
} from 'reactstrap';
import classnames from 'classnames';
import Dropzone from 'react-dropzone';

const style = {
  borderColor: 'rgb(255, 255, 255)',
  borderRadius: '5px',
  borderStyle: 'none',
  borderWidth: '0px',
  height: '20px',
  position: 'relative',
  width: '100px'
}

class Tools extends Component {
    state = {
        activeTab: '1'
    };

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    render() {
        return <Row>
            <Col xs={12}>
                <div>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <FormGroup>
                                        <button className="dropzone-container">
                                            <Dropzone style={style} onDrop={this.props.onFileDrop}>
                                            Select picture
                                            </Dropzone>
                                        </button>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
            </Col>
        </Row>;
    }
}

export default Tools;