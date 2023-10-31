const AWS = require('aws-sdk');

const secretName = 'secret-treasure';

const secretsManager = new AWS.SecretsManager();

async function Quest3() {
  const params = {
    SecretId: secretName,
  };

  try {
    await secretsManager.describeSecret(params).promise();
    return true
  } catch (error) {
    if (error.code === 'ResourceNotFoundException') {
      return false
    } else {
      console.error('Error checking for secret existence:', error);
    }
  }
}

