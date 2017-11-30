import React from 'react';

class Canvas extends React.Component {
  componentDidMount() {
      this.updateCanvas();
  }
  updateCanvas() {
      const ctx = this.refs.canvas.getContext('2d');
      ctx.fillRect(0,0, 100, 100);
  }
  render() {
      return (
          // <canvas ref="canvas" width={700} height={100}/>
          <canvas id="doodle" width="800" height="600" style="border:3px solid #000000;"></canvas>
      );
  }
}

export default Canvas;
