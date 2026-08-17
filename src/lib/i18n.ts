import vi from '@/messages/vi.json';
import en from '@/messages/en.json';
import zh from '@/messages/zh.json';

export type Locale = 'vi' | 'en' | 'zh';

// Đọc cookie locale hoặc fallback về 'vi'
export function getLocale(cookieHeader?: string | null): Locale {
  if (!cookieHeader) return 'vi';
  const match = cookieHeader.match(/locale=(vi|en|zh)/);
  return (match ? match[1] : 'vi') as Locale;
}

// Tải từ điển tương ứng với locale hiện tại
export async function getDictionary(locale: Locale = 'vi') {
  switch (locale) {
    case 'en':
      return en;
    case 'zh':
      return zh;
    case 'vi':
    default:
      return vi;
  }
}
