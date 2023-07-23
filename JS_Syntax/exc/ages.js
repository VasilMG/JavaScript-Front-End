function ages (nmbr) {
    switch (true) {
        case (nmbr <= 2 && nmbr >= 0):
            console.log("baby");
            break;
        case (nmbr >= 3 && nmbr <= 13):
            console.log("child");
            break;
        case (nmbr >= 14 && nmbr <= 19):
            console.log('teenager');
            break;
        case (nmbr >= 20 && nmbr <= 65):
            console.log("adult");
            break;
        case (nmbr >= 66):
            console.log("elder");
            break;
        default:
            console.log("out of bounds");
            break;
    }

}
ages(100);