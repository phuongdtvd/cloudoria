export default async function Task1Test(){
    const { S3Client, HeadBucketCommand } = require("@aws-sdk/client-s3");
    const client = new S3Client();
    const input = { 
      Bucket: "aws-test-game", 
    };
    const command = new HeadBucketCommand(input);
    try{
        const response = await client.send(command);
        if(response["$metadata"].httpStatusCode === 200){
            console.log(true)
            return true
        }
        else{
            console.log(false)
            return false
        }
    } catch(error){
        return(error)
    }
}


async function asyncCall() {
    console.log('calling');
    const result = await Task1Test();
    console.log(result);
    // Expected output: "resolved"
}

asyncCall()
  