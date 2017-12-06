import React from 'react';

class Point {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }
}

class Rectangle {
  constructor(min, max) {
      this.min = min
      this.max = max
  }

  get width() {
      return this.max.x - this.min.x
  }

  get height() {
      return this.max.y - this.min.y
  }

  draw(ctx) {

  }
}

class Mondrian extends React.Component {

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = 'blue';
    ctx.strokeRect(0, 0, 100, 100);
    ctx.fillRect(0, 0, 100, 100);
  }

  render() {
    const  style= {
      border: "1px solid black"
  };
    return (
    <div>
          <canvas ref="canvas" width={640} height={425} style={style}/>
          <img ref="image"  className="hidden" />
      </div>
    );
  }
}

export default Mondrian;
