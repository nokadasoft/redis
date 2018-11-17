import React from 'react';
import ReactDOM from 'react-dom';
import DockerLesson from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DockerLesson />, div);
  ReactDOM.unmountComponentAtNode(div);
});
