import { APIGatewayProxyResult } from 'aws-lambda';
import * as chai from 'chai';

import { we_invoke_get_tags } from '../steps/when';

const expect = chai.expect;

describe(`When we invoke the GET /tags endpoint`, () => {
  it('should return a list of tags', async () => {
    const response = (await we_invoke_get_tags()) as APIGatewayProxyResult;
    const body = JSON.parse(response.body);

    expect(response.statusCode).to.equal(200);
    expect(body).to.have.haveOwnProperty('tags');
    expect(body.tags).to.deep.equal([
      'expense',
      'invoice',
      'income',
      'office-expense',
    ]);
  });
});
