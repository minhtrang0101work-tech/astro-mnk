import type { NewsItem } from '@/types';

const defaultContentHtmlVi = `
  <p>Trong quá trình vận hành nhà xưởng công nghiệp tại Đồng Nai, Bình Dương và khu vực Đông Nam Bộ, hệ thống khí nén đóng vai trò cực kỳ then chốt. Bất kỳ một sự cố nhỏ nào của máy nén khí, dù là dòng máy trục vít Kobelco, Hitachi hay Fusheng, đều có thể dẫn đến việc ngưng trệ dây chuyền sản xuất hàng loạt, gây tổn hại trực tiếp đến tiến độ giao hàng và doanh thu của doanh nghiệp.</p>
  <p>Với hơn 15 năm kinh nghiệm thực chiến trong ngành, đội ngũ kỹ sư của Khải Nguyên khuyên dùng các phụ tùng bảo dưỡng định kỳ chính hãng như lọc dầu, lọc gió và lọc tách dầu chất lượng cao. Việc thay thế đúng định kỳ không chỉ bảo vệ vòng bi đầu nén, duy trì nhiệt độ ổn định cho máy mà còn giảm lượng hao hụt dầu bôi trơn, nâng cao hiệu suất nén khí lên tối đa.</p>
  <blockquote style="border-left: 4px solid var(--accent-color); padding: 15px 20px; backgroundColor: var(--bg-light); margin: 30px 0; font-style: italic; border-radius: 0 var(--radius-sm) var(--radius-sm) 0;">
    "Chủ động bảo trì định kỳ hệ thống khí nén từ 2000 giờ - 4000 giờ hoạt động giúp doanh nghiệp giảm thiểu tới 40% chi phí sửa chữa khẩn cấp và tiết kiệm lượng điện năng đáng kể cho động cơ chính."
  </blockquote>
  <h2>Những lưu ý quan trọng khi vận hành hệ thống máy nén khí trục vít</h2>
  <ul style="padding-left: 20px; margin-bottom: 25px; display: flex; flex-direction: column; gap: 10px;">
    <li><strong>Theo dõi nhiệt độ máy:</strong> Đảm bảo nhiệt độ hoạt động của máy nén khí luôn nằm trong khoảng an toàn (từ 75°C đến 90°C). Nhiệt độ cao vượt ngưỡng 100°C cần được xử lý ngay lập tức để tránh keo dầu đầu nén.</li>
    <li><strong>Kiểm tra định kỳ lọc tách dầu:</strong> Lọc tách dầu bị nghẹt sẽ gây sụt áp suất khí nén đầu ra và làm hao dầu bôi trơn nghiêm trọng, trực tiếp làm hỏng chất lượng khí nén đi vào hệ thống.</li>
    <li><strong>Xả nước tự động:</strong> Kiểm tra hoạt động của các van xả nước tự động (Auto-drain) ở bình tích khí và máy sấy khí (Air Dryer) để ngăn nước ngưng tụ xâm nhập vào đường ống làm rỉ sét thiết bị đầu cuối.</li>
  </ul>
  <p>Nếu quý doanh nghiệp đang gặp sự cố về hệ thống khí nén hoặc cần khảo sát thiết kế nâng cấp đường ống dẫn khí nén, đừng ngần ngại liên hệ trực tiếp với Khải Nguyên qua hotline <strong>0909 513 637</strong> để nhận tư vấn kỹ thuật miễn phí 24/7.</p>
`;

const defaultContentHtmlZh = `
  <p>在越南同奈省、平阳省及南部重点工业区的生产运营中，工业压缩空气系统被称为工厂的“动力心脏”。无论是复盛（Fusheng）、神钢（Kobelco）还是日立（Hitachi）螺杆式空压机，任何微小的故障停机都可能导致整条生产线中断，造成巨大的交货延误与经济损失。</p>
  <p>凯源机械（Khai Nguyen）拥有15年以上工业空压机系统设计、安装与维修实战经验。我们的专业工程师团队建议企业严格执行定期保养周期，选用纯正机油、油分芯、机油滤芯及空气滤清器。按期保养不仅能有效保护主机轴承与螺杆转子，更能维持机组稳定运行温度，避免机油结焦并显著降低电耗。</p>
  <blockquote style="border-left: 4px solid var(--accent-color); padding: 15px 20px; backgroundColor: var(--bg-light); margin: 30px 0; font-style: italic; border-radius: 0 var(--radius-sm) var(--radius-sm) 0;">
    “坚持每运行 2,000 至 4,000 小时进行系统化预防性维护，可帮助工厂减少高达 40% 的紧急抢修成本，并为电机节省 15% - 35% 的能耗。”
  </blockquote>
  <h2>螺杆式空压机日常安全运行三大关键要素：</h2>
  <ul style="padding-left: 20px; margin-bottom: 25px; display: flex; flex-direction: column; gap: 10px;">
    <li><strong>排气温度监控：</strong> 正常运行温度应维持在 75°C - 90°C。若排气温度超过 100°C 甚至高温跳机，必须立即停机检查温控阀与冷却散热器。</li>
    <li><strong>油气分离芯压差监测：</strong> 油分芯堵塞会导致排气压降剧增并造成严重跑油，直接污染车间气动终端与产品品质。</li>
    <li><strong>冷凝水自动排放：</strong> 定期检查储气罐和冷干机（Air Dryer）的自动排水阀，防止管道积水导致气缸与电磁阀锈蚀卡死。</li>
  </ul>
  <p>若贵公司空压机系统出现高温跳机、异响、压降或需要现场能效巡检，欢迎随时致电凯源技术热线 <strong>0909 513 637</strong> 获取 24/7 中越双语技术支持。</p>
`;

const defaultContentHtmlEn = `
  <p>In the industrial manufacturing hubs of Dong Nai, Binh Duong, and Southern Vietnam, compressed air systems serve as the critical lifeline for automation lines. Any sudden breakdown in screw air compressors (such as Kobelco, Hitachi, or Fusheng) can cause severe production downtime, leading to substantial financial losses.</p>
  <p>With over 15 years of hands-on engineering expertise, Khai Nguyen highly recommends strictly adhering to scheduled preventative maintenance cycles using genuine oil, air filters, oil filters, and air-oil separators. Proper maintenance safeguards compressor air-ends, stabilizes operating temperatures, prevents oil sludging, and cuts electrical power consumption.</p>
  <blockquote style="border-left: 4px solid var(--accent-color); padding: 15px 20px; backgroundColor: var(--bg-light); margin: 30px 0; font-style: italic; border-radius: 0 var(--radius-sm) var(--radius-sm) 0;">
    "Proactive maintenance every 2,000 to 4,000 operating hours reduces emergency repair costs by up to 40% while preserving peak motor energy efficiency."
  </blockquote>
  <h2>Key Guidelines for Operating Industrial Screw Compressors:</h2>
  <ul style="padding-left: 20px; margin-bottom: 25px; display: flex; flex-direction: column; gap: 10px;">
    <li><strong>Discharge Temperature Monitoring:</strong> Safe operating range is 75°C - 90°C. Temperatures exceeding 100°C must be investigated immediately to avoid oil varnishing.</li>
    <li><strong>Separator Differential Pressure:</strong> Clogged air-oil separators create severe pressure drops and carry oil into downstream air lines.</li>
    <li><strong>Condensate Auto-Drain Inspection:</strong> Regularly inspect auto-drain valves on air receivers and refrigerated air dryers to prevent moisture build-up in factory piping.</li>
  </ul>
  <p>For urgent air compressor troubleshooting, parts quotation, or energy audits, contact Khai Nguyen at Hotline <strong>0909 513 637</strong> for 24/7 bilingual on-site support.</p>
`;

export const mockNews: NewsItem[] = [
  {
    id: 'n1',
    title: 'Hướng dẫn tối ưu hóa hiệu suất hệ thống máy nén khí trục vít trong công nghiệp',
    titleZh: '工业螺杆式空压机能效优化与节能降耗全指南',
    titleEn: 'Comprehensive Guide to Optimizing Industrial Screw Air Compressor Energy Efficiency',
    slug: 'huong-dan-toi-uu-hoa-hieu-suat-he-thong-may-nen-khi-truc-vit-trong-cong-nghiep',
    category: 'ky-thuat',
    date: '24/02/2026',
    image: '/assets/images/hero_bg.jpg',
    description: 'Khám phá các phương pháp kỹ thuật tiên tiến giúp giảm thiểu tiêu thụ điện năng và kéo dài tuổi thọ máy nén khí.',
    descriptionZh: '探索先进的空压机系统能效优化技术，帮助工厂降低30%电费支出并延长机组使用寿命。',
    descriptionEn: 'Discover advanced engineering techniques to minimize factory power consumption and extend compressor service life.',
    content: defaultContentHtmlVi,
    contentZh: defaultContentHtmlZh,
    contentEn: defaultContentHtmlEn
  },
  {
    id: 'n2',
    title: 'Tại sao cần thay dầu máy nén khí định kỳ đúng hạn?',
    titleZh: '为什么螺杆式空压机必须定期按时更换专用润滑油？',
    titleEn: 'Why Regular Air Compressor Oil Replacement is Vital for Industrial Systems',
    slug: 'tai-sao-can-thay-dau-may-nen-khi-dinh-ky-dung-han',
    category: 'bao-tri',
    date: '15 May, 2026',
    image: '/assets/images/compressor_kn100hp.jpg',
    description: 'Dầu máy nén khí đóng vai trò như dòng máu trong cơ thể, việc thay thế muộn có thể gây ra những hỏng hóc nghiêm trọng cho đầu nén.',
    descriptionZh: '空压机油犹如机组的血液，超时不换油会导致机油氧化结焦、机头抱死及高额大修费用。',
    descriptionEn: 'Air compressor oil is the lifeblood of the machine; delayed oil changes cause severe air-end varnish and seizure.',
    content: defaultContentHtmlVi,
    contentZh: defaultContentHtmlZh,
    contentEn: defaultContentHtmlEn
  },
  {
    id: 'n3',
    title: 'Công nghệ biến tần Inverter: Tiết kiệm 35% điện năng',
    titleZh: '变频节能空压机技术：降低35%工厂用电成本与压力恒定控制',
    titleEn: 'VFD Inverter Technology: Saving Up to 35% Energy for Factory Air Systems',
    slug: 'cong-nghe-bien-tan-inverter-tiet-kiem-35-dien-nang',
    category: 'cong-nghe',
    date: '12 May, 2026',
    image: '/assets/images/hero_bg.jpg',
    description: 'Tìm hiểu cách bộ biến tần điều chỉnh tốc độ động cơ theo nhu cầu thực tế của nhà máy để tối ưu hóa chi phí vận hành hàng tháng.',
    descriptionZh: '变频器根据用气端实际需求实时调节电机转速，彻底消除空载浪费，实现恒压供气与节电35%。',
    descriptionEn: 'Learn how variable frequency drives adapt motor speed to real-time air demand, eliminating unload waste.',
    content: defaultContentHtmlVi,
    contentZh: defaultContentHtmlZh,
    contentEn: defaultContentHtmlEn
  },
  {
    id: 'n4',
    title: 'Dự án lắp đặt hệ thống máy nén khí Kobelco tại KCN VSIP',
    titleZh: '平阳VSIP工业区神钢（Kobelco）螺杆式空压机系统安装工程案例',
    titleEn: 'Kobelco Screw Compressor Installation Project at VSIP Industrial Park',
    slug: 'du-an-lap-dat-he-thong-may-nen-khi-kobelco-tai-kcn-vsip',
    category: 'du-an',
    date: '09 May, 2026',
    image: '/assets/images/about_engineer.jpg',
    description: 'Khải Nguyên hoàn thành bàn giao hệ thống 250HP cho đối tác sản xuất linh kiện điện tử tại Bình Dương với độ tinh khiết khí cao.',
    descriptionZh: '凯源机械成功向平阳省外资电子企业交付250HP高品质无油级洁净压缩空气站房系统。',
    descriptionEn: 'Khai Nguyen completed the turnkey commissioning of a 250HP Kobelco system for electronics manufacturing.',
    content: defaultContentHtmlVi,
    contentZh: defaultContentHtmlZh,
    contentEn: defaultContentHtmlEn
  },
  {
    id: 'n5',
    title: 'Lọc tách dầu máy nén khí: Khi nào cần thay thế?',
    titleZh: '空压机油气分离芯（油分芯）：何时需要更换与判断标准',
    titleEn: 'Air-Oil Separator: Symptoms of Failure and When to Replace',
    slug: 'loc-tach-dau-may-nen-khi-khi-nao-can-thay-the',
    category: 'tu-van',
    date: '07 May, 2026',
    image: '/assets/images/line_filter.jpg',
    description: 'Các dấu hiệu nhận biết lọc tách dầu bị nghẹt và ảnh hưởng của nó đến chất lượng khí nén đầu ra của hệ thống sản xuất.',
    descriptionZh: '解析油气分离芯堵塞的典型征兆（压差大、跑油、高温）及对下游气动精度的严重危害。',
    descriptionEn: 'Recognize the critical signs of air-oil separator clogging (high differential pressure, oil carryover).',
    content: defaultContentHtmlVi,
    contentZh: defaultContentHtmlZh,
    contentEn: defaultContentHtmlEn
  },
  {
    id: 'n6',
    title: 'Thiết kế đường ống dẫn khí nén chuẩn kỹ thuật EU',
    titleZh: '工厂工业压缩空气环形管道系统标准化设计与压降控制规范',
    titleEn: 'Industrial Compressed Air Piping Design Standard and Loop Layout',
    slug: 'thiet-ke-duong-ong-dan-khi-nen-chuan-ky-thuat-eu',
    category: 'ky-thuat',
    date: '28 April, 2026',
    image: '/assets/images/hero_bg.jpg',
    description: 'Sai lầm thường gặp khi lắp đặt đường ống gây sụt áp và đọng nước trong hệ thống máy nén khí công nghiệp.',
    descriptionZh: '避免管道弯头过多、管径过小及冷凝水倒灌等常见错误，确保终端气压稳定与零泄漏。',
    descriptionEn: 'Avoid common piping layout mistakes that create massive pressure drops and moisture entrapment.',
    content: defaultContentHtmlVi,
    contentZh: defaultContentHtmlZh,
    contentEn: defaultContentHtmlEn
  },
  {
    id: 'n7',
    title: 'Dịch vụ sửa chữa máy nén khí trục vít khẩn cấp tại các KCN Đồng Nai & Bình Dương',
    titleZh: '同奈与平阳工业区螺杆空压机24/7紧急抢修与上门维护服务 (2小时快速响应)',
    titleEn: '24/7 Emergency Screw Air Compressor Repair Services in Dong Nai & Binh Duong',
    slug: 'dich-vu-sua-chua-may-nen-khi-truc-vit-khan-cap-tai-cac-kcn-dong-nai-binh-duong',
    category: 'tin-tuc',
    date: '01 Tháng 8, 2026',
    image: '/assets/images/about_engineer.jpg',
    description: 'Sự cố dừng máy nén khí đột ngột gây gián đoạn dây chuyền sản xuất? Tìm hiểu giải pháp ứng cứu kỹ thuật khẩn cấp 2-4 giờ của Khải Nguyên tại KCN Amata, Nhơn Trạch và VSIP.',
    descriptionZh: '针对安美达（Amata）、仁泽（Nhon Trach）、VSIP等外资工业区，凯源提供2小时工程师携带专用检修仪器极速到厂抢修服务。',
    descriptionEn: 'Facing unexpected compressor downtime? Khai Nguyen provides rapid 2-4 hour emergency engineering dispatch.',
    content: defaultContentHtmlVi,
    contentZh: defaultContentHtmlZh,
    contentEn: defaultContentHtmlEn
  },
  {
    id: 'n8',
    title: 'Vệ sinh két giải nhiệt và súc rửa keo dầu máy nén khí trục vít',
    titleZh: '螺杆空压机冷却散热器化学清洗与积碳结焦彻底疏通方案',
    titleEn: 'Cooler Cleaning and Chemical De-sludging for Screw Air Compressors',
    slug: 've-sinh-ket-lam-mat-may-nen-khi',
    category: 'bao-tri',
    date: '10 Tháng 8, 2026',
    image: '/assets/images/compressor_kn100hp.jpg',
    description: 'Két giải nhiệt bám bụi và cặn dầu gây quá nhiệt máy nén khí? Hướng dẫn quy trình súc rửa két bằng hóa chất hữu cơ an toàn không bục nhôm.',
    descriptionZh: '散热器油泥堵塞导致频繁超温报警？凯源采用专业有机除垢剂循环清洗，恢复100%冷却效率且绝不腐蚀铝质管壁。',
    descriptionEn: 'Clogged oil cooler causing high temperature trips? Learn safe chemical circulation flushing procedures.',
    content: defaultContentHtmlVi,
    contentZh: defaultContentHtmlZh,
    contentEn: defaultContentHtmlEn
  },
  {
    id: 'n9',
    title: 'Hóa chất tẩy rửa két giải nhiệt máy nén khí: Hướng dẫn sử dụng an toàn',
    titleZh: '空压机散热器专用化学清洗剂安全使用指南与操作流程',
    titleEn: 'Safe Usage Guide for Air Compressor Heat Exchanger Chemical Cleaners',
    slug: 'hoa-chat-tay-rua-ket-giai-nhiet-may-nen-khi',
    category: 'tu-van',
    date: '15 Tháng 8, 2026',
    image: '/assets/images/line_filter.jpg',
    description: 'Bí quyết lựa chọn và sử dụng hóa chất súc rửa két tản nhiệt máy nén khí giúp hòa tan keo dầu triệt để, hạ nhiệt máy ngay lập tức.',
    descriptionZh: '如何正确选用含缓蚀剂的专业空压机油泥清洗液，快速分解重度积碳并保护换热铝箔。',
    descriptionEn: 'How to select and apply non-corrosive chemical flushing agents to restore full heat dissipation.',
    content: defaultContentHtmlVi,
    contentZh: defaultContentHtmlZh,
    contentEn: defaultContentHtmlEn
  },
  {
    id: 'n10',
    title: 'Van an toàn máy nén khí: Cấu tạo, nguyên lý và cách cài đặt áp suất chuẩn',
    titleZh: '工业空压机安全阀：结构原理、选型标准与跳动压力校验规范',
    titleEn: 'Air Compressor Safety Valves: Mechanism, Sizing, and Set Pressure Standards',
    slug: 'van-an-toan-may-nen-khi',
    category: 'ky-thuat',
    date: '15 Tháng 8, 2026',
    image: '/assets/images/compressor_piston.jpg',
    description: 'Van an toàn máy nén khí có tác dụng gì? Hướng dẫn cách kiểm tra, cài đặt áp suất xả an toàn và quy định kiểm định kỹ thuật định kỳ.',
    descriptionZh: '详尽解析储气罐与空压机安全阀工作机制，防止超压爆炸事故，符合越南国家特种设备检验标准。',
    descriptionEn: 'Comprehensive guide to safety relief valve mechanisms, set-pressure calculation, and safety inspection rules.',
    content: defaultContentHtmlVi,
    contentZh: defaultContentHtmlZh,
    contentEn: defaultContentHtmlEn
  },
  {
    id: 'n11',
    title: 'Van điều áp khí nén: Phân loại và cách chỉnh áp suất chính xác',
    titleZh: '气动减压阀（调压阀）：结构分类与高精度压力调节3步骤',
    titleEn: 'Pneumatic Pressure Regulating Valves: Types and Precision Tuning Guide',
    slug: 'van-dieu-ap-khi-nen',
    category: 'tu-van',
    date: '15 Tháng 8, 2026',
    image: '/assets/images/line_filter.jpg',
    description: 'Van điều áp khí nén hoạt động như thế nào? Bảng so sánh các bộ lọc điều áp đôi, bộ lọc ba và cách căn chỉnh áp suất đầu ra ổn định.',
    descriptionZh: '气动三联件与调压阀选型指南，为自动化气缸及精密喷涂设备提供恒定工作气压。',
    descriptionEn: 'Selection guide for pneumatic regulators and filter-regulator-lubricator (FRL) combo units.',
    content: defaultContentHtmlVi,
    contentZh: defaultContentHtmlZh,
    contentEn: defaultContentHtmlEn
  },
  {
    id: 'n12',
    title: 'Cảm biến áp suất khí nén: Phân loại và sơ đồ đấu nối 4-20mA chuẩn',
    titleZh: '空压机压力传感器（变送器）：量程选型与4-20mA两线制接线规范',
    titleEn: 'Air Compressor Pressure Transmitters: Range Selection and 4-20mA Wiring',
    slug: 'cam-bien-ap-suat-khi-nen',
    category: 'cong-nghe',
    date: '15 Tháng 8, 2026',
    image: '/assets/images/about_engineer.jpg',
    description: 'Cảm biến áp suất máy nén khí là gì? Hướng dẫn sơ đồ đấu nối cảm biến dòng 4-20mA vào bo điều khiển PLC và biến tần Inverter.',
    descriptionZh: '介绍Danfoss、Keller、Autonics压力传感器接线原理，解决变频器闭环控制信号抗干扰难题。',
    descriptionEn: 'Understand 4-20mA pressure transmitter wiring, calibration, and PLC inverter analog integration.',
    content: defaultContentHtmlVi,
    contentZh: defaultContentHtmlZh,
    contentEn: defaultContentHtmlEn
  },
  {
    id: 'n13',
    title: 'Dầu máy nén khí Fusheng FS600 chính hãng: Tiêu chuẩn độ nhớt và quy cách thay dầu',
    titleZh: '正品复盛（Fusheng）螺杆空压机专用油 FS600 规格参数与油品更换周期',
    titleEn: 'Genuine Fusheng FS600 Screw Air Compressor Lubricant Oil Specifications',
    slug: 'dau-may-nen-khi-fusheng-fs600-chinh-hang',
    category: 'tu-van',
    date: '16 Tháng 8, 2026',
    image: '/images/khobar-dongnai/dau-may-nen-khi-fusheng-fs600.jpg',
    description: 'Báo giá dầu Fusheng FS600 chính hãng tại Đồng Nai và Bình Dương. Hướng dẫn phân biệt dầu thật - giả và quy trình thay dầu trục vít 4.000 giờ.',
    descriptionZh: '同奈与平阳现货供应复盛原厂 FS600 高性能矿物油与合成油，防伪辨别技巧与4000小时保养规范。',
    descriptionEn: 'Genuine Fusheng FS600 screw compressor mineral & synthetic lubricant oil supply in Southern Vietnam.',
    content: defaultContentHtmlVi,
    contentZh: defaultContentHtmlZh,
    contentEn: defaultContentHtmlEn
  },
  {
    id: 'n14',
    title: 'Cửa hàng máy nén khí uy tín tại Đồng Nai - Giao hàng & Sửa chữa hỏa tốc',
    titleZh: '同奈省专业工业空压机现货总代理 - 纯正配件批发与2小时极速维修',
    titleEn: 'Trusted Industrial Air Compressor Store in Dong Nai - Rapid Delivery & Repair',
    slug: 'cua-hang-may-nen-khi-uy-tin-tai-dong-nai-giao-hang-sua-chua-hoa-toc',
    category: 'tin-tuc',
    date: '16 Tháng 8, 2026',
    image: '/images/khobar-dongnai/kho-phu-tung-fusheng-dong-nai.jpg',
    description: 'Tìm kiếm cửa hàng máy nén khí uy tín tại Biên Hòa Đồng Nai? Khải Nguyên cung cấp sỉ lẻ máy nén khí công nghiệp, linh kiện phụ tùng trục vít Fusheng chính hãng giao nhanh 2h.',
    descriptionZh: '凯源机械在边和市设立大型仓储中心，现货供应螺杆式空压机、储气罐、冷干机及各类易损耗材。',
    descriptionEn: 'Looking for a reliable air compressor distributor in Bien Hoa, Dong Nai? Fast delivery of parts and machines.',
    content: defaultContentHtmlVi,
    contentZh: defaultContentHtmlZh,
    contentEn: defaultContentHtmlEn
  },
  {
    id: 'n15',
    title: 'Top 5 phụ tùng máy nén khí trục vít cần thay thế định kỳ',
    titleZh: '工厂必须定期更换的五大螺杆空压机核心配件清单与保养工时表',
    titleEn: 'Top 5 Essential Screw Air Compressor Consumables Requiring Regular Replacement',
    slug: 'top-5-phu-tung-may-nen-khi-truc-vit-can-thay-the-dinh-ky',
    category: 'bao-tri',
    date: '16 Tháng 8, 2026',
    image: '/images/khobar-dongnai/dau-nen-may-nen-khi-dai-tu.jpg',
    description: 'Tổng hợp danh sách các loại phụ tùng máy nén khí trục vít như lọc tách dầu, lọc nhớt, dầu bôi trơn cần kiểm tra và thay mới đúng số giờ vận hành.',
    descriptionZh: '详细梳理油气分离器、机油滤芯、空气滤芯、温控阀芯及轴封定期更换维护规范，保障机组零故障。',
    descriptionEn: 'Essential guide to maintaining air-oil separators, oil filters, air filters, thermostatic valves, and shaft seals.',
    content: defaultContentHtmlVi,
    contentZh: defaultContentHtmlZh,
    contentEn: defaultContentHtmlEn
  }
];
