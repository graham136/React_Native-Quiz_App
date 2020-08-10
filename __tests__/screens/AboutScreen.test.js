import React from 'react';
import renderer from 'react-test-renderer';

import AboutScreen from '../../Screens/AboutScreen';

describe('<AboutScreen />', () => {
  
  // Snaphot test
  it('renders correctly', async () => {
    const tree = renderer.create(<AboutScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});