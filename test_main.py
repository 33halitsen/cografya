import unittest
import os
import shutil
from main import Api  # Senin main.py dosyanı içe aktarır


class TestKpssCografyaApi(unittest.TestCase):
    def setUp(self):
        """Her testten önce çalışır: Test ortamını hazırlar."""
        self.api = Api()
        # Testlerin gerçek notlarını bozmaması için test dizini belirliyoruz
        self.test_dir = os.path.join(self.api.base_dir, "test_notlar")
        self.api.notes_dir = self.test_dir

        if not os.path.exists(self.test_dir):
            os.makedirs(self.test_dir)

    def tearDown(self):
        """Her testten sonra çalışır: Test kalıntılarını temizler."""
        if os.path.exists(self.test_dir):
            shutil.rmtree(self.test_dir)

    def test_save_new_note(self):
        """Yeni bir notun başarıyla kaydedilip kaydedilmediğini test eder."""
        title = "Kırık Dağlar"
        content = "Ege bölgesindeki dağlar kırıklıdır (Kaz, Madra vb.)."

        result = self.api.save_note(title, content)
        self.assertEqual(result, "Başarılı")

        file_path = os.path.join(self.test_dir, f"{title}.txt")
        self.assertTrue(os.path.exists(file_path))

    def test_load_existing_note(self):
        """Kaydedilen bir notun doğru şekilde okunup okunmadığını test eder."""
        title = "Volkanik Göller"
        content = "Nemrut, Meke Tuzlası, Gölcük."
        self.api.save_note(title, content)

        loaded_content = self.api.load_note(title)
        self.assertEqual(loaded_content, content)

    def test_delete_empty_note(self):
        """Kullanıcı notu sildiğinde (boş metin gönderdiğinde) dosyanın silindiğini test eder."""
        title = "Geçici Not"
        self.api.save_note(title, "Bu silinecek.")

        # Boş içerik göndererek silme işlemini tetikliyoruz
        self.api.save_note(title, "   ")

        file_path = os.path.join(self.test_dir, f"{title}.txt")
        self.assertFalse(os.path.exists(file_path))

    def test_sanitize_filename(self):
        """İsimdeki geçersiz (Örn: / \ : * ? " < > |) karakterlerin temizlendiğini test eder."""
        title = "Kıbrıs'a/Su?Temini*"
        content = "Boru hatları."
        self.api.save_note(title, content)

        # Temizlenmiş ismin "KıbrısaSuTemini" şeklinde kaydedilmesini bekleriz
        expected_filename = "KıbrısaSuTemini.txt"
        file_path = os.path.join(self.test_dir, expected_filename)
        self.assertTrue(os.path.exists(file_path))


if __name__ == "__main__":
    unittest.main()
