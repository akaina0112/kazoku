document.oncontextmenu = function(){ return false; };
document.body.oncontextmenu = "return false;"
// 例としてakaina変数に値を設定
let akaina = 'This shortcut has been disabled.';

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
        alert('このショートカットは無効化されています。\n' + akaina);
    }
});
