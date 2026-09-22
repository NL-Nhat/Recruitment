// =========================================================
// MOCK DATA MỞ RỘNG CHO ỨNG VIÊN
// Khớp với schema PostgreSQL (không có ChiTietKyNang_UngVien)
// =========================================================

export const roles = [
  { id: 1, name: 'Admin' },
  { id: 2, name: 'NhaTuyenDung' },
  { id: 3, name: 'UngVien' }
];

export const industries = [
  { id: 1, name: 'IT - Phần mềm', description: 'Phát triển phần mềm, ứng dụng, hệ thống...' },
  { id: 2, name: 'IT - Phần cứng / Mạng', description: 'Quản trị mạng, DevOps, System Admin...' },
  { id: 3, name: 'Marketing / PR', description: 'Digital Marketing, PR, Thương hiệu...' },
  { id: 4, name: 'Thiết kế / Mỹ thuật', description: 'UI/UX Design, Đồ họa, Video Editor...' },
  { id: 5, name: 'Kế toán / Kiểm toán', description: 'Kế toán tổng hợp, Kiểm toán viên...' },
  { id: 6, name: 'Tài chính / Ngân hàng', description: 'Chuyên viên tài chính, Giao dịch viên...' },
  { id: 7, name: 'Nhân sự (HR)', description: 'Tuyển dụng, Đào tạo, C&B...' }
];

export const locations = [
  { id: 1, name: 'Hà Nội' },
  { id: 2, name: 'TP.HCM' },
  { id: 3, name: 'Đà Nẵng' },
  { id: 4, name: 'Toàn quốc' }
];

export const skills = [
  { id: 1, name: 'C#', category: 'Language' },
  { id: 2, name: 'ASP.NET Core', category: 'Framework' },
  { id: 3, name: 'SQL Server', category: 'Database' },
  { id: 4, name: 'Java', category: 'Language' },
  { id: 5, name: 'Spring Boot', category: 'Framework' },
  { id: 6, name: 'ReactJS', category: 'Framework' },
  { id: 7, name: 'JavaScript', category: 'Language' },
  { id: 8, name: 'TypeScript', category: 'Language' },
  { id: 9, name: 'Python', category: 'Language' },
  { id: 10, name: 'Machine Learning', category: 'AI' },
  { id: 11, name: 'Docker', category: 'DevOps' },
  { id: 12, name: 'Kubernetes', category: 'DevOps' },
  { id: 13, name: 'AWS', category: 'Cloud' },
  { id: 14, name: 'Agile/Scrum', category: 'SoftSkill' },
  { id: 15, name: 'English', category: 'Language' },
  { id: 16, name: 'PHP', category: 'Language' },
  { id: 17, name: 'Laravel', category: 'Framework' },
  { id: 18, name: 'Golang', category: 'Language' },
  { id: 19, name: 'Ruby on Rails', category: 'Framework' },
  { id: 20, name: 'VueJS', category: 'Framework' }
];

export const companies = [
  { 
    id: 3, 
    name: 'FPT Software', 
    phone: '0901111222', 
    website: 'https://fptsoftware.com', 
    address: 'Duy Tân, Cầu Giấy, Hà Nội', 
    description: 'Công ty xuất khẩu phần mềm hàng đầu Việt Nam...', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6f9YQZ1I0v-t3zP8i_zY6N-V8u6RjXjP8wQ&s' 
  },
  { 
    id: 4, 
    name: 'VNG Corporation', 
    phone: '0903333444', 
    website: 'https://vng.com.vn', 
    address: 'VNG Campus, Quận 7, TP.HCM', 
    description: 'Kỳ lân công nghệ đầu tiên tại Việt Nam...', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR6X-N1xR_m9QY_N_E-K8z1m_x_z_X1xR_g&s' 
  },
  { 
    id: 5, 
    name: 'Viettel Group', 
    phone: '0988888999', 
    website: 'https://viettel.vn', 
    address: 'Giang Văn Minh, Ba Đình, Hà Nội', 
    description: 'Tập đoàn Viễn thông và Công nghệ hàng đầu...', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-X1N1xR_m9QY_N_E-K8z1m_x_z_X1xR_g&s' 
  },
  { 
    id: 6, 
    name: 'MoMo', 
    phone: '0912222333', 
    website: 'https://momo.vn', 
    address: 'Lầu 6, Phú Mỹ Hưng, Quận 7, TP.HCM', 
    description: 'Ví điện tử số 1 Việt Nam...', 
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3R6X-N1xR_m9QY_N_E-K8z1m_x_z_X1xR_g&s' 
  },
  {
    id: 15,
    name: 'Shopee Vietnam',
    phone: '0911223344',
    website: 'https://shopee.vn',
    address: 'Capital Place, Liễu Giai, Hà Nội',
    description: 'Nền tảng thương mại điện tử lớn nhất...',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4R6X-N1xR_m9QY_N_E-K8z1m_x_z_X1xR_g&s'
  },
  {
    id: 16,
    name: 'Tiki',
    phone: '0922334455',
    website: 'https://tiki.vn',
    address: 'Phổ Quang, Tân Bình, TP.HCM',
    description: 'Sàn thương mại điện tử uy tín...',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5R6X-N1xR_m9QY_N_E-K8z1m_x_z_X1xR_g&s'
  },
  {
    id: 17,
    name: 'VNPay',
    phone: '0933445566',
    website: 'https://vnpay.vn',
    address: 'Láng Hạ, Đống Đa, Hà Nội',
    description: 'Giải pháp thanh toán điện tử...',
    logo: null
  }
];

export const jobs = [
  {
    id: 1, companyId: 3, industryId: 1, title: 'Senior .NET Developer', department: 'FSU1', locationId: 1, location: 'Hà Nội', address: 'Duy Tân, Cầu Giấy, Hà Nội',
    type: 'FullTime', minSalary: 30000000, maxSalary: 50000000,
    description: 'Phát triển core banking...', requirements: 'Ít nhất 4 năm C#, ASP.NET Core',
    benefits: 'Lương tháng 13, BHYT', requiredSkills: [1, 2, 3],
    status: 'DangMo', deadline: '2026-12-31', 
    totalPositions: 5, appliedCount: 2
  },
  {
    id: 2, companyId: 4, industryId: 1, title: 'Frontend ReactJS (Middle)', department: 'ZaloPay', locationId: 2, location: 'TP.HCM', address: 'Quận 7, TP.HCM',
    type: 'FullTime', minSalary: 20000000, maxSalary: 35000000,
    description: 'Làm UI/UX cho ví điện tử...', requirements: 'Tối thiểu 2 năm ReactJS, Redux, TS',
    benefits: 'Ăn trưa miễn phí', requiredSkills: [6, 7],
    status: 'DangMo', deadline: '2026-11-30',
    totalPositions: 3, appliedCount: 2
  },
  {
    id: 3, companyId: 5, industryId: 1, title: 'Java Backend Engineer', department: 'Viettel Digital', locationId: 1, location: 'Hà Nội', address: 'Keangnam, Nam Từ Liêm, Hà Nội',
    type: 'FullTime', minSalary: 25000000, maxSalary: 45000000,
    description: 'Xây dựng hệ thống High availability', requirements: 'Có kinh nghiệm Spring Boot, Microservices',
    benefits: 'Thưởng dự án', requiredSkills: [4, 5],
    status: 'DangMo', deadline: '2026-10-15',
    totalPositions: 10, appliedCount: 2
  },
  {
    id: 4, companyId: 6, industryId: 1, title: 'AI / Machine Learning Engineer', department: 'Data Team', locationId: 2, location: 'TP.HCM', address: 'Quận 1, TP.HCM',
    type: 'FullTime', minSalary: 40000000, maxSalary: 70000000,
    description: 'Xây dựng model recommend...', requirements: 'Thành thạo Python, Tensorflow/PyTorch',
    benefits: 'Cấp Macbook Pro', requiredSkills: [9, 10],
    status: 'DangMo', deadline: '2026-06-01',
    totalPositions: 2, appliedCount: 1
  },
  {
    id: 5, companyId: 3, industryId: 1, title: 'Fresher .NET', department: 'FSU2', locationId: 3, location: 'Đà Nẵng', address: 'Hải Châu, Đà Nẵng',
    type: 'Intern', minSalary: 5000000, maxSalary: 10000000,
    description: 'Đào tạo từ đầu', requirements: 'Biết cơ bản C#',
    benefits: 'Được mentor kèm cặp', requiredSkills: [1],
    status: 'DaDong', deadline: '2026-03-30',
    totalPositions: 10, appliedCount: 0
  },
  {
    id: 7, companyId: 15, industryId: 1, title: 'Senior Golang Developer', department: 'Backend', locationId: 2, location: 'TP.HCM', address: 'Quận 1, TP.HCM',
    type: 'FullTime', minSalary: 40000000, maxSalary: 60000000,
    description: 'Xây dựng core system e-commerce', requirements: '3+ năm Golang, Microservices, Redis',
    benefits: 'Thưởng cổ phiếu', requiredSkills: [18, 29],
    status: 'DangMo', deadline: '2026-12-31',
    totalPositions: 2, appliedCount: 2
  },
  {
    id: 14, companyId: 16, industryId: 1, title: 'VueJS Frontend Dev', department: 'Storefront', locationId: 4, location: 'Toàn quốc', address: 'Làm việc từ xa',
    type: 'Online', minSalary: 18000000, maxSalary: 30000000,
    description: 'Phát triển trang bán hàng', requirements: 'Kinh nghiệm VueJS 2 năm+',
    benefits: 'Remote linh hoạt', requiredSkills: [20, 7],
    status: 'DangMo', deadline: '2026-11-11',
    totalPositions: 3, appliedCount: 2
  },
  {
    id: 13, companyId: 15, industryId: 4, title: 'UI/UX Designer', department: 'Design Team', locationId: 2, location: 'TP.HCM', address: 'Quận 1, TP.HCM',
    type: 'FullTime', minSalary: 15000000, maxSalary: 25000000,
    description: 'Thiết kế giao diện App, Web', requirements: 'Thành thạo Figma, tư duy UX tốt',
    benefits: 'Cấp Mac Studio', requiredSkills: [],
    status: 'DangMo', deadline: '2026-10-10',
    totalPositions: 1, appliedCount: 1
  }
];

// =========================================================
// MOCK AUTH - TÀI KHOẢN DEMO
// Khớp với bảng TaiKhoan + UngVien + NhaTuyenDung
// ID 7 = Nguyễn Văn A (ứng viên demo)
// ID 15 = Shopee Vietnam (nhà tuyển dụng demo)
// =========================================================
export const mockUsers = [
  {
    maTaiKhoan: 7,
    email: 'nguyenvana@gmail.com',
    matKhau: 'demo123', // plain text cho demo
    maVaiTro: 3,
    vaiTro: 'UngVien',
    ungVien: {
      maUngVien: 7,
      hoTen: 'Nguyễn Văn A',
      soDienThoai: '0971112223',
      linkLinkedIn: 'linkedin.com/in/nguyenvana',
      chucDanhHienTai: 'Backend .NET Developer',
      soNamKinhNghiem: 4,
      anhDaiDien: null,
      gioiThieu: 'Tôi là một lập trình viên .NET với 4 năm kinh nghiệm trong phát triển các hệ thống enterprise. Tôi có kinh nghiệm làm việc với C#, ASP.NET Core và SQL Server.',
    }
  },
  {
    maTaiKhoan: 15,
    email: 'hr@shopee.vn',
    matKhau: 'demo123',
    maVaiTro: 2,
    vaiTro: 'NhaTuyenDung',
    nhaTuyenDung: {
      maNhaTuyenDung: 15,
      tenCongTy: 'Shopee Vietnam',
      soDienThoai: '0911223344',
      website: 'https://shopee.vn',
      diaChi: 'Capital Place, Liễu Giai, Hà Nội',
      moTa: 'Nền tảng thương mại điện tử lớn nhất...',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4R6X-N1xR_m9QY_N_E-K8z1m_x_z_X1xR_g&s'
    }
  }
];

// =========================================================
// MOCK ĐƠN ỨNG TUYỂN (DonUngTuyen) - của UV ID=7
// Khớp với bảng DonUngTuyen
// =========================================================
export const mockApplications = [
  {
    maDon: 1,
    maTin: 1,
    maUngVien: 7,
    tenFile: 'NguyenVanA_NET_CV.pdf',
    duongDanFile: '/cvs/nguyenvana_1.pdf',
    dinhDang: 'PDF',
    trangThai: 'TrungTuyen',
    ngayNop: '2024-04-10T08:30:00',
    ngayCapNhat: '2024-04-15T10:00:00',
  },
  {
    maDon: 2,
    maTin: 1,
    maUngVien: 7,
    tenFile: 'NguyenVanA_ReactJS.pdf',
    duongDanFile: '/cvs/nguyenvana_react.pdf',
    dinhDang: 'PDF',
    trangThai: 'AIDaLoc',
    ngayNop: '2024-05-01T09:00:00',
    ngayCapNhat: '2024-05-01T09:05:00',
  },
  {
    maDon: 3,
    maTin: 3,
    maUngVien: 7,
    tenFile: 'NguyenVanA_Java.pdf',
    duongDanFile: '/cvs/nguyenvana_java.pdf',
    dinhDang: 'PDF',
    trangThai: 'TuChoi',
    ngayNop: '2024-04-20T14:00:00',
    ngayCapNhat: '2024-04-22T10:00:00',
  },
  {
    maDon: 4,
    maTin: 4,
    maUngVien: 7,
    tenFile: 'NguyenVanA_AI.pdf',
    duongDanFile: '/cvs/nguyenvana_ai.pdf',
    dinhDang: 'PDF',
    trangThai: 'DaNop',
    ngayNop: '2024-06-01T11:00:00',
    ngayCapNhat: '2024-06-01T11:00:00',
  },
];

// =========================================================
// MOCK KẾT QUẢ AI (KetQua_AI) - cho đơn của UV 7
// =========================================================
export const mockAIReviews = [
  {
    maKetQua: 1,
    maDon: 1,
    trangThaiXuLy: 'HoanThanh',
    diemPhuHop: 96.50,
    tomTatUngVien: 'Ứng viên hoàn hảo cho vị trí Senior .NET. Có đủ 4 năm kinh nghiệm với C#, ASP.NET Core và SQL Server.',
    kyNangPhuHop: ['C#', 'ASP.NET Core', 'SQL Server'],
    kyNangThieu: [],
    diemManh: 'Nền tảng .NET vững vàng, kinh nghiệm làm việc với hệ thống enterprise lớn.',
    diemYeu: 'Chưa thấy bằng cấp tiếng Anh trong CV.',
    deXuat: 'TuyenNhanh',
    ngayPhanTich: '2024-04-10T08:31:00',
  },
  {
    maKetQua: 2,
    maDon: 2,
    trangThaiXuLy: 'HoanThanh',
    diemPhuHop: 72.00,
    tomTatUngVien: 'Ứng viên Backend .NET, kỹ năng ReactJS chưa đủ sâu cho vị trí Middle Frontend.',
    kyNangPhuHop: ['JavaScript'],
    kyNangThieu: ['ReactJS', 'TypeScript'],
    diemManh: 'Có kiến thức JavaScript nền tảng tốt.',
    diemYeu: 'Thiếu kinh nghiệm thực chiến với ReactJS và TypeScript theo yêu cầu JD.',
    deXuat: 'CoTheCanNhac',
    ngayPhanTich: '2024-05-01T09:03:00',
  },
  {
    maKetQua: 3,
    maDon: 3,
    trangThaiXuLy: 'HoanThanh',
    diemPhuHop: 25.00,
    tomTatUngVien: 'Ứng viên .NET Backend, không có kinh nghiệm với Java/Spring Boot.',
    kyNangPhuHop: [],
    kyNangThieu: ['Java', 'Spring Boot'],
    diemManh: 'Kinh nghiệm làm backend lâu năm.',
    diemYeu: 'Hoàn toàn không có kinh nghiệm Java và Spring Boot theo yêu cầu JD.',
    deXuat: 'LoaiBo',
    ngayPhanTich: '2024-04-22T10:02:00',
  },
  {
    maKetQua: 4,
    maDon: 4,
    trangThaiXuLy: 'DangXuLy',
    diemPhuHop: null,
    tomTatUngVien: null,
    kyNangPhuHop: [],
    kyNangThieu: [],
    diemManh: null,
    diemYeu: null,
    deXuat: null,
    ngayPhanTich: '2024-06-01T11:01:00',
  },
];

// =========================================================
// MOCK LỊCH PHỎNG VẤN (LichHenPhongVan) - liên quan đến đơn của UV 7
// =========================================================
export const mockInterviews = [
  {
    maLichHen: 1,
    maDon: 1,
    ngayPhongVan: '2026-11-15',
    gioPhongVan: '09:00',
    diaDiem: 'Văn phòng FPT, Duy Tân, Hà Nội',
    linkHop: null,
    hinhThuc: 'Offline',
    ghiChu: 'Phỏng vấn vòng 2 với Tech Lead và HR. Mang theo CMND và bằng cấp gốc.',
    trangThai: 'DaXacNhan',
    ngayTao: '2024-04-12T09:00:00',
  },
  {
    maLichHen: 2,
    maDon: 2,
    ngayPhongVan: '2026-12-05',
    gioPhongVan: '14:00',
    diaDiem: null,
    linkHop: 'https://meet.google.com/abc-xyz-123',
    hinhThuc: 'Online',
    ghiChu: 'Phỏng vấn kỹ thuật trực tuyến với Engineering Manager.',
    trangThai: 'ChoXacNhan',
    ngayTao: '2024-05-10T10:00:00',
  },
];

// =========================================================
// QUERY HELPERS
// =========================================================
export const getCompanyById = (id) => companies.find(c => c.id === parseInt(id));
export const getIndustryById = (id) => industries.find(i => i.id === parseInt(id));

export const getJobById = (id) => {
  const job = jobs.find(j => j.id === parseInt(id));
  if (!job) return null;
  const company = getCompanyById(job.companyId);
  const industry = getIndustryById(job.industryId);
  const jobSkills = job.requiredSkills.map(skillId => skills.find(s => s.id === skillId)).filter(Boolean);
  return { ...job, company, industry, skills: jobSkills };
};

export const getJobs = () => jobs.map(job => {
  const company = getCompanyById(job.companyId);
  const industry = getIndustryById(job.industryId);
  const jobSkills = job.requiredSkills.map(skillId => skills.find(s => s.id === skillId)).filter(Boolean);
  return { ...job, company, industry, skills: jobSkills };
});

// Lấy đơn ứng tuyển kèm thông tin job + AI review cho UV 7
export const getMyApplications = () => mockApplications.map(app => {
  const job = getJobById(app.maTin);
  const aiReview = mockAIReviews.find(r => r.maDon === app.maDon) || null;
  return { ...app, job, aiReview };
});

// Lấy lịch phỏng vấn kèm thông tin đơn + job
export const getMyInterviews = () => mockInterviews.map(iv => {
  const app = mockApplications.find(a => a.maDon === iv.maDon);
  const job = app ? getJobById(app.maTin) : null;
  return { ...iv, job };
});
