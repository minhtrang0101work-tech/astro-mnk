import { Product } from '@/types';

export const mockProducts: Product[] = [
  {
    id: 'p1',
    title: 'Bánh răng chủ động máy nén khí Atlas Copco',
    slug: 'banh-rang-chu-dong-may-nen-khi-atlas-copco',
    category: 'banh-rang',
    categoryName: 'Bánh răng',
    price: 'Liên hệ báo giá',
    image: '/assets/images/line_filter.jpg',
    isBestSeller: true,
    description: 'Bánh răng truyền động chuyên dụng cho máy nén khí Atlas Copco. Chế tạo từ thép hợp kim gia cường cao cấp, tôi nhiệt chân không giúp tăng khả năng chịu tải và chống ăn mòn vượt trội trong điều kiện hoạt động khắc nghiệt 24/7.',
    specs: {
      'Thương hiệu': 'Atlas Copco',
      'Chất liệu': 'Thép hợp kim tôi cứng',
      'Độ cứng': '58-62 HRC',
      'Độ chính xác chế tạo': 'Cấp 6 (tiêu chuẩn ISO 1328)',
      'Tương thích': 'Dòng máy nén khí trục vít Atlas Copco GA series',
      'Xuất xứ': 'Bỉ'
    }
  },
  {
    id: 'p2',
    title: 'Dây đai truyền động máy nén khí Toyo răng cưa',
    slug: 'day-dai-truyen-dong-may-nen-khi-toyo-rang-cua',
    category: 'day-dai',
    categoryName: 'Dây đai',
    price: 'Liên hệ báo giá',
    image: '/assets/images/line_filter.jpg',
    isNew: true,
    description: 'Dây đai truyền động Toyo cao cấp thiết kế dạng răng cưa thông minh giúp tối ưu hóa hiệu suất bám dính, chống trượt đai tuyệt đối và giảm thiểu hao phí cơ năng trong quá trình vận hành giữa động cơ và đầu nén.',
    specs: {
      'Thương hiệu': 'Toyo',
      'Chất liệu': 'Cao su EPDM gia cố sợi aramid chống kéo giãn',
      'Kiểu biên dạng': 'Răng cưa (Cogged belt)',
      'Khả năng chịu nhiệt': '-40°C đến 120°C',
      'Tương thích': 'Các dòng máy nén khí truyền động dây đai công suất 10HP - 50HP',
      'Xuất xứ': 'Nhật Bản'
    }
  },
  {
    id: 'p3',
    title: 'Két giải nhiệt dầu máy nén khí Kobelco',
    slug: 'ket-giai-nhiet-dau-may-nen-khi-kobelco',
    category: 'ket-lam-mat',
    categoryName: 'Két làm mát',
    price: 'Liên hệ báo giá',
    image: '/assets/images/air_dryer.jpg',
    isNew: true,
    description: 'Két giải nhiệt dầu nén và khí nén Kobelco cấu trúc tổ ong nhôm hiệu suất trao đổi nhiệt cao. Giúp kiểm soát nhiệt độ dầu nén luôn trong ngưỡng tối ưu, ngăn chặn tình trạng máy dừng do quá nhiệt dưới thời tiết nắng nóng khu vực Đông Nam Bộ.',
    specs: {
      'Thương hiệu': 'Kobelco OEM',
      'Chất liệu': 'Hợp kim nhôm cao cấp tản nhiệt nhanh',
      'Áp suất làm việc tối đa': '1.6 Mpa (16 Bar)',
      'Kiểu làm mát': 'Làm mát bằng gió (Air-cooled)',
      'Tương thích': 'Các dòng máy nén trục vít Kobelco SG / HM Series',
      'Xuất xứ': 'Đài Loan'
    }
  },
  {
    id: 'p4',
    title: 'Phớt chặn dầu trục khuỷu đầu nén trục vít',
    slug: 'phot-chan-dau-truc-khuynh-dau-nen-truc-vit',
    category: 'phot-chan-dau',
    categoryName: 'Phớt chặn dầu',
    price: 'Liên hệ báo giá',
    image: '/assets/images/line_filter.jpg',
    description: 'Phớt chặn dầu trục động cơ và cổ trục đầu nén máy nén khí trục vít. Sử dụng chất liệu Teflon (PTFE) chịu ma sát và nhiệt độ cao, đảm bảo độ kín kín khít tuyệt đối, chống rò rỉ dầu bôi trơn ra ngoài môi trường.',
    specs: {
      'Chất liệu': 'Thép không gỉ + PTFE chịu nhiệt bọc phớt môi kép',
      'Nhiệt độ hoạt động': '-60°C đến 220°C',
      'Tốc độ tuyến tính tối đa': '30 m/s',
      'Áp suất chịu đựng': '0.5 Mpa',
      'Tương thích': 'Hầu hết các trục đầu nén khí trục vít phổ thông',
      'Xuất xứ': 'Đức'
    }
  },
  {
    id: 'p5',
    title: 'Thước đo mức dầu máy nén khí dạng thanh thủy tinh',
    slug: 'thuoc-do-muc-dau-may-nen-khi-dang-thanh-thuy-tinh',
    category: 'thuoc-tham-dau',
    categoryName: 'Thước thăm dầu',
    price: 'Liên hệ báo giá',
    image: '/assets/images/line_filter.jpg',
    description: 'Thước thăm dầu chuyên dụng chịu nhiệt và chịu áp dùng trên bình tách dầu máy nén khí. Giúp kỹ thuật viên dễ dàng quan sát mức dầu thực tế bên trong máy để bổ sung kịp thời, tránh hư hỏng đầu nén do thiếu dầu.',
    specs: {
      'Chất liệu thân': 'Hợp kim nhôm mạ crom / Thủy tinh chịu nhiệt borosilicate',
      'Khoảng cách tâm lỗ bulông': '100mm, 150mm, 200mm (phổ thông)',
      'Nhiệt độ chịu đựng': 'Lên đến 130°C',
      'Áp suất làm việc': '0 - 1.5 Mpa',
      'Tương thích': 'Lắp đặt trực tiếp trên thân bình chứa tách dầu máy nén trục vít',
      'Xuất xứ': 'Trung Quốc'
    }
  },
  {
    id: 'p6',
    title: 'Van an toàn xả áp khí nén ren đồng 10 Bar',
    slug: 'van-an-toan-xa-ap-khi-nen-ren-dong-10-bar',
    category: 'van-an-toan',
    categoryName: 'Van an toàn',
    price: 'Liên hệ báo giá',
    image: '/assets/images/line_filter.jpg',
    description: 'Van an toàn bằng đồng thau lắp trên bình chứa tách dầu hoặc đường ống khí nén. Tự động xả khí bảo vệ hệ thống khi áp suất vượt ngưỡng an toàn thiết kế 10 Bar, ngăn chặn nguy cơ cháy nổ nổ thiết bị áp lực.',
    specs: {
      'Chất liệu': 'Đồng thau đúc chất lượng cao (Brass)',
      'Áp suất cài đặt xả': '10 Bar (1.0 Mpa)',
      'Kiểu kết nối': 'Ren ngoài G1/2" hoặc G3/4"',
      'Tiêu chuẩn chế tạo': 'ASME / CE chứng nhận an toàn',
      'Khả năng chịu nhiệt': 'Tối đa 180°C',
      'Xuất xứ': 'Ý'
    }
  },
  {
    id: 'p7',
    title: 'Dầu máy nén khí trục vít Kobelco chính hãng',
    slug: 'dau-may-nen-khi-truc-vit-kobelco-chinh-hang',
    category: 'dau-may-nen-khi',
    categoryName: 'Dầu máy nén khí',
    price: 'Liên hệ báo giá',
    image: '/assets/images/compressor_kn100hp.jpg',
    isBestSeller: true,
    description: 'Dầu máy nén khí trục vít Kobelco gốc tổng hợp cao cấp (Kobelco Screw Super Extra Oil). Sở hữu tuổi thọ vận hành cao đạt 3000h - 4000h, tính năng bôi trơn hoàn hảo, làm mát buồng nén hiệu quả và hạn chế tối đa cặn bùn tích tụ.',
    specs: {
      'Thương hiệu': 'Kobelco',
      'Tên sản phẩm': 'Kobelco Screw Super Oil / Super Extra Oil',
      'Độ nhớt động học (ở 40°C)': '32 cSt hoặc 46 cSt',
      'Tuổi thọ khuyến nghị': '3000 giờ - 4000 giờ hoạt động',
      'Quy cách đóng gói': 'Thùng sắt 20 Lít hoặc Phuy 200 Lít',
      'Tương thích': 'Tất cả các dòng máy nén khí trục vít Kobelco Kobelion',
      'Xuất xứ': 'Nhật Bản'
    }
  },
  {
    id: 'p8',
    title: 'Lọc dầu máy nén khí Hitachi cao cấp',
    slug: 'loc-dau-may-nen-khi-hitachi-cao-cap',
    category: 'loc-dau',
    categoryName: 'Lọc dầu',
    price: 'Liên hệ báo giá',
    image: '/assets/images/line_filter.jpg',
    description: 'Lọc dầu nhớt chất lượng cao cho máy nén khí Hitachi. Giúp loại bỏ hoàn toàn mạt sắt ma sát, hạt bụi và các chất bẩn lẫn trong dầu trước khi tuần hoàn vào buồng nén trục vít, hạn chế mài mòn trục vít đầu nén.',
    specs: {
      'Thương hiệu': 'Hitachi OEM / Phụ tùng cao cấp',
      'Hiệu suất lọc bụi': '99% đối với hạt bụi kích cỡ >10 micron',
      'Áp suất chênh lệch tối đa': '0.2 Mpa',
      'Tuổi thọ làm việc khuyến nghị': '2000 giờ hoạt động',
      'Tương thích': 'Các dòng máy nén khí Hitachi Hiscrew Series',
      'Xuất xứ': 'Nhật Bản'
    }
  },
  {
    id: 'p9',
    title: 'Lọc gió máy nén khí Kobelco chính hãng',
    slug: 'loc-gio-may-nen-khi-kobelco-chinh-hang',
    category: 'loc-gio',
    categoryName: 'Lọc gió',
    price: 'Liên hệ báo giá',
    image: '/assets/images/line_filter.jpg',
    isNew: true,
    description: 'Lọc gió đầu hút khí nén cho máy nén trục vít Kobelco. Sử dụng giấy lọc vi sợi đặc biệt nếp xếp nén mật độ cao, giúp giữ lại 99.9% cát bụi không khí xung quanh trước khi đưa khí nén vào trục vít nén.',
    specs: {
      'Thương hiệu': 'Kobelco chính hãng',
      'Độ tinh lọc': '3 - 5 micron',
      'Hiệu suất giữ bụi': '99.9%',
      'Tuổi thọ khuyến nghị': '2000 - 3000 giờ vận hành tùy môi trường',
      'Tương thích': 'Dòng máy Kobelco Kobelion VS / SG',
      'Xuất xứ': 'Nhật Bản'
    }
  },
  {
    id: 'p10',
    title: 'Lọc tách dầu Kobelco chính hãng',
    slug: 'loc-tach-dau-kobelco-chinh-hang',
    category: 'loc-tach-dau',
    categoryName: 'Lọc tách dầu',
    price: 'Liên hệ báo giá',
    image: '/assets/images/line_filter.jpg',
    isHot: true,
    description: 'Bộ lọc tách dầu khí nén (Air/Oil Separator) chính hãng Kobelco. Tách triệt để hơi dầu mịn hòa lẫn trong khí nén đầu ra, đảm bảo nồng độ dầu hao hụt cực thấp (< 2ppm), đem lại khí nén sạch cho các thiết bị sản xuất.',
    specs: {
      'Thương hiệu': 'Kobelco',
      'Nồng độ dầu khí ra': '< 2 ppm (2 mg/m³)',
      'Độ sụt áp ban đầu': '< 0.02 Mpa',
      'Tuổi thọ làm việc': '3000 giờ - 4000 giờ',
      'Tương thích': 'Máy nén khí trục vít Kobelco Kobelion SG/VS công suất 22-75KW',
      'Xuất xứ': 'Nhật Bản'
    }
  },
  {
    id: 'p11',
    title: 'Van điện từ máy nén khí chính hãng SMC',
    slug: 'van-dien-tu-may-nen-khi-chinh-hang-smc',
    category: 'van-dien-tu',
    categoryName: 'Van điện từ',
    price: 'Liên hệ báo giá',
    image: '/assets/images/line_filter.jpg',
    description: 'Van điện từ solenoid điều khiển khí nén SMC chất lượng vượt trội. Phản hồi chuyển mạch siêu nhạy, độ bền cơ học đạt hơn 10 triệu chu kỳ đóng mở, dùng điều khiển đóng mở van hút hoặc hệ thống xả tải máy nén khí.',
    specs: {
      'Thương hiệu': 'SMC',
      'Điện áp cuộn coil': 'AC 220V hoặc DC 24V (tùy chọn)',
      'Kiểu van': '3 cổng 2 vị trí (3/2 Way) hoặc 5 cổng 2 vị trí (5/2 Way)',
      'Áp suất vận hành': '0.15 - 0.7 Mpa',
      'Nhiệt độ môi trường': '-10°C đến 50°C (không đóng băng)',
      'Xuất xứ': 'Nhật Bản'
    }
  },
  {
    id: 'p12',
    title: 'Lọc dầu máy nén khí Kobelco cao cấp',
    slug: 'loc-dau-may-nen-khi-kobelco-cao-cap',
    category: 'loc-dau',
    categoryName: 'Lọc dầu',
    price: 'Liên hệ báo giá',
    image: '/assets/images/line_filter.jpg',
    description: 'Lọc dầu bôi trơn máy nén khí trục vít Kobelco. Đóng vai trò lọc sạch các cặn bám, chất bẩn hữu cơ sinh ra trong quá trình dầu nén tuần hoàn nhiệt độ cao, đảm bảo dầu cấp vào buồng nén luôn sạch tinh khiết.',
    specs: {
      'Thương hiệu': 'Kobelco OEM / Phụ tùng chất lượng cao',
      'Hiệu suất lọc bụi': '99% đối với hạt bụi cỡ lớn',
      'Áp suất chênh lệch tối đa': '0.2 Mpa',
      'Tuổi thọ làm việc khuyến nghị': '2000 giờ hoạt động',
      'Tương thích': 'Các dòng máy nén khí Kobelco Kobelion Series',
      'Xuất xứ': 'Nhật Bản'
    }
  }
];
