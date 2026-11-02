import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Safari 27 back-skip repro</h1>
      <ol>
        <li>
          Open <Link href="/items/a">/items/a</Link> by pasting its full URL into
          a new Safari window (so it is the first history entry).
        </li>
        <li>Click &quot;Items&quot; in the nav.</li>
        <li>Click row &quot;b&quot; (uses router.push, not prefetched).</li>
        <li>
          Press Safari&apos;s Back button. Expected: /items. Actual in Safari 27:
          /items/a.
        </li>
      </ol>
    </main>
  );
}
