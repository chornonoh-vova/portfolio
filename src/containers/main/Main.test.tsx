import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Main from './Main';

it('Renders Main component with sections inside', () => {
  const renderer = ShallowRenderer.createRenderer();

  renderer.render(<Main />);

  const component = renderer.getRenderOutput();

  expect(component.type).toEqual('div');
});
