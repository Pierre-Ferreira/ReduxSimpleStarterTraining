import { expect } from '../test_helper';
import commentsReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {

  it('handels action with unknown type', () => {
    const reducerReturn = commentsReducer(undefined, {type:'WHATEVERS', payload: "dfkjs nkc"});
    expect(reducerReturn).to.be.instanceof(Array);
    expect(reducerReturn).to.eql([]); //Deep array/object comparison.
  });

  it('handels action with no type', () => {
    // expect(commentsReducer(undefined, {})).to.be.instanceof(Array);
    expect(commentsReducer(undefined, {})).to.eql([]); //Deep array/object comparison.
  });

  it('handels action with type SAVE_COMMENT', () => {
    const reducerReturn = commentsReducer(undefined, {type : SAVE_COMMENT, payload : "Insert this comment"});
    expect(reducerReturn).to.eql(["Insert this comment"]);
  });
})
