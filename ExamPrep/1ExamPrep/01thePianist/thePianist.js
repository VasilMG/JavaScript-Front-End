function thePianist (input) {
  const initialNmbr = Number(input.shift())

  const allPieces = {}

  for(i=0; i<initialNmbr; i++){
    let item = input.shift().split('|')
    allPieces[item[0]] = {}
    allPieces[item[0]]['Composer'] = item[1]
    allPieces[item[0]]['key'] = item[2]
  }

  while (true) {
    let line = input.shift().split('|')
    let command = line.shift()
    if ( command === 'Stop'){
        break;

    }else if (command === 'Add'){
      let [piece, composer, theKey] = line
      if (Object.keys(allPieces).includes(piece)){
        console.log(`${piece} is already in the collection!`)
      }else {
        allPieces[piece] = {}
        allPieces[piece]['Composer'] = composer
        allPieces[piece]['key'] = theKey
        console.log(`${piece} by ${composer} in ${theKey} added to the collection!`)
      }

    }else if (command === 'Remove'){

      let removePiece = line[0]
      if (Object.keys(allPieces).includes(removePiece)){
        delete allPieces[removePiece]
        console.log(`Successfully removed ${removePiece}!`)
      }else{
        console.log(`Invalid operation! ${removePiece} does not exist in the collection.`)
      }

    }else if (command === 'ChangeKey'){
        let [changePiece, newKey] = line
        if (Object.keys(allPieces).includes(changePiece)){
          allPieces[changePiece]['key'] = newKey
          console.log(`Changed the key of ${changePiece} to ${newKey}!`)
        }else{
          console.log(`Invalid operation! ${changePiece} does not exist in the collection.`)
        }
    }

  }

  Object.entries(allPieces).forEach((currKey) => {
    console.log(`${currKey[0]} -> Composer: ${currKey[1]['Composer']}, Key: ${currKey[1]['key']}`)
  })


}

thePianist(['3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'  
])