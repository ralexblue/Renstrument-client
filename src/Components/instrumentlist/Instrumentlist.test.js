import React from 'react';
import ReactDOM from 'react-dom';
import Instrumentlist from './Instrumentlist';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Instrumentlist />, div);
  ReactDOM.unmountComponentAtNode(div);
});