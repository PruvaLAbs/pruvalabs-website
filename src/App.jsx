const sections = [
  {
    id: 'hakkimizda',
    title: 'Hakkımızda',
    content:
      'PruvaLAbs., strateji ile mühendisliği aynı masada buluşturan butik bir yazılım stüdyosudur. Hedefimiz, doğru ürün kararlarını hızlı ve sürdürülebilir şekilde hayata geçirmektir.',
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
  {
    id: 'iletisim',
    title: 'İletişim',
    content:
      'Yeni bir ürün fikriniz veya dönüşüm hedefiniz varsa tanışalım. Kısa bir keşif görüşmesiyle rotayı birlikte belirleyelim: hello@pruvalabs.com',
  },
];

function App() {
  return (
    <div className="site-shell">
      <header className="hero">
        <nav className="top-nav">
          <div className="brand">PruvaLAbs.</div>
          <div className="nav-links">
            <a href="#hakkimizda">Hakkımızda</a>
            <a href="#urunlerimiz">Ürünlerimiz</a>
            <a href="#iletisim">İletişim</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Butik Yazılım Laboratuvarı</p>
          <h1>PruvaLAbs. için modern ürün mühendisliği</h1>
          <p className="tagline">
            “Fikirleri rotaya, rotayı ürüne dönüştüren butik yazılım laboratuvarı.”
          </p>
          <a className="cta" href="#iletisim">
            Bizimle İletişime Geçin
          </a>
        </div>
      </header>

      <main>
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="content-card">
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} PruvaLAbs. Tüm hakları saklıdır.</p>
        <div className="footer-links">
          <a href="#">Gizlilik Politikası</a>
          <a href="#">Destek</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
