import CommentList from '../../src/components/comment_list';
import { renderComponent, expect } from '../test_helper';

describe('CommentList Tests', () => {
  let component = '';
  beforeEach(() => {
      const props = { comments: ['First comment', 'next comment']};
      component = renderComponent(CommentList, null, props);
  });

  it('should have top level component with className "CommentList"', () => {
    expect(component).to.have.class('comment-list');
  })

  it('show as an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  })

  it('show all the comments in a given list', () => {
    // expect(component.find('li')[0]).to.have.text('First comment');
    // expect(component.find('li')[1]).to.have.text('next comment');
    expect(component).to.contain('First comment');
    expect(component).to.contain('next comment');
  })
})
