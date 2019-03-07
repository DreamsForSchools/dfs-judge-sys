

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
    this.tscore1 = 0;
    this.tscore2 = 0;
    this.pscore1 = 0;
    this.totalScore = 0;
  }
  // Set score based on the score type (design, functionality, theme, presentation)
  setScore(id, e){
    if (id === "dscore1"){
      this.dscore1 = e;
      this.calculateTotal();
    }else if (id == "dscore2"){
      this.dscore2 = e;
      this.calculateTotal();
    }else if (id == "fscore1") {
      this.fscore1 = e;
      this.calculateTotal();
    }else if (id == "fscore2") {
      this.fscore2 = e;
      this.calculateTotal();
    }else if (id == "tscore1") {
      this.tscore1 = e;
      this.calculateTotal();
    }
    else if (id == "tscore2") {
      this.tscore2 = e;
      this.calculateTotal();
    }else if (id == "pscore1") {
      this.pscore1 = e;
      this.calculateTotal();
    }
    
  }
  calculateTotal(){
    this.totalScore = (this.dscore1 + this.dscore2 + this.fscore1 + this.fscore2 + this.tscore1 + this.tscore2 + this.pscore1);
    return this.totalScore;
  }
}


module.exports = Team;