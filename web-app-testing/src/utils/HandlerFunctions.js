
export const handleHit = () => {

};

export const handleStrike = (strike, callBackStrike, callBackBall) => {
    if(strike === 3) {
        return [callBackStrike(0), callBackBall(0)];
    }
    strike += 1
    return callBackStrike(strike);
};

export const handleBall = (ball, callBackBall, callBackStrike) => {
    if (ball === 4) {
        return [callBackBall(0), callBackStrike(0)];
    }
    const newBall = ball + 1
    return callBackBall(newBall);
};

export const handleFoul = () => {

}
