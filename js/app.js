window.onload = function() {
  // buttonにonlickとaddEventListenerを設定する
  var button = document.getElementById('button');
  button.onclick = function(){ write('最初からあるonclick')};
  button.addEventListener('click', function() { write('最初からあるaddEventListener1')}); 
  button.addEventListener('click', function() { write('最初からあるaddEventListener2')}); 
  button.addEventListener('click', function() { write('最初からあるaddEventListener3')}); 

  // onclickを上書きする関数
  var onclickCount = 0;
  document.getElementById('onclickUpdate').onclick = function(){ 
    write('■■■■■■■■onclickイベント更新');
    onclickCount++;
    button.onclick = function() {
      write('onclickで: ' + onclickCount + "回目に更新したイベント");
    };
  }

  // addEventでイベントを追加
  var addEventCount = 0;
  document.getElementById('addEventAdd').onclick = function(){ 
    write('■■■■■■■■addEventListenerでイベント追加');
    addEventCount++;
    var message = 'addEventListenerで ' + addEventCount + "回目に追加したイベント";
    button.addEventListener('click', function() {
        write(message);
    }); 
  }

  // bodyに書き込む関数
  var write = function(message) {
    var div = document.createElement('div');
    div.innerText = message;
    document.body.appendChild(div);
  }
}