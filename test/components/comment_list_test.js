import CommentList from '../../src/components/comment_list';
import { renderComponent, expect } from '../test_helper';

describe('CommentList Tests', () => {
  let component = '';
  beforeEach(() => {
      component = renderComponent(CommentList);
  });

  it('should have top level component with className "CommentList"', () => {
    expect(component).to.have.class('comment-list');
  })
})
