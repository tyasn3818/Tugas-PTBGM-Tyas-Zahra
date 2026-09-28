// ==========================================
// FORM PENDAFTARAN
// ==========================================

const form = document.getElementById("registrationForm");
const successOverlay = document.getElementById("successOverlay");
const successButton = document.getElementById("successButton");
const popupClose = document.getElementById("popupClose");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    successOverlay.classList.add("show");
});

successButton.addEventListener("click", function() {
    successOverlay.classList.remove("show");
    form.reset();
});

popupClose.addEventListener("click", function() {
    successOverlay.classList.remove("show");
});

successOverlay.addEventListener("click", function(event) {
    if (event.target === successOverlay) {
        successOverlay.classList.remove("show");
    }
});


// ==========================================
// CHATBOT
// ==========================================

var chatButton = document.getElementById("chatButton");
var chatBox = document.getElementById("chatBox");
var closeChat = document.getElementById("closeChat");

var chatInput = document.getElementById("chatInput");
var sendChat = document.getElementById("sendChat");
var chatContent = document.getElementById("chatContent");


// ==========================================
// BUKA CHATBOT
// ==========================================

chatButton.onclick = function() {
    chatBox.classList.toggle("active");

    if (chatBox.classList.contains("active")) {
        chatInput.focus();
    }
};


// ==========================================
// TUTUP CHATBOT
// ==========================================

closeChat.onclick = function() {
    chatBox.classList.remove("active");
};


// ==========================================
// KIRIM PESAN
// ==========================================

function sendMessage() {

    var message = chatInput.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user");

    chatInput.value = "";

    setTimeout(function() {

        var reply = getBotReply(message);

        addMessage(reply, "bot");

    }, 400);
}


// Tombol kirim
sendChat.onclick = function() {
    sendMessage();
};


// Tekan Enter
chatInput.onkeydown = function(event) {

    if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
    }

};


// ==========================================
// MENAMPILKAN PESAN
// ==========================================

function addMessage(message, type) {

    var messageElement = document.createElement("div");

    if (type === "user") {
        messageElement.className = "user-message";
    } else {
        messageElement.className = "bot-message";
    }

    messageElement.innerHTML = message;

    chatContent.appendChild(messageElement);

    chatContent.scrollTop = chatContent.scrollHeight;
}


// ==========================================
// JAWABAN CHATBOT
// ==========================================

function getBotReply(message) {

    var text = message.toLowerCase().trim();


    // SAPAAN
    if (
        text === "halo" ||
        text === "hai" ||
        text === "hello"
    ) {
        return "Halo! 👋<br><br>" +
               "Selamat datang di layanan pendaftaran ekstrakurikuler.<br><br>" +
               "Ada yang bisa saya bantu?";
    }


    // CARA DAFTAR
    if (
        text.indexOf("cara daftar") !== -1 ||
        text.indexOf("cara mendaftar") !== -1 ||
        text.indexOf("bagaimana daftar") !== -1
    ) {
        return "Cara mendaftarnya mudah kok! 😊<br><br>" +
               "1. Isi data diri.<br>" +
               "2. Pilih ekstrakurikuler.<br>" +
               "3. Tulis alasan memilihnya.<br>" +
               "4. Centang pernyataan.<br>" +
               "5. Klik tombol Daftar Sekarang.";
    }


    // PILIHAN EKSTRA
    if (
        text.indexOf("ekstrakurikuler") !== -1 ||
        text.indexOf("ekstra apa") !== -1 ||
        text.indexOf("pilihan ekstra") !== -1
    ) {
        return "Pilihan ekstrakurikuler yang tersedia:<br><br>" +
               "🧭 Pramuka<br>" +
               "🏀 Basket<br>" +
               "⚽ Futsal<br>" +
               "💻 IT & Coding<br>" +
               "❤️ PMR<br>" +
               "🎵 Seni Musik";
    }


    // PRAMUKA
    if (text.indexOf("pramuka") !== -1) {
        return "Pramuka cocok untuk kamu yang suka kegiatan kelompok dan organisasi. 🧭<br><br>" +
               "Kegiatannya melatih kerja sama, kedisiplinan, dan kepemimpinan.";
    }


    // BASKET
    if (text.indexOf("basket") !== -1) {
        return "Basket cocok untuk kamu yang suka olahraga. 🏀<br><br>" +
               "Kegiatannya melatih teknik bermain, kerja sama, dan kekompakan tim.";
    }


    // FUTSAL
    if (text.indexOf("futsal") !== -1) {
        return "Futsal cocok untuk kamu yang suka olahraga dan bermain bersama teman. ⚽<br><br>" +
               "Kegiatannya melatih kerja sama dan kekompakan.";
    }


    // CODING
    if (
        text.indexOf("coding") !== -1 ||
        text.indexOf("pemrograman") !== -1 ||
        text.indexOf("komputer") !== -1 ||
        text.indexOf("teknologi") !== -1
    ) {
        return "IT & Coding cocok untuk kamu yang tertarik dengan komputer dan teknologi. 💻<br><br>" +
               "Di sini kamu bisa belajar pemrograman, website, dan teknologi digital.";
    }


    // PMR
    if (
        text.indexOf("pmr") !== -1 ||
        text.indexOf("kesehatan") !== -1
    ) {
        return "PMR berhubungan dengan kegiatan kesehatan dan kemanusiaan. ❤️<br><br>" +
               "Kegiatannya melatih kepedulian, kerja sama, dan pengetahuan pertolongan pertama.";
    }


    // SENI MUSIK
    if (
        text.indexOf("musik") !== -1 ||
        text.indexOf("seni") !== -1 ||
        text.indexOf("nyanyi") !== -1
    ) {
        return "Seni Musik cocok untuk kamu yang suka musik dan kreativitas. 🎵<br><br>" +
               "Kamu bisa mengembangkan kemampuan bermusik dan mengekspresikan kreativitas.";
    }


    // FORMULIR
    if (
        text.indexOf("form") !== -1 ||
        text.indexOf("formulir") !== -1
    ) {
        return "Formulir ini terdiri dari 3 bagian:<br><br>" +
               "<b>01 Data Diri</b><br>" +
               "Isi nama, NIS/NISN, kelas, dan WhatsApp.<br><br>" +
               "<b>02 Ekstrakurikuler</b><br>" +
               "Pilih satu ekstrakurikuler.<br><br>" +
               "<b>03 Alasan</b><br>" +
               "Tulis alasan kamu memilih ekstrakurikuler.";
    }


    // KELAS
    if (
        text.indexOf("kelas") !== -1 ||
        text.indexOf("jurusan") !== -1
    ) {
        return "Pilih kelas sesuai kelas kamu saat ini ya. 😊";
    }


    // TERIMA KASIH
    if (
        text.indexOf("terima kasih") !== -1 ||
        text.indexOf("makasih") !== -1 ||
        text.indexOf("thanks") !== -1
    ) {
        return "Sama-sama! 😊<br><br>" +
               "Semoga proses pendaftarannya lancar ya!";
    }


    // KABAR
    if (text.indexOf("apa kabar") !== -1) {
        return "Aku baik-baik saja 😄<br><br>" +
               "Ada yang ingin kamu tanyakan tentang pendaftaran?";
    }


    // JAWABAN DEFAULT
    return "Maaf, aku belum mengerti pertanyaan itu. 😅<br><br>" +
           "Coba tanyakan tentang:<br>" +
           "• Cara daftar<br>" +
           "• Pilihan ekstrakurikuler<br>" +
           "• Pramuka<br>" +
           "• Basket<br>" +
           "• Futsal<br>" +
           "• IT & Coding<br>" +
           "• PMR<br>" +
           "• Seni Musik";
}