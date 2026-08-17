import "dotenv/config";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

const sns = new SNSClient();

const command = new PublishCommand({
  TopicArn: process.env.SNS_TOPIC_ARN,
  Subject: "Test from Node.js",
  Message: "Hello from Node.js!",
});

const response = await sns.send(command);

console.log(response);
