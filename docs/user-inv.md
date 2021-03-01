---
id: user-inv
title: Participant Invitation
---

This section goes through the process of inviting participants to an existing PBCycle with code snippets written in python as an example on how to integrate the different components in your app.

1. The invitation process starts by [creating a new token](#createPbCycleInvitationToken). This token can be integrated/added to a link and send to the participants.
2. Invited participants accept to participate in the cycle and can access the PBCycle either through an existing account or by [creating a new one](#createuser).
3. If a user with an existing account 

### createPbCycleInvitationToken

```python
def create_pbcycle_invitation_token(pb_cycle_id=None, category="PARTICIPANT_INVITATION", password=None):
  client = GraphqlClient(endpoint=gql_endpoint)

  query = ''' mutation createPbCycleInvitationToken($pbCycleId: ID!, $category: TokenTypesEnum, $password: String!){
      createPbCycleInvitationToken(input: {
        pbCycleId: $pbCycleId,
        category: $category,
        password: $password,
      }){
        token
        pbCycleId
      }
    }'''
  variables = { "pbCycleId": pb_cycle_id, "category": category, "password": password}
  headers = {"Authorization":"Bearer "+admin_user_token}
  data = client.execute(query=query, variables=variables, headers=headers)
  #print data
  return data
```

### acceptPbInvitation

```python
def accept_Pb_Invitation(token, firstname , lastName, email, password):
  client = GraphqlClient(endpoint=gql_endpoint)

  query = ''' mutation acceptPbInvitation($token: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!){
      createPbCycleInvitationToken(input: {
        token: $token,
        firstName: $firstName,
        lastName: $lastName,
        password: $password,
      }){
        pbCycle
        status
        type
      }
    }'''
  variables = {"token": token, "firstName": firstName, "lastName": lastName, "password": password}
  headers = {"Authorization":"Bearer "+admin_user_token}
  data = client.execute(query=query, variables=variables, headers=headers)
  #print data
  return data
```

### createUser

```python
def create_User(firstName, lastName, email, username, password, school):
  client = GraphqlClient(endpoint=gql_endpoint)

  query = ''' mutation createUser($name: String!, $lastName: String!, $email: String!, $username: String!,
    $password: String!, $school: String){
      createUser(input: {
        firstName: $name,
        lastName: $lastName,
        email: $email,
        username: $username,
        password: $password,
        school: $school,
      }){
        User
      }
    }'''
  variables = {"name": firstName, "lastName": lastName, "email": email, "username": username, "password": password, "school": school}
  headers = {"Authorization":"Bearer "+admin_user_token}
  data = client.execute(query=query, variables=variables, headers=headers)
  #print data
  return data
```
