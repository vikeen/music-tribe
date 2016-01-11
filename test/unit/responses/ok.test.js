import { assert } from 'chai';
import sinon from 'sinon';
import ok from '../../../api/responses/ok';

const context = {
  res: {
    status: sinon.spy(),
    jsonx: sinon.spy()
  }
};

describe('responses:ok', () => {
});
