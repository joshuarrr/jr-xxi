import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import LoadingIndicator from './LoadingIndicator.js';

it('renders without crashing', () => {
  shallow(<LoadingIndicator />);
});
