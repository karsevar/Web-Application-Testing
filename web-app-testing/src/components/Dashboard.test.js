import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Dashboard from './Dashboard';
import {render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

describe('Dashboard', () => {
  it('renders without crashing', () => {
    render(<Dashboard />)
  });

  describe('ball button invoked', () => {
    it('should run a function when clicked', () => {
        const handleBall = (value=1, callback=(value) => value) => {
            return callback(1 + value);
        }
        const mockFn = jest.fn();
        const {getByTestId} = render(<Dashboard handleBall={mockFn} />);
        const button = getByTestId('ball-btn');
        fireEvent.click(button);

        expect(mockFn).toHaveBeenCalled();
    })
    })

    describe('strike button invoked', () => {
        it('should run a function when clicked', () => {
            const handleBall = (value=1, callback=(value) => value) => {
                return callback(1 + value);
            }
            const mockFn = jest.fn();
            const {getByTestId} = render(<Dashboard handleStrike={mockFn} />);
            const button = getByTestId('strike-btn');
            fireEvent.click(button);
    
            expect(mockFn).toHaveBeenCalled();
        })
        })

        describe('hit button invoked', () => {
            it('should run a function when clicked', () => {
                const handleBall = (value=1, callback=(value) => value) => {
                    return callback(1 + value);
                }
                const mockFn = jest.fn();
                const {getByTestId} = render(<Dashboard handleHit={mockFn} />);
                const button = getByTestId('hit-btn');
                fireEvent.click(button);
        
                expect(mockFn).toHaveBeenCalled();
            })
        })

            describe('foul button invoked', () => {
                it('should run a function when clicked', () => {
                    const handleBall = (value=1, callback=(value) => value) => {
                        return callback(1 + value);
                    }
                    const mockFn = jest.fn();
                    const {getByTestId} = render(<Dashboard handleFoul={mockFn} />);
                    const button = getByTestId('foul-btn');
                    fireEvent.click(button);
            
                    expect(mockFn).toHaveBeenCalled();
                })
            })

  
});