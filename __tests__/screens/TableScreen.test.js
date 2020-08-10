import React from 'react';
import renderer from 'react-test-renderer';

import TableScreen from '../../Screens/TableScreen';

describe('<TableScreen />', () => {
  
  // Snaphot test
  it('renders correctly', async () => {
    const tree = renderer.create(<TableScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});