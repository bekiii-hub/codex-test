export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ');
}

export function normalizePhone(input: string): string {
  const digits = input.replace(/\D/g, '');
  if (digits.startsWith('251')) {
    return `+${digits}`;
  }
  if (digits.startsWith('9')) {
    return `+251${digits}`;
  }
  if (digits.startsWith('0')) {
    return `+251${digits.slice(1)}`;
  }
  return input;
}
