let game = {
  startTime: null,
  currentTime: null,
  seconds: null,
  displayArea: document.getElementById('display-area'),
  start: function() {
    // 処理開始
    game.startTime=Date.now();
    console.log('スタートしました');
    document.body.onkeydown=game.stop;
  },
  stop: function() {
    console.log('ストップしました');
    game.currentTime=Date.now();
    game.seconds = (game.currentTime-game.startTime)/1000;
    if(9.5<=game.seconds&&game.seconds<=10.5) {
      game.displayArea.innerText=game.seconds+'秒でした！おめでとう！';
    } else {
      game.displayArea.innerText=game.seconds+'秒でした！残念！';
    }
  }
};


if(confirm('OKを押してから10秒を測って何かキーを押してください')) {
  game.start();
}