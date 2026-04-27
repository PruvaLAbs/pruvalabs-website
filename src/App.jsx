const homeSections = [
  {
    id: 'hakkimizda',
    title: 'Hakkımızda',
    content:
      'PruvaLAbs., strateji ile mühendisliği aynı masada buluşturan bir yazılım stüdyosudur. Hedefimiz, doğru ürün kararlarını hızlı ve sürdürülebilir şekilde hayata geçirmektir.',
  },
  {
    id: 'urunlerimiz',
    title: 'Ürünlerimiz',
    content:
      'B2B platformlar, operasyonel paneller ve müşteri deneyimi odaklı uygulamalar geliştiriyoruz. Her ürün; performans, güvenlik ve ölçeklenebilirlik ilkeleriyle tasarlanır.',
  },
  {
    id: 'mali-pruva',
    title: 'Mali Pruva',
    content:
      'Finansal süreçleri sadeleştiren, raporlamayı hızlandıran ve ekiplerin doğru veriye anında erişmesini sağlayan çözüm yaklaşımımızdır.',
  },
  {
    id: 'twogether',
    title: 'Twogether',
    content:
      'Ekip içi koordinasyonu artıran, iletişim akışını güçlendiren ve ortak hedeflere odaklanmayı kolaylaştıran iş birliği ürün ailesidir.',
  },
  {
    id: 'teknoloji',
    title: 'Teknoloji / AI / Kodlama',
    content:
      'Modern web mimarileri, üretken yapay zekâ entegrasyonları ve temiz kod prensipleriyle, fikirden canlı ürüne kadar uçtan uca teknik rehberlik sunuyoruz.',
  },
];

const X_PROFILE_URL = 'https://x.com/pruvalabs';

const privacyPolicySections = [
  {
    title: '1. Toplanan Bilgiler',
    paragraphs: [
      'Kullandığınız ürüne veya hizmete bağlı olarak aşağıdaki türlerde bilgiler toplanabilir:',
    ],
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
      'Gerekli durumlarda veriler aşağıdaki taraflarla paylaşılabilir:',
    ],
    bullets: [
      'Altyapı ve teknik hizmet sağlayıcıları',
      'Analitik veya hata izleme hizmetleri',
      'Yasal yükümlülükler kapsamında yetkili kamu kurumları',
    ],
    footer:
      'Bu tür paylaşımlar yalnızca hizmetin sunulması, güvenliğin sağlanması veya yasal gerekliliklerin yerine getirilmesi amacıyla yapılır.',
  },
  {
    title: '4. Veri Saklama',
    paragraphs: [
      'Veriler, toplama amacının gerektirdiği süre boyunca veya yasal yükümlülüklerin gerektirdiği ölçüde saklanır. Gereklilik ortadan kalktığında veriler silinir, anonimleştirilir veya güvenli şekilde imha edilir.',
    ],
  },
  {
    title: '5. Veri Güvenliği',
    paragraphs: [
      'PruvaLAbs., kişisel verilerin yetkisiz erişim, değiştirme, ifşa veya yok edilmesine karşı korunması için makul teknik ve idari önlemler uygular. Ancak internet üzerinden yapılan veri iletiminin tamamen risksiz olduğu garanti edilemez.',
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
    paragraphs: ['Geçerli mevzuata bağlı olarak kullanıcılar aşağıdaki haklara sahip olabilir:'],
    bullets: [
      'Kendileriyle ilgili veriler hakkında bilgi talep etme',
      'Yanlış veya eksik bilgilerin düzeltilmesini isteme',
      'Verilerin silinmesini talep etme',
      'Veri işleme faaliyetlerine ilişkin itirazda bulunma',
    ],
    footer: 'Bu talepler için bizimle iletişime geçebilirsiniz.',
  },
  {
    title: '9. Politika Değişiklikleri',
    paragraphs: [
      'Bu Gizlilik Politikası zaman zaman güncellenebilir. Güncel sürüm bu sayfada yayımlanır ve yürürlük tarihi üst bölümde belirtilir.',
    ],
  },
  {
    title: '10. İletişim',
    paragraphs: ['Gizlilik Politikası ile ilgili sorularınız için bizimle iletişime geçebilirsiniz:'],
    bullets: ['E-posta: pruvalabs@gmail.com', 'Instagram: https://instagram.com/pruvalabs'],
  },
];

function Header() {
  return (
    <nav className="top-nav" aria-label="Ana menü">
      <a className="brand" href="/">
        PruvaLAbs.
      </a>
      <div className="nav-links">
        <a href="/#hakkimizda">Hakkımızda</a>
        <a href="/#urunlerimiz">Ürünlerimiz</a>
        <a href="/gizlilik-politikasi">Gizlilik Politikası</a>
        <a href="/#iletisim">İletişim</a>
      </div>
    </nav>
  );
}

function HomePage() {
  return (
    <>
      <header className="hero">
        <Header />

        <div className="hero-content">
          <p className="eyebrow">Yazılım Laboratuvarı</p>
          <h1>PruvaLAbs. modern yazılım ve ürün mühendisliği</h1>
          <p className="tagline">“Fikirleri rotaya, rotayı ürüne dönüştüren yazılım laboratuvarı.”</p>
          <div className="hero-actions">
            <img src="/pruvalabs-logo.svg" alt="PruvaLAbs logosu" className="hero-logo" />
            <a className="cta hero-cta" href="#iletisim">
              Bizimle İletişime Geçin
            </a>
          </div>
        </div>
      </header>

      <main>
        {homeSections.map((section) => (
          <section key={section.id} id={section.id} className="content-card">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}

        <section id="iletisim" className="content-card contact-card">
          <h2>İletişim</h2>
          <p>Yeni bir ürün fikriniz veya dönüşüm hedefiniz varsa tanışalım. Kısa bir keşif görüşmesiyle rotayı birlikte belirleyelim.</p>
          <div className="contact-links">
            <a href="mailto:pruvalabs@gmail.com">pruvalabs@gmail.com</a>
            <a href="https://instagram.com/pruvalabs" target="_blank" rel="noreferrer">
              @pruvalabs
            </a>
            <a href={X_PROFILE_URL} target="_blank" rel="noreferrer">
              X: @pruvalabs
            </a>
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
            PruvaLAbs. (“biz”, “bizim” veya “Şirket”), geliştirdiği web siteleri, mobil uygulamalar ve diğer dijital
            ürünler kapsamında kullanıcı gizliliğine önem verir. Bu Gizlilik Politikası, PruvaLAbs. tarafından sunulan
            ürün ve hizmetleri kullanan kişilere ilişkin bilgilerin nasıl toplandığını, kullanıldığını, saklandığını
            ve korunduğunu açıklar.
          </p>
          <p>
            Aksi ayrıca belirtilmedikçe, bu politika PruvaLAbs. tarafından geliştirilen ve yayınlanan tüm uygulamalar
            ve dijital hizmetler için geçerlidir.
          </p>
        </div>
      </section>

      <section className="policy-content content-card">
        {privacyPolicySections.map((item) => (
          <article key={item.title} className="policy-block">
            <h2>{item.title}</h2>
            {item.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {item.bullets?.length ? (
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
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
        <p className="footer-text">Modern ürün geliştirme süreçlerinde strateji ve mühendisliği bir araya getirir.</p>
      </div>
      <div className="footer-links">
        <a href="mailto:pruvalabs@gmail.com">E-posta: pruvalabs@gmail.com</a>
        <a href="https://instagram.com/pruvalabs" target="_blank" rel="noreferrer">
          Instagram: @pruvalabs
        </a>
        <a href={X_PROFILE_URL} target="_blank" rel="noreferrer">X: @pruvalabs</a>
        <a href="/gizlilik-politikasi">Gizlilik Politikası</a>
      </div>
      <p className="copyright">© 2025 PruvaLAbs. Tüm hakları saklıdır.</p>
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
