import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-west-2_WVuXa1v67', // Replace with your Cognito User Pool ID
  ClientId: '5o3oonvmrb9cqsvjuoa5vo2kgs' // Replace with your Cognito App Client ID
};

export const userPool = new CognitoUserPool(poolData);

// antonio
// !Vagu1717tony
