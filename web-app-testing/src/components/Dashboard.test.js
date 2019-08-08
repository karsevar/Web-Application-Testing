import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Dashboard from './Dashboard';
import {render} from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

describe('Dashboard', () => {
  it('renders without crashing', () => {
    render(<Dashboard />)
  });
  
})