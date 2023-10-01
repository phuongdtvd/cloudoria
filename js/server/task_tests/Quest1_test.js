async function Task1Test(){
    const { S3Client, HeadBucketCommand } = require("@aws-sdk/client-s3");
    const client = new S3Client();
    const input = { 
      Bucket: "aws-test-game", 
    };
    const command = new HeadBucketCommand(input);
    try {
        const response = await client.send(command);
        return {
            completed: true,
            statusCode: response["$metadata"].httpStatusCode,
            error: null
        };
    } catch (error) {
        return {
            completed: false,
            statusCode: error.response ? error.response["$metadata"].httpStatusCode : null,
            error: error.message
        };
    }
}

module.exports = Task1Test
  