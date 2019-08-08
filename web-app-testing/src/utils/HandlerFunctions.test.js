import React, {useState} from 'react';
import {render} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import {handleBall, handleHit, handleStrike, handleFoul} from './HandlerFunctions';

describe('Testing utilities functions for click handlers', () => {
    describe('Testing handleBall function', () => {
        it('Should increment react useState hook by one', () => {
            expect(handleBall(0, (value) => value, (value) => value)).toBe(1);
            // expect(handleBall(4, (value) => value, (value) => value)).toBe([0,0]);
            // expect(handleBall(3, (value) => value, (value) => value)).toBe([0,0]);
        });
    });

    describe('Testing handleStrike function', () => {
        it('Should increment react useState hook by one', () => {
            expect(handleStrike(0, (value) => value)).toBe(1);
            // expect(handleStrike(3, (value) => value, (value) => value)).toBe([0,0]);
        });
        it('Should reset handleBall and handleStrike hooks if maximum is reached', () => {
            const ball = 3;
            const strike = 3;
            expect()
        })
    });
})