document.addEventListener('DOMContentLoaded', function() {
    const modalBtn = document.getElementById('modal-btn');
    const mask = document.getElementById('mask');
    const modal = document.getElementById('modal');
    const closeBtn = modal.querySelector('.close-btn');
    
    // モーダルを開く
    modalBtn.addEventListener('click', () => {
        mask.classList.add('appear');
        modal.classList.add('appear');
        
        // 特別なアニメーション処理
        setTimeout(() => {
            modal.style.transform = 'translate(-50%, -50%) scale(1) rotateY(0deg)';
        }, 50);
    });
    
    // マスクをクリックして閉じる
    mask.addEventListener('click', () => {
        closeModal();
    });
    
    // 閉じるボタンをクリックして閉じる
    closeBtn.addEventListener('click', () => {
        closeModal();
    });
    
    // ESCキーで閉じる
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    function closeModal() {
        mask.classList.remove('appear');
        modal.classList.remove('appear');
        modal.style.transform = 'translate(-50%, -50%) scale(0.8) rotateY(90deg)';
    }
});
