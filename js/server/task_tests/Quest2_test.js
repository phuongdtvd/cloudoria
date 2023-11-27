async function Task2Test(){
    const { S3Client, HeadObjectCommand } = require("@aws-sdk/client-s3");
    const client = new S3Client({region: 'us-east-1'});
    const input = { 
      Bucket: "aws-test-game",
      Key: "index.html" 
    };
    const command = new HeadObjectCommand(input);
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

module.exports = Task2Test