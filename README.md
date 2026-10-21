# Orbit

Orbit runs as a Next.js App Router application with TypeScript and React.

## Development

Requires Node.js 18.18 or newer.

```sh
npm install
npm run dev
```

Open the local URL printed by Next.js. Use `npm run build` to create a production build and `npm run start` to serve it.

The original `index.html` remains available as a static entry point. The Next.js route reuses the existing practice and authentication engine while rendering the interface from typed React components.

Vercel is configured to use the Next.js framework preset. If the Vercel project has a custom Root Directory, set it to the repository root so it can read `package.json`, `vercel.json`, and `app/`.
