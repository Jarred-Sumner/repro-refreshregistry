// The casing is relevant! It causes the heuristic to fail.
// But there are more ways to trigger it.
export function Expensive() {
  const start = performance.now();
  let i = 0;
  const bigArray = [];

  while (i < 99999) {
    i++;
    bigArray.push(i);
  }

  const endTime = performance.now();

  if (typeof window === "undefined") {
    console.log("[WORKER] Completed expensive function in", endTime - start);
  } else {
    console.log("[WEB] Completed expensive function in", endTime - start);
  }
}
