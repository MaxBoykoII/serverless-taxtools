import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  Context,
} from 'aws-lambda';

const LAMBDA_ROOT = '../../src/lambda/http';

async function viaHandler(
  event: Partial<APIGatewayProxyEvent>,
  functionName: string
) {
  const handler: APIGatewayProxyHandler = require(`${LAMBDA_ROOT}/${functionName}`)
    .handler;
  const context = {} as Context;

  return await handler(event as any, context, () => {});
}

export const we_invoke_get_tags = () => viaHandler({}, `getTags`);
