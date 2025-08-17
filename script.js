// Ambil semua elemen yang kita butuhkan dari HTML
const tujuanCards = document.querySelectorAll(".tujuan-card");
const overlay = document.getElementById("tujuan-overlay");
const modal = document.getElementById("tujuan-modal");
const closeBtn = document.querySelector(".close-btn");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");

// Loop (ulangi) untuk setiap kartu tujuan
tujuanCards.forEach((card) => {
  // Tambahkan event listener 'click' pada setiap kartu
  card.addEventListener("click", () => {
    // Ambil data dari atribut 'data-*' pada kartu yang diklik
    const title = card.dataset.title;
    const text = card.dataset.text; // Hanya ambil judul dan teks

    // Masukkan data tersebut ke dalam elemen-elemen di modal
    modalTitle.textContent = title;
    modalText.textContent = text; // Hanya isi judul dan teks

    // Tampilkan overlay dengan menambahkan class 'active'
    overlay.classList.add("active");
  });
});

// Fungsi untuk menutup modal
function closeModal() {
  overlay.classList.remove("active");
}

// Tambahkan event listener 'click' pada tombol close (X)
closeBtn.addEventListener("click", closeModal);

// Tambahkan event listener untuk menutup modal saat mengklik di luar area modal (di area overlay gelap)
overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    closeModal();
  }
});
