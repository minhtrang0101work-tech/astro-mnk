import { PageMetadata } from '@/types';

const pagesMetadata: { [key: string]: PageMetadata } = {
  'home': {
    title: 'Máy nén khí Khải Nguyên - Uy tín - Chất lượng - Chuyên nghiệp',
    description: 'Chuyên cung cấp phụ tùng máy nén khí trục vít, piston, dầu máy, lọc dầu, lọc gió, két giải nhiệt chính hãng tại Biên Hòa, Đồng Nai, Bình Dương, Long An, HCMC.',
    keywords: ['phụ tùng máy nén khí', 'máy nén khí khải nguyên', 'lọc dầu máy nén khí', 'dầu máy nén khí', 'két làm mát máy nén khí']
  },
  'about': {
    title: 'Giới thiệu Máy nén khí Khải Nguyên | Đại lý Phụ tùng & Dịch vụ Miền Nam',
    description: 'Khải Nguyên là nhà cung cấp giải pháp khí nén toàn diện, chuyên sửa chữa, đại tu đầu nén và phân phối phụ tùng máy nén khí trục vít chính hãng/OEM tại Đồng Nai, Bình Dương, HCMC từ năm 2010.',
    keywords: ['về khải nguyên', 'dịch vụ sửa máy nén khí', 'bảo trì máy nén khí trục vít', 'máy nén khí đồng nai', 'máy nén khí bình dương']
  },
  'products': {
    title: 'Phụ Tùng Máy Nén Khí Trục Vít Chính Hãng & OEM | Khải Nguyên',
    description: 'Cung cấp phụ tùng máy nén khí trục vít chất lượng cao: lọc dầu, lọc tách dầu, lọc gió, dầu bôi trơn chuyên dụng, két giải nhiệt cho máy Kobelco, Hitachi, Atlas Copco tại Đồng Nai, Bình Dương.',
    keywords: ['danh mục phụ tùng', 'mua phụ tùng máy nén khí', 'phụ kiện khí nén', 'phụ tùng máy nén khí trục vít']
  },
  'news': {
    title: 'Tin tức & Kiến thức kỹ thuật',
    description: 'Chia sẻ cẩm nang hướng dẫn bảo trì máy nén khí trục vít, công nghệ biến tần tiết kiệm điện, kỹ thuật thiết kế đường ống khí nén tiêu chuẩn.',
    keywords: ['kinh nghiệm khí nén', 'bảo dưỡng máy nén khí', 'kỹ thuật máy nén khí']
  },
  'contact': {
    title: 'Liên hệ',
    description: 'Liên hệ Khải Nguyên để nhận tư vấn khảo sát hệ thống khí nén miễn phí và báo giá phụ tùng, linh kiện máy nén khí giá tốt nhất.',
    keywords: ['yêu cầu báo giá phụ tùng', 'số điện thoại khải nguyên', 'địa chỉ khải nguyên biên hòa']
  }
};

export class PageRepository {
  static async getPageMetadata(pageKey: string): Promise<PageMetadata> {
    return pagesMetadata[pageKey] || {
      title: 'Khải Nguyên Air Compressor',
      description: 'Phụ tùng máy nén khí chính hãng uy tín chất lượng.'
    };
  }
}
