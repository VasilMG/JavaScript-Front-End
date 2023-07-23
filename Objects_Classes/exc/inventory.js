function inventory (data) {
    let listHeores = []
    class Hero {
        constructor (name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }

        printHero(){
            console.log(`Hero: ${this.name}` + '\n' + `level => ${this.level}\n` + `items => ${this.items.join(', ')}`)
        }
    }

    for (let item of data) {
        let [name, level, items] = item.split(' / ')
        let itemsAsList = items.split(', ')
        let newHeroe = new Hero(name, level, itemsAsList)
        listHeores.push(newHeroe);
    }
    listHeores.sort((a,b) => a.level - b.level);
    for (let theHero of listHeores){
        theHero.printHero();
}
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])