import w3capi from "node-w3capi"

const W3C_INVITED_EXPERTS_ID = 36747;

export async function fetchData(groupId) {
  const groupUsers = await w3capi.group(groupId).users().fetch();
  const users = [];
  const orgsMap = {};

  for (const user of groupUsers) {
    console.log("# GET " + user.href);
    const userData = await fetch(user.href).then((res) => res.json());

    console.log("# GET " + userData._links.affiliations.href);
    const userAffiliationsData = await fetch(userData._links.affiliations.href).then((res) =>
      res.json()
    );

    const userAffiliations = [];
    if (userAffiliationsData._links.affiliations) {
      await Promise.all(
        userAffiliationsData._links.affiliations.map(async (affiliation) => {
          let organizationData = await fetch(affiliation.href).then((res) => res.json());
          if (organizationData.id === W3C_INVITED_EXPERTS_ID) return;

          userAffiliations.push(organizationData);

          if (!orgsMap[organizationData.id]) {
            orgsMap[organizationData.id] = {
              ...organizationData,
              orgUsers: [],
            };
          }
          orgsMap[organizationData.id].orgUsers.push({
            name: userData.name,
            id: userData.id,
          });
        })
      );
    }
    
    users.push({
      name: userData.name,
      id: userData.id,
      affiliations: userAffiliations,
    });
  }

  return { users, orgs: Object.values(orgsMap) }
}
