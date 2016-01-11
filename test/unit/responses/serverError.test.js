import { assert } from 'chai';
import sinon from 'sinon';
import serverError from '../../../api/responses/serverError';

const context = {
  res: {
    status: sinon.spy(),
    jsonx: sinon.spy()
  }
};

describe('responses:serverError', () => {
});
