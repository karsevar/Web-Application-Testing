import React, {useState} from 'react';
import {render} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import {handleBall, handleHit, handleStrike, handleFoul} from './HandlerFunctions';

describe('Testing utilities functions for click handlers', () => {
    describe('Testing handleBall function', () => {
        it('Should increment react useState hook by one', () => {

            expect(handleBall(0, (value) => value + 1)).toBe(1);
        })
    })
})