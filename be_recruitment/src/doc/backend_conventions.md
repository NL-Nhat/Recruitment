# Tài liệu Quy tắc và Tiêu chuẩn Lập trình Backend (Java Spring Boot)

Tài liệu này định nghĩa kiến trúc, quy tắc viết code, các chuẩn giao tiếp (Request/Response) và cấu trúc API của hệ thống Backend (Java Spring Boot) để đảm bảo đồng bộ hoàn toàn với Frontend (ReactJS) và Database (PostgreSQL).

---

## 1. Công nghệ & Kiến trúc (Tech Stack & Architecture)

- **Ngôn ngữ:** Java 17+
- **Framework chính:** Spring Boot 3.x
- **Bảo mật:** Spring Security 6.x + JWT (JSON Web Token)
- **Tương tác Cơ sở dữ liệu (ORM):** Spring Data JPA (Hibernate)
- **Database:** PostgreSQL
- **Mapping Entity <-> DTO:** MapStruct
- **Tài liệu API:** Swagger / OpenAPI 3
- **Cấu trúc thư mục chuẩn (Package Structure):**
  - `com.smartrecruit.controller`: REST APIs.
  - `com.smartrecruit.service`: Logic nghiệp vụ.
  - `com.smartrecruit.repository`: Truy xuất DB (Spring Data JPA).
  - `com.smartrecruit.entity`: Các lớp Entity ánh xạ với bảng trong PostgreSQL.
  - `com.smartrecruit.dto`: Đối tượng truyền dữ liệu (Request/Response).
  - `com.smartrecruit.security`: Cấu hình JWT, Filters, UserDetails.
  - `com.smartrecruit.exception`: Xử lý lỗi tập trung (Global Exception Handler).
  - `com.smartrecruit.config`: Cấu hình hệ thống (CORS, Swagger...).

---

## 2. Tiêu chuẩn Giao tiếp (Standard Request & Response)

Để Frontend dễ dàng xử lý, Backend **BẮT BUỘC** trả về một format JSON chuẩn duy nhất cho mọi API thông qua lớp `ApiResponse<T>`.

### 2.1. Lớp ApiResponse (Mẫu Response dùng chung)

```json
{
  "success": true,
  "message": "Thao tác thành công",
  "data": { ... } // Payload thực tế (Object, List, hoặc Null)
}
```
**Khi có lỗi (Exception):**
```json
{
  "success": false,
  "message": "Không tìm thấy người dùng hoặc mật khẩu không đúng",
  "data": null,
  "errorCode": "AUTH_001" // (Tùy chọn) Mã lỗi để FE xử lý logic
}
```

### 2.2. Lớp PageResponse (Mẫu Response cho phân trang)
Dùng cho các trang danh sách (Việc làm, Ứng viên, Công ty...).
```json
{
  "success": true,
  "message": "Lấy danh sách thành công",
  "data": {
    "content": [ ... ], // Danh sách phần tử
    "pageNo": 0,
    "pageSize": 10,
    "totalElements": 150,
    "totalPages": 15,
    "last": false
  }
}
```

---

## 3. Bảo mật & Xác thực (Spring Security & JWT)

- **Lưu trữ Mật khẩu:** Sử dụng `BCryptPasswordEncoder` (đã phản ánh trong `SmartRecruiterDB_postgreSQL.sql`).
- **Phân quyền (Roles):** 
  - Ánh xạ `MaVaiTro` trong DB thành các GrantedAuthority: `ROLE_ADMIN`, `ROLE_EMPLOYER`, `ROLE_CANDIDATE`.
  - Sử dụng Annotation `@PreAuthorize("hasRole('ADMIN')")` ở cấp độ Controller và bao quát.
- **Quy trình Token (Access Token & Refresh Token):**
  Hệ thống sử dụng cơ chế bảo mật kép với **Access Token** (ngắn hạn, ~15-30 phút) và **Refresh Token** (dài hạn, ~7-30 ngày).
  1. **Đăng nhập:** FE gửi `email` + `password` đến `/api/v1/auth/login`.
  2. **Tạo Token:** BE kiểm tra thông tin, sinh ra 2 loại token:
     - `Access Token` (kèm role và thông tin cơ bản) được trả về trong body (payload JSON).
     - `Refresh Token` được trả về qua **HttpOnly, Secure, SameSite=Strict Cookie**. Cách này chống lại tấn công XSS và CSRF.
  3. **Lưu trữ phía FE:** 
     - FE lưu `Access Token` vào bộ nhớ tạm (in-memory) hoặc `sessionStorage`.
     - `Refresh Token` được trình duyệt tự động quản lý qua Cookie.
  4. **Sử dụng:** FE gọi API bảo mật bằng cách đính kèm Header `Authorization: Bearer <Access Token>`.
  5. **Làm mới Token (Refresh):** Khi `Access Token` hết hạn (lỗi 401), FE tự động gọi API `POST /api/v1/auth/refresh-token`. BE sẽ đọc `Refresh Token` từ Cookie, kiểm tra tính hợp lệ và trả về `Access Token` mới.
  6. **Đăng xuất:** Gọi `POST /api/v1/auth/logout`, BE sẽ xóa Cookie chứa `Refresh Token`.

---

## 4. Quy ước Đặt Tên (Naming Conventions)

- **Class/Interface:** `PascalCase` (VD: `JobController`, `UserService`).
- **Biến/Method:** `camelCase` (VD: `findJobById`, `jobTitle`).
- **Hằng số (Constants):** `UPPER_SNAKE_CASE` (VD: `MAX_PAGE_SIZE`).
- **URL API (RESTful):** Dùng danh từ số nhiều, chữ thường, phân cách bằng dấu gạch ngang (`-`).
  - Tốt: `GET /api/v1/jobs`, `POST /api/v1/companies`
  - Xấu: `GET /api/v1/get-jobs`, `POST /api/v1/job/create`

---

## 5. Mapping Chức năng Frontend và API Backend (RESTful)

Dưới đây là danh sách các API mẫu cần xây dựng để đáp ứng các màn hình đã thiết kế trên Frontend:

### 5.1. Nhóm API Xác Thực (Auth) - Bất kỳ ai cũng truy cập được
- `POST /api/v1/auth/login` : Đăng nhập (Nhận Email, Password -> Trả về Access Token trong body + Refresh Token trong HttpOnly Cookie).
- `POST /api/v1/auth/register/candidate` : Đăng ký Ứng viên.
- `POST /api/v1/auth/register/employer` : Đăng ký Nhà tuyển dụng.
- `POST /api/v1/auth/refresh-token` : Làm mới Token (Đọc Refresh Token từ Cookie -> Trả về Access Token mới).
- `POST /api/v1/auth/logout` : Đăng xuất (BE xóa Cookie chứa Refresh Token).

### 5.2. Nhóm API Public (Guest) - Không cần Token
- `GET /api/v1/public/jobs` : Lấy danh sách tin tuyển dụng (có phân trang, filter, search).
- `GET /api/v1/public/jobs/{id}` : Xem chi tiết tin tuyển dụng.
- `GET /api/v1/public/companies` : Danh sách công ty.
- `GET /api/v1/public/locations` : Lấy danh sách Tỉnh/Thành phố.
- `GET /api/v1/public/skills` : Lấy danh mục kỹ năng (để phục vụ bộ lọc/tìm kiếm).

### 5.3. Nhóm API Ứng Viên (Candidate) - Cần `ROLE_CANDIDATE`
- `GET /api/v1/candidate/profile` : Lấy hồ sơ cá nhân.
- `PUT /api/v1/candidate/profile` : Cập nhật hồ sơ cá nhân.
- `POST /api/v1/candidate/applications` : Nộp đơn ứng tuyển (Apply Job + Upload CV).
- `GET /api/v1/candidate/applications` : Xem lịch sử ứng tuyển của bản thân.
- `GET /api/v1/candidate/interviews` : Xem lịch phỏng vấn.
- `GET /api/v1/candidate/applications/{id}/ai-review` : Xem chi tiết đánh giá AI.

### 5.4. Nhóm API Nhà Tuyển Dụng (Employer) - Cần `ROLE_EMPLOYER`
- `GET /api/v1/employer/dashboard` : Thống kê cho HR (số lượng tin, số CV nộp).
- `GET /api/v1/employer/jobs` : Lấy danh sách tin tuyển dụng CỦA CHÍNH CÔNG TY ĐÓ.
- `POST /api/v1/employer/jobs` : Đăng tin tuyển dụng mới (Cần lưu `MaDiaDiem`, `SoLuongCanTuyen`).
- `PUT /api/v1/employer/jobs/{id}` : Cập nhật tin tuyển dụng.
- `GET /api/v1/employer/applications` : Xem danh sách ứng viên nộp vào công ty.
- `PUT /api/v1/employer/applications/{id}/status` : Đổi trạng thái đơn (Duyệt, Từ chối).
- `POST /api/v1/employer/interviews` : Tạo lịch phỏng vấn cho ứng viên.
- `GET /api/v1/employer/company-profile` : Xem hồ sơ công ty.
- `PUT /api/v1/employer/company-profile` : Cập nhật hồ sơ công ty.

### 5.5. Nhóm API Quản Trị Viên (Admin) - Cần `ROLE_ADMIN`
- `GET /api/v1/admin/dashboard` : Thống kê toàn hệ thống (Tổng User, Tổng Tin, Lượt truy cập).
- `GET /api/v1/admin/users` : Xem toàn bộ người dùng.
- `PUT /api/v1/admin/users/{id}/status` : Khóa/Mở khóa tài khoản người dùng (`TrangThaiHoatDong`).
- `POST /api/v1/admin/skills` : Thêm danh mục kỹ năng mới vào `DanhMucKyNang`.
- `PUT /api/v1/admin/skills/{id}` : Sửa tên/phân loại kỹ năng.
- `DELETE /api/v1/admin/skills/{id}` : Xóa kỹ năng.
- `GET /api/v1/admin/roles` : Lấy danh sách Role.
- `PUT /api/v1/admin/change-password` : Đổi mật khẩu tài khoản Admin.

---

## 6. Xử Lý Lỗi (Exception Handling)

Trong Backend, cần cấu hình một lớp `@RestControllerAdvice` (GlobalExceptionHandler) để bắt mọi Exception và gói thành `ApiResponse` với `success: false`.
- **MethodArgumentNotValidException:** Xử lý lỗi validate form (ví dụ `@NotBlank`, `@Email`) và trả về danh sách các trường bị lỗi.
- **BadCredentialsException:** Trả về lỗi sai tài khoản / mật khẩu.
- **ResourceNotFoundException:** (Custom Exception) Trả về lỗi 404 khi không tìm thấy Job/User.
- **AccessDeniedException:** Trả về lỗi 403 khi User truy cập API không đúng quyền (VD: Ứng viên gọi API của Admin).