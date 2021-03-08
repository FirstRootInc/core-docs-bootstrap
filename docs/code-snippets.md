```python
from datetime import datetime, timezone, timedelta

def create_phase(name, pb_cycle_id, from_date, to_date):
  # Possible names: "PLANNING","IDEATION","REFINEMENT","VOTING","VOTING_RESULTS_RATIFICATION","FUNDING","IMPLEMENTATION"
  if (from_date == None):
    from_date = datetime.now(timezone.utc)
  if (to_date == None):
    to_date = from_date + timedelta(days=21)
  if (pb_cycle_id == None):
    raise Exception("No pb_cycle_id was given")

  client = GraphqlClient(endpoint=gql_endpoint)

  query = ''' 
    mutation CreatePhase($pbCycleId: ID!, $name: PhasesEnum!, $startAt: ISO8601DateTime!, $endAt: ISO8601DateTime ){
      createPhase(input: {
        pbCycleId: $pbCycleId,
        name: $name,
        startAt: $startAt,
        endAt: $endAt
      }) {
        pbCycleId
        phaseId
      }
    }
  '''  
  variables = {"pbCycleId": pb_cycle_id, "name": name, "startAt": from_date.isoformat(), "endAt": to_date.isoformat()}
  headers = {"Authorization":"Bearer "+admin_user_token}
  data = client.execute(query=query, variables=variables, headers=headers)
  #print(data)
  return data

```

```python
from datetime import datetime, timezone, timedelta

def create_pb_cycle(theme, description, budget, startDate=None, endDate):
  client = GraphqlClient(endpoint=gql_endpoint)

  if (startDate == None):
    startDate = datetime.now(timezone.utc)

  query = '''
    mutation($theme: String!, $description: String, $budget: Int!, $startDate: dISO8601DateTime!, $endDate: ISO8601DateTime!){
        createPbCycle(input: {
            theme: $theme,
            description: $description,
            budget: $budget,
            startDate: $startDate,
            endDate: $endDate,
        }){
            pbCycleId
        }
      }'''
  variables = {"theme": theme, "description": description, "budget": budget, "startDate": startDate.isoformat(), "endDate": endDate.isoformat()}
  headers = {"Authorization":"Bearer "+ admin_user_token}
  data = client.execute(query=query, variables=variables, headers=headers)
  #print(data)
  return data
```

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

