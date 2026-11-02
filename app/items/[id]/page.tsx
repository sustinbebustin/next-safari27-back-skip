import { connection } from "next/server";

export default async function Item({ params }: { params: Promise<{ id: string }> }) {
  await connection();
  const { id } = await params;
  // Simulate a data-backed page: the history entry is written only after this resolves.
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <main>
      <h1>Item {id}</h1>
      <p>Now press Safari&apos;s Back button. Expected: /items.</p>
    </main>
  );
}
