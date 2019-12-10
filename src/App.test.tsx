import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import App from './App';
import Main from './containers/main/Main';

it('Renders App component only with Main container inside', () => {
  const renderer = ShallowRenderer.createRenderer();

  renderer.render(<App />);

  const component = renderer.getRenderOutput();

  expect(component.props.children).toEqual(<Main />);
});
