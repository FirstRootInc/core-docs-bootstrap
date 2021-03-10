---
id: pb-inv
title: PB Participants
---

After successfully creating a PB Cycle, the next step would be to begin inviting participants to join. Participants can be invited whilst the Cycle is active.

1. The invite process starts with creating a new token using the [`createPbCycleInvitationToken`](api/mutations/create-pb-cycle-invitation-token), which can be integrated/added to a hyperlink to share with the participants of a PB Cycle.
2. Invited participants will be able to accept the invite and join the PB cycle by either creating a new account (for new users) using the [`createPersonWithUserAccount`](api/mutations/create-person-with-user-account) mutation or through the login form (for existing users) [`signInUser`](api/mutations/sign-in-user).
3. If the invitation token expired you can refreshed it with [`refreshAuthToken`](api/mutations/refresh-auth-token).
