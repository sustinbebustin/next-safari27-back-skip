# Safari 27: Back skips an entry after a non-prefetched App Router navigation

A minimal reproduction for a Next.js issue: Safari 27's Back button skips an entry after a navigation that waits on the server.

```bash
pnpm install
pnpm build && pnpm start   # http://localhost:3000
```

## Steps (Safari 27.0, macOS 26.7.1)

1. Open a new window and paste `http://localhost:3000/items/a` into the address bar, so it is the first history entry.
2. Click **Items** in the nav. This is a `<Link>`, and it goes to `/items`.
3. Click **Item b**. The row calls `router.push("/items/b")` and is not prefetched. The page awaits for 1.5s.
4. Press Safari's Back button.

**Expected:** `/items`

**Actual (Safari 27):** `/items/a`. `/items` is skipped, although `navigation.entries()` still lists it.

Chrome and Firefox land on `/items`.

## Why

Safari flags a history entry added by `pushState` as "created by JS without user interaction" when the push happens outside the click's user-activation window. In practice that means about 1s or more after the click, or after an awaited fetch. Back from a flagged entry also skips the entry before it.

The App Router writes the new entry in `HistoryUpdater` (`useInsertionEffect`) only after the RSC response arrives, so every non-prefetched navigation produces a flagged entry. A fully prefetched navigation pushes synchronously and is unaffected.
