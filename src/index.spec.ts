import { PasswordValidator } from './index'

describe('password validator', () => {
  it('returns invalid lenght error for strings less than 5 characters', () => {
    // Arrange
    // Act

    let response = PasswordValidator.checkPassword('mom')

    // Assert
    expect(response.result).toBeFalsy()
    expect(response.errors[0]).toEqual('InvalidLenghtError')
  })

  it('returns invalid lenght error for strings more than 15 characters', () => {
    // Arrange
    // Act

    let response = PasswordValidator.checkPassword('asdwfdfdsfdfdfdf')
    console.log(response.result)
    console.log(response.errors)

    // Assert
    expect(response.result).toBeFalsy()
    expect(response.errors[0]).toEqual('InvalidLenghtError')
  })

  it('returns  no upper case error for password without at least one upper case letter', () => {
    // Arrange
    // Act
    let response = PasswordValidator.checkPassword('maxwell1_c')
    // Assert
    expect(response.result).toBeFalsy()
    expect(response.errors[0]).toEqual('NoUpperCase')
  })
})
