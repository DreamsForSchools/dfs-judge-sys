

class Team {
  
  constructor(teamName, appName, appDescription, judgeName, e, p){
    this.teamName = teamName;
    this.appName = appName;
    this.appDescription = appDescription;
    this.judgeName = judgeName;
    this.dscore1 = null;
    this.dscore2 = null;
    this.fscore1 = null;
    this.fscore2 = null;
    this.tscore1 = null;
    this.tscore2 = null;
    this.totalScore = 0;
    this.email = e;
    this.password = p;
    this.submitClicked = false;
  }
  checkSubmit(bool) {
    this.submitClicked = bool;
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
  // Calculate total score 
  calculateTotal(){
    this.totalScore = (this.dscore1 + this.dscore2 + this.fscore1 + this.fscore2 + this.tscore1 + this.tscore2 + this.pscore1);
    if (isNaN(this.totalScore)){
      this.totalScore = 0;
    }
    return this.totalScore;
  }
  // Check if every score fields is complete
  isScoreComplete(){
    // if (this.dscore1 == null){
    //   return false;
    // }else if (this.dscore2 ==null){
    //   return false;
    // }else if (this.fscore1 == null){
    //   return false;
    // }else if (this.fscore2 == null){
    //   return false;
    // }else if (this.tscore1 == null){
    //   return false;
    // }else if (this.tscore2 == null){
    //   return false;
    // } else {
    //   return true;
    // }
    
    if (this.dscore1 == 0) {
      return false;
    }else if (this.dscore2 == 0){
      return false;
    }else if (this.fscore1 == 0){
      return false;
    }else if (this.fscore2 == 0){
      return false;
    }else if (this.tscore1 == 0){
      return false;
    }else if (this.tscore2 == 0){
      return false;
    }else if (this.pscore1 == 0){
      return false;
    }else{
      return true;
    }
  }
  
}


module.exports = Team;


// class Team {

//   constructor(teamName, appName, appDescription, judgeName,
//     dscore1, dscore2, fscore1, fscore2, tscore1, tscore2, pscore, totalScore) {
//     this.teamName = teamName;
//     this.appName = appName;
//     this.appDescription = appDescription;
//     this.judgeName = judgeName;
//     this.dscore1 = dscore1;
//     this.dscore2 = dscore2;
//     this.fscore1 = fscore1;
//     this.fscore2 = fscore2;
//     this.tscore1 = tscore1;
//     this.tscore2 = tscore2;
//     this.pscore = pscore;
//     this.totalScore = totalScore;
//   }
//   // Set score based on the score type (design, functionality, theme, presentation)
//   setScore(id, e) {
//     if (id === "dscore1") {
//       this.dscore1 = e;
//       this.calculateTotal();
//     } else if (id == "dscore2") {
//       this.dscore2 = e;
//       this.calculateTotal();
//     } else if (id == "fscore1") {
//       this.fscore1 = e;
//       this.calculateTotal();
//     } else if (id == "fscore2") {
//       this.fscore2 = e;
//       this.calculateTotal();
//     } else if (id == "tscore1") {
//       this.tscore1 = e;
//       this.calculateTotal();
//     } else if (id == "tscore2") {
//       this.tscore2 = e;
//       this.calculateTotal();
//     } else if (id == "pscore1") {
//       this.pscore1 = e;
//       this.calculateTotal();
//     }
//   }
//   // Calculate total score 
//   calculateTotal() {
//     this.totalScore = (this.dscore1 + this.dscore2 + this.fscore1 + this.fscore2 + this.tscore1 + this.tscore2);// + this.pscore1);
//     if (isNaN(this.totalScore)) {
//       this.totalScore = 0;
//     }
//     console.log('NaN totalScore formed');
//     return this.totalScore;
//   }
//   // Check if every score fields is complete
//   isScoreComplete() {
//     if (this.dscore1 == null) {
//       return false;
//     } else if (this.dscore2 == null) {
//       return false;
//     } else if (this.fscore1 == null) {
//       return false;
//     } else if (this.fscore2 == null) {
//       return false;
//     } else if (this.tscore1 == null) {
//       return false;
//     } else if (this.tscore2 == null) {
//       return false;
//     } else {
//       return true;
//     }
//     // return true;
//   }

// }


// module.exports = Team;