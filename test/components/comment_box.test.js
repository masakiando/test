import { renderComponent, expect } from '../test_helper.js';
import CommentBox from '../../src/components/commentBox';

describe('CommentBox', () => {
  it('has a text area', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('button')).toexist;
  });
});

// describe
// it
// expect
