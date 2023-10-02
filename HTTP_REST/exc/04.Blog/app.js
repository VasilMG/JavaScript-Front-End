function attachEvents() {
  document
    .querySelector("#btnLoadPosts")
    .addEventListener("click", listAllPosts);
  document
    .querySelector("#btnViewPost")
    .addEventListener("click", loadAllComments);

  let allPosts = {};
  const selectItem = document.querySelector("#posts");

  async function listAllPosts() {
    const responsePosts = await (
      await fetch("http://localhost:3030/jsonstore/blog/posts")
    ).json();
    allPosts = responsePosts;

    for (let [key, val] of Object.entries(responsePosts)) {
      let option = document.createElement("option");
      option.value = key;
      option.textContent = val.title;
      selectItem.appendChild(option);
    }
  }

  async function loadAllComments() {
    const respComments = await (
      await fetch("http://localhost:3030/jsonstore/blog/comments")
    ).json();

    const currentPost = allPosts[selectItem.value];

    const postTitle = document.querySelector("#post-title");
    postTitle.textContent = currentPost.title;

    document.querySelector("#post-body").textContent = currentPost.body;

    let attachedComments = [];
    for (let [k, v] of Object.entries(respComments)) {
      if (respComments[k].postId === currentPost.id) {
        attachedComments.push(respComments[k]);
      }
    }

    let commentsUL = document.querySelector("#post-comments");
    commentsUL.innerHTML = "";
    attachedComments.forEach((c) => {
      const commentLI = document.createElement("li");
      commentLI.textContent = c.text;
      commentsUL.appendChild(commentLI);
    });
  }
}

attachEvents();
