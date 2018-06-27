import * as React from 'react';
import { Component } from 'react';
import { Layer, Stage, Text } from 'react-konva';
import ColoredRect from './ColoredRect';

class App extends Component {
  public render() {
    return (
      <div className="container">
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Text text="Try click on rect" />
            <ColoredRect />
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default App;