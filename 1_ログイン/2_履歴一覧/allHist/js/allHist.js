(function() {
  'use strict';

  // テーブルヘッダのクリックイベント
  var ths = document.getElementsByTagName('th');
  var i;
  var sortOrder = 1; // 1: 昇順、-1: 降順

  for (i = 0; i < ths.length; i++) {
    ths[i].addEventListener('click', function() {

      // ソート処理（50音昇順をデフォルト）
      var rows = Array.prototype.slice.call(document.querySelectorAll('tbody > tr'));
      var col = this.cellIndex;
      var type = this.dataset.type;

      // 引数には、同列テーブル要素同士を与える
      rows.sort(function(a, b) {

        // 数値データ（課金額）のソート処理
        if (type === "number") {
          var _a = a.children[col].textContent * 1;
          var _b = b.children[col].textContent * 1;
        }
        // 文字列データのソート処理（アルファベット文字列同士を比較）
        if (type === "string") {
          var _a = a.children[col].textContent.toLowerCase(); // 小文字に仮置き
          var _b = b.children[col].textContent.toLowerCase(); // したもので比較
        }
        
        // 同列データの比較演算
        if (_a < _b) {
          return -1 * sortOrder; // -1 * 1 ....降順
        }
        if (_a > _b) {
          return 1 * sortOrder; // 1 * 1 ....昇順
        }
        return 0;
      });


      // テーブルボディ要素の初期化処理
      var tbody = document.querySelector('tbody');

      while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
      }

      // テーブルボディ要素の追記処理
      var j;
      for (j = 0; j < rows.length; j++) {
        tbody.appendChild(rows[j]);
      }

      // 列ごとのクラス名を初期化し、sortOrderの値に応じてクラス名を適用させる処理
      // 詳細はChrome検証機能（Elements）より、<th>タグ内クラス名を参照のこと
      var k;
      for (k = 0; k < ths.length; k++) {
        ths[k].className = '';
      }
      this.className = sortOrder === 1 ? 'asc' : 'desc';

      // テーブルヘッダをクリックする度に反転させるための仕掛け
      sortOrder *= -1;
    });
  }
})();