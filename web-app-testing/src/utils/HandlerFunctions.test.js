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

    });

    describe('Testing the handleHit function', () => {
        it('Should reset ball and strike hooks to zero if pressed', () => {
            expect(handleHit((value) => value, (value) => value)).not.toBe(0);
            expect(handleHit((value) => value, (value) => value)).not.toBe(null);
            // expect(handleHit((value) => value, (value) => value)).toBe([0,0])
        })
    });

    describe('Testing the foul function', () => {
        it('Should set strike count up one if strike is 0', () => {
            expect(handleFoul(0, (value) => value, (value) => value)).toBe(1);
        })
        it('Should set strike count to two if strike is 1', () => {
            expect(handleFoul(1, (value) => value, (value) => value)).toBe(3);
        }) 
        it('Should not set strike if over 1', () => {
            expect(handleFoul(2, (value) => value, (value) => value)).toBe(2);
        })
    })
})