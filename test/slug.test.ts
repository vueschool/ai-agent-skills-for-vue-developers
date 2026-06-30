import { beforeAll, describe, expect, it } from "vitest";

// slug.ts references the Nitro-global `createError` only inside throw branches.
// Provide a minimal shim so the module behaves like it would at runtime.
beforeAll(() => {
  (globalThis as any).createError = (input: {
    statusCode?: number;
    statusMessage?: string;
  }) => Object.assign(new Error(input.statusMessage), input);
});

const {
  generateSlug,
  isValidSlug,
  isReservedSlug,
  normalizeTargetUrl,
  RESERVED_SLUGS,
} = await import("../server/utils/slug");

describe("generateSlug", () => {
  it("produces a 7-char slug from the allowed alphabet", () => {
    const slug = generateSlug();
    expect(slug).toHaveLength(7);
    expect(slug).toMatch(/^[0-9a-zA-Z]{7}$/);
  });

  it("produces distinct values across calls", () => {
    const slugs = new Set(Array.from({ length: 100 }, () => generateSlug()));
    expect(slugs.size).toBeGreaterThan(95);
  });
});

describe("isValidSlug", () => {
  it("accepts letters, numbers, hyphens and underscores", () => {
    expect(isValidSlug("My-Alias_1")).toBe(true);
  });

  it("rejects empty, too-long, or illegal characters", () => {
    expect(isValidSlug("")).toBe(false);
    expect(isValidSlug("a".repeat(65))).toBe(false);
    expect(isValidSlug("has space")).toBe(false);
    expect(isValidSlug("slash/here")).toBe(false);
  });
});

describe("isReservedSlug", () => {
  it("flags reserved words case-insensitively", () => {
    expect(isReservedSlug("api")).toBe(true);
    expect(isReservedSlug("API")).toBe(true);
    expect(isReservedSlug("dashboard")).toBe(true);
  });

  it("allows ordinary slugs", () => {
    expect(isReservedSlug("nuxt")).toBe(false);
  });

  it("covers framework/app paths", () => {
    for (const reserved of ["mcp", "_nuxt", ".well-known"]) {
      expect(RESERVED_SLUGS.has(reserved)).toBe(true);
    }
  });
});

describe("normalizeTargetUrl", () => {
  it("normalizes a valid http(s) URL", () => {
    expect(normalizeTargetUrl("https://example.com")).toBe(
      "https://example.com/",
    );
    expect(normalizeTargetUrl("  http://example.com/path  ")).toBe(
      "http://example.com/path",
    );
  });

  it("rejects non-http(s) schemes", () => {
    expect(() => normalizeTargetUrl("javascript:alert(1)")).toThrow();
    expect(() => normalizeTargetUrl("data:text/html,hi")).toThrow();
    expect(() => normalizeTargetUrl("ftp://example.com")).toThrow();
  });

  it("rejects malformed input", () => {
    expect(() => normalizeTargetUrl("not a url")).toThrow();
    expect(() => normalizeTargetUrl("")).toThrow();
  });
});
