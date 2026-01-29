// ==========================================
// KULLANICI AYARLARI
// ==========================================
const GITHUB_KULLANICI_ADI = "kullanici_adin";
const GITHUB_REPO_ADI = "repo_adin";
// ==========================================

const canvas = document.getElementById('cizimAlani');
const ctx = canvas.getContext('2d');
let cizimModu = false;
let aktifArac = 'kalem';

canvas.width = 800;
canvas.height = 400;

let soruListesi = [];
let suankiSoruIndex = 0;

// LocalStorage Anahtarları
const LS_LISTE_KEY = 'cografya_soru_listesi';
const LS_INDEX_KEY = 'cografya_soru_index';

window.onload = async function () {
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    aracGuncelle();

    await uygulamayiBaslat();
};

async function uygulamayiBaslat() {
    const apiURL = `https://api.github.com/repos/33halitsen/cografya/contents/images`;

    try {
        const response = await fetch(apiURL);
        if (!response.ok) throw new Error("GitHub bağlantı hatası");

        const dosyalar = await response.json();

        // GitHub'daki güncel ham dosya listesi (bos_harita hariç)
        const guncelDosyalar = dosyalar
            .filter(dosya => dosya.name.match(/\.(jpg|jpeg|png)$/i))
            .filter(dosya => dosya.name !== 'bos_harita.jpg')
            .map(dosya => dosya.name);

        // --- LİSTE BİRLEŞTİRME VE KAYIT MANTIĞI ---

        // 1. LocalStorage'da kayıtlı liste var mı?
        const kayitliListeJson = localStorage.getItem(LS_LISTE_KEY);
        const kayitliIndex = localStorage.getItem(LS_INDEX_KEY);

        if (kayitliListeJson) {
            let yerelListe = JSON.parse(kayitliListeJson);

            // A. Silinenleri Temizle: GitHub'da artık olmayanları yerel listeden çıkar
            yerelListe = yerelListe.filter(dosya => guncelDosyalar.includes(dosya));

            // B. Yeni Eklenenleri Bul: GitHub'da olup yerel listede olmayanlar
            const yeniEklenenler = guncelDosyalar.filter(dosya => !yerelListe.includes(dosya));

            // C. Yenileri Sona Ekle
            soruListesi = [...yerelListe, ...yeniEklenenler];

            // İndeksi ayarla (Kaldığı yer)
            suankiSoruIndex = kayitliIndex ? parseInt(kayitliIndex) : 0;

            // Eğer indeks listenin dışına taştıysa (örn: sorular silindiyse) başa al
            if (suankiSoruIndex >= soruListesi.length) suankiSoruIndex = 0;

        } else {
            // Hiç kayıt yoksa, listeyi al ve karıştır
            soruListesi = guncelDosyalar;
            listeyiKaristir(soruListesi);
            suankiSoruIndex = 0;
        }

        // Güncel hali kaydet
        kaydet();
        soruyuEkranaYaz();

    } catch (error) {
        console.error(error);
        document.getElementById('soruBasligi').innerText = "Bağlantı Hatası veya Liste Boş";
    }
}

// Listeyi ve İndeksi LocalStorage'a kaydeder
function kaydet() {
    localStorage.setItem(LS_LISTE_KEY, JSON.stringify(soruListesi));
    localStorage.setItem(LS_INDEX_KEY, suankiSoruIndex);
}

// "Listeyi Baştan Karıştır" Butonu için
function listeyiSifirla() {
    if (confirm("Tüm ilerlemeniz sıfırlanacak ve liste yeniden karıştırılacak. Emin misiniz?")) {
        listeyiKaristir(soruListesi);
        suankiSoruIndex = 0;
        kaydet();
        soruyuEkranaYaz();
        temizle(); // Ekrandaki çizimi de sil
    }
}

function listeyiKaristir(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function soruyuEkranaYaz() {
    // Çizimi temizle
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('cevapKutusu').style.display = 'none';

    if (soruListesi.length === 0) {
        document.getElementById('soruBasligi').innerText = "Gösterilecek harita yok.";
        return;
    }

    const dosyaAdi = soruListesi[suankiSoruIndex];
    let baslik = dosyaAdi.split('.')[0].replace(/_/g, ' ');

    document.getElementById('soruBasligi').innerText = baslik;
    document.getElementById('soruSayaci').innerText = `${suankiSoruIndex + 1} / ${soruListesi.length}`;

    document.getElementById('cevapGorseli').src = `images/${dosyaAdi}`;
}

function sonrakiSoru() {
    suankiSoruIndex++;

    // Liste bittiyse başa dönme ama karıştırma (Sırayı koru)
    if (suankiSoruIndex >= soruListesi.length) {
        alert("Tüm haritalar tamamlandı! Başa dönülüyor.");
        suankiSoruIndex = 0;
    }

    kaydet(); // Yeni sırayı kaydet
    soruyuEkranaYaz();
}

function cevabiGosterGizle() {
    const kutu = document.getElementById('cevapKutusu');
    kutu.style.display = (kutu.style.display === 'none') ? 'block' : 'none';
    if (kutu.style.display === 'block') kutu.scrollIntoView({ behavior: 'smooth' });
}

// --- ÇİZİM ARAÇLARI (DEĞİŞMEDİ) ---
function aracDegistir(tip) {
    aktifArac = tip;
    document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
    if (tip === 'kalem') document.getElementById('btnKalem').classList.add('active');
    if (tip === 'yazi') document.getElementById('btnYazi').classList.add('active');
}

function temizle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function aracGuncelle() {
    ctx.strokeStyle = document.getElementById('renkSecici').value;
    ctx.fillStyle = document.getElementById('renkSecici').value;
    ctx.lineWidth = document.getElementById('kalinlikAyari').value;
}

document.getElementById('renkSecici').addEventListener('input', aracGuncelle);
document.getElementById('kalinlikAyari').addEventListener('input', aracGuncelle);

canvas.addEventListener('mousedown', basla);
canvas.addEventListener('mouseup', bitir);
canvas.addEventListener('mousemove', ciz);
canvas.addEventListener('touchstart', (e) => { e.preventDefault(); basla(e.touches[0]); });
canvas.addEventListener('touchend', bitir);
canvas.addEventListener('touchmove', (e) => { e.preventDefault(); ciz(e.touches[0]); });

function basla(e) {
    if (aktifArac === 'yazi') { yaziEkle(e); return; }
    cizimModu = true; ciz(e);
}
function bitir() { cizimModu = false; ctx.beginPath(); }
function ciz(e) {
    if (!cizimModu || aktifArac !== 'kalem') return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (canvas.width / rect.width);
    const y = (e.clientY - rect.top) * (canvas.height / rect.height);
    ctx.lineTo(x, y); ctx.stroke(); ctx.beginPath(); ctx.moveTo(x, y);
}
function yaziEkle(e) {
    const metin = prompt("Yazı girin:");
    if (metin) {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (canvas.width / rect.width);
        const y = (e.clientY - rect.top) * (canvas.height / rect.height);
        ctx.font = "bold 20px Arial"; ctx.fillText(metin, x, y);
    }
}