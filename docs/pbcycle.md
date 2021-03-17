---
id: pbcycle
title: PB Cycle
---

In this section we describe a Participatory Budgeting Cycle on an object-level. For more information about what a PB Cycle is, visite [our website](https://firstroot.co/teacher-resources/), which includes many great ressources.

The **PBCycle** object represents an instance of a Participatory Budgeting Cycle for any given  organization like a school, a class, or a group of people that wants to make a budgetary choice collaboratively. By using the [`createPbCycle`](/docs/api/mutations/create-pb-cycle) mutation a valid object is created; Which can later be edited.

Every PBCycle follows this flow/process:

1. **Planning** - Administrators define a theme, budget, categories and a schedule
2. [**Ideation**](#ideation-phase) - Participants submit, edit and share their [proposals](#proposals)
3. [**Refinement**](#refinment-phase) - Administrators and leaders hand-pick the best proposals by preparing a [ballot](#ballots)
4. [**Voting**](#voting-phase) - Participants vote, and admins do a voting results ratification process
5. **Implementation** - Based on voting results, winning proposals get done!


## Ideation Phase
### Proposals

A Proposal object is an entity that represents a specific idea of a participant which is categorized within a PBCycle.

Using [`createProposal`](docs/api/mutations/create-proposal) a participant can submit a proposal within a category, which can later, if selcted, be voted on.
With this muation a valid proposal object is created, which contains at least a name, a cost and a category.

Participants can [`reactToProposal`](/docs/api/mutations/react-to-proposal), through a like. The Proposals with a lot of likes will most likely end up on the voting ballot. This reaction can be reversed with the [`removeReactionFromProposal`](/docs/api/mutations/remove-reaction-from-proposal).

## Refinement Phase
### Ballots

A **Ballot** is the collection of Proposals that are ready for voting. The Ballot is prepared by an admin during the refinement phase using the [`createBallot`](/docs/api/mutations/create-ballot) mutation.

A **BallotSubmission** object is the 'vote' of a Party. Each proposal in the ballot for a party is initialized to an unfunded and ‘no preference’ value. 
A **VotingGroup** and a **Person** are both PartyTyes that can create a BallotSubmission with the [`submitPartyBallotVote`](/docs/api/mutations/submit-party-ballot-vote) mutation.


## Voting Phase

The default voting process is simultaneous individual and collaborative voting. When voting begins, participants can vote individually and also participate in the collaborative vote.

PB cycle participants vote on eligible proposals contained on a Ballot by deciding to fund them through the [`fundBallotProposal`](/docs/api/mutations/fund-ballot-proposal) mutation. Additionally they can add a reaction using the [`reactToPartyBallotProposal`](/docs/api/mutations/react-to-party-ballot-proposal) mutation.

