# موقع كريم قاجوج الرسمي

موقع ثابت (HTML/CSS/JS) بالعربية RTL، بلا خادم وبلا مفاتيح سرية.

## هيكل المشروع
- `index.html` الرئيسية، `candidate.html`، `program.html`، `zeghaia.html`، `news.html`، `gallery.html`، `contact.html`، `privacy.html`، `404.html`
- `assets/data.js` **ملف المحتوى**: الأخبار، المعرض، بريد/رابط نموذج الاتصال، ونصوص المحاور
- `assets/style.css`، `assets/app.js`

## إضافة خبر
أضف سطراً داخل `news:[ ]` في `assets/data.js`:
`{title:"العنوان", date:"2027-01-15", body:"النص", image:"assets/صورة.jpg"}` ثم ضع الصورة في `assets/`.

## إضافة صورة للمعرض
أضف عنصراً في `gallery:[ ]` وضع الصورة في `assets/`. استخدم صوراً حقيقية فقط.

## تفعيل نموذج الاتصال
إما `email:"بريدك"` (يفتح برنامج البريد عند الزائر)، أو أنشئ نموذجاً مجانياً في formspree.io وضع رابطه في `formAction` (يستقبل الرسائل في بريدك).

## النشر على GitHub Pages
1. أنشئ مستودعاً جديداً على GitHub وارفع كل الملفات (بما فيها `.github`).
2. من Settings → Pages اختر Source: **GitHub Actions**.
3. أي push على فرع `main` ينشر الموقع تلقائياً.
4. استبدل `USERNAME/REPO` في `sitemap.xml` و`robots.txt` برابط موقعك الفعلي.

## قبل النشر
- يراجع المترشح نصوص المحاور في `assets/data.js` ويعتمدها.
- لا تنشر معلومات أو أرقاماً غير موثقة.
