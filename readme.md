# Cardinal

![ci](https://github.com/satyarohith/cardinal/actions/workflows/ci.yml/badge.svg)

Get direction for the provided degree based on 16-point compass rose.

```ts
import { getDirection } from "https://deno.land/x/cardinal/mod.ts";
console.log(getDirection(135)); // SE
console.log(getDirection(135, { long: true })); // southeast
```

[MIT](LICENSE) License.
