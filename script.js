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
        files: ["Akarsular.jpg", "Alüvyon_set_gölleri.jpg", "baraj_gölleri.jpg", "Buzul_göller.jpg", "Doğal_göller.jpg", "heyelan_set_gölleri.jpg", "karstik_göller.jpg", "karstik_ovalar.jpg", "kırık_dağlar.jpg", "kıvrım_dağları.jpg", "kıyı_ovaları.jpg", "Kıyı_set_gölleri.jpg", "platolar.jpg", "tektonik_ovalar.jpg", "traverten_set_gölleri.jpg", "Volkanik_dağlar.jpg", "volkanik_göller.jpg", "Volkanik_ovalar.jpg", "volkanik_set_gölleri.jpg"]
    },
    "Karışık / Diğer": {
        path: "images/karışık/",
        files: ["Bitki_Örtüsü.jpg", "Doğal_Gaz_hatları.jpg", "kapalı_havzalar.jpg", "nufus_yoğunluğu.jpg", "Petrol_hatları.jpg", "Ramsar_alanları.jpg", "Serbest_ticaret_bölgeleri.jpg", "Turuzim_geliştirme_koridorları.jpg", "yavaş(sakin)_şehirler.jpg"]
    }
};

let currentState = { mode: null, categoryKey: null, queue: [], currentIndex: 0, displayName: "" };
const STORAGE_KEY_PROGRESS = 'kpss_cografya_progress_v7';
const STORAGE_KEY_SIZE = 'kpss_map_size_v1';

let categoryListEl, questionTitleEl, answerMapEl, answerSectionEl, baseMapEl, canvas, ctx, sidebar, gameAreaEl, resizableContainer;
let drawingState = { isDrawing: false, tool: 'brush', color: '#ff0000', lineWidth: 4, startX: 0, startY: 0, snapshot: null };
let history = [];
let historyStep = -1;

window.onload = () => {
    categoryListEl = document.getElementById('category-list');
    questionTitleEl = document.getElementById('question-title');
    answerMapEl = document.getElementById('answer-map');
    answerSectionEl = document.getElementById('answer-section');
    baseMapEl = document.getElementById('base-map');
    canvas = document.getElementById('draw-canvas');
    ctx = canvas.getContext('2d');
    sidebar = document.getElementById('sidebar');
    gameAreaEl = document.getElementById('game-area');
    resizableContainer = document.getElementById('resizable-container');

    initSidebar();
    loadMapSize();
    setupCanvasEvents();
    setupUIEvents();
    setupToolEvents();
    setupSearch(); // Yeni Arama Motorunu Başlat
};

// --- ARAMA MOTORU SİSTEMİ ---
function setupSearch() {
    const searchInput = document.getElementById('map-search');
    const resultsDiv = document.getElementById('search-results');

    searchInput.oninput = (e) => {
        const term = e.target.value.toLocaleLowerCase('tr').trim();

        if (term.length < 2) {
            resultsDiv.classList.add('hidden');
            return;
        }

        let matches = [];
        Object.keys(DATA).forEach(cat => {
            DATA[cat].files.forEach(file => {
                const title = cleanFileName(file);
                if (title.toLocaleLowerCase('tr').includes(term)) {
                    matches.push({
                        category: cat,
                        fileName: file,
                        title: title,
                        path: DATA[cat].path + file
                    });
                }
            });
        });

        renderSearchResults(matches);
    };

    // Dışarı tıklayınca sonuçları kapat
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !resultsDiv.contains(e.target)) {
            resultsDiv.classList.add('hidden');
        }
    });
}

function renderSearchResults(matches) {
    const resultsDiv = document.getElementById('search-results');
    resultsDiv.innerHTML = "";

    if (matches.length === 0) {
        resultsDiv.innerHTML = '<div class="search-result-item">Sonuç bulunamadı...</div>';
        resultsDiv.classList.remove('hidden');
        return;
    }

    matches.forEach(match => {
        const item = document.createElement('div');
        item.className = 'search-result-item';
        item.innerHTML = `<strong>${match.title}</strong><small>${match.category}</small>`;
        item.onclick = () => {
            selectSearchQuestion(match);
            document.getElementById('map-search').value = "";
            resultsDiv.classList.add('hidden');
        };
        resultsDiv.appendChild(item);
    });
    resultsDiv.classList.remove('hidden');
}

function selectSearchQuestion(match) {
    // Arama sonucunu tek soruluk bir soru formatında yükle
    currentState = {
        mode: 'search',
        categoryKey: 'search_mode',
        displayName: "Arama Sonucu",
        queue: [{ path: match.path, title: match.title }],
        currentIndex: 0
    };
    closeSidebarOnMobile();
    loadQuestion();
}

// --- MEVCUT SİSTEMİN DİĞER FONKSİYONLARI ---
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

function startSingleCategory(catName) {
    let saved = getSavedProgress(catName);
    if (saved && saved.queue.length > 0) {
        currentState = saved;
    } else {
        const files = DATA[catName].files.map(f => ({ path: DATA[catName].path + f, title: cleanFileName(f) }));
        currentState = { mode: 'single', categoryKey: catName, displayName: catName, queue: shuffleArray(files), currentIndex: 0 };
    }
    closeSidebarOnMobile();
    loadQuestion();
}

function loadQuestion() {
    if (!currentState.queue || currentState.queue.length === 0) return;

    if (currentState.currentIndex >= currentState.queue.length) {
        alert("Bölüm Bitti! Başa dönülüyor...");
        currentState.currentIndex = 0;
        currentState.queue = shuffleArray(currentState.queue);
    }

    const currentQ = currentState.queue[currentState.currentIndex];
    document.getElementById('current-category-name').innerText = currentState.displayName;
    document.getElementById('progress-counter').innerText = `${currentState.currentIndex + 1} / ${currentState.queue.length}`;
    questionTitleEl.innerText = currentQ.title;

    answerSectionEl.classList.add('hidden');
    answerMapEl.src = "";

    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnShow = document.getElementById('btn-show-answer');

    btnShow.style.display = 'inline-block';
    btnNext.style.display = 'none';

    if (currentState.currentIndex > 0) btnPrev.style.display = 'inline-block';
    else btnPrev.style.display = 'none';

    history = [];
    historyStep = -1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    setTimeout(() => {
        resizeCanvas();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        saveHistory();
    }, 50);

    saveProgress();
}

window.showAnswer = function () {
    const currentQ = currentState.queue[currentState.currentIndex];
    answerMapEl.src = currentQ.path;
    answerSectionEl.classList.remove('hidden');
    document.getElementById('btn-show-answer').style.display = 'none';
    document.getElementById('btn-next').style.display = 'inline-block';
    setTimeout(() => { answerSectionEl.scrollIntoView({ behavior: 'smooth' }); }, 100);
};

window.nextQuestion = function () {
    currentState.currentIndex++;
    loadQuestion();
    gameAreaEl.scrollTo({ top: 0, behavior: 'smooth' });
};

window.prevQuestion = function () {
    if (currentState.currentIndex > 0) {
        currentState.currentIndex--;
        loadQuestion();
        gameAreaEl.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

function cleanFileName(filename) { return filename.replace(/\.(jpg|jpeg|png)$/i, '').replace(/_/g, ' '); }
function shuffleArray(array) {
    let newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}
function saveProgress() { try { let allProgress = JSON.parse(localStorage.getItem(STORAGE_KEY_PROGRESS)) || {}; allProgress[currentState.categoryKey] = currentState; localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(allProgress)); } catch (e) { } }
function getSavedProgress(key) { try { return JSON.parse(localStorage.getItem(STORAGE_KEY_PROGRESS))[key]; } catch (e) { return null; } }

window.changeMapSize = function (delta) {
    let currentWidth = parseInt(resizableContainer.style.width) || 100;
    let newWidth = currentWidth + delta;
    if (newWidth < 30) newWidth = 30;
    if (newWidth > 200) newWidth = 200;
    applyMapSize(newWidth);
};
window.resetMapSize = function () { applyMapSize(100); };
function applyMapSize(sizePercent) {
    resizableContainer.style.width = sizePercent + "%";
    answerSectionEl.style.width = sizePercent + "%";
    localStorage.setItem(STORAGE_KEY_SIZE, sizePercent);
}
function loadMapSize() {
    let savedSize = localStorage.getItem(STORAGE_KEY_SIZE);
    if (savedSize) applyMapSize(parseInt(savedSize));
    else applyMapSize(100);
}

function setupCanvasEvents() {
    if (baseMapEl.complete) resizeCanvas();
    else baseMapEl.onload = resizeCanvas;
    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDraw);
    canvas.addEventListener('mouseout', stopDraw);
    canvas.addEventListener('touchstart', startDraw, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    canvas.addEventListener('touchend', stopDraw);
}

function resizeCanvas() {
    canvas.width = baseMapEl.clientWidth;
    canvas.height = baseMapEl.clientHeight;
    if (history.length > 0 && historyStep >= 0) {
        let img = new Image();
        img.src = history[historyStep];
        img.onload = () => { ctx.drawImage(img, 0, 0, canvas.width, canvas.height); };
    }
    ctx.lineCap = "round"; ctx.lineJoin = "round";
}

function setupToolEvents() {
    document.getElementById('color-picker').onchange = (e) => drawingState.color = e.target.value;
    document.getElementById('line-width').oninput = (e) => drawingState.lineWidth = e.target.value;
}
window.setTool = function (toolName) {
    drawingState.tool = toolName;
    document.querySelectorAll('.tool-btn').forEach(btn => btn.classList.remove('active'));
    let btn = document.getElementById('btn-' + toolName);
    if (btn) btn.classList.add('active');
};

function saveHistory() {
    historyStep++;
    if (historyStep < history.length) { history.length = historyStep; }
    history.push(canvas.toDataURL());
}
window.undo = function () { if (historyStep > 0) { historyStep--; redrawHistory(); } };
window.redo = function () { if (historyStep < history.length - 1) { historyStep++; redrawHistory(); } };
function redrawHistory() {
    let img = new Image();
    img.src = history[historyStep];
    img.onload = () => { ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.drawImage(img, 0, 0); };
}
window.clearCanvas = function () { ctx.clearRect(0, 0, canvas.width, canvas.height); saveHistory(); };

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
    drawingState.isDrawing = true;
    const pos = getPos(e);
    drawingState.startX = pos.x; drawingState.startY = pos.y;
    drawingState.snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.beginPath(); ctx.lineWidth = drawingState.lineWidth; ctx.strokeStyle = drawingState.color;
    if (drawingState.tool === 'brush') ctx.moveTo(pos.x, pos.y);
};
const draw = (e) => {
    if (!drawingState.isDrawing) return;
    if (e.cancelable) e.preventDefault();
    const pos = getPos(e);
    if (drawingState.tool === 'brush') { ctx.lineTo(pos.x, pos.y); ctx.stroke(); }
    else {
        ctx.putImageData(drawingState.snapshot, 0, 0); ctx.beginPath();
        if (drawingState.tool === 'line') { ctx.moveTo(drawingState.startX, drawingState.startY); ctx.lineTo(pos.x, pos.y); ctx.stroke(); }
        else if (drawingState.tool === 'rect') { let w = pos.x - drawingState.startX; let h = pos.y - drawingState.startY; ctx.strokeRect(drawingState.startX, drawingState.startY, w, h); }
        else if (drawingState.tool === 'circle') { let radius = Math.sqrt(Math.pow(pos.x - drawingState.startX, 2) + Math.pow(pos.y - drawingState.startY, 2)); ctx.arc(drawingState.startX, drawingState.startY, radius, 0, 2 * Math.PI); ctx.stroke(); }
    }
};
const stopDraw = () => { if (!drawingState.isDrawing) return; drawingState.isDrawing = false; ctx.beginPath(); saveHistory(); };

window.startAllMix = function () {
    let pool = []; Object.keys(DATA).forEach(catName => { DATA[catName].files.forEach(f => { pool.push({ path: DATA[catName].path + f, title: cleanFileName(f) }); }); });
    startMixedMode("all_mixed", pool, "Tüm Konular");
};

function startMixedMode(storageKey, pool, displayName) {
    let saved = getSavedProgress(storageKey);
    if (saved && saved.queue.length > 0) {
        currentState = saved;
    } else {
        currentState = { mode: 'mixed', categoryKey: storageKey, displayName: displayName, queue: shuffleArray(pool), currentIndex: 0 };
    }
    closeSidebarOnMobile();
    loadQuestion();
}

window.resetProgress = function () { if (confirm("Tüm kayıtlar silinsin mi?")) { localStorage.removeItem(STORAGE_KEY_PROGRESS); localStorage.removeItem(STORAGE_KEY_SIZE); location.reload(); } };
function setupUIEvents() {
    const toggleBtn = document.getElementById('toggle-menu'); const helpBtn = document.getElementById('btn-help'); const modal = document.getElementById('help-modal'); const closeModal = document.querySelector('.close-modal');
    document.getElementById('btn-mix-selected').onclick = () => {
        const checked = document.querySelectorAll('.cat-checkbox:checked');
        if (checked.length === 0) return;
        let pool = []; let keys = [];
        checked.forEach(cb => {
            let catName = cb.value; keys.push(catName);
            DATA[catName].files.forEach(f => { pool.push({ path: DATA[catName].path + f, title: cleanFileName(f) + ` (${catName})` }); });
        });
        const mixKey = "custom_mix_" + keys.sort().join('_');
        startMixedMode(mixKey, pool, "Özel Karışık");
    };
    document.getElementById('btn-mix-all').onclick = window.startAllMix;
    document.getElementById('btn-reset-progress').onclick = window.resetProgress;
    if (toggleBtn) toggleBtn.onclick = () => sidebar.classList.toggle('open');
    if (helpBtn) helpBtn.onclick = () => modal.classList.remove('hidden');
    if (closeModal) closeModal.onclick = () => modal.classList.add('hidden');
    window.onclick = (e) => { if (e.target == modal) modal.classList.add('hidden'); };
}
function closeSidebarOnMobile() { if (window.innerWidth <= 768) sidebar.classList.remove('open'); }