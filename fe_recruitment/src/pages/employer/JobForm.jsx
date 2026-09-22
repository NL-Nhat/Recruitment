import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Save, ArrowLeft } from 'lucide-react';
import { industries, locations } from '../../mock/mockData';

const JobForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  const [formData, setFormData] = useState({
    title: '',
    department: '',
    industryId: '',
    locationId: '',
    address: '',
    type: 'FullTime',
    minSalary: '',
    maxSalary: '',
    description: '',
    requirements: '',
    benefits: '',
    totalPositions: 1,
    deadline: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Lưu tin tuyển dụng (Mock)');
    navigate('/employer/jobs');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/employer/jobs" className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-bold text-slate-800">
          {isEdit ? 'Cập nhật tin tuyển dụng' : 'Thêm tin tuyển dụng mới'}
        </h1>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Thông tin chung */}
          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">Thông tin chung</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Tiêu đề tin <span className="text-red-500">*</span></label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="VD: Senior Golang Developer" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Phòng ban</label>
                <input type="text" name="department" value={formData.department} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="VD: Khối Kỹ thuật" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Ngành nghề <span className="text-red-500">*</span></label>
                <select name="industryId" value={formData.industryId} onChange={handleChange} required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors">
                  <option value="">-- Chọn ngành nghề --</option>
                  {industries.map(ind => (
                    <option key={ind.id} value={ind.id}>{ind.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Tỉnh/Thành phố <span className="text-red-500">*</span></label>
                <select name="locationId" value={formData.locationId} onChange={handleChange} required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors">
                  <option value="">-- Chọn thành phố --</option>
                  {locations.map(loc => (
                    <option key={loc.id} value={loc.id}>{loc.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Địa chỉ cụ thể <span className="text-red-500">*</span></label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="VD: Số 1 Đại Cồ Việt, Hai Bà Trưng" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Hình thức làm việc <span className="text-red-500">*</span></label>
                <select name="type" value={formData.type} onChange={handleChange} required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors">
                  <option value="FullTime">Toàn thời gian (FullTime)</option>
                  <option value="PartTime">Bán thời gian (PartTime)</option>
                  <option value="Online">Từ xa (Remote/Online)</option>
                  <option value="Intern">Thực tập (Intern)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Số lượng cần tuyển <span className="text-red-500">*</span></label>
                <input type="number" name="totalPositions" min="1" value={formData.totalPositions} onChange={handleChange} required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="VD: 5" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Hạn nộp hồ sơ <span className="text-red-500">*</span></label>
                <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} required className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Mức lương tối thiểu (VNĐ)</label>
                <input type="number" name="minSalary" value={formData.minSalary} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="VD: 10000000" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Mức lương tối đa (VNĐ)</label>
                <input type="number" name="maxSalary" value={formData.maxSalary} onChange={handleChange} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder="VD: 30000000" />
              </div>
            </div>
          </div>

          {/* Chi tiết công việc */}
          <div>
            <h2 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">Chi tiết công việc</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Mô tả công việc <span className="text-red-500">*</span></label>
                <textarea name="description" value={formData.description} onChange={handleChange} required rows={4} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Yêu cầu công việc <span className="text-red-500">*</span></label>
                <textarea name="requirements" value={formData.requirements} onChange={handleChange} required rows={4} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Quyền lợi <span className="text-red-500">*</span></label>
                <textarea name="benefits" value={formData.benefits} onChange={handleChange} required rows={4} className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"></textarea>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
            <Link to="/employer/jobs" className="btn btn-outline px-6">Hủy</Link>
            <button type="submit" className="btn btn-primary px-8 flex items-center gap-2">
              <Save size={18} /> Lưu tin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
