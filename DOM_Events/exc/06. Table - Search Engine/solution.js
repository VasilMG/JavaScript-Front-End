function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const rows = Array.from(document.querySelectorAll('tbody tr'));

   function onClick() {
      const searched = document.querySelector('#searchField');
      for (const row of rows) {
         row.className = ''
         let texts = ""
         Array.from(row.children).forEach((el) => {
            texts += " " + el.textContent;
         })
         let regex = new RegExp(`${searched.value}`);
         let match = texts.match(regex);
         if (match) {
            row.className = 'select';
         }
      }

      searched.value = '';

   }
}