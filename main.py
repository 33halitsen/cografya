import webview
import os
import shutil
import sys
import subprocess


class Api:
    def __init__(self):
        # Uygulamanın çalıştığı ana klasörü bulma (Belgeler Klasörü)
        home_dir = os.path.expanduser("~")
        self.base_dir = os.path.join(home_dir, "Documents", "KPSS_Cografya_Notlari")

        self.notes_dir = os.path.join(self.base_dir, "notlar")
        self.ekler_dir = os.path.join(self.base_dir, "ekler")

        if not os.path.exists(self.notes_dir):
            os.makedirs(self.notes_dir)
        if not os.path.exists(self.ekler_dir):
            os.makedirs(self.ekler_dir)

    # --- YENİ EKLENEN FİZİKSEL LİSTE/İLERLEME HAFIZASI ---
    def save_app_data(self, data_str):
        file_path = os.path.join(self.base_dir, "ilerleme_hafizasi.json")
        try:
            with open(file_path, "w", encoding="utf-8") as f:
                f.write(data_str)
            return "Başarılı"
        except Exception as e:
            return str(e)

    def load_app_data(self):
        file_path = os.path.join(self.base_dir, "ilerleme_hafizasi.json")
        if os.path.exists(file_path):
            with open(file_path, "r", encoding="utf-8") as f:
                return f.read()
        return ""

    # ----------------------------------------------------

    def _get_category_dir(self, base_folder, category):
        safe_cat = "".join(
            [c for c in category if c.isalnum() or c in (" ", "_", "-")]
        ).rstrip()
        cat_dir = os.path.join(base_folder, safe_cat)
        if not os.path.exists(cat_dir):
            os.makedirs(cat_dir)
        return cat_dir

    def save_note(self, category, title, content):
        cat_dir = self._get_category_dir(self.notes_dir, category)
        safe_title = "".join(
            [c for c in title if c.isalnum() or c in (" ", "_", "-")]
        ).rstrip()
        file_path = os.path.join(cat_dir, f"{safe_title}.txt")
        try:
            if not content.strip():
                if os.path.exists(file_path):
                    os.remove(file_path)
            else:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(content)
            return "Başarılı"
        except Exception as e:
            return str(e)

    def load_note(self, category, title):
        cat_dir = self._get_category_dir(self.notes_dir, category)
        safe_title = "".join(
            [c for c in title if c.isalnum() or c in (" ", "_", "-")]
        ).rstrip()
        file_path = os.path.join(cat_dir, f"{safe_title}.txt")
        if os.path.exists(file_path):
            with open(file_path, "r", encoding="utf-8") as f:
                return f.read()
        return ""

    def attach_file(self, category, title):
        window = webview.windows[0]
        result = window.create_file_dialog(webview.OPEN_DIALOG, allow_multiple=False)
        if result:
            source_path = result[0]
            filename = os.path.basename(source_path)
            cat_dir = self._get_category_dir(self.ekler_dir, category)
            safe_title = "".join(
                [c for c in title if c.isalnum() or c in (" ", "_", "-")]
            ).rstrip()
            map_ekler_dir = os.path.join(cat_dir, safe_title)
            if not os.path.exists(map_ekler_dir):
                os.makedirs(map_ekler_dir)
            dest_path = os.path.join(map_ekler_dir, filename)
            shutil.copy2(source_path, dest_path)
            return filename
        return None

    def get_attachments(self, category, title):
        cat_dir = self._get_category_dir(self.ekler_dir, category)
        safe_title = "".join(
            [c for c in title if c.isalnum() or c in (" ", "_", "-")]
        ).rstrip()
        map_ekler_dir = os.path.join(cat_dir, safe_title)
        if os.path.exists(map_ekler_dir):
            return os.listdir(map_ekler_dir)
        return []

    def open_attachment(self, category, title, filename):
        cat_dir = self._get_category_dir(self.ekler_dir, category)
        safe_title = "".join(
            [c for c in title if c.isalnum() or c in (" ", "_", "-")]
        ).rstrip()
        filepath = os.path.join(cat_dir, safe_title, filename)
        if os.path.exists(filepath):
            if sys.platform == "darwin":
                subprocess.call(("open", filepath))
            elif os.name == "nt":
                os.startfile(filepath)


if __name__ == "__main__":
    api = Api()
    if getattr(sys, "frozen", False):
        project_dir = sys._MEIPASS
    else:
        project_dir = os.path.dirname(os.path.abspath(__file__))

    html_path = os.path.join(project_dir, "index.html")

    window = webview.create_window(
        title="KPSS Coğrafya Pro",
        url=html_path,
        js_api=api,
        width=1200,
        height=800,
        min_size=(900, 600),
    )
    webview.start()
