// Resolves API-relative paths (e.g. "/api/diff") against the page's own base, so
// requests keep working when the app is served under a path prefix (reverse proxy).
export function resolveApiUrl(path: string): string {
  const devApiUrl = import.meta.env.VITE_DIFIT_API_URL?.trim();
  const base = devApiUrl || document.baseURI;
  const relativePath = path.replace(/^\//, '');

  try {
    return new URL(relativePath, base).toString();
  } catch {
    return path;
  }
}
