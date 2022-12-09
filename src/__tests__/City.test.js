import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import City from '../Components/City';

it('City', () => {
  const utils = render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/city" element={<City />} />
        </Routes>
      </Router>
    </Provider>,
  );
  expect(utils).toMatchSnapshot();
});