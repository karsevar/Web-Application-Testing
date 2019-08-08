import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Display from './Display';
import {render} from '@testing-library/react';
import { isTSAnyKeyword } from '@babel/types';
import '@testing-library/react/cleanup-after-each';

describe('Display', () => {
  it('renders without crashing', () => {
    render(<Display />)
  });

  it('Should display Ball count', () => {
    const ball = 0;

    const ballDisplay = render(<Display ball={ball}/>)
    expect(ballDisplay.getByTestId('ball-display'));
  });

  it('Should display Strike Count', () => {
      const strike=0;

      const strikeDisplay = render(<Display strike={strike} />)
      expect(strikeDisplay.getByTestId('strike-display'))
  });
})
