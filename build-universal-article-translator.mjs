import fs from 'fs';

// Let's create the comprehensive article translation dictionary mapping
const articlePhrasesZh = [
  // Titles & Section Headings
  ['VAN CỔ HÚT MÁY NÉN KHÍ: THÔNG SỐ, PHÂN LOẠI & HỎI ĐÁP KỸ THUẬT', '螺杆式空压机进气控制阀（进气蝶阀）：技术参数、结构选型与技术解析'],
  ['VAN CỔ HÚT 螺杆式空压机: THÔNG SỐ, PHÂN LOẠI & HỎI ĐÁP KỸ THUẬT', '螺杆式空压机进气控制阀（进气蝶阀）：技术参数、结构选型与技术解析'],
  ['VAN CỔ HÚT KHÍ NÉN: THÔNG SỐ, PHÂN LOẠI & HỎI ĐÁP KỸ THUẬT', '螺杆式空压机进气控制阀（进气蝶阀）：技术参数、结构选型与技术解析'],
  ['VAN ĐIỀU ÁP KHÍ NÉN: THÔNG SỐ, PHÂN LOẠI & HỎI ĐÁP KỸ THUẬT', '气动精密调压减压阀：技术规格、工作原理与选型指南'],
  ['VAN AN TOÀN MÁY NÉN KHÍ: NGUYÊN LÝ, CÀI ĐẶT & KIỂM ĐỊNH', '空压机安全阀：工作原理、跳动压力设定与特种设备检验标准'],
  ['LỌC TÁCH DẦU KHÍ NÉN: NGUYÊN LÝ, DẤU HIỆU THAY THẾ & BẢO DƯỠNG', '螺杆机油气分离滤芯：工作机理、更换判断依据与维护保养指南'],
  ['LỌC GIÓ MÁY NÉN KHÍ: HIỆU SUẤT LỌC BỤI & BẢO VỆ ĐẦU NÉN', '空压机进气空气滤清器：粉尘过滤效率与主机转子防磨损保护'],
  ['LỌC DẦU MÁY NÉN KHÍ: LOẠI BỎ MẠT KIM LOẠI & KÉO DÀI TUỔI THỌ', '旋装式机油滤清器：金属磨屑滤除与润滑油路深度净化'],
  ['DẦU MÁY NÉN KHÍ TRỤC VÍT: ĐỘ NHỚT, TUỔI THỌ & ĐẶC TÍNH BÔI TRƠN', '螺杆式空压机专用合成润滑油：运动粘度、抗氧化寿命与冷却特性'],

  // Subheadings
  ['I. 3 CÔNG NĂNG VẬN HÀNH CỐT LÕI CỦA VAN CỔ HÚT', '一、 进气控制阀的三大核心运行功能'],
  ['I. 3 CÔNG NĂNG VẬN HÀNH CỦA VAN ĐIỀU ÁP KHÍ NÉN', '一、 气动调压阀的三大核心运行功能'],
  ['1. Điều tiết hai chế độ chạy có tải (Load) và không tải (Unload)', '1. 精准调节机组加载 (Load) 与卸载 (Unload) 双运行模式'],
  ['2. Chặn đứng dầu đầu nén trào ngược khi dừng máy', '2. 停机时彻底阻止机头高温润滑油倒灌喷出'],
  ['3. Hỗ trợ khởi động nhẹ tải bảo vệ động cơ chính', '3. 轻载辅助启动，有效降低冲击并保护主电机'],
  ['1. Giảm áp suất khí nén đầu vào', '1. 降低高压输入端气源压力'],
  ['2. Ổn định áp suất làm việc đầu ra', '2. 恒定输出端工作气压，消除气压波动'],
  ['3. Bảo vệ thiết bị cơ học hạ nguồn', '3. 保护下游精密气动机械与管路系统'],
  ['II. PHÂN LOẠI VAN CỔ HÚT MÁY NÉN KHÍ', '二、 常用空压机进气控制阀结构分类选型'],
  ['II. PHÂN LOẠI VAN CỔ HÚT 螺杆式空压机', '二、 常用空压机进气控制阀结构分类选型'],
  ['II. PHÂN LOẠI VAN ĐIỀU ÁP KHÍ NÉN PHỔ BIẾN', '二、 常用气动调压阀结构分类选型'],

  // Paragraphs - Intake Valve
  ['(còn gọi là van hút, van cửa nạp hoặc van không tải – Intake Valve / Unloader Valve) là cụm van cơ khí lớn được lắp trực tiếp tại cổng hút phía trên cùng của đầu nén trục vít. Thiết bị thực hiện nhiệm vụ điều tiết toàn bộ lưu lượng không khí đi vào buồng nén theo tín hiệu điều khiển có tải (Load) hoặc không tải (Unload) từ bảng điều khiển chính, giúp tối ưu hóa hiệu suất làm việc và tiết kiệm điện năng tiêu thụ cho động cơ.', '（又称进气阀、加卸载控制阀或进气减荷阀 – Intake Valve / Unloader Valve）是直接装配于螺杆空压机主机头顶部进气法兰口的大型核心气动控制总成。该阀根据主控电脑板发出的加载 (Load) 或卸载 (Unload) 信号，全自动调节吸入主机腔的空气流量，从而实现工况智能切换，最大限度提升运行能效并节约工厂用电成本。'],
  ['Khi máy chạy có tải (Load), van mở rộng hoàn toàn cho khí nén đi vào đầu nén để ép khí. Khi bình khí đạt áp suất cài đặt tối đa, van cổ hút nhận tín hiệu áp khiển để đóng kín khít lại, chặn đứng dòng không khí nạp. Lúc này đầu nén chạy không tải (Unload), máy nén khí chạy không sinh áp để giảm tải dòng điện và giảm tiêu hao năng lượng điện của nhà máy.', '当空压机处于加载 (Load) 状态时，阀芯在气控信号驱动下完全打开，外界空气顺畅进入螺杆腔被高速压缩；当储气罐气压达到预设上限时，进气阀迅速严密闭合，彻底切断外部进气。此时机头进入空载运转 (Unload) 状态，不产生压缩空气，电机电流大幅下降，显著降低车间待机电耗。'],
  ['Khi dừng máy nén khí đột ngột, chênh lệch áp suất cực lớn trong bình tách dầu có xu hướng đẩy hỗn hợp dầu máy nén khí nóng phun trào ngược lên cửa hút đầu nén ra ngoài bầu lọc gió. Van cổ hút tích hợp lò xo lá một chiều đóng sập ngay lập tức để chặn đứng lượng dầu trào này, ngăn ngừa hư hỏng bầu lọc gió và tránh bẩn khoang máy.', '当空压机紧急停机或断电时，油气分离桶内的巨大残余压力会驱使高温润滑油从机头进气口迅速倒灌。进气控制阀内置的高灵敏单向止回阀瓣在逆流瞬间极速拍死关闭，彻底阻断润滑油逆流，避免空气滤芯浸油报废并保护设备内腔清洁。'],
  ['Khi máy nén khí trục vít khởi động, van cổ hút luôn ở trạng thái đóng hoàn toàn. Lúc này, đầu nén không phải nén khí ngay lập tức, giảm thiểu tối đa momen cản của động cơ, hạn chế dòng điện khởi động (Ampe) tăng vọt đột ngột gây sụt áp hoặc quá tải nguồn điện lưới nhà xưởng.', '在机组星三角或变频启动阶段，进气阀始终保持全封闭状态。机头无需承受压缩负载，极大地减小了电机的启动阻力矩，防止启动电流 (Ampe) 骤升造成工厂电网电压闪变或空开跳闸。'],

  // Intake Valve Bullet points
  ['Van cổ hút kiểu piston khí nén (Piston Actuated Valve):', '活塞气缸驱动式进气阀 (Piston Actuated Valve)：'],
  ['Dòng van sử dụng một piston xi lanh khí nén tích hợp bên sườn thân van để mở đĩa van chính. Hoạt động nhờ sự cấp khí điều khiển từ van điện từ solenoid nhỏ. Thường thấy ở các hãng lớn như Kobelco, Atlas Copco GA series.', '该类型在阀体侧边集成气动控制活塞，通过微型电磁阀控制气路通断来推动主阀盘启闭。动作迅速可靠，广泛应用于神钢 (Kobelco)、阿特拉斯 (Atlas Copco GA 系列) 等知名机型。'],
  ['Van cổ hút kiểu màng cao su (Diaphragm-type Intake Valve):', '橡胶膜片式进气阀 (Diaphragm-type Intake Valve)：'],
  ['Cơ cấu đóng mở bằng màng cao su co giãn chịu áp. Thiết kế đơn giản, đóng mở nhạy dựa vào lực hút chân không và áp khiển điều hướng. Phổ biến trên các dòng đầu nén của Fusheng hay Rotorcomp.', '采用耐压耐油橡胶膜片作为动作执行元件，结构简洁、灵敏度高，依靠真空吸力与控制气压协调动作。广泛应用于复盛 (Fusheng)、罗德康普 (Rotorcomp) 等螺杆机头。'],
  ['Van cổ hút kiểu cánh bướm xoay (Butterfly Intake Valve):', '旋转蝶阀式进气阀 (Butterfly Intake Valve)：'],
  ['Sử dụng một cánh van dạng bướm xoay góc 90 độ nối với cơ cấu lò xo điều áp khí nén. Dòng van này có tiết diện mở tối đa rất lớn, thường lắp đặt trên các dòng máy nén khí trục vít công suất lớn (trên 75kW) để nạp khí nhiều.', '采用可在 0° - 90° 范围内旋转的蝶形阀板，连动气动弹簧执行机构。通径大、进气阻力极小，主要装配于 75kW (100HP) 以上大功率重载螺杆空压机。'],

  // Pressure regulator phrases
  ['(còn gọi là van giảm áp khí nén hoặc bộ điều chỉnh áp suất – Regulator) là thiết bị quan trọng được lắp đặt tại đầu vào của các thiết bị máy móc, đường ống nhánh sử dụng khí nén. Thiết bị thực hiện nhiệm vụ giảm áp suất từ nguồn cấp khí nén chính (áp suất cao, không ổn định) xuống mức áp suất làm việc nhỏ hơn phù hợp với thông số của máy móc, đồng thời giữ vững mức áp suất này luôn ổn định bất chấp mọi dao động áp suất phía đầu vào.', '（又称气动减压阀或压力调节器 – Regulator）是安装于工厂支线气路及各类气动自动化设备进气端的关键控制元件。其核心作用是将主管路送来的高压、波动的压缩空气降压至设备所需的精准工作压力，并在气源压力或用气流量波动时持续维持输出气压恒定。'],
  ['Khí nén tạo ra từ máy nén khí trục vít thường được duy trì ở áp suất rất cao từ 8 Bar – 10 Bar để tối ưu hiệu quả truyền tải đường ống. Tuy nhiên, các thiết bị cơ cấu như van điện từ, xi lanh hoặc bộ lọc tinh ở hạ nguồn chỉ vận hành tốt nhất ở mức 4 Bar – 6 Bar. Van điều áp giúp giảm và giới hạn áp suất này một cách chính xác.', '螺杆空压机产生的压缩空气在主管路中通常保持在 8 Bar – 10 Bar 的较高压力以提高远距离输送效率。然而，车间末端气缸、电磁阀及气动工具的最佳额定工作气压通常仅为 4 Bar – 6 Bar。调压阀能精确平稳降压，杜绝过压损耗。'],
  ['Khi các máy sấy khí xả nước, hoặc khi các phân xưởng khác tiêu thụ khí nén lớn đột biến, áp suất đường ống chính sẽ trồi sụt liên tục. Van điều áp sử dụng cơ cấu màng cao su co giãn tự động điều chỉnh lưu lượng nạp để đảm bảo áp suất đầu ra cấp cho thiết bị luôn cố định ở giá trị cài đặt.', '当车间其他工段突发大量用气或冷干机自动排水时，主管路气压会出现频繁剧烈波动。调压阀内部的高精度膜片与弹簧动态平衡机构能瞬时补偿流量变化，确保终端用气设备气压稳定无波动。'],
  ['Quá áp suất làm việc định mức là nguyên nhân hàng đầu gây nứt vỡ đường ống dẫn khí, rách gioăng phớt của piston xi lanh và cháy nổ cuộn coil van điện từ điều khiển. Van điều áp đóng vai trò là chốt bảo vệ an toàn tối đa cho hệ thống thiết bị đắt tiền của nhà máy.', '超出额定压力是造成气动软管爆裂、气缸活塞密封圈拉伤以及电磁阀线圈过载烧毁的首要原因。调压阀作为关键安全屏障，为企业昂贵的自动化生产线提供可靠防护。']
];

const articlePhrasesEn = [
  // Titles & Section Headings
  ['VAN CỔ HÚT MÁY NÉN KHÍ: THÔNG SỐ, PHÂN LOẠI & HỎI ĐÁP KỸ THUẬT', 'Rotary Screw Air Compressor Intake Valve: Specifications, Sizing & Technical Guide'],
  ['VAN CỔ HÚT 螺杆式空压机: THÔNG SỐ, PHÂN LOẠI & HỎI ĐÁP KỸ THUẬT', 'Rotary Screw Air Compressor Intake Valve: Specifications, Sizing & Technical Guide'],
  ['VAN CỔ HÚT KHÍ NÉN: THÔNG SỐ, PHÂN LOẠI & HỎI ĐÁP KỸ THUẬT', 'Rotary Screw Air Compressor Intake Valve: Specifications, Sizing & Technical Guide'],
  ['VAN ĐIỀU ÁP KHÍ NÉN: THÔNG SỐ, PHÂN LOẠI & HỎI ĐÁP KỸ THUẬT', 'Pneumatic Pressure Regulating Valves: Specifications, Working Principles & Selection Guide'],
  ['VAN AN TOÀN MÁY NÉN KHÍ: NGUYÊN LÝ, CÀI ĐẶT & KIỂM ĐỊNH', 'Air Compressor Safety Relief Valves: Working Principles, Set Pressure & Calibration Standards'],
  ['LỌC TÁCH DẦU KHÍ NÉN: NGUYÊN LÝ, DẤU HIỆU THAY THẾ & BẢO DƯỠNG', 'Air-Oil Separator Elements: Working Mechanism, Replacement Indicators & Maintenance'],
  ['LỌC GIÓ MÁY NÉN KHÍ: HIỆU SUẤT LỌC BỤI & BẢO VỆ ĐẦU NÉN', 'Air Compressor Intake Filters: Dust Filtration Efficiency & Rotor Protection'],
  ['LỌC DẦU MÁY NÉN KHÍ: LOẠI BỎ MẠT KIM LOẠI & KÉO DÀI TUỔI THỌ', 'Spin-On Oil Filters: Metallic Debris Removal & Lubricant Purification'],
  ['DẦU MÁY NÉN KHÍ TRỤC VÍT: ĐỘ NHỚT, TUỔI THỌ & ĐẶC TÍNH BÔI TRƠN', 'Synthetic Rotary Screw Compressor Lubricants: Viscosity, Thermal Life & Cooling Properties'],

  // Subheadings
  ['I. 3 CÔNG NĂNG VẬN HÀNH CỐT LÕI CỦA VAN CỔ HÚT', 'I. 3 Core Operational Functions of Air Intake Valves'],
  ['I. 3 CÔNG NĂNG VẬN HÀNH CỦA VAN ĐIỀU ÁP KHÍ NÉN', 'I. 3 Core Operational Functions of Pneumatic Regulators'],
  ['1. Điều tiết hai chế độ chạy có tải (Load) và không tải (Unload)', '1. Regulating Load and Unload Operating Modes'],
  ['2. Chặn đứng dầu đầu nén trào ngược khi dừng máy', '2. Preventing Oil Backflow When Stopping Compressor'],
  ['3. Hỗ trợ khởi động nhẹ tải bảo vệ động cơ chính', '3. Supporting Light-Load Start to Protect Main Motor'],
  ['1. Giảm áp suất khí nén đầu vào', '1. Reducing Inlet Supply Pressure'],
  ['2. Ổn định áp suất làm việc đầu ra', '2. Stabilizing Output Working Pressure'],
  ['3. Bảo vệ thiết bị cơ học hạ nguồn', '3. Protecting Downstream Mechanical Equipment'],
  ['II. PHÂN LOẠI VAN CỔ HÚT MÁY NÉN KHÍ', 'II. Classification & Types of Compressor Intake Valves'],
  ['II. PHÂN LOẠI VAN CỔ HÚT 螺杆式空压机', 'II. Classification & Types of Compressor Intake Valves'],
  ['II. PHÂN LOẠI VAN ĐIỀU ÁP KHÍ NÉN PHỔ BIẾN', 'II. Common Types of Pneumatic Pressure Regulators'],

  // Paragraphs - Intake Valve
  ['(còn gọi là van hút, van cửa nạp hoặc van không tải – Intake Valve / Unloader Valve) là cụm van cơ khí lớn được lắp trực tiếp tại cổng hút phía trên cùng của đầu nén trục vít. Thiết bị thực hiện nhiệm vụ điều tiết toàn bộ lưu lượng không khí đi vào buồng nén theo tín hiệu điều khiển có tải (Load) hoặc không tải (Unload) từ bảng điều khiển chính, giúp tối ưu hóa hiệu suất làm việc và tiết kiệm điện năng tiêu thụ cho động cơ.', '(also referred to as unloader valve, intake regulator, or suction valve) is a critical mechanical assembly mounted directly onto the top air inlet flange of the rotary screw air-end. It automatically regulates the volume of ambient air drawn into the compression chamber according to Load / Unload electrical signals from the main PLC controller, optimizing energy efficiency and reducing factory electrical bills.'],
  ['Khi máy chạy có tải (Load), van mở rộng hoàn toàn cho khí nén đi vào đầu nén để ép khí. Khi bình khí đạt áp suất cài đặt tối đa, van cổ hút nhận tín hiệu áp khiển để đóng kín khít lại, chặn đứng dòng không khí nạp. Lúc này đầu nén chạy không tải (Unload), máy nén khí chạy không sinh áp để giảm tải dòng điện và giảm tiêu hao năng lượng điện của nhà máy.', 'When operating in Load mode, the valve opens completely to let ambient air flow into the screw rotors for compression. When system pressure reaches the preset maximum limit, the intake valve seals tightly shut upon receiving pilot air signals, blocking intake air flow. The air-end then enters Unload idle mode without generating pressure, drastically reducing motor amperage and power consumption.'],
  ['Khi dừng máy nén khí đột ngột, chênh lệch áp suất cực lớn trong bình tách dầu có xu hướng đẩy hỗn hợp dầu máy nén khí nóng phun trào ngược lên cửa hút đầu nén ra ngoài bầu lọc gió. Van cổ hút tích hợp lò xo lá một chiều đóng sập ngay lập tức để chặn đứng lượng dầu trào này, ngăn ngừa hư hỏng bầu lọc gió và tránh bẩn khoang máy.', 'When the air compressor shuts down unexpectedly or loses power, massive differential pressure in the separator tank tends to force hot oil mist backward toward the inlet. The intake valve features an integrated spring-loaded check valve that instantly snaps shut, blocking reverse oil flow and protecting the air intake filter from oil contamination.'],
  ['Khi máy nén khí trục vít khởi động, van cổ hút luôn ở trạng thái đóng hoàn toàn. Lúc này, đầu nén không phải nén khí ngay lập tức, giảm thiểu tối đa momen cản của động cơ, hạn chế dòng điện khởi động (Ampe) tăng vọt đột ngột gây sụt áp hoặc quá tải nguồn điện lưới nhà xưởng.', 'During initial star-delta or VFD motor startup, the intake valve remains completely closed. Because the rotors do not compress air immediately, motor starting resistance torque is minimized, preventing dangerous startup current surges from tripping main circuit breakers.'],

  // Intake Valve Bullet points
  ['Van cổ hút kiểu piston khí nén (Piston Actuated Valve):', 'Piston-Actuated Intake Valve:'],
  ['Dòng van sử dụng một piston xi lanh khí nén tích hợp bên sườn thân van để mở đĩa van chính. Hoạt động nhờ sự cấp khí điều khiển từ van điện từ solenoid nhỏ. Thường thấy ở các hãng lớn như Kobelco, Atlas Copco GA series.', 'Utilizes an integrated pneumatic piston actuator on the valve body to open the main disc via solenoid pilot air. Offers high speed and reliability, widely found on Kobelco and Atlas Copco GA series.'],
  ['Van cổ hút kiểu màng cao su (Diaphragm-type Intake Valve):', 'Diaphragm-Type Intake Valve:'],
  ['Cơ cấu đóng mở bằng màng cao su co giãn chịu áp. Thiết kế đơn giản, đóng mở nhạy dựa vào lực hút chân không và áp khiển điều hướng. Phổ biến trên các dòng đầu nén của Fusheng hay Rotorcomp.', 'Features an oil-resistant elastic rubber diaphragm for opening and closing based on vacuum and pilot control pressure. Simple, responsive, and commonly used on Fusheng and Rotorcomp air-ends.'],
  ['Van cổ hút kiểu cánh bướm xoay (Butterfly Intake Valve):', 'Butterfly Rotary Intake Valve:'],
  ['Sử dụng một cánh van dạng bướm xoay góc 90 độ nối với cơ cấu lò xo điều áp khí nén. Dòng van này có tiết diện mở tối đa rất lớn, thường lắp đặt trên các dòng máy nén khí trục vít công suất lớn (trên 75kW) để nạp khí nhiều.', 'Employs a 90-degree rotating butterfly disc linked to a spring-return pneumatic actuator. Features large flow area and minimal intake resistance, ideal for heavy-duty compressors over 75kW (100HP).'],

  // Pressure regulator phrases
  ['(còn gọi là van giảm áp khí nén hoặc bộ điều chỉnh áp suất – Regulator) là thiết bị quan trọng được lắp đặt tại đầu vào của các thiết bị máy móc, đường ống nhánh sử dụng khí nén. Thiết bị thực hiện nhiệm vụ giảm áp suất từ nguồn cấp khí nén chính (áp suất cao, không ổn định) xuống mức áp suất làm việc nhỏ hơn phù hợp với thông số của máy móc, đồng thời giữ vững mức áp suất này luôn ổn định bất chấp mọi dao động áp suất phía đầu vào.', '(also known as an air pressure regulator or pressure reducing valve) is a vital control device installed at the inlet of pneumatic machinery and branch distribution lines. It reduces high, fluctuating main supply pressure down to a safe, constant operating level suitable for sensitive downstream equipment.'],
  ['Khí nén tạo ra từ máy nén khí trục vít thường được duy trì ở áp suất rất cao từ 8 Bar – 10 Bar để tối ưu hiệu quả truyền tải đường ống. Tuy nhiên, các thiết bị cơ cấu như van điện từ, xi lanh hoặc bộ lọc tinh ở hạ nguồn chỉ vận hành tốt nhất ở mức 4 Bar – 6 Bar. Van điều áp giúp giảm và giới hạn áp suất này một cách chính xác.', 'Compressed air from screw compressors is typically maintained at 8 - 10 Bar for efficient long-distance piping distribution. However, downstream actuators, solenoid valves, and pneumatic tools operate best at 4 - 6 Bar. Regulators accurately reduce and stabilize this pressure.'],
  ['Khi các máy sấy khí xả nước, hoặc khi các phân xưởng khác tiêu thụ khí nén lớn đột biến, áp suất đường ống chính sẽ trồi sụt liên tục. Van điều áp sử dụng cơ cấu màng cao su co giãn tự động điều chỉnh lưu lượng nạp để đảm bảo áp suất đầu ra cấp cho thiết bị luôn cố định ở giá trị cài đặt.', 'When demand surges or automatic drains open, mainline air pressure fluctuates violently. The regulator’s spring-diaphragm mechanism instantly compensates for pressure drops, keeping downstream pressure stable.'],
  ['Quá áp suất làm việc định mức là nguyên nhân hàng đầu gây nứt vỡ đường ống dẫn khí, rách gioăng phớt của piston xi lanh và cháy nổ cuộn coil van điện từ điều khiển. Van điều áp đóng vai trò là chốt bảo vệ an toàn tối đa cho hệ thống thiết bị đắt tiền của nhà máy.', 'Excessive operating pressure is the leading cause of burst air hoses, torn cylinder seals, and burnt solenoid coils. Pressure regulators provide essential overpressure protection for expensive factory automation equipment.']
];

console.log('Total phrases configured:', articlePhrasesZh.length);
