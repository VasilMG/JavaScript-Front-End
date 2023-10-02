function solve() {
  const departBtn = document.querySelector("#depart");
  const arriveBtn = document.querySelector("#arrive");
  const infoBox = document.querySelector("#info > span");
  let busStopInfo = {
    name: "",
    next: "depot",
  };
  function depart() {
    fetch(`http://localhost:3030/jsonstore/bus/schedule/${busStopInfo.next}`)
      .then((res) => res.json())
      .then((busStop) => {
        busStopInfo = busStop;
        console.log(busStopInfo);
        departBtn.disabled = true;
        arriveBtn.disabled = false;

        infoBox.textContent = `Next stop ${busStopInfo.name}`;
      })
      .catch((err) => {
        departBtn.disabled = false;
        arriveBtn.disabled = false;
        infoBox.textContent = `Error`;
      });
  }

  async function arrive() {
    departBtn.disabled = false;
    arriveBtn.disabled = true;
    infoBox.textContent = `Arriving at ${busStopInfo.name}`;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();
