# مرکز آموزشی و توانبخشی نگین — GitHub Pages

وب‌سایت مرکز آموزشی و توانبخشی نگین، آماده انتشار در Repository زیر است:

- GitHub owner: `contactneginedu-maker`
- Repository: `negin-aac`
- Branch: `main`
- آدرس مورد انتظار سایت: https://contactneginedu-maker.github.io/negin-aac/

## انتشار

این پروژه برای **GitHub Pages** تنظیم شده و فایل Workflow زیر را دارد:

`.github/workflows/pages.yml`

پس از قرار دادن فایل‌ها در ریشه Repository و Push روی `main`، Workflow انتشار را انجام می‌دهد.

اگر GitHub Pages در Repository قبلاً روی روش دیگری تنظیم شده است، از **Settings → Pages → Source** گزینه **GitHub Actions** را انتخاب کنید.

## ساختار

- `index.html` — صفحه اصلی
- `style.css` — طراحی واکنش‌گرا، حالت شب و کنتراست
- `script.js` — زبان، اسلایدر، خواندن متن، بازی‌ها، فرم و چت‌بات
- `.github/workflows/pages.yml` — انتشار خودکار GitHub Pages
- `.nojekyll` — جلوگیری از پردازش Jekyll برای فایل‌های ایستا

## نکات مهم

- همه مسیرهای داخلی سایت نسبی هستند و با آدرس پروژه `/ - /` سازگارند.
- URL اصلی GitHub Pages در `canonical` قرار داده شده است.
- فرم ثبت‌نام فعلاً نمایشی است و اطلاعات را به سرور ارسال نمی‌کند؛ برای ثبت واقعی باید Backend یا سرویس فرم اضافه شود.
- چت‌بات فعلاً آفلاین و مبتنی بر پاسخ‌های از پیش تعریف‌شده است. کلید API را داخل JavaScript قرار ندهید.
- تصاویر اسلایدر از Unsplash بارگذاری می‌شوند؛ برای نسخه نهایی بهتر است تصاویر مورد تأیید مرکز در پروژه قرار گیرند.
- لینک Google Maps و WhatsApp موجود در پروژه حفظ شده‌اند.
