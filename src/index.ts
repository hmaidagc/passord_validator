export const PasswordErrors = {
  InvalidLenghtError: 'InvalidLenghtError',
  NoUpperCase: 'NoUpperCase',
  NoDigits: 'NoDigits',
  Exceeds15Characters: 'Exceeds15Characters',
} as const

export type PasswordError = (typeof PasswordErrors)[keyof typeof PasswordErrors]

export type CheckedPasswordResponse = {
  result: boolean
  errors: PasswordError[]
}

type PasswordRule = (password: string) => PasswordError | null

export class PasswordValidator {
  public static rules: Record<PasswordError, PasswordRule> = {
    InvalidLenghtError: (pw) => (pw.length < 5 ? 'InvalidLenghtError' : null),
    Exceeds15Characters: (pw) =>
      pw.length > 15 ? 'Exceeds15Characters' : null,
    NoUpperCase: (pw) => (!/[A-Z]/.test(pw) ? 'NoUpperCase' : null),
    NoDigits: (pw) => (!/\d/.test(pw) ? 'NoDigits' : null),
  }

  public static checkPassword(password: string): CheckedPasswordResponse {
    const errors: PasswordError[] = Object.values(this.rules)
      .map((rule) => rule(password))
      .filter((e): e is PasswordError => e !== null)

    return {
      result: errors.length === 0,
      errors: errors,
    }
  }
}
