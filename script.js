// --- 1. VERİ HAVUZU ---
const DATA = {
    "Doğal Afetler": {
        path: "images/Doğal_afetler/",
        files: ["Çöküntü_depremler.jpg", "Deprem_riskinin_az_olduğu_yerler.jpg", "Tektonik_Depremler.jpg", "toprak_tipleri.jpg"]
    },
    "Hayvancılık": {
        path: "images/hayvancılık/",
        files: ["arıcılık.jpg", "ipek_bocegi.jpg", "koyun.jpg", "kumes_hayvancılığı.jpg", "manda.jpg", "siğir.jpg", "tiftik_kecisi.jpg", "Turkiyede_hayvancılık.jpg"]
    },
    "Madenler": {
        path: "images/madenler/",
        files: ["Antimon.jpg", "Asfaltit.jpg", "bakır_madeni_ve_fabrikaları.jpg", "barit.jpg", "Bentonit.jpg", "boksit_madeni_ve_Fabrikaları.jpg", "bor_madeni_ve_Fabrikaları.jpg", "Cıva_madeni_ve_Fabrikaları.jpg", "demir_madeni_ve_fabrikalari.jpg", "Doğal_gaz_termik_santral_LNG_Terminal_Depolama_Tesisi.jpg", "Dolomit.jpg", "Feldispat_madeni_ve_Fabrikaları.jpg", "Ferrakrom.jpg", "fosfat_madeni_ve_Fabrikaları.jpg", "Güneş_enerjisi.jpg", "Jeotermal_santral_ve_kaynaklar.jpg", "krom_madeni_ve_Fabrikaları.jpg", "kükürt_madeni_ve_Fabrikaları.jpg", "Kurşun_ve_çinko_madeni_ve_Fabrikaları.jpg", "Kurşun-çinko_Bakır_alüminyum.jpg", "Linyit_kömürü_ve_termik_santralleri.jpg", "Lüle_ve_Oltu_Taşı.jpg", "Manganez.jpg", "Mermer_madeni_ve_Fabrikaları.jpg", "Molibden.jpg", "Nikel.jpg", "Nükleer_enerji_ve_santral.jpg", "Perlit.jpg", "Petrol_ve_Refineri.jpg", "Rüzgar_Gücü.jpg", "Su_gücü.jpg", "Taş_kömürü_ve_termik_santral.jpg", "Trona_madeni_ve_Fabrikaları.jpg", "Tuz_madeni_ve_Fabrikaları.jpg", "Volfram.jpg", "Zımpara_Taşı_madeni_ve_Fabrikaları.jpg"]
    },
    "Projeler": {
        path: "images/projeler/",
        files: ["Doğal_hayatı_koruma_vakfı_(WWF).jpg", "Doğu_Anadolu_Projesi_(DAP).jpg", "Doğu_Karadeniz_Projesi__(DOKAP).jpg", "Güneydoğu_Anadolu_projesi_(GAP).jpg", "Kıbrıs'a_Su_temini_projesi.jpg", "Konya_Ovası_Projesi.jpg", "Yeşilırmak_Hazası_gelişim_projesi.jpg", "Zonguldak_Bartın_Karabük_Projesi_(ZBK).jpg"]
    },
    "Sanayi": {
        path: "images/sanayi/",
        files: ["Alkollü_içki_fabrikaları.jpg", "Beyaz_Eşya_Sanayi.jpg", "Bitkisel_yağ.jpg", "Cam_ve_tuğla-kiremit.jpg", "Çay_endüstirisi.jpg", "Çimento.jpg", "Demir_Çelik.jpg", "Demir_yolu_taşıtı_üretimi.jpg", "Deri_ve_Ayakkabı_ve_Hazır_giyim_sanayi.jpg", "Doğal_gaz_Çevrim_santralleri.jpg", "Gübre_sanayi.jpg", "Halı_kilim_Dokumacılığı.jpg", "ipekli_dokumacılık.jpg", "Kağıt_fabrikası.jpg", "Kereste_Sunta_Fabrikaları.jpg", "Konserve.jpg", "Mobilya.jpg", "Otamativ_traktör_ve_Tarım-araçları_üretimi.jpg", "Pamuklu_Dokuma.jpg", "Sabun_detarjan_sanayi.jpg", "Şeker_pancarı_endüstirisi.jpg", "Seramik.jpg", "Silah_Mühimmat_ve_patlayıcı_malzameler.jpg", "Süt_ürünleri.jpg", "Tersaneler_Uçak-fabrikası_ve_Yat_sanayi.jpg", "Unlu_Mamüller.jpg", "Yünlü_Dokuma.jpg"]
    },
    "Tarım": {
        path: "images/Tarım/",
        files: ["antep_fıstığı.jpg", "ayçiçeği.jpg", "buğday.jpg", "çay.jpg", "findik.jpg", "haşhaş.jpg", "incir.jpg", "kaysı.jpg", "kenevir.jpg", "kivi.jpg", "mısır.jpg", "muz.jpg", "pamuk.jpg", "pirinç.jpg", "Şeker_pancarı.jpg", "soya_fasulyesi.jpg", "Turkiyede_Tarım_ürünleri.jpg", "Turuncgil.jpg", "tütün.jpg", "zeytin.jpg"]
    },
    "Ulaşım": {
        path: "images/ulaşım/",
        files: ["Demir_İpek_yolu.jpg", "Demir-yolu_ve_YHT.jpg", "Deniz_yolu.jpg", "Geçitler_ve_Sınır-kapıları.jpg", "Hava_Yolu.jpg", "kara_Yolları_ve_otoyollar.jpg"]
    },
    "Yer Şekilleri": {
        path: "images/yer_şekilleri/",
        files: ["Akarsular.jpg", "Alüvyon_set_gölleri.jpg", "baraj_gölleri.jpg", "Buzul_göller.jpg", "Doğal_göller.jpg", "elma.jpg", "heyelan_set_gölleri.jpg", "karstik_göller.jpg", "karstik_ovalar.jpg", "kırık_dağlar.jpg", "kıvrım_dağları.jpg", "kıyı_ovaları.jpg", "Kıyı_set_gölleri.jpg", "platolar.jpg", "tektonik_ovalar.jpg", "traverten_set_gölleri.jpg", "Üzüm.jpg", "Volkanik_dağlar.jpg", "volkanik_göller.jpg", "Volkanik_ovalar.jpg", "volkanik_set_gölleri.jpg"]
    },
    "Karışık / Diğer": {
        path: "images/karışık/",
        files: ["Bitki_Örtüsü.jpg", "Doğal_Gaz_hatları.jpg", "kapalı_havzalar.jpg", "nufus_yoğunluğu.jpg", "Petrol_hatları.jpg", "Ramsar_alanları.jpg", "Serbest_ticaret_bölgeleri.jpg", "Turuzim_geliştirme_koridorları.jpg", "yavaş(sakin)_şehirler.jpg"]
    }
};

// --- GLOBAL DEĞİŞKENLER ---
let currentState = {
    mode: null,
    categoryKey: null,
    queue: [],
    currentIndex: 0,
    displayName: ""
};

const STORAGE_KEY = 'kpss_cografya_progress_v4'; // Versiyon 4

// Element Referansları
let categoryListEl, questionTitleEl, answerMapEl, answerSectionEl, baseMapEl, canvas, ctx, sidebar, gameAreaEl;

// --- BAŞLANGIÇ ---
window.onload = () => {
    // Elementleri Bul
    categoryListEl = document.getElementById('category-list');
    questionTitleEl = document.getElementById('question-title');
    answerMapEl = document.getElementById('answer-map');
    answerSectionEl = document.getElementById('answer-section'); // Yeni Alan
    baseMapEl = document.getElementById('base-map');
    canvas = document.getElementById('draw-canvas');
    ctx = canvas.getContext('2d');
    sidebar = document.getElementById('sidebar');
    gameAreaEl = document.getElementById('game-area');

    initSidebar();
    setupCanvas();
    setupUIEvents();
};

// --- MENÜ YÖNETİMİ ---
function initSidebar() {
    categoryListEl.innerHTML = "";
    Object.keys(DATA).forEach(catName => {
        const div = document.createElement('div');
        div.className = 'category-item';
        div.innerHTML = `
            <input type="checkbox" class="cat-checkbox" value="${catName}">
            <span class="category-name">${catName}</span>
            <span class="badge" style="font-size:0.8em; color:#888;">(${DATA[catName].files.length})</span>
        `;
        div.querySelector('.category-name').onclick = () => startSingleCategory(catName);
        div.querySelector('input').onchange = updateMixButton;
        categoryListEl.appendChild(div);
    });
}

function updateMixButton() {
    const checked = document.querySelectorAll('.cat-checkbox:checked');
    const btn = document.getElementById('btn-mix-selected');
    if (btn) {
        btn.disabled = checked.length === 0;
        btn.innerText = checked.length > 0 ? `Seçilenleri Karıştır (${checked.length})` : "Seçilenleri Karıştır";
    }
}

// --- OYUN MODLARI ---
function startSingleCategory(catName) {
    let saved = getSavedProgress(catName);
    if (saved && saved.queue.length > 0) {
        currentState = saved;
    } else {
        const files = DATA[catName].files.map(f => ({
            path: DATA[catName].path + f,
            title: cleanFileName(f)
        }));
        currentState = {
            mode: 'single',
            categoryKey: catName,
            displayName: catName,
            queue: shuffleArray(files),
            currentIndex: 0
        };
    }
    closeSidebarOnMobile();
    loadQuestion();
}

// --- OYUN DÖNGÜSÜ ---
function loadQuestion() {
    if (!currentState.queue || currentState.queue.length === 0) return;

    if (currentState.currentIndex >= currentState.queue.length) {
        alert("Bölüm Bitti! Başa dönülüyor...");
        currentState.currentIndex = 0;
        currentState.queue = shuffleArray(currentState.queue);
    }

    const currentQ = currentState.queue[currentState.currentIndex];

    // Bilgileri Güncelle
    document.getElementById('current-category-name').innerText = currentState.displayName;
    document.getElementById('progress-counter').innerText = `${currentState.currentIndex + 1} / ${currentState.queue.length}`;
    questionTitleEl.innerText = currentQ.title;

    // CEVAP KISMINI GİZLE
    answerSectionEl.classList.add('hidden');
    answerMapEl.src = ""; // Boşalt

    // Butonları ayarla
    document.getElementById('btn-show-answer').style.display = 'inline-block';
    document.getElementById('btn-next').style.display = 'none';

    // Çizimi temizle
    clearCanvas();
    saveProgress();
}

// --- BUTON FONKSİYONLARI ---

window.showAnswer = function () {
    // Şu anki soruyu al
    const currentQ = currentState.queue[currentState.currentIndex];

    // Cevap resmini yükle
    answerMapEl.src = currentQ.path;

    // Cevap kutusunu görünür yap
    answerSectionEl.classList.remove('hidden');

    // Butonları değiştir
    document.getElementById('btn-show-answer').style.display = 'none';
    document.getElementById('btn-next').style.display = 'inline-block';

    // Otomatik olarak aşağı kaydır
    setTimeout(() => {
        answerSectionEl.scrollIntoView({ behavior: 'smooth' });
    }, 100);
};

window.nextQuestion = function () {
    currentState.currentIndex++;
    loadQuestion();
    // Sayfayı yukarı kaydır
    gameAreaEl.scrollTo({ top: 0, behavior: 'smooth' });
};

// --- DİĞER FONKSİYONLAR ---
window.startSelectedMix = function () {
    const checked = document.querySelectorAll('.cat-checkbox:checked');
    if (checked.length === 0) return;
    let pool = [];
    let keys = [];
    checked.forEach(cb => {
        let catName = cb.value;
        keys.push(catName);
        DATA[catName].files.forEach(f => {
            pool.push({ path: DATA[catName].path + f, title: cleanFileName(f) + ` (${catName})` });
        });
    });
    const mixKey = "custom_mix_" + keys.sort().join('_');
    startMixedMode(mixKey, pool, "Özel Karışık");
};

window.startAllMix = function () {
    let pool = [];
    Object.keys(DATA).forEach(catName => {
        DATA[catName].files.forEach(f => {
            pool.push({ path: DATA[catName].path + f, title: cleanFileName(f) });
        });
    });
    startMixedMode("all_mixed", pool, "Tüm Konular");
};

function startMixedMode(storageKey, pool, displayName) {
    let saved = getSavedProgress(storageKey);
    if (saved && saved.queue.length > 0) {
        currentState = saved;
    } else {
        currentState = {
            mode: 'mixed',
            categoryKey: storageKey,
            displayName: displayName,
            queue: shuffleArray(pool),
            currentIndex: 0
        };
    }
    closeSidebarOnMobile();
    loadQuestion();
}

window.resetProgress = function () {
    if (confirm("Tüm kayıtlar silinsin mi?")) {
        localStorage.removeItem(STORAGE_KEY);
        location.reload();
    }
};

function cleanFileName(filename) {
    return filename.replace(/\.(jpg|jpeg|png)$/i, '').replace(/_/g, ' ');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function saveProgress() {
    try {
        let allProgress = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        allProgress[currentState.categoryKey] = {
            mode: currentState.mode,
            categoryKey: currentState.categoryKey,
            queue: currentState.queue,
            currentIndex: currentState.currentIndex,
            displayName: currentState.displayName
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
    } catch (e) { }
}

function getSavedProgress(key) {
    try {
        let allProgress = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
        return allProgress[key];
    } catch (e) { return null; }
}

// --- CANVAS AYARLARI ---
let isDrawing = false;
let penColor = 'red';

function setupCanvas() {
    if (baseMapEl.complete) resizeCanvas();
    else baseMapEl.onload = resizeCanvas;
    window.addEventListener('resize', resizeCanvas);
}

function resizeCanvas() {
    canvas.width = baseMapEl.clientWidth;
    canvas.height = baseMapEl.clientHeight;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 4;
    ctx.strokeStyle = penColor;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

window.setPenColor = (color) => {
    penColor = color;
    ctx.strokeStyle = color;
};

// KOORDİNAT HESAPLAMA (Çizim Kaymasını Önleyen Kısım)
const getPos = (e) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return { x: (clientX - rect.left) * scaleX, y: (clientY - rect.top) * scaleY };
};

const startDraw = (e) => {
    if (e.cancelable) e.preventDefault();
    isDrawing = true;
    ctx.beginPath();
    const pos = getPos(e);
    ctx.moveTo(pos.x, pos.y);
};

const draw = (e) => {
    if (!isDrawing) return;
    if (e.cancelable) e.preventDefault();
    const pos = getPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
};

const stopDraw = () => { isDrawing = false; ctx.beginPath(); };

canvas.addEventListener('mousedown', startDraw);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDraw);
canvas.addEventListener('mouseout', stopDraw);
canvas.addEventListener('touchstart', startDraw, { passive: false });
canvas.addEventListener('touchmove', draw, { passive: false });
canvas.addEventListener('touchend', stopDraw);

// UI Events
function setupUIEvents() {
    const toggleBtn = document.getElementById('toggle-menu');
    const helpBtn = document.getElementById('btn-help');
    const modal = document.getElementById('help-modal');
    const closeModal = document.querySelector('.close-modal');

    document.getElementById('btn-mix-selected').onclick = window.startSelectedMix;
    document.getElementById('btn-mix-all').onclick = window.startAllMix;
    document.getElementById('btn-reset-progress').onclick = window.resetProgress;

    if (toggleBtn) toggleBtn.onclick = () => sidebar.classList.toggle('open');
    if (helpBtn) helpBtn.onclick = () => modal.classList.remove('hidden');
    if (closeModal) closeModal.onclick = () => modal.classList.add('hidden');
    window.onclick = (e) => { if (e.target == modal) modal.classList.add('hidden'); };
}

function closeSidebarOnMobile() {
    if (window.innerWidth <= 768) sidebar.classList.remove('open');
}