---
id: pbcycle
title: Flow of a PB Cycle
---

The PBCycle object represents an instance of Participatory Budgeting cycle for a given organisation, like a School or School Group. 

Every PBCycle guides you through the process of

1. Planning the coming cycle,
2. [Collecting ideas from the participants and creating proposals](#proposals),
3. [Refining](#ballots) the proposals,
4. The [Voting phase](voting) followed by [the voting result ratification phase](ratification),
5. and ends with the implementation of the winning proposal(s).

The different Phases are created using the following mutation:

```python
from datetime import datetime, timezone, timedelta

def create_phase(name, pb_cycle_id, from_date=None, to_date=None):
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

### createPbCycle

Using this mutation creates a valid object, which can later be edited:

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

### Proposals

A Proposal object is an entity that represents a specific idea of a participant which is categorized within a PBCycle.

Using the `createProposal` a participant can submmit a proposal within a category, which can later if selcted be voted on during the voting phase.
If the category doesn't existes use the `createCategory` mutation.


### Ballots

PB cycle participants vote on eligible proposals contained on a Ballot. A Ballot is the collection of Proposals that are ready for voting. A BallotSubmission is the 'vote' of a Party. 

The Ballot is prepared during the refinement Phase. All Proposals on the Ballot must have at least a name, a cost and a category. Once voting begins the proposals on the ballot, the ballot itself, and the PB Cycle budget cannot be edited anymore.