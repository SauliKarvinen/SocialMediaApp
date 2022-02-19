/* 
matti.addPost({
  user: matti,
  postimg: mattipost,
  time: d.toDateString(),
  text: "Pariatur eiusmod excepteur in deserunt sunt ipsum Lorem est labore esse incididunt officia sunt qui. Minim anim est veniam pariatur do aliqua deserunt occaecat cupidatat. Tempor est adipisicing consectetur excepteur in deserunt reprehenderit. Pariatur velit velit ut aliquip elit tempor anim non nostrud laborum voluptate excepteur. Consequat duis in elit fugiat. Adipisicing incididunt exercitation fugiat anim consequat. Id cupidatat nulla et enim deserunt nulla esse nulla reprehenderit et fugiat.Irure ipsum mollit tempor sint velit. Deserunt consectetur proident officia amet quis pariatur est. Commodo anim cillum dolor pariatur dolor exercitation culpa aliquip deserunt est exercitation.",
  comments: [
    {
      user: keijo,
      time: d.toDateString(),
      text: "Semmosella asialla lähin kommentoimaan että Aute sit consequat mollit sit culpa elit cillum duis eu ea sint. Nostrud non Lorem laboris esse cillum excepteur. Labore amet laboris amet dolore nisi ut esse ea sit enim eu quis pariatur. Magna voluptate commodo deserunt ullamco aute anim et tempor. Amet voluptate commodo irure ad deserunt sit amet ex aliqua dolor ea anim eiusmod veniam.",
    },
  ],
}); 
*/

export class Post {
  constructor(post) {
    this.user = post.user;
    this.postimg = post.postimg;
    this.text = post.text;
    this.time = post.time;
    this.exacttime = post.exacttime;
    this.comments = post.comments;
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}
