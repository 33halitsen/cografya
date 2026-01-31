// ==========================================
// KULLANICI AYARLARI
// ==========================================
const GITHUB_KULLANICI_ADI = "33halitsen";
const GITHUB_REPO_ADI = "cografya";
// ==========================================

const canvas = document.getElementById('cizimAlani');
const ctx = canvas.getContext('2d');
const textLayer = document.getElementById('text-layer');

// --- DURUM DEĞİŞKENLERİ ---
let cizimModu = false;
let aktifArac = 'kalem'; // 'kalem', 'vurgu', 'silgi', 'yazi'
let soruListesi = [];
let suankiSoruIndex = 0;

// Geri Al / İleri Al Geçmişi
let cizimGecmisi = [];
let geriAlmaAdimi = -1;

// Metin Yönetimi
let seciliMetinKutusu = null;

// Canvas Boyutları
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 400;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

// LocalStorage Anahtarları
const LS_LISTE_KEY = 'cografya_soru_listesi';
const LS_INDEX_KEY = 'cografya_soru_index';

// --- BAŞLANGIÇ ---
window.onload = async function () {
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // İlk boş durumu kaydet
    gecmisiKaydet();

    // Ayarları uygula
    aracAyarlariniGuncelle();

    // Uygulamayı başlat
    await uygulamayiBaslat();
};

// ==========================================
// 1. GITHUB API VE SORU YÖNETİMİ
// ==========================================

async function uygulamayiBaslat() {
    const apiURL = `https://api.github.com/repos/${GITHUB_KULLANICI_ADI}/${GITHUB_REPO_ADI}/contents/images`;

    try {
        document.getElementById('soruBasligi').innerText = "GitHub'a Bağlanılıyor...";

        const response = await fetch(apiURL);
        if (!response.ok) throw new Error("GitHub klasörü okunamadı!");

        const dosyalar = await response.json();

        // Güncel dosya listesini al (bos_harita hariç)
        const guncelDosyalar = dosyalar
            .filter(dosya => dosya.name.match(/\.(jpg|jpeg|png)$/i))
            .filter(dosya => dosya.name !== 'bos_harita.jpg')
            .map(dosya => dosya.name);

        // --- LOCAL STORAGE SENKRONİZASYONU ---
        const kayitliListeJson = localStorage.getItem(LS_LISTE_KEY);
        const kayitliIndex = localStorage.getItem(LS_INDEX_KEY);

        if (kayitliListeJson) {
            let yerelListe = JSON.parse(kayitliListeJson);
            // Silinenleri çıkar
            yerelListe = yerelListe.filter(dosya => guncelDosyalar.includes(dosya));
            // Yenileri bul ve sona ekle
            const yeniEklenenler = guncelDosyalar.filter(dosya => !yerelListe.includes(dosya));
            soruListesi = [...yerelListe, ...yeniEklenenler];

            suankiSoruIndex = kayitliIndex ? parseInt(kayitliIndex) : 0;
            if (suankiSoruIndex >= soruListesi.length) suankiSoruIndex = 0;
        } else {
            // İlk kez açılıyorsa karıştır
            soruListesi = guncelDosyalar;
            listeyiKaristir(soruListesi);
            suankiSoruIndex = 0;
        }

        lsKaydet();
        soruyuEkranaYaz();

    } catch (error) {
        console.error(error);
        document.getElementById('soruBasligi').innerText = "Bağlantı Hatası veya Klasör Boş";
    }
}

function lsKaydet() {
    localStorage.setItem(LS_LISTE_KEY, JSON.stringify(soruListesi));
    localStorage.setItem(LS_INDEX_KEY, suankiSoruIndex);
}

function listeyiKaristir(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function soruyuEkranaYaz() {
    // Ekranı temizle
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    textLayer.innerHTML = ''; // Metinleri temizle
    cizimGecmisi = [];
    geriAlmaAdimi = -1;
    gecmisiKaydet(); // Temiz hali kaydet

    document.getElementById('cevapKutusu').style.display = 'none';

    if (soruListesi.length === 0) {
        document.getElementById('soruBasligi').innerText = "Soru Bulunamadı";
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
    if (suankiSoruIndex >= soruListesi.length) {
        alert("Tüm haritalar tamamlandı! Başa dönülüyor.");
        suankiSoruIndex = 0;
    }
    lsKaydet();
    soruyuEkranaYaz();
}

function listeyiSifirla() {
    if (confirm("İlerlemeniz silinecek ve sorular yeniden karıştırılacak. Emin misiniz?")) {
        localStorage.removeItem(LS_LISTE_KEY);
        localStorage.removeItem(LS_INDEX_KEY);
        location.reload();
    }
}

function cevabiGosterGizle() {
    const kutu = document.getElementById('cevapKutusu');
    kutu.style.display = (kutu.style.display === 'none') ? 'block' : 'none';
    if (kutu.style.display === 'block') kutu.scrollIntoView({ behavior: 'smooth' });
}

// ==========================================
// 2. ÇİZİM VE ARAÇ FONKSİYONLARI
// ==========================================

function aracDegistir(tip) {
    aktifArac = tip;

    // Buton stilleri
    document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));

    if (tip === 'kalem') document.getElementById('btnKalem').classList.add('active');
    if (tip === 'vurgu') document.getElementById('btnVurgu').classList.add('active');
    if (tip === 'silgi') document.getElementById('btnSilgi').classList.add('active');
    if (tip === 'yazi') document.getElementById('btnYazi').classList.add('active');

    aracAyarlariniGuncelle();
}

function aracAyarlariniGuncelle() {
    const renk = document.getElementById('renkSecici').value;
    const boyut = document.getElementById('kalinlikAyari').value;

    // Seçili metin varsa onu güncelle
    if (seciliMetinKutusu) {
        seciliMetinKutusu.style.color = renk;
        seciliMetinKutusu.style.fontSize = boyut + 'px';
    }

    // Canvas araç ayarları
    if (aktifArac === 'silgi') {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.lineWidth = boyut * 2;
    } else if (aktifArac === 'vurgu') {
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = hexToRGBA(renk, 0.3); // %30 Opaklık
        ctx.lineWidth = boyut * 3;
    } else {
        // Kalem
        ctx.globalCompositeOperation = 'source-over';
        ctx.strokeStyle = renk;
        ctx.lineWidth = boyut / 2; // Kalem çok kalın olmasın
    }
}

function hexToRGBA(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function herSeyiTemizle() {
    if (confirm("Tüm çizimler ve yazılar silinecek?")) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        textLayer.innerHTML = '';
        gecmisiKaydet();
    }
}

// ==========================================
// 3. GERİ AL / İLERİ AL (UNDO/REDO)
// ==========================================

function gecmisiKaydet() {
    if (geriAlmaAdimi < cizimGecmisi.length - 1) {
        cizimGecmisi = cizimGecmisi.slice(0, geriAlmaAdimi + 1);
    }
    cizimGecmisi.push(canvas.toDataURL());
    geriAlmaAdimi++;
}

function geriAl() {
    if (geriAlmaAdimi > 0) {
        geriAlmaAdimi--;
        canvasGeriYukle();
    }
}

function ileriAl() {
    if (geriAlmaAdimi < cizimGecmisi.length - 1) {
        geriAlmaAdimi++;
        canvasGeriYukle();
    }
}

function canvasGeriYukle() {
    const img = new Image();
    img.src = cizimGecmisi[geriAlmaAdimi];
    img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
    };
}

// ==========================================
// 4. METİN KATMANI YÖNETİMİ
// ==========================================

function metinKutusuEkle(x, y) {
    const renk = document.getElementById('renkSecici').value;
    const boyut = document.getElementById('kalinlikAyari').value;

    const div = document.createElement('div');
    div.className = 'draggable-text selected';
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.style.color = renk;
    div.style.fontSize = boyut + 'px';
    div.contentEditable = true;
    div.innerText = "Metin";

    // Silme Butonu
    const silBtn = document.createElement('span');
    silBtn.className = 'delete-btn';
    silBtn.innerHTML = '×';
    silBtn.contentEditable = false;
    silBtn.onclick = (e) => {
        e.stopPropagation();
        div.remove();
        seciliMetinKutusu = null;
    };

    div.appendChild(silBtn);
    textLayer.appendChild(div);

    // Olaylar
    div.onmousedown = (e) => metinSec(e, div);
    div.ontouchstart = (e) => metinSec(e, div);
    div.onclick = (e) => e.stopPropagation(); // Tıklayınca canvas çizmesin

    metinSec(null, div); // Eklenince seç
    setTimeout(() => div.focus(), 10);
}

function metinSec(e, div) {
    if (aktifArac === 'silgi') return;

    if (seciliMetinKutusu) seciliMetinKutusu.classList.remove('selected');
    seciliMetinKutusu = div;
    div.classList.add('selected');

    if (!e) return; // Sadece seçim yapıldı, taşıma yok

    // Taşıma Mantığı
    let startX = e.clientX || e.touches[0].clientX;
    let startY = e.clientY || e.touches[0].clientY;

    let rect = div.getBoundingClientRect();
    let shiftX = startX - rect.left;
    let shiftY = startY - rect.top;

    function moveAt(pageX, pageY) {
        const parentRect = textLayer.getBoundingClientRect();
        let newLeft = pageX - shiftX - parentRect.left;
        let newTop = pageY - shiftY - parentRect.top;
        div.style.left = newLeft + 'px';
        div.style.top = newTop + 'px';
    }

    function onMove(event) {
        let cx = event.clientX || event.touches[0].clientX;
        let cy = event.clientY || event.touches[0].clientY;
        moveAt(cx, cy);
        if (event.preventDefault) event.preventDefault();
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('touchmove', onMove, { passive: false });

    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', onMove);
    }, { once: true });

    document.addEventListener('touchend', () => {
        document.removeEventListener('touchmove', onMove);
    }, { once: true });
}

// Boşluğa tıklayınca metin seçimini kaldır
document.addEventListener('mousedown', (e) => {
    if (!e.target.closest('.draggable-text') && !e.target.closest('.toolbar-container')) {
        if (seciliMetinKutusu) {
            seciliMetinKutusu.classList.remove('selected');
            seciliMetinKutusu = null;
        }
    }
});

// ==========================================
// 5. İNDİRME VE KAYDETME
// ==========================================

function calismayiIndir() {
    const tempCanvas = document.createElement('canvas');
    const tempCtx = tempCanvas.getContext('2d');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;

    // Arkaplan
    const bg = new Image();
    bg.crossOrigin = "anonymous";
    bg.src = 'images/bos_harita.jpg';

    bg.onload = () => {
        // 1. Arkaplan
        tempCtx.drawImage(bg, 0, 0, tempCanvas.width, tempCanvas.height);
        // 2. Çizimler
        tempCtx.drawImage(canvas, 0, 0);
        // 3. Metinler
        document.querySelectorAll('.draggable-text').forEach(el => {
            const style = window.getComputedStyle(el);
            const left = parseFloat(style.left);
            const top = parseFloat(style.top);
            const fontSize = parseFloat(style.fontSize);
            const color = style.color;
            const text = el.innerText.replace('×', '');

            tempCtx.font = `bold ${fontSize}px Arial`;
            tempCtx.fillStyle = color;
            // Canvas text baseline farkı için düzeltme
            tempCtx.fillText(text, left, top + fontSize * 0.9);
        });

        // İndir
        const link = document.createElement('a');
        const baslik = document.getElementById('soruBasligi').innerText.replace(/\s+/g, '_');
        link.download = `Calisma_${baslik}.png`;
        link.href = tempCanvas.toDataURL();
        link.click();
    };
}

// ==========================================
// 6. EVENT LISTENERLAR
// ==========================================

canvas.addEventListener('mousedown', basla);
canvas.addEventListener('mousemove', ciz);
canvas.addEventListener('mouseup', bitir);
canvas.addEventListener('mouseout', () => { if (cizimModu) bitir(); });

canvas.addEventListener('touchstart', (e) => { e.preventDefault(); basla(e.touches[0]); });
canvas.addEventListener('touchmove', (e) => { e.preventDefault(); ciz(e.touches[0]); });
canvas.addEventListener('touchend', (e) => { e.preventDefault(); bitir(); });

document.getElementById('renkSecici').addEventListener('input', aracAyarlariniGuncelle);
document.getElementById('kalinlikAyari').addEventListener('input', aracAyarlariniGuncelle);

function basla(e) {
    if (aktifArac === 'yazi') {
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left); // Mouse
        const y = (e.clientY - rect.top);
        metinKutusuEkle(x, y);
        return;
    }

    cizimModu = true;
    ctx.beginPath();
    ciz(e);
}

function bitir() {
    if (cizimModu) {
        cizimModu = false;
        ctx.beginPath();
        gecmisiKaydet();
    }
}

function ciz(e) {
    if (!cizimModu || aktifArac === 'yazi') return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}