---
id: pb-inv
title: PB Invite
---

After successfully creating a PB Cycle, the next step would be to begin inviting participants to join. Participants can be invited whilst the Cycle is active.

1. The invite process starts with creating a new token using the `createPbCycleInvitationToken`, which can be integrated/added to a hyperlink to share with the participants of a PB Cycle.
2. Invited participants will be able to accept the invite and join the PB cycle by either creating a new account (for new users) using the `createPersonWithUserAccount` mutation or through the login form (for existing users) `signInUser`.
3. If the invitation token expired you can refreshed it with `refreshAuthToken`.

### Roles and Permissions

A Participant has a specific role within a PB Cycle. For example a Person may have different roles if they are associated with more than one PBCycle (e.g., Samantha could be a student leader in the school PBCycle and a participant in the school band PBCycle). 

Note that not all PartyTypes can assume all roles. For example, a School cannot be a participant_of a PBCycle. By extension, a school cannot Crea: only ‘people’ should create proposals.
