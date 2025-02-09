import { NextResponse } from "next/server";

/**
 * Mock a request to get a bearer access token
 */
export async function POST(req: Request) {
  const { grant_type, code } = await req.json();

  if (grant_type !== "authorization_code" || code !== "mock-auth-code-12345") {
    return NextResponse.json({ error: "Invalid authorization code" }, { status: 400 });
  }

  // Simulated access token response
  return NextResponse.json({
    access_token: "mock-access-token-67890",
    token_type: "Bearer",
    expires_in: 3600,
  });
}
