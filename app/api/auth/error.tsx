"use client";

import { useSearchParams } from "next/navigation";

export default function AuthError() {
  const params = useSearchParams();
  const error = params.get("error");

  return (
    <div style={{ padding: 20 }}>
      <h1>Authentication Error</h1>
      <p>Error Code: {error}</p>
    </div>
  );
}
