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

## Account deletion

The profile page can permanently delete the signed-in Supabase Auth account. The server verifies the caller's access token before using the Supabase Admin API; deleting the Auth user also removes their `public.progress` row through its `ON DELETE CASCADE` foreign key.

Configure `SUPABASE_SERVICE_ROLE_KEY` as a server-only environment variable in local development and the deployment platform. Use the service-role key from the Supabase project settings; never expose it through a `NEXT_PUBLIC_` variable or client code. `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` may be set to override the existing project defaults.
