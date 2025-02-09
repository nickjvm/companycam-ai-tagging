"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { deletePhotoTags } from "@/utils/indexedDB";

const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL!;
const TOKEN_URL = process.env.NEXT_PUBLIC_TOKEN_URL!;
const CLIENT_ID = process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID;
const REDIRECT_URI = process.env.NEXT_PUBLIC_OAUTH_REDIRECT_URI;

export function useAuth() {
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  const login = () => {
    window.location.href = `${AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  };
  
  const fetchAccessToken = useCallback(async (code: string) => {
    try {
      const response = await fetch(TOKEN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          client_id: CLIENT_ID,
          grant_type: "authorization_code",
          redirect_uri: REDIRECT_URI,
          code,
        }),
      });

      const data = await response.json();

      if (data.access_token) {
        Cookies.set("token", data.access_token, { expires: 1, secure: true });
        setToken(data.access_token);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error fetching token:", error);
    }
  }, [router]);

  useEffect(() => {
    const storedToken = Cookies.get("token");

    if (storedToken) {
      setToken(storedToken);
    } else {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");

      if (code) {
        fetchAccessToken(code);
      }
    }
  }, [fetchAccessToken]);

  const logout = async () => {
    await deletePhotoTags()
    Cookies.remove("token");
    setToken(null);
    router.push("/login");
  };

  return { token, login, logout };
}
