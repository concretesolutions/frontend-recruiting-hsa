import React from 'react';
import { render } from '@testing-library/react';
import { Footer, Header } from "./components";
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'

 /* Test Suite for render method of the Header and the Footer */

describe('Footer', () => {
  test('renders Footer component', () => {
    render( <Footer />);
  });
});

test('renders Header component', () => {
  const history = createMemoryHistory()
  const route = '/some-route'
  history.push(route)
  render(
    <Router history={history}>
      <Header />
    </Router>
  )
})