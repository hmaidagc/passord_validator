type PasswordError = 'InvalidLenghtError'

export type CheckedPasswordResponse = {
  result: boolean
  errors: PasswordError[]
}

export class PasswordValidator {
  public static checkPassword(password: string) {
    return {
      result: false,
      errors: ['InvalidLenghtError'],
    }
  }
}
