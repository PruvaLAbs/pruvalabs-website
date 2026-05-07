import { useEffect, useMemo, useState } from 'react';

const languages = [
  { code: 'tr', label: 'Türkçe' },
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ru', label: 'Русский' },
  { code: 'it', label: 'Italiano' },
  { code: 'fr', label: 'Français' },
  { code: 'zh', label: '中文' },
  { code: 'es', label: 'Español' },
  { code: 'pt', label: 'Português' },
  { code: 'hi', label: 'हिन्दी' },
];

const translations = {
  tr: {
    dir: 'ltr',
    languageLabel: 'Dil',
    nav: ['Hizmetler', 'Ürünler', 'Projeler', 'Blog', 'Gizlilik', 'İletişim'],
    heroEyebrow: 'AI destekli yazılım stüdyosu',
    heroTitle: 'Web, mobil uygulama, AI ve dijital ürün geliştirme.',
    heroText: 'PruvaLAbs. fikirleri prototipe, prototipleri çalışan ürüne dönüştüren modern bir yazılım ve ürün laboratuvarıdır.',
    primaryCta: 'Projeni Anlat',
    secondaryCta: 'Ürünleri İncele',
    capabilities: ['Web Sitesi', 'Mobil App', 'AI Otomasyon', 'Dashboard', 'Oyun & MVP', 'Ürün Tasarımı'],
    aboutEyebrow: 'Hakkımızda',
    aboutTitle: 'Strateji, tasarım ve mühendisliği aynı masada topluyoruz.',
    aboutText: 'PruvaLAbs. web siteleri, kişisel/kurumsal bloglar, mobil uygulamalar, AI destekli araçlar, yönetim panelleri ve ölçeklenebilir ürün prototipleri geliştirir. Amacımız sade görünen ama güçlü çalışan dijital ürünler üretmek.',
    servicesEyebrow: 'Hizmetler',
    servicesTitle: 'İhtiyaca göre ürün, panel, otomasyon veya web deneyimi.',
    servicesText: 'Her projede önce hedefi netleştirir, sonra hızlı ve sürdürülebilir bir geliştirme rotası çıkarırız.',
    services: [
      ['Web Sitesi Geliştirme', 'Kurumsal web siteleri, ürün tanıtım sayfaları, landing page yapıları ve kişisel/marka blogları geliştiriyoruz.'],
      ['Mobil Uygulama', 'Flutter odaklı Android ve iOS uygulamaları, oyun prototipleri ve mobil öncelikli dijital ürünler tasarlıyoruz.'],
      ['AI & Otomasyon', 'Yapay zekâ destekli içerik, raporlama, müşteri akışı, veri işleme ve operasyon otomasyonları kurguluyoruz.'],
      ['Yönetim Panelleri', 'Admin panel, müşteri paneli, sipariş/operasyon ekranları ve ekiplerin günlük işini kolaylaştıran araçlar hazırlıyoruz.'],
      ['Veri & Dashboard', 'Excel, veri analizi, performans göstergeleri ve karar destek dashboardları ile veriyi okunur hale getiriyoruz.'],
      ['Ürün Prototipleme', 'Fikirden MVP’ye giden yolu sadeleştiriyor; hızlı, test edilebilir ve geliştirilebilir ilk sürümleri oluşturuyoruz.'],
    ],
    productsEyebrow: 'Ürünlerimiz',
    productsTitle: 'Kendi ürünlerimizle gerçek kullanım senaryoları geliştiriyoruz.',
    productsText: 'Sadece hizmet üretmiyor, aynı zamanda kendi ürünlerimiz üzerinden mobil, web, veri ve gerçek zamanlı sistemler geliştiriyoruz.',
    products: [
      ['Mali Pruva', 'Finans / Raporlama', 'Finansal süreçleri sadeleştiren, raporlamayı hızlandıran ve ekiplerin doğru veriye anında erişmesini hedefleyen ürün yaklaşımımız.', ['Raporlama', 'Dashboard', 'Operasyon']],
      ['TwoGether', 'Online Oyun / Mobil', 'Çok dilli, iki kişilik online arena deneyimi. Oda kodu, arkadaş daveti, bot modu ve gerçek zamanlı mini oyun mantığıyla geliştiriliyor.', ['Flutter', 'Online Multiplayer', 'Çok Dilli']],
    ],
    casesEyebrow: 'Projeler / Case Study',
    casesTitle: 'Yaptıklarımızı somut ürün alanlarına dönüştürüyoruz.',
    casesText: 'Her çalışma, ileride geliştirilebilir bir ürün temeli ve net bir kullanıcı deneyimi hedefiyle ele alınır.',
    cases: [
      ['TwoGether – İki Kişilik Online Arena', 'Mobil öncelikli oyun deneyimi, oda sistemi, davet akışı, bot modu ve ölçeklenebilir gerçek zamanlı altyapı planı.'],
      ['Mali Pruva – Finansal Takip Yaklaşımı', 'Finansal görünürlük, sade raporlama ve operasyon ekipleri için hızlı karar destek ekranları.'],
      ['PruvaLAbs. Web Platformu', 'Marka, ürünler, hizmetler, blog ve iletişim akışını tek sayfada anlatan modern kurumsal web yapısı.'],
    ],
    processEyebrow: 'Çalışma Sürecimiz',
    processTitle: 'Fikirden yayına sade ve kontrollü ilerleriz.',
    processText: 'Karmaşık teknik süreçleri anlaşılır adımlara böler, çalışan sistemi bozmadan geliştirmeyi hedefleriz.',
    process: [
      ['01', 'Fikri Anlıyoruz', 'Hedef kullanıcıyı, problemi ve ürünün ana amacını netleştiriyoruz.'],
      ['02', 'Rotayı Tasarlıyoruz', 'Arayüz, içerik, teknik mimari ve yayın planını sade bir yol haritasına çeviriyoruz.'],
      ['03', 'Geliştiriyoruz', 'Web, mobil, AI, panel veya otomasyon çözümünü çalışan ürüne dönüştürüyoruz.'],
      ['04', 'Yayına Alıyoruz', 'Domain, hosting, test, performans ve temel güvenlik kontrolleriyle ürünü yayına hazırlıyoruz.'],
    ],
    blogEyebrow: 'Blog / İçerikler',
    blogTitle: 'AI, kodlama ve ürün geliştirme üzerine notlar.',
    blogIdeas: ['AI ile küçük işletmeler için otomasyon fikirleri', 'Flutter ile mobil uygulama geliştirirken dikkat edilmesi gerekenler', 'Firebase ve Supabase maliyetlerini kontrol altında tutma', 'Bir fikri MVP’ye dönüştürme süreci'],
    contactEyebrow: 'İletişim',
    contactTitle: 'Yeni bir web sitesi, uygulama veya AI fikrin mi var?',
    contactText: 'Kısa bir keşif görüşmesiyle hedefi, kapsamı ve ilk yayın rotasını birlikte netleştirelim.',
    privacyTitle: 'Gizlilik Politikası',
    privacyUpdated: 'Son güncelleme: 27 Nisan 2026',
    privacyIntro: 'PruvaLAbs. geliştirdiği web siteleri, mobil uygulamalar ve diğer dijital ürünler kapsamında kullanıcı gizliliğine önem verir.',
    privacySections: [
      ['1. Toplanan Bilgiler', 'Ürün ve hizmetlere bağlı olarak iletişim bilgileri, kullanım bilgileri, cihaz bilgileri ve performans verileri toplanabilir.'],
      ['2. Bilgilerin Kullanımı', 'Bilgiler hizmetleri sunmak, performansı geliştirmek, hataları gidermek, güvenliği sağlamak ve destek vermek için kullanılabilir.'],
      ['3. Veri Paylaşımı', 'PruvaLAbs. kullanıcı verilerini satmaz. Gerekli durumlarda teknik hizmet sağlayıcıları veya yasal mercilerle sınırlı paylaşım yapılabilir.'],
      ['4. Veri Saklama', 'Veriler gerekli süre boyunca saklanır; gereklilik ortadan kalktığında silinir, anonimleştirilir veya güvenli şekilde imha edilir.'],
      ['5. İletişim', 'Gizlilik Politikası ile ilgili sorularınız için pruvalabs@gmail.com adresinden bize ulaşabilirsiniz.'],
    ],
    footer: '© 2025 PruvaLAbs. Tüm hakları saklıdır.',
  },
  en: {
    dir: 'ltr', languageLabel: 'Language', nav: ['Services', 'Products', 'Projects', 'Blog', 'Privacy', 'Contact'], heroEyebrow: 'AI-powered software studio', heroTitle: 'Web, mobile apps, AI and digital product development.', heroText: 'PruvaLAbs. is a modern software and product lab that turns ideas into prototypes and prototypes into working products.', primaryCta: 'Tell Us Your Project', secondaryCta: 'Explore Products', capabilities: ['Website', 'Mobile App', 'AI Automation', 'Dashboard', 'Game & MVP', 'Product Design'], aboutEyebrow: 'About', aboutTitle: 'We bring strategy, design and engineering to the same table.', aboutText: 'PruvaLAbs. builds websites, personal and corporate blogs, mobile apps, AI-powered tools, management panels and scalable product prototypes. We create digital products that look simple and work powerfully.', servicesEyebrow: 'Services', servicesTitle: 'Products, panels, automations and web experiences for real needs.', servicesText: 'We clarify the goal first, then create a fast and sustainable development route.',
    services: [['Website Development', 'Corporate sites, product pages, landing pages and personal or brand blogs.'], ['Mobile Apps', 'Flutter-focused Android and iOS apps, game prototypes and mobile-first products.'], ['AI & Automation', 'AI-assisted content, reporting, customer flows, data processing and operational automations.'], ['Management Panels', 'Admin panels, customer portals, order and operation screens.'], ['Data & Dashboard', 'Excel, data analysis, metrics and decision-support dashboards.'], ['Product Prototyping', 'Fast, testable MVP versions that can grow into real products.']], productsEyebrow: 'Products', productsTitle: 'We build real scenarios through our own products.', productsText: 'We do not only provide services; we also develop mobile, web, data and realtime systems through our own products.', products: [['Mali Pruva', 'Finance / Reporting', 'A product approach focused on simplifying financial processes, accelerating reports and giving teams instant access to the right data.', ['Reporting', 'Dashboard', 'Operations']], ['TwoGether', 'Online Game / Mobile', 'A multilingual two-player online arena with room codes, friend invites, bot mode and realtime mini-game logic.', ['Flutter', 'Online Multiplayer', 'Multilingual']]], casesEyebrow: 'Projects / Case Study', casesTitle: 'We turn our work into concrete product areas.', casesText: 'Every project is handled with a clear user experience goal and a product foundation that can grow.', cases: [['TwoGether – Two-Player Online Arena', 'Mobile-first game experience, room system, invite flow, bot mode and scalable realtime infrastructure planning.'], ['Mali Pruva – Financial Tracking Approach', 'Financial visibility, simple reporting and fast decision-support screens for operation teams.'], ['PruvaLAbs. Web Platform', 'A modern corporate web structure that explains the brand, products, services, blog and contact flow on one page.']], processEyebrow: 'Process', processTitle: 'We move from idea to launch in a simple and controlled way.', processText: 'We break complex technical work into clear steps and improve without breaking what already works.', process: [['01', 'Understand the Idea', 'We clarify the target user, problem and main product goal.'], ['02', 'Design the Route', 'We turn interface, content, architecture and launch plan into a clear roadmap.'], ['03', 'Build', 'We turn web, mobile, AI, panel or automation ideas into working products.'], ['04', 'Launch', 'We prepare the product with domain, hosting, testing, performance and basic security checks.']], blogEyebrow: 'Blog / Content', blogTitle: 'Notes on AI, coding and product development.', blogIdeas: ['Automation ideas for small businesses with AI', 'What to consider when building mobile apps with Flutter', 'Keeping Firebase and Supabase costs under control', 'Turning an idea into an MVP'], contactEyebrow: 'Contact', contactTitle: 'Have a website, app or AI idea?', contactText: 'Let us clarify the goal, scope and first launch route with a short discovery call.', privacyTitle: 'Privacy Policy', privacyUpdated: 'Last updated: April 27, 2026', privacyIntro: 'PruvaLAbs. values user privacy across the websites, mobile apps and digital products it develops.', privacySections: [['1. Information Collected', 'Depending on the product, contact data, usage data, device data and performance data may be collected.'], ['2. Use of Information', 'Information may be used to provide services, improve performance, fix errors, protect security and support users.'], ['3. Data Sharing', 'PruvaLAbs. does not sell user data. Limited sharing may occur with technical providers or legal authorities when required.'], ['4. Data Retention', 'Data is kept only as needed and then deleted, anonymized or securely destroyed.'], ['5. Contact', 'For privacy questions, contact us at pruvalabs@gmail.com.']], footer: '© 2025 PruvaLAbs. All rights reserved.',
  },
  ar: {
    dir: 'rtl', languageLabel: 'اللغة', nav: ['الخدمات', 'المنتجات', 'المشاريع', 'المدونة', 'الخصوصية', 'التواصل'], heroEyebrow: 'استوديو برمجيات مدعوم بالذكاء الاصطناعي', heroTitle: 'تطوير المواقع والتطبيقات والذكاء الاصطناعي والمنتجات الرقمية.', heroText: 'PruvaLAbs. مختبر برمجيات ومنتجات يحول الأفكار إلى نماذج أولية والنماذج إلى منتجات تعمل.', primaryCta: 'اشرح مشروعك', secondaryCta: 'استعرض المنتجات', capabilities: ['موقع ويب', 'تطبيق جوال', 'أتمتة AI', 'لوحات بيانات', 'ألعاب و MVP', 'تصميم منتج'], aboutEyebrow: 'من نحن', aboutTitle: 'نجمع الاستراتيجية والتصميم والهندسة في مسار واحد.', aboutText: 'PruvaLAbs. تطور مواقع ويب ومدونات وتطبيقات جوال وأدوات AI ولوحات إدارة ونماذج منتجات قابلة للتوسع. هدفنا منتجات رقمية بسيطة في الشكل وقوية في العمل.', servicesEyebrow: 'الخدمات', servicesTitle: 'منتجات ولوحات وأتمتة وتجارب ويب حسب الحاجة.', servicesText: 'نحدد الهدف أولا، ثم نبني مسارا سريعا ومستداما للتطوير.', services: [['تطوير المواقع', 'مواقع شركات وصفحات منتجات وصفحات هبوط ومدونات شخصية أو للعلامات.'], ['تطبيقات الجوال', 'تطبيقات Android و iOS باستخدام Flutter ونماذج ألعاب ومنتجات موجهة للجوال.'], ['AI والأتمتة', 'محتوى وتقارير وتدفقات عمل ومعالجة بيانات مدعومة بالذكاء الاصطناعي.'], ['لوحات الإدارة', 'لوحات تحكم ولوحات عملاء وشاشات تشغيل وطلبات.'], ['البيانات واللوحات', 'Excel وتحليل بيانات ومؤشرات أداء ولوحات قرار.'], ['نمذجة المنتجات', 'نسخ MVP سريعة وقابلة للاختبار والتطوير.']], productsEyebrow: 'منتجاتنا', productsTitle: 'نطور سيناريوهات واقعية من خلال منتجاتنا.', productsText: 'لا نقدم خدمات فقط، بل نطور أيضا أنظمة جوال وويب وبيانات وزمن حقيقي من خلال منتجاتنا.', products: [['Mali Pruva', 'مالية / تقارير', 'نهج منتج يبسط العمليات المالية ويسرع التقارير ويوفر البيانات الصحيحة للفرق بسرعة.', ['تقارير', 'Dashboard', 'تشغيل']], ['TwoGether', 'لعبة أونلاين / جوال', 'ساحة أونلاين متعددة اللغات للاعبين مع رمز غرفة ودعوة أصدقاء ووضع بوت ومنطق ألعاب فورية.', ['Flutter', 'Online Multiplayer', 'متعدد اللغات']]], casesEyebrow: 'مشاريع / دراسات', casesTitle: 'نحول أعمالنا إلى مجالات منتجات واضحة.', casesText: 'كل عمل يتم بناؤه على تجربة مستخدم واضحة وأساس قابل للتطوير.', cases: [['TwoGether – ساحة أونلاين للاعبين', 'تجربة لعبة موجهة للجوال مع نظام غرف ودعوات ووضع بوت وبنية زمن حقيقي.'], ['Mali Pruva – تتبع مالي', 'رؤية مالية وتقارير بسيطة وشاشات قرار سريعة للفرق.'], ['PruvaLAbs. Web Platform', 'منصة ويب حديثة تعرض العلامة والمنتجات والخدمات والمدونة والتواصل.']], processEyebrow: 'طريقة العمل', processTitle: 'ننتقل من الفكرة إلى الإطلاق بخطوات واضحة.', processText: 'نقسم العمل التقني إلى خطوات مفهومة ونطور دون كسر النظام القائم.', process: [['01', 'فهم الفكرة', 'نوضح المستخدم المستهدف والمشكلة وهدف المنتج.'], ['02', 'تصميم المسار', 'نحول الواجهة والمحتوى والمعمارية وخطة النشر إلى خارطة طريق.'], ['03', 'التطوير', 'نحول أفكار الويب والجوال وAI واللوحات إلى منتجات تعمل.'], ['04', 'الإطلاق', 'نجهز المنتج بالنطاق والاستضافة والاختبار والأداء والأمان الأساسي.']], blogEyebrow: 'مدونة / محتوى', blogTitle: 'ملاحظات حول AI والبرمجة وتطوير المنتجات.', blogIdeas: ['أفكار أتمتة للشركات الصغيرة باستخدام AI', 'نصائح لتطوير تطبيقات Flutter', 'التحكم في تكاليف Firebase و Supabase', 'تحويل الفكرة إلى MVP'], contactEyebrow: 'تواصل', contactTitle: 'هل لديك فكرة موقع أو تطبيق أو AI؟', contactText: 'لنحدد الهدف والنطاق ومسار الإطلاق الأول في جلسة قصيرة.', privacyTitle: 'سياسة الخصوصية', privacyUpdated: 'آخر تحديث: 27 أبريل 2026', privacyIntro: 'PruvaLAbs. تهتم بخصوصية المستخدم في المواقع والتطبيقات والمنتجات الرقمية التي تطورها.', privacySections: [['1. المعلومات المجمعة', 'قد يتم جمع بيانات اتصال واستخدام وجهاز وأداء حسب المنتج.'], ['2. استخدام المعلومات', 'تستخدم المعلومات لتقديم الخدمة وتحسين الأداء وإصلاح الأخطاء وحماية الأمان.'], ['3. مشاركة البيانات', 'PruvaLAbs. لا تبيع بيانات المستخدم. قد تتم مشاركة محدودة مع مزودي الخدمة أو الجهات القانونية عند الحاجة.'], ['4. حفظ البيانات', 'تحفظ البيانات للمدة اللازمة ثم تحذف أو تجهل أو يتم إتلافها بشكل آمن.'], ['5. التواصل', 'لأسئلة الخصوصية تواصل معنا عبر pruvalabs@gmail.com.']], footer: '© 2025 PruvaLAbs. جميع الحقوق محفوظة.',
  },
};

const fallback = translations.en;

const createDerivedLanguage = (base, overrides) => ({ ...base, ...overrides });

translations.de = createDerivedLanguage(fallback, { languageLabel: 'Sprache', nav: ['Leistungen', 'Produkte', 'Projekte', 'Blog', 'Datenschutz', 'Kontakt'], heroEyebrow: 'KI-gestütztes Softwarestudio', heroTitle: 'Websites, mobile Apps, KI und digitale Produktentwicklung.', heroText: 'PruvaLAbs. verwandelt Ideen in Prototypen und Prototypen in funktionierende Produkte.', primaryCta: 'Projekt erzählen', secondaryCta: 'Produkte ansehen', contactTitle: 'Hast du eine Website-, App- oder KI-Idee?', contactText: 'Lass uns Ziel, Umfang und ersten Launch-Weg kurz klären.', footer: '© 2025 PruvaLAbs. Alle Rechte vorbehalten.' });
translations.ru = createDerivedLanguage(fallback, { languageLabel: 'Язык', nav: ['Услуги', 'Продукты', 'Проекты', 'Блог', 'Конфиденциальность', 'Контакты'], heroEyebrow: 'AI-студия разработки', heroTitle: 'Сайты, мобильные приложения, AI и цифровые продукты.', heroText: 'PruvaLAbs. превращает идеи в прототипы, а прототипы в работающие продукты.', primaryCta: 'Рассказать о проекте', secondaryCta: 'Смотреть продукты', contactTitle: 'Есть идея сайта, приложения или AI?', contactText: 'На короткой встрече определим цель, объем и первый путь запуска.', footer: '© 2025 PruvaLAbs. Все права защищены.' });
translations.it = createDerivedLanguage(fallback, { languageLabel: 'Lingua', nav: ['Servizi', 'Prodotti', 'Progetti', 'Blog', 'Privacy', 'Contatti'], heroEyebrow: 'Studio software con AI', heroTitle: 'Siti web, app mobile, AI e prodotti digitali.', heroText: 'PruvaLAbs. trasforma idee in prototipi e prototipi in prodotti funzionanti.', primaryCta: 'Racconta il progetto', secondaryCta: 'Scopri i prodotti', contactTitle: 'Hai un’idea per un sito, app o AI?', contactText: 'Definiamo obiettivo, ambito e primo lancio con una breve call.', footer: '© 2025 PruvaLAbs. Tutti i diritti riservati.' });
translations.fr = createDerivedLanguage(fallback, { languageLabel: 'Langue', nav: ['Services', 'Produits', 'Projets', 'Blog', 'Confidentialité', 'Contact'], heroEyebrow: 'Studio logiciel avec IA', heroTitle: 'Sites web, applications mobiles, IA et produits numériques.', heroText: 'PruvaLAbs. transforme les idées en prototypes et les prototypes en produits fonctionnels.', primaryCta: 'Présenter le projet', secondaryCta: 'Voir les produits', contactTitle: 'Vous avez une idée de site, app ou IA ?', contactText: 'Clarifions l’objectif, le périmètre et la première mise en ligne lors d’un court échange.', footer: '© 2025 PruvaLAbs. Tous droits réservés.' });
translations.zh = createDerivedLanguage(fallback, { languageLabel: '语言', nav: ['服务', '产品', '项目', '博客', '隐私', '联系'], heroEyebrow: 'AI 驱动的软件工作室', heroTitle: '网站、移动应用、AI 与数字产品开发。', heroText: 'PruvaLAbs. 将想法变成原型，将原型变成可运行的产品。', primaryCta: '介绍项目', secondaryCta: '查看产品', contactTitle: '有网站、应用或 AI 想法吗？', contactText: '通过一次简短沟通明确目标、范围和首次上线路线。', footer: '© 2025 PruvaLAbs. 保留所有权利。' });
translations.es = createDerivedLanguage(fallback, { languageLabel: 'Idioma', nav: ['Servicios', 'Productos', 'Proyectos', 'Blog', 'Privacidad', 'Contacto'], heroEyebrow: 'Estudio de software con IA', heroTitle: 'Webs, apps móviles, IA y productos digitales.', heroText: 'PruvaLAbs. convierte ideas en prototipos y prototipos en productos funcionales.', primaryCta: 'Cuéntanos tu proyecto', secondaryCta: 'Ver productos', contactTitle: '¿Tienes una idea de web, app o IA?', contactText: 'Aclaramos objetivo, alcance y primera ruta de lanzamiento en una breve llamada.', footer: '© 2025 PruvaLAbs. Todos los derechos reservados.' });
translations.pt = createDerivedLanguage(fallback, { languageLabel: 'Idioma', nav: ['Serviços', 'Produtos', 'Projetos', 'Blog', 'Privacidade', 'Contato'], heroEyebrow: 'Estúdio de software com IA', heroTitle: 'Sites, apps móveis, IA e produtos digitais.', heroText: 'PruvaLAbs. transforma ideias em protótipos e protótipos em produtos funcionais.', primaryCta: 'Conte seu projeto', secondaryCta: 'Ver produtos', contactTitle: 'Tem uma ideia de site, app ou IA?', contactText: 'Vamos definir objetivo, escopo e primeira rota de lançamento em uma conversa curta.', footer: '© 2025 PruvaLAbs. Todos os direitos reservados.' });
translations.hi = createDerivedLanguage(fallback, { languageLabel: 'भाषा', nav: ['सेवाएँ', 'उत्पाद', 'प्रोजेक्ट', 'ब्लॉग', 'गोपनीयता', 'संपर्क'], heroEyebrow: 'AI समर्थित सॉफ्टवेयर स्टूडियो', heroTitle: 'वेबसाइट, मोबाइल ऐप, AI और डिजिटल उत्पाद विकास।', heroText: 'PruvaLAbs. विचारों को प्रोटोटाइप और प्रोटोटाइप को काम करने वाले उत्पादों में बदलता है।', primaryCta: 'अपना प्रोजेक्ट बताएं', secondaryCta: 'उत्पाद देखें', contactTitle: 'क्या आपके पास वेबसाइट, ऐप या AI आइडिया है?', contactText: 'एक छोटी बातचीत में लक्ष्य, दायरा और पहली लॉन्च दिशा स्पष्ट करें।', footer: '© 2025 PruvaLAbs. सर्वाधिकार सुरक्षित.' });

function getInitialLanguage() {
  const saved = window.localStorage.getItem('pruvalabs-language');
  if (saved && translations[saved]) return saved;
  const browserLanguage = window.navigator.language?.slice(0, 2);
  return translations[browserLanguage] ? browserLanguage : 'tr';
}

function LanguageSelector({ language, onLanguageChange, t }) {
  return (
    <label className="language-switcher">
      <span>{t.languageLabel}</span>
      <select value={language} onChange={(event) => onLanguageChange(event.target.value)} aria-label={t.languageLabel}>
        {languages.map((item) => (
          <option key={item.code} value={item.code}>{item.label}</option>
        ))}
      </select>
    </label>
  );
}

function Header({ language, onLanguageChange, t }) {
  return (
    <nav className="top-nav" aria-label="Ana menü">
      <a className="brand" href="/" aria-label="PruvaLAbs. ana sayfa">
        <img className="brand-logo" src="/pruvalabs-logo.png" alt="PruvaLAbs. logosu" />
        <span className="brand-text">PruvaLAbs.</span>
      </a>
      <div className="nav-links">
        <a href="/#hizmetler">{t.nav[0]}</a>
        <a href="/#urunlerimiz">{t.nav[1]}</a>
        <a href="/#projeler">{t.nav[2]}</a>
        <a href="/#blog">{t.nav[3]}</a>
        <a href="/gizlilik-politikasi">{t.nav[4]}</a>
        <a href="/#iletisim">{t.nav[5]}</a>
      </div>
      <LanguageSelector language={language} onLanguageChange={onLanguageChange} t={t} />
    </nav>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function HomePage({ language, onLanguageChange, t }) {
  return (
    <>
      <header className="hero">
        <Header language={language} onLanguageChange={onLanguageChange} t={t} />
        <div className="hero-grid">
          <div className="hero-content">
            <p className="eyebrow">{t.heroEyebrow}</p>
            <h1>{t.heroTitle}</h1>
            <p className="tagline">{t.heroText}</p>
            <div className="hero-actions">
              <a className="cta" href="#iletisim">{t.primaryCta}</a>
              <a className="secondary-cta" href="#urunlerimiz">{t.secondaryCta}</a>
            </div>
          </div>
          <aside className="hero-panel" aria-label="PruvaLAbs. capabilities">
            {t.capabilities.map((item) => <span key={item}>{item}</span>)}
          </aside>
        </div>
      </header>

      <main>
        <section id="hakkimizda" className="content-card split-card">
          <div>
            <p className="eyebrow">{t.aboutEyebrow}</p>
            <h2>{t.aboutTitle}</h2>
          </div>
          <p>{t.aboutText}</p>
        </section>

        <section id="hizmetler" className="section-block">
          <SectionIntro eyebrow={t.servicesEyebrow} title={t.servicesTitle} text={t.servicesText} />
          <div className="card-grid services-grid">
            {t.services.map(([title, text]) => (
              <article className="mini-card" key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section id="urunlerimiz" className="section-block">
          <SectionIntro eyebrow={t.productsEyebrow} title={t.productsTitle} text={t.productsText} />
          <div className="product-grid">
            {t.products.map(([title, label, text, tags]) => (
              <article className="product-card" key={title}>
                <p className="product-label">{label}</p>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="tag-row">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="projeler" className="section-block">
          <SectionIntro eyebrow={t.casesEyebrow} title={t.casesTitle} text={t.casesText} />
          <div className="case-list">
            {t.cases.map(([title, text]) => <article className="case-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section id="surec" className="section-block process-block">
          <SectionIntro eyebrow={t.processEyebrow} title={t.processTitle} text={t.processText} />
          <div className="process-grid">
            {t.process.map(([number, title, text]) => (
              <article className="process-step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section id="blog" className="section-block blog-block">
          <SectionIntro eyebrow={t.blogEyebrow} title={t.blogTitle} />
          <div className="blog-list">{t.blogIdeas.map((idea) => <span key={idea}>{idea}</span>)}</div>
        </section>

        <section id="iletisim" className="contact-cta">
          <div>
            <p className="eyebrow">{t.contactEyebrow}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactText}</p>
          </div>
          <div className="contact-links">
            <a className="cta" href="mailto:pruvalabs@gmail.com">pruvalabs@gmail.com</a>
            <a className="secondary-cta" href="https://instagram.com/pruvalabs" target="_blank" rel="noreferrer">Instagram</a>
            <a className="secondary-cta" href="https://x.com/pruvalabs" target="_blank" rel="noreferrer">X / Twitter</a>
          </div>
        </section>
      </main>
    </>
  );
}

function PrivacyPolicyPage({ language, onLanguageChange, t }) {
  return (
    <main className="policy-page">
      <section className="hero policy-hero">
        <Header language={language} onLanguageChange={onLanguageChange} t={t} />
        <div className="policy-intro">
          <h1>{t.privacyTitle}</h1>
          <p>{t.privacyUpdated}</p>
          <p>{t.privacyIntro}</p>
        </div>
      </section>
      <section className="policy-content content-card">
        {t.privacySections.map(([title, paragraph]) => (
          <article key={title} className="policy-block"><h2>{title}</h2><p>{paragraph}</p></article>
        ))}
      </section>
    </main>
  );
}

function Footer({ t }) {
  return (
    <footer className="footer">
      <div>
        <p className="footer-brand">PruvaLAbs.</p>
        <p className="footer-text">{t.footer}</p>
      </div>
      <div className="footer-links">
        <a href="mailto:pruvalabs@gmail.com">pruvalabs@gmail.com</a>
        <a href="/gizlilik-politikasi">{t.nav[4]}</a>
      </div>
    </footer>
  );
}

function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const t = useMemo(() => translations[language] || translations.tr, [language]);
  const isPrivacyPage = window.location.pathname === '/gizlilik-politikasi';

  useEffect(() => {
    window.localStorage.setItem('pruvalabs-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = t.dir;
  }, [language, t.dir]);

  return (
    <div className="site-shell" dir={t.dir}>
      {isPrivacyPage ? (
        <PrivacyPolicyPage language={language} onLanguageChange={setLanguage} t={t} />
      ) : (
        <HomePage language={language} onLanguageChange={setLanguage} t={t} />
      )}
      <Footer t={t} />
    </div>
  );
}

export default App;
