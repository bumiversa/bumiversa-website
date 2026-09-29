// src/lib/content.ts

export const siteConfig = {
  name: "BUMIVERSA",
  domain: process.env.NEXT_PUBLIC_DOMAIN || "website.bumiversa.dev",
  // Fallback hanya untuk mencegah error build jika .env belum diset,
  // tapi di production harus ada di .env
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER!,
};

export const pageContent = {
  hero: {
    headline: "Wajah Digital Bisnis Anda Ikut Membentuk Kepercayaan.",
    subheadline: "Website bukan sekadar tempat menaruh informasi. Kami membangun website profil yang membantu bisnis menjelaskan siapa mereka, apa yang mereka tawarkan, dan bagaimana calon klien dapat mengambil langkah berikutnya.",
    ctaText: "Diskusikan Kebutuhan Website Anda",
  },
  problem: {
    title: "Apakah Calon Pelanggan Masih Kesulitan Memahami Bisnis Anda?",
    points: [
      "Informasi penting tersebar di berbagai tempat dan tidak terpusat.",
      "Profil bisnis belum menjelaskan layanan secara terstruktur dan meyakinkan.",
      "Website lama terasa kaku atau sulit digunakan di perangkat mobile.",
      "Percakapan dengan calon pelanggan selalu dimulai dari pertanyaan dasar yang sama."
    ]
  },
  outcome: {
    title: "Rumah Digital yang Bekerja",
    description: "Sebuah website yang tidak sekadar ada, tetapi bekerja sebagai rumah digital bisnis Anda. Ia membantu menjelaskan siapa Anda, apa yang Anda tawarkan, dan apa langkah berikutnya bagi orang yang tertarik."
  },
  approach: {
    title: "Pendekatan Kami",
    points: [
      { title: "Problem-First", desc: "Kami memahami kebutuhan bisnis Anda sebelum menentukan teknologi." },
      { title: "Arsitektur Modern", desc: "Teknologi dipilih berdasarkan kebutuhan proyek, dengan perhatian pada performa, responsivitas, dan struktur informasi." },
      { title: "Kepemilikan & Portabilitas", desc: "Kami merancang solusi dengan memperhatikan kepemilikan konten dan akses terhadap sistem, menghindari lock-in platform yang tidak perlu." }
    ]
  },
  systemProof: {
    title: "Kami Membangun Mesinnya, Bukan Sekadar Menjual Hasil Akhir",
    description: "BUMIVERSA sedang membangun Profile Engine sebagai fondasi reusable untuk website profil organisasi dan bisnis. Pendekatannya: satu mesin, konfigurasi berbeda untuk setiap organisasi. Yang kami tunjukkan bukan angka proyek yang dibuat-buat, tetapi sistem yang benar-benar kami bangun."
  },
  scope: {
    focus: [
      "Website profil perusahaan",
      "Website profesional/konsultan",
      "Website organisasi",
      "Landing page produk/jasa",
      "Katalog digital & Integrasi WhatsApp"
    ],
    notFocus: [
      "Marketplace berskala besar",
      "E-commerce dengan kebutuhan katalog/transaksi kompleks",
      "Aplikasi mobile native",
      "Sistem bisnis kompleks (silakan kunjungi discovery.bumiversa.dev)"
    ]
  },
  faq: [
    {
      q: "Apakah konten bisa diperbarui tanpa coding?",
      a: "Bisa dirancang demikian, tergantung kebutuhan dan konfigurasi proyek. Untuk kebutuhan tertentu, BUMIVERSA dapat menyiapkan pengelolaan konten yang memungkinkan tim memperbarui informasi tanpa menyentuh kode."
    },
    {
      q: "Bagaimana jika kami belum punya materi (teks/foto)?",
      a: "Tidak masalah. Kita bisa mulai dengan memetakan struktur dan wireframe-nya terlebih dahulu. Website bisa diluncurkan dengan konten inti (MVP), dan Anda bisa mengisinya secara bertahap."
    }
  ],
  finalCta: {
    headline: "Punya kebutuhan website yang ingin didiskusikan?",
    subheadline: "Ceritakan bisnis atau organisasi Anda. Kita mulai dari kebutuhan, bukan dari teknologi.",
    buttonText: "Diskusikan Kebutuhan Website Anda",
  }
};
