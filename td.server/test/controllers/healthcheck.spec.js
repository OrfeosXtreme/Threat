import { expect } from 'chai';
import sinon from 'sinon';

import { getMockResponse } from '../mocks/express.mocks.js';
import healthcheck from '../../src/controllers/healthcheck.js';

describe('controllers/healthcheck.js', () => {
    let mockResponse;

    beforeEach(() => {
        mockResponse = getMockResponse();
        healthcheck.healthz({}, mockResponse);
    });

    it('sends a true response', () => {
        expect(mockResponse.send).to.have.been.calledWith(true);
    });
});
