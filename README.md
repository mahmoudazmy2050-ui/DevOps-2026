# KMA Curriculum — مسار Full-Stack + DevOps

موقع ويب تفاعلي يحمل **المنهج الكامل** لمسارك التدريبي من الصفر إلى الاحتراف: 19 مرحلة،
جلسات مفصّلة، مصادر وفيديوهات موثّقة، 10 مشاريع حقيقية، اختبارات، و**تتبّع للتقدّم**.

> كل المصادر مجانية: Official Docs + كورسات Open Source + أدوات Free Tier. بدون أي خدمة مدفوعة.

## ✨ المميزات

- **19 مرحلة** (`PHASE 0`–`PHASE 18`): Environment → Programming → Git → Web → React/Next →
  Backend → Databases → Linux → Networking → Docker → Nginx → CI/CD → Cloud → IaC → K8s →
  Monitoring → DevSecOps → Production.
- **جلسات مفصّلة** بنظام: Objective / Explanation / Commands / Practice / Challenge /
  Expected Result / Checkpoint.
- **Progress Tracker** محفوظ على جهازك (`localStorage`) مع تصدير/استيراد JSON.
- **10 مشاريع** حقيقية بقائمة تحصيل حالة ✅/❌ لكل واحد على GitHub.
- بحث فوري، تصميم RTL متجاوب، و Dark/Light تلقائي.

## 🚀 التشغيل محليًا

```bash
npm install       # أو pnpm install
npm run dev       # https://localhost:5173
```

## 🧱 Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **React Router v7**
- **oxlint** + **Prettier**

## 📦 الفحوصات

```bash
npm run typecheck  # tsc -b
npm run lint       # oxlint
npm run format     # prettier —write
npm run build      # typecheck + build production
```

## 🗂️ البنية

```
src/
├── content/            # المحتوى (Data-Driven)
│   ├── types.ts        # الأنواع
│   ├── phases-core.ts  # المراحل 0–9
│   ├── phases-devops.ts# المراحل 10–18
│   ├── phases.ts       # التجميع
│   └── projects.ts     # المشاريع + pipeline + skills
├── components/         # مكوّنات Atomic
├── pages/              # الصفحات
└── hooks/useProgress.ts# تتبّع التقدّم
```

## 🧠 فكرة المحتوى

كل مرحلة بيانات بنيّة JSON في `src/content/` — لإضافة جلسة جديدة أو مصدر، عدّل ملف المرحلة
وهيبتظهر في الموقع مباشرة.

## 📝 Navigation

| المسار | الصفحة |
|--------|--------|
| `/` | الرئيسية + البحث |
| `/roadmap` | المسار الكامل (Pipeline) |
| `/phases/:slug` | مرحلة مفصّلة |
| `/projects` | المشاريع العشرة |
| `/progress` | تتبّع التقدّم + تصدير/استيراد |