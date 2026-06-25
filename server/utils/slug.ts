import { customAlphabet } from "nanoid";

const ALPHABET =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const generateSlug = customAlphabet(ALPHABET, 7);

const SLUG_PATTERN = /^[A-Za-z0-9_-]{1,64}$/;

/**
 * Paths that can never be used as a short slug because they collide with
 * application routes, the API, the MCP endpoint, or framework internals.
 */
export const RESERVED_SLUGS = new Set([
  "api",
  "mcp",
  "sign-in",
  "sign-up",
  "dashboard",
  "login",
  "logout",
  "register",
  "_nuxt",
  "__nuxt",
  "_ipx",
  "favicon.ico",
  "robots.txt",
  "sitemap.xml",
  ".well-known",
]);

export function isValidSlug(slug: string): boolean {
  return SLUG_PATTERN.test(slug);
}

export function isReservedSlug(slug: string): boolean {
  return RESERVED_SLUGS.has(slug.toLowerCase());
}

/**
 * Normalize and validate a user-supplied target URL. Only http/https URLs are
 * accepted. Returns the normalized href or throws an h3 error.
 */
export function normalizeTargetUrl(input: string): string {
  let url: URL;
  try {
    url = new URL(input.trim());
  } catch {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid URL. Include a protocol, e.g. https://example.com",
    });
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw createError({
      statusCode: 400,
      statusMessage: "Only http and https URLs are supported.",
    });
  }
  return url.href;
}
