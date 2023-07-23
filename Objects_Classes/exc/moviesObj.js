function movies (data) {
    let allObjects = []
    for (let item of data){
        if (item.includes('addMovie')){
            let obj = {}
            obj.name = item.split('addMovie ')[1]
            allObjects.push(obj)
        }else if (item.includes('directedBy')){
            let obj = {}
            let [name, director] = item.split(' directedBy ')
            for ( let currObj of allObjects){
                if (name === currObj.name){
                    currObj.director = director;
                }
            }
        }else if (item.includes('onDate')){
            let obj = {}
            let [name, date] = item.split(' onDate ')
            for ( let currObj of allObjects){
                if (name === currObj.name){
                    currObj.date = date;
                }
            }
        }
    }
    for ( let objct of allObjects){
        if (Object.keys(objct).length == 3){
            console.log(JSON.stringify(objct));
        }
    }
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])