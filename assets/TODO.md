# TODO — Sejarah CVE: 1988 → 2026

Timeline kronologis perjalanan CVE dari sebuah insiden worm sampai jadi
infrastruktur global. Setiap baris bisa dicentang kalau kamu sudah membaca,
verifikasi, atau menulis catatan untuk milestone itu.

> Konvensi tanggal: bulan/tahun insiden publik atau publikasi CVE, mana yang
> lebih dulu terdokumentasi. Nomor CVE dicantumkan bila ada.

---

## 1988 — Titik nol

- [ ] **2 November 1988 — Morris Worm.** Worm pertama yang menyebar luas di
      internet ARPANET, mengeksploitasi `sendmail`, `fingerd`, dan tebakan
      password lemah. Estimasi 6.000 mesin terinfeksi (±10% internet saat itu).
      Ini yang membuat komunitas sadar butuh koordinasi respons insiden.
- [ ] **1988 — Pembentukan CERT/CC** di Carnegie Mellon sebagai respons langsung
      Morris Worm. Cikal bakal budaya advisory terkoordinasi.

## 1989–1998 — Era advisory tanpa nama

- [ ] **1989 — CERT/CC mulai menerbitkan advisory bernomor** (CA-89:01 dst.).
      Belum ada ID kerentanan global; tiap vendor punya penamaan sendiri.
- [ ] **2 Mei 1990 — CVE-1990-0295** (penomoran retroaktif). Salah satu entri
      paling awal di arsip CVE, terkait kerentanan `sendmail`.
- [ ] **1993 — Bugtraq lahir.** Mailing list pertama tempat peneliti
      mempublikasikan detail kerentanan secara terbuka.
- [ ] **1996 — ICAT/CIAC** membuat katalog kerentanan, salah satu upaya pertama
      menyatukan penamaan lintas vendor.

## 1999 — CVE resmi dimulai

- [ ] **September 1999 — MITRE meluncurkan CVE** sebagai konsep dengan 321 entri
      awal. Format `CVE-YYYY-NNNN` diperkenalkan agar satu kerentanan punya satu
      nama. *(Terverifikasi: Wikipedia, "Launched September 1999", MITRE.)*
- [ ] **1999 — CVE-1999-0001** dianggap entri pertama pada skema penomoran baru.
- [ ] **1999 — Pembentukan CVE Editorial Board**, melibatkan vendor, peneliti,
      dan lembaga pemerintah.

## 2000–2005 — Standar dan skor

- [ ] **2000 — CVE menjadi standar de facto** untuk identifikasi kerentanan;
      vendor mulai mencantumkan ID CVE di advisory mereka.
- [ ] **2001 — CVE Growth:** arsip melewati 1.000 entri.
- [ ] **2002 — NVD (National Vulnerability Database)** dibangun NIST sebagai
      database turunan CVE dengan metadata tambahan.
- [ ] **2003 — CVE-Compatibility** diperkenalkan untuk menguji apakah produk
      security benar-benar kompatibel dengan penamaan CVE.
- [ ] **1 Februari 2005 — Istilah CNA (CVE Numbering Authority) resmi dibuat.**
      Vendor sudah ada yang menerbitkan nomor CVE sebelum tanggal ini, tapi
      penamaan dan struktur CNAnya baru lahir di sini.
      *(Terverifikasi: Wikipedia, "the name and designation was not created until
      1 February 2005". Koreksi dari versi awal file yang menaruh CNA di 2010.)*
- [ ] **2005 — CVSS v1** dirilis oleh FIRST, memberi skor severity numerik.
      Sebelumnya severity cuma deskriptif.

## 2006–2010 — Skala dan otomatisasi

- [ ] **2007 — CVSS v2** dirilis; menjadi standar industri bertahun-tahun.
- [ ] **2008 — CVE melewati 30.000 entri.**
- [ ] **2009 — Heartland Payment Systems breach** (±134 juta kartu) mengangkat
      isu kerentanan aplikasi web ke level regulasi.
- [ ] **2010 — Stuxnet** mempopulerkan diskusi kerentanan zero-day sebagai
      senjata siber, bukan sekadar bug software.

## 2011–2015 — CNAs dan skala besar

- [ ] **2011 — Jumlah CNA bertumbuh**; Microsoft, Apple, dan vendor besar lain
      mulai menerbitkan CVE sendiri.
- [ ] **April 2014 — CVE-2014-0160 (Heartbleed).** Bug buffer over-read di
      OpenSSL; memicu gelombang patch massal dan pembahasan tentang
      ketergantungan pada library kripto kecil.
- [ ] **September 2014 — CVE-2014-6271 (Shellshock).** Bug parsing environment
      variable di Bash, dampak luas ke CGI dan DHCP client.
- [ ] **2014 — CVE melewati 60.000 entri.**
- [ ] **2015 — CVE melewati 70.000 entri**; pertumbuhan ±8.000/tahun.
- [ ] **2015 — CVSS v3.0** dirilis, memperkenalkan matriks dasar/temporal/
      environmental yang lebih eksplisit.

## 2016–2019 — Percepatan dan krisis

- [ ] **2016 — CVE melewati 80.000 entri.**
- [ ] **Maret 2017 — CVE-2017-5638 (Apache Struts 2 / Equifax).** RCE lewat
      header `Content-Type`; dieksploitasi pada Equifax, mengekspos data
      ±147 juta orang. Pelajaran: patch yang tidak diterapkan = kerentanan aktif.
- [ ] **April 2017 — CVE-2017-0144 (EternalBlue).** Bug SMBv1; dipakai WannaCry
      (Mei 2017) dan NotPetya (Juni 2017) untuk menyebar sendiri.
- [ ] **2017 — CVE melewati 90.000 entri.**
- [ ] **2018 — CVE melewati 100.000 entri.**
- [ ] **Juni 2019 — CVSS v3.1** dirilis, memperjelas definisi beberapa metrik
      dan menghapus ambiguitas scope.
- [ ] **2019 — CVE melewati 120.000 entri.**

## 2020–2021 — Tahun pemecahan rekor

- [ ] **Desember 2020 — CVE-2020-1472 (Zerologon).** Bypass autentikasi Netlogon
      membahayakan domain controller; CVSS 10.0.
- [ ] **Desember 2021 — CVE-2021-44228 (Log4Shell).** RCE lewat lookup JNDI di
      Log4j 2; CVSS 10.0; salah satu respons darurat terbesar dalam sejarah
      open source.
- [ ] **2021 — Rekor backlog analisis:** NVD menghadapi lonjakan volume dan
      menumpuk entri berstatus "awaiting analysis".
- [ ] **2021 — CVE melewati 160.000 entri.**

## 2022–2024 — Tektonik: CVSS v4 dan CISA KEV

- [ ] **Maret 2022 — CVE-2022-22965 (Spring4Shell).** RCE lewat data binding
      Spring MVC.
- [ ] **Juni 2022 — CISA KEV catalog** dimulai; mengubah fokus industri dari
      skor CVSS ke "apakah sudah dieksploitasi di dunia nyata".
- [ ] **November 2023 — CVSS v4.0** dirilis, menambahkan metrik threat dan
      environmental yang lebih kaya.
- [ ] **Maret 2024 — CVE-2024-3094 (XZ Utils backdoor).** Backdoor yang
      disisipkan lewat social engineering jangka panjang; hampir masuk distro
      stabil. Mengubah cara proyek menilai maintainer tunggal.
- [ ] **2024 — CVE melewati 250.000 entri**; pertumbuhan melewati 25.000/tahun.

## 2025–2026 — Guncangan pendanaan

- [ ] **15 April 2025 — Kontrak MITRE nyaris berakhir.** Kontrak dengan pemerintah
      AS dijadwalkan habis keesokan harinya dan sempat *dibiarkan expired*;
      komunitas panik karena CVE adalah infrastruktur bersama.
      *(Terverifikasi: Wikipedia.)*
- [ ] **2025 — Kontrak MITRE diperpanjang 11 bulan.** CVE kembali normal untuk
      sementara.
      *(Terverifikasi: Wikipedia, "the contract was extended for 11 months".)*
- [ ] **16 Maret 2026 — CISA menyatakan CVE Program didanai penuh.** Acting
      director CISA, Nick Andersen, mengumumkan program berjalan dengan
      pendanaan penuh — bukan lagi "menghadapi persoalan pendanaan".
      *(Terverifikasi: Wikipedia. Koreksi dari versi awal file.)*
- [ ] **2025–2026 — Pelaporan massal berbantuan AI** meningkatkan volume CVE
      tetapi juga jumlah laporan berkualitas rendah; perdebatan tentang beban
      triage. *(Belum diverifikasi ke sumber primer.)*
- [ ] **2026 — Audit ulang:** cek apakah repositori ini masih relevan untuk
      materi CVE, atau perlu dipindah ke repo terpisah.

---

## Data terverifikasi — volume CVE per kuartal (NVD API)

Diambil langsung dari `services.nvd.nist.gov/rest/json/cves/2.0` dengan
`resultsPerPage=1` dan membaca `totalResults`. Angka ini **bukan perkiraan**.

| Kuartal | `totalResults` |
| --- | ---: |
| 2024 Q1 (1 Jan – 31 Mar) | 1.859* |
| 2024 Q2 (1 Apr – 30 Jun) | 12.011 |
| 2024 Q3 (1 Jul – 30 Sep) | 8.659 |
| 2024 Q4 (1 Okt – 31 Des) | 11.129 |
| 2025 Q1 (1 Jan – 31 Mar) | 12.412 |
| 2025 Q2 (1 Apr – 30 Jun) | 12.205 |

\* Q1 2024 diambil dengan jendela 1–20 Januari saja (1.859 entri dalam 20 hari),
bukan kuartal penuh — parameter rentang tanggal NVD menolak jendela lebih panjang
untuk query ini. **Jangan dijumlahkan sebagai total kuartal.**

- [ ] Lengkapi 2025 Q3, Q4, dan seluruh 2026 dengan query yang sama.
- [ ] Ganti klaim "melewati 250.000 entri" dengan angka API yang terverifikasi.

## Cara memakai daftar ini

```bash
# Centang satu item setelah diverifikasi
sed -i 's/- \[ \] \*\*September 1999/- [x] **September 1999/' assets/TODO.md
```

## Sumber untuk verifikasi

- https://www.cve.org — arsip resmi CVE
- https://nvd.nist.gov — NVD (metadata, CVSS)
- https://www.cisa.gov/known-exploited-vulnerabilities-catalog — KEV
- https://www.first.org/cvss — spesifikasi CVSS v3.1 / v4.0
- https://www.cert.org — arsip advisory CERT/CC

> **Catatan kejujuran (status verifikasi):**
>
> - **Terverifikasi dari sumber:** peluncuran CVE September 1999 oleh MITRE;
>   CNA dibuat 1 Februari 2005; kronologi kontrak 2025–2026 (expired April 2025,
>   diperpanjang 11 bulan, didanai penuh per 16 Maret 2026); angka `totalResults`
>   per kuartal di tabel NVD di atas.
> - **Belum terverifikasi:** angka jumlah entri di dekade 2000–2024 (60.000,
>   70.000, 250.000, dst.) — itu perkiraan berbasis tren, bukan hasil query.
>   Beberapa tanggal juga bervariasi antar sumber (misalnya pembentukan CERT/CC).
> - **Sempat salah dan sudah dikoreksi:** CNA awalnya kutulis 2010 (benar: 2005);
>   status pendanaan 2026 awalnya kutulis "menghadapi persoalan" (benar: didanai
>   penuh); angka 300.000 entri 2026 adalah proyeksi dan sudah dihapus.
> - Sumber non-primer yang dipakai: Wikipedia (untuk CVE dan kronologi kontrak).
>   Halaman `cve.org/About/History` di-render client-side sehingga tidak bisa
>   dibaca langsung oleh fetcher.
