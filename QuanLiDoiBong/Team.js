const Player = require('./Player')
class Team 
{
    constructor(teamName) 
    {
        this.teamName = teamName; 
        this.players = []; 
    }
    addPlayer(player) 
    {
        this.players.push(player); 
    }
    sumScore() 
    {
        const total = this.players.reduce((accumlator,currentValue) => {
            return accumlator + currentValue.goals; 
        },0); 
        return total; 
    }
    displayTeamInfo() 
    {
        console.log(this.teamName); 
        this.players.forEach((x) => {
            x.displayInfo(); 
        })
    }
}
module.exports = Team; 