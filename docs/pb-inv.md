---
id: pb-inv
title: PB Invite
---

After successfully creating a PB Cycle, the next step would be to begin inviting participants to join. This section covers how to do the invite process, and shows code snippets written in Python as an example of how to integrate different components in the app.

1. The invite process starts with creating a new token, this can be integrated/added to a hyperlink to share with the participants of a PB cycle.
2. Invited participants will be able to accept the invite and join the PB cycle by creating a new account (for new users) or through the login form (for existing users).


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
