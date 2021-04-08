//Store information about the team
const team = {
    //Two Properties: players and games as arrays
    _players: [{
      firstName: 'Juan',
      lastName: 'Miguel',
      age: 21
    },{
      firstName: 'Michael',
      lastName: 'Angelo',
      age: 20
    },{
      firstName: 'Leo',
      lastName: 'Nardo',
      age: 22
    }],
    _games: [{
    opponent: 'Narwhals',
    teamPoints: 42,
    opponentPoints: 27
    },{
    opponent: 'Platypus',
    teamPoints: 15,
    opponentPoints: 11
    },{
    opponent: 'Unicorns',
    teamPoints: 24,
    opponentPoints: 22
    }],
  
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
  
    addPlayer(firstName,lastName,age){
      let newPlayer = { 
        firstName: firstName,
        lastName: lastName,
        age: age
      }
      this._players.push(newPlayer)
    },
      addGame(oppName,teamPoints,oppPoints){
      let newGame = { 
        oppName: oppName,
        teamPoints: teamPoints,
        opponentPoints: oppPoints
      }
      this._games.push(newGame)
    }
  }
  
  team.addPlayer('Steph','Curry',28)
  team.addPlayer('Lisa','Leslie',44)
  team.addPlayer('Bugs','Bunny',76)
  
  team.addGame('Goobers',20,15)
  
  
  
  
  console.log(team.players)
  console.log(team.games)