# Pruva Asistan Canlıya Alma Checklist

## 1. Frontend

- Vercel projesi hazır
- GitHub bağlantısı hazır
- Build başarılı
- PRUV_API_BASE_URL production env olarak eklendi

## 2. Backend

- Backend canlı sunucuya alındı
- HTTPS aktif
- /health çalışıyor
- /pilot-readiness çalışıyor
- /reservations çalışıyor
- /notification-logs çalışıyor
- /incoming-messages çalışıyor
- /reply-logs çalışıyor

## 3. Database

- Canlı PostgreSQL hazır
- Tablolar oluşturuldu
- Backup planı var
- Database credentials gizli tutuluyor

## 4. WhatsApp

- Meta Business hesabı hazır
- WhatsApp Business numarası hazır
- Webhook URL hazır
- Access token production ortamda
- Test bildirim gönderildi

## 5. Güvenlik

- Admin login gerçek
- Marka login gerçek
- Rol bazlı erişim var
- Her marka sadece kendi verisini görüyor
- API secrets frontend içine konmuyor

## 6. İlk İşletme

- İşletme adı tanımlandı
- Çalışma saatleri girildi
- Rezervasyon kuralları girildi
- Bildirim numarası girildi
- Sık sorular girildi
- Canlı test yapıldı
