import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../../src/components/search/SearchBar';

describe('<SearchBar />', () => {
  const component = shallow(
    <SearchBar />
  );
  
  it('renders', () => {
    expect(component.html()).toContain('search-bar');
  });
});