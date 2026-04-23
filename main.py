import webview
import os


class Api:
    def __init__(self):
        # Uygulamanın çalıştığı klasörde 'notlar' dizini oluştur
        self.base_dir = os.path.dirname(os.path.abspath(__file__))
        self.notes_dir = os.path.join(self.base_dir, "notlar")

        if not os.path.exists(self.notes_dir):
            os.makedirs(self.notes_dir)

    def save_note(self, title, content):
        """Javascript'ten gelen notu .txt dosyasına yazar"""
        # Dosya ismindeki geçersiz karakterleri temizle
        safe_title = "".join(
            [c for c in title if c.isalnum() or c in (" ", "_", "-")]
        ).rstrip()
        file_path = os.path.join(self.notes_dir, f"{safe_title}.txt")

        try:
            if not content.strip():
                # Not silinmişse dosyayı da sil
                if os.path.exists(file_path):
                    os.remove(file_path)
            else:
                # Notu yaz
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(content)
            return "Başarılı"
        except Exception as e:
            return str(e)

    def load_note(self, title):
        """Javascript not istediğinde .txt dosyasını okuyup gönderir"""
        safe_title = "".join(
            [c for c in title if c.isalnum() or c in (" ", "_", "-")]
        ).rstrip()
        file_path = os.path.join(self.notes_dir, f"{safe_title}.txt")

        if os.path.exists(file_path):
            with open(file_path, "r", encoding="utf-8") as f:
                return f.read()
        return ""


if __name__ == "__main__":
    # Python API sınıfımızı başlatıyoruz
    api = Api()

    # index.html'in tam yolunu buluyoruz
    html_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), "index.html")

    # Masaüstü penceresini oluşturuyoruz
    window = webview.create_window(
        title="KPSS Coğrafya Pro (Masaüstü)",
        url=html_path,
        js_api=api,  # Python fonksiyonlarını JS'ye bağlıyoruz
        width=1200,
        height=800,
        min_size=(900, 600),
    )

    # Uygulamayı başlat
    webview.start()
