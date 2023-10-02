function attachEvents() {
  document.querySelector("#submit").addEventListener("click", addMessage);
  document.querySelector("#refresh").addEventListener("click", refreshMessages);

  async function addMessage() {
    const author = document.querySelector('input[name="author"]');
    const content = document.querySelector('input[name="content"]');

    let newItem = { author: author.value, content: content.value };
    const respNewItem = await fetch(
      "http://localhost:3030/jsonstore/messenger",
      {
        method: "post",
        headers: { "Content-type": "Application-json" },
        body: JSON.stringify(newItem),
      }
    );
    console.log(respNewItem);
  }

  async function refreshMessages() {
    const allMessages = await (
      await fetch("http://localhost:3030/jsonstore/messenger")
    ).json();
    let textAreaContent = [];

    for (let [k, v] of Object.entries(allMessages)) {
      textAreaContent.push(`${v.author}: ${v.content}`);
    }

    document.querySelector("#messages").textContent =
      textAreaContent.join("\n");
  }
}

attachEvents();
