
export const handleHit = (callBackStrike, callBackBall) => {
    callBackStrike(0);
    callBackBall(0);
    return [callBackStrike(0), callBackBall(0)]
};

export const handleStrike = (strike, callBackStrike, callBackBall) => {
    if(strike === 3) {
        callBackStrike(0)
        callBackBall(0) 
        return [callBackStrike(0), callBackBall(0)];
    }
    strike += 1
    return callBackStrike(strike);
};

export const handleBall = (ball, callBackBall, callBackStrike) => {
    if (ball === 4) {
        callBackStrike(0);
        callBackBall(0); 
        return [callBackBall(0), callBackStrike(0)];
    }
    const newBall = ball + 1
    return callBackBall(newBall);
};

export const handleFoul = (strike, callBackStrike, callBackBall) => {
    if (strike === 1) {
        strike += 2
        callBackStrike(0);
        callBackBall(0);
    } else if(strike === 0) {
        strike += 1;
    }
    return callBackStrike(strike);
}
