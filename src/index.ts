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
    let response: CheckedPasswordResponse = {
      result: false,
      errors: [],
    }

    console.log(password.length)

    if (password.length < 5 || password.length > 15) {
      return (response = {
        result: false,
        errors: [PasswordErrors.InvalidLenghtError],
      })
    }

    if (!/[A-Z]/.test(password)) {
      return (response = {
        result: false,
        errors: [PasswordErrors.NoUpperCase],
      })
    }

    return (response = {
      result: true,
      errors: [],
    })
  }
}
