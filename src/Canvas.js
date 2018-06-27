import React from 'react';
import {
    Row,
    Col
} from 'reactstrap';
import {Stage, Layer} from 'react-konva';

import DesignImage from "./DesignImage";

const Canvas = props => {
    return <Row>
        <Col xs={12} className={"canvas-container"}>
            <div className={"object-container"}>
                <img className={"object-img"} src={""} alt={""}/>
                <div className="drawing-area">
                    <Stage width={window.innerWidth} height={window.innerHeight}>
                        <Layer>
                            <DesignImage image={props.image}/>
                        </Layer>
                    </Stage>
                </div>
            </div>
        </Col>
    </Row>;
};

export default Canvas;