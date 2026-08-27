# Tài liệu Yêu cầu Thiết kế Frontend - Hệ thống Tuyển dụng

Tài liệu này tổng hợp các chức năng, danh sách màn hình và các quy tắc (rules) cần tuân thủ khi thiết kế giao diện frontend cho nền tảng tuyển dụng.

## 1. Các Quy tắc (Rules) Thiết kế Web Frontend Cần Tuân Thủ

Để đảm bảo mang lại trải nghiệm người dùng (UX) tốt nhất và giao diện (UI) hiện đại, chuyên nghiệp, cần tuân thủ các quy tắc sau:

- **Tính Thẩm Mỹ Cao & Chuyên Nghiệp:** Sử dụng thiết kế hiện đại (vibrant colors, glassmorphism, dark mode tùy chọn). Tránh các màu sắc nguyên bản cơ bản (đỏ, xanh thuần); thay vào đó, sử dụng các bảng màu hài hòa (ví dụ: HSL tailored colors).
- **Typography Hiện Đại:** Sử dụng các font chữ hiện đại từ Google Fonts (như Inter, Roboto, hoặc Outfit) thay vì các font mặc định của trình duyệt. Đảm bảo phân cấp tiêu đề (Heading hierarchy) rõ ràng.
- **Tính Động & Tương Tác:** Thêm các hiệu ứng hover, micro-animations (hiệu ứng chuyển động nhỏ) và transitions mượt mà để tăng tính tương tác, giúp trang web trông "sống động" hơn.
- **Thiết Kế Responsive:** Giao diện phải hiển thị tốt và tối ưu trên mọi kích thước màn hình (Desktop, Tablet, Mobile).
- **Trải Nghiệm Người Dùng (UX):** Giữ cho giao diện đơn giản, trực quan. Tránh nhồi nhét quá nhiều thông tin trên một màn hình. Sử dụng khoảng trắng (whitespace) hợp lý.
- **SEO & Trợ năng (Accessibility):** Tối ưu SEO cho các trang public (danh sách công việc, chi tiết công việc, công ty). Sử dụng các thẻ HTML5 Semantic (header, nav, main, article), đảm bảo thuộc tính `alt` cho hình ảnh và có thẻ meta đầy đủ.
- **Tối ưu Hiệu suất:** Đảm bảo thời gian tải trang nhanh, hình ảnh được nén tối ưu, và sử dụng Lazy Loading cho các danh sách dài.

---

## 2. Danh sách Màn hình và Chức năng

### 2.1. Khách Vãng Lai (Guest)
Nhóm người dùng chưa đăng nhập, mục tiêu là tìm hiểu thông tin và tìm kiếm việc làm.

**Danh sách màn hình:**
- Màn hình Trang chủ (Home)
- Màn hình Danh sách tin tuyển dụng
- Màn hình Chi tiết tin tuyển dụng
- Màn hình Chi tiết công ty của nhà tuyển dụng

**Chức năng tương ứng:**
- Xem danh sách tin tuyển dụng.
- Xem chi tiết tin tuyển dụng.
- Tìm kiếm tin tuyển dụng (theo từ khóa, địa điểm, ngành nghề...).
- Đăng ký, đăng nhập.
- Xem thông tin công ty của nhà tuyển dụng.

### 2.2. Ứng Viên (Candidate)
Người dùng tìm việc đã có tài khoản trên hệ thống.

**Danh sách màn hình:**
- Màn hình Dashboard Ứng viên (Tổng quan)
- Màn hình Hồ sơ cá nhân (Profile / CV)
- Màn hình Quản lý kỹ năng cá nhân
- Màn hình Lịch sử ứng tuyển / Kết quả ứng tuyển
- Màn hình Lịch phỏng vấn
- Màn hình Chi tiết đánh giá của AI

**Chức năng tương ứng:**
- Nộp đơn ứng tuyển vào các vị trí phù hợp.
- Xem lịch phỏng vấn.
- Cập nhật thông tin cá nhân (Profile, CV, Kinh nghiệm).
- Xem kết quả ứng tuyển.
- Xem chi tiết đánh giá CV của AI (Mức độ phù hợp, gợi ý cải thiện).
- Quản lý kỹ năng cá nhân (Thêm, sửa, xóa kỹ năng).

### 2.3. Nhà Tuyển Dụng (Employer)
Tài khoản đại diện cho công ty tuyển dụng nhân sự.

**Danh sách màn hình:**
- Màn hình Dashboard Nhà tuyển dụng (Thống kê sơ bộ)
- Màn hình Quản lý Tin tuyển dụng
- Màn hình Thêm mới / Cập nhật Tin tuyển dụng
- Màn hình Quản lý Ứng viên
- Màn hình Chi tiết Ứng viên & Kết quả phân tích CV từ AI
- Màn hình Lịch phỏng vấn
- Màn hình Hồ sơ Công ty (Thông tin cá nhân & Công ty)

**Chức năng tương ứng:**
- Đăng tin tuyển dụng mới.
- Cập nhật tin tuyển dụng hiện có.
- Xem danh sách ứng viên nộp đơn.
- Xem kết quả phân tích CV của AI (đánh giá mức độ phù hợp của ứng viên).
- Duyệt / Từ chối đơn ứng tuyển.
- Tạo lịch phỏng vấn cho ứng viên.
- Xem lịch phỏng vấn.
- Cập nhật thông tin cá nhân / thông tin doanh nghiệp.

### 2.4. Quản Trị Viên (Admin)
Tài khoản quản lý toàn bộ hệ thống.

**Danh sách màn hình:**
- Màn hình Dashboard Admin (Báo cáo tổng quan)
- Màn hình Quản lý Người dùng (Ứng viên & Nhà tuyển dụng)
- Màn hình Quản lý Danh mục Kỹ năng
- Màn hình Quản lý Vai trò (Roles & Permissions)
- Màn hình Báo cáo & Thống kê

**Chức năng tương ứng:**
- Quản lý người dùng (Khóa/Mở khóa tài khoản, xem chi tiết).
- Quản lý danh mục kỹ năng (Thêm, sửa, xóa các kỹ năng hệ thống).
- Quản lý vai trò và quyền hạn trong hệ thống.
- Xem báo cáo thống kê (Lưu lượng người dùng, số lượng tin tuyển dụng, tỷ lệ ứng tuyển thành công...).

---

## 3. Giao Diện Đăng Nhập & Đăng Ký

Khu vực này cần thiết kế ấn tượng, tạo sự tin tưởng cho cả ứng viên và nhà tuyển dụng.

**Màn hình Đăng nhập (Login):**
- **Thành phần:** Form đăng nhập (Email/Username, Password), Quên mật khẩu, Nút Đăng nhập, Đăng nhập qua mạng xã hội (Google, LinkedIn, Facebook).
- **UX/UI:** Hỗ trợ hiển thị/ẩn mật khẩu (Toggle password visibility). Hiển thị thông báo lỗi rõ ràng nếu nhập sai.

**Màn hình Đăng ký (Register):**
- **Thành phần:** 
  - Lựa chọn vai trò ngay từ đầu: **Đăng ký làm Ứng viên** hoặc **Đăng ký làm Nhà tuyển dụng**.
  - Form điền thông tin cơ bản: Họ tên, Email, Mật khẩu, Xác nhận mật khẩu.
  - (Với nhà tuyển dụng có thể thêm trường Tên công ty sơ bộ).
- **UX/UI:** Có thanh tiến trình (progress bar) nếu form đăng ký dài (Multi-step form). Đánh giá độ mạnh của mật khẩu (Password strength meter).

**Quy tắc chung cho Login/Register:**
- Sử dụng hình ảnh minh họa chất lượng cao hoặc các khối họa tiết đẹp mắt ở một bên màn hình (Split screen layout) để giảm bớt sự nhàm chán của form trống.
- Đảm bảo có liên kết điều hướng qua lại giữa trang Đăng ký và Đăng nhập (Ví dụ: "Bạn đã có tài khoản? Đăng nhập ngay").
