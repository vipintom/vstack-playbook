/**
 * Minimal front-matter reader for vstack content files.
 *
 * The pack ships without runtime dependencies, so this parses the subset the
 * schema allows: `key: value` scalars and `key: [a, b]` inline arrays.
 * Anything outside that subset is a validation error, not a silent default.
 */

export function parseFrontMatter(text) {
  const lines = text.split("\n");
  if (lines[0]?.trim() !== "---") {
    return { data: null, body: text, error: "file must start with a front-matter block" };
  }
  const end = lines.findIndex((line, index) => index > 0 && line.trim() === "---");
  if (end === -1) {
    return { data: null, body: text, error: "front matter is not closed with ---" };
  }

  const data = {};
  for (let i = 1; i < end; i += 1) {
    const raw = lines[i];
    if (raw.trim() === "" || raw.trimStart().startsWith("#")) continue;
    const match = /^([a-zA-Z][a-zA-Z0-9-]*):\s*(.*)$/.exec(raw);
    if (!match) {
      return { data: null, body: text, error: `unsupported front-matter line: ${raw}` };
    }
    const [, key, rawValue] = match;
    data[key] = parseValue(rawValue.trim());
  }

  return { data, body: lines.slice(end + 1).join("\n"), error: null };
}

function parseValue(raw) {
  if (raw.startsWith("[") && raw.endsWith("]")) {
    const inner = raw.slice(1, -1).trim();
    if (inner === "") return [];
    return inner.split(",").map((part) => unquote(part.trim()));
  }
  return unquote(raw);
}

function unquote(value) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}
