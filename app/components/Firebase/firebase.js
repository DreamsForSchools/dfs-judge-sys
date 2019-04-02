import firebase from 'firebase';
// import app from 'firebase/app';
import 'firebase/auth';
var Team = require('./data/team');

const config = {
  apiKey: "AIzaSyBYz9ACZunkhGs3ByUY2d_n4pMSpsinI0g",
  authDomain: "dfs-appjam-judging-app.firebaseapp.com",
  databaseURL: "https://dfs-appjam-judging-app.firebaseio.com",
  projectId: "dfs-appjam-judging-app",
  storageBucket: "dfs-appjam-judging-app.appspot.com",
  messagingSenderId: "1062970629056"
};
var Team1 = new Team("1",
                    "Gogo",
                    "uber",
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eius quo quis quibusdam explicabo praesentium ut aliquam libero at ex! Alias voluptates optio obcaecati molestias placeat necessitatibus, cum tenetur quidem.",
                    0);
var Team2 = new Team("1",
                      "Hi 2",
                      "yooyo",
                      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore eius quo quis quibusdam explicabo praesentium ut aliquam libero at ex! Alias voluptates optio obcaecati molestias placeat necessitatibus, cum tenetur quidem.",
                      0);


class Firebase{
  constructor(){
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    this.listofTeams = [Team1];
    this.db = firebase.firestore();
  }
  doSignInWithEmailAndPassword(email, password){
    this.auth.signInWithEmailAndPassword(email, password)
  }
  signOut(){
    this.auth.signOut();
  }
  getTeamsData(){
    var eventRef = this.db.collection("events").doc("event19");
    var teamRef = eventRef.collection("teams");
    var tempTeam = [];
    tempTeam = this.listofTeams;
    console.log("get team data...");
    teamRef.get().then(function(querySnapshot){
      tempTeam.pop();
      querySnapshot.forEach(function(doc){
        var temp = new Team("2", doc.data().teamName, doc.data().appName, doc.data().appDescription);
        tempTeam.push(temp);
        // console.log(doc.id, " => ", doc.data());
      })
    })
    // console.log("temp", tempTeam)
    console.log("data from firebase: ",tempTeam);
    this.listofTeams = tempTeam;
    // console.log(this.listofTeams);
    // return this.listofTeams;
    return tempTeam;
  }
  getTeamsData2(){
    var eventRef = this.db.collection("events").doc("event19");
    var teamRef = eventRef.collection("teams");
    var result = [];
    //var tempTeam = [];
    console.log("get team data...");
    teamRef.get().then(function(querySnapshot){
      var teamsList = [];
      querySnapshot.forEach(function(doc){
        var temp = new Team("2", doc.data().teamName, doc.data().appName, doc.data().appDescription);
        // teamsList.push(temp);
        teamsList.push(temp);
        // console.log(doc.id, " => ", doc.data());
      });
      result = teamsList;
      console.log("teamlist", teamsList);
      console.log("result", result);

      //return teamList;
      // console.log("teamlist", teamsList);
    });
    // console.log("data from firebase2: ",teamsList);
    
    return result;
  }
  addTeamsData(docName,dscore1,dscore2,fscore1,fscore2,tscore1,tscore2,pscore1,totalScore){
    console.log("add");
    var eventRef = this.db.collection("events").doc("event19");
    var teamRef = eventRef.collection("teams");
    teamRef.doc(docName).set({
      dscore1: dscore1,
      dscore2: dscore2,
      fscore1: fscore1,
      fscore2: fscore2,
      tscore1: tscore1,
      tscore2: tscore2,
      pscore1: pscore1,
      totalScore: totalScore,
    }).then(function(){
      console.log("Document successfully written!");
    }).catch(function(error){
      console.error("Error writing document: ", error);
    });
  }
  //, { merge : true}
  

}
// const fire = firebase.initializeApp(config);
export default Firebase;