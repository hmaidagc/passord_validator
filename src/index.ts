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

export class PasswordValidator {
  public static checkPassword(password: string) {
    const errors: PasswordError[] = []
    let response: CheckedPasswordResponse = {
      result: false,
      errors: [],
    }

    console.log(password.length)

    if (password.length < 5 || password.length > 15) {
      errors.push(PasswordErrors.InvalidLenghtError)
    }

    if (!/[A-Z]/.test(password)) {
      errors.push(PasswordErrors.NoUpperCase)
    }

    if (!/\d/.test(password)) {
      errors.push(PasswordErrors.NoDigits)
    }

    return (response = {
      result: errors.length === 0,
      errors: errors,
    })
  }
}
