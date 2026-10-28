import type { Phase } from './types'

export const phasesDevops: Phase[] = [
  {
    slug: 'phase-10',
    number: 10,
    title: 'Docker',
    subtitle: 'PHASE 10 — حاويات تطبيقاتك',
    objective:
      'حزم تطبيقك وكل dependencies في Containers، وتشغيل نظام كامل (frontend + backend + postgres + redis + nginx) بأمر واحد: docker compose up.',
    topics: [
      'Container · Image · Dockerfile · Docker Engine · Registry',
      'Volumes · Networks · Environment Variables',
      'docker build/run/ps/logs/exec/rm/rmi',
      'Docker Compose',
    ],
    prerequisites: ['Linux أساسي + تفهم الـ process'],
    sessions: [
      {
        id: 'p10-s1',
        title: '1. مفاهيم: Image vs Container',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Image = قالب ثابت جاهز فيه التطبيق + كل dependencies (زي ISO). Container = نسخة تشغيلية حقيقية من الـ image. من Image واحد ممكن تعمل Containers كتير في نفس الوقت بإصدارات مختلفة — وده بيتحل مشكلة "اشتغّل عندي بس مش عندك".',
          },
          {
            type: 'commands',
            title: 'أول تجربة',
            code: `docker run -d --name web -p 8080:80 nginx
docker ps
docker exec -it web bash      # ادخل جوه الحاوية
docker logs web
docker stop web && docker rm web`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'شغّل nginx على 8080، افتح localhost:8080، شوف الـ logs لما تطلب الصفحة، وبعدين أوقفه.',
          },
        ],
      },
      {
        id: 'p10-s2',
        title: '2. Dockerfile + Volumes + Networks',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Dockerfile = وصفة البناء خطوة بخطوة. Volumes بتخزن البيانات بحيث البيانات تفضل موجودة حتى لو الحاوية اتمسحت. Networks بتسمح للحاويات تتكلم مع بعض بالاسم بدل الـ IP.',
          },
          {
            type: 'commands',
            title: 'Dockerfile نموذجي لـ Node',
            code: `FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/dist ./dist
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "dist/index.js"]`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اكتب Dockerfile لمشروع REST API اللي في Phase 5، اعمل image، وشغّله على بورت مختلف. جرّب تنفيذ نفس الحاوية مرتين على بورتات مختلفة وتأكد إنهم شغالين مع بعض.',
          },
        ],
      },
      {
        id: 'p10-s3',
        title: '3. Docker Compose — النظام كلو',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Compose = ملف YAML بيوصف كل خدماتك (services) في نظام واحد: build, ports, volumes, env, networks. بأمر واحد `docker compose up -d` بتشغّل كل حاجة زي ما لو كانت team كامل.',
          },
          {
            type: 'commands',
            title: 'compose.yaml لـ KMA',
            code: `services:
  postgres:
    image: postgres:16-alpine
    environment:
      POSTGRES_PASSWORD: \${POSTGRES_PASSWORD}
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  backend:
    build: ./api
    environment:
      DATABASE_URL: postgres://postgres:\${POSTGRES_PASSWORD}@postgres:5432/kma
    depends_on:
      - postgres

  redis:
    image: redis:7-alpine
    ports: ["6379:6379"]

volumes:
  pgdata:`,
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'أكمل compose لـ KMA: أضف service الـ web (Next.js) والـ nginx reverse proxy، مع env عبر `.env`، وإعادة تشغيل فعّلـة مع الـ healthchecks.',
          },
        ],
      },
    ],
    resources: [
      {
        title: 'فيديو: Docker Tutorial for Beginners (TechWorld with Nana)',
        url: 'https://www.youtube.com/watch?v=3c-iBn73dDE',
        type: 'video',
      },
      {
        title: 'Docker Official Get Started',
        url: 'https://docs.docker.com/get-started/',
        type: 'official',
      },
      {
        title: 'Dockerfile Best Practices',
        url: 'https://docs.docker.com/build/building/best-practices/',
        type: 'article',
      },
      {
        title: 'Compose Specification',
        url: 'https://docs.docker.com/compose/',
        type: 'official',
      },
    ],
    tests: [
      {
        type: 'knowledge',
        question: 'الفرق بين Image و Container، وما فائدة الـ multi-stage build في Dockerfile؟',
      },
      {
        type: 'practical',
        question: 'اكتب Dockerfile لمشروع React (Vite) بمرحلتين: build ثم serve بـ nginx.',
      },
      {
        type: 'debugging',
        question:
          'عندك حاوية databases تشغّلت، لكن التطبيق مش بيوصل: "ECONNREFUSED at 5432". لماذا وهو مفتوح في الـ host؟',
        hint: 'جوه الـ docker network، جرب توصيل ب `postgres` بدل `localhost` — كل service له اسم DNS',
      },
    ],
    projects: [
      {
        name: 'Project 6 — Dockerized Production App',
        desc: 'KMA كاملاً: web + api + postgres + redis + nginx بـ compose up واحد.',
      },
    ],
  },
  {
    slug: 'phase-11',
    number: 11,
    title: 'Nginx',
    subtitle: 'PHASE 11 — وبسيرفر و Reverse Proxy',
    objective:
      'تشغيل Nginx كوب سيرفر و reverse proxy أمام التطبيق، مع Compression, Caching, Headers, Load Balancing, و HTTPS.',
    topics: [
      'Web Server · Static Files · Reverse Proxy',
      'Load Balancing · Headers · Compression · Caching',
      'HTTPS (Let\u2019s Encrypt)',
    ],
    prerequisites: ['Phase 10 — Docker'],
    sessions: [
      {
        id: 'p11-s1',
        title: '1. التكوين الأساسي',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Nginx خفيف وسريع وبيلعب دورين: يقدّم ملفات ثابتة (static) ويوزّع الطلبات للـ backends (reverse proxy). تكوينه في blocks: `server` لكل domain، و `location` لكل مسار.',
          },
          {
            type: 'commands',
            title: 'site config — /etc/nginx/sites-available/app',
            code: `server {
  listen 80;
  server_name example.com;

  # static frontend
  location / {
    root /var/www/app;
    try_files $uri $uri/ /index.html;
  }

  # API proxy
  location /api/ {
    proxy_pass http://backend:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    gzip on;
  }
}`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اعمل جولة: nginx بيقدم static folder وبيروكسي لـ node على localhost:3000. جرّب لو الـ backend واقع بيث classify؟ (بتروح 502).',
          },
        ],
      },
      {
        id: 'p11-s2',
        title: '2. Load Balancing + Caching + Security Headers',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Load balancing: `upstream` + عدة backends. Caching: `proxy_cache` بيخزن استجابات متكررة. Security Headers: X-Frame-Options, CSP, HSTS بتحمي من XSS/Clickjacking.',
          },
          {
            type: 'commands',
            title: 'مثال load balancing',
            code: `upstream api_backend {
  least_conn;
  server api-1:3000;
  server api-2:3000;
}
server {
  listen 80;
  location /api/ { proxy_pass http://api_backend; }
}`,
          },
        ],
      },
      {
        id: 'p11-s3',
        title: '3. HTTPS مع Certbot',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'HTTPS بيشفر اتصالاتك (TLS). أسهل طريقة احترافية: `certbot --nginx` مع Let\u2019s Encrypt (مجاني تلقائي التجديد). هتحتاج domain باسمك و DNS معمول للسيرفر.',
          },
          {
            type: 'commands',
            title: 'الإصدار',
            code: `sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d example.com -d www.example.com
# التجديد تلقائيًا: crontab / systemd timer يتعمل من certبت نفسك`,
          },
        ],
      },
    ],
    resources: [
      {
        title: 'Nginx Official Docs',
        url: 'https://nginx.org/en/docs/',
        type: 'official',
      },
      {
        title: 'Nginx Admin Guide (الوكيل والضغط والكاش)',
        url: 'https://docs.nginx.com/nginx/admin-guide/',
        type: 'official',
      },
      {
        title: 'فيديو: Nginx Tutorial للمبتدئين (ابحث بأحدث)',
        url: 'https://www.youtube.com/results?search_query=nginx+reverse+proxy+tutorial',
        type: 'video',
      },
    ],
    tests: [
      {
        type: 'knowledge',
        question: 'اشرح وظيفة reverse proxy، واذكر 3 أشياء بيقدمها للمطورين.',
      },
      {
        type: 'practical',
        question:
          'على سيرفرك: استضف موقع static على 80، ومرّ 3 backends على 127.0.0.1:3001-3003 ووزّعهم.',
      },
      {
        type: 'debugging',
        question:
          'بعد تعديل تكوين nginx ظهرت 502 Bad Gateway تحت /api/. ما العملية الثلاثية التي تقوم بها؟',
        hint: 'nginx -t ثم reload ثم تحقق من الخدمة الخلفية والـ logs.',
      },
    ],
    projects: [
      {
        name: 'Project 6 — Dockerized (كامل)',
        desc: 'تضيف container nginx يقف أمام كل خدمات KMA.',
      },
    ],
  },
  {
    slug: 'phase-12',
    number: 12,
    title: 'CI/CD — GitHub Actions',
    subtitle: 'PHASE 12 — أنابيب نشر أوتوماتيكية',
    objective:
      'أتمتة دورة التطوير: من `git push` إلى lint→test→build→docker push→deploy عبر GitHub Actions بشكل آمن ومتسارع.',
    topics: [
      'Workflow · Job · Step · Runner · Secrets · Environment',
      'Artifacts · Caching',
      'Deployment Pipelines',
    ],
    prerequisites: ['Phase 10 — Docker'],
    sessions: [
      {
        id: 'p12-s1',
        title: '1. هيكلة الـ Workflow',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'GitHub Actions = سيرفرات GitHub بتنفذ الـ jobs بتاعتك لما يحصل event (push, PR). الـ Workflow = ملف YAML جوه `.github/workflows/`. الـ Secrets = متغيرات مشفرة (access tokens) بتحطها في Settings→Secrets مش في الكود.',
          },
          {
            type: 'commands',
            title: '.github/workflows/ci.yml',
            code: `name: CI
on:
  push:
    branches: [main]
  pull_request:

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: npm test`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'أضف هذا الـ workflow لأي مشروع وأرفع تغيير — وشاهد الـ Jobs بتتنفذ في الـ Actions tab.',
          },
        ],
      },
      {
        id: 'p12-s2',
        title: '2. Deployment Pipeline كاملة',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'كده العملية بـ push → Docker image → push للـ Registry (GHCR free) → deploy (بالـ SSH أو Docker Watchtower أو منصة). الـ Environments بتمكنك تفصل staging عن production بإجراءات الأمان.',
          },
          {
            type: 'commands',
            title: 'build & push',
            code: `- name: Build & Push Docker
  uses: docker/build-push-action@v6
  with:
    push: true
    tags: ghcr.io/\${{ github.repository }}:\${{ github.sha }}`,
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'اعمل workflow ثاني يبني الـ image ويطلعه لـ GHCR، و workflow deploy يوصّل الـ image للسيرفر عبر SSH.',
          },
        ],
      },
    ],
    resources: [
      {
        title: 'GitHub Actions Docs (رسمي)',
        url: 'https://docs.github.com/en/actions',
        type: 'official',
      },
      {
        title: 'Learn GitHub Actions',
        url: 'https://docs.github.com/en/actions/learn-github-actions',
        type: 'course',
      },
      {
        title: 'فيديو: GitHub Actions مرحلة بك مرحلة (ابحث بأحدث)',
        url: 'https://www.youtube.com/results?search_query=github+actions+ci/cd+crash+course',
        type: 'video',
      },
    ],
    tests: [
      {
        type: 'knowledge',
        question: 'الفرق بين CI و CD، ومتى تستخدم Environnements في Actions؟',
      },
      {
        type: 'practical',
        question:
          'صمّم workflow كامل لمشروع KMA: verify على الـ PR، وبعد merge على main: build image + push GHCR + deploy.',
      },
      {
        type: 'debugging',
        question:
          'الـ CI بيفشل في خطوة npm ci: "npm ci can only install packages when your package-lock.json aligns". ليه؟',
        hint: 'نص الغالب package.json و lock خدش متزامنين.',
      },
    ],
    projects: [
      {
        name: 'Project 7 — CI/CD Pipeline',
        desc: 'نشرًا أوتوماتيكي لـ KMA عبر GitHub Actions على جيت.',
      },
    ],
  },
  {
    slug: 'phase-13',
    number: 13,
    title: 'Cloud — AWS',
    subtitle: 'PHASE 13 — السحابة عمليًا',
    objective:
      'فهم أساسيات السحابة ونشر تطبيق على AWS بـ Free Tier حرفيًا: IAM، EC2، VPC، Security Groups، S3، RDS، CloudWatch، Route 53، Load Balancer.',
    topics: [
      'IAM · EC2 · VPC · Security Groups',
      'S3 · RDS · CloudWatch',
      'Route 53 · Load Balancer',
    ],
    prerequisites: ['Linux + Docker + Nginx'],
    sessions: [
      {
        id: 'p13-s1',
        title: '1. الأساسيات: IAM + VPC + EC2',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'IAM = الصلاحيات: اعمل user بحد أدنى من الصلاحيات مش تستخدم root إطلاقًا. VPC = شبكة خاصة معزولة فيها subnets وحسابات. EC2 = سيرفرات افتراضية (كمبيوترات مستأجرة). Security Groups = firewall بالسيرفر.',
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'سجّل AWS (بطاقة بترخيص لكن Free Tier مجاني فعليًا 12 شهر) — حط budget alert على $0. اعمل IAM user، وشغّل EC2 t2.micro/Free Tier مع security group يفتح فقط 22 و 80/443 من IPك.',
          },
        ],
      },
      {
        id: 'p13-s2',
        title: '2. S3 + CloudWatch + RDS + Route 53 + ALB',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'S3 = تخزين كائنات (Studios, static, backups). CloudWatch = لوغات ومتريكات وتنبيهات. RDS = قاعدة بيانات مُدارة (PostgreSQL). Route 53 = DNS. ALB = Load Balancer بيوزّع على EC2 instances.',
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'انشر الـ backend على EC2 بـ Docker، الـ DB على RDS Free Tier، static على S3، وخلّي CloudWatch يراقب CPU ويبعتلك تنبيه. حط visualization بسيط.',
          },
        ],
      },
      {
        id: 'p13-s3',
        title: '3. توفير المال والأمان',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'أهم قواعد: أغلق أي resource مش شغّال، حط budget alert من أول لحظة، اترك البورتات مفتوحة بالحد الأدنى، وحافظ إن IAM user هو اللي بيشتغل مش root. وقبل ما تنسى: اللي يخلص الـ Free Tier بتدفع فلوس.',
          },
        ],
      },
    ],
    resources: [
      {
        title: 'فيديو: AWS CLF-C02 Full Course (freeCodeCamp)',
        url: 'https://www.youtube.com/watch?v=NhDYbskXRgc',
        type: 'video',
      },
      {
        title: 'فيديو: AWS Certified Cloud Practitioner (freeCodeCamp)',
        url: 'https://www.youtube.com/watch?v=SOTamWNgDKc',
        type: 'video',
      },
      {
        title: 'AWS Free Tier',
        url: 'https://aws.amazon.com/free/',
        type: 'official',
      },
      {
        title: 'AWS Docs — راجع مختلفها بطريقة رسمية',
        url: 'https://docs.aws.amazon.com/',
        type: 'official',
      },
    ],
    tests: [
      {
        type: 'knowledge',
        question: 'ما الفرق بين Security Group و NACL؟ ومتى تستخدم ELB بدل E?',
      },
      {
        type: 'practical',
        question:
          'على Free Tier: انشر صفحة static على S3 مع CloudFront، واعمل Route 53 لاسم نطاقك.',
      },
      {
        type: 'debugging',
        question: 'الـ EC2 شغّال لكن مش بيوصل من برا: "timed out". اذكر 4 أسباب محتملة بالترتيب.',
        hint: 'Security Group، IAM، CIDR المطبوع، وفحص بورتات مع ss.',
      },
    ],
    projects: [
      {
        name: 'Project 8 — Cloud Deployment',
        desc: 'KMA deploy على AWS بـ Free Tier.',
      },
    ],
  },
  {
    slug: 'phase-14',
    number: 14,
    title: 'IaC — Terraform + Ansible',
    subtitle: 'PHASE 14 — بنية تحتية ككود',
    objective:
      'إنشاء وإدارة البنية التحتية بالكود: Terraform لإنشاء الموارد (AWS/السحابة) و Ansible لإعداد السيرفرات والتطبيقات.',
    topics: [
      'Providers · Resources · Variables · Outputs · State · Modules · Workspaces · Remote State',
      'Terraform + Ansible',
      'Inventory · Playbooks · Roles · Templates',
    ],
    prerequisites: ['Phase 13 — AWS'],
    sessions: [
      {
        id: 'p14-s1',
        title: '1. Terraform Fundamentals',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Terraform = أداة Declarative بتوصف الموارد في `.tf` وبتحقق الـ State (تلك اللحظة الذهبية بيننا) — بيتخزن في local state عادة، وفي Remote State (S3) للفريق. Providers = واجهة كل سحابة (AWS, GCP...).',
          },
          {
            type: 'commands',
            title: 'main.tf نموذجي',
            code: `terraform {
  required_providers {
    aws = { source = "hashicorp/aws" }
  }
}

resource "aws_security_group" "web" {
  name = "web-sg"
  ingress {
    from_port  = 80
    to_port    = 80
    protocol   = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اكتب سكربت ينشئ EC2 + Security Group و Variable للـ ami و Output للـ public_ip. شغّل init → plan → apply ثم destroy.',
          },
        ],
      },
      {
        id: 'p14-s2',
        title: '2. Modules + Remote State',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Modules = بلوكات بنية تحتية قابلة لإعادة الاستخدام (أنشئ module لـ "web server" وتعيد استخدامه لأي مشروع). Remote State = تخزين الـ state في S3 (مع lock عبر DynamoDB) عشان الفريق ما يقفلوش يصارعوا على نفس الـ resources.',
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'قسّم تكوينك السابق إلى module `web-infra` بمدخلات ومخرجات، واستخدمه لإنشاء بيئتين (staging/prod) بـ Workspaces.',
          },
        ],
      },
      {
        id: 'p14-s3',
        title: '3. Ansible — إعداد السيرفرات',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Ansible بيوصف "إعداد السيرفر" (Install nginx، create user، deploy container) بدون Agent على الـ host — بيشتغل عبر SSH. الـ Playbook = سكربت خطوات، الـ Inventory = قايمة السيرفرات، الـ Roles = تنظيم.',
          },
          {
            type: 'commands',
            title: 'playbook.yml',
            code: `- name: Setup web server
  hosts: web
  become: true
  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present
    - name: Copy site
      copy:
        src: index.html
        dest: /var/www/html/index.html
    - name: Start nginx
      service:
        name: nginx
        state: started`,
          },
        ],
      },
    ],
    resources: [
      {
        title: 'فيديو: Learn Terraform (freeCodeCamp)',
        url: 'https://www.youtube.com/watch?v=iRaai1IBlB0',
        type: 'video',
      },
      {
        title: 'Terraform Docs',
        url: 'https://developer.hashicorp.com/terraform/docs',
        type: 'official',
      },
      {
        title: 'Terraform AWS Provider Docs',
        url: 'https://registry.terraform.io/providers/hashicorp/aws/latest/docs',
        type: 'official',
      },
      {
        title: 'Ansible Docs',
        url: 'https://docs.ansible.com/',
        type: 'official',
      },
    ],
    tests: [
      {
        type: 'knowledge',
        question: 'الفرق بين Terraform و Ansible؟ ومتى يكونان متكاملين؟',
      },
      {
        type: 'practical',
        question:
          'اكتب Terraform ينشئ VPC + Subnet + SG + EC2، وشغّل بـ `apply`، ثم `destroy`. فضّح الـ state و فوائد الـ destroy.',
      },
      {
        type: 'debugging',
        question:
          'Terraform بيقول: "Error: Inconsistent dependency lock file". ايه اللي حصل وإزاي تصلحه؟',
        hint: 'provider version اتغيرت — شغّل `terraform init -upgrade` او lock file تحديث.',
      },
    ],
    projects: [
      {
        name: 'Project 10 — Production DevOps Infrastructure',
        desc: 'بنية كاملة لـ KMA: Terraform resources + Ansible بحيث الـ infra تتولد والـ deploy يتم تلقائيًا.',
      },
    ],
  },
  {
    slug: 'phase-15',
    number: 15,
    title: 'Kubernetes',
    subtitle: 'PHASE 15 — إدارة الحاويات باحترافية',
    objective:
      'تشغيل وإدارة التطبيقات في Kubernetes: Deployments, Services, Ingress, Secrets, Volumes, HPA… مع kubectl و Helm.',
    topics: [
      'Cluster · Node · Pod · Deployment · Service · Namespace',
      'ConfigMap · Secret · Ingress · Volume · PV',
      'StatefulSet · DaemonSet · Job · CronJob · HPA',
      'kubectl · YAML · Helm',
    ],
    prerequisites: ['Linux + Docker + Networking متقنة', 'Phase 10 + 11'],
    sessions: [
      {
        id: 'p15-s1',
        title: '1. مفاهيم الـ Cluster',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Kubernetes = منظّم الحاويات: بيقرر فين تعمل الحاوية ويفضل حياها و أحيطها لو وقعت. الـ Node = جهاز/VM في الكلستر. الـ Pod = أصغر وحدة تشغيلية (حتوي Container واحد أو أكتر). الـ Deployment بيحدد الـ Replicas + Restart policies. الـ Service = بوابة ثابتة توصل للـ Pods.',
          },
          {
            type: 'commands',
            title: 'ابدأ محليًا بـ minikube (و DDR4/16GB يتحمل عادي)',
            code: `minikube start --driver=docker
kubectl get nodes
kubectl create deployment nginx-demo --image=nginx
kubectl get pods
kubectl expose deployment nginx-demo --port=80 --type=NodePort`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'شغّل minikube، اعمل deployment بـ 3 replicas، وقوّمبله بأحد الـ pods واتأكد إن ك8 automatically بيبدّله بجديد.',
          },
        ],
      },
      {
        id: 'p15-s2',
        title: '2. YAML Declarative + ConfigMap/Secret',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'أفضل ممارسة: كل شيء تكتبه كـ YAML (Declarative) مش وامر يدوية. ConfigMap = إعدادات غير سرية. Secret = بيانات سرية (base64 فقط — مش تشفير). Namespaces = تقسيم منطقي للفرق.',
          },
          {
            type: 'commands',
            title: 'deployment.yaml',
            code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: kma-backend
  namespace: kma
spec:
  replicas: 2
  selector:
    matchLabels:
      app: kma-backend
  template:
    metadata:
      labels:
        app: kma-backend
    spec:
      containers:
        - name: api
          image: ghcr.io/<you>/kma-api:latest
          ports:
            - containerPort: 3000
          envFrom:
            - configMapRef: { name: kma-config }
            - secretRef: { name: kma-secrets }
          resources:
            requests: { cpu: 100m, memory: 128Mi }
            limits: { cpu: 500m, memory: 512Mi }`,
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اكتب ConfigMap و Secret وdeploy لذلك الملف على minikube بـ `kubectl apply -f .` وشوف الـ pods.',
          },
        ],
      },
      {
        id: 'p15-s3',
        title: '3. Ingress + Volumes + HPA + Helm',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Ingress = بوابة DNS شبه الـ Load Balancer بتوجّه الطلبات للمسارات. PersistentVolumes = تخزين مستمر للـ databases. الـ HPA بيسكيل تلقائيًا على أساس CPU. Helm = Package Manager للـ K8s: بتجمّع ملفات في Charts قابلة لإعادة الاستخدام.',
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'مع minikube: فعّل ingress controller، اعمل Ingress يوجّه /api للـ backend و / للـ frontend. أضف HPA يشتغل على CPU، ونزّل PostgreSQL StatefulSet بـ Helm chart رسمي.',
          },
        ],
      },
    ],
    resources: [
      {
        title: 'فيديو: Kubernetes Full Course (TechWorld with Nana)',
        url: 'https://www.youtube.com/watch?v=X48VuDVv0do',
        type: 'video',
      },
      {
        title: 'فيديو: Complete Kubernetes Course — DevOps Directive',
        url: 'https://www.youtube.com/watch?v=2T86xAtR6Fo',
        type: 'video',
      },
      {
        title: 'Kubernetes Official Docs',
        url: 'https://kubernetes.io/docs/',
        type: 'official',
      },
      {
        title: 'kubectl Cheat Sheet',
        url: 'https://kubernetes.io/docs/reference/kubectl/cheatsheet/',
        type: 'official',
      },
      {
        title: 'Helm Docs',
        url: 'https://helm.sh/docs/',
        type: 'official',
      },
    ],
    tests: [
      {
        type: 'knowledge',
        question:
          'الفرق بين Deployment و StatefulSet؟ وما الحالات التي تستخدم Service نوع LoadBalancer مقابل Ingress؟',
      },
      {
        type: 'practical',
        question:
          'انشر KMA على minikube: secret, config, deployments, services, ingress. اتأكد إنك توصل للتطبيق من المتصفح.',
      },
      {
        type: 'debugging',
        question:
          'الـ Pod في حالة CrashLoopBackOff، و `kubectl logs` مفيش أخطاء بارزة. ايه الخطوات التشخيصية؟',
        hint: 'logs, describe pod (events), لفحص liveness/readiness probes.',
      },
    ],
    projects: [
      {
        name: 'Project 9 — Kubernetes Deployment',
        desc: 'كل KMA كمجموعة Charts/Helm على minikube أو كلاود مجاني.',
      },
    ],
  },
  {
    slug: 'phase-16',
    number: 16,
    title: 'Monitoring — Prometheus + Grafana',
    subtitle: 'PHASE 16 — الملاحظة والتحذير',
    objective:
      'مراقبة التطبيق والبنية: Metrics بـ Prometheus، Dashboards بـ Grafana، Logs مركزية، Traces، Alerts، و Health Checks.',
    topics: [
      'Metrics · Logs · Traces',
      'Prometheus · Grafana',
      'Alerts · Dashboards · Health Checks',
    ],
    prerequisites: ['Phase 15 — Kubernetes (يفضّل)'],
    sessions: [
      {
        id: 'p16-s1',
        title: '1. Metrics + Prometheus',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Prometheus = بيلمّ metrics (عدادات رقمية مثل request rate, CPU, memory) من خدماتك عبر HTTP. التطبيق لازم يعرّف `/metrics` بصيغة Prometheus (لو استخدمت express: `prom-client`).',
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'أضف prom-client للمشروع ثم أضان endpoint /metrics، شغّل Prometheus لوحده بضبط scrape على الخدمة، وشوف كيف يعمل scrape في الـ targets.',
          },
        ],
      },
      {
        id: 'p16-s2',
        title: '2. Grafana Dashboards + Alerts',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Grafana = لوحات تحكم بصرية فوق الـ metrics. بتوصّل Prometheus كمصدر وتعمل Query بـ PromQL، وتنشئ panels للـ request rate والآلة. الـ Alerts ممكن تشتغل أو تطير للـ Slack/Email.',
          },
          {
            type: 'commands',
            title: 'PromQL - جمل مفيدة',
            code: `# معدل الطلبات خلال دقيقة
rate(http_requests_total[1m])
# استخدام CPU
rate(process_cpu_seconds_total[5m]) * 100
# صحة خدمة
up == 0`,
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'داور: dashboard لحالة الـ API (request rate, error rate, latency p95) + تمبيّه ينبه لو error rate تعدى 5%.',
          },
        ],
      },
      {
        id: 'p16-s3',
        title: '3. Logs + Traces + Health Checks',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'الـ Logs بتسجّل التفاصيل النصية (ويفضل structured JSON). الـ Traces بتتابع طلب واحد عبر الخدمات. الـ Health Checks (endpoints /healthz, /readyz) هي أساس الـ probes بتاعة K8s والـ LBs عشان يعرفوا أمتى الـ service جاهز.',
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'أضف /health و /ready للـ backend: الأول يفيد "انا حي"، والتاني "أنا جاهز أستقبل" (فحص اتصال قاعدة البيانات). أستخدمهم في readinessProbe.',
          },
        ],
      },
    ],
    resources: [
      {
        title: 'Prometheus Docs',
        url: 'https://prometheus.io/docs/',
        type: 'official',
      },
      {
        title: 'PromQL Querying Basics',
        url: 'https://prometheus.io/docs/prometheus/latest/querying/basics/',
        type: 'official',
      },
      {
        title: 'Grafana Docs',
        url: 'https://grafana.com/docs/',
        type: 'official',
      },
      {
        title: 'فيديو: Prometheus + Grafana tutorial (ابحث بأحدث)',
        url: 'https://www.youtube.com/results?search_query=prometheus+grafana+tutorial+monitoring',
        type: 'video',
      },
    ],
    tests: [
      {
        type: 'knowledge',
        question: 'ما الفرق بين Metrics و Logs و Traces؟ ومتى تحتاج Traces تحديدًا؟',
      },
      {
        type: 'practical',
        question:
          'اعمل container Prometheus يراقب الـ backend و dashboard في Grafana بيتعرض عليه request rate و status code.',
      },
      {
        type: 'debugging',
        question:
          'في Grafana الـ panel بيقول "No data" مع إن الأخطاء الحقيقية موجودة. ايه أول حاجات تتأكد منها؟',
        hint: 'Job/instance labels، هل الآلة معرّفة في scrape؟ هل Promكة بتزور نفس port؟',
      },
    ],
    projects: [
      {
        name: 'Project 10 — k8s Monitoring',
        desc: 'أضف Prometheus+Grafana لرفق KMA monitor.',
      },
    ],
  },
  {
    slug: 'phase-17',
    number: 17,
    title: 'DevSecOps',
    subtitle: 'PHASE 17 — الأمان في كل مرحلة',
    objective:
      'دمج الأمان في كل خطوة: من كتابة الكود حتى الإنتاج — Secrets, Scanning, SAST/DAST, OWASP Top 10, Least Privilege…',
    topics: [
      'Secrets Management · Dependency Scanning',
      'Container Scanning · SAST · DAST',
      'OWASP Top 10 · HTTPS',
      'Auth Security · Authorization · Rate Limiting',
      'Firewall · Least Privilege · Secure Images / CI/CD',
    ],
    prerequisites: ['Phase 12 + 13'],
    sessions: [
      {
        id: 'p17-s1',
        title: '1. أمان الكود والمكتبات',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Dependency Scanning بيكشف مكتبات فيها ثغرات معروفة (SCA). الـ SAST بيحلل الكود من غير ما يشغّله (بيحسسه bug patterns). الـ DAST بيختبر التطبيق الشغّال من بره (بيحاول يهجم عليه). كل دول أدوات مجانية جوه GitHub أو OSS.',
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'فعّل Dependabot + Code scanning (CodeQL) على مشروعك، وشوف أي الحلول المطروحة في الـ Security tab.',
          },
        ],
      },
      {
        id: 'p17-s2',
        title: '2. OWASP Top 10 عمليًا',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'من الـ OWASP Top 10 أهم ما يخص تطبيقك: Injection (SQLi) → استخدام parameterized queries، Broken Access Control → RBAC صارم، XSS → encoding المخرجات وCSP، Security Misconfiguration → إعدادات افتراضية صحيحة، Broken Auth → rate limiting + cookies آمنة.',
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'افحص مشروع KMA ضد القصمتين: هل يعدّل query بمعلومات user؟ هل مفيش sensitive بيانات في الـ logs؟ صحّح.',
          },
        ],
      },
      {
        id: 'p17-s3',
        title: '3. Secure Supply Chain + Container Security',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'Containers: استخدم صور رسمية بـ tags إصدارات ثابتة، شغّل بـ NON-ROOT user، افحص بـ Trivy، وقلّل الـ layers/no secrets. الـ CI/CD نفسها محتاجة وقايه: Secrets مشفرة، لا تخلع tokens في الـ logs، حدّ أذونات الـ workflow.',
          },
          {
            type: 'commands',
            title: 'scan tools',
            code: `# Trivy - فحص صور الحاويات (OSS)
trivy image ghcr.io/<you>/kma-api:latest

# في CI
- name: Scan image
  run: trivy image --severity HIGH,CRITICAL --exit-code 1 app:latest`,
          },
        ],
      },
    ],
    resources: [
      {
        title: 'OWASP Top 10',
        url: 'https://owasp.org/www-project-top-ten/',
        type: 'official',
      },
      {
        title: 'Trivy (فحص ثغرات الحاويات — OSS)',
        url: 'https://trivy.dev/',
        type: 'tool',
      },
      {
        title: 'GitHub Security Features',
        url: 'https://docs.github.com/en/code-security',
        type: 'official',
      },
      {
        title: 'فيديو: DevSecOps / Security للمطورين (ابحث بأحدث)',
        url: 'https://www.youtube.com/results?search_query=devsecops+tutorial+secure+ci+cd',
        type: 'video',
      },
    ],
    tests: [
      {
        type: 'knowledge',
        question:
          'لما حد يحاول SQL injection على route /products?category=xx — ايه أفضل دفاعات في Node/Postgres؟',
      },
      {
        type: 'practical',
        question: 'أضف Trivy scan لخطوة الـ CI وبها يصير الـ image غير آمن يمنع الـ push.',
      },
      {
        type: 'debugging',
        question: 'السلسلة: GitHub بيقول للـ app: "secret detected in push". إزاي بتحلها؟',
        hint: 'الـ secret مش مجرد تحذفه من الكود — rotate/احذفه من الـ tokens.',
      },
    ],
    projects: [
      {
        name: 'Project 10 — Secure Pipeline',
        desc: 'CI بالكامل يتضمن scan + secure base images.',
      },
    ],
  },
  {
    slug: 'phase-18',
    number: 18,
    title: 'Production',
    subtitle: 'PHASE 18 — من Development إلى Production',
    objective:
      'نقل التطبيق بأمان من Dev إلى Staging ثم Production: Environments, Secrets, Backups, Migrations, Rollback, Health Checks, Monitoring, Logging, Alerts, و Incident Response.',
    topics: [
      'Environment Strategy · Secrets Management',
      'Backups · Migrations · Rollback',
      'Health Checks · Monitoring · Logging · Alerts',
      'Incident Response',
    ],
    prerequisites: ['كل اللي قبله'],
    sessions: [
      {
        id: 'p18-s1',
        title: '1. إدارة البيئات والإصدارات',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'قاعدة: كل بيئة (dev/staging/prod) معزولة وبياناتها مفصولة. الـ Staging بمراها كل حاجة زي الـ production (نفس الفريمورك و النسخة) عشان تسكت الأخطاء قبل الـ prod. الـ Migrations بتتنفذ بالترتيب الآمن والـ Rollback بمرجع لأول publish ناجح.',
          },
          {
            type: 'challenge',
            title: 'التحدي',
            text: 'جهز CI بـ 3 environments: على الـ PR → preview بيئة، على main → staging (migrate + test)، وبعد approval يدوي → production.',
          },
        ],
      },
      {
        id: 'p18-s2',
        title: '2. Backup + Restore Strategy',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'الـ Database بتحتاج backup منتظم (RPO/RTO بتاخدهم قرارات). جرّب الـ backup بيشتغل وقادرة تسترجعه (Restore drill) — أحيانًا backup مش ظابط أحسن من مفيش backup.',
          },
          {
            type: 'commands',
            title: 'نموذج cron backup',
            code: `# nightly backup إلى S3
0 2 * * * pg_dump $DATABASE_URL | gzip > /backups/kma-$(date +%F).sql.gz
0 3 * * * aws s3 sync /backups/ s3://kma-backups/ --delete`,
          },
        ],
      },
      {
        id: 'p18-s3',
        title: '3. Observability + Incident Response',
        blocks: [
          {
            type: 'explanation',
            title: 'الشرح',
            text: 'الـ Production health: probes + metrics + structured logs + alerting مع escalation path. لو حصل incident: اهدى → عزل (Rollback أو feature flag) → حافظ على الأدلة → تواصل مع الفريق → اكتب Postmortem بعدها من غير لوم.',
          },
          {
            type: 'practice',
            title: 'التمرين',
            text: 'اكتب Playbook لسيناريو: "الـ API بطيء والنسبة الخطأ 40%" — من رصد لأول حل لفعل decrement للتأثير حتى إصلاح جذري.',
          },
        ],
      },
    ],
    resources: [
      {
        title: '12-Factor App Methodology',
        url: 'https://12factor.net/',
        type: 'article',
      },
      {
        title: 'Google SRE — Postmortem Culture',
        url: 'https://sre.google/sre-book/postmortem-culture/',
        type: 'article',
      },
      {
        title: 'OWASP — Secrets Management',
        url: 'https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html',
        type: 'article',
      },
      {
        title: 'فيديو: Production / DevOps End-to-End (ابحث بأحدث)',
        url: 'https://www.youtube.com/results?search_query=devops+full+course+production+deployment',
        type: 'video',
      },
    ],
    tests: [
      {
        type: 'knowledge',
        question: 'ما الـ RPO والـ RTO ولماذا يصعب قرار مخطط الـ backup الشخصي (بدون صفر)؟',
      },
      {
        type: 'practical',
        question:
          'شغّل KMA في 3 بيئات: dev على localhost، staging على server واحد، prod على server ثاني بـ CI/CD مكتمل + backups + rollback.',
      },
      {
        type: 'debugging',
        question:
          'بعد ما حطيت ميزة جديدة بقت الـ prod مش بتستجيب. ارتبط قراراتك: هل rollback أو hotfix؟ ومتى تهاب تحليل الجذر، ومتى تبّص على النطاق؟',
      },
    ],
    projects: [],
  },
]
