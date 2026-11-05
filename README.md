# LAB 01 - LẬP TRÌNH TRÊN MÁY ẢO ĐÁM MÂY ĐẦU TIÊN

**Sinh viên:** Ngô Sỷ Minh Phước  
**MSSV:** 2324802010325  
**Trường:** Đại học Thủ Dầu Một

## 1. Công nghệ sử dụng
- GitHub và GitHub Codespaces
- Node.js 22 và Express
- GitHub Pages
- Docker, JDK 25 và Maven (môi trường Codespaces)

## 2. Hello Cloud API

Cài đặt thư viện:

`npm install`

Khởi chạy ứng dụng:

`npm start`

Kiểm tra API:

`curl http://localhost:3000/`

API trả về dữ liệu JSON gồm `message`, `host`, `platform`, `cpus`, `memoryGB`, `uptimeSec` và `time`.

**Cấu trúc API:**
- `src/app.js`: Xử lý yêu cầu API bằng Express.
- `src/server.js`: Khởi động máy chủ tại cổng 3000.

## 3. Kết quả thực hành
- Khởi tạo Codespace trong 3 phút 10 giây.
- Máy ảo có 2 CPU và 7.8 GB RAM theo API.
- Truy cập API thành công từ điện thoại qua URL Public.
- Chuyển cổng 3000 về Private sau khi kiểm thử.
- Triển khai website bằng GitHub Pages.

## 4. Năm đặc tính NIST
1. **On-demand self-service:** Tự tạo và khởi chạy Codespace.
2. **Broad network access:** Truy cập API bằng điện thoại qua Internet.
3. **Resource pooling:** Sử dụng CPU và RAM từ hạ tầng Cloud.
4. **Rapid elasticity:** Có thể thay đổi cấu hình; đã thực hiện Start/Stop Codespace.
5. **Measured service:** Theo dõi lưu trữ và chi phí qua GitHub Billing Usage.

## 5. GitHub Pages

**Repository:**  
https://github.com/MinhFuok/notes-api-2324802010325

**Website:**  
https://minhfuok.github.io/notes-api-2324802010325/

Trang web hiển thị bảng so sánh máy cá nhân với Codespaces và 5 đặc tính NIST.

## 6. Ghi chú
- API chạy trên GitHub Codespaces và ngừng hoạt động khi Codespace được Stop.
- Website GitHub Pages được triển khai từ thư mục `docs`.
- Chi phí Codespaces trong ảnh Billing Usage: 0.49 GB-month lưu trữ, $0.03 trước ưu đãi và $0 thực trả.