import React from  'react';

class Footer extends React.Component{
    remainigCount(){
        if( this.props.gameState !== "recall") { return null;}
        return (
            <div className="remaining-count">
                {this.props.activeCellsCount - this.props.correctGuesses.length}
            </div>
        );
    }
    render(){
        return (
            <div className="footer">
                <div className="hint">
                    {this.props.hints[this.props.gameState]}
                </div>
                {this.remainigCount()}
            </div>
        );
    }
}

Footer.defaultProps = {
    hints: {
        ready: "Get Ready",
        memorize: "Memorize",
        recall : "Recall",
    }
};

export default Footer;
