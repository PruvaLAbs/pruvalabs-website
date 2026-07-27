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

## PruvAI üretim değişkenleri

- `PRUVAI_BACKEND_URL`: HTTPS PruvAI public gateway kök adresi
- `PRUVAI_GATEWAY_SECRET`: backend ile paylaşılan en az 32 bayt servis anahtarı
- `PRUVAI_SESSION_SECRET`: konuşma kimliğini imzalayan en az 32 bayt ayrı anahtar

Bu değişkenler olmadan sohbet geçidi fail-closed biçimde `503` döndürür ve
arayüz aktivasyonun tamamlanmadığını açıkça gösterir.
