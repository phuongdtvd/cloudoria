const AWS = require('aws-sdk');
const readline = require('readline');

const sts = new AWS.STS();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Quest4() {
  rl.question('Enter your IAM user ARN: ', async (userArn) => {
    const params = {
      RoleArn: 'arn:aws:iam::your-account-id:role/royal guard',
      RoleSessionName: 'TestSession',
    };

    try {
      const assumeRoleResponse = await sts.assumeRole(params).promise();
      rl.close();
      return true
    } catch (error) {
      rl.close();
      return false
    }
  });
}

