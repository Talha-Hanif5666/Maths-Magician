/* eslint-disable import/no-extraneous-dependencies */
import renderer from 'react-test-renderer';
import Quote from './quote';

describe('Test Quotes component', () => {
  it('Test component should render properly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
