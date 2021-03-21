interface Options {
  /* Ouput expanded direction names. */
  long: boolean;
}

/** Get cardinal direction for the provided degree (0-360).
 *
 * @param degree the degree (0-360) to get cardinal direction for
 * ```ts
 * import { getCardinal } from "https://deno.land/x/cardinal/mod.ts";
 * console.log(getCardinal(125)); // "SE"
 * console.log(getCardinal(125, {long: true})); // "southeast"
 * ```
 * */
export function getCardinal(degree: number, options?: Options): string {
  if (degree < 0 || degree > 360) {
    throw new Error(`degree out of range: ${degree} (expected: 0-360)`);
  }
  const index = Math.round(degree / 22.5);

  if (options?.long) {
    return [
      "north",
      "north-northeast",
      "northeast",
      "east-northeast",
      "east",
      "east-southeast",
      "southeast",
      "south",
      "south-southwest",
      "southwest",
      "west-southwest",
      "west",
      "west-northwest",
      "northwest",
      "north-northwest",
      "north",
    ][index];
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
  ][index];
}
