import 'source-map-support/register';

import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (
  _: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const tags = ['expense', 'invoice', 'income', 'office-expense'];

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-origin': '*',
    },
    body: JSON.stringify({
      tags,
    }),
  };
};
