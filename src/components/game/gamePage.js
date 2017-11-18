import React from 'react';
import Game from './game';

class GamePage extends React.Component{
    render(){
        return (
            <div>
                <Game 
                    rows={5}
                    columns={5}
                    activeCellsCount= {6} 
                    allowedWrongAttempts= {3}/>
            </div>
        );
    }

}

export default GamePage;