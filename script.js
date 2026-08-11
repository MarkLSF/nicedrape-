// script.js - 麗絲迪 (NICEDRAPE Solar Protection System Co., Ltd.) 官方網站互動邏輯

document.addEventListener('DOMContentLoaded', () => {
    // 1. 手機版導覽選單（漢堡選單）切換
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // 點擊手機選單內的任意連結後自動收起選單
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 2. 表單提交模擬提示與重置
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('感謝您的查詢，麗絲迪 (NICEDRAPE) 專員將盡快與您聯絡！');
            contactForm.reset();
        });
    }
});