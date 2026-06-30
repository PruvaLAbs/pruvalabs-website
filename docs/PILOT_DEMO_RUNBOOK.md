# PruvaLabs Pruva Assist — Pilot Demo Runbook

## Demo durumu

PruvaLabs Pruva Assist, Mavi Köşe Bistro ile pilot demo için hazırdır.

Ana akış:

Instagram talebi
→ AI rezervasyon niyetini ve bilgileri yakalar
→ Rezervasyon veritabanına kaydedilir
→ İşletmeye WhatsApp simülasyon bildirimi gider
→ Operasyon Merkezinde rezervasyon görünür
→ İşletme rezervasyonu onaylar veya iptal eder

## Ürün dili

Ürünün ana dili Türkçedir.

Kullanıcıya görünen metinler Türkçe olmalıdır. Kod içindeki teknik değişken, fonksiyon, endpoint ve dosya adları İngilizce kalabilir.

## Demo öncesi kontrol

Frontend klasöründe çalıştır:

    cd ~/PruvaLabs/pruva-platform
    node scripts/demo-health-check.js
    npm run build

Beklenen sonuç:

    Demo sağlık kontrolü başarılı. Pilot demo hazır.

## Backend başlatma

Ayrı bir terminalde çalıştır:

    cd ~/PruvaLabs/pruva-assist
    source ../pruva-ai-core/.venv/bin/activate
    PYTHONPATH=src uvicorn backend.api.main:app --reload

Backend zaten çalışıyorsa şu mesaj gelebilir:

    ERROR: [Errno 48] Address already in use

Bu hata değildir. 8000 portunda backend zaten çalışıyor demektir.

Backend kontrolü:

    curl "http://127.0.0.1:8000/health"

## Frontend başlatma

Ayrı bir terminalde çalıştır:

    cd ~/PruvaLabs/pruva-platform
    npm run dev

Port 3000 doluysa mevcut çalışan Next.js sunucusu kullanılabilir.

## Tarayıcı adresleri

Bunları terminale yazma. Tarayıcı adres çubuğuna yapıştır.

    http://localhost:3000/product
    http://localhost:3000/operations
    http://localhost:3000/accounts
    http://localhost:3000/accounts/mavi_kose_bistro

## Önerilen demo akışı

1. /product sayfasını aç.
2. Ürünün Instagram DM mesajlarını rezervasyona dönüştürdüğünü anlat.
3. Canlı demo oluştur butonuna bas.
4. Yeni rezervasyonun oluştuğunu göster.
5. /dashboard sayfasına geç.
6. Son rezervasyonlar bölümünde yeni kaydı göster.
7. İşletme bildirimi bölümünde bildirimin gönderildiğini göster.
8. Rezervasyonu onayla veya iptal et.
9. Durumun panelde değiştiğini göster.
10. /brands/mavi_kose_bistro sayfasında pilot markanın hazır olduğunu göster.

## Demo konuşma metni

Pruva Assist, Instagram üzerinden gelen müşteri mesajlarını işletme için yönetilebilir rezervasyon kayıtlarına dönüştürür.

Müşteri DM atar. Sistem rezervasyon niyetini, kişi sayısını, saati ve müşteri adını yakalar. Rezervasyon kaydı oluşturulur. İşletmeye WhatsApp bildirimi simüle edilir. İşletme sahibi panelden rezervasyonu görebilir, onaylayabilir veya iptal edebilir.

Bu demo, Mavi Köşe Bistro pilot markası için canlı backend, canlı veritabanı ve canlı operasyon paneliyle çalışmaktadır.

## Pilot başarı kriterleri

Demo başarılı sayılırsa:

- Backend sağlık kontrolü başarılıdır.
- Pilot hazırlığı hazırdır.
- Pilot kontrol listesi tamamdır.
- Mavi Köşe Bistro bildirimleri aktiftir.
- En az bir rezervasyon kaydı görünür.
- En az bir işletme bildirimi gönderilmiş görünür.
- Onay/iptal aksiyonu çalışır.
- Frontend build başarılıdır.

## Kapanış cümlesi

PruvaLabs Pruva Assist, Türkiye’deki yerel işletmeler için Instagram DM’den rezervasyon yakalama, işletme bildirimi ve operasyon paneli akışını uçtan uca gösteren pilot demoya hazırdır.
