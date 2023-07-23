class Movie {
    constructor(name) {
        this.name = name
        this.date = 0
        this.director = 0
    }
    
    hasAll() {
        if (this.name !== '' && this.date !== 0 && this.director !== 0){
            return true;
        }else {
            return false;
        }
    }

}

function movies (list){
    let objects = []
    for ( let item of list) {
        if (item.includes('addMovie')){
            let [_, movieName] = item.split('addMovie ')
            objects.push(new Movie(movieName))
        }else if (item.includes('directedBy')){
            let [name, director] = item.split(' directedBy ')
            for ( let obj of objects) {
                if (name ===  obj.name){
                    obj.director = director
                }
            }
        }else if (item.includes('onDate')){
            let [name, ondate] = item.split(' onDate ')
            for ( let obj of objects) {
                if (name === obj.name ){
                    obj.date = ondate
                }
            }
        }
        
    }
    for (let mov of objects) {
        if (mov.hasAll()){
            console.log(JSON.stringify(mov))
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