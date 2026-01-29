// --- AYARLAR ---
// BURAYA DİKKAT: images klasörüne attığın cevap anahtarı resimlerinin adlarını buraya yazmalısın.
// Dosya uzantıları (.jpg, .png) dahil olsun.
const soruListesi = [
    "Turkiye_Daglar.jpg",
    "Turkiye_Ovalar.jpg",
    "Turkiye_Platolar.jpg",
    "Turkiye_Madenler.jpg",
    "Turkiye_Iklim_Cesitleri.jpg"
];

// Değişkenler
let aktifSoruIndex = 0;
const canvas = document.getElementById('cizimTahtasi');
const ctx = canvas.getContext('2d');
let cizimYapiyor = false;
let aktifArac = 'kalem'; // 'kalem' veya 'yazi'

// Canvas Boyutlandırma (Resim oranına göre)
// Boş haritanın orijinal boyutlarını buraya girmen iyi olur, yoksa CSS ile esner.
const tuvalGenislik = 800;
const tuvalYukseklik = 450;

canvas.width = tuvalGenislik;
canvas.height = tuvalYukseklik;

// Başlangıç Ayarları
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
guncelleRenkVeKalinlik();
soruyuYukle();

// --- TEMEL FONKSİYONLAR ---

function soruyuYukle() {
    // 1. Başlığı Ayarla (Dosya isminden üret)
    const dosyaAdi = soruListesi[aktifSoruIndex];
    // Dosya uzantısını at (örn: .jpg) ve alt çizgileri boşluğa çevir
    const baslik = dosyaAdi.split('.')[0].replace(/_/g, ' ');

    document.getElementById('haritaBasligi').innerText = baslik;
    document.getElementById('sayac').innerText = `${aktifSoruIndex + 1} / ${soruListesi.length}`;

    // 2. Cevap Resmini Hazırla (Ama gizle)
    document.getElementById('cevapResmi').src = `images/${dosyaAdi}`;
    document.getElementById('cevapAlani').style.display = 'none';

    // 3. Canvas'ı Temizle (Boş harita arka planda zaten CSS ile duruyor)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function cevabiGoster() {
    const cevapAlani = document.getElementById('cevapAlani');
    if (cevapAlani.style.display === 'none') {
        cevapAlani.style.display = 'block';
        // Otomatik aşağı kaydır
        cevapAlani.scrollIntoView({ behavior: 'smooth' });
    } else {
        cevapAlani.style.display = 'none';
    }
}

function sonrakiSoru() {
    if (aktifSoruIndex < soruListesi.length - 1) {
        aktifSoruIndex++;
        soruyuYukle();
    } else {
        alert("Sorular bitti! Başa dönülüyor.");
        aktifSoruIndex = 0;
        soruyuYukle();
    }
}

function oncekiSoru() {
    if (aktifSoruIndex > 0) {
        aktifSoruIndex--;
        soruyuYukle();
    }
}

// --- ÇİZİM VE ARAÇ FONKSİYONLARI ---

function aracSec(arac) {
    aktifArac = arac;
    // Buton stillerini güncelle
    document.getElementById('btnKalem').className = arac === 'kalem' ? 'active-tool' : '';
    document.getElementById('btnYazi').className = arac === 'yazi' ? 'active-tool' : '';
}

function guncelleRenkVeKalinlik() {
    ctx.strokeStyle = document.getElementById('renkSecici').value;
    ctx.fillStyle = document.getElementById('renkSecici').value; // Yazı rengi için
    ctx.lineWidth = document.getElementById('kalinlik').value;
}

function silgi() {
    // Sadece çizimleri siler, arka plan resmini (CSS ile verildiği için) etkilemez
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Event Listeners (Renk ve Kalınlık değişimi için)
document.getElementById('renkSecici').addEventListener('change', guncelleRenkVeKalinlik);
document.getElementById('kalinlik').addEventListener('change', guncelleRenkVeKalinlik);

// --- MOUSE VE DOKUNMATİK EYLEMLERİ (ÇİZİM) ---

// Mouse olayları
canvas.addEventListener('mousedown', basla);
canvas.addEventListener('mouseup', bitir);
canvas.addEventListener('mousemove', ciz);

// Dokunmatik olayları (Telefonda çalışması için)
canvas.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Sayfanın kaymasını engelle
    basla(e.touches[0]);
});
canvas.addEventListener('touchend', bitir);
canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    ciz(e.touches[0]);
});

function basla(e) {
    if (aktifArac === 'yazi') {
        metinEkle(e);
        return;
    }
    cizimYapiyor = true;
    ciz(e); // Nokta koyabilmek için tıklandığı an çiz
}

function bitir() {
    cizimYapiyor = false;
    ctx.beginPath(); // Yeni çizgi için yolu sıfırla
}

function ciz(e) {
    if (!cizimYapiyor || aktifArac !== 'kalem') return;

    // Mouse pozisyonunu canvas'a göre ayarla
    const rect = canvas.getBoundingClientRect();

    // Scale faktörünü hesapla (Canvas CSS ile küçültülmüşse koordinatları düzeltmek için)
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

// --- METİN EKLEME ---

function metinEkle(e) {
    const metin = prompt("Haritaya eklemek istediğiniz notu girin:");
    if (metin) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;

        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;

        ctx.font = "bold 20px Arial";
        ctx.fillText(metin, x, y);

        // İşlem bitince kaleme geri dönmek istersen:
        // aracSec('kalem');
    }
}