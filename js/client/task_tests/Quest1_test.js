import { S3Client, HeadBucketCommand } from "@aws-sdk/client-s3"; 
import { aws_access_key_id, aws_secret_access_key } from "../AWS.env"
export default async function Task1Test(){
    const client = new S3Client(
        {
            region: 'us-east-1',
            credentials: {
              accessKeyId: aws_access_key_id,
              secretAccessKey: aws_secret_access_key
            }
          }
        );
    const input = { 
      Bucket: "aws-test-game", 
    };
    const command = new HeadBucketCommand(input);
    try {
        const response = await client.send(command);
        return {
            statusCode: response["$metadata"].httpStatusCode,
            error: null
        };
    } catch (error) {
        return {
            statusCode: error.response ? error.response["$metadata"].httpStatusCode : null,
            error: error.message
        };
    }
}


// async function asyncCall() {
//     console.log('calling');
//     const result = await Task1Test();
//     console.log(result);
//     // Expected output: "resolved"
// }

// asyncCall()
  