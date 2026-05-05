const services = [
  {
    title: 'Web Sitesi Geliştirme',
    text: 'Kurumsal web siteleri, ürün tanıtım sayfaları, landing page yapıları ve kişisel/marka blogları geliştiriyoruz.',
  },
  {
    title: 'Mobil Uygulama',
    text: 'Flutter odaklı Android ve iOS uygulamaları, oyun prototipleri ve mobil öncelikli dijital ürünler tasarlıyoruz.',
  },
  {
    title: 'AI & Otomasyon',
    text: 'Yapay zekâ destekli içerik, raporlama, müşteri akışı, veri işleme ve operasyon otomasyonları kurguluyoruz.',
  },
  {
    title: 'Yönetim Panelleri',
    text: 'Admin panel, müşteri paneli, sipariş/operasyon ekranları ve ekiplerin günlük işini kolaylaştıran araçlar hazırlıyoruz.',
  },
  {
    title: 'Veri & Dashboard',
    text: 'Excel, veri analizi, performans göstergeleri ve karar destek dashboardları ile veriyi okunur hale getiriyoruz.',
  },
  {
    title: 'Ürün Prototipleme',
    text: 'Fikirden MVP’ye giden yolu sadeleştiriyor; hızlı, test edilebilir ve geliştirilebilir ilk sürümleri oluşturuyoruz.',
  },
];

const products = [
  {
    title: 'Mali Pruva',
    label: 'Finans / Raporlama',
    text: 'Finansal süreçleri sadeleştiren, raporlamayı hızlandıran ve ekiplerin doğru veriye anında erişmesini hedefleyen ürün yaklaşımımız.',
    tags: ['Raporlama', 'Dashboard', 'Operasyon'],
  },
  {
    title: 'TwoGether',
    label: 'Online Oyun / Mobil',
    text: 'Çok dilli, iki kişilik online arena deneyimi. Oda kodu, arkadaş daveti, bot modu ve gerçek zamanlı mini oyun mantığıyla geliştiriliyor.',
    tags: ['Flutter', 'Online Multiplayer', 'Çok Dilli'],
  },
];

const caseStudies = [
  {
    title: 'TwoGether – İki Kişilik Online Arena',
    text: 'Mobil öncelikli oyun deneyimi, oda sistemi, davet akışı, bot modu ve ölçeklenebilir gerçek zamanlı altyapı planı.',
  },
  {
    title: 'Mali Pruva – Finansal Takip Yaklaşımı',
    text: 'Finansal görünürlük, sade raporlama ve operasyon ekipleri için hızlı karar destek ekranları.',
  },
  {
    title: 'PruvaLabs Web Platformu',
    text: 'Marka, ürünler, hizmetler, blog ve iletişim akışını tek sayfada anlatan modern kurumsal web yapısı.',
  },
];

const processSteps = [
  ['01', 'Fikri Anlıyoruz', 'Hedef kullanıcıyı, problemi ve ürünün ana amacını netleştiriyoruz.'],
  ['02', 'Rotayı Tasarlıyoruz', 'Arayüz, içerik, teknik mimari ve yayın planını sade bir yol haritasına çeviriyoruz.'],
  ['03', 'Geliştiriyoruz', 'Web, mobil, AI, panel veya otomasyon çözümünü çalışan ürüne dönüştürüyoruz.'],
  ['04', 'Yayına Alıyoruz', 'Domain, hosting, test, performans ve temel güvenlik kontrolleriyle ürünü yayına hazırlıyoruz.'],
];

const blogIdeas = [
  'AI ile küçük işletmeler için otomasyon fikirleri',
  'Flutter ile mobil uygulama geliştirirken dikkat edilmesi gerekenler',
  'Firebase ve Supabase maliyetlerini kontrol altında tutma',
  'Bir fikri MVP’ye dönüştürme süreci',
];

const privacyPolicySections = [
  {
    title: '1. Toplanan Bilgiler',
    paragraphs: ['Kullandığınız ürüne veya hizmete bağlı olarak aşağıdaki türlerde bilgiler toplanabilir:'],
    bullets: [
      'Kullanıcı tarafından sağlanan bilgiler — Örneğin ad, e-posta adresi, geri bildirim veya iletişim bilgileri.',
      'Uygulama kullanım bilgileri — Örneğin uygulama içi etkileşimler, tercih ayarları, hata kayıtları ve performans verileri.',
      'Cihaz ve teknik bilgiler — Örneğin cihaz modeli, işletim sistemi, uygulama sürümü ve dil bilgisi.',
    ],
    footer:
      'PruvaLAbs., yalnızca hizmetin sunulması, geliştirilmesi, güvenliğinin sağlanması ve kullanıcı deneyiminin iyileştirilmesi için gerekli verileri işlemeyi hedefler.',
  },
  {
    title: '2. Bilgilerin Kullanımı',
    paragraphs: ['Toplanan bilgiler aşağıdaki amaçlarla kullanılabilir:'],
    bullets: [
      'Hizmetleri sunmak ve çalıştırmak',
      'Uygulama performansını geliştirmek',
      'Hataları tespit etmek ve gidermek',
      'Kullanıcı desteği sağlamak',
      'Güvenlik, kötüye kullanım önleme ve sistem bütünlüğünü korumak',
      'Yasal yükümlülükleri yerine getirmek',
    ],
  },
  {
    title: '3. Veri Paylaşımı',
    paragraphs: [
      'PruvaLAbs., kullanıcı verilerini satmaz.',
      'Gerekli durumlarda veriler altyapı, analitik, hata izleme veya yasal yükümlülükler kapsamında ilgili taraflarla paylaşılabilir.',
    ],
  },
  {
    title: '4. Veri Saklama',
    paragraphs: [
      'Veriler, toplama amacının gerektirdiği süre boyunca veya yasal yükümlülüklerin gerektirdiği ölçüde saklanır. Gereklilik ortadan kalktığında silinir, anonimleştirilir veya güvenli şekilde imha edilir.',
    ],
  },
  {
    title: '5. Veri Güvenliği',
    paragraphs: [
      'PruvaLAbs., kişisel verilerin yetkisiz erişim, değiştirme, ifşa veya yok edilmesine karşı korunması için makul teknik ve idari önlemler uygular.',
    ],
  },
  {
    title: '6. Çocukların Gizliliği',
    paragraphs: [
      'PruvaLAbs. ürünleri genel olarak çocuklara yönelik değildir. Bilerek çocuklardan kişisel veri toplama hedeflenmez. Böyle bir durum tespit edilirse ilgili veriler silinmek üzere işleme alınır.',
    ],
  },
  {
    title: '7. Üçüncü Taraf Hizmetler',
    paragraphs: [
      'Ürünlerimiz bazı üçüncü taraf hizmetleri, bağlantıları veya altyapıları içerebilir. Bu hizmetlerin gizlilik uygulamalarından ilgili üçüncü taraflar sorumludur.',
    ],
  },
  {
    title: '8. Kullanıcı Hakları',
    paragraphs: ['Geçerli mevzuata bağlı olarak kullanıcılar bilgi talep etme, düzeltme, silme ve itiraz haklarına sahip olabilir.'],
  },
  {
    title: '9. Politika Değişiklikleri',
    paragraphs: ['Bu Gizlilik Politikası zaman zaman güncellenebilir. Güncel sürüm bu sayfada yayımlanır.'],
  },
  {
    title: '10. İletişim',
    paragraphs: ['Gizlilik Politikası ile ilgili sorularınız için bizimle iletişime geçebilirsiniz.'],
    bullets: ['E-posta: pruvalabs@gmail.com', 'Instagram: https://instagram.com/pruvalabs'],
  },
];

function Header() {
  return (
    <nav className="top-nav" aria-label="Ana menü">
      <a className="brand" href="/" aria-label="PruvaLAbs ana sayfa">
        <img className="brand-logo" src="/pruvalabs-logo.png" alt="PruvaLAbs logosu" />
        <span className="brand-text">PruvaLAbs.</span>
      </a>
      <div className="nav-links">
        <a href="/#hizmetler">Hizmetler</a>
        <a href="/#urunlerimiz">Ürünler</a>
        <a href="/#projeler">Projeler</a>
        <a href="/#blog">Blog</a>
        <a href="/gizlilik-politikasi">Gizlilik</a>
        <a href="/#iletisim">İletişim</a>
      </div>
    </nav>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <header className="hero">
        <Header />
        <div className="hero-grid">
          <div className="hero-content">
            <p className="eyebrow">AI destekli yazılım stüdyosu</p>
            <h1>Web, mobil uygulama, AI ve dijital ürün geliştirme.</h1>
            <p className="tagline">
              PruvaLabs; fikirleri prototipe, prototipleri çalışan ürüne dönüştüren modern bir yazılım ve ürün laboratuvarıdır.
            </p>
            <div className="hero-actions">
              <a className="cta" href="#iletisim">Projeni Anlat</a>
              <a className="secondary-cta" href="#urunlerimiz">Ürünleri İncele</a>
            </div>
          </div>
          <aside className="hero-panel" aria-label="PruvaLabs yetenekleri">
            <span>Web Sitesi</span>
            <span>Mobil App</span>
            <span>AI Otomasyon</span>
            <span>Dashboard</span>
            <span>Oyun & MVP</span>
            <span>Ürün Tasarımı</span>
          </aside>
        </div>
      </header>

      <main>
        <section id="hakkimizda" className="content-card split-card">
          <div>
            <p className="eyebrow">Hakkımızda</p>
            <h2>Strateji, tasarım ve mühendisliği aynı masada topluyoruz.</h2>
          </div>
          <p>
            PruvaLabs; web siteleri, kişisel/kurumsal bloglar, mobil uygulamalar, AI destekli araçlar, yönetim panelleri ve ölçeklenebilir ürün prototipleri geliştirir. Amacımız sade görünen ama güçlü çalışan dijital ürünler üretmek.
          </p>
        </section>

        <section id="hizmetler" className="section-block">
          <SectionIntro
            eyebrow="Hizmetler"
            title="İhtiyaca göre ürün, panel, otomasyon veya web deneyimi."
            text="Her projede önce hedefi netleştirir, sonra hızlı ve sürdürülebilir bir geliştirme rotası çıkarırız."
          />
          <div className="card-grid services-grid">
            {services.map((service) => (
              <article className="mini-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="urunlerimiz" className="section-block">
          <SectionIntro
            eyebrow="Ürünlerimiz"
            title="Kendi ürünlerimizle gerçek kullanım senaryoları geliştiriyoruz."
            text="Sadece hizmet üretmiyor, aynı zamanda kendi ürünlerimiz üzerinden mobil, web, veri ve gerçek zamanlı sistemler geliştiriyoruz."
          />
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.title}>
                <p className="product-label">{product.label}</p>
                <h3>{product.title}</h3>
                <p>{product.text}</p>
                <div className="tag-row">
                  {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projeler" className="section-block">
          <SectionIntro
            eyebrow="Projeler / Case Study"
            title="Yaptıklarımızı somut ürün alanlarına dönüştürüyoruz."
            text="Her çalışma, ileride geliştirilebilir bir ürün temeli ve net bir kullanıcı deneyimi hedefiyle ele alınır."
          />
          <div className="case-list">
            {caseStudies.map((item) => (
              <article className="case-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="surec" className="section-block process-block">
          <SectionIntro
            eyebrow="Çalışma Sürecimiz"
            title="Fikirden yayına sade ve kontrollü ilerleriz."
            text="Karmaşık teknik süreçleri anlaşılır adımlara böler, çalışan sistemi bozmadan geliştirmeyi hedefleriz."
          />
          <div className="process-grid">
            {processSteps.map(([number, title, text]) => (
              <article className="process-step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="blog" className="section-block blog-block">
          <SectionIntro
            eyebrow="Blog / İçerikler"
            title="AI, kodlama ve ürün geliştirme üzerine notlar."
            text="Blog alanı; hem PruvaLabs’ın bilgi birikimini göstermek hem de arama görünürlüğünü güçlendirmek için kullanılacak."
          />
          <div className="blog-list">
            {blogIdeas.map((idea) => <span key={idea}>{idea}</span>)}
          </div>
        </section>

        <section id="iletisim" className="contact-cta">
          <div>
            <p className="eyebrow">İletişim</p>
            <h2>Yeni bir web sitesi, uygulama veya AI fikrin mi var?</h2>
            <p>Kısa bir keşif görüşmesiyle hedefi, kapsamı ve ilk yayın rotasını birlikte netleştirelim.</p>
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

function PrivacyPolicyPage() {
  return (
    <main className="policy-page">
      <section className="hero policy-hero">
        <Header />
        <div className="policy-intro">
          <h1>Gizlilik Politikası</h1>
          <p>Son güncelleme: 27 Nisan 2026</p>
          <p>
            PruvaLAbs. (“biz”, “bizim” veya “Şirket”), geliştirdiği web siteleri, mobil uygulamalar ve diğer dijital ürünler kapsamında kullanıcı gizliliğine önem verir.
          </p>
        </div>
      </section>

      <section className="policy-content content-card">
        {privacyPolicySections.map((item) => (
          <article key={item.title} className="policy-block">
            <h2>{item.title}</h2>
            {item.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {item.bullets?.length ? (
              <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            ) : null}
            {item.footer ? <p>{item.footer}</p> : null}
          </article>
        ))}
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="footer-brand">PruvaLAbs.</p>
        <p className="footer-text">© 2026 PruvaLAbs. Tüm hakları saklıdır.</p>
      </div>
      <div className="footer-links">
        <a href="mailto:pruvalabs@gmail.com">pruvalabs@gmail.com</a>
        <a href="/gizlilik-politikasi">Gizlilik Politikası</a>
      </div>
    </footer>
  );
}

function App() {
  const isPrivacyPage = window.location.pathname === '/gizlilik-politikasi';

  return (
    <div className="site-shell">
      {isPrivacyPage ? <PrivacyPolicyPage /> : <HomePage />}
      <Footer />
    </div>
  );
}

export default App;
