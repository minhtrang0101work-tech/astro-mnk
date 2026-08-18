import type { Product, NewsItem } from '@/types';

// Danh mục sản phẩm
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

// Bảng tra cứu tên sản phẩm chính xác tuyệt đối
export const exactTitleMap: { [key: string]: { en: string; zh: string } } = {
  'tách dầu fusheng sa 75': { en: 'Fusheng SA 75 Air-Oil Separator', zh: '复盛 (Fusheng) SA 75 油气分离芯' },
  'tách dầu fusheng': { en: 'Fusheng Air-Oil Separator', zh: '复盛 (Fusheng) 油气分离芯' },
  'tách nhớt fusheng': { en: 'Fusheng Air-Oil Separator', zh: '复盛 (Fusheng) 油气分离芯' },
  'van điều áp khí nén': { en: 'Precision Pneumatic Pressure Regulator', zh: '精密气动调压阀 (减压阀)' },
  'van chỉnh áp khí nén': { en: 'Pneumatic Pressure Regulating Valve', zh: '气动调压减压阀' },
  'van chỉnh áp': { en: 'Pressure Regulating Valve', zh: '气动调压阀' },
  'chỉnh áp khí nén': { en: 'Pneumatic Pressure Regulator', zh: '气动调压器' },
  'trục khuỷu': { en: 'Crankshaft Assembly', zh: '空压机精密锻造曲轴' },
  'trục khuỷu máy nén khí': { en: 'Air Compressor Crankshaft', zh: '空压机曲轴总成' },
  'tay biên': { en: 'Connecting Rod', zh: '连杆组件' },
  'đồng hồ máy nén khí': { en: 'Air Compressor Pressure Gauge', zh: '空压机高精度防震压力表' },
  'đồng hồ đo áp suất máy nén khí': { en: 'Air Compressor Pressure Gauge', zh: '空压机高精度压力表' },
  'đồng hồ đo áp suất': { en: 'Pressure Gauge', zh: '高精度压力表' },
  'đồng hồ áp suất': { en: 'Pressure Gauge', zh: '防震压力表' },
  'đồng hồ áp': { en: 'Pressure Gauge', zh: '压力表' },
  'đồng hồ': { en: 'Pressure Gauge', zh: '压力表' },
  'phớt chặn dầu': { en: 'Shaft Oil Seal', zh: '轴端骨架油封' },
  'phớt chắn dầu': { en: 'Shaft Oil Seal', zh: '轴端骨架油封' },
  'phớt chặn': { en: 'Oil Seal', zh: '骨架油封' },
  'phớt chắn': { en: 'Oil Seal', zh: '骨架油封' },
  'phớt': { en: 'Oil Seal', zh: '油封' },
  'phao xả nước tự động': { en: 'Float Auto Drain Valve', zh: '浮球式自动排水阀' },
  'phao xả nước': { en: 'Float Drain Valve', zh: '浮球排水阀' },
  'ống pu cuộn': { en: 'PU Pneumatic Hose Coil', zh: 'PU气动软管卷 (聚氨酯管)' },
  'ống hút gió máy nén khí': { en: 'Air Compressor Intake Hose', zh: '空压机进气软管' },
  'mô tơ máy nén khí': { en: 'Air Compressor Drive Motor', zh: '空压机三相异步驱动电机' },
  'mô tơ': { en: 'Electric Motor', zh: '驱动电机' },
  'màn hình điều khiển': { en: 'PLC Controller Display Panel', zh: 'PLC微电脑控制器显示屏 (控制面板)' },
  'hạt hút ẩm': { en: 'Desiccant Alumina Beads', zh: '高效活性氧化铝吸附干燥颗粒 (吸附剂)' },
  'đầu nối': { en: 'Pneumatic Quick Coupler & Fittings', zh: '气动快速接头 (铜接头/快插接头)' },
  'đầu máy nén khí': { en: 'Air Compressor Pump Block Head', zh: '空压机机头主机总成' },
  'đầu bơm mỡ': { en: 'Grease Gun Coupler Nozzle', zh: '高压黄油枪注油嘴' },
  'dây phun khí': { en: 'High-Pressure Air Spray Hose', zh: '高压气动喷气软管 (风带)' },
  'dây dẫn mỡ': { en: 'High-Pressure Grease Hose', zh: '高压注脂软管 (黄油管)' },
  'dàn trao đổi nhiệt': { en: 'Heat Exchanger Cooler Matrix', zh: '铝制换热器 (油气冷却器)' },
  'công tắc áp suất': { en: 'Pressure Switch Controller', zh: '压力开关控制器' },
  'cốc xả nước tự động': { en: 'Auto Drain Filter Bowl', zh: '自动排水器水杯' },
  'cốc lọc đường ống': { en: 'Inline Filter Housing Bowl', zh: '管道过滤器滤杯外壳' },
  'cổ hút máy nén khí': { en: 'Air Compressor Intake Valve Assembly', zh: '螺杆空压机进气阀总成' },
  'bộ xả nước tự động': { en: 'Automatic Drain Valve Assembly', zh: '自动排水器总成' },
  'bộ tách nước khí nén': { en: 'Compressed Air Moisture Separator', zh: '压缩空气气水分离器' },
  'bộ lọc đường ống khí nén': { en: 'Inline Compressed Air Filter System', zh: '压缩空气精密管道过滤器组' },
  'bình khí nén inox': { en: 'Stainless Steel Air Receiver Tank', zh: '304不锈钢高压储气罐' },
  'bình khí nén': { en: 'Compressed Air Receiver Tank', zh: '工业高压压缩空气储气罐' },
  'dầu fusheng': { en: 'Genuine Fusheng Lubricant Oil', zh: '正品复盛 (Fusheng) 专用机油' },
  'quạt giải nhiệt': { en: 'Cooling Fan Assembly', zh: '散热冷却风扇' },
  'bạc đạn đầu nén': { en: 'Air-End Heavy Duty Bearings', zh: '主机转子重载轴承' },
  'xi lanh máy nén khí piston': { en: 'Piston Compressor Cylinder', zh: '活塞式空压机气缸' },
  'ròng rọc hơi': { en: 'Automatic Air Hose Reel', zh: '自动回卷气管卷轴 (气鼓)' },
  'ron đầu nén': { en: 'Air-End Gasket Set', zh: '压缩机头密封垫片包' },
  'dây đai truyền động': { en: 'Drive Belt', zh: '传动皮带' },
  'dây curoa': { en: 'Industrial Drive V-Belt', zh: '工业三角传动皮带' }
};

// Từ điển thuật ngữ công nghiệp chi tiết
export const fullIndustrialDict = [
  // 1. Bình & Bể chứa
  { vi: 'bình khí nén không gỉ', en: 'Stainless Steel Air Receiver Tank', zh: '304不锈钢高压储气罐' },
  { vi: 'bình khí nén inox', en: 'Stainless Steel Air Receiver Tank', zh: '304不锈钢高压储气罐' },
  { vi: 'bình khí nén không rỉ', en: 'Stainless Steel Air Receiver Tank', zh: '304不锈钢高压储气罐' },
  { vi: 'bình khí nén', en: 'Compressed Air Receiver Tank', zh: '工业高压压缩空气储气罐' },
  { vi: 'bình chứa khí nén', en: 'Compressed Air Receiver Tank', zh: '工业压缩空气储气罐' },
  { vi: 'bình tích khí', en: 'Air Receiver Tank', zh: '储气罐' },
  { vi: 'bình tách dầu', en: 'Air-Oil Separator Vessel', zh: '油气分离桶' },
  { vi: 'bình chứa khí', en: 'Air Receiver Tank', zh: '储气罐' },
  { vi: 'bình chứa', en: 'Air Vessel Tank', zh: '储气罐' },

  // 2. Bộ lọc, Tách nước, Cốc lọc
  { vi: 'bộ tách nước khí nén', en: 'Compressed Air Moisture Separator', zh: '压缩空气气水分离器' },
  { vi: 'bộ tách nước', en: 'Moisture Separator', zh: '气水分离器' },
  { vi: 'bộ lọc đường ống khí nén', en: 'Inline Compressed Air Filter System', zh: '压缩空气精密管道过滤器组' },
  { vi: 'bộ lọc đường ống', en: 'Inline Air Filter System', zh: '精密管道过滤器组' },
  { vi: 'bộ lọc tách dầu', en: 'Air-Oil Separator Kit', zh: '油气分离器总成' },
  { vi: 'bộ lọc tách', en: 'Air-Oil Separator Kit', zh: '油气分离器总成' },
  { vi: 'bộ xả nước tự động', en: 'Automatic Drain Valve Assembly', zh: '自动排水器总成' },
  { vi: 'bộ xả nước', en: 'Drain Valve Kit', zh: '排水器总成' },
  { vi: 'bộ lọc khí', en: 'Air Filter Set', zh: '空气过滤器组' },
  { vi: 'bộ lọc', en: 'Filter Set', zh: '过滤器总成' },
  { vi: 'cốc xả nước tự động', en: 'Auto Drain Filter Bowl', zh: '自动排水器水杯' },
  { vi: 'cốc xả nước', en: 'Drain Filter Bowl', zh: '排水器滤杯' },
  { vi: 'cốc lọc đường ống', en: 'Inline Filter Housing Bowl', zh: '管道过滤器滤杯外壳' },
  { vi: 'cốc lọc', en: 'Filter Housing Bowl', zh: '过滤器滤杯' },
  { vi: 'cốc xả', en: 'Drain Bowl', zh: '排水水杯' },
  { vi: 'cốc', en: 'Filter Bowl / Housing', zh: '滤杯' },
  { vi: 'lõi lọc đường ống', en: 'Inline Filter Element', zh: '管道精密滤芯' },
  { vi: 'lõi lọc', en: 'Filter Element', zh: '滤芯' },
  { vi: 'lọc tách dầu', en: 'Air-Oil Separator', zh: '油气分离芯 (油分芯)' },
  { vi: 'lọc tách nhớt', en: 'Air-Oil Separator', zh: '油气分离芯 (油分芯)' },
  { vi: 'lọc tách', en: 'Air-Oil Separator', zh: '油气分离芯' },
  { vi: 'tách dầu', en: 'Air-Oil Separator', zh: '油气分离芯' },
  { vi: 'tách nhớt', en: 'Air-Oil Separator', zh: '油气分离芯' },
  { vi: 'lọc dầu', en: 'Oil Filter', zh: '机油滤清器 (油滤)' },
  { vi: 'lọc nhớt', en: 'Oil Filter', zh: '机油滤清器 (油滤)' },
  { vi: 'lọc gió', en: 'Air Intake Filter', zh: '空气滤清器 (空滤)' },
  { vi: 'lọc khí', en: 'Air Filter', zh: '空气过滤器' },

  // 3. Phao, Van, Khớp, Đấu nối
  { vi: 'phao xả nước tự động', en: 'Float Auto Drain Valve', zh: '浮球式自动排水阀' },
  { vi: 'phao xả nước', en: 'Float Drain Valve', zh: '浮球排水阀' },
  { vi: 'phao xả', en: 'Float Drainer', zh: '浮球排水器' },
  { vi: 'công tắc áp suất', en: 'Pressure Switch Controller', zh: '压力开关控制器' },
  { vi: 'công tắc áp', en: 'Pressure Switch', zh: '压力开关' },
  { vi: 'rơ le máy nén khí', en: 'Air Compressor Pressure Switch', zh: '空压机压力开关继电器' },
  { vi: 'rơle máy nén khí', en: 'Air Compressor Pressure Switch', zh: '空压机压力开关继电器' },
  { vi: 'rơ le áp suất', en: 'Pressure Switch', zh: '压力开关继电器' },
  { vi: 'rơle áp suất', en: 'Pressure Switch', zh: '压力开关继电器' },
  { vi: 'rơ le nhiệt', en: 'Thermal Overload Relay', zh: '热过载继电器' },
  { vi: 'rơle nhiệt', en: 'Thermal Overload Relay', zh: '热过载继电器' },
  { vi: 'rơ le', en: 'Pressure Switch / Relay', zh: '压力继电器' },
  { vi: 'rơle', en: 'Pressure Switch / Relay', zh: '压力继电器' },
  { vi: 'van điều áp khí nén', en: 'Precision Pneumatic Pressure Regulator', zh: '精密气动调压阀 (减压阀)' },
  { vi: 'van chỉnh áp khí nén', en: 'Pneumatic Pressure Regulating Valve', zh: '气动调压减压阀' },
  { vi: 'van điều áp', en: 'Pressure Regulating Valve', zh: '精密调压阀' },
  { vi: 'van chỉnh áp', en: 'Pressure Regulating Valve', zh: '调压减压阀' },
  { vi: 'chỉnh áp khí nén', en: 'Pneumatic Pressure Regulator', zh: '气动调压器' },
  { vi: 'chỉnh áp', en: 'Pressure Regulator', zh: '调压器' },
  { vi: 'van an toàn xả áp', en: 'Safety Relief Valve', zh: '安全泄放阀' },
  { vi: 'van an toàn', en: 'Safety Valve', zh: '安全阀' },
  { vi: 'van xả nước tự động', en: 'Auto Drain Valve', zh: '自动排水阀' },
  { vi: 'van xả tự động', en: 'Auto Drain Valve', zh: '自动排水阀' },
  { vi: 'van xả nước', en: 'Drain Valve', zh: '排水阀' },
  { vi: 'van điện từ', en: 'Solenoid Valve', zh: '电磁控制阀' },
  { vi: 'van hằng nhiệt', en: 'Thermostatic Valve', zh: '自动温控阀' },
  { vi: 'van nhiệt', en: 'Thermostatic Valve', zh: '温控阀' },
  { vi: 'van một chiều', en: 'Check Valve', zh: '单向止回阀' },
  { vi: 'van hút', en: 'Air Intake Valve', zh: '进气控制阀' },
  { vi: 'van cổ hút', en: 'Air Intake Valve', zh: '进气控制阀' },
  { vi: 'cổ hút máy nén khí', en: 'Air Compressor Intake Valve Assembly', zh: '螺杆空压机进气阀总成' },
  { vi: 'cổ hút', en: 'Air Intake Valve', zh: '进气阀总成' },
  { vi: 'van áp suất tối thiểu', en: 'Minimum Pressure Valve', zh: '最小压力维持阀 (MPV)' },
  { vi: 'van tiết lưu', en: 'Throttle Valve', zh: '节流阀' },
  { vi: 'van xả tải', en: 'Blowdown Valve', zh: '放空阀' },
  { vi: 'van', en: 'Valve', zh: '阀门' },

  // 4. Cơ khí, Động cơ, Mô tơ, Đầu nén, Bơm mỡ
  { vi: 'mô tơ máy nén khí', en: 'Air Compressor Drive Motor', zh: '空压机三相异步驱动电机' },
  { vi: 'mô tơ', en: 'Electric Motor', zh: '驱动电机' },
  { vi: 'motor', en: 'Electric Motor', zh: '驱动电机' },
  { vi: 'động cơ điện', en: 'Electric Motor', zh: '高效驱动电机' },
  { vi: 'đầu máy nén khí', en: 'Air Compressor Pump Block Head', zh: '空压机机头主机总成' },
  { vi: 'đầu nén trục vít', en: 'Screw Air-End Block', zh: '螺杆机头主机' },
  { vi: 'đầu nén', en: 'Air-End Block', zh: '压缩机头' },
  { vi: 'đầu bơm mỡ', en: 'Grease Gun Coupler Nozzle', zh: '高压黄油枪注油嘴' },
  { vi: 'đầu nối nhanh', en: 'Quick Coupler Fitting', zh: '气动快速接头' },
  { vi: 'đầu nối', en: 'Pneumatic Fittings / Connector', zh: '气动快速接头' },
  { vi: 'đầu bơm', en: 'Pump Head', zh: '泵头' },
  { vi: 'đầu', en: 'Head / Block', zh: '机头/接头' },

  // 5. Ống, Dây, Cuộn dây
  { vi: 'ống pu cuộn', en: 'PU Pneumatic Hose Coil', zh: 'PU气动软管卷 (聚氨酯管)' },
  { vi: 'ống pu', en: 'PU Pneumatic Hose', zh: 'PU气动软管' },
  { vi: 'ống hút gió máy nén khí', en: 'Air Compressor Intake Hose', zh: '空压机进气软管' },
  { vi: 'ống hút gió', en: 'Air Intake Hose', zh: '进气软管' },
  { vi: 'ống dẫn dầu', en: 'High Pressure Oil Hose', zh: '高压耐油软管' },
  { vi: 'ống dẫn khí', en: 'Pneumatic Air Hose', zh: '气动耐压软管' },
  { vi: 'ống mềm', en: 'Flexible Hose', zh: '柔性软管' },
  { vi: 'ống', en: 'Hose / Pipe', zh: '软管/管路' },
  { vi: 'dây phun khí', en: 'High-Pressure Air Spray Hose', zh: '高压气动喷气软管 (风带)' },
  { vi: 'dây dẫn mỡ', en: 'High-Pressure Grease Hose', zh: '高压注脂软管 (黄油管)' },
  { vi: 'dây curoa', en: 'Industrial Drive V-Belt', zh: '工业三角传动皮带' },
  { vi: 'dây đai răng cưa', en: 'Cogged Drive Belt', zh: '齿形切边传动皮带' },
  { vi: 'dây đai truyền động', en: 'Drive Belt', zh: '传动皮带' },
  { vi: 'dây đai', en: 'Drive Belt', zh: '传动皮带' },
  { vi: 'ròng rọc hơi', en: 'Automatic Air Hose Reel', zh: '自动回卷气管卷轴 (气鼓)' },
  { vi: 'ròng rọc', en: 'Hose Reel', zh: '气管卷轴' },
  { vi: 'cuộn dây hơi', en: 'Air Hose Reel', zh: '自动卷气管器' },
  { vi: 'dây hơi', en: 'Air Hose', zh: '气动软管' },

  // 6. Phớt, Gioăng, Ron, Bạc đạn, Xi lanh, Trục khuỷu
  { vi: 'trục khuỷu máy nén khí', en: 'Air Compressor Crankshaft', zh: '空压机曲轴总成' },
  { vi: 'trục khuỷu', en: 'Crankshaft Assembly', zh: '空压机精密锻造曲轴' },
  { vi: 'tay biên', en: 'Connecting Rod', zh: '连杆组件' },
  { vi: 'phớt chặn dầu', en: 'Air-End Shaft Oil Seal', zh: '轴端骨架油封' },
  { vi: 'phớt chắn dầu', en: 'Air-End Shaft Oil Seal', zh: '轴端骨架油封' },
  { vi: 'phớt chặn', en: 'Oil Seal', zh: '骨架油封' },
  { vi: 'phớt chắn', en: 'Oil Seal', zh: '骨架油封' },
  { vi: 'phớt', en: 'Seal', zh: '油封/密封件' },
  { vi: 'ron đầu nén', en: 'Air-End Gasket Set', zh: '压缩机头密封垫片包' },
  { vi: 'bộ ron', en: 'Full Gasket Kit', zh: '全套密封垫片包' },
  { vi: 'ron phớt', en: 'Gaskets & Seals', zh: '密封圈与垫片' },
  { vi: 'ron', en: 'Gasket / O-Ring', zh: '密封垫片' },
  { vi: 'gioăng phớt', en: 'Gaskets & Seals', zh: '密封圈与垫片' },
  { vi: 'gioăng', en: 'Gasket / O-Ring', zh: '密封垫片' },
  { vi: 'bạc đạn đầu nén', en: 'Air-End Heavy Duty Bearings', zh: '主机转子重载轴承' },
  { vi: 'bạc đạn', en: 'Bearings', zh: '重载轴承' },
  { vi: 'vòng bi', en: 'Bearings', zh: '重载轴承' },
  { vi: 'xi lanh máy nén khí piston', en: 'Piston Compressor Cylinder', zh: '活塞式空压机气缸' },
  { vi: 'xi lanh máy nén khí', en: 'Air Compressor Cylinder', zh: '空压机气缸' },
  { vi: 'xi lanh', en: 'Cylinder', zh: '气缸' },
  { vi: 'xylanh', en: 'Cylinder', zh: '气缸' },
  { vi: 'piston', en: 'Piston Assembly', zh: '活塞组件' },
  { vi: 'xéc măng', en: 'Piston Rings', zh: '活塞环' },
  { vi: 'bánh răng chủ động', en: 'Driving Gear', zh: '主动传动齿轮' },
  { vi: 'bánh răng', en: 'Transmission Gear', zh: '传动齿轮' },
  { vi: 'khớp nối mềm', en: 'Flexible Coupling', zh: '弹性联轴器' },
  { vi: 'khớp nối', en: 'Coupling', zh: '联轴器' },

  // 7. Giải nhiệt, Quạt, Dầu & Hạt hút ẩm
  { vi: 'dàn trao đổi nhiệt', en: 'Heat Exchanger Cooler Matrix', zh: '铝制换热器 (油气冷却器)' },
  { vi: 'dàn giải nhiệt', en: 'Cooler Matrix', zh: '散热排/冷却器' },
  { vi: 'két giải nhiệt dầu', en: 'Oil Cooler Heat Exchanger', zh: '机油散热冷却器' },
  { vi: 'két giải nhiệt', en: 'Heat Exchanger Cooler', zh: '散热冷却器' },
  { vi: 'két làm mát', en: 'Air/Oil Cooler', zh: '风冷散热器' },
  { vi: 'quạt giải nhiệt', en: 'Cooling Fan Assembly', zh: '散热冷却风扇' },
  { vi: 'quạt làm mát', en: 'Cooling Fan Assembly', zh: '冷却风机' },
  { vi: 'quạt', en: 'Cooling Fan', zh: '冷却风扇' },
  { vi: 'hạt hút ẩm', en: 'Desiccant Alumina Beads', zh: '高效活性氧化铝吸附干燥颗粒 (吸附剂)' },
  { vi: 'chất hút ẩm', en: 'Desiccant Beads', zh: '吸附干燥剂' },
  { vi: 'dầu máy nén khí fusheng', en: 'Genuine Fusheng Air Compressor Oil', zh: '正品复盛 (Fusheng) 螺杆空压机专用油' },
  { vi: 'dầu fusheng', en: 'Genuine Fusheng Lubricant Oil', zh: '正品复盛 (Fusheng) 专用机油' },
  { vi: 'dầu máy nén khí trục vít', en: 'Screw Compressor Synthetic Oil', zh: '螺杆空压机专用合成润滑油' },
  { vi: 'dầu máy nén khí', en: 'Air Compressor Lubricant Oil', zh: '空压机专用润滑油' },
  { vi: 'dầu bôi trơn', en: 'Lubricant Oil', zh: '专用润滑油' },
  { vi: 'dầu làm mát', en: 'Cooling Lubricant', zh: '冷却润滑油' },
  { vi: 'dầu', en: 'Lubricant Oil', zh: '专用润滑油' },
  { vi: 'nhớt', en: 'Lubricant Oil', zh: '专用润滑油' },

  // 8. Màn hình, Cảm biến, Đồng hồ
  { vi: 'màn hình điều khiển', en: 'PLC Controller Display Panel', zh: 'PLC微电脑控制器显示屏 (控制面板)' },
  { vi: 'màn hình plc', en: 'PLC Controller Display', zh: 'PLC控制器显示屏' },
  { vi: 'màn hình', en: 'Display Screen', zh: '显示屏' },
  { vi: 'bảng điều khiển', en: 'Control Panel', zh: '控制面板' },
  { vi: 'cảm biến áp suất khí nén', en: 'Pressure Transmitter', zh: '空压机压力变送器' },
  { vi: 'cảm biến áp suất', en: 'Pressure Sensor', zh: '压力传感器' },
  { vi: 'cảm biến nhiệt độ', en: 'Temperature Sensor', zh: '温度传感器' },
  { vi: 'cảm biến', en: 'Sensor', zh: '传感器' },
  { vi: 'đồng hồ đo áp suất máy nén khí', en: 'Air Compressor Pressure Gauge', zh: '空压机高精度防震压力表' },
  { vi: 'đồng hồ đo áp suất', en: 'Pressure Gauge', zh: '高精度防震压力表' },
  { vi: 'đồng hồ áp suất', en: 'Pressure Gauge', zh: '防震压力表' },
  { vi: 'đồng hồ áp', en: 'Pressure Gauge', zh: '压力表' },
  { vi: 'đồng hồ máy nén khí', en: 'Air Compressor Pressure Gauge', zh: '空压机高精度防震压力表' },
  { vi: 'đồng hồ', en: 'Pressure Gauge', zh: '防震压力表' },
  { vi: 'thước đo mức dầu', en: 'Oil Level Sight Glass Gauge', zh: '玻璃管油位计/观油镜' },
  { vi: 'thước thăm dầu', en: 'Oil Level Gauge', zh: '油位计/观油镜' },
  { vi: 'mắt thăm dầu', en: 'Oil Sight Glass', zh: '观油镜' },

  // 9. Máy móc
  { vi: 'máy nén khí piston', en: 'Piston Air Compressor', zh: '活塞式空压机' },
  { vi: 'máy nén khí trục vít', en: 'Screw Air Compressor', zh: '螺杆式空压机' },
  { vi: 'máy nén khí không dầu', en: 'Oil-Free Air Compressor', zh: '无油空压机' },
  { vi: 'máy nén khí cao áp', en: 'High-Pressure Air Compressor', zh: '高压空压机' },
  { vi: 'máy sấy khí nén tác nhân lạnh', en: 'Refrigerated Air Dryer', zh: '冷冻式干燥机' },
  { vi: 'máy sấy khí hấp thụ', en: 'Desiccant Air Dryer', zh: '吸附式干燥机' },
  { vi: 'máy sấy khí', en: 'Compressed Air Dryer', zh: '冷干机' },
  { vi: 'máy nén khí', en: 'Air Compressor', zh: '空压机' },
  { vi: 'máy nén', en: 'Compressor', zh: '空压机' },
  { vi: 'khí nén', en: 'Compressed Air', zh: '压缩空气' },
  { vi: 'biến tần', en: 'VFD Inverter', zh: '变频器' },

  // 10. Chất liệu, Thuộc tính, Xuất xứ
  { vi: 'không gỉ', en: 'Stainless Steel', zh: '不锈钢' },
  { vi: 'inox', en: 'Stainless Steel (304)', zh: '304不锈钢' },
  { vi: 'đồng thau', en: 'Brass', zh: '黄铜' },
  { vi: 'đồng', en: 'Copper / Brass', zh: '铜制' },
  { vi: 'nhôm', en: 'Aluminum', zh: '铝制' },
  { vi: 'thép', en: 'Steel', zh: '钢制' },
  { vi: 'thủy tinh', en: 'Glass', zh: '防爆玻璃' },
  { vi: 'cao su', en: 'Rubber', zh: '橡胶' },
  { vi: 'chính hãng', en: 'Genuine', zh: '正品原装' },
  { vi: 'cao cấp', en: 'Premium', zh: '高品质' },
  { vi: 'tự động', en: 'Automatic', zh: '自动' },
  { vi: 'công nghiệp', en: 'Industrial', zh: '工业级' },
  { vi: 'chịu nhiệt', en: 'Heat-Resistant', zh: '耐高温' }
];

export function autoTranslateTitle(title: string, locale: string): string {
  if (!title || locale === 'vi') return title;

  const isEn = locale === 'en';
  const isZh = locale === 'zh';
  const lower = title.toLowerCase().trim();

  // 1. Kiểm tra Exact Map
  if (exactTitleMap[lower]) {
    return isEn ? exactTitleMap[lower].en : exactTitleMap[lower].zh;
  }

  // 2. Chạy qua fullIndustrialDict đã được sắp xếp độ dài giảm dần
  const sortedTerms = [...fullIndustrialDict].sort((a, b) => b.vi.length - a.vi.length);

  let result = title;
  for (const term of sortedTerms) {
    const regex = new RegExp(term.vi, 'gi');
    if (regex.test(result)) {
      result = result.replace(regex, isEn ? term.en : term.zh);
    }
  }

  // 3. Dọn dẹp từ dư tiếng Việt
    if (isZh) {
    result = result.replace(/khí\s*nén/gi, '');
    result = result.replace(/tách/gi, '油气分离芯');
    result = result.replace(/chỉnh\s*áp/gi, '调压');
    result = result.replace(/phớt\s*chặn/gi, '轴端骨架油封');
    result = result.replace(/phớt\s*chắn/gi, '轴端骨架油封');
    result = result.replace(/phớt/gi, '油封');
    result = result.replace(/van/gi, '阀');
    result = result.replace(/hồ/gi, '');
    result = result.replace(/专用润滑油 轴端骨架油封/gi, '轴端骨架油封');
    result = result.replace(/轴端骨架油封 专用润滑油/gi, '轴端骨架油封');
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

export const productDescriptionMap: { [slug: string]: { en: string; zh: string } } = {
  "banh-rang-chu-dong-may-nen-khi-atlas-copco": {
    "zh": "\n      <h2>阿特拉斯·科普柯 (Atlas Copco) 空压机主动齿轮</h2>\n      <p><strong>阿特拉斯·科普柯空压机专用传动齿轮</strong>采用高强度优质合金钢精锻制造，经真空高温淬火与高频表面渗碳热处理，在 24/7 恶劣连续重载运行工况下具备卓越的抗疲劳承载力与耐磨耐蚀性能。</p>\n      <h3>一、核心技术优势</h3>\n      <ul>\n        <li><strong>精准齿形啮合</strong>：符合 ISO 1328 标准 6 级精密齿形制造，确保高速运转时传动平稳、震动极低。</li>\n        <li><strong>超长使用寿命</strong>：齿面硬度达 58-62 HRC，显著降低传动摩擦损耗，有效保护主机转子轴承。</li>\n        <li><strong>完美机型适配</strong>：专为 Atlas Copco GA 系列螺杆式空压机设计，即装即用。</li>\n      </ul>\n      <h3>二、安装与维护建议</h3>\n      <p>在更换传动齿轮时，建议同步检查齿轮箱润滑油品质与轴承游隙，确保润滑油位正常，并使用专用拉马工具规范安装。</p>\n    ",
    "en": "\n      <h2>Atlas Copco Air Compressor Driving Gear</h2>\n      <p><strong>Dedicated Drive Gear for Atlas Copco Screw Air Compressors</strong> is precision forged from high-grade hardened alloy steel with vacuum heat treatment, delivering outstanding load capacity and wear resistance in continuous 24/7 heavy-duty operations.</p>\n      <h3>1. Key Technical Advantages</h3>\n      <ul>\n        <li><strong>Precision Tooth Profile</strong>: Manufactured to ISO 1328 Grade 6 accuracy for ultra-smooth power transmission and minimal vibration.</li>\n        <li><strong>Extended Service Life</strong>: Hardness rating of 58-62 HRC ensures minimal wear, protecting rotor bearings under high torque.</li>\n        <li><strong>Direct OEM Fit</strong>: Perfectly compatible with Atlas Copco GA series screw air compressors.</li>\n      </ul>\n      <h3>2. Installation & Maintenance Guidelines</h3>\n      <p>Always inspect gearbox lubricant quality and bearing clearances when replacing gears. Use proper puller tools to avoid damage to the shaft seat.</p>\n    "
  },
  "day-dai-truyen-dong-may-nen-khi-toyo-rang-cua": {
    "zh": "\n      <h2>日本东洋 (Toyo) 齿形切边空压机传动皮带</h2>\n      <p><strong>东洋 (Toyo) 工业级齿形传动皮带</strong>采用先进的模压切边齿形结构与高耐热三元乙丙 (EPDM) 橡胶制造，内置高拉力芳纶线绳抗拉层，彻底消除皮带打滑现象，大幅提升电机与主机间的动力传输效率。</p>\n      <h3>一、主要性能特点</h3>\n      <ul>\n        <li><strong>极高动力传递效率</strong>：齿形切边设计大幅增加带轮接触抓地力，减少能量摩擦损耗高达 3-5%。</li>\n        <li><strong>优异耐温耐油特性</strong>：可在 -40°C 至 120°C 恶劣环境下持续稳定运行，抗油雾老化能力强。</li>\n        <li><strong>零拉伸自张紧稳定性</strong>：芳纶增强骨架使皮带在全生命周期内极少伸长，无需频繁重新张紧。</li>\n      </ul>\n    ",
    "en": "\n      <h2>Toyo Cogged Drive Belt for Air Compressors</h2>\n      <p><strong>Premium Toyo Cogged Transmission Belt</strong> features an advanced raw-edge cogged profile manufactured from heat-resistant EPDM rubber reinforced with high-tensile aramid cords, completely preventing belt slippage and maximizing mechanical transmission efficiency.</p>\n      <h3>1. Key Performance Highlights</h3>\n      <ul>\n        <li><strong>High Power Efficiency</strong>: Cogged design provides superior grip on pulleys, saving 3-5% electrical energy.</li>\n        <li><strong>Extreme Temperature Tolerance</strong>: Reliably operates between -40°C and 120°C with exceptional oil resistance.</li>\n        <li><strong>Zero-Stretch Construction</strong>: High-modulus aramid cords eliminate elongation, reducing retensioning downtime.</li>\n      </ul>\n    "
  },
  "ket-giai-nhiet-dau-may-nen-khi-kobelco": {
    "zh": "\n      <h2>神钢 (Kobelco) 螺杆空压机油气一体板翅式铝制散热器</h2>\n      <p><strong>神钢 (Kobelco) 专用铝合金冷却器</strong>采用高效蜂窝板翅式热交换结构，具备极高导热系数与大通量散热面积。能在越南南部高温炎热环境下精准控制压缩机油温与排气温度，有效防止机器因高温跳闸停机。</p>\n      <h3>一、核心优势</h3>\n      <ul>\n        <li><strong>高效热交换</strong>：优质高导热铝合金材质，散热效能较传统管壳式冷却器提升 35% 以上。</li>\n        <li><strong>高承压安全设计</strong>：设计爆破压力达 3.0 MPa，工作压力 1.6 MPa，彻底防止高压油路渗漏。</li>\n        <li><strong>适用机型广泛</strong>：适配神钢 Kobelco SG / HM / VS 系列 15kW - 75kW 各型号螺杆空压机。</li>\n      </ul>\n    ",
    "en": "\n      <h2>Kobelco Screw Air Compressor Oil & Aftercooler Heat Exchanger</h2>\n      <p><strong>Kobelco OEM Aluminum Plate-Fin Cooler</strong> features a high-efficiency honeycomb heat exchanger core with exceptional thermal conductivity. It maintains optimal oil and discharge temperatures even under hot and humid tropical climates in Southern Vietnam, preventing high-temperature trip shutdowns.</p>\n      <h3>1. Key Features</h3>\n      <ul>\n        <li><strong>High Heat Transfer Rate</strong>: Premium aluminum alloy core increases cooling efficiency by over 35%.</li>\n        <li><strong>High Burst Pressure Rating</strong>: Tested withstand pressure of 3.0 MPa for safe 16 Bar continuous operation.</li>\n        <li><strong>Broad Compatibility</strong>: Designed for Kobelco SG / HM / VS series compressors (15kW - 75kW).</li>\n      </ul>\n    "
  },
  "phot-chan-dau-truc-khuynh-dau-nen-truc-vit": {
    "zh": "\n      <h2>螺杆空压机主机转子轴端耐高温双唇骨架油封 (PTFE)</h2>\n      <p><strong>螺杆机机头主轴专用骨架油封</strong>采用优质聚四氟乙烯 (PTFE/Teflon) 复合材料与不锈钢骨架制成。具备耐高温、耐高转速线速度与优异自润滑密封特性，彻底杜绝润滑油从轴端向外渗漏。</p>\n      <h3>一、产品特性</h3>\n      <ul>\n        <li><strong>极端耐温范围</strong>：-60°C 至 220°C，完全适应机头排气端高温工况。</li>\n        <li><strong>最高线速度达 30 m/s</strong>：耐磨耐摩擦，有效避免轴颈拉伤与密封失效。</li>\n        <li><strong>双唇密封结构</strong>：主唇阻挡润滑油泄漏，副唇阻隔外界灰尘杂质侵入。</li>\n      </ul>\n    ",
    "en": "\n      <h2>Air-End Shaft PTFE Double-Lip Oil Seal for Screw Compressors</h2>\n      <p><strong>Air-End Rotor Shaft Oil Seal</strong> is manufactured from high-performance PTFE (Teflon) composite reinforced with a stainless steel casing. It delivers extreme heat tolerance, high rotational speed capability, and positive sealing to eliminate oil leaks from the compressor air-end shaft.</p>\n      <h3>1. Technical Features</h3>\n      <ul>\n        <li><strong>Broad Temperature Range</strong>: -60°C to 220°C, perfectly handling air-end discharge heat.</li>\n        <li><strong>Linear Speeds up to 30 m/s</strong>: Low friction coefficient prevents shaft scoring and premature seal wear.</li>\n        <li><strong>Double-Lip Sealing</strong>: Primary lip retains lubricant while secondary lip blocks ambient dust and contaminants.</li>\n      </ul>\n    "
  },
  "thuoc-do-muc-dau-may-nen-khi-dang-thanh-thuy-tinh": {
    "zh": "\n      <h2>螺杆空压机油气分离桶铝合金耐压防爆玻璃管油位计</h2>\n      <p><strong>油气桶专用条形耐高温油位计</strong>安装于油气分离桶外壁，采用高硼硅防爆透明玻璃管与高强度防腐铝合金外壳。便于巡检工程师直观清晰观察桶内润滑油实际液位与油品颜色，防止因缺油造成机头咬死事故。</p>\n    ",
    "en": "\n      <h2>Borosilicate Sight Glass Oil Level Gauge for Separator Tanks</h2>\n      <p><strong>Industrial Oil Level Sight Gauge</strong> is mounted on the oil-air separator tank exterior, constructed from heavy-duty borosilicate sight glass within a corrosion-resistant aluminum frame. Allows operators to easily inspect real-time oil levels and fluid condition, preventing costly compressor air-end seizure due to oil starvation.</p>\n    "
  },
  "van-an-toan-xa-ap-khi-nen-ren-dong-10-bar": {
    "zh": "\n      <h2>黄铜螺纹自动泄压防爆安全阀 10 Bar (1.0 MPa)</h2>\n      <p><strong>全铜空压机安全阀 (Safety Relief Valve)</strong> 安装于油气桶或储气罐顶部。当系统内部气压因电气故障或阀门失灵超过 10 Bar 安全设定上限时，安全阀瞬间弹起起跳排气，杜绝压力容器超压开裂与爆炸事故。</p>\n    ",
    "en": "\n      <h2>Brass Safety Relief Valve 10 Bar (1.0 MPa)</h2>\n      <p><strong>Heavy-Duty Brass Air Compressor Safety Valve</strong> is installed on air receivers and separator tanks. Automatically releases compressed air when vessel pressure exceeds the calibrated 10 Bar threshold, preventing overpressure hazards and pressure vessel rupture.</p>\n    "
  },
  "dau-may-nen-khi-truc-vit-kobelco-chinh-hang": {
    "zh": "\n      <h2>原装神钢 (Kobelco) 螺杆式空压机全合成专用润滑油</h2>\n      <p><strong>神钢 (Kobelco Screw Super Oil / Super Extra Oil)</strong> 是专为神钢螺杆机研发的高品质全合成机油。使用寿命长达 3,000 - 4,000 运行小时，具有优异的抗高温氧化性、出色的润滑冷却效能以及极低的积碳油泥沉淀率。</p>\n    ",
    "en": "\n      <h2>Genuine Kobelco Synthetic Screw Air Compressor Oil</h2>\n      <p><strong>Kobelco Screw Super Extra Lubricant</strong> is formulated specifically for Kobelco rotary screw air compressors. Features an extended lifespan of 3,000 - 4,000 hours, outstanding thermal oxidation resistance, superior air-end cooling, and minimal varnish or sludge formation.</p>\n    "
  },
  "loc-dau-may-nen-khi-hitachi-cao-cap": {
    "zh": "\n      <h2>日立 (Hitachi) 螺杆空压机高品质旋装式机油滤清器</h2>\n      <p><strong>日立 (Hitachi) 空压机旋装机油滤芯</strong>能 100% 滤除润滑油在高温循环中产生的金属磨屑、微细杂质与胶质沉淀，确保进入机头转子轴承的机油纯净清澈，大幅降低机头机械磨损。</p>\n    ",
    "en": "\n      <h2>Hitachi Premium Spin-On Oil Filter for Screw Compressors</h2>\n      <p><strong>Hitachi High-Efficiency Oil Filter</strong> completely removes metallic particulates, carbon deposits, and contaminants from circulating lubricant before entering the screw air-end, effectively minimizing rotor and bearing wear.</p>\n    "
  },
  "loc-gio-may-nen-khi-kobelco-chinh-hang": {
    "zh": "\n      <h2>原装神钢 (Kobelco) 螺杆空压机进气空气滤芯</h2>\n      <p><strong>神钢 (Kobelco) 进气空气滤清器</strong>采用进口高密度木浆微纤维滤纸，过滤效率高达 99.9%，有效拦截车间粉尘、颗粒与砂尘进入主机压缩腔，保护螺杆转子精密度。</p>\n    ",
    "en": "\n      <h2>Genuine Kobelco Air Intake Filter for Screw Compressors</h2>\n      <p><strong>Kobelco Heavy-Duty Air Filter</strong> utilizes high-density microfiber filtration media with a 99.9% dust capture efficiency, protecting the screw rotors and internal chambers from industrial airborne dust.</p>\n    "
  },
  "loc-tach-dau-kobelco-chinh-hang": {
    "zh": "\n      <h2>原装神钢 (Kobelco) 空压机油气分离芯 (Air/Oil Separator)</h2>\n      <p><strong>神钢 (Kobelco) 高效油气分离芯</strong>采用多层超细玻纤滤材，将压缩空气中的微细油雾颗粒彻底分离凝结，使排气含油量降至 2 ppm 以下，压降低、寿命长达 3,000 - 4,000 小时。</p>\n    ",
    "en": "\n      <h2>Genuine Kobelco Air-Oil Separator Element</h2>\n      <p><strong>Kobelco High-Efficiency Air-Oil Separator</strong> uses multi-layer borosilicate microfiber to thoroughly coalesce oil aerosols, keeping residual air oil content below 2 ppm while maintaining low differential pressure for 3,000 - 4,000 operating hours.</p>\n    "
  },
  "van-dien-tu-may-nen-khi-chinh-hang-smc": {
    "zh": "\n      <h2>日本 SMC 原装工业级空压机电磁阀 (Solenoid Valve)</h2>\n      <p><strong>SMC 气动先导电磁阀</strong>响应极其灵敏迅速，机械动作寿命达 1000 万次以上。广泛应用于空压机进气阀加载/卸载控制、自动排污阀及放空减压回路控制。</p>\n    ",
    "en": "\n      <h2>Genuine SMC Solenoid Valve for Air Compressors</h2>\n      <p><strong>SMC High-Reliability Pneumatic Solenoid Valve</strong> offers ultra-fast response and an exceptional mechanical lifespan exceeding 10 million cycles. Ideal for intake valve loading/unloading and condensate drain actuation.</p>\n    "
  },
  "loc-dau-may-nen-khi-kobelco-cao-cap": {
    "zh": "\n      <h2>神钢 (Kobelco) 螺杆空压机高品质机油滤芯</h2>\n      <p><strong>神钢专用机油滤清器</strong>能精准拦截润滑油回路中的各类杂质与油泥颗粒，保障进入螺杆阴阳转子及重载轴承的润滑油始终纯净，确保空压机稳定运行。</p>\n    ",
    "en": "\n      <h2>Kobelco Premium Oil Filter for Rotary Screw Compressors</h2>\n      <p><strong>Kobelco OEM Oil Filter</strong> captures debris and organic sludge from high-temperature lubricant circulation, ensuring pure oil delivery to rotors and bearings for prolonged compressor life.</p>\n    "
  }
};


export function translateHtmlDescription(html: string, locale: string): string {
  if (!html || locale === 'vi') return html;

  const isZh = locale === 'zh';
  const isEn = locale === 'en';

  let result = html;

  if (isZh) {
    // 1. Headings & Main Titles
    result = result
      .replace(/VAN CỔ HÚT[^:<]*:[^<]*/gi, '螺杆式空压机进气控制阀（进气蝶阀）：技术参数、结构选型与技术解析')
      .replace(/VAN ĐIỀU ÁP[^:<]*:[^<]*/gi, '气动精密调压减压阀：技术规格、工作原理与选型指南')
      .replace(/VAN AN TOÀN[^:<]*:[^<]*/gi, '空压机安全阀：工作原理、跳动压力设定与特种设备检验标准')
      .replace(/LỌC TÁCH DẦU[^:<]*:[^<]*/gi, '螺杆机油气分离滤芯：工作机理、更换判断依据与维护保养指南')
      .replace(/LỌC GIÓ[^:<]*:[^<]*/gi, '空压机进气空气滤清器：粉尘过滤效率与主机转子防磨损保护')
      .replace(/LỌC DẦU[^:<]*:[^<]*/gi, '旋装式机油滤清器：金属磨屑滤除与润滑油路深度净化')
      .replace(/DẦU MÁY NÉN KHÍ[^:<]*:[^<]*/gi, '螺杆式空压机专用合成润滑油：运动粘度、抗氧化寿命与冷却特性')
      .replace(/I\.\s*3 CÔNG NĂNG VẬN HÀNH[^<]*/gi, '一、 进气控制阀的三大核心运行功能')
      .replace(/II\.\s*PHÂN LOẠI[^<]*/gi, '二、 常用空压机进气控制阀结构分类选型')
      .replace(/1\.\s*Điều tiết hai chế độ chạy có tải \(Load\) và không tải \(Unload\)/gi, '1. 精准调节机组加载 (Load) 与卸载 (Unload) 双运行模式')
      .replace(/2\.\s*Chặn đứng dầu đầu nén trào ngược khi dừng máy/gi, '2. 停机时彻底阻止机头高温润滑油倒灌喷出')
      .replace(/3\.\s*Hỗ trợ khởi động nhẹ tải bảo vệ động cơ chính/gi, '3. 轻载辅助启动，有效降低冲击并保护主电机')
      .replace(/1\.\s*Giảm áp suất khí nén đầu vào/gi, '1. 降低高压输入端气源压力')
      .replace(/2\.\s*Ổn định áp suất làm việc đầu ra/gi, '2. 恒定输出端工作气压，消除气压波动')
      .replace(/3\.\s*Bảo vệ thiết bị cơ học hạ nguồn/gi, '3. 保护下游精密气动机械与管路系统');

    // 2. Full Paragraphs - Intake Valve & Common Descriptions
    result = result
      .replace(/\(còn gọi là van hút[^)]*\)[^<]*cho động cơ\./gi, '（又称进气阀、加卸载控制阀或进气减荷阀 – Intake Valve / Unloader Valve）是直接装配于螺杆空压机主机头顶部进气法兰口的大型核心气动控制总成。该阀根据主控电脑板发出的加载 (Load) 或卸载 (Unload) 信号，全自动调节吸入主机腔的空气流量，从而实现工况智能切换，最大限度提升运行能效并节约工厂用电成本。')
      .replace(/Khi máy chạy có tải \(Load\)[^<]*của nhà máy\./gi, '当空压机处于加载 (Load) 状态时，阀芯在气控信号驱动下完全打开，外界空气顺畅进入螺杆腔被高速压缩；当储气罐气压达到预设上限时，进气阀迅速严密闭合，彻底切断外部进气。此时机头进入空载运转 (Unload) 状态，不产生压缩空气，电机电流大幅下降，显著降低车间待机电耗。')
      .replace(/Khi dừng máy[^<]*khoang máy\./gi, '当空压机紧急停机或断电时，油气分离桶内的巨大残余压力会驱使高温润滑油从机头进气口迅速倒灌。进气控制阀内置的高灵敏单向止回阀瓣在逆流瞬间极速拍死关闭，彻底阻断润滑油逆流，避免空气滤芯浸油报废并保护设备内腔清洁。')
      .replace(/Khi máy nén khí[^<]*nhà xưởng\./gi, '在机组星三角或变频启动阶段，进气阀始终保持全封闭状态。机头无需承受压缩负载，极大地减小了电机的启动阻力矩，防止启动电流 (Ampe) 骤升造成工厂电网电压闪变或空开跳闸。')
      .replace(/\(còn gọi là van giảm áp[^)]*\)[^<]*đầu vào\./gi, '（又称气动减压阀或压力调节器 – Regulator）是安装于工厂支线气路及各类气动自动化设备进气端的关键控制元件。其核心作用是将主管路送来的高压、波动的压缩空气降压至设备所需的精准工作压力，并在气源压力或用气流量波动时持续维持输出气压恒定。')
      .replace(/Khí nén tạo ra từ máy nén khí[^<]*chính xác\./gi, '螺杆空压机产生的压缩空气在主管路中通常保持在 8 Bar – 10 Bar 的较高压力以提高远距离输送效率。然而，车间末端气缸、电磁阀及气动工具的最佳额定工作气压通常仅为 4 Bar – 6 Bar。调压阀能精确平稳降压，杜绝过压损耗。')
      .replace(/Khi các máy sấy khí[^<]*cài đặt\./gi, '当车间其他工段突发大量用气或冷干机自动排水时，主管路气压会出现频繁剧烈波动。调压阀内部的高精度膜片与弹簧动态平衡机构能瞬时补偿流量变化，确保终端用气设备气压稳定无波动。')
      .replace(/Quá áp suất làm việc[^<]*nhà máy\./gi, '超出额定压力是造成气动软管爆裂、气缸活塞密封圈拉伤以及电磁阀线圈过载烧毁的首要原因。调压阀作为关键安全屏障，为企业昂贵的自动化生产线提供可靠防护。');

    // 3. Bullet points and specific models
    result = result
      .replace(/Van cổ hút kiểu piston[^:]*:/gi, '活塞气缸驱动式进气阀 (Piston Actuated Valve)：')
      .replace(/Dòng van sử dụng một piston[^<]*GA series\./gi, '该类型在阀体侧边集成气动控制活塞，通过微型电磁阀控制气路通断来推动主阀盘启闭。动作迅速可靠，广泛应用于神钢 (Kobelco)、阿特拉斯 (Atlas Copco GA 系列) 等知名机型。')
      .replace(/Van cổ hút kiểu màng cao su[^:]*:/gi, '橡胶膜片式进气阀 (Diaphragm-type Intake Valve)：')
      .replace(/Cơ cấu đóng mở bằng màng cao su[^<]*Rotorcomp\./gi, '采用耐压耐油橡胶膜片作为动作执行元件，结构简洁、灵敏度高，依靠真空吸力与控制气压协调动作。广泛应用于复盛 (Fusheng)、罗德康普 (Rotorcomp) 等螺杆机头。')
      .replace(/Van cổ hút kiểu cánh bướm xoay[^:]*:/gi, '旋转蝶阀式进气阀 (Butterfly Intake Valve)：')
      .replace(/Sử dụng một cánh van dạng bướm[^<]*nạp khí nhiều\./gi, '采用可在 0° - 90° 范围内旋转的蝶形阀板，连动气动弹簧执行机构。通径大、进气阻力极小，主要装配于 75kW (100HP) 以上大功率重载螺杆空压机。');

    // 4. Cleanup remaining Vietnamese keywords
    result = result
      .replace(/Van cổ hút/gi, '进气控制阀')
      .replace(/van hút/gi, '进气阀')
      .replace(/van cửa nạp/gi, '进气阀')
      .replace(/van không tải/gi, '卸载阀')
      .replace(/máy nén khí trục vít/gi, '螺杆式空压机')
      .replace(/máy nén khí/gi, '空压机')
      .replace(/khí nén/gi, '压缩空气')
      .replace(/đầu nén/gi, '主机机头')
      .replace(/bình tách dầu/gi, '油气分离桶')
      .replace(/bầu lọc gió/gi, '空气滤清器')
      .replace(/áp suất/gi, '气压')
      .replace(/van điện từ/gi, '电磁阀')
      .replace(/xi lanh/gi, '气缸')
      .replace(/động cơ/gi, '电机')
      .replace(/nhà xưởng/gi, '车间厂房')
      .replace(/nhà máy/gi, '工厂');
  } else if (isEn) {
    // 1. Headings & Main Titles
    result = result
      .replace(/VAN CỔ HÚT[^:<]*:[^<]*/gi, 'Rotary Screw Air Compressor Intake Valve: Specifications, Sizing & Technical Guide')
      .replace(/VAN ĐIỀU ÁP[^:<]*:[^<]*/gi, 'Pneumatic Pressure Regulating Valves: Specifications, Working Principles & Selection Guide')
      .replace(/VAN AN TOÀN[^:<]*:[^<]*/gi, 'Air Compressor Safety Relief Valves: Working Principles, Set Pressure & Calibration Standards')
      .replace(/LỌC TÁCH DẦU[^:<]*:[^<]*/gi, 'Air-Oil Separator Elements: Working Mechanism, Replacement Indicators & Maintenance')
      .replace(/LỌC GIÓ[^:<]*:[^<]*/gi, 'Air Compressor Intake Filters: Dust Filtration Efficiency & Rotor Protection')
      .replace(/LỌC DẦU[^:<]*:[^<]*/gi, 'Spin-On Oil Filters: Metallic Debris Removal & Lubricant Purification')
      .replace(/DẦU MÁY NÉN KHÍ[^:<]*:[^<]*/gi, 'Synthetic Rotary Screw Compressor Lubricants: Viscosity, Thermal Life & Cooling Properties')
      .replace(/I\.\s*3 CÔNG NĂNG VẬN HÀNH[^<]*/gi, 'I. 3 Core Operational Functions of Air Intake Valves')
      .replace(/II\.\s*PHÂN LOẠI[^<]*/gi, 'II. Classification & Types of Compressor Intake Valves')
      .replace(/1\.\s*Điều tiết hai chế độ chạy có tải \(Load\) và không tải \(Unload\)/gi, '1. Regulating Load and Unload Operating Modes')
      .replace(/2\.\s*Chặn đứng dầu đầu nén trào ngược khi dừng máy/gi, '2. Preventing Oil Backflow When Stopping Compressor')
      .replace(/3\.\s*Hỗ trợ khởi động nhẹ tải bảo vệ động cơ chính/gi, '3. Supporting Light-Load Start to Protect Main Motor')
      .replace(/1\.\s*Giảm áp suất khí nén đầu vào/gi, '1. Reducing Inlet Supply Pressure')
      .replace(/2\.\s*Ổn định áp suất làm việc đầu ra/gi, '2. Stabilizing Output Working Pressure')
      .replace(/3\.\s*Bảo vệ thiết bị cơ học hạ nguồn/gi, '3. Protecting Downstream Mechanical Equipment');

    // 2. Full Paragraphs
    result = result
      .replace(/\(còn gọi là van hút[^)]*\)[^<]*cho động cơ\./gi, '(also referred to as unloader valve, intake regulator, or suction valve) is a critical mechanical assembly mounted directly onto the top air inlet flange of the rotary screw air-end. It automatically regulates the volume of ambient air drawn into the compression chamber according to Load / Unload electrical signals from the main PLC controller, optimizing energy efficiency and reducing factory electrical bills.')
      .replace(/Khi máy chạy có tải \(Load\)[^<]*của nhà máy\./gi, 'When operating in Load mode, the valve opens completely to let ambient air flow into the screw rotors for compression. When system pressure reaches the preset maximum limit, the intake valve seals tightly shut upon receiving pilot air signals, blocking intake air flow. The air-end then enters Unload idle mode without generating pressure, drastically reducing motor amperage and power consumption.')
      .replace(/Khi dừng máy[^<]*khoang máy\./gi, 'When the air compressor shuts down unexpectedly or loses power, massive differential pressure in the separator tank tends to force hot oil mist backward toward the inlet. The intake valve features an integrated spring-loaded check valve that instantly snaps shut, blocking reverse oil flow and protecting the air intake filter from oil contamination.')
      .replace(/Khi máy nén khí[^<]*nhà xưởng\./gi, 'During initial star-delta or VFD motor startup, the intake valve remains completely closed. Because the rotors do not compress air immediately, motor starting resistance torque is minimized, preventing dangerous startup current surges from tripping main circuit breakers.')
      .replace(/\(còn gọi là van giảm áp[^)]*\)[^<]*đầu vào\./gi, '(also known as an air pressure regulator or pressure reducing valve) is a vital control device installed at the inlet of pneumatic machinery and branch distribution lines. It reduces high, fluctuating main supply pressure down to a safe, constant operating level suitable for sensitive downstream equipment.')
      .replace(/Khí nén tạo ra từ máy nén khí[^<]*chính xác\./gi, 'Compressed air from screw compressors is typically maintained at 8 - 10 Bar for efficient long-distance piping distribution. However, downstream actuators, solenoid valves, and pneumatic tools operate best at 4 - 6 Bar. Regulators accurately reduce and stabilize this pressure.')
      .replace(/Khi các máy sấy khí[^<]*cài đặt\./gi, 'When demand surges or automatic drains open, mainline air pressure fluctuates violently. The regulator’s spring-diaphragm mechanism instantly compensates for pressure drops, keeping downstream pressure stable.')
      .replace(/Quá áp suất làm việc[^<]*nhà máy\./gi, 'Excessive operating pressure is the leading cause of burst air hoses, torn cylinder seals, and burnt solenoid coils. Pressure regulators provide essential overpressure protection for expensive factory automation equipment.');

    // 3. Bullet points
    result = result
      .replace(/Van cổ hút kiểu piston[^:]*:/gi, 'Piston-Actuated Intake Valve:')
      .replace(/Dòng van sử dụng một piston[^<]*GA series\./gi, 'Utilizes an integrated pneumatic piston actuator on the valve body to open the main disc via solenoid pilot air. Offers high speed and reliability, widely found on Kobelco and Atlas Copco GA series.')
      .replace(/Van cổ hút kiểu màng cao su[^:]*:/gi, 'Diaphragm-Type Intake Valve:')
      .replace(/Cơ cấu đóng mở bằng màng cao su[^<]*Rotorcomp\./gi, 'Features an oil-resistant elastic rubber diaphragm for opening and closing based on vacuum and pilot control pressure. Simple, responsive, and commonly used on Fusheng and Rotorcomp air-ends.')
      .replace(/Van cổ hút kiểu cánh bướm xoay[^:]*:/gi, 'Butterfly Rotary Intake Valve:')
      .replace(/Sử dụng một cánh van dạng bướm[^<]*nạp khí nhiều\./gi, 'Employs a 90-degree rotating butterfly disc linked to a spring-return pneumatic actuator. Features large flow area and minimal intake resistance, ideal for heavy-duty compressors over 75kW (100HP).');

    // 4. Cleanup remaining Vietnamese keywords
    result = result
      .replace(/Van cổ hút/gi, 'Air intake valve')
      .replace(/máy nén khí trục vít/gi, 'screw air compressor')
      .replace(/máy nén khí/gi, 'air compressor')
      .replace(/khí nén/gi, 'compressed air')
      .replace(/đầu nén/gi, 'air-end')
      .replace(/bình tách dầu/gi, 'separator tank');
  }

  return result;
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

  let finalDescription = '';
  if (productDescriptionMap[product.slug]) {
    finalDescription = isZh ? productDescriptionMap[product.slug].zh : productDescriptionMap[product.slug].en;
  } else if (product.description) {
    finalDescription = translateHtmlDescription(product.description, locale);
  }

  if (!finalDescription) {
    finalDescription = isEn 
      ? `Genuine ${autoTitle} OEM replacement parts distributed by Khai Nguyen across industrial parks in Dong Nai, Binh Duong, and Southern Vietnam.`
      : `凯源机械正品直销 ${autoTitle} 原厂配件，为同奈及南部各工业区提供 2 小时现货送达与专业技术支持。`;
  }

  return {
    ...product,
    title: autoTitle,
    description: finalDescription,
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
