export class User {
  constructor(
    name,
    profileimg,
    profilebackgroundimage,
    email,
    title,
    organization
  ) {
    this.name = name;
    this.profileimg = profileimg;
    this.profilebackgroundimage = profilebackgroundimage;
    this.email = email;
    this.title = title;
    this.organization = organization;
    this.posts = [];
    this.bio = "";
    this.contacts = [];
    this.github = "";
    this.workhistory = [];
    this.messages = [];
  }

  addPost(post) {
    this.posts.push(post);
  }

  getPosts() {
    return this.posts;
  }

  addComment(comment) {
    console.log("postaus:", this.posts);
  }

  setBio(bio) {
    this.bio = bio;
  }

  setContacts(contacts) {
    this.contacts = contacts;
  }

  setGitHub(github) {
    this.github = github;
  }

  setWorkHistory(workhistory) {
    this.workhistory = workhistory;
  }

  addMessage(message) {
    this.messages.push(message);
  }
}

/* export default new User(); */
