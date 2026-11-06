// التعامل مع نموذج تسجيل الدخول
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // منع إعادة تحميل الصفحة
        
        const alertBox = document.getElementById('loginAlert');
        alertBox.style.display = 'block'; // إظهار رسالة النجاح
        
        // إخفاء النموذج بعد النجاح أو تحويله بعد ثانيتين (اختياري)
        setTimeout(() => {
            // يمكنك هنا توجيهه لصفحة التمارين مثلاً
            window.location.href = 'exercises.html';
        }, 1500);
    });
}

// التعامل مع نموذج تواصل معنا
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // منع إعادة تحميل الصفحة
        
        const contactAlert = document.getElementById('contactAlert');
        contactAlert.style.display = 'block'; // إظهار رسالة تم توصيل رسالتك
        
        // تفريغ الحقول بعد الإرسال
        contactForm.reset();
        
        // إخفاء الرسالة بعد 4 ثوانٍ
        setTimeout(() => {
            contactAlert.style.display = 'none';
        }, 4000);
    });
}
