// TaskFlow フロントエンド JavaScript - 初心者向けチュートリアル

// ページが読み込まれた時に実行される関数
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 TaskFlow が正常に読み込まれました！');
    
    // 開発者コンソールにメッセージを表示
    console.log('📋 TaskFlow スケジュール管理システム');
    console.log('🛠️ 初心者向けチュートリアルで開発中...');
    
    // サーバーの動作確認
    checkServerHealth();
});

// サーバーが正常に動作しているかチェックする関数
async function checkServerHealth() {
    try {
        const response = await fetch('/health');
        const data = await response.json();
        
        if (data.status === 'OK') {
            console.log('✅ サーバー接続確認:', data.message);
            console.log('⏰ 確認時刻:', data.timestamp);
        }
    } catch (error) {
        console.error('❌ サーバー接続エラー:', error);
    }
}

// 将来の機能用の関数（今は空ですが、後で使います）
function showNotification(message, type = 'info') {
    console.log(`📢 通知 (${type}):`, message);
    // 後でBootstrapのトーストやアラートを表示する予定
}

// 将来のSocket.io接続用の準備（今はコメントアウト）
/*
let socket;

function initializeSocket() {
    socket = io();
    
    socket.on('connect', () => {
        console.log('🔗 Socket.io接続成功');
        showNotification('リアルタイム機能が有効になりました', 'success');
    });
    
    socket.on('disconnect', () => {
        console.log('❌ Socket.io接続切断');
        showNotification('リアルタイム機能が無効になりました', 'warning');
    });
}
*/