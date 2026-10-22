import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL || "https://mwipfbehdmeeainlumgx.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  process.env.SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_EWfrcpXNVJoOoozI2bIP1A_A6dJfjMK";

export async function POST(request: Request) {
  const authorization = request.headers.get("authorization") || "";
  const token = /^Bearer\s+(.+)$/i.exec(authorization)?.[1];
  if (!token) return NextResponse.json({ error: "Sign in again to delete your account." }, { status: 401 });

  let confirmation: unknown;
  try {
    confirmation = (await request.json()).confirmation;
  } catch {
    return NextResponse.json({ error: "Confirm account deletion and try again." }, { status: 400 });
  }
  if (confirmation !== "DELETE") {
    return NextResponse.json({ error: "Confirm account deletion and try again." }, { status: 400 });
  }

  let verification: Response;
  try {
    verification = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
      headers: { apikey: SUPABASE_PUBLISHABLE_KEY, Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
  } catch (error) {
    console.error("Could not verify the account deletion request with Supabase.", error);
    return NextResponse.json({ error: "Could not verify your account. Please try again." }, { status: 502 });
  }
  if (!verification.ok) {
    return NextResponse.json({ error: "Your sign-in session is invalid or expired. Sign in again and retry." }, { status: 401 });
  }

  let user: { id?: unknown };
  try {
    user = await verification.json();
  } catch (error) {
    console.error("Supabase returned an unreadable account during deletion verification.", error);
    return NextResponse.json({ error: "Could not verify your account. Please try again." }, { status: 502 });
  }
  if (typeof user.id !== "string" || !user.id) {
    console.error("Supabase returned a user without an ID during account deletion verification.");
    return NextResponse.json({ error: "Could not verify your account. Please try again." }, { status: 502 });
  }

  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceRoleKey) {
    console.error("Account deletion is disabled: SUPABASE_SERVICE_ROLE_KEY is not configured.");
    return NextResponse.json({ error: "Account deletion is temporarily unavailable. Please contact support." }, { status: 503 });
  }

  let deletion: Response;
  try {
    deletion = await fetch(`${SUPABASE_URL}/auth/v1/admin/users/${encodeURIComponent(user.id)}`, {
      method: "DELETE",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
      },
      cache: "no-store",
    });
  } catch (error) {
    console.error("Could not delete the verified Supabase account.", error);
    return NextResponse.json({ error: "Account deletion failed. Please try again." }, { status: 502 });
  }
  if (!deletion.ok) {
    console.error("Supabase rejected account deletion with status", deletion.status);
    return NextResponse.json({ error: "Account deletion failed. Please try again." }, { status: 502 });
  }

  return new Response(null, { status: 204 });
}
