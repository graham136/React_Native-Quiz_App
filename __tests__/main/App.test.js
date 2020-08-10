import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../App';

describe('<App />', () => {
  
  // Snaphot test
  it('renders correctly', async () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});