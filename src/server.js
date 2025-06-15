// TaskFlow サーバー - 初心者向けチュートリアル
// このファイルがアプリケーションのスタート地点です

// 必要なライブラリを読み込み
const express = require('express');
const path = require('path');
require('dotenv').config(); // 環境変数を読み込み

// Express アプリケーションを作成
const app = express();

// 設定
const PORT = process.env.PORT || 3000; // ポート番号（.envファイルから読み込み）

// 静的ファイル（CSS、JavaScript、画像）を配信する設定
app.use(express.static(path.join(__dirname, 'public')));

// JSON データを受け取るための設定
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS テンプレートエンジンの設定
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ルート（/）にアクセスした時の処理
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'TaskFlow - スケジュール管理システム',
    message: 'サーバーが正常に動作しています！'
  });
});

// ヘルスチェック用のエンドポイント
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'TaskFlowサーバーは正常に動作中です',
    timestamp: new Date().toISOString()
  });
});

// サーバーを起動
app.listen(PORT, () => {
  console.log('🚀 TaskFlowサーバーが起動しました！');
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log('💡 停止するには Ctrl+C を押してください');
});

// エラーハンドリング
process.on('uncaughtException', (error) => {
  console.error('❌ 予期しないエラーが発生しました:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ 処理されなかったPromiseエラー:', reason);
  process.exit(1);
});