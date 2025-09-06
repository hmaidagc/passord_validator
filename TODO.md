FA2STR

# Find :

**1- Responsibilities** :

- validate the submitted passord text as following:
  - password between 5 and 10 caracters.
  - contains at least one digit : 5.
  - contains at least one upper case letter : A.
- Returns an Error Object when provided with wrong pssd:
  - Result as boolean
  - Error message as array

**Arrange, Act, Assert Methodology**:

- Out object:
  message : {
  result: boolean,
  message:[{"success","less than 5 characters" ,"more than 15 characters","no digits","no upper case letter"}]
  }

- In Object:
  passwordText:{
  text:string
  }

**Checklist**

- 12345 returns true
- sde5s returns true
- Asd2s returns true
- asd returns : {false, ["less than 5 characters"]}
