import React from 'react';

class Cell extends React.Component {
  active() {
    return this.props.activeCells.indexOf(this.props.id) >= 0;
  }

  handleClick() {
    if (this.guessState() === undefined && this.props.gameState === "recall") {
      this.props.recordGuess({
        cellId: this.props.id,
        userGuessIsCorrect: this.active()
      });
    }
  }

  guessState() {
    if (this.props.correctGuesses.indexOf(this.props.id) >= 0) {
      return true;
    } else if (this.props.wrongGuesses.indexOf(this.props.id) >= 0) {
      return false;
    }
  }

  render() {
    let className = "cell";
    if (this.props.showActiveCells && this.active()) {
      className += " active";
    }
    if (this.guessState() !== undefined) className += " guess-" + this.guessState();

    return (
      <div className={className} onClick={this.handleClick.bind(this)}>
      </div>
    );
  }
}

export default Cell;