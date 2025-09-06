import { PasswordValidator } from './index'

describe('password validator', () => {
  it('returns invalid lenght error for strings less than 5 characters', () => {
    // Arrange
    // Act

    let response = PasswordValidator.checkPassword('mom')

    // Assert
    expect(response.result).toBeFalsy()
    expect(response.errors.length).toEqual(1)
    expect(response.errors[0]).toEqual('InvalidLenghtError')
  })
})
