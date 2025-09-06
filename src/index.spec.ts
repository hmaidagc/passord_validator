import { PasswordValidator } from './index'

describe('password validator', () => {
  it('returns invalid lenght error for strings less than 5 characters', () => {
    // Arrange
    // Act

    let response = PasswordValidator.checkPassword('mom')

    // Assert
    expect(response.result).toBeFalsy()
    expect(response.errors).toContain('InvalidLenghtError')
  })

  it('returns invalid lenght error for strings more than 15 characters', () => {
    // Arrange
    // Act

    let response = PasswordValidator.checkPassword('asdwfdfdsfdfdfdf')

    // Assert
    expect(response.result).toBeFalsy()
    expect(response.errors).toContain('InvalidLenghtError')
  })

  it('returns  no upper case error for password without at least one upper case letter', () => {
    // Arrange
    // Act
    let response = PasswordValidator.checkPassword('maxwell1_c')
    // Assert
    expect(response.result).toBeFalsy()
    expect(response.errors).toContain('NoUpperCase')
  })

  it('returns no NoDigits error for password without any digit', () => {
    // Arrange
    // Act
    let response = PasswordValidator.checkPassword('maxwellTheBe')
    // Assert
    expect(response.result).toBeFalsy()
    expect(response.errors).toContain('NoDigits')
  })
})
