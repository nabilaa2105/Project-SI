function showResources() {
    let mood = document.getElementById("mood").value;
    let tipsContainer = document.getElementById("tips-container");
    tipsContainer.innerHTML = ""; 

    if (mood === "stres") {
        tipsContainer.innerHTML = "<p>Tarik napas dalam-dalam, lakukan relaksasi otot progresif, dan luangkan waktu untuk berjalan-jalan.</p>";
    } else if (mood === "insomnia") {
        tipsContainer.innerHTML = "<p>Cobalah meditasi sebelum tidur, hindari gadget, dan pastikan kamar tidur nyaman.</p>";
    } else if (mood === "kecemasan") {
        tipsContainer.innerHTML = "<p>Cobalah teknik pernapasan dalam, berbicara dengan seseorang yang Anda percayai, atau menulis jurnal.</p>";
    } else {
        tipsContainer.innerHTML = "<p>Pilih mood untuk mendapatkan tips terkait kesehatan mental Anda.</p>";
    }
}

function startMeditation() {
    let audio = new Audio('assets/meditation.mp3');
    audio.play();
    alert("Mulai meditasi... Temukan tempat yang tenang dan fokus pada pernapasan Anda.");
}
function showResources() {
    let mood = document.getElementById("mood").value;
    let tipsContainer = document.getElementById("tips-container");
    tipsContainer.innerHTML = "";

    if (mood === "stres") {
        tipsContainer.innerHTML = "<p>Tarik napas dalam-dalam, lakukan relaksasi otot progresif, dan luangkan waktu untuk berjalan-jalan.</p>";
    } else if (mood === "insomnia") {
        tipsContainer.innerHTML = "<p>Cobalah meditasi sebelum tidur, hindari gadget, dan pastikan kamar tidur nyaman.</p>";
    } else if (mood === "kecemasan") {
        tipsContainer.innerHTML = "<p>Cobalah teknik pernapasan dalam, berbicara dengan seseorang yang Anda percayai, atau menulis jurnal.</p>";
    }
}
function saveNote() {
    let feeling = document.getElementById("feeling").value;
    let activity = document.getElementById("activity").value;
    let confirmationMessage = document.getElementById("confirmation-message");

    if (feeling === "" || activity === "") {
        confirmationMessage.innerHTML = "<p style='color:red;'>Semua kolom harus diisi!</p>";
    } else {
        confirmationMessage.innerHTML = "<p>Catatan Anda berhasil disimpan. Terima kasih telah berbagi!</p>";
        document.getElementById("mental-health-form").reset();  // Reset form after submission
    }
}
function calculateResults() {
    const stressLevel = parseInt(document.getElementById("stress-level").value);
    const anxietyLevel = parseInt(document.getElementById("anxiety-level").value);
    const happinessLevel = parseInt(document.getElementById("happiness-level").value);

    const totalScore = stressLevel + anxietyLevel - happinessLevel;

    let resultMessage = "";
    if (totalScore <= 1) {
        resultMessage = "Kesehatan mental Anda tampak baik. Pertahankan kebiasaan positif Anda!";
    } else if (totalScore <= 5) {
        resultMessage = "Anda mungkin merasa sedikit stres atau cemas. Pertimbangkan untuk mengambil waktu untuk relaksasi.";
    } else {
        resultMessage = "Kesehatan mental Anda mungkin membutuhkan perhatian lebih. Jangan ragu untuk mencari dukungan profesional.";
    }

    document.getElementById("survey-result").textContent = resultMessage;
}
