import React from 'react';

function Display(props) {
    return (
        <div className='display-container'>
            <div className='ball-count'>
                <h3>Ball Count</h3>
                <h4 data-testid='ball-display'>{props.ball}</h4>
            </div>

            <div className='strike-count'>
                <h3>Strike Count</h3>
                <h4 data-testid='strike-display'>{props.strike}</h4>
            </div>
        </div>
    )
}

export default Display;