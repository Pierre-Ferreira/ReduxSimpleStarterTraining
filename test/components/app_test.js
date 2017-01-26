import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';


// Use 'describe' to group together similar tests.
describe('Test the App component', () => {
  let component = ''
  beforeEach(() => {
    component = renderComponent(App)
  })

  it('should render the comment-box component', () => {
    expect(component.find('.comment-box')).to.exist;
  })

  it('should render the comment-list component', () => {
    expect(component.find('.comment-list')).to.exist;
  })
})
