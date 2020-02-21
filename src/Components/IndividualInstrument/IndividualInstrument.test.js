import React from 'react';
import ReactDOM from 'react-dom';
import IndividualInstrument from './IndividualInstrument';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IndividualInstrument />, div);
  ReactDOM.unmountComponentAtNode(div);
});