import { environment } from '../../environments/environment';

export function getImageUrl(relativePath: string): string {
  if (!relativePath) return '';
  return `${environment.imageBaseUrl}${relativePath}`;
}
