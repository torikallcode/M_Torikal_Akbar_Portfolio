# Portofolio — M. Torikal Akbar

Website portofolio pribadi yang dibangun ulang (migrasi) dari versi lama di
folder `refrensi-portfolio/` ke React + Vite, dengan desain, warna, tipografi,
dan aset yang sama seperti versi sebelumnya.

## Teknologi

| Tool         | Versi  |
| ------------ | ------ |
| React        | 19.x   |
| Vite         | 8.x    |
| Tailwind CSS | 3.4.17 |
| Font         | Archivo, Anton, Montserrat (Google Fonts) |

> Tailwind dipin ke **v3** (`tailwindcss@3.4.17`). Jangan jalankan
> `npm i tailwindcss` tanpa versi karena akan terpasang v4 dan konfigurasi ini
> tidak kompatibel.

## Menjalankan proyek

```bash
npm install        # install dependensi
npm run dev        # dev server, http://localhost:5173
npm run build      # build produksi ke folder dist/
npm run preview    # cek hasil build
```

## Struktur folder

```
.
├── index.html                  # Font, meta, favicon
├── tailwind.config.js          # Warna hitam/putih, font, animasi marquee
├── postcss.config.js
├── vite.config.js
├── public/
│   ├── favicon.ico
│   └── img/                    # Foto profil, background hero, thumbnail proyek, logo
└── src/
    ├── main.jsx
    ├── App.jsx                 # Urutan section
    ├── index.css               # Base, komponen, utility kustom
    ├── data/
    │   └── portfolio.js        # ⬅️ SEMUA KONTEN DIEDIT DI SINI
    ├── hooks/
    │   └── useReveal.js        # Animasi muncul saat scroll (pengganti AOS)
    └── components/
        ├── Navbar.jsx          # Nav pill, hide-on-scroll, menu fullscreen
        ├── Hero.jsx            # Hero background gelap + Let's Talk
        ├── Marquee.jsx         # Strip hitam berjalan
        ├── About.jsx           # Foto + "Normal Human with High Desires"
        ├── Experience.jsx      # Pengalaman freelance + pekerjaan yang sudah diselesaikan
        ├── Projects.jsx        # 3 kartu proyek + toast demo belum tersedia
        ├── Skills.jsx          # List skill, hover hitam + logo berwarna
        ├── Contact.jsx         # Headline besar, email, ikon sosial
        ├── Footer.jsx          # Footer hitam + kartu putih
        ├── BrandIcons.jsx      # SVG GitHub/LinkedIn/Instagram/Facebook
        └── SkillIcons.jsx      # SVG logo HTML/CSS/JS/Tailwind/React/Go/MySQL/Git
```

## Kustomisasi

1. **Nama, deskripsi, proyek, skill, sosial media** → `src/data/portfolio.js`.
2. **Foto & aset** → ganti file di `public/img/` dengan nama yang sama, atau
   ubah path di `portfolio.js`.
3. **Warna** → `tailwind.config.js` (`hitam: #252525`, `putih: #F4F4F4`).
4. **Font** → link Google Fonts di `index.html` + `fontFamily` di
   `tailwind.config.js`.
5. **Demo proyek** → isi `demoUrl` di `portfolio.js`. Jika `null`, tombol Demo
   menampilkan toast "Project ini sedang dalam pengembangan".
6. **Email kontak** → `profile.email` dan `contact.mailtoSubject`.

## Detail desain yang dipertahankan dari versi lama

- Palet hitam `#252525` / putih `#F4F4F4` dan aksen abu-abu slate.
- Hero full-screen dengan background gelap, headline uppercase Archivo.
- Navbar pill mengambang yang menyembunyikan diri saat scroll ke bawah.
- Marquee "— Web developer — Web designer".
- Kartu proyek dengan bingkai hitam dan tombol Demo.
- Baris skill yang berubah hitam + logo berwarna saat hover/focus.
- Footer hitam dengan kartu putih dan headline Anton.

## Deploy

Hasil build ada di `dist/`. Bisa diunggah ke Vercel, Netlify, atau hosting
statis lainnya dengan build command `npm run build` dan output `dist`.

## Catatan keamanan `npm audit`

Peringatan `npm audit` berasal dari dependensi internal Tailwind CSS v3
(braces, postcss-selector-parser). Perbaikannya hanya tersedia jika naik ke
Tailwind v4, sehingga sengaja tidak dilakukan. Paket tersebut hanya dipakai
saat build dan tidak ikut dikirim ke browser pengunjung.
