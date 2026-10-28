import type { Phase } from './types'

export const phasesCore: Phase[] = [
  {
    slug: 'phase-0',
    number: 0,
    title: 'Developer Environment',
    subtitle: 'PHASE 0 — إعداد بيئة المطور على Windows',
    objective:
      'تجهيز جهازك Windows بيئة تطوير نظيفة واحترافية: Terminal + VS Code + Git + Node.js + Python، بحيث تشتغل كل الأدوات بسلاسة قبل ما نبدأ البرمجة.',
    topics: [
      'Windows Terminal',
      'PowerShell',
      'CMD',
      'VS Code',
      'OpenCode',
      'Git & GitHub',
      'SSH',
      'Environment Variables',
      'PATH',
      'Package Managers',
      'Node.js',
      'npm',
      'pnpm',
      'Python basics',
    ],
    prerequisites: [],
    sessions: [
      {
        id: 'p0-s1',
        title: '1. Windows Terminal + PowerShell + CMD',
        blocks: [
          {
            type: 'objective',
            title: 'الهدف',
            text: 'تفهم الفرق بين الـ Terminal والـ Shell، وتستخدم PowerShell بطلاقة كأساس لكل ما سنفعله في المسار.',
          },
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'الـ Terminal هو مجرد نافذة تعرض واجهة نصية. أما الـ shell فهو "المترجم" اللي بينفّذ الأوامر المكتوبة. على Windows عندك أكثر من Shell: CMD (القديم المحدود) و PowerShell (الحديث والقوي). هنشتغل بـ PowerShell طول المسار.',
          },
          {
            type: 'commands',
            title: 'أوامر تبدأ بيها',
            code: `# أوامر التعامل مع الملفات والمجلدات
pwd                      # print working directory - أنا فين دلوقتي
ls                       # list - اللي جوه المجلد الحالي
cd "C:\\Users\\AzMy-IT"    # change directory - غيّر المجلد
mkdir projetc            # make directory - اعمل مجلد جديد
New-Item file.txt -ItemType File   # اعمل ملف جديد
Get-Content file.txt     # اقرا محتوى ملف
Set-Content file.txt "Hello" # اكتب في ملف
Clear-Host               # امسح الشاشة (أو cls)
Get-Help Get-Content     # ساعد نفسك بأي أمر
Get-Alias                # اعرف اختصارات الأوامر`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اعمل مجلد باسم `devops` جوه وثيقتك، ادخله، واعمل جواه مجلد `notes`، واعمل ملف `hello.txt` فيه "مرحبًا بالمسار".',
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'من غير ما تستخدم الماوس، اقفل الـ Terminal افتحه تاني وارجع للمجلد `notes` بأمر واحد بس (استخدم الـ up arrow).',
          },
          {
            type: 'expected',
            title: 'النتيجة المتوقعة',
            text: 'تقدر تتنقل بين مجلداتك وتعمل/تقري ملفات من سطر الأوامر من غير ما تفتح File Explorer.',
          },
          {
            type: 'checkpoint',
            title: 'Checkpoint',
            items: [
              'تقدر تقول الفرق بين Terminal و Shell',
              'بتستخدم cd و ls و mkdir بثقة',
              'تعرف تستخدم Get-Help لما تعلق في أمر',
            ],
          },
        ],
      },
      {
        id: 'p0-s2',
        title: '2. VS Code + Extensions',
        blocks: [
          {
            type: 'objective',
            title: 'الهدف',
            text: 'تجهيز VS Code كأداة العمل الأساسية مع الإضافات المهمة ومفاتيح الاختصار.',
          },
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'VS Code محرر أكواد (Code Editor) مجاني. أهم نقطة: تتعلم تفتح أي مشروع بـ Ctrl+K ثم O، وتفتح Terminal خارجي مدمج بـ Ctrl+` ، وتستخدم Command Palette بـ Ctrl+Shift+P.',
          },
          {
            type: 'commands',
            title: 'من الـ Terminal (لما تقدر تحب VS Code في الـ PATH)',
            code: `code .          # افتح VS Code في المجلد الحالي
code notes.txt # افتح ملف معين`,
          },
          {
            type: 'explanation',
            title: 'إضافات لازم تثبتها',
            items: [
              'Prettier - CSS — بالتنسيق التلقائي',
              'ESLint — امتحان الأخطاء البرمجية',
              'Material Icon Theme — أيقونات واضحة',
              'GitLens — تاريخ الأكواد git',
              'Thunder Client — تجربة APIs من جوه المحرر',
            ],
          },
          {
            type: 'explanation',
            title: 'مفاتيح لا غنى عنها',
            items: [
              'Ctrl+Shift+P — Command Palette',
              'Ctrl+` — فتح Terminal',
              'Ctrl+P — فتح أي ملف بسرعة',
              'Ctrl+B — إخفاء/إظهار الشريط الجانبي',
            ],
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'افتح المجلد `devops` اللي عملناه بـ VS Code، وقسم الشاشة لنافذتين (Ctrl+\\).',
          },
          {
            type: 'expected',
            title: 'النتيجة',
            text: 'حس فاضح إن مجلدات وملفات مشروعك كلها جوه محرر واحد فيه Terminal.',
          },
        ],
      },
      {
        id: 'p0-s3',
        title: '3. Git + GitHub',
        blocks: [
          {
            type: 'objective',
            title: 'الهدف',
            text: 'تفهم إزاي Git بيسجل تاريخ مشروعك وإزاي GitHub بيخزّنه في السحابة.',
          },
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Git = أداة Version Control بتاخد "صور" (Snapshots) من كودك في نقاط زمنية. GitHub = موقع بيستضيف repos على الإنترنت عشان تعمل نسخ احتياطي ومشاركة. هنرجع لدورة كاملة في Phase 2، هنا نجهز الحسابات فقط.',
          },
          {
            type: 'commands',
            title: 'التجهيز الأول مرة',
            code: `git --version                     # تأكد إنه مثبت
git config --global user.name "Anas"
git config --global user.email "you@email.com"
git config --global init.defaultBranch main`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'ثبتِت Git، واعمل حساب على GitHub.com وثبّت GitHub Desktop (اختياري)، وسجّل اسمك وإيميلك في الـ config.',
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'اعمل repo تجريبي على GitHub (اسمه test-repo) وبعدين اعمله Clone على جهازك بعنوان الـ URL بتاعه.',
          },
          {
            type: 'expected',
            title: 'النتيجة',
            text: 'حساب مرتبط بخطك، ومجلد repo شغال محليًا.',
          },
          {
            type: 'checkpoint',
            title: 'Checkpoint',
            items: [
              'git --version بيرجع رقم إصدار',
              'git config --list مؤكد إن الاسم والإيميل مسجلين',
            ],
          },
        ],
      },
      {
        id: 'p0-s4',
        title: '4. SSH Keys',
        blocks: [
          {
            type: 'objective',
            title: 'الهدف',
            text: 'تعمل زوج مفاتيح SSH (Public/Private) وتربطه بحساب GitHub عشان ترفع وتنزّل من غير كلمة سر في كل مرة.',
          },
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'SSH = بروتوكول يتأكد من هويتك بمفتاحين: Private Key بيقعد عندك ومش بيتنشر أبدًا، وPublic Key بتحطه على GitHub. لما GitHub يشوف مفتاح عام مطابق لمفتاحك الخاص، يعرف إنك انت.',
          },
          {
            type: 'commands',
            title: 'التشغيل',
            code: `ssh-keygen -t ed25519 -C "you@email.com"  # اعمل المفاتيح
# هيطلب مكان حفظ (Enter = افتراضي C:\\Users\\AzMy-IT\\.ssh)
# وبعدين passphrase (حط كلمة أو اتركها فاضية)
cat ~/.ssh/id_ed25519.pub   # اطبع المفتاح العام لنسخه`,
          },
          {
            type: 'explanation',
            title: 'الربط بـ GitHub',
            items: [
              'ادخل GitHub → Settings → SSH and GPG keys',
              'دوس New SSH key والصق المفتاح العام',
              'جرّب: ssh -T git@github.com → يتأكد بحكة "You have successfully authenticated"',
            ],
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اعمل المفاتيح، اربطها بـ GitHub، واختبر الاتصال.',
          },
          {
            type: 'expected',
            title: 'النتيجة',
            text: `ssh -T git@github.com يقول "successfully authenticated".`,
          },
        ],
      },
      {
        id: 'p0-s5',
        title: '5. Environment Variables + PATH',
        blocks: [
          {
            type: 'objective',
            title: 'الهدف',
            text: 'تفهم الـ Environment Variables وإزاي الـ PATH بيخلي أي command يشتغل من أي مجلد.',
          },
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Environment Variable = متغير بيخزن بيانات للـ system والبرامج (زي مسار فايل، مفتاح API). الـ PATH متغير خاص فيه قائمة مجلدات، ولما تكتب أمر زي `node`، الـ OS بيدور على ملف `node.exe` في المجلدات دي.',
          },
          {
            type: 'commands',
            title: 'التعامل معها في PowerShell',
            code: `$env:Path              # اعرض الـ PATH
$env:MY_VAR = "hello"   # اعمل متغير مؤقت
echo $env:MY_VAR
[Environment]::GetEnvironmentVariable("Path", "User")`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'عرض الـ PATH الحالي، ولاحظ مجلدات Node و Git و VS Code موجودة فيه.',
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'اعمل متغير دائم ويوزر سكوب اسمه MY_APP_CONFIG قيمته "dev" من جوه System Properties > Environment Variables، وبعدين اقراه بـ PowerShell جديد.',
          },
        ],
      },
      {
        id: 'p0-s6',
        title: '6. Node.js + npm + pnpm',
        blocks: [
          {
            type: 'objective',
            title: 'الهدف',
            text: 'تثبيت Node.js و إدارة الحزم (npm/pnpm) اللازمة لتشغيل كل مشاريعنا القادمة.',
          },
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Node.js = بيئة تشغيل JavaScript خارج المتصفح (بتخلي JavaScript تعمل Backend). npm = Package Manager بيقبض حزم جاهزة (مكتبات) وينزلها مع مشروعك. pnpm النسخة الأسرع والأوفر في المساحة.',
          },
          {
            type: 'commands',
            title: 'التثبيت والتحقق',
            code: `# 1) حمّل من nodejs.org LTS وأعمل Install
# 2) تأكد إنهم في الـ PATH وليهم نسخ
node --version
npm --version

# 3) pnpm (عالمي)
npm install -g pnpm
pnpm --version`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'جرب أول مشروع: اعمل مجلد، و `npm init -y` ، وبعدين `npm install express` وشوف folder الـ node_modules اتولّد.',
          },
          {
            type: 'expected',
            title: 'النتيجة',
            text: 'node/npm/pnpm كلها شغالة و package.json اتفرم في مجلد تجريبي.',
          },
        ],
      },
      {
        id: 'p0-s7',
        title: '7. Python + الأدوات الأخيرة',
        blocks: [
          {
            type: 'objective',
            title: 'الهدف',
            text: 'تثبيت Python و pip وبعض أدوات الـ DevOps اللي هنحتاجها على طول.',
          },
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Python = لغة بتستخدمها Dozens من أدوات الـ DevOps (Ansible، Terraform scripts، أدوات أمن). مش هنبرمج بيها كتير، بس المفروض تكون مثبتة وتشتغل.',
          },
          {
            type: 'commands',
            title: 'التثبيت',
            code: `# حمّل من python.org وعلّم على "Add Python to PATH"
python --version
pip --version
pip install --upgrade pip`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اكتب فايل `hello.py` فيه `print("Hello from Python")` ونفّذه بـ `python hello.py`.',
          },
          {
            type: 'expected',
            title: 'النتيجة',
            text: 'python و pip بيردوا بنسخة، وكود بسيط شغال.',
          },
        ],
      },
    ],
    resources: [
      {
        title: 'Microsoft Learn — PowerShell 101',
        url: 'https://learn.microsoft.com/en-us/powershell/scripting/learn/ps101/00-learning-resources',
        type: 'official',
      },
      {
        title: 'VS Code Docs — Getting Started',
        url: 'https://code.visualstudio.com/docs/getstarted/getting-started',
        type: 'official',
      },
      {
        title: 'Git — Getting Started Manual',
        url: 'https://git-scm.com/doc',
        type: 'official',
      },
      {
        title: 'GitHub Docs — Set up Git',
        url: 'https://docs.github.com/en/get-started/getting-started-with-git',
        type: 'official',
      },
      {
        title: 'GitHub Docs — SSH Keys',
        url: 'https://docs.github.com/en/authentication/connecting-to-github-with-ssh',
        type: 'official',
      },
      {
        title: 'Node.js Official Learning',
        url: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs',
        type: 'official',
      },
      {
        title: 'Python.org — Beginners Guide',
        url: 'https://www.python.org/about/gettingstarted/',
        type: 'official',
      },
      {
        title: 'فيديوهات PowerShell / Windows Terminal',
        url: 'https://www.youtube.com/results?search_query=windows+terminal+powerShell+tutorial+for+beginners',
        type: 'video',
      },
    ],
    tests: [
      {
        type: 'knowledge',
        question:
          'ما الفرق بين CMD و PowerShell؟ وما الفائدة من بقاء الـ PATH فاضي من المجلدات الصح؟',
        hint: 'CMD مش بيدعم الـ objects زي PowerShell، والـ PATH بيخلي الأوامر تجيب من أي مكان.',
      },
      {
        type: 'practical',
        question:
          'بس تنفيذ من سطر الأوامر: اعمل مجلد فيه ملف صغير، وبعدين انسخه لمجلد تاني ولغي النسخة الأصلية — كله من الـ terminal من غير فلوس.',
        hint: 'mkdir, Set-Content, Copy-Item, Remove-Item',
      },
      {
        type: 'debugging',
        question: `لما كتبت "node --version" ظهر: "node is not recognized as an internal or external command". ايه السبب وإزاي تحله؟`,
        hint: 'مشكلة PATH — الـ node مش جوه المسارات اللي الـ shell بيدور فيها.',
      },
    ],
    projects: [
      {
        name: 'Project 1 — Personal Portfolio',
        desc: 'أول سايت رسمي ليك — هتكمله في Phase 3-4',
      },
    ],
  },
  {
    slug: 'phase-1',
    number: 1,
    title: 'Programming Fundamentals — JavaScript',
    subtitle: 'PHASE 1 — أساسيات البرمجة بالـ JavaScript',
    objective:
      'بتحكم كامل في أساسيات البرمجة بلغة JavaScript (ثم TypeScript): من المتغيرات والجمل الشرطية لحد الـ Async/Await والشبكات.',
    topics: [
      'Variables',
      'Data Types',
      'Operators',
      'Conditions',
      'Loops',
      'Functions',
      'Arrays',
      'Objects',
      'JSON',
      'Modules',
      'Error Handling',
      'Promises',
      'Async/Await',
      'HTTP basics',
    ],
    prerequisites: ['Phase 0 — بيئة شغالة'],
    sessions: [
      {
        id: 'p1-s1',
        title: '1. Variables + Data Types',
        blocks: [
          {
            type: 'objective',
            title: 'الهدف',
            text: 'تفهم إزاي نخزن بيانات في الذاكرة وإزاي JavaScript بتعامل أنواع البيانات.',
          },
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'المتغير (Variable) = علبة بنحط فيها قيمة. في JS عندنا let (بيتغير) و const (ثابت). أنواع البيانات الأساسية: string (نص) و number (رقم) و boolean (صح/غلط) و null/undefined و object.',
          },
          {
            type: 'commands',
            title: 'جرب بنفسك — اعمل ملف basics.js و `node basics.js`',
            code: `let age = 25          // number
const name = "Anas"    // string
let isActive = true    // boolean

console.log(typeof age)   // "number"
console.log(typeof name)  // "string"
console.log("\n مرحبًا "، name، " عمرك "، age);`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اعمل 3 متغيرات: سعر منتج (number)، اسم المستخدم (string)، حالة الطلب (boolean). اطبعهم بـ console.log.',
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'استخدم `typeof` علشان تطبع نوع كل متغير في التمرين اللي فات.',
          },
          {
            type: 'expected',
            title: 'النتيجة',
            text: 'بتعرف variables و datatypes و typeof string/number/boolean بسهولة.',
          },
          {
            type: 'checkpoint',
            title: 'Checkpoint',
            items: [
              'الفرق بين let و const',
              'معنى "string" و "number" و "boolean"',
              'إزاي تطبع حاجة على الشاشة بـ console.log',
            ],
          },
        ],
      },
      {
        id: 'p1-s2',
        title: '2. Operators + Conditions',
        blocks: [
          {
            type: 'objective',
            title: 'الهدف',
            text: 'تستخدم العوامل الحسابية والمقارنة، وتتحكم في سير البرنامج بـ if/else.',
          },
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Operators بتعمل عمليات على القيم: حسابية (+ - * / %) ومقارنة (=== !== > < >= <=) ومنطقية (&& || !). الجمل الشرطية (if/else if/else) بتقنّع قرارات حسب الشروط.',
          },
          {
            type: 'commands',
            title: 'الكود',
            code: `const score = 75

if (score >= 90) {
  console.log("ممتاز")
} else if (score >= 60) {
  console.log("جيد")
} else {
  console.log("تحتاج مراجعة")
}

// مثال: وحدة تكون حالة المسؤولة
const isLoggedIn = true
const hasPermission = false
console.log(isLoggedIn && hasPermission) // false`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اكتب برنامج يقارن بين رقمين ويطبّع الأكبر، ولو متساويين يطبع "متساويين".',
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'ابنِ آلة حاسبة بسيطة: متغيرين أرقام وعامل (+ − * /) وطبع الناتج بالعامل.',
          },
          {
            type: 'expected',
            title: 'النتيجة',
            text: 'بتكتب جمل if/else مركبة وبتحسب العمليات الحسابية صح.',
          },
        ],
      },
      {
        id: 'p1-s3',
        title: '3. Loops',
        blocks: [
          {
            type: 'objective',
            title: 'الهدف',
            text: 'تكرر عمليات الأتمتة بـ for و while و break و continue.',
          },
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'المقاطعات (Loops) بتخلينا نكرر نفس الكود عدد معين أو لحد شرط. for مناسبة لما تعرف عدد المرات، while لما يكون الشرط هو المتحكم. break بتوقف، continue بتعدي على التكرار الحالي.',
          },
          {
            type: 'commands',
            title: 'الكود',
            code: `// for: اطبع الأرقام من 1 لـ 5
for (let i = 1; i <= 5; i++) {
  console.log(i)
}

// while: طابع الأرقام الفردية لحد 10
let n = 0
while (n <= 10) {
  if (n % 2 === 0) { n++; continue }  // عدّي الزوجي
  console.log(n)
  n++
}`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اكتب loop يطبّع جدول ضرب الرقم 7 (من 1 لـ 10).',
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'استخدم while علشان تطبع أول 5 أعداد في تسلسل Fibonacci (1,1,2,3,5).',
          },
          {
            type: 'expected',
            title: 'النتيجة',
            text: 'تفهم متى تختار for عن while وتعرف تتحكم في التكرار بـ break/continue.',
          },
        ],
      },
      {
        id: 'p1-s4',
        title: '4. Functions',
        blocks: [
          {
            type: 'objective',
            title: 'الهدف',
            text: 'تكتب دوال قابلة لإعادة الاستخدام (Reusable) بحدود input/output واضحة.',
          },
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'الدالة (Function) = بلوك كود جاهز بياخد Input (parameters) وبيقّول Output (return). مفاهيم أساسية: Default Parameters و Arrow Functions و Scope (نطاق المتغيرات) و Pure Functions (دوال ما بتغيّرش حاجة براها).',
          },
          {
            type: 'commands',
            title: 'الكود',
            code: `function greet(name = "ضيف") {
  return \`مرحبا ${name}!\`
}
console.log(greet("Anas"))   // مرحبا Anas!
console.log(greet())          // مرحبا ضيف!

// Arrow function
const double = (x) => x * 2
console.log(double(4))        // 8`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اكتب دالة `calcVAT(price, rate=0.14)` بترجّع السعر بعد الضريبة، وجرّبها بقيمتين.',
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'اكتب دالة بتأخذ مصفوفة أرقام وترجّع مجموعها، بدون استخدام أي حلقة؟ (استخدم reduce).',
          },
          {
            type: 'expected',
            title: 'النتيجة',
            text: 'بتكتب دوال ليك ولـ للغير، وبتحافظ على النطاق scope صححي.',
          },
        ],
      },
      {
        id: 'p1-s5',
        title: '5. Arrays',
        blocks: [
          {
            type: 'objective',
            title: 'الهدف',
            text: 'تدير قوائم البيانات بالمصفوفات وجميع دوالها المهمة.',
          },
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'المصفوفة (Array) = هيكل بيخزن مجموعة عناصر من فهرسه starting من 0. أهم الدوال اللي هتحتاجها 90% من وقتك: push/pop و map و filter و find و forEach و reduce.',
          },
          {
            type: 'commands',
            title: 'الكود',
            code: `const prices = [100, 250, 75, 300]

const withTax = prices.map((p) => p * 1.14)
console.log(withTax)        // [114, 285, 85.5, 342]

const big = prices.filter((p) => p >= 200)
console.log(big)            // [250, 300]

const first = prices.find((p) => p > 150)
console.log(first)          // 250

const total = prices.reduce((acc, p) => acc + p, 0)
console.log(total)          // 725`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اعمل مصفوفة لأسماء طلاب، أضف اسم بـ push، واحذف الأخير بـ pop، واطبع المصفوفة بعد كل خطوة.',
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'من مصفوفة درجات، اطبع المتوسط الحسابي باستخدام reduce فقط، وبدون أي loop يدوي.',
          },
          {
            type: 'expected',
            title: 'النتيجة',
            text: 'بتحس حالك مريح مع map/filter/reduce (اللي اتعرف بأساليب قوية).',
          },
        ],
      },
      {
        id: 'p1-s6',
        title: '6. Objects + JSON',
        blocks: [
          {
            type: 'objective',
            title: 'الهدف',
            text: 'تمثّل بيانات منظمة بالـ Objects وتتبادلها بصيغة JSON.',
          },
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'الـ Object = مجموعة Key-Value بتمثل كيان حقيقي (مستخدم، طلب، منتج). الـ JSON = نص تبادل بيانات زي الـ object طبقًا (بأقواس والحرفية)، وكل الـ APIs بتتبادل به.',
          },
          {
            type: 'commands',
            title: 'الكود',
            code: `const user = {
  id: 1,
  name: "Anas",
  role: "student",
  skills: ["linux", "docker"],
}

// قراءة وتعديل
console.log(user.name)            // Anas
user.role = "admin"

// Object → JSON
const json = JSON.stringify(user)
console.log(json)

// JSON → Object
const parsed = JSON.parse(json)
console.log(parsed.skills[0])     // linux`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اعمل object لمنتج نين: name, price, inStock, tags. حولها JSON وارجعها Object وبعدين عدّل السعر.',
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'اعمل array كاملة فيها 3 users، وطبع أسماء اللي role بتاعهم "admin" بـ filter ثم map.',
          },
          {
            type: 'expected',
            title: 'النتيجة',
            text: 'بتعمل objects، بتعدل بروبريتيها، وبستخدم JSON.stringify/parse بثقة.',
          },
        ],
      },
      {
        id: 'p1-s7',
        title: '7. Modules + Error Handling',
        blocks: [
          {
            type: 'objective',
            title: 'الهدف',
            text: 'تقسم كودك لملفات ودوال Modules وتاخد أخطاء البرمجة بأمان بـ try/catch.',
          },
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'الـ Modules بتخلي الشفرة نظيفة بأفضل Export/Import بين الملفات. الـ Error Handling ب `try/catch/finally` بيحمي البرنامج من الـ crashes لما يحصل خطأ غير متوقع.',
          },
          {
            type: 'commands',
            title: 'الكود — ملف math.js ثم main.js',
            code: `// math.js
export function add(a, b) { return a + b }
export const PI = 3.14159

// main.js (ES Modules)
import { add, PI } from "./math.js"

try {
  const result = add("abc", 5)  // خطأ منطقي
  console.log(result)
} catch (err) {
  console.error("حصل خطأ:", err.message)
} finally {
  console.log("انتهت المحاولة")
}`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اكمل المشروع السابق لكن قسّمه على ملفين: ملف بيدفع الدوال الحسابية وملف رئيسي بيستوردنا ويطبع النتائج.',
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'اكتب دالة `parseUser(str)` بتاخد JSON نص فتفللّه، ولو النص مش صالح ترد user بس `{ error: true }` بدل ما توقف البرنامج.',
          },
          {
            type: 'expected',
            title: 'النتيجة',
            text: 'بتستخدم import/export من غير مشاكل وبتعرف تاخد الأخطاء بـ try/catch.',
          },
        ],
      },
      {
        id: 'p1-s8',
        title: '8. Promises + Async/Await + HTTP',
        blocks: [
          {
            type: 'objective',
            title: 'الهدف',
            text: 'فهم العمليات غير المتزامنة (Asynchronous) والجلب من الإنترنت بـ fetch.',
          },
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'JavaScript أحادية الخيط، فكل عمليات تنتظر (شبكات، ملفات، قاعدة بيانات) بتشتغل Async. الـ Promise كائن يمثل عملية لسه شغالة (Pending → Fulfilled/Rejected). Async/Await صيغة أسهل للتعامل معها. الـ HTTP هو لغة التواصل بين المتصفح والسيرفر.',
          },
          {
            type: 'commands',
            title: 'الكود — جلب بيانات من API',
            code: `async function fetchUser(id) {
  try {
    const res = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`)
    if (!res.ok) throw new Error("HTTP " + res.status)
    const user = await res.json()
    console.log(user.name, user.email)
  } catch (err) {
    console.error("فشل الجلب:", err.message)
  }
}

fetchUser(1)`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'عدّل الدالة اللي فوق علشان تجيب كل المستخدمين (تمسك array) وتطبع أسماؤهم فقط.',
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'اكتب Two Functions: واحدة بتجيب باي مستخدم من flexPlaceholder والأخرى بتقرأ بياناته للعرض. اتأكد إن الأخطاء في الشبكة مش بترمي البرنامج.',
          },
          {
            type: 'expected',
            title: 'النتيجة',
            text: 'بتكتب async functions بتـ fetch/await وتتعامل مع الأخطاء بشكل مغترب.',
          },
          {
            type: 'checkpoint',
            title: 'Checkpoint End of Phase 1',
            items: [
              'الفرق بين Pending و Fulfilled و Rejected',
              'لما يستخدم async/await ومتى يستخدم .then',
              'إزاي تتحقق من res.ok قبل تحويل الاستجابة لـ JSON',
            ],
          },
        ],
      },
    ],
    resources: [
      {
        title: 'فيديو: JavaScript Programming — Full Course (freeCodeCamp)',
        url: 'https://www.youtube.com/watch?v=jS4aFq5-91M',
        type: 'video',
      },
      {
        title: 'MDN — JavaScript Guide (المرجع الرسمي)',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
        type: 'official',
      },
      {
        title: 'MDN — JavaScript Curriculum (مسار منظم)',
        url: 'https://developer.mozilla.org/en-US/curriculum/',
        type: 'official',
      },
      {
        title: 'freeCodeCamp — JavaScript Curriculum (تمارين تفاعلية)',
        url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
        type: 'course',
      },
      {
        title: 'فيديو: TypeScript Full Tutorial (freeCodeCamp)',
        url: 'https://www.youtube.com/watch?v=30LWjhZzg50',
        type: 'video',
      },
      {
        title: 'TypeScript Handbook (المرجع الرسمي)',
        url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
        type: 'official',
      },
    ],
    tests: [
      {
        type: 'knowledge',
        question: 'اشرح الفرق بين const و let، والفرق بين == و === في JavaScript.',
      },
      {
        type: 'practical',
        question:
          'اكتب دالة `groupByRole(users)` بترجّع object مفصول فيه "admin" و "student" من مصفوفة users.',
        hint: 'استخدم reduce أو loop مع if.',
      },
      {
        type: 'debugging',
        question:
          'الكود ده بيرجّع undefined بدل "مرحبا Anas": ليه؟ `function greet(name) { const msg = `مرحبا ${name}` } console.log(greet("Anas"))`.',
        hint: 'الدالة مالهاش return.',
      },
    ],
    projects: [
      {
        name: 'Project 2 — REST API (starter)',
        desc: 'أول API بس أبسط — هنبنيه متكامل في Phase 5',
      },
    ],
  },
  {
    slug: 'phase-2',
    number: 2,
    title: 'Git & GitHub',
    subtitle: 'PHASE 2 — إتقان إدارة إصدارات الكود',
    objective:
      'إدارة أي مشروع بـ Git من الصفر: init/clone/branch/merge/rebase/stash، والعمل على GitHub بـ Pull Requests و Issues و Conventional Commits و GitHub Actions.',
    topics: [
      'git init · clone · status · add · commit · push · pull',
      'branch · checkout · switch · merge · rebase',
      'stash · log · diff · reset · revert · tag',
      'GitHub · Pull Requests · Issues · Branch Strategy',
      'Conventional Commits · README · .gitignore',
      'GitHub Actions',
    ],
    prerequisites: ['Phase 0 — SSH keys جاهزة'],
    sessions: [
      {
        id: 'p2-s1',
        title: '1. أساسيات Git: init / status / add / commit / push',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Git بيتبع دورة حياة: Working Directory (ملفاتك) → Staging Area (جنّد اللي عايزه متسجل) → Local Repository (commit) → Remote (push لأي GitHub). اتدرب على كل أمر ببطء لحد ما الإيقاع يبقى عادة.',
          },
          {
            type: 'commands',
            title: 'البراكتس — اعمل مشروع `git-playground`',
            code: `mkdir git-playground && cd git-playground
git init
echo "# playground" > README.md
git status
git add README.md
git commit -m "feat: initial commit"
git log --oneline`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اعمل 3 ملفات (a.txt, b.txt, c.txt). اعمل commitين منفصلين: الأول فيه a، التاني فيه b و c معاً.',
          },
        ],
      },
      {
        id: 'p2-s2',
        title: '2. Branches: merge / rebase / conflict',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'الفرع (Branch) = نسخة خط توازي للتطوير. `git checkout -b feature/x` تفتح فرع جديد وتمشي عليه. الـ merge بيدمج الـ feature في الـ main، والـ rebase بيعيد ترتيب الـ commits عشان التاريخ يبقى خط مستقيم. الصراعات (Conflicts) مش لازم تكون صعب: Git بيميزلك مواسمها وانت بتختاري.',
          },
          {
            type: 'commands',
            title: 'تمرين الفروع',
            code: `git switch -c feature/card      # افتح فرع جديد
# عدّل ملف واضغط commit
git add . && git commit -m "feat: add card"
git switch main
git merge feature/card          # دمج بدون تعقيد؟
git switch -c feature/fix
# عدّل نفس السطر اللي سمتوي فيه...
git switch main
git merge feature/fix           # المحتمل الـ CONFLICT هنا`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'حاول تخلق conflict متعمد (رنّيتين يعدلوا نفس السطر من نفس الملف فرعين مختلفين) واذاب fحلّها يدوي midmerge.',
          },
        ],
      },
      {
        id: 'p2-s3',
        title: '3. Under the hood: log / diff / reset / revert / stash',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'الـ diff بيوضح تغييرات غير مسجلة، والـ log بيوثق التاريخ، والـ reset بيرجع للـ commits قديمة (لكن بحذر مع --hard)، والـ revert بيعمل commit جديد بيلغي تغيير سابق (الأسلم للي الجماعة)، والـ stash بيسطب التغييرات مؤقتًا لما تبقى عايز تخلّص branch معلّقية.',
          },
          {
            type: 'commands',
            title: 'أوامر جوهرية',
            code: `git diff                 # غير uncommitted
git log --oneline --graph
git stash && git stash list && git stash pop
git revert <commit-hash>   # commit يقفله
git reset --soft HEAD~1    # مش الوحيدة...`,
          },
        ],
      },
    ],
    resources: [
      {
        title: 'فيديو: Git & GitHub Crash Course 2026 (freeCodeCamp)',
        url: 'https://www.youtube.com/watch?v=mAFROnOfHs',
        type: 'video',
      },
      {
        title: 'فيديو: Git and GitHub for Beginners (freeCodeCamp)',
        url: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
        type: 'video',
      },
      {
        title: 'Pro Git Book (مجاني ورسمي)',
        url: 'https://git-scm.com/book/en/v2',
        type: 'official',
      },
      {
        title: 'GitHub Skills — Interactive Courses',
        url: 'https://skills.github.com/',
        type: 'course',
      },
      {
        title: 'Conventional Commits — Specification',
        url: 'https://www.conventionalcommits.org/en/v1.0.0/',
        type: 'official',
      },
    ],
    tests: [
      {
        type: 'knowledge',
        question: 'الفرق بين `git reset` و `git revert`؟ ومتى تختار الواحد التاني؟',
      },
      {
        type: 'practical',
        question:
          'من مشروع موجود على GitHub: اعمل fork → clone → branch `feature/readme` → عدّل README → push → افتح Pull Request.',
      },
      {
        type: 'debugging',
        question: `لما جربت "git push" ظهر: "The current branch main has no upstream branch". ليه؟ وإزاي الحل؟`,
        hint: 'محتاج `-u origin main` مرة واحدة في الأول.',
      },
    ],
    projects: [
      {
        name: 'Project 4 — Full-Stack E-commerce',
        desc: 'هنا تبدأ خطواته: repo نظيفة بـ Conventional Commits',
      },
    ],
  },
  {
    slug: 'phase-3',
    number: 3,
    title: 'HTML & CSS',
    subtitle: 'PHASE 3 — بناء واجهات بمعايير حديثة',
    objective:
      'بناء صفحات ويب دلالية (Semantic)، أفصح Accessibility، وتصميم حديث بـ Flexbox و Grid و Responsive Design و Animations.',
    topics: [
      'Semantic HTML · Forms · Accessibility',
      'CSS fundamentals · Box Model',
      'Flexbox · Grid',
      'Responsive Design · Media Queries',
      'Position · Display · Animations',
      'CSS Architecture',
    ],
    prerequisites: ['Phase 1 — لغة مبرمجة'],
    sessions: [
      {
        id: 'p3-s1',
        title: '1. Semantic HTML + Forms + Accessibility',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'HTML الدلالي = استخدام وسوم بتعبر عن معناها (header, nav, main, article, footer) مش مجرد div عشوائي. الـ Forms هي طريقة جمع بيانات المستخدم. الـ Accessibility (حق الـ a11y) = تمكين الكل من استخدام موقعك: تباين، keyboard navigation، label صحيح لكل input.',
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'ابعن صفحة Profile بسيطة: header فيه نبذة، nav فيه روابط، main فيها article عنك، footer فيه تواصل. أتحقق إنها صح بـ validator.w3.org.',
          },
        ],
      },
      {
        id: 'p3-s2',
        title: '2. Box Model + Flexbox + Grid',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Box Model = كل عنصر صندوق من: content + padding + border + margin. الـ Flexbox مثالي للتوزيع على محور واحد (صفوف/أعمدة)، والـ Grid للتقسيم الشبكي على محورين. متى تختار مين؟ Flex لعناصر صغيرة، Grid للـ layouts الكاملة.',
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'بُنّن layout لصفحة: header بيمتد، sidebar يمين، main في النص، footer. جرب تمشي بـ Grid لثلاثة أعمدة وبعدين كسّرها بـ Media Query.',
          },
        ],
      },
      {
        id: 'p3-s3',
        title: '3. Responsive + Animations + CSS Architecture',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Responsive = التجاوب مع كل الشاشات باستخدام Mobile-First و Media Queries و vh/vw/rem. الـ Animations واضحها CSS Transitions/Keyframes micro-interactions لطيفة. الـ CSS Architecture (زي BEM وتنظيم الـ files) بتمنع الملف يتحول لـ spaghetti.',
          },
          {
            type: 'challenge',
            title: 'التحدي النهائي',
            text: 'Landing Page احترافية لخدمة وهمية: Hero + Features + Pricing + FAQ + Footer، متجاوبة تمامًا من موبايل لديسكتوب، MIDLLERN معنى transition لطيفة.',
          },
        ],
      },
    ],
    resources: [
      {
        title: 'MDN — HTML Guide',
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content',
        type: 'official',
      },
      {
        title: 'MDN — CSS Guide',
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics',
        type: 'official',
      },
      {
        title: 'فيديو: HTML/CSS Full Course للمبتدئين (ابحث بأحدث)',
        url: 'https://www.youtube.com/results?search_query=html+css+full+course+for+beginners+2025',
        type: 'video',
      },
      {
        title: 'The Odin Project — Foundations',
        url: 'https://www.theodinproject.com/paths/foundations',
        type: 'course',
      },
      {
        title: 'CSS Tricks — A Complete Guide to Flexbox',
        url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
        type: 'article',
      },
      {
        title: 'CSS Tricks — A Complete Guide to Grid',
        url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
        type: 'article',
      },
    ],
    tests: [
      {
        type: 'knowledge',
        question: 'ما الفرق بين Flexbox و Grid؟ واذكر مثال لوصلاح بيئة مناسبة لكل واحد.',
      },
      {
        type: 'practical',
        question:
          'اعمل بطاقة Product: صورة فوق + عنوان + سعر + زر. وسّط اللحم عموديًا بـ Flex، وحوّلها لكارت ينضغط على الموبايل.',
      },
      {
        type: 'debugging',
        question:
          'زرين قاعدين يمين بعض في سطر لكن في الموبايل بيضحكوا تحت بعض. ليه؟ وكيف تحل وفرة "flex-wrap".',
      },
    ],
    projects: [
      {
        name: 'Project 1 — Personal Portfolio',
        desc: 'سايت سيرتك الذاتية: Hero, About, Skills, Projects, Contact. على GitHub.',
      },
    ],
  },
  {
    slug: 'phase-4',
    number: 4,
    title: 'Frontend — React + Next.js',
    subtitle: 'PHASE 4 — بناء واجهات تفاعلية حديثة',
    objective:
      'بناء تطبيقات Frontend احترافية بـ React 19 + TypeScript + Vite + Tailwind CSS، ثم الترقية لإتقان Next.js (App Router, RSC, SSR, SSG).',
    topics: [
      'React: Components · Props · State · Hooks',
      'Vite · Tailwind CSS',
      'React Router · TanStack Query',
      'Forms & Validation',
      'State Management',
      'Authentication (Client)',
      'Next.js: App Router · RSC/CC · Middleware · API · SSR/SSG · SEO',
    ],
    prerequisites: ['Phase 1 — JavaScript محكم'],
    sessions: [
      {
        id: 'p4-s1',
        title: '1. React Foundations',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'React = مكتبة بتقلل الـ UI لمكونات Components قابلة لإعادة الاستخدام. State = بيانات المكون اللي لما تتغير بترسم الـ UI تاني. Props = بيانات بتنتقل من الأب للابن. Hooks (useState, useEffect, useContext) بتدي المكون القدرة على الـ lifecycle.',
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'أنشئ مشروع بـ `npm create vite@latest` بـ React + TS. اعمل مكوّن Counter فيه useState + useEffect للعدّاد، وشرّح لكل سطر.',
          },
        ],
      },
      {
        id: 'p4-s2',
        title: '2. Vite + Tailwind + Router + TanStack Query',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Vite = أداة build سريعة. Tailwind CSS = كتابة styling بكلاسيهات utility. React Router = نظام تنقل/عتصفح صفحات. TanStack Query = إدارة بيانات الـ API: caching, retries, loading states بدون ضجة.',
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'حول التمرين السابق لسايت من صفحتين (`/` و `/profile`) مبنية بـ React Router، وبيانات البروفايل هاتها من API بـ TanStack Query.',
          },
        ],
      },
      {
        id: 'p4-s3',
        title: '3. Next.js App Router',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Next.js = إطار فوق React بيضيف Routing تلقائي على نظام ملفات، و Server Components (RSC) بتشتغل على السيرفر فبتقلل الـ JS اللي ينزل للعميل، و SSR (توليد الصفحة على السيرفر) و SSG (توليد ثابت). الـ Middleware بيسمح بتحكم بالطلبات قبل ما توصل للصفحة (حماية مسارات).',
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'أنشئ `create-next-app` واعمل: صفحة static (`/about`)، صفحة SSR بَجلب بيانات من API (`/posts`)، و صفحة dynamic route (`/posts/[id]`).',
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'أضف middleware يحمي `/dashboard` — لو مفيش token في الـ cookie يحول للـ `/login`.',
          },
        ],
      },
    ],
    resources: [
      {
        title: 'فيديو: React Tutorial Full Course (React 19) — SuperSimpleDev',
        url: 'https://www.youtube.com/watch?v=TtPXvEcE11E',
        type: 'video',
      },
      {
        title: 'React Official Docs — Learn',
        url: 'https://react.dev/learn',
        type: 'official',
      },
      {
        title: 'فيديو: NextJS 15 Full Course — PedroTech',
        url: 'https://www.youtube.com/watch?v=6jQdZcYY8OY',
        type: 'video',
      },
      {
        title: 'Next.js Official Learn Course',
        url: 'https://nextjs.org/learn',
        type: 'official',
      },
      {
        title: 'Vite Guide',
        url: 'https://vite.dev/guide/',
        type: 'official',
      },
      {
        title: 'Tailwind CSS Docs',
        url: 'https://tailwindcss.com/docs',
        type: 'official',
      },
      {
        title: 'TanStack Query Docs',
        url: 'https://tanstack.com/query/latest/docs/framework/react/overview',
        type: 'official',
      },
    ],
    tests: [
      {
        type: 'knowledge',
        question:
          'اشرح الفرق بين Client Components و Server Components في Next.js — وأي واحدة هتختار لجلب بيانات في صفحة عامة ولماذا؟',
      },
      {
        type: 'practical',
        question:
          'اسأل البنك: اعمل صفحة "users" بـ Next.js App Router تجيب 10 users من JSONPlaceholder وتعرضهم كجدول.',
      },
      {
        type: 'debugging',
        question: `React بيغلط: "Cannot read properties of undefined (reading 'map')". ايه السبب وإزاي تمنعه بـ Optional Chaining أو default value؟`,
        hint: 'الغالب react في الاستجابة قبل البيانات.',
      },
    ],
    projects: [
      {
        name: 'Project 1 — Personal Portfolio v2',
        desc: 'تفاعل Portfolio بـ React + Tailwind + Framer Motion.',
      },
    ],
  },
  {
    slug: 'phase-5',
    number: 5,
    title: 'Backend — Node.js + Express',
    subtitle: 'PHASE 5 — بناء APIs احترافية',
    objective:
      'بناء REST APIs آمنة بـ Node.js و Express/Fastify: Middleware, JWT, Cookies, Validation, Rate Limiting, Security Headers, وتوثيق بـ OpenAPI.',
    topics: [
      'HTTP · REST API',
      'Express / Fastify · Middleware',
      'Authentication & Authorization · JWT · Cookies',
      'Validation · Error Handling · Logging',
      'Rate Limiting · CORS · Security Headers',
      'OpenAPI / Swagger',
    ],
    prerequisites: ['Phase 1 — Async قوي'],
    sessions: [
      {
        id: 'p5-s1',
        title: '1. Node + Express REST API',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'الـ REST API = مجموعة Endpoints (مسارات) بتتبع HTTP verbs (GET/POST/PUT/PATCH/DELETE) وبتتبادل JSON. Express = إطار بيلفّ الطلبات والردود وهو الأسهل للتعلم. Fastify أسرع وأحدث لو حبيت تختلف.',
          },
          {
            type: 'commands',
            title: 'Scaffold',
            code: `mkdir api && cd api && npm init -y
npm install express cors dotenv
node -e "console.log('ok')"`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اعمل CRUD كامل لـ /todos كـ in-memory array (بدون قاعدة بعد). GET /todos، POST /todos، GET /todos/:id، DELETE /todos/:id.',
          },
        ],
      },
      {
        id: 'p5-s2',
        title: '2. Auth: JWT + Cookies + Middleware',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'JWT (JSON Web Token) = أداة توقيع هوية — السيرفر يوقّع token وف يقتُوكون لجعل المستخدم مسجل. Cookies أفضل للحماية من XSS من localStorage. الـ Middleware بيعمل check للـ token قبل الوصول للمسارات المحمية ويعيد 401 إن مفيش.',
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'طبّق: route /auth/register بيكلمح password بطريقة bcrypt، و /auth/login بيرجّع JWT، وميدل وير auth يحمي `/profile` بالاستخلاص token من الـ Bearer header.',
          },
        ],
      },
      {
        id: 'p5-s3',
        title: '3. Validation + Security + Docs',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Valider كل Input من العميل (بـ zod مثلًا) — Trust No Client. الـ Rate Limiting بيمنع brute-force. Security Headers بـ helmet. توثيق الـ API بـ OpenAPI/Swagger عشان الـ frontend والزملاء يفهموا endpoint اللي حضرتك.',
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'أضف zod validation لـ POST /todos، و helmet + express-rate-limit، ووثّق endpoints بـ Swagger UI.',
          },
        ],
      },
    ],
    resources: [
      {
        title: 'فيديو: Node.js and Express.js Full Course (freeCodeCamp)',
        url: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
        type: 'video',
      },
      {
        title: 'Node.js Official Learning',
        url: 'https://nodejs.org/en/learn',
        type: 'official',
      },
      {
        title: 'Express Web Framework',
        url: 'https://expressjs.com/',
        type: 'official',
      },
      {
        title: 'JWT.io — Understanding tokens',
        url: 'https://jwt.io/introduction',
        type: 'article',
      },
      {
        title: 'OWASP — Authentication Cheat Sheet',
        url: 'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html',
        type: 'article',
      },
      {
        title: 'Swagger / OpenAPI Spec',
        url: 'https://swagger.io/docs/specification/about/',
        type: 'official',
      },
    ],
    tests: [
      {
        type: 'knowledge',
        question: 'ما الفرق بين Authentication و Authorization؟ وأين يعمل كل واحد منهما.',
      },
      {
        type: 'practical',
        question:
          'اعمل route محمي `/me` يرجع بيانات المستخدم الحالي — بس "Authorization: Bearer <token>".',
      },
      {
        type: 'debugging',
        question:
          'الـ API بيرجع 500 بدل الـ JSON الأخطاء حتى مع رسالة خطأ. ايه الخطأ الشائع في إعداد error handling في Express؟',
        hint: 'أخطاء async middleware مش بتتبتطط تلقائيًا — محتاج wrapper أو Express 5.',
      },
    ],
    projects: [
      {
        name: 'Project 2 — REST API',
        desc: 'API كتب/متاجر CRUD كامل موّثقة بـ Swagger، عليها ميكانيزمات الـ auth.',
      },
    ],
  },
  {
    slug: 'phase-6',
    number: 6,
    title: 'Database — PostgreSQL + Prisma + Redis',
    subtitle: 'PHASE 6 — تخزين البيانات باحتراف',
    objective:
      'إتقان قواعد البيانات العلائقية بـ PostgreSQL، والعمل مع ORM (Prisma)، وفهم متى وأين تستخدم Redis كـ cache/session.',
    topics: [
      'Database · Tables · Rows · Columns',
      'Primary & Foreign Keys · Relationships',
      'JOIN · Index · Transactions · Constraints',
      'Views · Queries · Migrations',
      'Backup · Restore',
      'Prisma ORM',
      'Redis: cache · sessions · queues',
    ],
    prerequisites: ['Phase 5 — REST API'],
    sessions: [
      {
        id: 'p6-s1',
        title: '1. PostgreSQL Fundamentals',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'PostgreSQL = قاعدة علائقية (Relational) بتخزن البيانات في جداول فيها RowsColumns. العلاقات تربط الجداول بـ Foreign Key. الـ JOIN بيدمج صفوف من جدولين. Transactions بتضمن إن مجموعة عمليات تنجح كلها أو ترجع لحالتها الأولى.',
          },
          {
            type: 'commands',
            title: 'ابدأ with Docker (أول معاملة Docker)',
            code: `docker run -d --name postgres-demo \
-e POSTGRES_PASSWORD=secret \
-p 5432:5432 postgres:16-alpine`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اعمل جدولين users و orders بعلاقة واحدة-to-many، وأسأل: جرّب JOIN يظهر اسم المستخدم مع طلباته في سطر واحد.',
          },
        ],
      },
      {
        id: 'p6-s2',
        title: '2. Indexing + Transactions + Migrations',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Index = فهرس بيخلي البحث سريع. Transactions بتحمي الشمولية: لو حصل خطأ في المنتصف، كل شيء يرجع. Migrations = نسخ من تغييرات الـ schema مدارة بالكود (بتتطبق بالترتيب على أي بيئة).',
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اعمل migration يضيف عمود `email` لجدول users بإنشاء فهرس عليه.',
          },
        ],
      },
      {
        id: 'p6-s3',
        title: '3. Prisma + Redis',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Prisma = ORM بيكتب الـ queries ويتحكم في الـ schema برملة TypeScript-type، وبيغتلك migrations آمنة. Redis = قاعدة In-Memory سريعة كخام للـ cache والـ sessions — بتستخدمها وقت ما يكون القراءة المتكررة هي الـ bottleneck، مش بديل لقاعدة البيانات الأساسية.',
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'بعد الـ /products/:id، اجعل الـ endpoint يخزن لي product في Redis بصلاحية 60 ثانية، ويقرأ من الـ cache الأول (Cache-Aside pattern).',
          },
        ],
      },
    ],
    resources: [
      {
        title: 'فيديو: PostgreSQL Tutorial for Beginners (freeCodeCamp)',
        url: 'https://www.youtube.com/watch?v=SpfIwlAYaKk',
        type: 'video',
      },
      {
        title: 'فيديو: PostgreSQL Full Course (freeCodeCamp)',
        url: 'https://www.youtube.com/watch?v=qw--VYLpxG4',
        type: 'video',
      },
      {
        title: 'PostgreSQL Official Docs',
        url: 'https://www.postgresql.org/docs/',
        type: 'official',
      },
      {
        title: 'Prisma Docs',
        url: 'https://www.prisma.io/docs',
        type: 'official',
      },
      {
        title: 'Redis University / Docs',
        url: 'https://redis.io/docs/',
        type: 'official',
      },
    ],
    tests: [
      {
        type: 'knowledge',
        question: 'ما الفرق بين JOIN داخلي وخارجي؟ ومتى تحدد ما تحتاج index؟',
      },
      {
        type: 'practical',
        question:
          'اكتب SQL: جدول الطلاب بالدورات بحسب الكليات، واعرض كل طالب مع تسجيلاته بـ LEFT JOIN.',
      },
      {
        type: 'debugging',
        question:
          'Transaction فضاء: عمليتان نجحت الأولى وفشلت الثانية، لكن قاعدة البيانات بقت أول عملية مطبقة. ليه؟',
        hint: 'ممكن الـ commit تم قبل error handling، أو الـ transaction ما اتلفتش.',
      },
    ],
    projects: [
      {
        name: 'Project 3 — Authentication System',
        desc: 'سجل/دخول کامل بـ PostgreSQL + Prisma + Redis sessions.',
      },
    ],
  },
  {
    slug: 'phase-7',
    number: 7,
    title: 'Full-Stack Project — KMA Academy',
    subtitle: 'PHASE 7 — المشروع الرئيسي Full-Stack',
    objective:
      'دمج كل اللي فات في مشروع كامل: منصة تعليمية (KMA Academy) بـ Next.js + Node/TS + PostgreSQL + Redis، بأدوار Admin/Student/Teacher.',
    topics: [
      'Auth & Roles (Admin/Student/Teacher)',
      'Student/Teacher/Admin Dashboards',
      'Courses · Lessons · Categories',
      'Enrollment · Search · Pagination',
      'Notifications · Profile · Reports',
    ],
    prerequisites: ['Phase 4 + Phase 5 + Phase 6'],
    sessions: [
      {
        id: 'p7-s1',
        title: '1. التخطيط والبنية',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'قبل ما تكتب خط كود، اكتب تصميم: ERD للقاعدة، قائمة صفحات، قائمة endpoints. قسم المشروع لـ apps: `web/` (Next.js) و `api/` (Node) و `db/` (Prisma schema). اختار الجدير بمملكة تجعل كل مسؤولية في مكانها.',
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'ثقبّع نماذج قاعدة البيانات بالكامل (users, roles, courses, lessons, enrollments, notifications) في prisma schema مبنيًّا عليها العلاقات.',
          },
        ],
      },
      {
        id: 'p7-s2',
        title: '2. ميزات المرحلة الأولي MVP',
        blocks: [
          {
            type: 'practice',
            title: 'الباكينج الأول',
            text: 'سجّل ودخول بالـ roles، و CRUD للـ courses, lessons, categories، والتسجيل في الدورات (enrollment) مع تقارير بسيطة.',
          },
        ],
      },
      {
        id: 'p7-s3',
        title: '3. الميزات المتقدمة',
        blocks: [
          {
            type: 'practice',
            title: 'المرحلة التانية',
            text: 'Search + Pagination، Notifications، لوحات تحكم لكل دور، وimanim Dashboard قيم measurable.',
          },
        ],
      },
    ],
    resources: [
      {
        title: 'نفس مصادر Phase 4 و 5 و 6 — ادمج تطبيقيًا',
        url: 'https://nextjs.org/learn',
        type: 'course',
      },
      {
        title: 'فيديو: Build a Full-Stack App مع Next.js + Prisma (ابحث بأحدث)',
        url: 'https://www.youtube.com/results?search_query=next.js+prisma+postgres+full+course',
        type: 'video',
      },
    ],
    tests: [
      {
        type: 'knowledge',
        question: 'كيف تعرض بيانات dashboard لوحة تحكم بكلاحين أدوار؟ وما الـ RBAC؟',
      },
      {
        type: 'practical',
        question:
          'اعمل بيج إدارة كورسات للـ Admin فقط — وقفها عن الـ student بـ middleware في Next.',
      },
      {
        type: 'debugging',
        question:
          'في Next API route جربت جلب بيانات من `process.env.DATABASE_URL` فشل في الـ build لكن شغّل محليًا. ايه الفرق؟',
        hint: 'Secrets/env مش موجودة على الحامل اللي بينفّذ build على السيرفر.',
      },
    ],
    projects: [
      {
        name: 'Project 5 — KMA Academy Platform',
        desc: 'المشروع الرئيسي الكامل على GitHub.',
      },
    ],
  },
  {
    slug: 'phase-8',
    number: 8,
    title: 'Linux + Shell',
    subtitle: 'PHASE 8 — التحكم في السيرفرات',
    objective:
      'إدارة Linux Server كاملاً بـ Ubuntu: الأوامر الأساسية، الـ Users/Permissions، الـ Services (systemd)، Networking، SSH، Firewall، و Bash Scripting.',
    topics: [
      'pwd · ls · cd · mkdir · touch · cp · mv · rm',
      'cat · less · grep · find · awk · sed',
      'curl · wget · tar · zip · chmod · chown',
      'ps · top · kill · systemctl · journalctl',
      'df · du · free · ip · ss · ping',
      'Users · Groups · Permissions · SSH · Firewall · Cron',
      'Bash scripting',
    ],
    prerequisites: ['Phase 0 — بيئة'],
    sessions: [
      {
        id: 'p8-s1',
        title: '1. Terminal Basics + File System',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'بنية Linux: كل شيء ملف، والجذر `/`. الأوامر الأساسية كلها مبنية على فلسفة "Do one thing well". ركب WSL2 على Windows (أفضل طريقة للتعلم على جهازك) أو استخدم VM بـ VirtualBox.',
          },
          {
            type: 'commands',
            title: 'التثبيت — WSL2',
            code: `wsl --install -d Ubuntu
# افتح Ubuntu واعمل مستخدمك وكلمة السر
pwd && whoami && uname -a
ls -la /home
mkdir lab && cd lab && touch x.txt && mv x.txt y.txt`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اعمل شجرة مجلدات لمشروع (src/، dist/، docs/) وانسخ وامسح واسرج ملفات فيها — بالكامل من الـ terminal.',
          },
        ],
      },
      {
        id: 'p8-s2',
        title: '2. Permissions + Users + Processes + Services',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Permissions تقوم على rwx (read/write/execute) لكل من owner/group/others. sudo بتديك صلاحيات الجذر (بعناية!). الـ Processes بتتشال بـ kill. الـ Services بتشغلها مع التحكم بـ systemctl (systemd).',
          },
          {
            type: 'commands',
            title: 'بركتس',
            code: `chmod 755 script.sh     # owner rwx | group r-x | others r-x
chown anas:deploy app.log
ps aux | grep node
kill -9 <PID>
systemctl status nginx
journalctl -u nginx -f   # متابعة لوغات سيرفس`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اعمل user جديد باسم `deploy`، واعطيه مجلد، وكسّب أذونات صح، وجرب اللوج منه.',
          },
        ],
      },
      {
        id: 'p8-s3',
        title: '3. Networking + SSH + Firewall + Bash',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'الـ ssh مش بس يوصلك بالآلة: فيه عمليات ملفات (scp/rsync). الـ Firewall (ufw) بيقفل البورتات الأجنبية. الـ Cron بجدولة المهام. Bash Scripts = ملفات bخطوات بتحفظ الوقت — هتكتب منها كتير في الـ Deployment.',
          },
          {
            type: 'commands',
            title: 'تشغيل فوري',
            code: `# SSH
ssh user@server_ip
scp file.txt user@server_ip:/home/
# Firewall
sudo ufw allow OpenSSH
sudo ufw enable
# Cron
crontab -e   # 0 2 * * * /home/backup.sh
# Bash
cat > backup.sh << 'EOF'
#!/bin/bash
tar -czf /backups/app.tar.gz /var/www
echo "done $(date)"
EOF
chmod +x backup.sh && ./backup.sh`,
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'اكتب Bash script بسيط يتحقق إن مجلد `/var/www` موجود، ولو موجود يعمل نسخة احتياطية منه مضغوطة بتاريخ اليوم.',
          },
        ],
      },
    ],
    resources: [
      {
        title: 'The Linux Command Line (كتاب مجاني)',
        url: 'https://linuxcommand.org/tlcl.php',
        type: 'course',
      },
      {
        title: 'فيديوهات Linux للمبتدئين (اختر الأنسب)',
        url: 'https://www.youtube.com/results?search_query=linux+for+beginners+full+course',
        type: 'video',
      },
      {
        title: 'OverTheWire — Bandit (لعبة تعليمية)',
        url: 'https://overthewire.org/wargames/bandit/',
        type: 'tool',
      },
      {
        title: 'Ubuntu Server Docs',
        url: 'https://ubuntu.com/server/docs',
        type: 'official',
      },
      {
        title: 'Handbook النظام — أنظمة الملفات والأدوار',
        url: 'https://www.tldp.org/LDP/abs/html/',
        type: 'article',
      },
    ],
    tests: [
      {
        type: 'knowledge',
        question: 'اشرح الـ Permissions: ما معنى `chmod 640` وما الفرق بين owner و group؟',
      },
      {
        type: 'practical',
        question:
          'سطح يدوي: سنت اجعل على VM/WSL. اعمل user جديد، نزّل nginx، شغّل الـ service، واتأكد إن الـ port 80 باكشف بس وتراه بـ curl.',
      },
      {
        type: 'debugging',
        question:
          'لما عملت `sudo systemctl start nginx` وبعدها مباشرة زيارة بالـ browser فشلت، لكن `sudo systemctl status` بيقول "active". افحص ممكن مين؟ وإزاي تتأكد؟',
        hint: 'Firewall / ufw بيبلوك البورت، أو nginx متبند على 127.0.0.1.',
      },
    ],
    projects: [
      {
        name: 'Project 6 — Dockerized Production App (قاعدته)',
        desc: 'ستسطّل سيرفرك المحلي ليكون جاهز للأدوات اللي بعدها.',
      },
    ],
  },
  {
    slug: 'phase-9',
    number: 9,
    title: 'Networking',
    subtitle: 'PHASE 9 — أساسيات الشبكات عمليًا',
    objective:
      'فهم كيف تتحرك البيانات عبر الحاسب تدي: IP, Subnet, Gateway, DNS, TCP/UDP, HTTP(S), TLS, Ports, NAT, Reverse Proxy, Load Balancer, Firewall — وكلها بأدوات حقيقية.',
    topics: [
      'IP · Subnet · Gateway · DNS · DHCP',
      'TCP vs UDP · HTTP/HTTPS · TLS',
      'Ports · NAT',
      'Reverse Proxy · Load Balancer · Firewall',
      'curl · ping · nslookup · dig · traceroute · ss · netstat',
    ],
    prerequisites: ['Phase 8 — Linux'],
    sessions: [
      {
        id: 'p9-s1',
        title: '1. أدوات الاختراق السريع',
        blocks: [
          {
            type: 'commands',
            title: 'افحص شبكتك من Windows',
            code: `ipconfig /all          # معلومات IP المحلية
ping google.com        # هل السيرفر شغال؟
nslookup google.com    # ترجمة اسم → IP
tracert google.com     # مسار الجبلات
netstat -ano           # بورتات مفتوحة على جهازك
curl -I https://google.com   # رأس استجابة HTTP`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'حدد: الـ IP بتاعك، الـ gateway، الـ DNS server، وهل الـ 443 مفتوح عندك. اشرح كل واحدة في مين؟',
          },
        ],
      },
      {
        id: 'p9-s2',
        title: '2. مفاهيم: TCP/UDP + Ports + TLS',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'TCP اتصال مضمون (يـ retries، ordering) — زي المكالمة. UDP سريع بدون ضمان — زي البث الإذاعي. الـ Port هو رقم باب الخدمة (80 HTTP, 443 HTTPS, 22 SSH, 5432 postgres). TLS = طبقة تشفير فوق HTTP بتحوّله HTTPS — ومنها الـ handshake والمفاتيح، وممكن تشوفه عنه في curl -v.',
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'استخدم `ss` أو `netstat` عشان ترصد البورتات المفتوحة، وافحص شهادة TLS لموقع موثوق بـ `openssl s_client` لو تحب.',
          },
        ],
      },
      {
        id: 'p9-s3',
        title: '3. Reverse Proxy + Load Balancer + Firewall',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Reverse Proxy = حارس أمام الـ backend بيوزّع الطلبات ويخبيء الـ backends. Load Balancer = بيوزّع الحِمل على أكثر من سيرفر (Round-robin, least-connections). Firewall = قاعدات تقفل/تفتح المرور. هتطبق هذه كله عمليًا في Phase 11 مع Nginx.',
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'دخّل Nginx على Ubuntu واعمل reverse proxy: الـ `/` → localhost:3000 (سيرفر Node تجريبي)، وافحص الرفق بالـ curl من الخارج ولا تنسى الـ firewall.',
          },
        ],
      },
    ],
    resources: [
      {
        title: 'Cloudflare Learning Center — Networking',
        url: 'https://www.cloudflare.com/learning/',
        type: 'course',
      },
      {
        title: 'MDN — HTTP Docs',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP',
        type: 'official',
      },
      {
        title: 'IBM/Videos: Networking for Developers (ابحث بأحدث)',
        url: 'https://www.youtube.com/results?search_query=networking+for+developers+full+course',
        type: 'video',
      },
    ],
    tests: [
      {
        type: 'knowledge',
        question: 'ما الفرق بين TCP و UDP؟ واعطني أمثلة حقيقية لكل واحد.',
      },
      {
        type: 'practical',
        question:
          'بـ curl فقط: تبيّن ما هو status code لموقع، و make HEAD request لمعرفة headers، وحلل معنى كل `HTTP/1.1 200 OK` مثلاً.',
      },
      {
        type: 'debugging',
        question: 'موقعك شغّال على 127.0.0.1:3000 بس زائر خارجي ما واش بيوصل. كل الأسباب المحتملة؟',
        hint: 'Listening address, firewall, reverse proxy, cloud security group.',
      },
    ],
    projects: [],
  },
]
