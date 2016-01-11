import { assert } from 'chai';
import sinon from 'sinon';
import forbidden from '../../../api/responses/forbidden';

const context = {
  res: {
    status: sinon.spy(),
    jsonx: sinon.spy()
  }
};

describe('responses:forbidden', () => {
});
