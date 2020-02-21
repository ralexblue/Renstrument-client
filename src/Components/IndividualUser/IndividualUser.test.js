import React from 'react';
import ReactDOM from 'react-dom';
import IndividualUser from './IndividualUser';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IndividualUser />, div);
  ReactDOM.unmountComponentAtNode(div);
});