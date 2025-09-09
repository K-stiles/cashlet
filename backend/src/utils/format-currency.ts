// Convert dollars to cents when saving
/**
 * Storing amount in cents to avoid floating point rounding/precision issues.
 * This ensures precise and accurate calculations in financial applications.
 * For example, $10.99 is stored as 1099 cents.
 * When retrieving the value, it can be converted back to dollars by dividing by 100.
 * For example, 1099 cents is converted back to $10.99.
 *
 * INFO:
 * This approach is widely used by major payment processors like Stripe, PayPal, banks and in financial applications to maintain accuracy and avoid errors associated with floating point arithmetic.
 */
export function convertToCents(amount: number) {
  /**
   * FORMULA: amount_in_cents = amount_in_dollars * 100
   * Example: variable = $10.99 * 100 => 1099 cents
   */
  return Math.round(amount * 100);
}

// Convert cents to dollars when retrieving
//convertFromCents
export function convertToDollarUnit(amount: number) {
  /**
   * FORMULA: amount_in_dollars = amount_in_cents / 100
   * Example: variable = 1099 cents / 100 => $10.99
   */
  return amount / 100;
}

/**
 * Format number as USD currency (e.g., $10.99)
 * Uses Intl.NumberFormat for proper localization and formatting
 */
export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
