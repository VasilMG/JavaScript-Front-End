function loadingBar(n){
    let nmbr = n / 10
    let loaded = '%'.repeat(nmbr)
    let left = '.'.repeat(10-nmbr)
    if ((10 - nmbr) === 0){
        console.log("100% Complete!")
        console.log('[%%%%%%%%%%]')
    }else {
        console.log(`${n}% [${loaded}${left}]`);
        console.log('Still loading...')

    }
    
}
loadingBar(100)