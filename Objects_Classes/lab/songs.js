function songs(list) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

        prinName(typeSong) {
            if (this.typeList === typeSong || lfSong === 'all') {
                console.log(this.name)
            }
        }
    }

    let songs = list.shift()
    let lfSong = list.pop()

    for (let i = 0; i < songs; i++) {
        let [type, name, time] = list[i].split('_')
        let song = new Song(type, name, time)
        song.prinName(lfSong)
    }
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])