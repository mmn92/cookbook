export function assertType<T>(
  unsafeData: unknown,
  validateFn: (u: unknown) => boolean
): unsafeData is T {
  return validateFn(unsafeData);
}
