# PruvaLabs Web

PruvaLabs kurumsal sitesi ve PruvAI ürün tanıtım yüzeyi.

## Yerel geliştirme

```bash
npm install
npm run dev
```

Site varsayılan olarak `http://localhost:3000` adresinde açılır.

## Kontrol

```bash
npm run build
```

PruvAI sohbet arayüzü `/pruvai` içinde çalışır. Tarayıcı hiçbir backend
anahtarını görmez; aynı-origin `/api/pruvai/chat` Route Handler güvenilir
PruvAI public gateway'e sunucu tarafından bağlanır.

V183 ile yanıtlar public gateway'den sunucu taraflı SSE aracısı üzerinden
parça parça iletilir. Gateway anahtarı tarayıcıya verilmez; imzalı konuşma
kimliği ilk güvenilir akış olayından sonra HttpOnly cookie olarak saklanır.
Arayüz yalnızca backend sağlık yanıtı güvenli streaming desteğini açıkça
bildirirse mesaj göndermeyi etkinleştirir.
`/api/pruvai/status` yalnızca güvenli `ready`, `activation_required` veya
`unavailable` durumunu yayınlar; backend adresini, anahtarı veya iç hata
ayrıntısını tarayıcıya göndermez.

## PruvAI üretim değişkenleri

- `PRUVAI_BACKEND_URL`: HTTPS PruvAI public gateway kök adresi
- `PRUVAI_GATEWAY_SECRET`: backend ile paylaşılan en az 32 bayt servis anahtarı
- `PRUVAI_SESSION_SECRET`: konuşma kimliğini imzalayan en az 32 bayt ayrı anahtar

Bu değişkenler olmadan sohbet geçidi fail-closed biçimde `503` döndürür ve
arayüz aktivasyonun tamamlanmadığını açıkça gösterir.

## V178 ücretsiz geliştirme ve sponsor modu

PruvAI backend deposundaki başlatıcı günlük yerel geliştirmeyi ve süreli
sponsor demosunu birlikte yönetir:

```bash
python scripts/start_pruvai_demo.py local
python scripts/start_pruvai_demo.py sponsor
python scripts/start_pruvai_demo.py local --check-only
```

Sponsor modunda yalnızca bu Next.js arayüzü geçici HTTPS tüneline açılır.
Backend, Ollama ve model `127.0.0.1` üzerinde kalır. Sponsor kodu sunucuda
doğrulanır; tarayıcıya yalnızca süreli, imzalı ve HttpOnly erişim oturumu
verilir. Tünel kapandığında dış erişim sona erer.
Arayüz, erişim kilidi açık olsa bile backend sağlık sözleşmesi doğrulanmadan
PruvAI bağlantısını hazır göstermez ve mesaj gönderimini etkinleştirmez.

Ek sunucu değişkenleri:

- `PRUVAI_GATEWAY_ORIGIN`: backend'e sunucu tarafından bildirilen kesin HTTPS
  origin
- `PRUVAI_ALLOW_LOOPBACK_BACKEND`: yalnızca birleşik yerel başlatıcı için
  loopback backend izni
- `PRUVAI_SPONSOR_DEMO_MODE`: sponsor kodu kapısını etkinleştiren kesin
  `true`/`false` bayrağı
- `PRUVAI_SPONSOR_CODE`: en az 12 baytlık görüşme erişim kodu
- `PRUVAI_SPONSOR_ACCESS_MINUTES`: 5–120 dakika arası oturum süresi
