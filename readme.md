# Cardinal

![ci](https://github.com/satyarohith/cardinal/actions/workflows/ci.yml/badge.svg)

<p align="center">
<img alt="16-point compass rose" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Brosen_windrose.svg/1280px-Brosen_windrose.svg.png" width="40%">
</p>

Get direction for the provided degree based on a 16-point compass rose.

```ts
import { getDirection } from "https://deno.land/x/cardinal/mod.ts";
console.log(getDirection(135)); // SE
console.log(getDirection(135, { long: true })); // southeast
```

[MIT](LICENSE) License.
