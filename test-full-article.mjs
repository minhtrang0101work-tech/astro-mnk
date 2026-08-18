import fs from 'fs';

const sampleViHtml = `
<h2>VAN CỔ HÚT MÁY NÉN KHÍ: THÔNG SỐ, PHÂN LOẠI & HỎI ĐÁP KỸ THUẬT</h2>
<p><strong>Van cổ hút máy nén khí</strong> (còn gọi là van hút, van cửa nạp hoặc van không tải – Intake Valve / Unloader Valve) là cụm van cơ khí lớn được lắp trực tiếp tại cổng hút phía trên cùng của đầu nén trục vít. Thiết bị thực hiện nhiệm vụ điều tiết toàn bộ lưu lượng không khí đi vào buồng nén theo tín hiệu điều khiển có tải (Load) hoặc không tải (Unload) từ bảng điều khiển chính, giúp tối ưu hóa hiệu suất làm việc và tiết kiệm điện năng tiêu thụ cho động cơ.</p>
<h3>I. 3 CÔNG NĂNG VẬN HÀNH CỐT LÕI CỦA VAN CỔ HÚT</h3>
<h4>1. Điều tiết hai chế độ chạy có tải (Load) và không tải (Unload)</h4>
<p>Khi máy chạy có tải (Load), van mở rộng hoàn toàn cho khí nén đi vào đầu nén để ép khí. Khi bình khí đạt áp suất cài đặt tối đa, van cổ hút nhận tín hiệu áp khiển để đóng kín khít lại, chặn đứng dòng không khí nạp. Lúc này đầu nén chạy không tải (Unload), máy nén khí chạy không sinh áp để giảm tải dòng điện và giảm tiêu hao năng lượng điện của nhà máy.</p>
<h4>2. Chặn đứng dầu đầu nén trào ngược khi dừng máy</h4>
<p>Khi dừng máy nén khí đột ngột, chênh lệch áp suất cực lớn trong bình tách dầu có xu hướng đẩy hỗn hợp dầu máy nén khí nóng phun trào ngược lên cửa hút đầu nén ra ngoài bầu lọc gió. Van cổ hút tích hợp lò xo lá một chiều đóng sập ngay lập tức để chặn đứng lượng dầu trào này, ngăn ngừa hư hỏng bầu lọc gió và tránh bẩn khoang máy.</p>
<h4>3. Hỗ trợ khởi động nhẹ tải bảo vệ động cơ chính</h4>
<p>Khi máy nén khí trục vít khởi động, van cổ hút luôn ở trạng thái đóng hoàn toàn. Lúc này, đầu nén không phải nén khí ngay lập tức, giảm thiểu tối đa momen cản của động cơ, hạn chế dòng điện khởi động (Ampe) tăng vọt đột ngột gây sụt áp hoặc quá tải nguồn điện lưới nhà xưởng.</p>
<h3>II. PHÂN LOẠI VAN CỔ HÚT MÁY NÉN KHÍ</h3>
<ul>
  <li><strong>Van cổ hút kiểu piston khí nén (Piston Actuated Valve):</strong> Dòng van sử dụng một piston xi lanh khí nén tích hợp bên sườn thân van để mở đĩa van chính. Hoạt động nhờ sự cấp khí điều khiển từ van điện từ solenoid nhỏ. Thường thấy ở các hãng lớn như Kobelco, Atlas Copco GA series.</li>
  <li><strong>Van cổ hút kiểu màng cao su (Diaphragm-type Intake Valve):</strong> Cơ cấu đóng mở bằng màng cao su co giãn chịu áp. Thiết kế đơn giản, đóng mở nhạy dựa vào lực hút chân không và áp khiển điều hướng. Phổ biến trên các dòng đầu nén của Fusheng hay Rotorcomp.</li>
  <li><strong>Van cổ hút kiểu cánh bướm xoay (Butterfly Intake Valve):</strong> Sử dụng một cánh van dạng bướm xoay góc 90 độ nối với cơ cấu lò xo điều áp khí nén. Dòng van này có tiết diện mở tối đa rất lớn, thường lắp đặt trên các dòng máy nén khí trục vít công suất lớn (trên 75kW) để nạp khí nhiều.</li>
</ul>
`;

console.log('Sample length:', sampleViHtml.length);
