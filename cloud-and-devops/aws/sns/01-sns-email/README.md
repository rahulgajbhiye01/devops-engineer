# 🧪 Lab: AWS SNS Event Publisher

## 🎯 Objective
Learn how to programmatically publish structured messages to an Amazon Simple Notification Service (AWS SNS) topic using Node.js, TypeScript, and the official `@aws-sdk/client-sns` v3 SDK.

## 🛠️ Stack & Prerequisites
- **Language / Runtime**: Node.js v20+, TypeScript
- **Package Manager**: PNPM (`pnpm-workspace.yaml`)
- **AWS SDK**: `@aws-sdk/client-sns` v3
- **Prerequisites**: An active AWS SNS Topic ARN and AWS credentials (`AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`) set in `.env` or local AWS CLI config.

## 🚀 Procedure & Execution

```bash
# 1. Install dependencies
pnpm install

# 2. Configure environment variables (.env)
# Create a .env file with:
# SNS_TOPIC_ARN=arn:aws:sns:us-east-1:123456789012:my-topic

# 3. Execute publisher script
pnpm dev
```

## 📸 Proof of Learning (Evidence)

```text
$ pnpm dev
> tsx index.ts

{
  "status": "SUCCESS",
  "messageId": "9b1deb4d-3b7d-5b3e-a89c-4f9e61234567",
  "eventId": "usr_9921",
  "httpStatusCode": 200
}
```

## 💡 Key Takeaways & Gotchas
- **Modular SDK v3**: AWS SDK v3 requires importing modular commands (`PublishCommand`) and dispatching them via `sns.send(command)`.
- **Top-Level Await**: TypeScript ES2022 target allows top-level `await sns.send()` execution without async IIFE wrappers.
- **Gotcha (Unchecked Env Vars)**: Always validate `process.env.SNS_TOPIC_ARN` before constructing `PublishCommand`. Passing `undefined` causes an AWS SDK `InvalidParameter` error at runtime.
