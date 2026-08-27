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
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5R6X-N1xR_m9QY_N_E-K8z1m_x_z_X1xR_g&s'
  }
];

export const jobs = [
  {
    id: 1, companyId: 3, industryId: 1, title: 'Senior .NET Developer', department: 'FSU1', location: 'Hà Nội',
    type: 'FullTime', minSalary: 30000000, maxSalary: 50000000,
    description: 'Phát triển core banking...', requirements: 'Ít nhất 4 năm C#, ASP.NET Core',
    benefits: 'Lương tháng 13, BHYT', requiredSkills: [1, 2, 3],
    status: 'DangMo', deadline: '2026-12-31', 
    totalPositions: 5, appliedCount: 2
  },
  {
    id: 2, companyId: 4, industryId: 1, title: 'Frontend ReactJS (Middle)', department: 'ZaloPay', location: 'TP.HCM',
    type: 'FullTime', minSalary: 20000000, maxSalary: 35000000,
    description: 'Làm UI/UX cho ví điện tử...', requirements: 'Tối thiểu 2 năm ReactJS, Redux, TS',
    benefits: 'Ăn trưa miễn phí', requiredSkills: [6, 7],
    status: 'DangMo', deadline: '2026-11-30',
    totalPositions: 3, appliedCount: 2
  },
  {
    id: 3, companyId: 5, industryId: 1, title: 'Java Backend Engineer', department: 'Viettel Digital', location: 'Hà Nội',
    type: 'FullTime', minSalary: 25000000, maxSalary: 45000000,
    description: 'Xây dựng hệ thống High availability', requirements: 'Có kinh nghiệm Spring Boot, Microservices',
    benefits: 'Thưởng dự án', requiredSkills: [4, 5],
    status: 'DangMo', deadline: '2026-10-15',
    totalPositions: 10, appliedCount: 2
  },
  {
    id: 4, companyId: 6, industryId: 1, title: 'AI / Machine Learning Engineer', department: 'Data Team', location: 'TP.HCM',
    type: 'FullTime', minSalary: 40000000, maxSalary: 70000000,
    description: 'Xây dựng model recommend...', requirements: 'Thành thạo Python, Tensorflow/PyTorch',
    benefits: 'Cấp Macbook Pro', requiredSkills: [9, 10],
    status: 'DangMo', deadline: '2026-06-01',
    totalPositions: 2, appliedCount: 1
  },
  {
    id: 5, companyId: 3, industryId: 1, title: 'Fresher .NET', department: 'FSU2', location: 'Đà Nẵng',
    type: 'Intern', minSalary: 5000000, maxSalary: 10000000,
    description: 'Đào tạo từ đầu', requirements: 'Biết cơ bản C#',
    benefits: 'Được mentor kèm cặp', requiredSkills: [1],
    status: 'DaDong', deadline: '2026-03-30',
    totalPositions: 10, appliedCount: 0
  },
  {
    id: 7, companyId: 15, industryId: 1, title: 'Senior Golang Developer', department: 'Backend', location: 'TP.HCM',
    type: 'FullTime', minSalary: 40000000, maxSalary: 60000000,
    description: 'Xây dựng core system e-commerce', requirements: '3+ năm Golang, Microservices, Redis',
    benefits: 'Thưởng cổ phiếu', requiredSkills: [18, 29],
    status: 'DangMo', deadline: '2026-12-31',
    totalPositions: 2, appliedCount: 2
  },
  {
    id: 14, companyId: 16, industryId: 1, title: 'VueJS Frontend Dev', department: 'Storefront', location: 'Toàn quốc',
    type: 'Online', minSalary: 18000000, maxSalary: 30000000,
    description: 'Phát triển trang bán hàng', requirements: 'Kinh nghiệm VueJS 2 năm+',
    benefits: 'Remote linh hoạt', requiredSkills: [20, 7],
    status: 'DangMo', deadline: '2026-11-11',
    totalPositions: 3, appliedCount: 2
  },
  {
    id: 13, companyId: 15, industryId: 4, title: 'UI/UX Designer', department: 'Design Team', location: 'TP.HCM',
    type: 'FullTime', minSalary: 15000000, maxSalary: 25000000,
    description: 'Thiết kế giao diện App, Web', requirements: 'Thành thạo Figma, tư duy UX tốt',
    benefits: 'Cấp Mac Studio', requiredSkills: [],
    status: 'DangMo', deadline: '2026-10-10',
    totalPositions: 1, appliedCount: 1
  }
];

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
