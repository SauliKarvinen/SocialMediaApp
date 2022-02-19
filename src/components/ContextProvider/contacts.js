import mattiimg from "../../img/mattiprofile.png";
import maijaimg from "../../img/maijaprofile.png";
import keijoimg from "../../img/keijoprofile.png";
import mattipost from "../../img/mattipost.jpg";
import keijopost from "../../img/keijopost1.png";
import keijoprofilebackground from "../../img/profilebackground1.jpg";
import mattiprofilebackground from "../../img/profilebackground2.jpg";
import maijaprofilebackground from "../../img/profilebackground3.png";
import { User } from "./User";
import { Post } from "./Post";
import { Message } from "./Message";

// Default users

const matti = new User(
  "Matti Meikäläinen",
  mattiimg,
  mattiprofilebackground,
  "matti@email.com",
  "CEO",
  "Facebook"
);
const maija = new User(
  "Maija Koodari",
  maijaimg,
  maijaprofilebackground,
  "maija@email.com",
  "CEO",
  "Google"
);
const keijo = new User(
  "Keijo Koodari",
  keijoimg,
  keijoprofilebackground,
  "keijo@email.com",
  "Student",
  "Karelia University of Applied Sciences"
);

// Default timestamp for posts
const start = Date.now();
const d = new Date(start);

// Add some posts for users
matti.addPost(
  new Post({
    user: matti,
    postimg: mattipost,
    time: d.toLocaleString(),
    exacttime: start,
    text: "Pariatur eiusmod excepteur in deserunt sunt ipsum Lorem est labore esse incididunt officia sunt qui. Minim anim est veniam pariatur do aliqua deserunt occaecat cupidatat. Tempor est adipisicing consectetur excepteur in deserunt reprehenderit. Pariatur velit velit ut aliquip elit tempor anim non nostrud laborum voluptate excepteur. Consequat duis in elit fugiat. Adipisicing incididunt exercitation fugiat anim consequat. Id cupidatat nulla et enim deserunt nulla esse nulla reprehenderit et fugiat.Irure ipsum mollit tempor sint velit. Deserunt consectetur proident officia amet quis pariatur est. Commodo anim cillum dolor pariatur dolor exercitation culpa aliquip deserunt est exercitation.",
    comments: [
      {
        user: keijo,
        time: d.toLocaleString(),
        text: "Semmosella asialla lähin kommentoimaan että Aute sit consequat mollit sit culpa elit cillum duis eu ea sint. Nostrud non Lorem laboris esse cillum excepteur. Labore amet laboris amet dolore nisi ut esse ea sit enim eu quis pariatur. Magna voluptate commodo deserunt ullamco aute anim et tempor. Amet voluptate commodo irure ad deserunt sit amet ex aliqua dolor ea anim eiusmod veniam.",
      },
    ],
  })
);

matti.addPost(
  new Post({
    user: matti,
    postimg: mattipost,
    time: d.toLocaleString(),
    exacttime: start,
    text: "Pariatur eiusmod excepteur in deserunt sunt ipsum Lorem est labore esse incididunt officia sunt qui. Minim anim est veniam pariatur do aliqua deserunt occaecat cupidatat. Tempor est adipisicing consectetur excepteur in deserunt reprehenderit. Pariatur velit velit ut aliquip elit tempor anim non nostrud laborum voluptate excepteur. Consequat duis in elit fugiat. Adipisicing incididunt exercitation fugiat anim consequat. Id cupidatat nulla et enim deserunt nulla esse nulla reprehenderit et fugiat.Irure ipsum mollit tempor sint velit. Deserunt consectetur proident officia amet quis pariatur est. Commodo anim cillum dolor pariatur dolor exercitation culpa aliquip deserunt est exercitation.",
    comments: [
      {
        user: maija,
        time: d.toLocaleString(),
        text: "No näin on joo.",
      },
      {
        user: maija,
        time: d.toLocaleString(),
        text: "Semmosella asialla lähin kommentoimaan että Aute sit consequat mollit sit culpa elit cillum duis eu ea sint. Nostrud non Lorem laboris esse cillum excepteur. Labore amet laboris amet dolore nisi ut esse ea sit enim eu quis pariatur. Magna voluptate commodo deserunt ullamco aute anim et tempor. Amet voluptate commodo irure ad deserunt sit amet ex aliqua dolor ea anim eiusmod veniam.",
      },
    ],
  })
);

maija.addPost(
  new Post({
    user: maija,
    postimg: undefined,
    time: d.toLocaleString(),
    exacttime: start,
    text: "Pariatur eiusmod excepteur in deserunt sunt ipsum Lorem est labore esse incididunt officia sunt qui. Minim anim est veniam pariatur do aliqua deserunt occaecat cupidatat. Tempor est adipisicing consectetur excepteur in deserunt reprehenderit. Pariatur velit velit ut aliquip elit tempor anim non nostrud laborum voluptate excepteur. Consequat duis in elit fugiat. Adipisicing incididunt exercitation fugiat anim consequat. Id cupidatat nulla et enim deserunt nulla esse nulla reprehenderit et fugiat.Irure ipsum mollit tempor sint velit. Deserunt consectetur proident officia amet quis pariatur est. Commodo anim cillum dolor pariatur dolor exercitation culpa aliquip deserunt est exercitation. Sint aliqua ullamco ex aliquip irure laboris sunt ex. Lorem irure irure cillum labore aute mollit minim dolor. Nostrud dolor mollit id ut minim consectetur sint laborum qui proident minim. Sint culpa ut eiusmod reprehenderit ex in.",
    comments: [
      {
        user: keijo,
        time: d.toLocaleString(),
        text: "Sunt quis eiusmod ipsum culpa anim voluptate non do eu. Occaecat sint eu est minim mollit dolore cupidatat eu. Labore labore ipsum aute esse cupidatat proident reprehenderit. In pariatur nostrud cupidatat cillum cupidatat Lorem. Minim ex reprehenderit amet et fugiat eu deserunt nisi. Culpa incididunt commodo do esse ipsum laborum adipisicing pariatur reprehenderit et id enim adipisicing est. Enim excepteur voluptate eiusmod id minim est ea..",
      },
      {
        user: maija,
        time: d.toLocaleString(),
        text: "Just niin Keijo, Aute sit consequat mollit sit culpa elit cillum duis eu ea sint. Nostrud non Lorem laboris esse cillum excepteur. Labore amet laboris amet dolore nisi ut esse ea sit enim eu quis pariatur. Magna voluptate commodo deserunt ullamco aute anim et tempor. Amet voluptate commodo irure ad deserunt sit amet ex aliqua dolor ea anim eiusmod veniam.",
      },
    ],
  })
);

keijo.addPost(
  new Post({
    user: keijo,
    postimg: keijopost,
    time: d.toLocaleString(),
    exacttime: start,
    text: "Pariatur eiusmod excepteur in deserunt sunt ipsum Lorem est labore esse incididunt officia sunt qui. Minim anim est veniam pariatur do aliqua deserunt occaecat cupidatat. Tempor est adipisicing consectetur excepteur in deserunt reprehenderit. Pariatur velit velit ut aliquip elit tempor anim non nostrud laborum voluptate excepteur. Consequat duis in elit fugiat. Adipisicing incididunt exercitation fugiat anim consequat. Id cupidatat nulla et enim deserunt nulla esse nulla reprehenderit et fugiat.Irure ipsum mollit tempor sint velit. Deserunt consectetur proident officia amet quis pariatur est. Commodo anim cillum dolor pariatur dolor exercitation culpa aliquip deserunt est exercitation.",
    comments: [
      {
        user: maija,
        time: d.toLocaleString(),
        text: "No näin on joo.",
      },
      {
        user: matti,
        time: d.toLocaleString(),
        text: "Semmosella asialla lähin kommentoimaan että Aute sit consequat mollit sit culpa elit cillum duis eu ea sint. Nostrud non Lorem laboris esse cillum excepteur. Labore amet laboris amet dolore nisi ut esse ea sit enim eu quis pariatur. Magna voluptate commodo deserunt ullamco aute anim et tempor. Amet voluptate commodo irure ad deserunt sit amet ex aliqua dolor ea anim eiusmod veniam.",
      },
    ],
  })
);

// Array of users
const contacts = [keijo, matti, maija];

// Set lorem ipsum bios, social media contacts and github links for users
for (const c in contacts) {
  contacts[c].setBio(
    "Reprehenderit nostrud sunt amet id excepteur amet labore minim laboris excepteur excepteur adipisicing irure ullamco. Sint ex dolor laboris labore nostrud sint amet commodo. Exercitation aliqua aliqua amet non incididunt laboris commodo ex laborum proident aliquip nulla. Fugiat sit qui qui elit ex commodo dolore nisi irure fugiat ipsum. Anim et excepteur laborum anim ipsum ex duis id. Cillum officia et officia dolore magna ipsum do.Mollit deserunt sint exercitation in ea consequat dolor. Minim sint culpa dolore aute ipsum laborum deserunt laborum occaecat. In ipsum id esse aliquip. Non adipisicing nulla do adipisicing.Dolor consequat in duis et non ea culpa velit exercitation. Laborum labore exercitation nisi cupidatat culpa incididunt ullamco ipsum culpa amet aute. Et consequat non eu nostrud mollit et irure. Aute voluptate incididunt enim cillum consectetur reprehenderit enim. Sit ut culpa qui irure ipsum sint dolore proident fugiat aliqua. Non id aliquip veniam dolore qui. Consectetur mollit mollit in Lorem."
  );
  contacts[c].setContacts(["LinkedIn", "Instagram", "Facebook"]);
  contacts[c].setGitHub(contacts[c].name);
}

// Set work histories for users
keijo.setWorkHistory([
  { years: "2015-2018", title: "Trainee", company: "McDonalds" },
  { years: "2018-2021", title: "Trainee", company: "R-Kioski" },
]);
matti.setWorkHistory([
  { years: "2000-2002", title: "Founder", company: "Matin Koodaamo" },
  { years: "2002-2012", title: "CEO", company: "Facebook" },
  { years: "2012-", title: "CEO", company: "Google" },
]);

maija.setWorkHistory([
  { years: "2000-2002", title: "Founder", company: "Maijan Koodaamo" },
  { years: "2002-2012", title: "CEO", company: "Google" },
  { years: "2012-", title: "CEO", company: "Facebook" },
]);

// Set some default messages for users
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    const start = Date.now();
    const now = new Date(start);
    let m = new Message({
      to: matti,
      from: keijo,
      time: now.toLocaleString(),
      exacttime: start,
      text: "Voluptate non labore pariatur ipsum anim tempor tempor mollit. Eiusmod aute incididunt ipsum officia labore adipisicing aute sint mollit aliquip aute. Aliqua excepteur non laborum proident fugiat enim nisi tempor nulla. Voluptate consequat aliquip consectetur consequat commodo qui laboris quis laborum. Proident ipsum sint ut consequat eu est ea ut mollit excepteur. In quis exercitation fugiat commodo commodo sint.",
    });
    keijo.addMessage(m);

    m = new Message({
      to: maija,
      from: keijo,
      time: now.toLocaleString(),
      exacttime: start,
      text: "Voluptate non labore pariatur ipsum anim tempor tempor mollit. Eiusmod aute incididunt ipsum officia labore adipisicing aute sint mollit aliquip aute. Aliqua excepteur non laborum proident fugiat enim nisi tempor nulla. Voluptate consequat aliquip consectetur consequat commodo qui laboris quis laborum. Proident ipsum sint ut consequat eu est ea ut mollit excepteur. In quis exercitation fugiat commodo commodo sint.",
    });

    keijo.addMessage(m);

    m = new Message({
      to: keijo,
      from: matti,
      time: now.toLocaleString(),
      exacttime: start,
      text: "Voluptate non labore pariatur ipsum anim tempor tempor mollit. Eiusmod aute incididunt ipsum officia labore adipisicing aute sint mollit aliquip aute. Aliqua excepteur non laborum proident fugiat enim nisi tempor nulla. Voluptate consequat aliquip consectetur consequat commodo qui laboris quis laborum. Proident ipsum sint ut consequat eu est ea ut mollit excepteur. In quis exercitation fugiat commodo commodo sint.",
    });

    keijo.addMessage(m);

    m = new Message({
      to: keijo,
      from: maija,
      time: now.toLocaleString(),
      exacttime: start,
      text: "Voluptate non labore pariatur ipsum anim tempor tempor mollit. Eiusmod aute incididunt ipsum officia labore adipisicing aute sint mollit aliquip aute. Aliqua excepteur non laborum proident fugiat enim nisi tempor nulla. Voluptate consequat aliquip consectetur consequat commodo qui laboris quis laborum. Proident ipsum sint ut consequat eu est ea ut mollit excepteur. In quis exercitation fugiat commodo commodo sint.",
    });

    keijo.addMessage(m);
  }, 500);
}

// Returns all contacts
export const useContacts = () => {
  return contacts;
};
