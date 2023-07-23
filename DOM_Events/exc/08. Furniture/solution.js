function solve() {
  // let [inputTextArea, outpuTextArea] = Array.from(document.querySelectorAll('textarea'))
  // const objects = JSON.parse(inputTextArea.value)

  // const tbody = document.querySelector('tbody')

  // const row = document.querySelector('tbody tr');

  const [generate, buy] = Array.from(document.querySelectorAll('button'));

  generate.addEventListener('click', funcGenerate)
  buy.addEventListener('click', funcBuy)

  function funcGenerate(event) {
    let inputTextArea = document.querySelector('textarea')
    const input = JSON.parse(inputTextArea.value)
    const row = document.querySelector('tbody tr');
    const table = document.querySelector('tbody')
    row.children[4].children[0].disabled = false
    function img(data) {
      let newRow = document.createElement('td')
      const img = document.createElement('img')
      img.src = data
      newRow.appendChild(img)
      return newRow
  }

  function p(data) {
      let newRow = document.createElement('td')
      const p = document.createElement('p')
      p.textContent = data
      newRow.appendChild(p)
      return newRow
  }

  for (x = 0; x < input.length; x++) {
      let newRow = document.createElement('tr')
      newRow.appendChild(img(input[x]['img']))
      newRow.appendChild(p(input[x]['name']))
      newRow.appendChild(p(input[x]['price']))
      newRow.appendChild(p(input[x]['decFactor']))
      
      let td = document.createElement('td')
      let checkbox = document.createElement('input')
      checkbox.setAttribute("type", "checkbox")
      td.appendChild(checkbox)
      newRow.appendChild(td)
      table.appendChild(newRow)
  }
}




    // objects.forEach((obj) => {

    //   let newRow = row.cloneNode(true);
    //   console.log(obj.img)

  
    //   newRow.children[0].children[0].src = obj.img.trim();
    //   newRow.children[1].children[0].textContent = obj.name.trim();
    //   newRow.children[2].children[0].textContent = obj.price.trim();
    //   newRow.children[3].children[0].textContent = obj.decFactor.trim();
  
    //   console.log(newRow)
    //   tbody.appendChild(newRow)
    //   console.log(document.querySelectorAll('tbody tr').length)
  
    // })


  function funcBuy (event) {
    let rows = table.querySelectorAll('tr')

        let avrDeco = 0
        let totalSum = 0
        let names = []
        for (x = 0; x < rows.length; x++) {
            item = rows[x]
            if (item.children[4].children[0].checked) {
                names.push(item.children[1].textContent.trim())
                totalSum += parseFloat(item.children[2].textContent)
                avrDeco += parseFloat(item.children[3].textContent)
            }
        }
        if (names.length > 0) {
            document.querySelectorAll('textarea')[1].value = `Bought furniture: ${names.join(', ')}\nTotal price: ${totalSum.toFixed(2)}\nAverage decoration factor: ${avrDeco / names.length}`
        }
    }
  
  //   let outpuTextArea = document.querySelectorAll('textarea')[1]
    
  //   let items = []
  //   let prices = []
  //   let factors = []

  //   const allRows = Array.from(document.querySelectorAll('tbody tr'));
  //   const checkedRows = allRows.filter(currRow => 
  //     currRow.children[4].children[0].checked)

  //     checkedRows.forEach((e) => {
  //       items.push(e.children[1].children[0].textContent);
  //       prices.push(parseFloat(e.children[2].children[0].textContent));
  //       factors.push(parseFloat(e.children[3].children[0].textContent))
  //     })
  //     let sum = prices.reduce((acc, curr) => {
  //       acc = acc + curr
  //       return acc;
  //     }, 0)

  //     let average = factors.reduce((acc, curr) => {
  //       acc = acc + curr
  //       return acc / factors.length;
  //     })
  //     if (items.length > 0){
  //       outpuTextArea.value = `Bought furniture: ${items.join(', ')}` + '\n' + `Total price: ${sum.toFixed(2)}` + '\n' + `Average decoration factor: ${average}`
  //     }
      
  // }
}

