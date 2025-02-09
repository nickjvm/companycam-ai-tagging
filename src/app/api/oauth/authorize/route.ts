import { NextResponse } from "next/server";

/**
 * Mock an auth code response
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const client_id = searchParams.get("client_id");
  const redirect_uri = searchParams.get("redirect_uri");
  const response_type = searchParams.get("response_type");

  if (!client_id || !redirect_uri || response_type !== "code") {
    return NextResponse.json({ error: "Invalid request parameters" }, { status: 400 });
  }

  // Simulate an authorization code
  const mockAuthCode = "mock-auth-code-12345";

  // Redirect the user back to the frontend with the mock auth code
  return NextResponse.redirect(`${redirect_uri}?code=${mockAuthCode}`);
}
