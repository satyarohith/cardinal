import {
  assertEquals,
  assertThrows,
} from "https://deno.land/std@0.80.0/testing/asserts.ts";
import { getDirection } from "./mod.ts";

Deno.test("getDirection()", () => {
  assertEquals(getDirection(0), "N");
  assertEquals(getDirection(348.75), "N");
  assertEquals(getDirection(134), "SE");
  assertEquals(getDirection(45), "NE");
  assertEquals(getDirection(134, { long: true }), "southeast");
  assertEquals(getDirection(45, { long: true }), "northeast");
});

Deno.test("throw error if the provided degree is out of range", () => {
  assertThrows(
    () => {
      getDirection(361);
    },
    Error,
    "degree out of range: 361 (expected: 0-360)",
  );
  assertThrows(
    () => {
      getDirection(-361);
    },
    Error,
    "degree out of range: -361 (expected: 0-360)",
  );
});
