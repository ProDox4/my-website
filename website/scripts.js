// 頁面滾動動畫效果
document.addEventListener('DOMContentLoaded', function() {
    // 為時間軸和技能卡片添加動畫效果
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'all 0.5s ease';
            }
        });
    });

    // 初始化需要動畫的元素
    document.querySelectorAll('.timeline-item, .skill-card').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        observer.observe(item);
    });
});


// 煉金術計時器功能
function updateTimer() {
    const lastUpdate = new Date(document.lastModified);
    const now = new Date();
    const timeDiff = now - lastUpdate;
    
    // 計算時間差
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    
    // 組合時間文字
    let timeText = '';
    if (days > 0) {
        timeText += `${days}天 `;
    }
    if (hours > 0) {
        timeText += `${hours}小時 `;
    }
    timeText += `${minutes}分鐘前`;
    
    // 更新顯示
    document.getElementById('lastUpdate').textContent = timeText;
}

// 頁面載入時初始化計時器
// 等待頁面完全載入後執行
document.addEventListener('DOMContentLoaded', function() {
    // 獲取載入畫面元素
    const loadingScreen = document.querySelector('.loading-screen');
    
    // 設定延遲時間（毫秒）
    const minLoadTime = 2000; // 最少顯示2秒
    
    // 記錄開始時間
    const startTime = Date.now();
    
    // 等待頁面資源載入完成
    window.addEventListener('load', function() {
        // 計算已經過的時間
        const elapsedTime = Date.now() - startTime;
        
        // 如果已經過的時間少於最少顯示時間，則等待剩餘時間
        const remainingTime = Math.max(0, minLoadTime - elapsedTime);
        
        // 延遲後隱藏載入畫面
        setTimeout(function() {
            loadingScreen.classList.add('fade-out');
            // 完全移除載入畫面
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, 500);
        }, remainingTime);
    });
});

    // 設定定時更新（每分鐘更新一次）
    setInterval(updateTimer, 60000);