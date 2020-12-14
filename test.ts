import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.80.0/testing/asserts.ts";
import { getCardinal } from "./mod.ts";

Deno.test("getCardinal()", () => {
  assertEquals(getCardinal(0), "N");
  assertEquals(getCardinal(348.75), "N");
  assertEquals(getCardinal(134), "SE");
  assertEquals(getCardinal(45), "NE");
});

Deno.test("throw error if the provided degree is out of range", () => {
  assertThrows(
    () => {
      getCardinal(361);
    },
    Error,
    "degree out of range: 361 (expected: 0-360)",
  );
  assertThrows(
    () => {
      getCardinal(-361);
    },
    Error,
    "degree out of range: -361 (expected: 0-360)",
  );
});
