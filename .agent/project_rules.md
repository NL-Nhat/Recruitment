# TÀI LIỆU QUY TẮC DỰ ÁN (PROJECT RULES)
*Dành cho AI Agent và các Lập trình viên tham gia dự án Recruitment System.*

Văn bản này đóng vai trò là kim chỉ nam. **BẤT CỨ KHI NÀO** thực hiện một yêu cầu, AI Agent phải tự động tham chiếu và tuân thủ tuyệt đối các quy tắc dưới đây.

---

## 1. QUY TẮC CHUNG DÀNH CHO AI AGENT
- **Không tự ý thay đổi ngoài phạm vi yêu cầu:** CHỈ thực hiện các tác vụ và thay đổi mã nguồn nằm trong phạm vi yêu cầu của user. KHÔNG tự ý refactor code, đổi tên biến, hay thay đổi các file không liên quan trừ khi được yêu cầu rõ ràng.
- **Xác nhận trước khi thay đổi lớn:** Trước khi thực hiện thay đổi kiến trúc, xóa lượng lớn code, hay thay đổi schema database, AI cần trình bày kế hoạch (implementation plan) hoặc hỏi ý kiến để user duyệt trước.
- **Không tự ý đưa ra giả định:** Nếu yêu cầu thiếu thông tin quan trọng hoặc mơ hồ, hãy hỏi lại (Ask for clarification) thay vì tự ý chọn một hướng giải quyết có thể sai lệch.
- **Giữ nguyên định dạng sẵn có:** Trừ phi có yêu cầu cụ thể, phải giữ nguyên các đoạn comment, docstrings hiện tại không liên quan đến thay đổi đang thực hiện.

## 2. QUY TẮC BACKEND (JAVA / SPRING BOOT)
- **Kiến trúc phân tầng (Layered Architecture):** Tuân thủ nghiêm ngặt mô hình `Controller` -> `Service` -> `Repository`. KHÔNG viết logic nghiệp vụ (business logic) ở Controller.
- **Tiêu chuẩn RESTful API:** 
  - Sử dụng đúng các HTTP methods (GET, POST, PUT, DELETE, PATCH).
  - URL nên là danh từ số nhiều (vd: `/api/v1/users`).
  - Trả về đúng HTTP Status Codes (200, 201 cho thành công; 400, 401, 403, 404 cho lỗi client; 500 cho lỗi server).
- **Xử lý ngoại lệ (Exception Handling):** Bắt buộc sử dụng `@ControllerAdvice` hoặc `@RestControllerAdvice` để xử lý ngoại lệ tập trung. Tất cả các API cần trả về một format chung (ví dụ: `code`, `message`, `data`).
- **Validation:** Bắt buộc phải validate dữ liệu đầu vào (DTO) bằng Hibernate Validator (`@Valid`, `@NotNull`, `@Size`, `@Email`...).
- **DTO Pattern:** Không trả trực tiếp Entity ra ngoài API. Luôn ánh xạ (map) Entity sang DTO để tránh rò rỉ dữ liệu nhạy cảm hoặc vòng lặp vô hạn (Infinite Recursion) do quan hệ 2 chiều.

## 3. QUY TẮC FRONTEND (REACTJS / NEXT.JS)
- **Cấu trúc Component:** Tách nhỏ UI thành các component tái sử dụng được (Reusable Components). Đảm bảo nguyên tắc Single Responsibility (mỗi component chỉ đảm nhiệm 1 việc).
- **State Management:** Sử dụng state một cách tối ưu. Tránh đưa mọi thứ vào Global State (Redux/Zustand) nếu chỉ cần Local State (useState, useReducer).
- **Custom Hooks:** Tách logic phức tạp ra khỏi UI component bằng cách tạo các Custom Hooks (`use...`).
- **TypeScript (nếu có sử dụng):** Khai báo interface/type rõ ràng cho props và state. Tránh sử dụng `any` bừa bãi.
- **Quản lý Side-effects:** Quản lý vòng đời (lifecycle) và gọi API cẩn thận trong `useEffect`, luôn có dependency array chuẩn xác và dọn dẹp (cleanup function) khi cần thiết để tránh memory leak.

## 4. THIẾT KẾ GIAO DIỆN (UI/UX) & TIÊU CHUẨN WEB
- **Thẩm mỹ Cao cấp (Premium Aesthetics):** Giao diện phải toát lên sự chuyên nghiệp. Sử dụng bảng màu hiện đại (ưu tiên HSL), typography tinh tế (các font như Inter, Roboto, Outfit). Không dùng các màu sắc nguyên bản chói lóa.
- **Thiết kế Động (Dynamic Design):** Bắt buộc thêm các hiệu ứng tương tác: hover effects, active states, micro-animations để giao diện mượt mà và "sống động".
- **Mobile First & Responsive:** Giao diện bắt buộc phải hoạt động tốt trên mọi kích thước màn hình (Mobile, Tablet, Desktop).
- **SEO & Trợ năng (Accessibility):** Áp dụng đúng Semantic HTML (header, nav, main, footer). Cung cấp `alt` cho hình ảnh. Các trang dành cho người dùng bên ngoài (Public pages) cần tối ưu thẻ `<title>` và `<meta>`.

## 5. CLEAN CODE & CODING STANDARDS
- **Tên biến/Hàm/Lớp rõ ràng (Descriptive Naming):** 
  - Java: `camelCase` cho biến/hàm, `PascalCase` cho class, `UPPER_SNAKE_CASE` cho hằng số.
  - JS/React: `camelCase` cho hàm/biến, `PascalCase` cho Component.
- **Kích thước lý tưởng:** Hàm nên ngắn gọn (tối đa 20-30 dòng). Nếu hàm quá dài, hãy tách thành các hàm nhỏ (helper methods). File class không nên quá cồng kềnh (chia nhỏ nếu vượt quá 300-400 dòng).
- **Nguyên lý DRY (Don't Repeat Yourself):** Không sao chép mã (copy-paste code). Đưa logic chung vào utils hoặc helper classes.
- **Comment ý nghĩa:** Code phải tự giải thích được chính nó (Self-documenting). Chỉ dùng comment để giải thích "TẠI SAO" (lý do nghiệp vụ phức tạp) thay vì "ĐANG LÀM GÌ" (điều đã rõ ràng qua code).

## 6. BẢO MẬT (SECURITY)
- **Phân quyền & Xác thực (AuthN & AuthZ):** API bảo mật phải luôn kiểm tra quyền. Cực kỳ lưu ý lỗi IDOR (Tài khoản A xem/sửa được dữ liệu của tài khoản B do truyền ID trên request).
- **Bảo vệ Dữ liệu Nhạy cảm:** Mật khẩu phải được hash (ví dụ: BCrypt) trước khi lưu vào DB. Tuyệt đối KHÔNG BẢO GIỜ log hoặc trả về token/password qua API phản hồi.
- **Ngăn chặn SQL Injection:** Luôn sử dụng ORM (JPA/Hibernate) hoặc Prepared Statements. TUYỆT ĐỐI KHÔNG dùng toán tử cộng chuỗi (`+`) để ghép chuỗi truy vấn SQL trực tiếp từ input người dùng.
- **Bảo mật Input/Output:** Đề phòng XSS bằng cách sanitize dữ liệu đầu vào.
- **CORS & CSRF:** Thiết lập cấu hình CORS an toàn chỉ cho phép client tin tưởng.

## 7. TỐI ƯU HÓA LÝ THUYẾT (OPTIMIZATION) & LOGIC
- **Vấn đề N+1 Query trong JPA:** Đây là lỗi phổ biến nhất. Hãy sử dụng `JOIN FETCH`, `@EntityGraph` khi cần truy vấn cùng lúc các entity con.
- **Phân trang (Pagination):** Với các danh sách dữ liệu dài (Jobs, Candidates, Users), bắt buộc sử dụng cơ chế phân trang từ dưới DB lên tới Frontend, không kéo toàn bộ dữ liệu về RAM.
- **Tối ưu hóa Database:** Đánh Index (Chỉ mục) cho các trường dùng nhiều trong `WHERE`, `ORDER BY`.
- **Tối ưu Rendering Frontend:** Sử dụng `React.memo`, `useMemo`, `useCallback` ở các component con nhận nhiều props phức tạp hoặc các tính toán nặng, tránh render lại (re-render) vô nghĩa.
- **Lazy Loading:** Load components (Frontend) và fetch dữ liệu (Backend) theo cơ chế trì hoãn (lazy) khi hợp lý để tăng tốc độ tải trang lần đầu.

---
**Cam kết của AI Agent:** Tôi đã đọc và hiểu các quy tắc này. Trong mọi phiên làm việc tại dự án `web_recruitment`, tôi sẽ nghiêm túc tuân thủ theo các chuẩn mực được đặt ra trong tài liệu này.
