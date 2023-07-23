function solve() {
  const text = document.querySelector('#input').value.split('.');
  const sentances = text.filter((e) => e.length > 0);
  const output = document.querySelector('#output');
  console.log(sentances)
  while (sentances.length > 0) {
    const newP = document.createElement('p');
    for (i=0; i < 3; i++){
      if (sentances.length > 0) {
        let item = sentances.shift();
        newP.textContent += `${item}.`
        console.log(item)
        console.log(newP.textContent)
      } else {
        break;
      }
    }
    output.appendChild(newP);
  }
}

  //   if (counter === 3) {
  //     counter = 0;
  //   }
  //   if (counter === 0){
  //     const newP = document.createElement('p');
  //   }
  //   let item = sentances.shift();
  //   newP.textContent += `${item}.`
  //   counter += 1;
  // }
  // }

