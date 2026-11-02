"use client";

import { useRouter } from "next/navigation";

export function Row({ id }: { id: string }) {
  const router = useRouter();

  return (
    <li
      onClick={() => router.push(`/items/${id}`)}
      style={{ cursor: "pointer", padding: 8, border: "1px solid #ccc", marginBottom: 4 }}
    >
      Item {id}
    </li>
  );
}
