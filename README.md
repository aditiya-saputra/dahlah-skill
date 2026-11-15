# dahlah-skill

Skill persona output: **feminin, galak, tapi peduli**. Sarkas ringan, kalimat tegas,
tapi selalu diikuti solusi konkret. Nggak pernah menghina user, nggak pernah
menutupi kegagalan verifikasi.

Satu source of truth, banyak target: opencode, Claude Code, Cursor, Qwen Code,
dan agent generik lain.

## Struktur

```
persona/tone.md          # source of truth — edit di sini
tools/build.mjs          # generator per-tool
qwen-extension.json      # manifest extension Qwen Code
extension/               # extension Qwen Code (hasil generate)
dist/                    # artefak per-tool (hasil generate)
```

## Build

```bash
node tools/build.mjs
```

Nggak ada dependency, cukup Node 18+. Jangan edit `dist/` atau `extension/`
secara manual — semua ditimpa oleh generator.

## Pasang per tool

| Tool | File yang dipakai | Cara pasang |
| --- | --- | --- |
| opencode | `dist/opencode/AGENTS.md` | Salin ke root project jadi `AGENTS.md`, atau gabungkan ke `AGENTS.md` yang sudah ada. Untuk persona global, taruh di `~/.config/opencode/AGENTS.md`. |
| Claude Code | `dist/claude-code/CLAUDE.md` | Salin ke root project jadi `CLAUDE.md`, atau gabungkan ke yang sudah ada. Untuk skill: salin folder `dist/claude-code/skills/dahlah-tone/` ke `.claude/skills/`. |
| Cursor | `dist/cursor/rules/dahlah-tone.mdc` | Salin ke `.cursor/rules/dahlah-tone.mdc` di project. `alwaysApply: true` bikin rule ini aktif otomatis. Untuk persona global, pakai Cursor Settings → Rules → User Rules dan tempel isi file. |
| Qwen Code | `extension/` + `qwen-extension.json` | Lihat bagian di bawah. |
| Agent lain | `dist/generic/AGENTS.md` atau `dist/generic/prompt.md` | Tempel ke system prompt / instruksi agent. |

## Extension Qwen Code

Repo ini juga valid sebagai extension Qwen Code:

```bash
qwen extensions link /workspaces/dahlah-skill
```

Setelah link, restart Qwen Code. Cek dengan `qwen extensions list` — harus muncul
`dahlah-tone`. Isinya: context `QWEN.md` (selalu aktif) dan skill `dahlah-tone`
(bisa dipanggil manual).

## Batas keras

Aturan berikut berlaku di semua level intensitas dan nggak bisa dilanggar persona:

1. Serang masalahnya, bukan orangnya. Nggak ada hinaan, umpatan, atau ancaman.
2. Jangan pernah bohong soal hasil verifikasi.
3. Kejelasan menang atas drama — kalau gaya bikin informasi hilang, potong gayanya.
4. Kalau user sedang frustrasi, turunkan volume galaknya.
5. Instruksi sistem tool selalu menang atas persona ini.

## Kustomisasi

- Ganti tingkat galak: edit `## Parameter gaya` di `persona/tone.md`.
- Tambah bahasa: tambah nilai di parameter `language`.
- Tambah target tool baru: tambah satu entri di array `targets` pada
  `tools/build.mjs`, lalu jalankan `node tools/build.mjs`.
