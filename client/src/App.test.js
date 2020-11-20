import React from 'react';
import App from './components/App.jsx';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow, configure} from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('rendering components', () => {
  it('renders App component without crashing', () => {
    const wrapper = shallow(<App />);
  });
})