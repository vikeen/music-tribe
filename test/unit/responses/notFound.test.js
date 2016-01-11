import { assert } from 'chai';
import sinon from 'sinon';
import notFound from '../../../api/responses/notFound';

const context = {
  res: {
    status: sinon.spy(),
    jsonx: sinon.spy()
  }
};

describe('responses:notFound', () => {
});
