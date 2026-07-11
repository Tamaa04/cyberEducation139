// =====================================
// QUIZ DATA
// =====================================

const quizzes = {
  basic: [
    {
      category: "Cyber Security",
      question: "Apa tujuan utama Cyber Security?",
      answers: [
        "Melindungi data dan sistem dari serangan digital",
        "Mempercepat koneksi internet",
        "Menambah kapasitas RAM",
        "Menghapus seluruh aplikasi",
      ],
      correct: 0,
    },

    {
      category: "Cyber Security",
      question: "Cyber Security adalah...",
      answers: [
        "Upaya melindungi sistem, jaringan, dan data dari ancaman siber",
        "Cara memperbaiki komputer yang rusak",
        "Teknik mempercepat internet",
        "Aplikasi untuk bermain game",
      ],
      correct: 0,
    },

    {
      category: "Cyber Security",
      question: "Berikut yang termasuk aset digital adalah...",
      answers: ["Data pribadi", "Kabel LAN", "Meja komputer", "Kursi kantor"],
      correct: 0,
    },

    {
      category: "Cyber Security",
      question: "Serangan yang bertujuan mencuri data disebut...",
      answers: ["Cyber Attack", "Update System", "Backup Data", "Maintenance"],
      correct: 0,
    },

    {
      category: "Cyber Security",
      question: "Firewall berfungsi untuk...",
      answers: [
        "Menyaring lalu lintas jaringan yang masuk dan keluar",
        "Menghapus file sampah",
        "Memperbesar kapasitas harddisk",
        "Mengganti sistem operasi",
      ],
      correct: 0,
    },

    {
      category: "Cyber Security",
      question: "Antivirus digunakan untuk...",
      answers: [
        "Mendeteksi dan menghapus malware",
        "Mempercepat koneksi internet",
        "Menambah RAM",
        "Membuat website",
      ],
      correct: 0,
    },

    {
      category: "Cyber Security",
      question: "Berikut yang merupakan ancaman keamanan siber adalah...",
      answers: ["Malware", "Microsoft Word", "Printer", "Keyboard"],
      correct: 0,
    },

    {
      category: "Cyber Security",
      question: "Langkah pertama untuk menjaga keamanan akun adalah...",
      answers: [
        "Menggunakan password yang kuat",
        "Membagikan password ke teman",
        "Menulis password di media sosial",
        "Menggunakan password yang sama di semua akun",
      ],
      correct: 0,
    },

    {
      category: "Cyber Security",
      question: "Data pribadi yang harus dijaga kerahasiaannya adalah...",
      answers: ["Password akun", "Hobi", "Warna favorit", "Film favorit"],
      correct: 0,
    },

    {
      category: "Cyber Security",
      question: "Mengapa software perlu diperbarui secara berkala?",
      answers: [
        "Untuk menutup celah keamanan",
        "Agar warna aplikasi berubah",
        "Supaya komputer lebih berat",
        "Agar harddisk bertambah",
      ],
      correct: 0,
    },

    {
      category: "Cyber Security",
      question: "Apa yang dimaksud dengan data backup?",
      answers: [
        "Salinan data untuk mengantisipasi kehilangan",
        "Data yang dihapus",
        "File sampah",
        "Password akun",
      ],
      correct: 0,
    },

    {
      category: "Cyber Security",
      question:
        "Berikut ini yang merupakan praktik keamanan yang baik adalah...",
      answers: [
        "Mengaktifkan autentikasi dua faktor (2FA)",
        "Menggunakan password '123456'",
        "Mengabaikan update sistem",
        "Mengklik semua tautan yang diterima",
      ],
      correct: 0,
    },

    {
      category: "Cyber Security",
      question: "Jika menemukan aktivitas mencurigakan pada akun, sebaiknya...",
      answers: [
        "Segera mengganti password",
        "Membiarkannya",
        "Membagikan password ke teman",
        "Menghapus browser",
      ],
      correct: 0,
    },

    {
      category: "Cyber Security",
      question: "Tujuan utama edukasi Cyber Security adalah...",
      answers: [
        "Meningkatkan kesadaran terhadap ancaman digital",
        "Membuat komputer lebih cepat",
        "Mengurangi penggunaan internet",
        "Menghapus semua aplikasi",
      ],
      correct: 0,
    },

    {
      category: "Cyber Security",
      question: "Siapa yang bertanggung jawab menjaga keamanan data pribadi?",
      answers: [
        "Setiap pengguna",
        "Hanya penyedia internet",
        "Hanya perusahaan",
        "Hanya pemerintah",
      ],
      correct: 0,
    },
  ],

  phishing: [
    {
      category: "Phishing",
      question: "Apa yang dimaksud dengan phishing?",
      answers: [
        "Upaya mencuri informasi pribadi melalui email, pesan, atau website palsu",
        "Teknik mempercepat koneksi internet",
        "Cara menghapus virus komputer",
        "Metode backup data",
      ],
      correct: 0,
    },

    {
      category: "Phishing",
      question: "Tujuan utama serangan phishing adalah...",
      answers: [
        "Mencuri data pribadi dan akun korban",
        "Memperbaiki sistem operasi",
        "Meningkatkan keamanan jaringan",
        "Menghapus file sampah",
      ],
      correct: 0,
    },

    {
      category: "Phishing",
      question: "Salah satu ciri email phishing adalah...",
      answers: [
        "Mengandung tautan yang mencurigakan",
        "Selalu menggunakan domain resmi",
        "Tidak memiliki lampiran",
        "Selalu berasal dari teman",
      ],
      correct: 0,
    },

    {
      category: "Phishing",
      question: "Jika menerima email yang meminta password, sebaiknya...",
      answers: [
        "Mengabaikan dan menghapus email tersebut",
        "Mengirim password",
        "Membalas email",
        "Menyimpan password di email",
      ],
      correct: 0,
    },

    {
      category: "Phishing",
      question: "Website phishing biasanya...",
      answers: [
        "Meniru tampilan website resmi",
        "Selalu menggunakan domain pemerintah",
        "Tidak memiliki logo",
        "Selalu menggunakan HTTPS",
      ],
      correct: 0,
    },

    {
      category: "Phishing",
      question: "Apa yang harus dilakukan sebelum mengklik sebuah tautan?",
      answers: [
        "Memeriksa alamat URL dengan teliti",
        "Langsung mengkliknya",
        "Membagikannya ke teman",
        "Menyalin password",
      ],
      correct: 0,
    },

    {
      category: "Phishing",
      question: "OTP (One Time Password) sebaiknya...",
      answers: [
        "Tidak diberikan kepada siapa pun",
        "Dibagikan jika diminta",
        "Diposting di media sosial",
        "Disimpan di komentar",
      ],
      correct: 0,
    },

    {
      category: "Phishing",
      question:
        "Jika website meminta login tetapi alamat URL terlihat aneh, maka...",
      answers: [
        "Jangan memasukkan username dan password",
        "Tetap login",
        "Refresh halaman",
        "Matikan komputer",
      ],
      correct: 0,
    },

    {
      category: "Phishing",
      question: "Serangan phishing dapat dikirim melalui...",
      answers: [
        "Email, SMS, media sosial, dan aplikasi chat",
        "Hanya email",
        "Hanya WhatsApp",
        "Hanya Facebook",
      ],
      correct: 0,
    },

    {
      category: "Phishing",
      question: "Apa yang harus diperiksa pada alamat website?",
      answers: [
        "Nama domain",
        "Warna background",
        "Ukuran font",
        "Jumlah gambar",
      ],
      correct: 0,
    },

    {
      category: "Phishing",
      question:
        "Jika akun berhasil diretas akibat phishing, langkah pertama adalah...",
      answers: [
        "Segera mengganti password",
        "Menghapus browser",
        "Mematikan monitor",
        "Mengganti wallpaper",
      ],
      correct: 0,
    },

    {
      category: "Phishing",
      question: "HTTPS pada website menunjukkan bahwa...",
      answers: [
        "Komunikasi dienkripsi",
        "Website pasti asli",
        "Website bebas virus",
        "Internet lebih cepat",
      ],
      correct: 0,
    },

    {
      category: "Phishing",
      question:
        "Email yang menawarkan hadiah besar secara tiba-tiba biasanya...",
      answers: [
        "Patut dicurigai sebagai phishing",
        "Selalu benar",
        "Harus langsung dipercaya",
        "Pasti dari pemerintah",
      ],
      correct: 0,
    },

    {
      category: "Phishing",
      question: "Cara terbaik menghindari phishing adalah...",
      answers: [
        "Berhati-hati sebelum mengklik tautan atau membuka lampiran",
        "Mengklik semua email",
        "Menggunakan password yang sama",
        "Membagikan OTP",
      ],
      correct: 0,
    },

    {
      category: "Phishing",
      question: "Jika menemukan website phishing, sebaiknya...",
      answers: [
        "Melaporkan kepada penyedia layanan atau administrator",
        "Membagikannya ke teman",
        "Login menggunakan akun utama",
        "Mengabaikannya",
      ],
      correct: 0,
    },
  ],

  password: [
    {
      category: "Password Security",
      question: "Password yang paling aman adalah...",
      answers: [
        "12345678",
        "Tanggal lahir",
        "Kombinasi huruf besar, huruf kecil, angka, dan simbol",
        "Nama sendiri",
      ],
      correct: 2,
    },

    {
      category: "Password Security",
      question:
        "Mengapa tidak disarankan menggunakan password yang sama di semua akun?",
      answers: [
        "Karena jika satu akun diretas, akun lain juga berisiko",
        "Karena membuat internet lambat",
        "Karena password menjadi lebih pendek",
        "Karena akun akan terhapus",
      ],
      correct: 0,
    },

    {
      category: "Password Security",
      question: "Berapa panjang password yang direkomendasikan?",
      answers: [
        "Minimal 12 karakter",
        "4 karakter",
        "6 karakter",
        "8 karakter angka saja",
      ],
      correct: 0,
    },

    {
      category: "Password Security",
      question: "Password berikut yang paling kuat adalah...",
      answers: ["123456789", "password", "B!ru#2026_Aman", "qwerty"],
      correct: 2,
    },

    {
      category: "Password Security",
      question: "Apa fungsi Password Manager?",
      answers: [
        "Menyimpan dan mengelola password dengan aman",
        "Menghapus password",
        "Mempercepat internet",
        "Menghapus virus",
      ],
      correct: 0,
    },

    {
      category: "Password Security",
      question: "OTP (One Time Password) harus...",
      answers: [
        "Dirahasiakan",
        "Dibagikan ke teman",
        "Diposting di media sosial",
        "Disimpan di komentar",
      ],
      correct: 0,
    },

    {
      category: "Password Security",
      question: "Two-Factor Authentication (2FA) berfungsi untuk...",
      answers: [
        "Menambah lapisan keamanan akun",
        "Menghapus password",
        "Mempercepat login",
        "Menambah RAM",
      ],
      correct: 0,
    },

    {
      category: "Password Security",
      question: "Kapan password sebaiknya diganti?",
      answers: [
        "Jika diduga bocor atau secara berkala",
        "Tidak perlu diganti",
        "Setiap login",
        "Setiap membuka browser",
      ],
      correct: 0,
    },

    {
      category: "Password Security",
      question: "Berikut yang bukan password yang baik adalah...",
      answers: [
        "Nama lengkap",
        "Kombinasi huruf dan angka acak",
        "Password unik",
        "Password dengan simbol",
      ],
      correct: 0,
    },

    {
      category: "Password Security",
      question:
        "Apa risiko menyimpan password di kertas yang mudah diakses orang lain?",
      answers: [
        "Password dapat diketahui orang lain",
        "Internet menjadi lambat",
        "Komputer rusak",
        "Browser terhapus",
      ],
      correct: 0,
    },

    {
      category: "Password Security",
      question: "Password yang kuat sebaiknya memiliki...",
      answers: [
        "Huruf besar, huruf kecil, angka, dan simbol",
        "Nama sendiri",
        "Tanggal lahir",
        "Nomor telepon",
      ],
      correct: 0,
    },

    {
      category: "Password Security",
      question: "Apa yang harus dilakukan jika lupa password?",
      answers: [
        "Gunakan fitur 'Lupa Password'",
        "Membuat akun baru setiap kali",
        "Meminta password orang lain",
        "Menghapus aplikasi",
      ],
      correct: 0,
    },

    {
      category: "Password Security",
      question: "Mengapa password tidak boleh dibagikan kepada siapa pun?",
      answers: [
        "Karena dapat disalahgunakan untuk mengakses akun",
        "Karena membuat internet lambat",
        "Karena password menjadi pendek",
        "Karena akun akan otomatis terkunci",
      ],
      correct: 0,
    },

    {
      category: "Password Security",
      question: "Password yang baik harus bersifat...",
      answers: [
        "Unik untuk setiap akun",
        "Sama untuk semua akun",
        "Mudah ditebak",
        "Menggunakan nama sendiri",
      ],
      correct: 0,
    },

    {
      category: "Password Security",
      question: "Apa manfaat menggunakan autentikasi dua faktor (2FA)?",
      answers: [
        "Memberikan perlindungan tambahan selain password",
        "Menghapus kebutuhan password",
        "Mempercepat internet",
        "Mengurangi kapasitas penyimpanan",
      ],
      correct: 0,
    },
  ],

  malware: [
    {
      category: "Malware",
      question: "Apa yang dimaksud dengan malware?",
      answers: [
        "Perangkat lunak berbahaya yang dirancang merusak atau mencuri data",
        "Program untuk mempercepat internet",
        "Aplikasi pengolah kata",
        "Sistem operasi komputer",
      ],
      correct: 0,
    },

    {
      category: "Malware",
      question: "Berikut yang termasuk jenis malware adalah...",
      answers: ["Virus", "Microsoft Excel", "Google Chrome", "PowerPoint"],
      correct: 0,
    },

    {
      category: "Malware",
      question: "Virus komputer biasanya menyebar melalui...",
      answers: [
        "File atau perangkat yang terinfeksi",
        "Keyboard",
        "Monitor",
        "Speaker",
      ],
      correct: 0,
    },

    {
      category: "Malware",
      question: "Trojan adalah malware yang...",
      answers: [
        "Menyamar sebagai program yang terlihat aman",
        "Membersihkan virus",
        "Mempercepat komputer",
        "Menghapus cache browser",
      ],
      correct: 0,
    },

    {
      category: "Malware",
      question: "Ransomware bekerja dengan cara...",
      answers: [
        "Mengenkripsi data korban dan meminta tebusan",
        "Menghapus browser",
        "Mempercepat internet",
        "Menambah RAM",
      ],
      correct: 0,
    },

    {
      category: "Malware",
      question: "Spyware berfungsi untuk...",
      answers: [
        "Memata-matai aktivitas pengguna",
        "Menghapus virus",
        "Mempercepat sistem",
        "Mengatur jaringan",
      ],
      correct: 0,
    },

    {
      category: "Malware",
      question: "Cara terbaik mencegah malware adalah...",
      answers: [
        "Menginstal dan memperbarui antivirus",
        "Mengklik semua tautan",
        "Menonaktifkan firewall",
        "Menggunakan password yang sama",
      ],
      correct: 0,
    },

    {
      category: "Malware",
      question:
        "Berikut yang dapat menjadi tanda komputer terinfeksi malware adalah...",
      answers: [
        "Komputer menjadi lambat tanpa sebab",
        "Layar lebih terang",
        "Mouse baru",
        "Printer mencetak lebih cepat",
      ],
      correct: 0,
    },

    {
      category: "Malware",
      question:
        "Apa yang harus dilakukan jika mencurigai komputer terkena malware?",
      answers: [
        "Melakukan pemindaian menggunakan antivirus",
        "Menghapus sistem operasi",
        "Membagikan file ke teman",
        "Mengabaikannya",
      ],
      correct: 0,
    },

    {
      category: "Malware",
      question: "Worm berbeda dengan virus karena...",
      answers: [
        "Dapat menyebar sendiri melalui jaringan",
        "Tidak berbahaya",
        "Tidak bisa menyebar",
        "Hanya ada di smartphone",
      ],
      correct: 0,
    },

    {
      category: "Malware",
      question: "Mengunduh software bajakan dapat meningkatkan risiko...",
      answers: [
        "Infeksi malware",
        "Internet lebih cepat",
        "RAM bertambah",
        "Baterai lebih awet",
      ],
      correct: 0,
    },

    {
      category: "Malware",
      question: "Apa fungsi antivirus?",
      answers: [
        "Mendeteksi dan menghapus malware",
        "Membuat website",
        "Menambah penyimpanan",
        "Mengganti sistem operasi",
      ],
      correct: 0,
    },

    {
      category: "Malware",
      question: "Salah satu cara malware masuk ke komputer adalah...",
      answers: [
        "Membuka lampiran email yang mencurigakan",
        "Menggunakan mouse",
        "Menyalakan monitor",
        "Mengganti wallpaper",
      ],
      correct: 0,
    },

    {
      category: "Malware",
      question: "Apa yang dimaksud dengan adware?",
      answers: [
        "Malware yang menampilkan iklan secara berlebihan",
        "Software pengolah gambar",
        "Program keamanan",
        "Browser internet",
      ],
      correct: 0,
    },

    {
      category: "Malware",
      question: "Langkah yang tepat untuk mengurangi risiko malware adalah...",
      answers: [
        "Mengunduh aplikasi hanya dari sumber terpercaya",
        "Mengklik semua pop-up",
        "Menonaktifkan antivirus",
        "Mengabaikan pembaruan sistem",
      ],
      correct: 0,
    },
  ],

  network: [
    {
      category: "Network Security",
      question: "Apa fungsi utama firewall?",
      answers: [
        "Menyaring lalu lintas jaringan untuk mencegah akses tidak sah",
        "Mempercepat koneksi internet",
        "Menghapus file sampah",
        "Menambah kapasitas penyimpanan",
      ],
      correct: 0,
    },

    {
      category: "Network Security",
      question: "VPN merupakan singkatan dari...",
      answers: [
        "Virtual Private Network",
        "Very Personal Network",
        "Virtual Public Network",
        "Verified Private Node",
      ],
      correct: 0,
    },

    {
      category: "Network Security",
      question: "Apa manfaat menggunakan VPN?",
      answers: [
        "Mengenkripsi koneksi internet dan menjaga privasi",
        "Menambah RAM komputer",
        "Menghapus virus",
        "Mempercepat download tanpa internet",
      ],
      correct: 0,
    },

    {
      category: "Network Security",
      question: "HTTPS lebih aman dibanding HTTP karena...",
      answers: [
        "Menggunakan enkripsi SSL/TLS",
        "Memiliki tampilan lebih bagus",
        "Lebih cepat membuka website",
        "Tidak membutuhkan internet",
      ],
      correct: 0,
    },

    {
      category: "Network Security",
      question: "Wi-Fi publik memiliki risiko karena...",
      answers: [
        "Data dapat disadap jika tidak dienkripsi",
        "Selalu lebih cepat",
        "Tidak memiliki password",
        "Tidak bisa digunakan",
      ],
      correct: 0,
    },

    {
      category: "Network Security",
      question: "IDS adalah singkatan dari...",
      answers: [
        "Intrusion Detection System",
        "Internet Data Security",
        "Internal Device Service",
        "Integrated Digital System",
      ],
      correct: 0,
    },

    {
      category: "Network Security",
      question: "IPS berfungsi untuk...",
      answers: [
        "Mendeteksi dan menghentikan serangan jaringan",
        "Menghapus aplikasi",
        "Menambah bandwidth",
        "Mengatur printer",
      ],
      correct: 0,
    },

    {
      category: "Network Security",
      question: "Router digunakan untuk...",
      answers: [
        "Menghubungkan beberapa jaringan",
        "Menghapus virus",
        "Membuat password",
        "Menyimpan file",
      ],
      correct: 0,
    },

    {
      category: "Network Security",
      question: "Alamat IP digunakan untuk...",
      answers: [
        "Mengidentifikasi perangkat pada jaringan",
        "Menghapus malware",
        "Mengganti password",
        "Mengaktifkan antivirus",
      ],
      correct: 0,
    },

    {
      category: "Network Security",
      question: "Password Wi-Fi sebaiknya...",
      answers: [
        "Kuat dan tidak mudah ditebak",
        "12345678",
        "Nama pemilik rumah",
        "Tanggal lahir",
      ],
      correct: 0,
    },

    {
      category: "Network Security",
      question: "Serangan DDoS bertujuan untuk...",
      answers: [
        "Membanjiri server dengan trafik hingga tidak dapat diakses",
        "Mencadangkan data",
        "Mempercepat internet",
        "Menghapus virus",
      ],
      correct: 0,
    },

    {
      category: "Network Security",
      question: "Apa yang dimaksud dengan enkripsi?",
      answers: [
        "Mengubah data menjadi bentuk yang sulit dibaca tanpa kunci",
        "Menghapus data",
        "Memindahkan data",
        "Mengompres file",
      ],
      correct: 0,
    },

    {
      category: "Network Security",
      question: "Apa fungsi DNS?",
      answers: [
        "Menerjemahkan nama domain menjadi alamat IP",
        "Menghapus malware",
        "Mengatur firewall",
        "Menyimpan password",
      ],
      correct: 0,
    },

    {
      category: "Network Security",
      question: "Langkah terbaik saat menggunakan Wi-Fi publik adalah...",
      answers: [
        "Menggunakan VPN",
        "Login ke semua akun",
        "Membagikan password",
        "Menonaktifkan antivirus",
      ],
      correct: 0,
    },

    {
      category: "Network Security",
      question:
        "Perangkat yang menghubungkan komputer dalam jaringan lokal disebut...",
      answers: ["Switch", "Printer", "Scanner", "Monitor"],
      correct: 0,
    },
  ],

  privacy: [
    {
      category: "Privacy & Data Protection",
      question: "Apa yang dimaksud dengan data pribadi?",
      answers: [
        "Informasi yang dapat mengidentifikasi seseorang",
        "Semua file di komputer",
        "Program antivirus",
        "Jaringan internet",
      ],
      correct: 0,
    },

    {
      category: "Privacy & Data Protection",
      question: "Contoh data pribadi adalah...",
      answers: ["Nomor KTP", "Warna favorit", "Nama kota", "Jenis browser"],
      correct: 0,
    },

    {
      category: "Privacy & Data Protection",
      question: "Mengapa password tidak boleh dibagikan kepada orang lain?",
      answers: [
        "Karena dapat digunakan untuk mengakses akun tanpa izin",
        "Karena membuat internet lambat",
        "Karena password menjadi pendek",
        "Karena komputer akan rusak",
      ],
      correct: 0,
    },

    {
      category: "Privacy & Data Protection",
      question: "Apa manfaat mengaktifkan Two-Factor Authentication (2FA)?",
      answers: [
        "Memberikan lapisan keamanan tambahan pada akun",
        "Menghapus password",
        "Mempercepat login",
        "Menghemat baterai",
      ],
      correct: 0,
    },

    {
      category: "Privacy & Data Protection",
      question:
        "Apa yang sebaiknya dilakukan sebelum membagikan informasi pribadi di internet?",
      answers: [
        "Memastikan informasi tersebut aman untuk dibagikan",
        "Langsung membagikannya",
        "Mengirimkan ke semua teman",
        "Menyimpannya di komentar",
      ],
      correct: 0,
    },

    {
      category: "Privacy & Data Protection",
      question: "Media sosial yang bersifat publik berarti...",
      answers: [
        "Semua orang dapat melihat informasi yang dibagikan",
        "Hanya keluarga yang dapat melihat",
        "Tidak membutuhkan internet",
        "Tidak dapat diakses orang lain",
      ],
      correct: 0,
    },

    {
      category: "Privacy & Data Protection",
      question: "Apa yang dimaksud dengan jejak digital (Digital Footprint)?",
      answers: [
        "Rekam jejak aktivitas seseorang di internet",
        "Jenis malware",
        "Aplikasi antivirus",
        "Perangkat jaringan",
      ],
      correct: 0,
    },

    {
      category: "Privacy & Data Protection",
      question:
        "Jika menerima permintaan pertemanan dari orang yang tidak dikenal, sebaiknya...",
      answers: [
        "Menolak atau memverifikasi identitasnya terlebih dahulu",
        "Langsung menerima",
        "Memberikan nomor telepon",
        "Mengirim password",
      ],
      correct: 0,
    },

    {
      category: "Privacy & Data Protection",
      question: "Apa tujuan utama pengaturan privasi pada media sosial?",
      answers: [
        "Mengontrol siapa yang dapat melihat informasi pribadi",
        "Mempercepat internet",
        "Menghapus akun",
        "Menambah followers",
      ],
      correct: 0,
    },

    {
      category: "Privacy & Data Protection",
      question: "Data berikut yang paling sensitif adalah...",
      answers: ["PIN ATM", "Nama sekolah", "Hobi", "Film favorit"],
      correct: 0,
    },

    {
      category: "Privacy & Data Protection",
      question: "Apa yang harus dilakukan jika akun media sosial diretas?",
      answers: [
        "Segera mengganti password dan mengaktifkan 2FA",
        "Menghapus browser",
        "Mengganti wallpaper",
        "Mematikan komputer",
      ],
      correct: 0,
    },

    {
      category: "Privacy & Data Protection",
      question:
        "Mengapa penting melakukan logout setelah menggunakan komputer umum?",
      answers: [
        "Agar akun tidak disalahgunakan orang lain",
        "Agar internet lebih cepat",
        "Agar RAM bertambah",
        "Agar browser terhapus",
      ],
      correct: 0,
    },

    {
      category: "Privacy & Data Protection",
      question: "Apa fungsi pengaturan privasi lokasi (Location Privacy)?",
      answers: [
        "Mencegah lokasi diketahui oleh orang yang tidak berwenang",
        "Mempercepat GPS",
        "Menghapus riwayat browser",
        "Mengaktifkan antivirus",
      ],
      correct: 0,
    },

    {
      category: "Privacy & Data Protection",
      question:
        "Saat menggunakan aplikasi baru, hal pertama yang perlu diperiksa adalah...",
      answers: [
        "Izin akses (Permissions) yang diminta aplikasi",
        "Warna ikon aplikasi",
        "Jumlah unduhan",
        "Ukuran layar",
      ],
      correct: 0,
    },

    {
      category: "Privacy & Data Protection",
      question: "Cara terbaik menjaga privasi digital adalah...",
      answers: [
        "Menggunakan password yang kuat, 2FA, dan membatasi informasi pribadi yang dibagikan",
        "Membagikan semua data pribadi",
        "Menggunakan password yang sama di semua akun",
        "Menonaktifkan fitur keamanan",
      ],
      correct: 0,
    },
  ],
};

// =====================================
// LOAD QUIZ
// =====================================

const params = new URLSearchParams(window.location.search);

const quizType = params.get("quiz") || "basic";

const quizData = quizzes[quizType];

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;

let userAnswers = new Array(quizData.length).fill(null);

const category = document.getElementById("category");

const question = document.getElementById("question");

const answers = document.getElementById("answers");

const progress = document.getElementById("progressBar");

const progressText = document.getElementById("progressText");

const questionNumber = document.getElementById("questionNumber");

const totalQuestion = document.getElementById("totalQuestion");

const nextBtn = document.getElementById("nextBtn");

const prevBtn = document.getElementById("prevBtn");

const result = document.getElementById("resultSection");

function loadQuestion() {
  const q = quizData[currentQuestion];

  category.innerHTML = q.category;

  question.innerHTML = q.question;

  questionNumber.innerHTML = currentQuestion + 1;

  totalQuestion.innerHTML = quizData.length;

  progress.style.width = ((currentQuestion + 1) / quizData.length) * 100 + "%";

  progressText.innerHTML =
    Math.round(((currentQuestion + 1) / quizData.length) * 100) + "%";

  answers.innerHTML = "";

  selectedAnswer = null;

  q.answers.forEach((item, index) => {
    const button = document.createElement("button");

    button.className = "answer";

    button.innerHTML = item;

    button.onclick = () => selectAnswer(button, index);

    answers.appendChild(button);
  });

  prevBtn.disabled = currentQuestion === 0;
}

function selectAnswer(button, index) {
  document
    .querySelectorAll(".answer")

    .forEach((btn) => {
      btn.classList.remove("selected");
    });

  button.classList.add("selected");

  selectedAnswer = index;

  userAnswers[currentQuestion] = index;
}

// =====================================
// NEXT QUESTION
// =====================================

nextBtn.addEventListener("click", () => {
  if (selectedAnswer === null) {
    alert("Silakan pilih salah satu jawaban.");

    return;
  }

  currentQuestion++;

  if (currentQuestion >= quizData.length) {
    finishQuiz();

    return;
  }

  loadQuestion();
});

// =====================================
// PREVIOUS QUESTION
// =====================================

prevBtn.addEventListener("click", () => {
  if (currentQuestion === 0) return;

  currentQuestion--;

  loadQuestion();

  if (userAnswers[currentQuestion] !== null) {
    const buttons = document.querySelectorAll(".answer");

    buttons[userAnswers[currentQuestion]].classList.add("selected");

    selectedAnswer = userAnswers[currentQuestion];
  }
});

// =====================================
// TIMER
// =====================================

let totalTime = 600;

const timer = document.getElementById("timer");

const countdown = setInterval(() => {
  totalTime--;

  const minute = Math.floor(totalTime / 60);

  const second = totalTime % 60;

  timer.innerHTML = `${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;

  if (totalTime <= 0) {
    clearInterval(countdown);

    finishQuiz();
  }
}, 1000);

// =====================================
// FINISH QUIZ
// =====================================

function finishQuiz() {
  clearInterval(countdown);

  score = 0;

  quizData.forEach((item, index) => {
    if (userAnswers[index] === item.correct) {
      score++;
    }
  });

  const nilai = Math.round((score / quizData.length) * 100);

  document.querySelector(".question-card").style.display = "none";

  document.querySelector(".navigation").style.display = "none";

  document.querySelector(".progress-section").style.display = "none";

  result.classList.add("show");

  document.getElementById("score").innerHTML = nilai;

  document.getElementById("correct").innerHTML = score;

  document.getElementById("wrong").innerHTML = quizData.length - score;

  let grade = "D";

  if (nilai >= 90) {
    grade = "A";
  } else if (nilai >= 80) {
    grade = "B";
  } else if (nilai >= 70) {
    grade = "C";
  }

  document.getElementById("grade").innerHTML = grade;
}

// =====================================
// START QUIZ
// =====================================

loadQuestion();
