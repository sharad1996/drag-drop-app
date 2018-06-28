import * as React from 'react';
import { Layer, Stage } from 'react-konva';
import {
  Col,
  Row
} from 'reactstrap';
import DesignImage from "./DesignImage";

const Canvas = (props:any) => {
  return <Row>
    <Col xs={12} className={"canvas-container"} id="canvas">
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