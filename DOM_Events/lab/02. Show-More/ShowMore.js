function showText() {
    document.getElementById('text').style.display = 'inline'
    // document.getElementById('more').style.display = 'none'
    // to set a timeout between showing and hiding the elements we can do
    setTimeout(() => {
        document.getElementById('more').style.display = 'none'
    }, 1000);
}