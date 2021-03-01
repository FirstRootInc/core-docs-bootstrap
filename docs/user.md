---
id: user
title: Participant Invitation
---

1. The invitation process starts using by [creating a new token](#createPbCycleInvitationToken).
2. Invited participants accept to participate in the cycle and can access the PBCycle either through an existing account or by [creating a new one](#createuser).
3. 

### createPbCycleInvitationToken

```python
def create_pbcycle_invitation_token(pb_cycle_id=None, category="PARTICIPANT_INVITATION", password=None):
  client = GraphqlClient(endpoint=gql_endpoint)

  query = ''' mutation createPbCycleInvitationToken($pbCycleId: ID!, $category: TokenTypesEnum, $password: String!){
      createPbCycleInvitationToken(input: {
        pbCycleId: $pbCycleId,
        category: $category
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

#### verifyToken
