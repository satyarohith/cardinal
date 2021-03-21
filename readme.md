# Cardinal

![ci](https://github.com/satyarohith/cardinal/actions/workflows/ci.yml/badge.svg)

Get cardinal direction (16 directions) from degree.

```ts
import { getCardinal } from "https://deno.land/x/cardinal/mod.ts";
console.log(getCardinal(135)); // SE
console.log(getCardinal(135, { long: true })); // southeast
```

[MIT](LICENSE) License.
