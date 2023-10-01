import {aws_access_key_id, aws_secret_access_key} from "../../../.env"
import { S3Client, HeadObjectCommand  } from "@aws-sdk/client-s3"
export default async function Task2Test(){
    const client = new S3Client();
    const input = { 
      Bucket: "aws-test-game",
      Key: "index.html" 
    };
    const command = new HeadObjectCommand(input);
    try{
        const response = await client.send(command);
        if(response["$metadata"].httpStatusCode === 200){
            return true
        }
        else{
            return false
        }
    } catch(error){
        return(error)
    }
}


async function asyncCall() {
    console.log('calling');
    const result = await Task2Test();
    console.log(result);
    // Expected output: "resolved"
}

  