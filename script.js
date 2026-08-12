// script.js - 麗絲迪 (NICEDRAPE Solar Protection System Co., Ltd.) 官方網站互動邏輯

document.addEventListener('DOMContentLoaded', () => {
    // 1. 手機版導覽選單（漢堡選單）切換
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        // 點擊漢堡選單按鈕切換顯示/隱藏
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // 點擊手機選單內任意連結後自動收起選單
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 2. 專案諮詢表單提交處理與反饋
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // 彈出感謝訊息並指引專員對接
            alert('感謝您的專案查詢！麗絲迪 (NICEDRAPE Solar Protection System Co., Ltd.) 遮陽工程專家團隊將儘快與您聯絡。');

            // 自動重置表單欄位
            contactForm.reset();
        });
    }
});
