"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const AuthErrorContent = () => {
  const params = useSearchParams();
  const error = params.get("error");

  return (
    <div style={{ padding: 20 }}>
      <h1>Authentication Error</h1>
      <p>Error Code: {error}</p>
    </div>
  );
};

export default function AuthError() {
  return (
    <Suspense>
      <AuthErrorContent />
    </Suspense>
  );
}
