---
id: pbcycle
title: Lifecycle (Flow) of a PB Cycle
---

The PBCycle object represents an instance of Participatory Budgeting cycle for a given organisation, like a School or School Group. 

Every PBCycle guides you through the process of

1. Planning the coming cycle,
2. [Collecting ideas from the participants and creating proposals](#ideation),
3. [Refining](refinement) the proposals,
4. The [Voting phase](voting) followed by [the voting result ratification phase](ratification),
5. and ends with the implementation of the winning proposal(s).


### createPbCycle

Using this mutation creates a valid object, which can later be edited:

```python
def create_pb_cycle(theme, description, budget, startDate, endDate):
  client = GraphqlClient(endpoint=gql_endpoint)

  query = '''
  mutation($theme: String!, $description: String, $budget: Int!, $startDate: datetime.datetime.now().isoformat(), $endDate: Int!){
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
  variables = {"theme": theme, "description": description, "budget": budget, "startDate": startDate, "endDate": endDate}
  headers = {"Authorization":"Bearer "+ admin_user_token}
  data = client.execute(query=query, variables=variables, headers=headers)
  #print(data)
  return data
```
