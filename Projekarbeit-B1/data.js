/**
 * data.js
 * Sumber data statis untuk website SMS (Schreiben Macht Spass)
 * Berisi 70 data mahasiswa & artikel — tanpa database, di-load langsung ke index.html & member.html
 *
 * Cara pakai:
 *   1. Ganti nilai 'nama', 'judul', 'ringkasan', 'isi' dengan data asli tiap mahasiswa.
 *   2. Ganti 'foto' dengan path foto asli jika sudah tersedia (default: guest.jpg).
 *   3. 'kategori' harus salah satu dari: Film, Musik, Sport, Buch, Politisch, Kultur
 */

const KATEGORI_LIST = ["Film", "Musik", "Sport", "Buch", "Politisch", "Kultur"];

const daftarArtikel = [
  {
    id: 1,
    nama: "Prabowo Subianto",
    judul: "Warum MBG ist ein gutes Programm",
    kategori: "Politisch",
    ringkasan: "Das Programm Makan Bergizi Gratis (MBG) soll Kindern in Indonesien kostenloses und gesundes Essen geben.",
    isi: "Das Programm Makan Bergizi Gratis (MBG) ist ein Programm der indonesischen Regierung. Das Programm gibt Kindern kostenloses und gesundes Essen in der Schule. Das Ziel ist, dass Kinder genug Energie für das Lernen haben. Außerdem soll das Programm die Gesundheit und Ernährung der Kinder verbessern. Prabowo Subianto unterstützt dieses Programm. Viele Schulen und Kinder nehmen bereits an dem Programm teil. Das Essen besteht zum Beispiel aus Reis, Gemüse, Fleisch, Eiern oder Obst. Das Programm ist wichtig, weil gute Ernährung für Kinder sehr wichtig ist. Mit MBG können Kinder gesünder leben und besser für ihre Zukunft lernen.",
    foto: "assets/images/members/prabowo.png",
    gambar: "assets/images/mbg.jpeg"
  },
  {
    id: 2,
    nama: "Nama Mahasiswa 2",
    judul: "Judul Artikel 2 (Musik)",
    kategori: "Musik",
    ringkasan: "Ringkasan singkat artikel ke-2 tentang topik Musik. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-2. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 3,
    nama: "Nama Mahasiswa 3",
    judul: "Judul Artikel 3 (Sport)",
    kategori: "Sport",
    ringkasan: "Ringkasan singkat artikel ke-3 tentang topik Sport. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-3. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 4,
    nama: "Nama Mahasiswa 4",
    judul: "Judul Artikel 4 (Buch)",
    kategori: "Buch",
    ringkasan: "Ringkasan singkat artikel ke-4 tentang topik Buch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-4. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 5,
    nama: "Nama Mahasiswa 5",
    judul: "Judul Artikel 5 (Politisch)",
    kategori: "Politisch",
    ringkasan: "Ringkasan singkat artikel ke-5 tentang topik Politisch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-5. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 6,
    nama: "Nama Mahasiswa 6",
    judul: "Judul Artikel 6 (Kultur)",
    kategori: "Kultur",
    ringkasan: "Ringkasan singkat artikel ke-6 tentang topik Kultur. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-6. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 7,
    nama: "Nama Mahasiswa 7",
    judul: "Judul Artikel 7 (Film)",
    kategori: "Film",
    ringkasan: "Ringkasan singkat artikel ke-7 tentang topik Film. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-7. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 8,
    nama: "Nama Mahasiswa 8",
    judul: "Judul Artikel 8 (Musik)",
    kategori: "Musik",
    ringkasan: "Ringkasan singkat artikel ke-8 tentang topik Musik. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-8. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 9,
    nama: "Nama Mahasiswa 9",
    judul: "Judul Artikel 9 (Sport)",
    kategori: "Sport",
    ringkasan: "Ringkasan singkat artikel ke-9 tentang topik Sport. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-9. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 10,
    nama: "Nama Mahasiswa 10",
    judul: "Judul Artikel 10 (Buch)",
    kategori: "Buch",
    ringkasan: "Ringkasan singkat artikel ke-10 tentang topik Buch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-10. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 11,
    nama: "Nama Mahasiswa 11",
    judul: "Judul Artikel 11 (Politisch)",
    kategori: "Politisch",
    ringkasan: "Ringkasan singkat artikel ke-11 tentang topik Politisch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-11. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 12,
    nama: "Nama Mahasiswa 12",
    judul: "Judul Artikel 12 (Kultur)",
    kategori: "Kultur",
    ringkasan: "Ringkasan singkat artikel ke-12 tentang topik Kultur. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-12. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 13,
    nama: "Nama Mahasiswa 13",
    judul: "Judul Artikel 13 (Film)",
    kategori: "Film",
    ringkasan: "Ringkasan singkat artikel ke-13 tentang topik Film. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-13. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 14,
    nama: "Nama Mahasiswa 14",
    judul: "Judul Artikel 14 (Musik)",
    kategori: "Musik",
    ringkasan: "Ringkasan singkat artikel ke-14 tentang topik Musik. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-14. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 15,
    nama: "Nama Mahasiswa 15",
    judul: "Judul Artikel 15 (Sport)",
    kategori: "Sport",
    ringkasan: "Ringkasan singkat artikel ke-15 tentang topik Sport. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-15. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 16,
    nama: "Nama Mahasiswa 16",
    judul: "Judul Artikel 16 (Buch)",
    kategori: "Buch",
    ringkasan: "Ringkasan singkat artikel ke-16 tentang topik Buch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-16. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 17,
    nama: "Nama Mahasiswa 17",
    judul: "Judul Artikel 17 (Politisch)",
    kategori: "Politisch",
    ringkasan: "Ringkasan singkat artikel ke-17 tentang topik Politisch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-17. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 18,
    nama: "Nama Mahasiswa 18",
    judul: "Judul Artikel 18 (Kultur)",
    kategori: "Kultur",
    ringkasan: "Ringkasan singkat artikel ke-18 tentang topik Kultur. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-18. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 19,
    nama: "Nama Mahasiswa 19",
    judul: "Judul Artikel 19 (Film)",
    kategori: "Film",
    ringkasan: "Ringkasan singkat artikel ke-19 tentang topik Film. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-19. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 20,
    nama: "Nama Mahasiswa 20",
    judul: "Judul Artikel 20 (Musik)",
    kategori: "Musik",
    ringkasan: "Ringkasan singkat artikel ke-20 tentang topik Musik. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-20. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 21,
    nama: "Nama Mahasiswa 21",
    judul: "Judul Artikel 21 (Sport)",
    kategori: "Sport",
    ringkasan: "Ringkasan singkat artikel ke-21 tentang topik Sport. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-21. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 22,
    nama: "Nama Mahasiswa 22",
    judul: "Judul Artikel 22 (Buch)",
    kategori: "Buch",
    ringkasan: "Ringkasan singkat artikel ke-22 tentang topik Buch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-22. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 23,
    nama: "Nama Mahasiswa 23",
    judul: "Judul Artikel 23 (Politisch)",
    kategori: "Politisch",
    ringkasan: "Ringkasan singkat artikel ke-23 tentang topik Politisch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-23. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 24,
    nama: "Nama Mahasiswa 24",
    judul: "Judul Artikel 24 (Kultur)",
    kategori: "Kultur",
    ringkasan: "Ringkasan singkat artikel ke-24 tentang topik Kultur. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-24. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 25,
    nama: "Nama Mahasiswa 25",
    judul: "Judul Artikel 25 (Film)",
    kategori: "Film",
    ringkasan: "Ringkasan singkat artikel ke-25 tentang topik Film. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-25. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 26,
    nama: "Nama Mahasiswa 26",
    judul: "Judul Artikel 26 (Musik)",
    kategori: "Musik",
    ringkasan: "Ringkasan singkat artikel ke-26 tentang topik Musik. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-26. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 27,
    nama: "Nama Mahasiswa 27",
    judul: "Judul Artikel 27 (Sport)",
    kategori: "Sport",
    ringkasan: "Ringkasan singkat artikel ke-27 tentang topik Sport. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-27. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 28,
    nama: "Nama Mahasiswa 28",
    judul: "Judul Artikel 28 (Buch)",
    kategori: "Buch",
    ringkasan: "Ringkasan singkat artikel ke-28 tentang topik Buch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-28. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 29,
    nama: "Nama Mahasiswa 29",
    judul: "Judul Artikel 29 (Politisch)",
    kategori: "Politisch",
    ringkasan: "Ringkasan singkat artikel ke-29 tentang topik Politisch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-29. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 30,
    nama: "Nama Mahasiswa 30",
    judul: "Judul Artikel 30 (Kultur)",
    kategori: "Kultur",
    ringkasan: "Ringkasan singkat artikel ke-30 tentang topik Kultur. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-30. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 31,
    nama: "Nama Mahasiswa 31",
    judul: "Judul Artikel 31 (Film)",
    kategori: "Film",
    ringkasan: "Ringkasan singkat artikel ke-31 tentang topik Film. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-31. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 32,
    nama: "Nama Mahasiswa 32",
    judul: "Judul Artikel 32 (Musik)",
    kategori: "Musik",
    ringkasan: "Ringkasan singkat artikel ke-32 tentang topik Musik. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-32. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 33,
    nama: "Nama Mahasiswa 33",
    judul: "Judul Artikel 33 (Sport)",
    kategori: "Sport",
    ringkasan: "Ringkasan singkat artikel ke-33 tentang topik Sport. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-33. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 34,
    nama: "Nama Mahasiswa 34",
    judul: "Judul Artikel 34 (Buch)",
    kategori: "Buch",
    ringkasan: "Ringkasan singkat artikel ke-34 tentang topik Buch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-34. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 35,
    nama: "Nama Mahasiswa 35",
    judul: "Judul Artikel 35 (Politisch)",
    kategori: "Politisch",
    ringkasan: "Ringkasan singkat artikel ke-35 tentang topik Politisch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-35. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 36,
    nama: "Nama Mahasiswa 36",
    judul: "Judul Artikel 36 (Kultur)",
    kategori: "Kultur",
    ringkasan: "Ringkasan singkat artikel ke-36 tentang topik Kultur. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-36. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 37,
    nama: "Nama Mahasiswa 37",
    judul: "Judul Artikel 37 (Film)",
    kategori: "Film",
    ringkasan: "Ringkasan singkat artikel ke-37 tentang topik Film. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-37. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 38,
    nama: "Nama Mahasiswa 38",
    judul: "Judul Artikel 38 (Musik)",
    kategori: "Musik",
    ringkasan: "Ringkasan singkat artikel ke-38 tentang topik Musik. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-38. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 39,
    nama: "Nama Mahasiswa 39",
    judul: "Judul Artikel 39 (Sport)",
    kategori: "Sport",
    ringkasan: "Ringkasan singkat artikel ke-39 tentang topik Sport. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-39. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 40,
    nama: "Nama Mahasiswa 40",
    judul: "Judul Artikel 40 (Buch)",
    kategori: "Buch",
    ringkasan: "Ringkasan singkat artikel ke-40 tentang topik Buch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-40. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 41,
    nama: "Nama Mahasiswa 41",
    judul: "Judul Artikel 41 (Politisch)",
    kategori: "Politisch",
    ringkasan: "Ringkasan singkat artikel ke-41 tentang topik Politisch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-41. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 42,
    nama: "Nama Mahasiswa 42",
    judul: "Judul Artikel 42 (Kultur)",
    kategori: "Kultur",
    ringkasan: "Ringkasan singkat artikel ke-42 tentang topik Kultur. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-42. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 43,
    nama: "Nama Mahasiswa 43",
    judul: "Judul Artikel 43 (Film)",
    kategori: "Film",
    ringkasan: "Ringkasan singkat artikel ke-43 tentang topik Film. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-43. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 44,
    nama: "Nama Mahasiswa 44",
    judul: "Judul Artikel 44 (Musik)",
    kategori: "Musik",
    ringkasan: "Ringkasan singkat artikel ke-44 tentang topik Musik. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-44. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 45,
    nama: "Nama Mahasiswa 45",
    judul: "Judul Artikel 45 (Sport)",
    kategori: "Sport",
    ringkasan: "Ringkasan singkat artikel ke-45 tentang topik Sport. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-45. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 46,
    nama: "Nama Mahasiswa 46",
    judul: "Judul Artikel 46 (Buch)",
    kategori: "Buch",
    ringkasan: "Ringkasan singkat artikel ke-46 tentang topik Buch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-46. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 47,
    nama: "Nama Mahasiswa 47",
    judul: "Judul Artikel 47 (Politisch)",
    kategori: "Politisch",
    ringkasan: "Ringkasan singkat artikel ke-47 tentang topik Politisch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-47. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 48,
    nama: "Nama Mahasiswa 48",
    judul: "Judul Artikel 48 (Kultur)",
    kategori: "Kultur",
    ringkasan: "Ringkasan singkat artikel ke-48 tentang topik Kultur. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-48. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 49,
    nama: "Nama Mahasiswa 49",
    judul: "Judul Artikel 49 (Film)",
    kategori: "Film",
    ringkasan: "Ringkasan singkat artikel ke-49 tentang topik Film. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-49. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 50,
    nama: "Nama Mahasiswa 50",
    judul: "Judul Artikel 50 (Musik)",
    kategori: "Musik",
    ringkasan: "Ringkasan singkat artikel ke-50 tentang topik Musik. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-50. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 51,
    nama: "Nama Mahasiswa 51",
    judul: "Judul Artikel 51 (Sport)",
    kategori: "Sport",
    ringkasan: "Ringkasan singkat artikel ke-51 tentang topik Sport. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-51. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 52,
    nama: "Nama Mahasiswa 52",
    judul: "Judul Artikel 52 (Buch)",
    kategori: "Buch",
    ringkasan: "Ringkasan singkat artikel ke-52 tentang topik Buch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-52. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 53,
    nama: "Nama Mahasiswa 53",
    judul: "Judul Artikel 53 (Politisch)",
    kategori: "Politisch",
    ringkasan: "Ringkasan singkat artikel ke-53 tentang topik Politisch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-53. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 54,
    nama: "Nama Mahasiswa 54",
    judul: "Judul Artikel 54 (Kultur)",
    kategori: "Kultur",
    ringkasan: "Ringkasan singkat artikel ke-54 tentang topik Kultur. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-54. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 55,
    nama: "Nama Mahasiswa 55",
    judul: "Judul Artikel 55 (Film)",
    kategori: "Film",
    ringkasan: "Ringkasan singkat artikel ke-55 tentang topik Film. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-55. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 56,
    nama: "Nama Mahasiswa 56",
    judul: "Judul Artikel 56 (Musik)",
    kategori: "Musik",
    ringkasan: "Ringkasan singkat artikel ke-56 tentang topik Musik. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-56. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 57,
    nama: "Nama Mahasiswa 57",
    judul: "Judul Artikel 57 (Sport)",
    kategori: "Sport",
    ringkasan: "Ringkasan singkat artikel ke-57 tentang topik Sport. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-57. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 58,
    nama: "Nama Mahasiswa 58",
    judul: "Judul Artikel 58 (Buch)",
    kategori: "Buch",
    ringkasan: "Ringkasan singkat artikel ke-58 tentang topik Buch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-58. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 59,
    nama: "Nama Mahasiswa 59",
    judul: "Judul Artikel 59 (Politisch)",
    kategori: "Politisch",
    ringkasan: "Ringkasan singkat artikel ke-59 tentang topik Politisch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-59. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 60,
    nama: "Nama Mahasiswa 60",
    judul: "Judul Artikel 60 (Kultur)",
    kategori: "Kultur",
    ringkasan: "Ringkasan singkat artikel ke-60 tentang topik Kultur. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-60. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 61,
    nama: "Nama Mahasiswa 61",
    judul: "Judul Artikel 61 (Film)",
    kategori: "Film",
    ringkasan: "Ringkasan singkat artikel ke-61 tentang topik Film. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-61. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 62,
    nama: "Nama Mahasiswa 62",
    judul: "Judul Artikel 62 (Musik)",
    kategori: "Musik",
    ringkasan: "Ringkasan singkat artikel ke-62 tentang topik Musik. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-62. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 63,
    nama: "Nama Mahasiswa 63",
    judul: "Judul Artikel 63 (Sport)",
    kategori: "Sport",
    ringkasan: "Ringkasan singkat artikel ke-63 tentang topik Sport. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-63. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 64,
    nama: "Nama Mahasiswa 64",
    judul: "Judul Artikel 64 (Buch)",
    kategori: "Buch",
    ringkasan: "Ringkasan singkat artikel ke-64 tentang topik Buch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-64. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 65,
    nama: "Nama Mahasiswa 65",
    judul: "Judul Artikel 65 (Politisch)",
    kategori: "Politisch",
    ringkasan: "Ringkasan singkat artikel ke-65 tentang topik Politisch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-65. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 66,
    nama: "Nama Mahasiswa 66",
    judul: "Judul Artikel 66 (Kultur)",
    kategori: "Kultur",
    ringkasan: "Ringkasan singkat artikel ke-66 tentang topik Kultur. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-66. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 67,
    nama: "Nama Mahasiswa 67",
    judul: "Judul Artikel 67 (Film)",
    kategori: "Film",
    ringkasan: "Ringkasan singkat artikel ke-67 tentang topik Film. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-67. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 68,
    nama: "Nama Mahasiswa 68",
    judul: "Judul Artikel 68 (Musik)",
    kategori: "Musik",
    ringkasan: "Ringkasan singkat artikel ke-68 tentang topik Musik. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-68. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 69,
    nama: "Nama Mahasiswa 69",
    judul: "Judul Artikel 69 (Sport)",
    kategori: "Sport",
    ringkasan: "Ringkasan singkat artikel ke-69 tentang topik Sport. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-69. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 70,
    nama: "Nama Mahasiswa 70",
    judul: "Judul Artikel 70 (Buch)",
    kategori: "Buch",
    ringkasan: "Ringkasan singkat artikel ke-70 tentang topik Buch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-70. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 71,
    nama: "Nama Mahasiswa 71",
    judul: "Judul Artikel 71 (Politisch)",
    kategori: "Politisch",
    ringkasan: "Ringkasan singkat artikel ke-71 tentang topik Politisch. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-71. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 72,
    nama: "Nama Mahasiswa 72",
    judul: "Judul Artikel 72 (Kultur)",
    kategori: "Kultur",
    ringkasan: "Ringkasan singkat artikel ke-72 tentang topik Kultur. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-72. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 73,
    nama: "Nama Mahasiswa 73",
    judul: "Judul Artikel 73 (Film)",
    kategori: "Film",
    ringkasan: "Ringkasan singkat artikel ke-73 tentang topik Film. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-73. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
  {
    id: 74,
    nama: "Nama Mahasiswa 74",
    judul: "Judul Artikel 74 (Musik)",
    kategori: "Musik",
    ringkasan: "Ringkasan singkat artikel ke-74 tentang topik Musik. Ganti dengan ringkasan asli.",
    isi: "Isi lengkap artikel ke-74. Tulis konten artikel berbahasa Jerman di sini, menggantikan teks placeholder ini.",
    foto: "assets/images/members/guest.jpg",
    gambar: "assets/images/background.jpg"
  },
];

// Ekspor untuk digunakan di index.html & member.html
if (typeof module !== "undefined" && module.exports) {
  module.exports = { daftarArtikel, KATEGORI_LIST };
}
