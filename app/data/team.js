class Team {
  

  constructor(id, teamname, appname, description){
    this.id = id;
    this.teamname = teamname;
    this.appname = appname;
    this.description = description;
    this.dscore1 = 0;
    this.dscore2 = 0;
    this.fscore1 = 0;
    this.fscore2 = 0;
  }
  setScore(scoreType, e){
    this.dscore1 = e;
  }
}

module.exports = Team;