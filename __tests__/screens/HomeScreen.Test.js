import React from 'react';
import renderer from 'react-test-renderer';

import HomeScreen from '../../Screens/HomeScreen';

describe('<HomeScreen />', () => {
  
  // Snaphot test
  it('renders correctly', async () => {
    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});