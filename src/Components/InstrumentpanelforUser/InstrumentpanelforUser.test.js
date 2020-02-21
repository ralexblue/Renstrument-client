import React from 'react';
import ReactDOM from 'react-dom';
import InstrumentpanelforUser from './InstrumentpanelforUser';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InstrumentpanelforUser />, div);
  ReactDOM.unmountComponentAtNode(div);
});