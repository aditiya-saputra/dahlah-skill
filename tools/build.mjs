// Generates per-tool persona artifacts from persona/tone.md.
//
//   node tools/build.mjs
//
// Writes into dist/. Never edit dist/ by hand: change persona/tone.md or the
// per-tool wrappers in tools/build.mjs, then re-run this script.

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(repoRoot, 'dist');
const STYLE_VERSION = '1.1.0';

const toneSource = (await readFile(join(repoRoot, 'persona', 'tone.md'), 'utf8')).trim();

/** Body shared by every tool: the persona rules without the maintainer notes. */
const core = stripTitle(toneSource);

const DESCRIPTION =
  'Persona output cybertech feminin: hacker girl yang galak tapi peduli. Sarkas ' +
  'ringan, penanda terminal secukupnya, selalu diikuti solusi konkret; tidak ' +
  'pernah menghina user atau menutupi kegagalan verifikasi.';

const targets = [
  {
    path: 'dist/opencode/AGENTS.md',
    content: section('opencode', core),
  },
  {
    path: 'dist/claude-code/CLAUDE.md',
    content: section('Claude Code', core),
  },
  {
    path: 'dist/claude-code/skills/dahlah-tone/SKILL.md',
    content: skillFile(),
  },
  {
    path: 'dist/cursor/rules/dahlah-tone.mdc',
    content: cursorRule(),
  },
  {
    path: 'dist/generic/AGENTS.md',
    content: section('AI agent', core),
  },
  {
    path: 'dist/generic/prompt.md',
    content: section('system prompt', core),
  },
  {
    path: join('extension', 'skills', 'dahlah-tone', 'SKILL.md'),
    content: skillFile(),
  },
  {
    path: join('extension', 'QWEN.md'),
    content: section('Qwen Code extension', core),
  },
];

for (const target of targets) {
  const outPath = join(repoRoot, target.path);
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, ensureTrailingNewline(target.content), 'utf8');
  console.log(`wrote ${target.path}`);
}

function stripTitle(markdown) {
  return markdown
    .replace(/^# Persona:[^\n]*\n+/, '')
    .replace(/^> Ini source of truth\.[\s\S]*?\n\n/, '')
    .split('\n')
    .map((line) => line.replace(/^(#{2,}) /, (_, hashes) => `${hashes}# `))
    .join('\n')
    .trim();
}

function section(label, body) {
  return `<!-- generated from persona/tone.md by tools/build.mjs (v${STYLE_VERSION}) -->\n\n` +
    `## Gaya output: ${label}\n\n${body}\n`;
}

function skillFile() {
  const frontmatter = [
    '---',
    'name: dahlah-tone',
    `description: ${DESCRIPTION} Load when the user asks for a fiery, feminine, caring tone, or when a chat session should follow this persona.`,
    `version: ${STYLE_VERSION}`,
    '---',
    '',
  ].join('\n');

  return `${frontmatter}Follow the persona below for every reply in this session. It governs narration only: file paths, identifiers, commands, and quoted errors stay untouched.\n\n${core}\n`;
}

function cursorRule() {
  const header = [
    '---',
    `description: ${DESCRIPTION}`,
    'alwaysApply: true',
    '---',
    '',
  ].join('\n');

  return `${header}# Gaya output: Cursor\n\n${core}\n`;
}

function ensureTrailingNewline(text) {
  return text.endsWith('\n') ? text : `${text}\n`;
}
