// https://api.w3.org/docs
// https://w3c.github.io/w3c-api/
// https://github.com/w3c/node-w3capi

//Group ID is from e.g., https://api.w3.org/groups/cg/solid `id`
//TODO: Something like where config for `groupType`` and `g`roupShortName`` can come from CLI or derived from Web form input, e.g., https://www.w3.org/groups/cg/solid :
// var config = {
//   "groupType" : "cg",
//   "groupShortName": "solid",
//   "itemsValue": "1000"
// }

// var api = {
//   "url": {
//     "group": "https://api.w3.org/groups/" + config.groupType + "/" + config.groupShortName
//   },
//   "items": "items=" + config.itemsValue
// }

import fs from "fs";
import { fetchData } from "./api.js";
import { renderHTML } from "./render.js";

const SOLID_CG_ID = 110151;

const { users, orgs } = await fetchData(SOLID_CG_ID);

fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
fs.writeFileSync("orgs.json", JSON.stringify(orgs, null, 2));

const html = renderHTML(users, orgs, {
  name: "W3C Solid Community Group",
  description: "test",
});

console.log(html);
fs.writeFileSync("participants.html", html);
