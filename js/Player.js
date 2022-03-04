class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
getCount(){
var countRef = database.ref("playerCount")
countRef.on("value",(data)=>{
  playerCount = data.val()
})
}
updateCount(count){
database.ref("/").update({
  playerCount: count
})
}}
