# CompanyCam Mock Integration — AI Photo Tagging

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Overview

Uses MobileNet model from TensorFlow to automatically generate tags based on image contents. To limit the scope of this proof-of-concept, tags are generated upon login and saved locally to IndexedDB. The OAuth flow is mocked and not integrated with CompanyCam authorization flow.

The model is free/open source so some of the tags are...less than accurate. A finely tuned model based on CompanyCam's primary industries/use cases would yield better results.


## Getting Started
First, duplicate example.env as .env.local and set environment variable values.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.