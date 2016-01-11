import { assert } from 'chai';
import sinon from 'sinon';
import badRequest from '../../../api/responses/badRequest';

const context = {
  res: {
    status: sinon.spy(),
    jsonx: sinon.spy()
  }
};

describe('responses:badRequest', () => {
});
