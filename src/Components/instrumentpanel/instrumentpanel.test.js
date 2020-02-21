import React from 'react';
import ReactDOM from 'react-dom';
import Instrumentpanel from './Instrumentpanel';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Instrumentpanel />, div);
  ReactDOM.unmountComponentAtNode(div);
});