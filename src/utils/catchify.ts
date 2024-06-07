/**
 * like promisify in node.js utils, but catch error
 */
export function catchify<F extends (...args: any[]) => any>(f: F, ...args: Parameters<F>): ReturnType<F> | undefined {
  try {
    return f(...args)
  } catch {
    return undefined
  }
}
