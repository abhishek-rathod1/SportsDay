let scores = {
  red: 0,
  blue: 0,
  green: 0,
  yello: 0,
};

function OpeningCeremony(callback) {
  console.log("Let the game begin");
  // return new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Opening ceremony done, Initial Score:", scores);
    callback(Race100M);
    // let score = {}
    // resolve("start, score:",score)
  }, 1000);
  // })
}

function Race100M(callback) {
  console.log("Race 100M has started...");

  // return new Promise((resolve, reject) => {
  setTimeout(() => {
    let raceTimes = {
      red: Math.floor(Math.random() * 6) + 10,
      blue: Math.floor(Math.random() * 6) + 10,
      green: Math.floor(Math.random() * 6) + 10,
      yello: Math.floor(Math.random() * 6) + 10,
    };
    console.log("Race Times:", raceTimes);

    //find first and second place
    let sortedColors = Object.keys(raceTimes).sort(
      (a, b) => raceTimes[a] - raceTimes[b]
    );

    //award points
    scores[sortedColors[0]] += 50;
    scores[sortedColors[1]] += 25;

    console.log("Scores after Race100M: ", scores);

    callback(LongJump);

    // score = 100;
    // resolve("score:", score);
  }, 3000);
  // })
}

function LongJump(callback) {
  console.log("Long Jump has started...");
  // return new Promise((resolve, reject) => {
    setTimeout(() => {
      const colors = ["red","blue","green", "yellow"];
      const randomColor = colors[Math.floor(Math.random()*colors.length)];

      scores[randomColor] += 150;
      console.log(`Long Jump Winner ${randomColor}`);
      console.log(`Scores after LongJump:`,scores);
      // resolve("long jump, score", score);
      callback(HighJump);
    }, 2000);
  // });
}

function HighJump(callback) {
  console.log("High Jump has started...");

  //prompt user Input
  const userColor = prompt("Which color secured the highest jump? (red, blue, green, yellow)");
  if(userColor === null || userColor.trim() === ""){
    console.log("Event was cancelled.");
    // callback(AwardCeremony);
  } else{
    const color = userColor.trim().toLowerCase();
    if(scores.hasOwnProperty(color)){
      scores[color] += 100;                                           
      console.log(`${color} has been awarded 100 points.`);
    }else{
      console.log("Invalid color intered. No points awarded");
    }
    console.log("Scores after HighJump:", scores);
    callback();
  }
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     let userIn = prompt(input("enter score"));
  //     score = userIn;
  //     resolve("high jump, score", score);
  //   }, 1000);
  // });
}

function AwardCeremony() {
  console.log("Award Ceremony has started!!!!");

  const sortedResults = Object.keys(scores).sort((a,b)=>scores[b]-scores[a]);
  console.log(`1st Place: ${sortedResults[0]} with ${scores[sortedResults[0]]} points`)
  console.log(`2st Place: ${sortedResults[1]} with ${scores[sortedResults[1]]} points`)
  console.log(`3st Place: ${sortedResults[2]} with ${scores[sortedResults[2]]} points`)
  console.log(`4st Place: ${sortedResults[3]} with ${scores[sortedResults[3]]} points`)

  console.log("Final scores: ", scores);
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("Award Ceremony");
  //   }, timeout);
  // });
}


OpeningCeremony(function (nextEvent){
  nextEvent(function (nextEvent2){
    nextEvent2(function (nextEvent3){
      nextEvent3(function () {
        
        AwardCeremony();
      })
    })
  })
})