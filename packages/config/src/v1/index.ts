export { createRoutes, routes, Router } from '../router';
export * from '../router';
export { VercelConfig } from '../types';
export type { VercelConfig as BaseVercelConfig } from '../types';
export type {
  Redirect,
  Rewrite,
  HeaderRule,
  Condition,
  MatchableValue,
  RouteType,
} from '../types';

/**
 * Extended VercelConfig for use in `vercel.ts`.
 *
 * Re-declares `env` without the `@deprecated` tag — when used in `vercel.ts`,
 * `env` is the recommended way to set deployment environment variables.
 * Values are stripped from the compiled config and not persisted to
 * `vercel.json`, making it safe for dynamically fetched secrets.
 *
 * The `env` field in static `vercel.json` remains deprecated —
 * use the Vercel Dashboard for that case.
 */
export interface VercelTsConfig
  extends Omit<import('../types').VercelConfig, 'env'> {
  /**
   * Environment variables for the deployment.
   * Available both during the build step (`process.env`) and at runtime
   * in Serverless and Edge Functions.
   * Values are stripped from the compiled config and not persisted to
   * `vercel.json`, making it safe for dynamically fetched secrets.
   */
  env?: Record<string, string>;
}
export {
  validateStaticString,
  validateStaticBoolean,
  validateStaticObject,
  validateStaticStringArray,
  validateStaticFields,
} from '../utils/validation';
