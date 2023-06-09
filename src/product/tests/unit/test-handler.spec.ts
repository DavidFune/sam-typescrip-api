import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { getProducts } from '../../app';

describe('Unit test for app handler', function () {

    const event: APIGatewayProxyEvent = {
        httpMethod: 'get',
        body: '',
        headers: {},
        isBase64Encoded: false,
        multiValueHeaders: {},
        multiValueQueryStringParameters: {},
        path: '/hello',
        pathParameters: {},
        queryStringParameters: {},
        requestContext: {
            accountId: '123456789012',
            apiId: '1234',
            authorizer: {},
            httpMethod: 'get',
            identity: {
                accessKey: '',
                accountId: '',
                apiKey: '',
                apiKeyId: '',
                caller: '',
                clientCert: {
                    clientCertPem: '',
                    issuerDN: '',
                    serialNumber: '',
                    subjectDN: '',
                    validity: { notAfter: '', notBefore: '' },
                },
                cognitoAuthenticationProvider: '',
                cognitoAuthenticationType: '',
                cognitoIdentityId: '',
                cognitoIdentityPoolId: '',
                principalOrgId: '',
                sourceIp: '',
                user: '',
                userAgent: '',
                userArn: '',
            },
            path: '/hello',
            protocol: 'HTTP/1.1',
            requestId: 'c6af9ac6-7b61-11e6-9a41-93e8deadbeef',
            requestTimeEpoch: 1428582896000,
            resourceId: '123456',
            resourcePath: '/hello',
            stage: 'dev',
        },
        resource: '',
        stageVariables: {},
    };
    it('verifies get Products', async () => {

        const result: APIGatewayProxyResult = await getProducts({
            ...event,
            path: '/products',
            requestContext: {
              ...event.requestContext,  
                path: '/products',
              resourcePath: '/products'
            }
        });

        expect(result.statusCode).toEqual(200);

        console.log(result.body);
        
    });
});
