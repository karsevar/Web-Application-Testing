import React from 'react';

function Dashboard(props) {
    return (
        <div className='dashboard-container'>
            <div className='button-container'>
                <button className='strike-btn' data-testid ='strike-btn' onClick={() => props.handleStrike(props.strike, props.setStrike, props.setBall)}>Strike</button>
                <button className='ball-btn' data-testid ='ball-btn' onClick={() => props.handleBall(props.ball, props.setBall, props.setStrike)}>Ball</button>
                <button className='foul-btn' data-testid ='foul-btn' onClick={() => props.handleFoul(props.strike, props.setStrike, props.setBall)}>Foul</button>
                <button className='hit-btn' data-testid ='hit-btn' onClick={() => props.handleHit(props.setBall, props.setStrike)}>Hit</button>
            </div>
        </div>
    )
}

export default Dashboard;