import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import {render} from '@testing-library/react';
import { isTSAnyKeyword } from '@babel/types';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
  })
})
