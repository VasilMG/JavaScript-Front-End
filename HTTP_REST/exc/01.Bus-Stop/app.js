async function getInfo() {
  const busStopID = document.querySelector("#stopId").value;
  let theUl = document.querySelector("#buses");
  theUl.innerHTML = "";

  try {
    // validation of backend response - library zod
    const response = await fetch(
      `http://localhost:3030/jsonstore/bus/businfo/${busStopID}`
    );
    const busStopInfo = await response.json();

    document.querySelector("#stopName").textContent = busStopInfo.name;

    for (let [k, v] of Object.entries(busStopInfo.buses)) {
      let theLi = document.createElement("li");
      theLi.textContent = `Bus ${k} arrives in ${v} minutes`;
      theUl.appendChild(theLi);
    }
  } catch (_) {
    document.querySelector("#stopName").textContent = "Error";
    // return; --> if we have code below and we dont want to be executed
  }
}
