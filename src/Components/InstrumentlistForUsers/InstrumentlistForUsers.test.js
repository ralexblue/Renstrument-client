import React from 'react';
import ReactDOM from 'react-dom';
import InstrumentlistForUsers from './InstrumentlistForUsers';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InstrumentlistForUsers />, div);
  ReactDOM.unmountComponentAtNode(div);
});