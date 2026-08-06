"use client";

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

export const languages = [
  { code: "tr", name: "Türkçe", flag: "🇹🇷", direction: "ltr" },
  { code: "en", name: "English", flag: "🇬🇧", direction: "ltr" },
  { code: "zh", name: "中文", flag: "🇨🇳", direction: "ltr" },
  { code: "es", name: "Español", flag: "🇪🇸", direction: "ltr" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳", direction: "ltr" },
  { code: "ar", name: "العربية", flag: "🇸🇦", direction: "rtl" },
  { code: "bn", name: "বাংলা", flag: "🇧🇩", direction: "ltr" },
  { code: "pt", name: "Português", flag: "🇧🇷", direction: "ltr" },
  { code: "ru", name: "Русский", flag: "🇷🇺", direction: "ltr" },
  { code: "ja", name: "日本語", flag: "🇯🇵", direction: "ltr" },
  { code: "de", name: "Deutsch", flag: "🇩🇪", direction: "ltr" },
  { code: "fr", name: "Français", flag: "🇫🇷", direction: "ltr" },
  { code: "ur", name: "اردو", flag: "🇵🇰", direction: "rtl" },
  { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩", direction: "ltr" },
] as const;

export type Locale = (typeof languages)[number]["code"];

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "pruvalabs-language";
const COOKIE_KEY = "pruvalabs_language";

const source = {
  navHome: "Ana Sayfa",
  navAbout: "Hakkımızda",
  navServices: "Hizmetler",
  navProjects: "Projeler",
  navBlog: "Blog/Rehber",
  navContact: "İletişim",
  privacyPolicy: "Gizlilik Politikası",
  rights: "© 2025 PruvaLabs. Tüm hakları saklıdır.",
  chooseLanguage: "Dil seçin",
  homeLab: "PruvaLabs teknoloji laboratuvarı",
  homeTitle: "Fikirleri güçlü dijital ürünlere dönüştürüyoruz.",
  homeLead: "Yapay zekâ, web, mobil ve backend sistemlerini tek yapıda geliştiriyoruz.",
  viewProjects: "Projeleri incele",
  shareProject: "Projenizi paylaşın",
  expertise: "Uzmanlık alanları",
  expertiseTitle: "Ürünün her katmanını birlikte geliştiriyoruz.",
  expertiseLead: "Strateji, tasarım ve mühendisliği tek ürün yaklaşımında buluşturuyoruz.",
  featuredProduct: "Öne çıkan ürün",
  pruvaiHomeLead: "Dijital ürünlere entegre edilen, ihtiyaca göre uyarlanan yapay zekâ altyapısı.",
  viewPruvai: "PruvAI'ı incele",
  productsProjects: "Ürünler ve projeler",
  developedProducts: "Geliştirdiğimiz ürünler.",
  allProjects: "Tüm projeler →",
  turnIdeaIntoProduct: "Fikrinizi çalışan bir ürüne dönüştürelim.",
  shareWebMobileAi: "Web, mobil, yapay zekâ veya özel yazılım projenizi paylaşın.",
  getInTouch: "İletişime geç",
  blogGuide: "Blog/Rehber",
  blogTitle: "İşletmeler için sade teknoloji rehberi.",
  blogLead: "AI, web, mobil ürünler ve dijital operasyonlar hakkında anlaşılır, pratik ve güncel içerikler.",
  guides: "Rehberler",
  shortNotes: "Kısa, net ve işe yarar notlar.",
  curiousTopic: "Bir konuyu merak mı ediyorsunuz?",
  curiousLead: "PruvAI, web sitesi, mobil uygulama veya dijital ürün geliştirme hakkında bize yazın. Rehber içeriklerimizi gerçek ihtiyaçlara göre hazırlıyoruz.",
  suggestTopic: "Konu Öner",
  pruvaiBadge: "PruvaLabs yapay zekâ teknolojisi",
  pruvaiLead: "Ürünlere API ile entegre edilen, ihtiyaca göre uyarlanan yapay zekâ altyapısı.",
  discussIntegration: "Entegrasyonu konuşalım",
  inspectTechnology: "Teknolojiyi incele",
  productInfrastructure: "Ürün altyapısı",
  moreThanChat: "Bir sohbet ekranından daha fazlası.",
  naturalPart: "Web, mobil ve kurumsal ürünlerin doğal bir parçası olarak çalışır.",
  systemFlow: "Sistem akışı",
  controlledResult: "Üründen kontrollü sonuca.",
  usageAreas: "Kullanım alanları",
  customConfigured: "Her ürüne özel yapılandırılır.",
  tasksDataResponse: "Görevler, veri erişimi ve yanıt biçimi ihtiyaca göre belirlenir.",
  officialProductInfo: "Resmî ürün bilgisi",
  reliableAi: "Güvenilir yapay zekâ yaklaşımı.",
  visibleSources: "PruvAI, kaynakları görünür kılmayı ve belirsizliği açıkça belirtmeyi hedefler.",
  integrationApproach: "Entegrasyon yaklaşımı",
  addAiWithoutChanging: "Mevcut ürünü değiştirmeden yapay zekâ ekleyin.",
  integrationPlan: "Entegrasyon, ürün deneyimini ve güvenlik sınırlarını koruyacak şekilde planlanır.",
  strengthenWithPruvai: "Ürününüzü PruvAI ile güçlendirelim.",
  shareUseCase: "Kullanım senaryonuzu paylaşın.",
  contactHeading: "PruvaLabs ile iletişime geçin.",
  contactLead: "PruvAI, yapay zekâ sistemleri, ürün geliştirme ve iş birlikleri için bize ulaşabilirsiniz.",
  contactAreas: "Hangi konularda konuşabiliriz?",
  aiIntegrations: "PruvAI ve yapay zekâ entegrasyonları",
  webMobileProducts: "Web ve mobil ürünler",
  backendApiSystems: "Backend ve API sistemleri",
  collaborations: "Ürün ve teknoloji iş birlikleri",
  directContact: "Doğrudan iletişim",
  email: "E-posta",
  sendEmail: "E-posta gönder",
  socialMedia: "Sosyal medya",
  privacyData: "Gizlilik ve veri",
  privacyLead: "PruvAI genel kullanıma açılmadan önce veri işleme kapsamı ve kullanıcı kontrolleri açık biçimde yayınlanacaktır.",
  kvkk: "KVKK / Veri Açıklaması",
  chooseChannel: "Size uygun kanaldan PruvaLabs ekibine doğrudan ulaşın.",
} as const;

type TranslationKey = keyof typeof source;
type TranslationTable = Record<TranslationKey, string>;

const en: TranslationTable = {
  navHome: "Home",
  navAbout: "About",
  navServices: "Services",
  navProjects: "Projects",
  navBlog: "Blog/Guides",
  navContact: "Contact",
  privacyPolicy: "Privacy Policy",
  rights: "© 2025 PruvaLabs. All rights reserved.",
  chooseLanguage: "Choose language",
  homeLab: "PruvaLabs technology laboratory",
  homeTitle: "We turn ideas into powerful digital products.",
  homeLead: "We build artificial intelligence, web, mobile and backend systems as one product.",
  viewProjects: "View projects",
  shareProject: "Share your project",
  expertise: "Areas of expertise",
  expertiseTitle: "We build every layer of the product together.",
  expertiseLead: "We bring strategy, design and engineering together in one product approach.",
  featuredProduct: "Featured product",
  pruvaiHomeLead: "An adaptable AI infrastructure integrated into digital products.",
  viewPruvai: "Explore PruvAI",
  productsProjects: "Products and projects",
  developedProducts: "Products we build.",
  allProjects: "All projects →",
  turnIdeaIntoProduct: "Let us turn your idea into a working product.",
  shareWebMobileAi: "Tell us about your web, mobile, AI or custom software project.",
  getInTouch: "Get in touch",
  blogGuide: "Blog/Guides",
  blogTitle: "Clear technology guidance for businesses.",
  blogLead: "Practical, current and easy-to-understand content about AI, web, mobile products and digital operations.",
  guides: "Guides",
  shortNotes: "Short, clear and useful notes.",
  curiousTopic: "Is there a topic you are curious about?",
  curiousLead: "Write to us about PruvAI, websites, mobile applications or digital product development. We prepare our guides around real needs.",
  suggestTopic: "Suggest a topic",
  pruvaiBadge: "PruvaLabs artificial intelligence technology",
  pruvaiLead: "An adaptable AI infrastructure integrated into products through an API.",
  discussIntegration: "Discuss integration",
  inspectTechnology: "Explore the technology",
  productInfrastructure: "Product infrastructure",
  moreThanChat: "More than a chat screen.",
  naturalPart: "It works as a natural part of web, mobile and enterprise products.",
  systemFlow: "System flow",
  controlledResult: "From product input to a controlled result.",
  usageAreas: "Use cases",
  customConfigured: "Configured for every product.",
  tasksDataResponse: "Tasks, data access and response formats are defined according to the need.",
  officialProductInfo: "Official product information",
  reliableAi: "A reliable AI approach.",
  visibleSources: "PruvAI aims to make sources visible and state uncertainty clearly.",
  integrationApproach: "Integration approach",
  addAiWithoutChanging: "Add AI without replacing your existing product.",
  integrationPlan: "Integration is planned to protect the product experience and security boundaries.",
  strengthenWithPruvai: "Let us strengthen your product with PruvAI.",
  shareUseCase: "Share your use case.",
  contactHeading: "Contact PruvaLabs.",
  contactLead: "Reach us about PruvAI, artificial intelligence systems, product development and collaborations.",
  contactAreas: "What can we discuss?",
  aiIntegrations: "PruvAI and AI integrations",
  webMobileProducts: "Web and mobile products",
  backendApiSystems: "Backend and API systems",
  collaborations: "Product and technology collaborations",
  directContact: "Direct contact",
  email: "Email",
  sendEmail: "Send email",
  socialMedia: "Social media",
  privacyData: "Privacy and data",
  privacyLead: "Before PruvAI becomes publicly available, its data-processing scope and user controls will be published clearly.",
  kvkk: "KVKK / Data Notice",
  chooseChannel: "Contact the PruvaLabs team directly through the channel that suits you.",
};

const translations: Record<Exclude<Locale, "tr" | "en">, TranslationTable> = {
  zh: {
    navHome: "首页", navAbout: "关于我们", navServices: "服务", navProjects: "项目", navBlog: "博客/指南", navContact: "联系", privacyPolicy: "隐私政策", rights: "© 2025 PruvaLabs。保留所有权利。", chooseLanguage: "选择语言",
    homeLab: "PruvaLabs 技术实验室", homeTitle: "我们将创意转化为强大的数字产品。", homeLead: "我们以统一架构构建人工智能、网页、移动端和后端系统。", viewProjects: "查看项目", shareProject: "分享您的项目", expertise: "专业领域", expertiseTitle: "我们共同构建产品的每一层。", expertiseLead: "我们将战略、设计与工程整合为统一的产品方法。", featuredProduct: "重点产品", pruvaiHomeLead: "可按需求调整并集成到数字产品中的人工智能基础设施。", viewPruvai: "了解 PruvAI", productsProjects: "产品与项目", developedProducts: "我们开发的产品。", allProjects: "全部项目 →", turnIdeaIntoProduct: "让我们把您的创意变成可运行的产品。", shareWebMobileAi: "请告诉我们您的网页、移动端、人工智能或定制软件项目。", getInTouch: "联系我们",
    blogGuide: "博客/指南", blogTitle: "面向企业的清晰技术指南。", blogLead: "关于人工智能、网页、移动产品和数字运营的实用、易懂且及时的内容。", guides: "指南", shortNotes: "简短、清晰且实用的笔记。", curiousTopic: "您对某个主题感兴趣吗？", curiousLead: "欢迎就 PruvAI、网站、移动应用或数字产品开发联系我们。我们的指南基于真实需求编写。", suggestTopic: "推荐主题",
    pruvaiBadge: "PruvaLabs 人工智能技术", pruvaiLead: "通过 API 集成到产品中并可按需求调整的人工智能基础设施。", discussIntegration: "讨论集成", inspectTechnology: "了解技术", productInfrastructure: "产品基础设施", moreThanChat: "不只是聊天界面。", naturalPart: "作为网页、移动端和企业产品的自然组成部分运行。", systemFlow: "系统流程", controlledResult: "从产品输入到受控结果。", usageAreas: "应用场景", customConfigured: "为每个产品定制配置。", tasksDataResponse: "任务、数据访问和回复形式根据需求确定。", officialProductInfo: "官方产品信息", reliableAi: "可靠的人工智能方法。", visibleSources: "PruvAI 致力于展示信息来源，并明确说明不确定性。", integrationApproach: "集成方式", addAiWithoutChanging: "无需替换现有产品即可加入人工智能。", integrationPlan: "集成过程会保护产品体验和安全边界。", strengthenWithPruvai: "让 PruvAI 增强您的产品。", shareUseCase: "分享您的使用场景。",
    contactHeading: "联系 PruvaLabs。", contactLead: "欢迎就 PruvAI、人工智能系统、产品开发和合作与我们联系。", contactAreas: "我们可以讨论什么？", aiIntegrations: "PruvAI 与人工智能集成", webMobileProducts: "网页与移动产品", backendApiSystems: "后端与 API 系统", collaborations: "产品与技术合作", directContact: "直接联系", email: "电子邮件", sendEmail: "发送邮件", socialMedia: "社交媒体", privacyData: "隐私与数据", privacyLead: "在 PruvAI 面向公众开放前，我们将清晰公布数据处理范围和用户控制方式。", kvkk: "KVKK / 数据说明", chooseChannel: "通过适合您的渠道直接联系 PruvaLabs 团队。",
  },
  es: {
    navHome: "Inicio", navAbout: "Nosotros", navServices: "Servicios", navProjects: "Proyectos", navBlog: "Blog/Guías", navContact: "Contacto", privacyPolicy: "Política de privacidad", rights: "© 2025 PruvaLabs. Todos los derechos reservados.", chooseLanguage: "Elegir idioma",
    homeLab: "Laboratorio tecnológico PruvaLabs", homeTitle: "Convertimos ideas en productos digitales sólidos.", homeLead: "Desarrollamos inteligencia artificial, web, móvil y backend como un único producto.", viewProjects: "Ver proyectos", shareProject: "Comparta su proyecto", expertise: "Áreas de experiencia", expertiseTitle: "Desarrollamos juntos cada capa del producto.", expertiseLead: "Unimos estrategia, diseño e ingeniería en un único enfoque de producto.", featuredProduct: "Producto destacado", pruvaiHomeLead: "Infraestructura de IA adaptable e integrada en productos digitales.", viewPruvai: "Explorar PruvAI", productsProjects: "Productos y proyectos", developedProducts: "Productos que desarrollamos.", allProjects: "Todos los proyectos →", turnIdeaIntoProduct: "Convirtamos su idea en un producto funcional.", shareWebMobileAi: "Cuéntenos sobre su proyecto web, móvil, de IA o software a medida.", getInTouch: "Contactar",
    blogGuide: "Blog/Guías", blogTitle: "Guía tecnológica clara para empresas.", blogLead: "Contenido práctico, actual y fácil de entender sobre IA, web, productos móviles y operaciones digitales.", guides: "Guías", shortNotes: "Notas breves, claras y útiles.", curiousTopic: "¿Hay algún tema que le interese?", curiousLead: "Escríbanos sobre PruvAI, sitios web, aplicaciones móviles o desarrollo de productos digitales. Preparamos nuestras guías según necesidades reales.", suggestTopic: "Sugerir tema",
    pruvaiBadge: "Tecnología de inteligencia artificial de PruvaLabs", pruvaiLead: "Infraestructura de IA adaptable e integrada en productos mediante API.", discussIntegration: "Hablar de integración", inspectTechnology: "Explorar la tecnología", productInfrastructure: "Infraestructura de producto", moreThanChat: "Más que una pantalla de chat.", naturalPart: "Funciona como parte natural de productos web, móviles y empresariales.", systemFlow: "Flujo del sistema", controlledResult: "Del producto a un resultado controlado.", usageAreas: "Casos de uso", customConfigured: "Configurado para cada producto.", tasksDataResponse: "Las tareas, el acceso a datos y el formato de respuesta se definen según la necesidad.", officialProductInfo: "Información oficial del producto", reliableAi: "Un enfoque de IA fiable.", visibleSources: "PruvAI busca hacer visibles las fuentes y expresar claramente la incertidumbre.", integrationApproach: "Enfoque de integración", addAiWithoutChanging: "Añada IA sin sustituir su producto actual.", integrationPlan: "La integración se planifica para proteger la experiencia del producto y los límites de seguridad.", strengthenWithPruvai: "Potenciemos su producto con PruvAI.", shareUseCase: "Comparta su caso de uso.",
    contactHeading: "Contacte con PruvaLabs.", contactLead: "Contáctenos sobre PruvAI, sistemas de inteligencia artificial, desarrollo de productos y colaboraciones.", contactAreas: "¿De qué podemos hablar?", aiIntegrations: "PruvAI e integraciones de IA", webMobileProducts: "Productos web y móviles", backendApiSystems: "Sistemas backend y API", collaborations: "Colaboraciones de producto y tecnología", directContact: "Contacto directo", email: "Correo electrónico", sendEmail: "Enviar correo", socialMedia: "Redes sociales", privacyData: "Privacidad y datos", privacyLead: "Antes de que PruvAI esté disponible para el público, se publicarán claramente el alcance del tratamiento de datos y los controles de usuario.", kvkk: "KVKK / Aviso de datos", chooseChannel: "Contacte directamente con el equipo de PruvaLabs por el canal que prefiera.",
  },
  hi: {
    navHome: "मुखपृष्ठ", navAbout: "हमारे बारे में", navServices: "सेवाएँ", navProjects: "परियोजनाएँ", navBlog: "ब्लॉग/मार्गदर्शिका", navContact: "संपर्क", privacyPolicy: "गोपनीयता नीति", rights: "© 2025 PruvaLabs. सर्वाधिकार सुरक्षित।", chooseLanguage: "भाषा चुनें",
    homeLab: "PruvaLabs प्रौद्योगिकी प्रयोगशाला", homeTitle: "हम विचारों को शक्तिशाली डिजिटल उत्पादों में बदलते हैं।", homeLead: "हम कृत्रिम बुद्धिमत्ता, वेब, मोबाइल और बैकएंड प्रणालियों को एक उत्पाद के रूप में विकसित करते हैं।", viewProjects: "परियोजनाएँ देखें", shareProject: "अपनी परियोजना साझा करें", expertise: "विशेषज्ञता के क्षेत्र", expertiseTitle: "हम उत्पाद की हर परत को साथ मिलकर बनाते हैं।", expertiseLead: "हम रणनीति, डिज़ाइन और इंजीनियरिंग को एक उत्पाद दृष्टिकोण में जोड़ते हैं।", featuredProduct: "प्रमुख उत्पाद", pruvaiHomeLead: "डिजिटल उत्पादों में एकीकृत और आवश्यकता के अनुसार अनुकूलित एआई ढाँचा।", viewPruvai: "PruvAI देखें", productsProjects: "उत्पाद और परियोजनाएँ", developedProducts: "हमारे विकसित उत्पाद।", allProjects: "सभी परियोजनाएँ →", turnIdeaIntoProduct: "आपके विचार को कार्यशील उत्पाद में बदलें।", shareWebMobileAi: "अपनी वेब, मोबाइल, एआई या कस्टम सॉफ़्टवेयर परियोजना साझा करें।", getInTouch: "संपर्क करें",
    blogGuide: "ब्लॉग/मार्गदर्शिका", blogTitle: "व्यवसायों के लिए सरल तकनीकी मार्गदर्शन।", blogLead: "एआई, वेब, मोबाइल उत्पादों और डिजिटल संचालन पर व्यावहारिक, नवीन और आसानी से समझ आने वाली सामग्री।", guides: "मार्गदर्शिकाएँ", shortNotes: "छोटे, स्पष्ट और उपयोगी नोट्स।", curiousTopic: "क्या आप किसी विषय के बारे में जानना चाहते हैं?", curiousLead: "PruvAI, वेबसाइट, मोबाइल ऐप या डिजिटल उत्पाद विकास के बारे में हमें लिखें। हम वास्तविक जरूरतों के अनुसार मार्गदर्शिकाएँ तैयार करते हैं।", suggestTopic: "विषय सुझाएँ",
    pruvaiBadge: "PruvaLabs कृत्रिम बुद्धिमत्ता प्रौद्योगिकी", pruvaiLead: "एपीआई के माध्यम से उत्पादों में एकीकृत और आवश्यकता के अनुसार अनुकूलित एआई ढाँचा।", discussIntegration: "एकीकरण पर चर्चा करें", inspectTechnology: "प्रौद्योगिकी देखें", productInfrastructure: "उत्पाद अवसंरचना", moreThanChat: "सिर्फ़ चैट स्क्रीन से अधिक।", naturalPart: "यह वेब, मोबाइल और एंटरप्राइज़ उत्पादों के स्वाभाविक हिस्से के रूप में काम करता है।", systemFlow: "सिस्टम प्रवाह", controlledResult: "उत्पाद से नियंत्रित परिणाम तक।", usageAreas: "उपयोग क्षेत्र", customConfigured: "हर उत्पाद के लिए अनुकूलित।", tasksDataResponse: "कार्य, डेटा पहुँच और उत्तर का प्रारूप आवश्यकता के अनुसार तय किया जाता है।", officialProductInfo: "आधिकारिक उत्पाद जानकारी", reliableAi: "विश्वसनीय एआई दृष्टिकोण।", visibleSources: "PruvAI स्रोतों को स्पष्ट करने और अनिश्चितता को साफ़ बताने का लक्ष्य रखता है।", integrationApproach: "एकीकरण दृष्टिकोण", addAiWithoutChanging: "मौजूदा उत्पाद बदले बिना एआई जोड़ें।", integrationPlan: "एकीकरण की योजना उत्पाद अनुभव और सुरक्षा सीमाओं की रक्षा के लिए बनाई जाती है।", strengthenWithPruvai: "PruvAI से अपने उत्पाद को सशक्त बनाएँ।", shareUseCase: "अपना उपयोग मामला साझा करें।",
    contactHeading: "PruvaLabs से संपर्क करें।", contactLead: "PruvAI, एआई प्रणालियों, उत्पाद विकास और सहयोग के लिए हमसे संपर्क करें।", contactAreas: "हम किन विषयों पर बात कर सकते हैं?", aiIntegrations: "PruvAI और एआई एकीकरण", webMobileProducts: "वेब और मोबाइल उत्पाद", backendApiSystems: "बैकएंड और एपीआई प्रणालियाँ", collaborations: "उत्पाद और प्रौद्योगिकी सहयोग", directContact: "सीधा संपर्क", email: "ईमेल", sendEmail: "ईमेल भेजें", socialMedia: "सोशल मीडिया", privacyData: "गोपनीयता और डेटा", privacyLead: "PruvAI के सार्वजनिक उपयोग से पहले डेटा प्रसंस्करण का दायरा और उपयोगकर्ता नियंत्रण स्पष्ट रूप से प्रकाशित किए जाएँगे।", kvkk: "KVKK / डेटा सूचना", chooseChannel: "अपनी सुविधा के चैनल से PruvaLabs टीम से सीधे संपर्क करें।",
  },
  ar: {
    navHome: "الرئيسية", navAbout: "من نحن", navServices: "الخدمات", navProjects: "المشاريع", navBlog: "المدونة/الأدلة", navContact: "التواصل", privacyPolicy: "سياسة الخصوصية", rights: "© 2025 PruvaLabs. جميع الحقوق محفوظة.", chooseLanguage: "اختر اللغة",
    homeLab: "مختبر PruvaLabs للتقنية", homeTitle: "نحوّل الأفكار إلى منتجات رقمية قوية.", homeLead: "نطوّر الذكاء الاصطناعي والويب وتطبيقات الجوال وأنظمة الخلفية ضمن منتج واحد.", viewProjects: "استعراض المشاريع", shareProject: "شارك مشروعك", expertise: "مجالات الخبرة", expertiseTitle: "نبني كل طبقة من المنتج معًا.", expertiseLead: "نجمع الاستراتيجية والتصميم والهندسة ضمن منهج منتج واحد.", featuredProduct: "المنتج المميز", pruvaiHomeLead: "بنية ذكاء اصطناعي قابلة للتكييف ومتكاملة مع المنتجات الرقمية.", viewPruvai: "استكشف PruvAI", productsProjects: "المنتجات والمشاريع", developedProducts: "المنتجات التي نطوّرها.", allProjects: "جميع المشاريع ←", turnIdeaIntoProduct: "لنحوّل فكرتك إلى منتج يعمل.", shareWebMobileAi: "أخبرنا عن مشروعك في الويب أو الجوال أو الذكاء الاصطناعي أو البرمجيات المخصصة.", getInTouch: "تواصل معنا",
    blogGuide: "المدونة/الأدلة", blogTitle: "إرشاد تقني واضح للأعمال.", blogLead: "محتوى عملي وحديث وسهل الفهم حول الذكاء الاصطناعي والويب والمنتجات المحمولة والعمليات الرقمية.", guides: "الأدلة", shortNotes: "ملاحظات قصيرة وواضحة ومفيدة.", curiousTopic: "هل يوجد موضوع يهمك؟", curiousLead: "راسلنا حول PruvAI أو المواقع أو تطبيقات الجوال أو تطوير المنتجات الرقمية. نعد أدلتنا وفق الاحتياجات الحقيقية.", suggestTopic: "اقترح موضوعًا",
    pruvaiBadge: "تقنية الذكاء الاصطناعي من PruvaLabs", pruvaiLead: "بنية ذكاء اصطناعي قابلة للتكييف ومتكاملة مع المنتجات عبر واجهة API.", discussIntegration: "ناقش التكامل", inspectTechnology: "استكشف التقنية", productInfrastructure: "بنية المنتج", moreThanChat: "أكثر من مجرد شاشة محادثة.", naturalPart: "يعمل كجزء طبيعي من منتجات الويب والجوال والمؤسسات.", systemFlow: "تدفق النظام", controlledResult: "من المنتج إلى نتيجة مضبوطة.", usageAreas: "مجالات الاستخدام", customConfigured: "يُهيأ خصيصًا لكل منتج.", tasksDataResponse: "تُحدد المهام والوصول إلى البيانات وصيغة الإجابة حسب الحاجة.", officialProductInfo: "معلومات المنتج الرسمية", reliableAi: "نهج موثوق للذكاء الاصطناعي.", visibleSources: "يهدف PruvAI إلى إظهار المصادر وتوضيح حالات عدم اليقين بوضوح.", integrationApproach: "نهج التكامل", addAiWithoutChanging: "أضف الذكاء الاصطناعي دون استبدال منتجك الحالي.", integrationPlan: "يُخطط التكامل لحماية تجربة المنتج وحدود الأمان.", strengthenWithPruvai: "لنعزز منتجك باستخدام PruvAI.", shareUseCase: "شارك حالة الاستخدام.",
    contactHeading: "تواصل مع PruvaLabs.", contactLead: "تواصل معنا بشأن PruvAI وأنظمة الذكاء الاصطناعي وتطوير المنتجات والشراكات.", contactAreas: "ما الموضوعات التي يمكننا مناقشتها؟", aiIntegrations: "تكاملات PruvAI والذكاء الاصطناعي", webMobileProducts: "منتجات الويب والجوال", backendApiSystems: "أنظمة الخلفية وواجهات API", collaborations: "شراكات المنتجات والتقنية", directContact: "تواصل مباشر", email: "البريد الإلكتروني", sendEmail: "إرسال بريد", socialMedia: "وسائل التواصل الاجتماعي", privacyData: "الخصوصية والبيانات", privacyLead: "قبل إتاحة PruvAI للعامة، سيُنشر نطاق معالجة البيانات وضوابط المستخدم بوضوح.", kvkk: "KVKK / إشعار البيانات", chooseChannel: "تواصل مباشرة مع فريق PruvaLabs عبر القناة التي تناسبك.",
  },
  bn: {
    navHome: "হোম", navAbout: "আমাদের সম্পর্কে", navServices: "সেবা", navProjects: "প্রকল্প", navBlog: "ব্লগ/গাইড", navContact: "যোগাযোগ", privacyPolicy: "গোপনীয়তা নীতি", rights: "© 2025 PruvaLabs. সর্বস্বত্ব সংরক্ষিত।", chooseLanguage: "ভাষা নির্বাচন করুন",
    homeLab: "PruvaLabs প্রযুক্তি ল্যাব", homeTitle: "আমরা ধারণাকে শক্তিশালী ডিজিটাল পণ্যে রূপ দিই।", homeLead: "আমরা কৃত্রিম বুদ্ধিমত্তা, ওয়েব, মোবাইল ও ব্যাকএন্ড সিস্টেমকে এক পণ্য হিসেবে তৈরি করি।", viewProjects: "প্রকল্প দেখুন", shareProject: "আপনার প্রকল্প শেয়ার করুন", expertise: "দক্ষতার ক্ষেত্র", expertiseTitle: "আমরা পণ্যের প্রতিটি স্তর একসঙ্গে তৈরি করি।", expertiseLead: "কৌশল, নকশা ও প্রকৌশলকে একক পণ্য পদ্ধতিতে একত্র করি।", featuredProduct: "প্রধান পণ্য", pruvaiHomeLead: "ডিজিটাল পণ্যে সংযুক্ত ও প্রয়োজন অনুযায়ী মানিয়ে নেওয়া এআই অবকাঠামো।", viewPruvai: "PruvAI দেখুন", productsProjects: "পণ্য ও প্রকল্প", developedProducts: "আমাদের তৈরি পণ্য।", allProjects: "সব প্রকল্প →", turnIdeaIntoProduct: "আপনার ধারণাকে কার্যকর পণ্যে রূপ দিই।", shareWebMobileAi: "আপনার ওয়েব, মোবাইল, এআই বা কাস্টম সফটওয়্যার প্রকল্প সম্পর্কে জানান।", getInTouch: "যোগাযোগ করুন",
    blogGuide: "ব্লগ/গাইড", blogTitle: "ব্যবসার জন্য সহজ প্রযুক্তি নির্দেশনা।", blogLead: "এআই, ওয়েব, মোবাইল পণ্য ও ডিজিটাল কার্যক্রম নিয়ে ব্যবহারিক, হালনাগাদ ও সহজবোধ্য লেখা।", guides: "গাইড", shortNotes: "সংক্ষিপ্ত, পরিষ্কার ও কার্যকর নোট।", curiousTopic: "কোনো বিষয় জানতে আগ্রহী?", curiousLead: "PruvAI, ওয়েবসাইট, মোবাইল অ্যাপ বা ডিজিটাল পণ্য উন্নয়ন নিয়ে আমাদের লিখুন। বাস্তব প্রয়োজন অনুযায়ী আমরা গাইড তৈরি করি।", suggestTopic: "বিষয় প্রস্তাব করুন",
    pruvaiBadge: "PruvaLabs কৃত্রিম বুদ্ধিমত্তা প্রযুক্তি", pruvaiLead: "API-এর মাধ্যমে পণ্যে সংযুক্ত ও প্রয়োজন অনুযায়ী মানিয়ে নেওয়া এআই অবকাঠামো।", discussIntegration: "ইন্টিগ্রেশন আলোচনা করুন", inspectTechnology: "প্রযুক্তি দেখুন", productInfrastructure: "পণ্য অবকাঠামো", moreThanChat: "শুধু চ্যাট স্ক্রিনের চেয়েও বেশি।", naturalPart: "ওয়েব, মোবাইল ও এন্টারপ্রাইজ পণ্যের স্বাভাবিক অংশ হিসেবে কাজ করে।", systemFlow: "সিস্টেম প্রবাহ", controlledResult: "পণ্য থেকে নিয়ন্ত্রিত ফলাফল।", usageAreas: "ব্যবহারের ক্ষেত্র", customConfigured: "প্রতিটি পণ্যের জন্য কাস্টম কনফিগারেশন।", tasksDataResponse: "কাজ, ডেটা অ্যাক্সেস ও উত্তরের ধরন প্রয়োজন অনুযায়ী নির্ধারিত হয়।", officialProductInfo: "সরকারি পণ্য তথ্য", reliableAi: "বিশ্বস্ত এআই পদ্ধতি।", visibleSources: "PruvAI উৎস দৃশ্যমান রাখা এবং অনিশ্চয়তা স্পষ্টভাবে জানাতে চায়।", integrationApproach: "ইন্টিগ্রেশন পদ্ধতি", addAiWithoutChanging: "বর্তমান পণ্য না বদলিয়ে এআই যোগ করুন।", integrationPlan: "পণ্যের অভিজ্ঞতা ও নিরাপত্তার সীমা রক্ষায় ইন্টিগ্রেশন পরিকল্পিত হয়।", strengthenWithPruvai: "PruvAI দিয়ে আপনার পণ্যকে আরও শক্তিশালী করি।", shareUseCase: "আপনার ব্যবহার ক্ষেত্র শেয়ার করুন।",
    contactHeading: "PruvaLabs-এর সঙ্গে যোগাযোগ করুন।", contactLead: "PruvAI, এআই সিস্টেম, পণ্য উন্নয়ন ও সহযোগিতা নিয়ে আমাদের সঙ্গে যোগাযোগ করুন।", contactAreas: "আমরা কোন বিষয় নিয়ে কথা বলতে পারি?", aiIntegrations: "PruvAI ও এআই ইন্টিগ্রেশন", webMobileProducts: "ওয়েব ও মোবাইল পণ্য", backendApiSystems: "ব্যাকএন্ড ও API সিস্টেম", collaborations: "পণ্য ও প্রযুক্তি সহযোগিতা", directContact: "সরাসরি যোগাযোগ", email: "ইমেইল", sendEmail: "ইমেইল পাঠান", socialMedia: "সামাজিক যোগাযোগমাধ্যম", privacyData: "গোপনীয়তা ও ডেটা", privacyLead: "PruvAI সবার জন্য উন্মুক্ত হওয়ার আগে ডেটা প্রক্রিয়াকরণের পরিধি ও ব্যবহারকারী নিয়ন্ত্রণ স্পষ্টভাবে প্রকাশ করা হবে।", kvkk: "KVKK / ডেটা নোটিশ", chooseChannel: "আপনার সুবিধাজনক মাধ্যমে সরাসরি PruvaLabs দলের সঙ্গে যোগাযোগ করুন।",
  },
  pt: {
    navHome: "Início", navAbout: "Sobre", navServices: "Serviços", navProjects: "Projetos", navBlog: "Blog/Guias", navContact: "Contato", privacyPolicy: "Política de Privacidade", rights: "© 2025 PruvaLabs. Todos os direitos reservados.", chooseLanguage: "Escolher idioma",
    homeLab: "Laboratório de tecnologia PruvaLabs", homeTitle: "Transformamos ideias em produtos digitais fortes.", homeLead: "Desenvolvemos inteligência artificial, web, mobile e backend como um único produto.", viewProjects: "Ver projetos", shareProject: "Compartilhe seu projeto", expertise: "Áreas de especialidade", expertiseTitle: "Desenvolvemos juntos cada camada do produto.", expertiseLead: "Unimos estratégia, design e engenharia em uma única abordagem de produto.", featuredProduct: "Produto em destaque", pruvaiHomeLead: "Infraestrutura de IA adaptável e integrada a produtos digitais.", viewPruvai: "Conhecer o PruvAI", productsProjects: "Produtos e projetos", developedProducts: "Produtos que desenvolvemos.", allProjects: "Todos os projetos →", turnIdeaIntoProduct: "Vamos transformar sua ideia em um produto funcional.", shareWebMobileAi: "Conte-nos sobre seu projeto web, mobile, de IA ou software personalizado.", getInTouch: "Entrar em contato",
    blogGuide: "Blog/Guias", blogTitle: "Orientação tecnológica clara para empresas.", blogLead: "Conteúdo prático, atual e fácil de entender sobre IA, web, produtos móveis e operações digitais.", guides: "Guias", shortNotes: "Notas curtas, claras e úteis.", curiousTopic: "Há algum tema que você gostaria de conhecer?", curiousLead: "Escreva para nós sobre PruvAI, sites, aplicativos móveis ou desenvolvimento de produtos digitais. Criamos nossos guias com base em necessidades reais.", suggestTopic: "Sugerir tema",
    pruvaiBadge: "Tecnologia de inteligência artificial da PruvaLabs", pruvaiLead: "Infraestrutura de IA adaptável e integrada a produtos por API.", discussIntegration: "Conversar sobre integração", inspectTechnology: "Explorar a tecnologia", productInfrastructure: "Infraestrutura do produto", moreThanChat: "Mais do que uma tela de conversa.", naturalPart: "Funciona como parte natural de produtos web, móveis e corporativos.", systemFlow: "Fluxo do sistema", controlledResult: "Do produto a um resultado controlado.", usageAreas: "Casos de uso", customConfigured: "Configurado para cada produto.", tasksDataResponse: "Tarefas, acesso a dados e formato de resposta são definidos conforme a necessidade.", officialProductInfo: "Informações oficiais do produto", reliableAi: "Uma abordagem de IA confiável.", visibleSources: "O PruvAI busca tornar as fontes visíveis e declarar claramente as incertezas.", integrationApproach: "Abordagem de integração", addAiWithoutChanging: "Adicione IA sem substituir seu produto atual.", integrationPlan: "A integração é planejada para proteger a experiência do produto e os limites de segurança.", strengthenWithPruvai: "Vamos fortalecer seu produto com PruvAI.", shareUseCase: "Compartilhe seu caso de uso.",
    contactHeading: "Entre em contato com a PruvaLabs.", contactLead: "Fale conosco sobre PruvAI, sistemas de inteligência artificial, desenvolvimento de produtos e parcerias.", contactAreas: "Sobre o que podemos conversar?", aiIntegrations: "PruvAI e integrações de IA", webMobileProducts: "Produtos web e móveis", backendApiSystems: "Sistemas backend e API", collaborations: "Parcerias de produto e tecnologia", directContact: "Contato direto", email: "E-mail", sendEmail: "Enviar e-mail", socialMedia: "Redes sociais", privacyData: "Privacidade e dados", privacyLead: "Antes de o PruvAI ser disponibilizado ao público, o escopo do processamento de dados e os controles do usuário serão publicados claramente.", kvkk: "KVKK / Aviso de dados", chooseChannel: "Fale diretamente com a equipe PruvaLabs pelo canal que preferir.",
  },
  ru: {
    navHome: "Главная", navAbout: "О нас", navServices: "Услуги", navProjects: "Проекты", navBlog: "Блог/Руководства", navContact: "Контакты", privacyPolicy: "Политика конфиденциальности", rights: "© 2025 PruvaLabs. Все права защищены.", chooseLanguage: "Выбрать язык",
    homeLab: "Технологическая лаборатория PruvaLabs", homeTitle: "Мы превращаем идеи в сильные цифровые продукты.", homeLead: "Мы создаём искусственный интеллект, веб, мобильные и серверные системы как единый продукт.", viewProjects: "Смотреть проекты", shareProject: "Рассказать о проекте", expertise: "Области экспертизы", expertiseTitle: "Мы вместе создаём каждый слой продукта.", expertiseLead: "Мы объединяем стратегию, дизайн и инженерию в едином продуктовом подходе.", featuredProduct: "Главный продукт", pruvaiHomeLead: "Адаптируемая инфраструктура ИИ, встроенная в цифровые продукты.", viewPruvai: "Изучить PruvAI", productsProjects: "Продукты и проекты", developedProducts: "Продукты, которые мы создаём.", allProjects: "Все проекты →", turnIdeaIntoProduct: "Превратим вашу идею в работающий продукт.", shareWebMobileAi: "Расскажите о вашем веб-, мобильном, ИИ- или заказном программном проекте.", getInTouch: "Связаться",
    blogGuide: "Блог/Руководства", blogTitle: "Понятные технологические материалы для бизнеса.", blogLead: "Практичные, актуальные и понятные материалы об ИИ, вебе, мобильных продуктах и цифровых операциях.", guides: "Руководства", shortNotes: "Короткие, ясные и полезные заметки.", curiousTopic: "Вас интересует какая-либо тема?", curiousLead: "Напишите нам о PruvAI, сайтах, мобильных приложениях или разработке цифровых продуктов. Мы создаём руководства на основе реальных потребностей.", suggestTopic: "Предложить тему",
    pruvaiBadge: "Технология искусственного интеллекта PruvaLabs", pruvaiLead: "Адаптируемая инфраструктура ИИ, интегрируемая в продукты через API.", discussIntegration: "Обсудить интеграцию", inspectTechnology: "Изучить технологию", productInfrastructure: "Инфраструктура продукта", moreThanChat: "Больше, чем экран чата.", naturalPart: "Работает как естественная часть веб-, мобильных и корпоративных продуктов.", systemFlow: "Поток системы", controlledResult: "От продукта к контролируемому результату.", usageAreas: "Сценарии использования", customConfigured: "Настраивается для каждого продукта.", tasksDataResponse: "Задачи, доступ к данным и формат ответов определяются потребностями.", officialProductInfo: "Официальная информация о продукте", reliableAi: "Надёжный подход к ИИ.", visibleSources: "PruvAI стремится показывать источники и ясно обозначать неопределённость.", integrationApproach: "Подход к интеграции", addAiWithoutChanging: "Добавьте ИИ, не заменяя существующий продукт.", integrationPlan: "Интеграция планируется с сохранением опыта продукта и границ безопасности.", strengthenWithPruvai: "Усилим ваш продукт с помощью PruvAI.", shareUseCase: "Расскажите о вашем сценарии.",
    contactHeading: "Свяжитесь с PruvaLabs.", contactLead: "Обращайтесь к нам по вопросам PruvAI, систем ИИ, разработки продуктов и сотрудничества.", contactAreas: "Что мы можем обсудить?", aiIntegrations: "PruvAI и интеграции ИИ", webMobileProducts: "Веб- и мобильные продукты", backendApiSystems: "Backend- и API-системы", collaborations: "Продуктовое и технологическое сотрудничество", directContact: "Прямая связь", email: "Электронная почта", sendEmail: "Отправить письмо", socialMedia: "Социальные сети", privacyData: "Конфиденциальность и данные", privacyLead: "До публичного запуска PruvAI объём обработки данных и пользовательские настройки будут опубликованы в ясной форме.", kvkk: "KVKK / Уведомление о данных", chooseChannel: "Свяжитесь с командой PruvaLabs напрямую через удобный вам канал.",
  },
  ja: {
    navHome: "ホーム", navAbout: "私たちについて", navServices: "サービス", navProjects: "プロジェクト", navBlog: "ブログ/ガイド", navContact: "お問い合わせ", privacyPolicy: "プライバシーポリシー", rights: "© 2025 PruvaLabs. All rights reserved.", chooseLanguage: "言語を選択",
    homeLab: "PruvaLabs テクノロジーラボ", homeTitle: "アイデアを強力なデジタル製品へ変えます。", homeLead: "AI、ウェブ、モバイル、バックエンドを一つの製品として開発します。", viewProjects: "プロジェクトを見る", shareProject: "プロジェクトを相談する", expertise: "専門分野", expertiseTitle: "製品のすべてのレイヤーを一緒に構築します。", expertiseLead: "戦略、デザイン、エンジニアリングを一つの製品アプローチに統合します。", featuredProduct: "注目の製品", pruvaiHomeLead: "デジタル製品に統合でき、用途に合わせて調整可能なAI基盤です。", viewPruvai: "PruvAIを見る", productsProjects: "製品とプロジェクト", developedProducts: "私たちが開発する製品。", allProjects: "すべてのプロジェクト →", turnIdeaIntoProduct: "アイデアを実際に動く製品へ変えましょう。", shareWebMobileAi: "ウェブ、モバイル、AI、またはカスタムソフトウェアのプロジェクトについてお聞かせください。", getInTouch: "お問い合わせ",
    blogGuide: "ブログ/ガイド", blogTitle: "企業向けのわかりやすい技術ガイド。", blogLead: "AI、ウェブ、モバイル製品、デジタル運用に関する実践的で最新のわかりやすい情報です。", guides: "ガイド", shortNotes: "短く、明確で、役に立つメモ。", curiousTopic: "知りたいテーマはありますか？", curiousLead: "PruvAI、ウェブサイト、モバイルアプリ、デジタル製品開発についてご連絡ください。実際のニーズに基づいてガイドを作成します。", suggestTopic: "テーマを提案",
    pruvaiBadge: "PruvaLabs の人工知能技術", pruvaiLead: "APIで製品に統合でき、用途に合わせて調整可能なAI基盤です。", discussIntegration: "連携について相談", inspectTechnology: "技術を見る", productInfrastructure: "製品基盤", moreThanChat: "チャット画面だけではありません。", naturalPart: "ウェブ、モバイル、企業向け製品の自然な一部として動作します。", systemFlow: "システムフロー", controlledResult: "製品から制御された結果へ。", usageAreas: "活用領域", customConfigured: "製品ごとに最適化されます。", tasksDataResponse: "タスク、データアクセス、回答形式はニーズに合わせて設定されます。", officialProductInfo: "公式製品情報", reliableAi: "信頼できるAIへのアプローチ。", visibleSources: "PruvAIは情報源を見える形にし、不確実性を明確に示すことを目指します。", integrationApproach: "連携アプローチ", addAiWithoutChanging: "既存製品を置き換えずにAIを追加できます。", integrationPlan: "製品体験とセキュリティ境界を守るように連携を設計します。", strengthenWithPruvai: "PruvAIで製品を強化しましょう。", shareUseCase: "活用方法をお聞かせください。",
    contactHeading: "PruvaLabsへお問い合わせください。", contactLead: "PruvAI、AIシステム、製品開発、協業についてご相談いただけます。", contactAreas: "どのようなご相談ができますか？", aiIntegrations: "PruvAIとAI連携", webMobileProducts: "ウェブ・モバイル製品", backendApiSystems: "バックエンド・APIシステム", collaborations: "製品・技術協業", directContact: "直接連絡", email: "メール", sendEmail: "メールを送る", socialMedia: "ソーシャルメディア", privacyData: "プライバシーとデータ", privacyLead: "PruvAIの一般公開前に、データ処理範囲とユーザー管理機能を明確に公開します。", kvkk: "KVKK / データに関する説明", chooseChannel: "ご都合のよい方法でPruvaLabsチームへ直接ご連絡ください。",
  },
  de: {
    navHome: "Startseite", navAbout: "Über uns", navServices: "Leistungen", navProjects: "Projekte", navBlog: "Blog/Ratgeber", navContact: "Kontakt", privacyPolicy: "Datenschutzrichtlinie", rights: "© 2025 PruvaLabs. Alle Rechte vorbehalten.", chooseLanguage: "Sprache wählen",
    homeLab: "PruvaLabs Technologielabor", homeTitle: "Wir verwandeln Ideen in starke digitale Produkte.", homeLead: "Wir entwickeln künstliche Intelligenz, Web, Mobile und Backend als ein gemeinsames Produkt.", viewProjects: "Projekte ansehen", shareProject: "Projekt teilen", expertise: "Kompetenzbereiche", expertiseTitle: "Wir entwickeln jede Produktschicht gemeinsam.", expertiseLead: "Wir verbinden Strategie, Design und Engineering in einem Produktansatz.", featuredProduct: "Ausgewähltes Produkt", pruvaiHomeLead: "Anpassbare KI-Infrastruktur, die in digitale Produkte integriert wird.", viewPruvai: "PruvAI entdecken", productsProjects: "Produkte und Projekte", developedProducts: "Produkte, die wir entwickeln.", allProjects: "Alle Projekte →", turnIdeaIntoProduct: "Machen wir aus Ihrer Idee ein funktionierendes Produkt.", shareWebMobileAi: "Erzählen Sie uns von Ihrem Web-, Mobile-, KI- oder individuellen Softwareprojekt.", getInTouch: "Kontakt aufnehmen",
    blogGuide: "Blog/Ratgeber", blogTitle: "Klare Technologie-Ratgeber für Unternehmen.", blogLead: "Praktische, aktuelle und leicht verständliche Inhalte zu KI, Web, mobilen Produkten und digitalen Abläufen.", guides: "Ratgeber", shortNotes: "Kurz, klar und nützlich.", curiousTopic: "Interessiert Sie ein bestimmtes Thema?", curiousLead: "Schreiben Sie uns über PruvAI, Websites, mobile Apps oder digitale Produktentwicklung. Unsere Ratgeber orientieren sich an realen Bedürfnissen.", suggestTopic: "Thema vorschlagen",
    pruvaiBadge: "Künstliche Intelligenz von PruvaLabs", pruvaiLead: "Anpassbare KI-Infrastruktur, die per API in Produkte integriert wird.", discussIntegration: "Integration besprechen", inspectTechnology: "Technologie entdecken", productInfrastructure: "Produktinfrastruktur", moreThanChat: "Mehr als ein Chatfenster.", naturalPart: "Funktioniert als natürlicher Bestandteil von Web-, Mobile- und Unternehmensprodukten.", systemFlow: "Systemablauf", controlledResult: "Vom Produkt zum kontrollierten Ergebnis.", usageAreas: "Einsatzbereiche", customConfigured: "Für jedes Produkt individuell konfiguriert.", tasksDataResponse: "Aufgaben, Datenzugriff und Antwortformat werden nach Bedarf festgelegt.", officialProductInfo: "Offizielle Produktinformationen", reliableAi: "Ein verlässlicher KI-Ansatz.", visibleSources: "PruvAI macht Quellen sichtbar und weist klar auf Unsicherheiten hin.", integrationApproach: "Integrationsansatz", addAiWithoutChanging: "KI hinzufügen, ohne das bestehende Produkt zu ersetzen.", integrationPlan: "Die Integration schützt Produkterlebnis und Sicherheitsgrenzen.", strengthenWithPruvai: "Stärken wir Ihr Produkt mit PruvAI.", shareUseCase: "Teilen Sie Ihren Anwendungsfall.",
    contactHeading: "Kontaktieren Sie PruvaLabs.", contactLead: "Sprechen Sie mit uns über PruvAI, KI-Systeme, Produktentwicklung und Kooperationen.", contactAreas: "Worüber können wir sprechen?", aiIntegrations: "PruvAI- und KI-Integrationen", webMobileProducts: "Web- und Mobile-Produkte", backendApiSystems: "Backend- und API-Systeme", collaborations: "Produkt- und Technologiekooperationen", directContact: "Direkter Kontakt", email: "E-Mail", sendEmail: "E-Mail senden", socialMedia: "Soziale Medien", privacyData: "Datenschutz und Daten", privacyLead: "Vor der öffentlichen Freigabe von PruvAI werden Umfang der Datenverarbeitung und Nutzerkontrollen klar veröffentlicht.", kvkk: "KVKK / Datenhinweis", chooseChannel: "Kontaktieren Sie das PruvaLabs-Team direkt über den für Sie passenden Kanal.",
  },
  fr: {
    navHome: "Accueil", navAbout: "À propos", navServices: "Services", navProjects: "Projets", navBlog: "Blog/Guides", navContact: "Contact", privacyPolicy: "Politique de confidentialité", rights: "© 2025 PruvaLabs. Tous droits réservés.", chooseLanguage: "Choisir la langue",
    homeLab: "Laboratoire technologique PruvaLabs", homeTitle: "Nous transformons les idées en produits numériques solides.", homeLead: "Nous développons l’intelligence artificielle, le web, le mobile et le backend comme un produit unique.", viewProjects: "Voir les projets", shareProject: "Partager votre projet", expertise: "Domaines d’expertise", expertiseTitle: "Nous développons ensemble chaque couche du produit.", expertiseLead: "Nous réunissons stratégie, design et ingénierie dans une même approche produit.", featuredProduct: "Produit à la une", pruvaiHomeLead: "Infrastructure d’IA adaptable et intégrée aux produits numériques.", viewPruvai: "Découvrir PruvAI", productsProjects: "Produits et projets", developedProducts: "Les produits que nous développons.", allProjects: "Tous les projets →", turnIdeaIntoProduct: "Transformons votre idée en produit fonctionnel.", shareWebMobileAi: "Parlez-nous de votre projet web, mobile, IA ou logiciel sur mesure.", getInTouch: "Nous contacter",
    blogGuide: "Blog/Guides", blogTitle: "Des guides technologiques clairs pour les entreprises.", blogLead: "Des contenus pratiques, actuels et faciles à comprendre sur l’IA, le web, les produits mobiles et les opérations numériques.", guides: "Guides", shortNotes: "Des notes courtes, claires et utiles.", curiousTopic: "Un sujet vous intéresse ?", curiousLead: "Écrivez-nous au sujet de PruvAI, des sites web, des applications mobiles ou du développement de produits numériques. Nous préparons nos guides selon des besoins réels.", suggestTopic: "Proposer un sujet",
    pruvaiBadge: "Technologie d’intelligence artificielle PruvaLabs", pruvaiLead: "Infrastructure d’IA adaptable et intégrée aux produits par API.", discussIntegration: "Parler de l’intégration", inspectTechnology: "Découvrir la technologie", productInfrastructure: "Infrastructure produit", moreThanChat: "Bien plus qu’un écran de discussion.", naturalPart: "Fonctionne comme une partie naturelle des produits web, mobiles et d’entreprise.", systemFlow: "Flux du système", controlledResult: "Du produit à un résultat contrôlé.", usageAreas: "Cas d’usage", customConfigured: "Configuré pour chaque produit.", tasksDataResponse: "Les tâches, l’accès aux données et le format des réponses sont définis selon le besoin.", officialProductInfo: "Informations officielles du produit", reliableAi: "Une approche fiable de l’IA.", visibleSources: "PruvAI vise à rendre les sources visibles et à exprimer clairement l’incertitude.", integrationApproach: "Approche d’intégration", addAiWithoutChanging: "Ajoutez l’IA sans remplacer votre produit existant.", integrationPlan: "L’intégration est planifiée pour protéger l’expérience produit et les limites de sécurité.", strengthenWithPruvai: "Renforçons votre produit avec PruvAI.", shareUseCase: "Partagez votre cas d’usage.",
    contactHeading: "Contactez PruvaLabs.", contactLead: "Contactez-nous au sujet de PruvAI, des systèmes d’IA, du développement produit et des collaborations.", contactAreas: "De quoi pouvons-nous parler ?", aiIntegrations: "PruvAI et intégrations d’IA", webMobileProducts: "Produits web et mobiles", backendApiSystems: "Systèmes backend et API", collaborations: "Collaborations produit et technologie", directContact: "Contact direct", email: "E-mail", sendEmail: "Envoyer un e-mail", socialMedia: "Réseaux sociaux", privacyData: "Confidentialité et données", privacyLead: "Avant l’ouverture publique de PruvAI, le périmètre du traitement des données et les contrôles utilisateur seront publiés clairement.", kvkk: "KVKK / Notice sur les données", chooseChannel: "Contactez directement l’équipe PruvaLabs par le canal qui vous convient.",
  },
  ur: {
    navHome: "ہوم", navAbout: "ہمارے بارے میں", navServices: "خدمات", navProjects: "منصوبے", navBlog: "بلاگ/رہنما", navContact: "رابطہ", privacyPolicy: "رازداری کی پالیسی", rights: "© 2025 PruvaLabs. جملہ حقوق محفوظ ہیں۔", chooseLanguage: "زبان منتخب کریں",
    homeLab: "PruvaLabs ٹیکنالوجی لیبارٹری", homeTitle: "ہم خیالات کو مضبوط ڈیجیٹل مصنوعات میں بدلتے ہیں۔", homeLead: "ہم مصنوعی ذہانت، ویب، موبائل اور بیک اینڈ نظام کو ایک پروڈکٹ کے طور پر تیار کرتے ہیں۔", viewProjects: "منصوبے دیکھیں", shareProject: "اپنا منصوبہ شیئر کریں", expertise: "مہارت کے شعبے", expertiseTitle: "ہم پروڈکٹ کی ہر سطح مل کر بناتے ہیں۔", expertiseLead: "ہم حکمتِ عملی، ڈیزائن اور انجینئرنگ کو ایک پروڈکٹ طریقۂ کار میں یکجا کرتے ہیں۔", featuredProduct: "نمایاں پروڈکٹ", pruvaiHomeLead: "ڈیجیٹل مصنوعات میں مربوط اور ضرورت کے مطابق ڈھلنے والا اے آئی ڈھانچہ۔", viewPruvai: "PruvAI دیکھیں", productsProjects: "مصنوعات اور منصوبے", developedProducts: "ہماری تیار کردہ مصنوعات۔", allProjects: "تمام منصوبے ←", turnIdeaIntoProduct: "آئیے آپ کے خیال کو کام کرنے والی پروڈکٹ میں بدلیں۔", shareWebMobileAi: "اپنے ویب، موبائل، اے آئی یا کسٹم سافٹ ویئر منصوبے کے بارے میں بتائیں۔", getInTouch: "رابطہ کریں",
    blogGuide: "بلاگ/رہنما", blogTitle: "کاروبار کے لیے واضح ٹیکنالوجی رہنمائی۔", blogLead: "اے آئی، ویب، موبائل مصنوعات اور ڈیجیٹل آپریشنز کے بارے میں عملی، تازہ اور آسان مواد۔", guides: "رہنما", shortNotes: "مختصر، واضح اور مفید نوٹس۔", curiousTopic: "کیا آپ کسی موضوع کے بارے میں جاننا چاہتے ہیں؟", curiousLead: "PruvAI، ویب سائٹس، موبائل ایپس یا ڈیجیٹل پروڈکٹ ڈیولپمنٹ کے بارے میں ہمیں لکھیں۔ ہم حقیقی ضرورتوں کے مطابق رہنما تیار کرتے ہیں۔", suggestTopic: "موضوع تجویز کریں",
    pruvaiBadge: "PruvaLabs مصنوعی ذہانت ٹیکنالوجی", pruvaiLead: "API کے ذریعے مصنوعات میں مربوط اور ضرورت کے مطابق ڈھلنے والا اے آئی ڈھانچہ۔", discussIntegration: "انضمام پر بات کریں", inspectTechnology: "ٹیکنالوجی دیکھیں", productInfrastructure: "پروڈکٹ انفراسٹرکچر", moreThanChat: "صرف چیٹ اسکرین سے کہیں زیادہ۔", naturalPart: "ویب، موبائل اور ادارہ جاتی مصنوعات کے قدرتی حصے کے طور پر کام کرتا ہے۔", systemFlow: "سسٹم فلو", controlledResult: "پروڈکٹ سے قابو شدہ نتیجے تک۔", usageAreas: "استعمال کے شعبے", customConfigured: "ہر پروڈکٹ کے لیے مخصوص ترتیب۔", tasksDataResponse: "کام، ڈیٹا رسائی اور جواب کی شکل ضرورت کے مطابق طے کی جاتی ہے۔", officialProductInfo: "سرکاری پروڈکٹ معلومات", reliableAi: "قابلِ اعتماد اے آئی طریقہ۔", visibleSources: "PruvAI ذرائع کو نمایاں رکھنے اور غیر یقینی صورتِ حال واضح کرنے کا ہدف رکھتا ہے۔", integrationApproach: "انضمام کا طریقہ", addAiWithoutChanging: "موجودہ پروڈکٹ بدلے بغیر اے آئی شامل کریں۔", integrationPlan: "انضمام کی منصوبہ بندی پروڈکٹ تجربے اور سیکیورٹی حدود کی حفاظت کے لیے کی جاتی ہے۔", strengthenWithPruvai: "PruvAI کے ساتھ اپنی پروڈکٹ مضبوط بنائیں۔", shareUseCase: "اپنا استعمال شیئر کریں۔",
    contactHeading: "PruvaLabs سے رابطہ کریں۔", contactLead: "PruvAI، اے آئی سسٹمز، پروڈکٹ ڈیولپمنٹ اور تعاون کے لیے ہم سے رابطہ کریں۔", contactAreas: "ہم کن موضوعات پر بات کر سکتے ہیں؟", aiIntegrations: "PruvAI اور اے آئی انضمام", webMobileProducts: "ویب اور موبائل مصنوعات", backendApiSystems: "بیک اینڈ اور API نظام", collaborations: "پروڈکٹ اور ٹیکنالوجی تعاون", directContact: "براہِ راست رابطہ", email: "ای میل", sendEmail: "ای میل بھیجیں", socialMedia: "سوشل میڈیا", privacyData: "رازداری اور ڈیٹا", privacyLead: "PruvAI کو عوام کے لیے کھولنے سے پہلے ڈیٹا پروسیسنگ کا دائرہ اور صارف کنٹرول واضح طور پر شائع کیے جائیں گے۔", kvkk: "KVKK / ڈیٹا نوٹس", chooseChannel: "اپنی سہولت کے چینل سے PruvaLabs ٹیم سے براہِ راست رابطہ کریں۔",
  },
  id: {
    navHome: "Beranda", navAbout: "Tentang", navServices: "Layanan", navProjects: "Proyek", navBlog: "Blog/Panduan", navContact: "Kontak", privacyPolicy: "Kebijakan Privasi", rights: "© 2025 PruvaLabs. Seluruh hak dilindungi.", chooseLanguage: "Pilih bahasa",
    homeLab: "Laboratorium teknologi PruvaLabs", homeTitle: "Kami mengubah ide menjadi produk digital yang kuat.", homeLead: "Kami membangun kecerdasan buatan, web, mobile, dan backend sebagai satu produk.", viewProjects: "Lihat proyek", shareProject: "Bagikan proyek Anda", expertise: "Bidang keahlian", expertiseTitle: "Kami membangun setiap lapisan produk bersama-sama.", expertiseLead: "Kami menyatukan strategi, desain, dan rekayasa dalam satu pendekatan produk.", featuredProduct: "Produk unggulan", pruvaiHomeLead: "Infrastruktur AI yang dapat disesuaikan dan terintegrasi ke produk digital.", viewPruvai: "Jelajahi PruvAI", productsProjects: "Produk dan proyek", developedProducts: "Produk yang kami bangun.", allProjects: "Semua proyek →", turnIdeaIntoProduct: "Mari ubah ide Anda menjadi produk yang bekerja.", shareWebMobileAi: "Ceritakan proyek web, mobile, AI, atau perangkat lunak khusus Anda.", getInTouch: "Hubungi kami",
    blogGuide: "Blog/Panduan", blogTitle: "Panduan teknologi yang jelas untuk bisnis.", blogLead: "Konten praktis, terbaru, dan mudah dipahami tentang AI, web, produk mobile, dan operasi digital.", guides: "Panduan", shortNotes: "Catatan singkat, jelas, dan berguna.", curiousTopic: "Ada topik yang ingin Anda ketahui?", curiousLead: "Tulis kepada kami tentang PruvAI, situs web, aplikasi mobile, atau pengembangan produk digital. Kami menyiapkan panduan berdasarkan kebutuhan nyata.", suggestTopic: "Sarankan topik",
    pruvaiBadge: "Teknologi kecerdasan buatan PruvaLabs", pruvaiLead: "Infrastruktur AI yang dapat disesuaikan dan terintegrasi ke produk melalui API.", discussIntegration: "Bahas integrasi", inspectTechnology: "Jelajahi teknologi", productInfrastructure: "Infrastruktur produk", moreThanChat: "Lebih dari sekadar layar percakapan.", naturalPart: "Bekerja sebagai bagian alami dari produk web, mobile, dan perusahaan.", systemFlow: "Alur sistem", controlledResult: "Dari produk menuju hasil yang terkendali.", usageAreas: "Area penggunaan", customConfigured: "Dikonfigurasi khusus untuk setiap produk.", tasksDataResponse: "Tugas, akses data, dan format jawaban ditentukan sesuai kebutuhan.", officialProductInfo: "Informasi produk resmi", reliableAi: "Pendekatan AI yang dapat dipercaya.", visibleSources: "PruvAI bertujuan menampilkan sumber dan menyatakan ketidakpastian dengan jelas.", integrationApproach: "Pendekatan integrasi", addAiWithoutChanging: "Tambahkan AI tanpa mengganti produk yang sudah ada.", integrationPlan: "Integrasi direncanakan untuk melindungi pengalaman produk dan batas keamanan.", strengthenWithPruvai: "Perkuat produk Anda dengan PruvAI.", shareUseCase: "Bagikan skenario penggunaan Anda.",
    contactHeading: "Hubungi PruvaLabs.", contactLead: "Hubungi kami mengenai PruvAI, sistem AI, pengembangan produk, dan kolaborasi.", contactAreas: "Apa yang dapat kita bahas?", aiIntegrations: "PruvAI dan integrasi AI", webMobileProducts: "Produk web dan mobile", backendApiSystems: "Sistem backend dan API", collaborations: "Kolaborasi produk dan teknologi", directContact: "Kontak langsung", email: "Email", sendEmail: "Kirim email", socialMedia: "Media sosial", privacyData: "Privasi dan data", privacyLead: "Sebelum PruvAI tersedia untuk publik, cakupan pemrosesan data dan kontrol pengguna akan dipublikasikan dengan jelas.", kvkk: "KVKK / Pemberitahuan Data", chooseChannel: "Hubungi tim PruvaLabs secara langsung melalui kanal yang paling sesuai bagi Anda.",
  },
};

const textSources = new WeakMap<Text, string>();
const attributeSources = new WeakMap<Element, Map<string, string>>();
const translatedAttributes = ["aria-label", "title", "placeholder", "alt"] as const;

function normalizeText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function preserveWhitespace(original: string, translated: string) {
  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";
  return `${leading}${translated}${trailing}`;
}

function isExcluded(node: Node) {
  const element = node.nodeType === Node.ELEMENT_NODE ? (node as Element) : node.parentElement;
  if (!element) return false;
  return Boolean(
    element.closest(
      "script, style, noscript, code, pre, svg, [data-no-translate], [data-language-ui]",
    ),
  );
}

function buildMap(locale: Locale) {
  const table = locale === "tr" ? null : locale === "en" ? en : translations[locale];
  const map = new Map<string, string>();
  (Object.keys(source) as TranslationKey[]).forEach((key) => {
    map.set(normalizeText(source[key]), table?.[key] ?? source[key]);
  });
  return map;
}

function translateTree(root: ParentNode, locale: Locale) {
  const map = buildMap(locale);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  let current = walker.nextNode();
  while (current) {
    textNodes.push(current as Text);
    current = walker.nextNode();
  }

  textNodes.forEach((node) => {
    if (isExcluded(node)) return;
    const currentValue = node.nodeValue ?? "";
    if (!textSources.has(node)) textSources.set(node, currentValue);
    const original = textSources.get(node) ?? currentValue;
    const translated = map.get(normalizeText(original));
    const nextValue = translated ? preserveWhitespace(original, translated) : original;
    if (node.nodeValue !== nextValue) node.nodeValue = nextValue;
  });

  root.querySelectorAll?.("*").forEach((element) => {
    if (isExcluded(element)) return;
    let originals = attributeSources.get(element);
    if (!originals) {
      originals = new Map<string, string>();
      attributeSources.set(element, originals);
    }

    translatedAttributes.forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (value === null) return;
      if (!originals?.has(attribute)) originals?.set(attribute, value);
      const original = originals?.get(attribute) ?? value;
      const translated = map.get(normalizeText(original)) ?? original;
      if (value !== translated) element.setAttribute(attribute, translated);
    });
  });
}

function isLocale(value: string | null): value is Locale {
  return languages.some((language) => language.code === value);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("tr");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) setLocaleState(stored);
  }, []);

  useEffect(() => {
    const language = languages.find((item) => item.code === locale) ?? languages[0];
    document.documentElement.lang = locale;
    document.documentElement.dir = language.direction;
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.cookie = `${COOKIE_KEY}=${locale}; path=/; max-age=31536000; SameSite=Lax`;

    const root = document.body;
    let scheduled = false;
    const observer = new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(() => {
        observer.disconnect();
        translateTree(root, locale);
        observer.observe(root, { childList: true, subtree: true, characterData: true });
        scheduled = false;
      });
    });

    translateTree(root, locale);
    observer.observe(root, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale: setLocaleState }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("LanguageSwitcher must be used inside LanguageProvider");
  return context;
}

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const current = languages.find((item) => item.code === locale) ?? languages[0];
  const label = locale === "tr" ? source.chooseLanguage : locale === "en" ? en.chooseLanguage : translations[locale].chooseLanguage;

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative" data-language-ui>
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-sky-200 hover:bg-white hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
      >
        <span aria-hidden="true" className="text-base leading-none">{current.flag}</span>
        <span className="max-w-24 truncate">{current.name}</span>
        <svg aria-hidden="true" viewBox="0 0 20 20" className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="m5 7.5 5 5 5-5" />
        </svg>
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-label={label}
          className="absolute right-0 top-[calc(100%+0.65rem)] z-[90] max-h-[min(70vh,32rem)] w-64 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-300/50"
        >
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              role="menuitemradio"
              aria-checked={language.code === locale}
              onClick={() => {
                setLocale(language.code);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
                language.code === locale
                  ? "bg-sky-50 font-bold text-sky-800"
                  : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              <span aria-hidden="true" className="text-lg leading-none">{language.flag}</span>
              <span className="flex-1">{language.name}</span>
              {language.code === locale ? <span aria-hidden="true" className="text-sky-600">✓</span> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
