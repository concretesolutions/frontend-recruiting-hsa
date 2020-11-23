import React from 'react';
import { render } from '@testing-library/react';
import {Home} from "./components"

 /* Test Suite for render method of the Home Component */

describe('Home', () => {
  test('renders Home component', () => {
    render(<Home />);
  });
});