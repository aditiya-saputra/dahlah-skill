# Ringkasan Skor CVSS

Semua angka di bawah diambil langsung dari **NVD API 2.0**
(`https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=...`), bukan dari
ingatan. Vector string dikutip apa adanya.

| CVE | Nama | CVSS v3.1 | Severity | CVSS v2 |
| --- | --- | ---: | --- | ---: |
| CVE-2014-0160 | Heartbleed | **7.5** | HIGH | 5.0 (MEDIUM) |
| CVE-2017-0144 | EternalBlue | **8.8** | HIGH | 9.3 (HIGH) |
| CVE-2021-34527 | PrintNightmare | **8.8** | HIGH | 9.0 (HIGH) |
| CVE-2021-44228 | Log4Shell | **10.0** | CRITICAL | 9.3 (HIGH) |
| CVE-2022-22965 | Spring4Shell | **9.8** | CRITICAL | 7.5 (HIGH) |

## Vector lengkap (CVSS v3.1 — NVD primary)

```
CVE-2014-0160  CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N
CVE-2017-0144  CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H
CVE-2021-34527 CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H
CVE-2021-44228 CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H
CVE-2022-22965 CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H
```

## Membaca tabel ini dengan benar

**Urutan skor ≠ urutan keparahan nyata.** Empat hal yang harus diingat:

1. **Heartbleed 7.5 terlihat paling ringan, tapi justru paling merusak.**
   Bug ini membocorkan kunci privat — efeknya permanen, karena kunci yang sudah
   bocor harus dianggap rusak selamanya. CVSS hanya bisa menilai kerusakan
   teknis, bukan biaya pemulihan.

2. **EternalBlue 8.8 padahal wormable.** `PR:L` menurunkan skor, padahal
   WannaCry dan NotPetya menyebar tanpa interaksi sama sekali.

3. **Log4Shell satu-satunya yang 10.0** karena `S:C` (scope changed): dampak
   keluar dari komponen yang rentan ke seluruh sistem.

4. **Spring4Shell 9.8 tapi bersyarat.** Skor tidak memasukkan prasyarat
   JDK 9+, WAR, dan Tomcat. Tanpa ketiganya, aplikasi tidak rentan.

## Skor CVSS bukan prioritas

Untuk memutuskan apa yang dikerjakan lebih dulu, skor CVSS saja tidak cukup.
Yang lebih berguna:

- **CISA KEV** — apakah CVE ini sudah dieksploitasi di dunia nyata
- **EPSS** — probabilitas eksploitasi dalam 30 hari ke depan
- **Paparan aktual** — apakah komponen itu benar-benar ada di environment-mu

Kasus Spring4Shell adalah contoh sempurna: 9.8, tapi mayoritas deployment
Spring Boot (executable jar di JDK 8) tidak memenuhi prasyaratnya.
