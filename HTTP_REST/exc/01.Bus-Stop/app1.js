function getInfo() {
    const busStopID = document.querySelector('#stopId').value
    let theUl = document.querySelector('#buses')
    theUl.innerHTML = ''

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${busStopID}`)
    .then(res => res.json())
    .then((busStop) => {
        document.querySelector('#stopName').textContent = busStop.name;
        
        for(let [k, v] of Object.entries(busStop.buses)){
            let theLi = document.createElement('li')
            theLi.textContent = `Bus ${k} arrives in ${v} minutes`
            theUl.appendChild(theLi);
        }
    } ).catch(err => {
        document.querySelector('#stopName').textContent = "Error";
    })
}