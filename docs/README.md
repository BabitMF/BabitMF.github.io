# Portable documentation source

The public BMF documentation in `content/<locale>/docs/bmf` is the canonical
source for documentation frontends. Hugo reads these files directly. Other
consumers should use `export.json` instead of depending on Hugo's repository
layout implicitly.

The locale content roots end at `bmf`, so an exported archive contains sections
such as `API` and `Getting started` at its root rather than an extra `BMF`
directory.

## Authoring contract

- Write documentation as UTF-8 Markdown.
- Keep reader-facing content under a locale root declared in `export.json`.
- Use `title` in YAML front matter.
- Prefer portable Markdown over raw HTML or renderer-specific extensions.
- Use publicly accessible image URLs. Root-relative URLs are resolved against
  the public base URL declared in `export.json`.
- Public documentation must not contain internal hosts, credentials, private
  package names, or employee-only procedures.

The internal `bmf_docs` delivery repository validates every exported image URL
before producing TOPIC import archives. A missing or inaccessible image blocks
the export and reports the source documents that reference it.
