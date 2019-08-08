import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Display from './Display';
import {render} from '@testing-library/react';
import { isTSAnyKeyword } from '@babel/types';

describe('Display', () => {
  it('renders without crashing', () => {
    render(<Display />)
  })
})
