class Contestant {
  constructor(){
    this.index = null;
   // this.distance = 0;
    this.contestant = null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
        contestantCount: count
    });
  }

  update(){
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
        contestant:this.contestant,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data)=>{
      allcontestant = data.val();
    })
  }
}
