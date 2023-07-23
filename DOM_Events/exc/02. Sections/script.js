function create(words) {
   words.forEach(element => {
      const theDiv = document.createElement('div');
      const theP = document.createElement('p');
      theP.textContent = element
      theP.style.display = 'none'
      theDiv.appendChild(theP);
      
      theDiv.addEventListener('click', (e) => {
         console.log(e.target.children[0])
         e.target.children[0].style.display = 'block';
      })

      const bigDIv = document.querySelector('#content');
      bigDIv.appendChild(theDiv);

   });
}