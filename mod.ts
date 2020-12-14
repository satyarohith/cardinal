/** Get cardinal direction for the provided degree (0-360).
 *
 * @param degree the degree (0-360) to get cardinal direction for
 * ```
 * import { getCardinal } from "https://deno.land/x/cardinal/mod.ts";
 * console.log(getCardinal(125)); // "SE"
 * ```
 * */
export function getCardinal(degree: number): string {
  if (degree < 0 || degree > 360) {
    throw new Error(`degree out of range: ${degree} (expected: 0-360)`);
  }

  return [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
    "N",
  ][Math.round(degree / 22.5)];
}
