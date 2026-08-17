import type { Product, NewsItem } from '@/types';

// Từ điển ánh xạ danh mục sản phẩm
export const categoryTranslationMap: { [slug: string]: { en: string; zh: string } } = {
  'binh-chua-va-dau-may-nen-khi': { en: 'Air Receivers & Compressor Blocks', zh: '储气罐及压缩机头' },
  'bo-loc-va-tach-khi-nen': { en: 'Compressed Air Filters & Separators', zh: '压缩空气过滤器及分离器' },
  'cam-bien-do-luong-dieu-khien': { en: 'Sensors, Measuring & Control Devices', zh: '传感器、测量与控制设备' },
  'dau-may-va-phu-tung-boi-tron': { en: 'Lubricating Oil & Lubricants Parts', zh: '润滑油及润滑配件' },
  'he-thong-cac-loai-van-khi-nen': { en: 'Pneumatic & Air Compressor Valves', zh: '气动与空气压缩机阀门系统' },
  'he-thong-giai-nhiet-va-lam-mat': { en: 'Coolers & Cooling Systems', zh: '散热器与冷却系统' },
  'luc-nen-co-khi-dong-co': { en: 'Mechanical Components & Engines', zh: '机械部件与发动机' },
  'ong-dan-day-phun-khop-noi': { en: 'Pipes, Hoses & Connectors', zh: '管道、软管与接头' },
  'thiet-bi-xu-ly-nuoc-va-am': { en: 'Water & Moisture Treatment Equipment', zh: '水与湿气处理设备' },
  'truyen-dong-va-linh-kien-khac': { en: 'Transmission & Other Parts', zh: '传动及其他零配件' },
  'banh-rang': { en: 'Gears', zh: '齿轮' },
  'day-dai': { en: 'Belts', zh: '皮带' },
  'ket-lam-mat': { en: 'Air Coolers', zh: '冷却器' },
  'phot-chan-dau': { en: 'Oil Seals', zh: '油封' },
  'thuoc-tham-dau': { en: 'Oil Level Gauges', zh: '油位计' },
  'van-an-toan': { en: 'Safety Valves', zh: '安全阀' },
  'dau-may-nen-khi': { en: 'Air Compressor Oil', zh: '空压机油' },
  'loc-dau': { en: 'Oil Filters', zh: '机油滤清器' },
  'loc-gio': { en: 'Air Filters', zh: '空气滤清器' },
  'loc-tach-dau': { en: 'Air Oil Separators', zh: '油气分离芯' },
  'van-dien-tu': { en: 'Solenoid Valves', zh: '电磁阀' },
};

// Từ điển thuật ngữ công nghiệp chi tiết
export const industrialTermsDict = [
  // 1. Phụ tùng tách & lọc
  { vi: 'tách dầu', en: 'Air-Oil Separator', zh: '油气分离芯' },
  { vi: 'tách nhớt', en: 'Air-Oil Separator', zh: '油气分离芯' },
  { vi: 'lọc tách dầu', en: 'Air-Oil Separator', zh: '油气分离芯' },
  { vi: 'lọc tách nhớt', en: 'Air-Oil Separator', zh: '油气分离芯' },
  { vi: 'lọc tách', en: 'Air-Oil Separator', zh: '油气分离芯' },
  { vi: 'bộ tách dầu', en: 'Air-Oil Separator Assembly', zh: '油气分离器总成' },
  { vi: 'bộ lọc tách', en: 'Air-Oil Separator Assembly', zh: '油气分离器总成' },
  { vi: 'lọc dầu', en: 'Oil Filter', zh: '机油滤清器' },
  { vi: 'lọc nhớt', en: 'Oil Filter', zh: '机油滤清器' },
  { vi: 'lọc gió', en: 'Air Intake Filter', zh: '空气滤清器' },
  { vi: 'lọc khí', en: 'Air Filter', zh: '空气过滤器' },
  { vi: 'lọc đường ống', en: 'Inline Air Filter', zh: '精密管道过滤器' },
  { vi: 'lõi lọc đường ống', en: 'Inline Filter Element', zh: '管道精密滤芯' },
  { vi: 'lõi lọc', en: 'Filter Element', zh: '滤芯' },
  { vi: 'bộ lọc', en: 'Filter Set', zh: '过滤器总成' },

  // 2. Điện tử, Rơ le & Cảm biến
  { vi: 'rơ le máy nén khí', en: 'Air Compressor Pressure Switch', zh: '空压机压力开关继电器' },
  { vi: 'rơle máy nén khí', en: 'Air Compressor Pressure Switch', zh: '空压机压力开关继电器' },
  { vi: 'rơ le áp suất', en: 'Pressure Switch', zh: '压力开关' },
  { vi: 'rơle áp suất', en: 'Pressure Switch', zh: '压力开关' },
  { vi: 'rơ le nhiệt', en: 'Thermal Overload Relay', zh: '热过载继电器' },
  { vi: 'rơle nhiệt', en: 'Thermal Overload Relay', zh: '热过载继电器' },
  { vi: 'rơ le', en: 'Pressure Switch / Relay', zh: '压力继电器' },
  { vi: 'rơle', en: 'Pressure Switch / Relay', zh: '压力继电器' },
  { vi: 'cảm biến áp suất khí nén', en: 'Pressure Transmitter', zh: '空压机压力变送器' },
  { vi: 'cảm biến áp suất', en: 'Pressure Sensor', zh: '压力传感器' },
  { vi: 'cảm biến nhiệt độ', en: 'Temperature Sensor', zh: '温度传感器' },
  { vi: 'cảm biến', en: 'Sensor', zh: '传感器' },
  { vi: 'đồng hồ đo áp suất', en: 'Pressure Gauge', zh: '高精度压力表' },
  { vi: 'đồng hồ áp suất', en: 'Pressure Gauge', zh: '压力表' },
  { vi: 'đồng hồ áp', en: 'Pressure Gauge', zh: '压力表' },
  { vi: 'đồng hồ', en: 'Gauge / Meter', zh: '仪表' },

  // 3. Cuộn dây, ròng rọc, quạt & ron phớt
  { vi: 'ròng rọc hơi', en: 'Automatic Air Hose Reel', zh: '自动回卷气管卷轴 (气鼓)' },
  { vi: 'ròng rọc', en: 'Hose Reel / Pulley', zh: '气管卷轴' },
  { vi: 'cuộn dây hơi', en: 'Air Hose Reel', zh: '自动卷气管器' },
  { vi: 'cuộn dây', en: 'Hose Reel', zh: '卷线管' },
  { vi: 'dây hơi', en: 'Air Hose', zh: '气动软管' },
  { vi: 'ron đầu nén', en: 'Air-End Gasket Kit', zh: '压缩机头密封垫片包' },
  { vi: 'bộ ron', en: 'Full Gasket Set', zh: '全套密封垫片包' },
  { vi: 'ron phớt', en: 'Gaskets & Seals', zh: '密封圈与垫片' },
  { vi: 'ron', en: 'Gasket / O-Ring', zh: '密封垫片' },
  { vi: 'gioăng phớt', en: 'Gaskets & Seals', zh: '密封圈与垫片' },
  { vi: 'gioăng', en: 'Gasket / O-Ring', zh: '密封圈' },
  { vi: 'quạt giải nhiệt', en: 'Cooling Fan Assembly', zh: '散热冷却风扇' },
  { vi: 'quạt làm mát', en: 'Cooling Fan Assembly', zh: '冷却风机' },
  { vi: 'quạt', en: 'Fan', zh: '风机' },
  { vi: 'cánh quạt', en: 'Fan Blades', zh: '风扇叶轮' },

  // 4. Cơ khí & Đầu nén
  { vi: 'bạc đạn đầu nén', en: 'Air-End Heavy Duty Bearings', zh: '主机转子重载轴承' },
  { vi: 'bạc đạn', en: 'Bearings', zh: '轴承' },
  { vi: 'vòng bi', en: 'Bearings', zh: '轴承' },
  { vi: 'đầu nén trục vít', en: 'Screw Air-End', zh: '螺杆主机头' },
  { vi: 'đầu nén', en: 'Air-End Block', zh: '压缩机头' },
  { vi: 'xi lanh máy nén khí piston', en: 'Piston Compressor Cylinder', zh: '活塞式空压机气缸' },
  { vi: 'xi lanh máy nén khí', en: 'Air Compressor Cylinder', zh: '空压机气缸' },
  { vi: 'xi lanh', en: 'Cylinder', zh: '气缸' },
  { vi: 'xylanh', en: 'Cylinder', zh: '气缸' },
  { vi: 'piston', en: 'Piston Assembly', zh: '活塞组件' },
  { vi: 'xéc măng', en: 'Piston Rings', zh: '活塞环' },
  { vi: 'trục khuỷu', en: 'Crankshaft', zh: '曲轴' },
  { vi: 'tay biên', en: 'Connecting Rod', zh: '连杆' },
  { vi: 'bánh răng chủ động', en: 'Driving Gear', zh: '主动传动齿轮' },
  { vi: 'bánh răng bị động', en: 'Driven Gear', zh: '从动齿轮' },
  { vi: 'bánh răng', en: 'Transmission Gear', zh: '传动齿轮' },
  { vi: 'dây đai răng cưa', en: 'Cogged Drive Belt', zh: '齿形切边传动皮带' },
  { vi: 'dây đai truyền động', en: 'Drive Belt', zh: '传动皮带' },
  { vi: 'dây đai', en: 'Drive Belt', zh: '皮带' },
  { vi: 'dây curoa', en: 'Drive Belt', zh: '三角皮带' },
  { vi: 'phớt chặn dầu', en: 'Oil Seal', zh: '轴端骨架油封' },
  { vi: 'phớt chắn dầu', en: 'Oil Seal', zh: '轴端骨架油封' },
  { vi: 'phớt', en: 'Oil Seal', zh: '油封/密封件' },
  { vi: 'khớp nối mềm', en: 'Flexible Coupling', zh: '弹性联轴器' },
  { vi: 'khớp nối', en: 'Coupling', zh: '联轴器' },

  // 5. Van các loại
  { vi: 'van xả nước tự động', en: 'Auto Drain Valve', zh: '自动排水阀' },
  { vi: 'van xả tự động', en: 'Auto Drain Valve', zh: '自动排水阀' },
  { vi: 'van xả nước', en: 'Drain Valve', zh: '排水阀' },
  { vi: 'van an toàn xả áp', en: 'Safety Relief Valve', zh: '安全泄放阀' },
  { vi: 'van an toàn', en: 'Safety Valve', zh: '安全阀' },
  { vi: 'van điện từ', en: 'Solenoid Valve', zh: '电磁阀' },
  { vi: 'van hằng nhiệt', en: 'Thermostatic Valve', zh: '温控阀' },
  { vi: 'van nhiệt', en: 'Thermostatic Valve', zh: '温控阀' },
  { vi: 'van một chiều', en: 'Check Valve', zh: '单向止回阀' },
  { vi: 'van hút', en: 'Intake Valve', zh: '进气阀' },
  { vi: 'van cổ hút', en: 'Intake Valve Assembly', zh: '进气阀总成' },
  { vi: 'van áp suất tối thiểu', en: 'Minimum Pressure Valve', zh: '最小压力阀' },
  { vi: 'van điều áp', en: 'Pressure Regulating Valve', zh: '调压减压阀' },
  { vi: 'van tiết lưu', en: 'Throttle Valve', zh: '节流阀' },
  { vi: 'van xả tải', en: 'Blowdown Valve', zh: '放空阀' },
  { vi: 'van', en: 'Valve', zh: '阀门' },

  // 6. Thước đo, Két làm mát & Dầu
  { vi: 'thước đo mức dầu', en: 'Oil Level Sight Glass Gauge', zh: '玻璃管油位计/观油镜' },
  { vi: 'thước thăm dầu', en: 'Oil Level Gauge', zh: '油位计/观油镜' },
  { vi: 'mắt thăm dầu', en: 'Oil Sight Glass', zh: '观油镜' },
  { vi: 'két giải nhiệt dầu', en: 'Oil Cooler Heat Exchanger', zh: '机油散热冷却器' },
  { vi: 'két giải nhiệt', en: 'Heat Exchanger Cooler', zh: '散热冷却器' },
  { vi: 'két làm mát', en: 'Air/Oil Cooler', zh: '风冷散热器' },
  { vi: 'dầu máy nén khí trục vít', en: 'Screw Compressor Synthetic Oil', zh: '螺杆空压机专用合成油' },
  { vi: 'dầu máy nén khí', en: 'Air Compressor Lubricant Oil', zh: '空压机专用润滑油' },
  { vi: 'dầu bôi trơn', en: 'Lubricant Oil', zh: '专用润滑油' },
  { vi: 'dầu làm mát', en: 'Cooling Lubricant', zh: '冷却润滑油' },
  { vi: 'dầu', en: 'Oil', zh: '机油' },
  { vi: 'nhớt', en: 'Oil', zh: '机油' },

  // 7. Máy móc & Thiết bị
  { vi: 'máy nén khí piston', en: 'Piston Air Compressor', zh: '活塞式空压机' },
  { vi: 'máy nén khí trục vít', en: 'Screw Air Compressor', zh: '螺杆式空压机' },
  { vi: 'máy nén khí không dầu', en: 'Oil-Free Air Compressor', zh: '无油空压机' },
  { vi: 'máy nén khí cao áp', en: 'High-Pressure Air Compressor', zh: '高压空压机' },
  { vi: 'máy sấy khí nén tác nhân lạnh', en: 'Refrigerated Air Dryer', zh: '冷冻式干燥机' },
  { vi: 'máy sấy khí hấp thụ', en: 'Desiccant Air Dryer', zh: '吸附式干燥机' },
  { vi: 'máy sấy khí', en: 'Compressed Air Dryer', zh: '冷干机' },
  { vi: 'máy nén khí', en: 'Air Compressor', zh: '空压机' },
  { vi: 'máy nén', en: 'Compressor', zh: '空压机' },
  { vi: 'bình chứa khí nén', en: 'Air Receiver Tank', zh: '压缩空气储气罐' },
  { vi: 'bình tích khí', en: 'Air Receiver Tank', zh: '储气罐' },
  { vi: 'bình tách dầu', en: 'Oil Separator Tank', zh: '油气分离桶' },
  { vi: 'động cơ điện', en: 'Electric Drive Motor', zh: '高效驱动电机' },
  { vi: 'biến tần', en: 'VFD Inverter', zh: '变频器' },

  // 8. Chất liệu & Xuất xứ
  { vi: 'thủy tinh', en: 'Glass', zh: '玻璃' },
  { vi: 'đồng thau', en: 'Brass', zh: '黄铜' },
  { vi: 'đồng', en: 'Copper / Brass', zh: '铜制' },
  { vi: 'inox', en: 'Stainless Steel', zh: '不锈钢' },
  { vi: 'nhôm', en: 'Aluminum', zh: '铝制' },
  { vi: 'thép', en: 'Steel', zh: '钢制' },
  { vi: 'cao su', en: 'Rubber', zh: '橡胶' },
  { vi: 'chính hãng', en: 'Genuine', zh: '正品原装' },
  { vi: 'cao cấp', en: 'Premium', zh: '高品质' },
  { vi: 'tự động', en: 'Automatic', zh: '自动' },
  { vi: 'công nghiệp', en: 'Industrial', zh: '工业级' },
  { vi: 'chịu nhiệt', en: 'Heat-Resistant', zh: '耐高温' }
];

export function autoTranslateTitle(title: string, locale: string): string {
  if (!title || locale === 'vi') return title;

  let result = title;
  const isEn = locale === 'en';
  const isZh = locale === 'zh';

  const sortedTerms = [...industrialTermsDict].sort((a, b) => b.vi.length - a.vi.length);

  for (const term of sortedTerms) {
    const regex = new RegExp(term.vi, 'gi');
    if (regex.test(result)) {
      result = result.replace(regex, isEn ? term.en : term.zh);
    }
  }

  return result.replace(/\s+/g, ' ').trim();
}

// Từ điển dịch thông số kỹ thuật (Specs Keys)
export const specKeyMap: { [key: string]: { en: string; zh: string } } = {
  'Thương hiệu': { en: 'Brand', zh: '品牌' },
  'Chất liệu': { en: 'Material', zh: '材质' },
  'Độ cứng': { en: 'Hardness', zh: '硬度' },
  'Độ chính xác chế tạo': { en: 'Manufacturing Precision', zh: '制造精度' },
  'Tương thích': { en: 'Compatibility', zh: '适用机型' },
  'Xuất xứ': { en: 'Origin', zh: '产地' },
  'Kiểu biên dạng': { en: 'Profile Type', zh: '齿形结构' },
  'Khả năng chịu nhiệt': { en: 'Heat Resistance', zh: '耐温范围' },
  'Áp suất làm việc tối đa': { en: 'Max Working Pressure', zh: '最大工作压力' },
  'Kiểu làm mát': { en: 'Cooling Type', zh: '冷却方式' },
  'Nhiệt độ hoạt động': { en: 'Operating Temperature', zh: '工作温度' },
  'Tốc độ tuyến tính tối đa': { en: 'Max Linear Speed', zh: '最高线速度' },
  'Áp suất chịu đựng': { en: 'Withstand Pressure', zh: '承压能力' },
  'Chất liệu thân': { en: 'Body Material', zh: '主体材质' },
  'Khoảng cách tâm lỗ bulông': { en: 'Hole Center Distance', zh: '孔中心距' },
  'Nhiệt độ chịu đựng': { en: 'Temperature Tolerance', zh: '耐受温度' },
  'Áp suất làm việc': { en: 'Working Pressure', zh: '工作压力' },
  'Áp suất cài đặt xả': { en: 'Set Relief Pressure', zh: '设定排放压力' },
  'Kiểu kết nối': { en: 'Connection Type', zh: '连接方式' },
  'Tiêu chuẩn chế tạo': { en: 'Manufacturing Standard', zh: '制造标准' },
  'Tên sản phẩm': { en: 'Product Name', zh: '品名型号' },
  'Độ nhớt động học (ở 40°C)': { en: 'Kinematic Viscosity (at 40°C)', zh: '运动粘度 (40°C)' },
  'Tuổi thọ khuyến nghị': { en: 'Recommended Lifespan', zh: '推荐使用寿命' },
  'Quy cách đóng gói': { en: 'Packaging', zh: '包装规格' },
  'Hiệu suất lọc bụi': { en: 'Filtration Efficiency', zh: '过滤效率' },
  'Áp suất chênh lệch tối đa': { en: 'Max Differential Pressure', zh: '最大压差' },
  'Tuổi thọ làm việc khuyến nghị': { en: 'Recommended Service Life', zh: '推荐更换周期' },
  'Độ tinh lọc': { en: 'Filtration Accuracy', zh: '过滤精度' },
  'Hiệu suất giữ bụi': { en: 'Dust Retention', zh: '容尘效率' },
  'Nồng độ dầu khí ra': { en: 'Residual Oil Content', zh: '出口含油量' },
  'Độ sụt áp ban đầu': { en: 'Initial Pressure Drop', zh: '初始压降' },
  'Tuổi thọ làm việc': { en: 'Working Lifespan', zh: '使用寿命' },
  'Điện áp cuộn coil': { en: 'Coil Voltage', zh: '线圈电压' },
  'Kiểu van': { en: 'Valve Type', zh: '阀体形式' },
  'Áp suất vận hành': { en: 'Operating Pressure', zh: '操作气压' },
  'Nhiệt độ môi trường': { en: 'Ambient Temperature', zh: '环境温度' },
};

export function translateSpecs(specs?: { [key: string]: string }, locale: string = 'vi'): { [key: string]: string } | undefined {
  if (!specs || locale === 'vi') return specs;

  const isEn = locale === 'en';
  const translated: { [key: string]: string } = {};

  for (const [key, val] of Object.entries(specs)) {
    const keyMatch = specKeyMap[key];
    const newKey = keyMatch ? (isEn ? keyMatch.en : keyMatch.zh) : key;
    translated[newKey] = val;
  }

  return translated;
}

export function translateProduct(product: Product, locale: string = 'vi'): Product {
  if (locale === 'vi') return product;

  const isEn = locale === 'en';
  const isZh = locale === 'zh';

  const catTrans = categoryTranslationMap[product.category];
  const translatedCategory = catTrans ? (isEn ? catTrans.en : catTrans.zh) : product.categoryName;
  const translatedPrice = isEn 
    ? (product.price.includes('Liên hệ') ? 'Contact for Quote' : product.price) 
    : (product.price.includes('Liên hệ') ? '请联系获取报价' : product.price);

  const autoTitle = autoTranslateTitle(product.title, locale);
  const autoDesc = isEn 
    ? `Genuine ${autoTitle} OEM replacement parts distributed by Khai Nguyen across industrial parks in Dong Nai, Binh Duong, and Southern Vietnam.`
    : `凯源机械正品直销 ${autoTitle} 原厂配件，为同奈及南部各工业区提供 2 小时现货送达与专业技术支持。`;

  return {
    ...product,
    title: autoTitle,
    description: autoDesc,
    categoryName: translatedCategory,
    price: translatedPrice,
    specs: translateSpecs(product.specs, locale),
  };
}

// Dịch tin tức
export const newsTranslationMap: { [slug: string]: { en: Partial<NewsItem>; zh: Partial<NewsItem> } } = {
  'van-an-toan-may-nen-khi': {
    en: {
      title: 'Air Compressor Safety Valves: Mechanism, Sizing, and Set Pressure Standards',
      description: 'Comprehensive guide to safety relief valve mechanisms, set-pressure calculation, and safety inspection rules.',
      content: `
        <p><strong>Air Compressor Safety Relief Valves (Safety Valves)</strong> are automatic mechanical overpressure protection devices installed on air-oil separators and air receivers. When vessel pressure exceeds design limits, the valve instantly opens to release excess air, preventing catastrophic vessel rupture.</p>
        <h2>1. Common Safety Relief Valve Specifications Table</h2>
        <div style="overflow-x: auto; margin: 20px 0;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 15px;">
            <thead>
              <tr style="background-color: var(--primary-color); color: #fff;">
                <th style="padding: 12px 15px; border: 1px solid #ddd;">Connection Thread</th>
                <th style="padding: 12px 15px; border: 1px solid #ddd;">Set Relief Pressure</th>
                <th style="padding: 12px 15px; border: 1px solid #ddd;">Standard Applications</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 12px 15px; border: 1px solid #ddd; font-weight: 600;">1/4" (DN8) - 3/8" (DN10)</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">8 Bar - 10 Bar</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">Small piston compressors, oil-free dental units</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 12px 15px; border: 1px solid #ddd; font-weight: 600;">1/2" (DN15) - 3/4" (DN20)</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">10 Bar - 13 Bar</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">10HP - 50HP screw compressor separator vessels</td>
              </tr>
              <tr>
                <td style="padding: 12px 15px; border: 1px solid #ddd; font-weight: 600;">1" (DN25) - 2" (DN50)</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">10 Bar - 40 Bar</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">1,000L - 5,000L industrial air receiver tanks</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>2. Operational Principles & Mandatory Calibration</h2>
        <p>When internal pressure overcomes spring tension, the disc lifts to exhaust compressed air. Under Vietnamese safety regulations, all pressure vessel safety valves must undergo annual third-party calibration and lead-sealing.</p>
      `
    },
    zh: {
      title: '工业空压机安全阀：结构原理、规格选型与跳动压力设定规范',
      description: '详尽解析储气罐与空压机安全阀工作机制，防止超压爆炸事故，符合越南国家特种设备检验标准。',
      content: `
        <p><strong>工业空压机安全阀（Safety Valve）</strong> 是安装于油气桶及储气罐上的全自动机械泄压防护装置。当容器内气压超过预设安全极限时，安全阀瞬间起跳排气，彻底杜绝压力容器超压爆炸隐患，保障车间人员与设备绝对安全。</p>
        <h2>一、常用工业空压机安全阀规格参数表</h2>
        <div style="overflow-x: auto; margin: 20px 0;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 15px;">
            <thead>
              <tr style="background-color: var(--primary-color); color: #fff;">
                <th style="padding: 12px 15px; border: 1px solid #ddd;">螺纹接口规格</th>
                <th style="padding: 12px 15px; border: 1px solid #ddd;">设定起跳压力 (Set Pressure)</th>
                <th style="padding: 12px 15px; border: 1px solid #ddd;">适用设备与场景</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 12px 15px; border: 1px solid #ddd; font-weight: 600;">G 1/4" (DN8) - G 3/8" (DN10)</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">8 Bar - 10 Bar</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">小型活塞空压机、医用无油静音空压机</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 12px 15px; border: 1px solid #ddd; font-weight: 600;">G 1/2" (DN15) - G 3/4" (DN20)</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">10 Bar - 13 Bar</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">10HP - 50HP 工业螺杆空压机油气分离桶</td>
              </tr>
              <tr>
                <td style="padding: 12px 15px; border: 1px solid #ddd; font-weight: 600;">G 1" (DN25) - G 2" (DN50)</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">10 Bar - 40 Bar</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">1000L - 5000L 大容量工业储气罐及高压管网</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>二、工作原理与特种设备年检标准</h2>
        <p>当容器内介质压力超过弹簧预紧力时，阀芯被顶开泄放压缩空气。根据越南特种设备安全技术检验规范，所有在用压力容器安全阀必须每年由国家授权检测机构进行校验并加施铅封。</p>
      `
    }
  },
  'van-an-toan-may-nen-khi-cau-tao-nguyen-ly-va-cach-cai-dat': {
    en: {
      title: 'Air Compressor Safety Valves: Mechanism, Sizing, and Set Pressure Standards',
      description: 'Comprehensive guide to safety relief valve mechanisms, set-pressure calculation, and safety inspection rules.',
      content: `
        <p><strong>Air Compressor Safety Relief Valves (Safety Valves)</strong> are automatic mechanical overpressure protection devices installed on air-oil separators and air receivers. When vessel pressure exceeds design limits, the valve instantly opens to release excess air, preventing catastrophic vessel rupture.</p>
        <h2>1. Common Safety Relief Valve Specifications Table</h2>
        <div style="overflow-x: auto; margin: 20px 0;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 15px;">
            <thead>
              <tr style="background-color: var(--primary-color); color: #fff;">
                <th style="padding: 12px 15px; border: 1px solid #ddd;">Connection Thread</th>
                <th style="padding: 12px 15px; border: 1px solid #ddd;">Set Relief Pressure</th>
                <th style="padding: 12px 15px; border: 1px solid #ddd;">Standard Applications</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 12px 15px; border: 1px solid #ddd; font-weight: 600;">1/4" (DN8) - 3/8" (DN10)</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">8 Bar - 10 Bar</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">Small piston compressors, oil-free dental units</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 12px 15px; border: 1px solid #ddd; font-weight: 600;">1/2" (DN15) - 3/4" (DN20)</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">10 Bar - 13 Bar</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">10HP - 50HP screw compressor separator vessels</td>
              </tr>
              <tr>
                <td style="padding: 12px 15px; border: 1px solid #ddd; font-weight: 600;">1" (DN25) - 2" (DN50)</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">10 Bar - 40 Bar</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">1,000L - 5,000L industrial air receiver tanks</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>2. Operational Principles & Mandatory Calibration</h2>
        <p>When internal pressure overcomes spring tension, the disc lifts to exhaust compressed air. Under Vietnamese safety regulations, all pressure vessel safety valves must undergo annual third-party calibration and lead-sealing.</p>
      `
    },
    zh: {
      title: '工业空压机安全阀：结构原理、规格选型与跳动压力设定规范',
      description: '详尽解析储气罐与空压机安全阀工作机制，防止超压爆炸事故，符合越南国家特种设备检验标准。',
      content: `
        <p><strong>工业空压机安全阀（Safety Valve）</strong> 是安装于油气桶及储气罐上的全自动机械泄压防护装置。当容器内气压超过预设安全极限时，安全阀瞬间起跳排气，彻底杜绝压力容器超压爆炸隐患，保障车间人员与设备绝对安全。</p>
        <h2>一、常用工业空压机安全阀规格参数表</h2>
        <div style="overflow-x: auto; margin: 20px 0;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 15px;">
            <thead>
              <tr style="background-color: var(--primary-color); color: #fff;">
                <th style="padding: 12px 15px; border: 1px solid #ddd;">螺纹接口规格</th>
                <th style="padding: 12px 15px; border: 1px solid #ddd;">设定起跳压力 (Set Pressure)</th>
                <th style="padding: 12px 15px; border: 1px solid #ddd;">适用设备与场景</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 12px 15px; border: 1px solid #ddd; font-weight: 600;">G 1/4" (DN8) - G 3/8" (DN10)</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">8 Bar - 10 Bar</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">小型活塞空压机、医用无油静音空压机</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 12px 15px; border: 1px solid #ddd; font-weight: 600;">G 1/2" (DN15) - G 3/4" (DN20)</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">10 Bar - 13 Bar</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">10HP - 50HP 工业螺杆空压机油气分离桶</td>
              </tr>
              <tr>
                <td style="padding: 12px 15px; border: 1px solid #ddd; font-weight: 600;">G 1" (DN25) - G 2" (DN50)</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">10 Bar - 40 Bar</td>
                <td style="padding: 12px 15px; border: 1px solid #ddd;">1000L - 5000L 大容量工业储气罐及高压管网</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>二、工作原理与特种设备年检标准</h2>
        <p>当容器内介质压力超过弹簧预紧力时，阀芯被顶开泄放压缩空气。根据越南特种设备安全技术检验规范，所有在用压力容器安全阀必须每年由国家授权检测机构进行校验并加施铅封。</p>
      `
    }
  }
};

export function translateNews(newsItem: NewsItem, locale: string = 'vi'): NewsItem {
  if (locale === 'vi') return newsItem;

  const isEn = locale === 'en';
  const isZh = locale === 'zh';

  const mapped = newsTranslationMap[newsItem.slug];
  if (mapped) {
    const target = isZh ? mapped.zh : mapped.en;
    if (target) {
      return {
        ...newsItem,
        title: target.title || (isZh ? (newsItem.titleZh || newsItem.title) : (newsItem.titleEn || newsItem.title)),
        description: target.description || (isZh ? (newsItem.descriptionZh || newsItem.description) : (newsItem.descriptionEn || newsItem.description)),
        content: target.content || (isZh ? (newsItem.contentZh || newsItem.content) : (newsItem.contentEn || newsItem.content)),
      };
    }
  }

  return {
    ...newsItem,
    title: isZh ? (newsItem.titleZh || newsItem.title) : isEn ? (newsItem.titleEn || newsItem.title) : newsItem.title,
    description: isZh ? (newsItem.descriptionZh || newsItem.description) : isEn ? (newsItem.descriptionEn || newsItem.description) : newsItem.description,
    content: isZh ? (newsItem.contentZh || newsItem.content) : isEn ? (newsItem.contentEn || newsItem.content) : newsItem.content,
  };
}
