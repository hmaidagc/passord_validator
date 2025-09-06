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
      response.result === false
      response.errors.push(PasswordErrors.InvalidLenghtError)
    }

    return response
  }
}
