Feature: Register an new user
    In order to has an account
    As an posible customer
    I want to create a new profile

  Scenario: A valin non existing user
    Given I send a PUT request to "/api/users/d7cd6582-7010-48e3-aab4-c1b69d38c511" with body:
      """
      {
          "id":"d7cd6582-7010-48e3-aab4-c1b69d38c511",
          "firstname": "Jose Luis",
          "lastname": "Sandoval",
          "email": "docs.huehue@gmail.com",
          "passwordHash": "test12345",
          "phone": "7352096019"
          
      }
      """
    Then The response status code should be 201
    And The response should be empty

  Scenario: An invalid non existing user
    Given I send a PUT request to "/api/users/d7cd6582-7010-48e3-aab4-c1b69d38c511" with body:
      """
      {
          "id":"d7cd6582-7010-48e3-aab4-c1b69d38c511",
          "firstname": 10,
          "lastname": "Sandoval",
          "phone": "7352096019",
          "email": "docs.huehue@gmail.com",
          "passwordHash": "test12345"
      }
      """
    Then The response status code should be 422
