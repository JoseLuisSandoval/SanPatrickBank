Feature: Api Status
    In order to know thet the server is working 
    For quality control 
    I want to know the status of the server

  Scenario: Check api status
    Given I send a GET request to '/api/status'
    Then The response status code should be 200
