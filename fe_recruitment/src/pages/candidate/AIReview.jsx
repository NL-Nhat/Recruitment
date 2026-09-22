import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getMyApplications } from '../../mock/mockData';
import { Sparkles, CheckCircle2, XCircle, ChevronRight, Activity, Zap, ShieldAlert, CheckSquare } from 'lucide-react';

const AIReview = () => {
  const location = useLocation();
  const allApps = getMyApplications().filter(a => a.aiReview); // Only apps with AI Review
  
  const [selectedAppId, setSelectedAppId] = useState(null);

  useEffect(() => {
    if (location.state?.selectedApp) {
      setSelectedAppId(location.state.selectedApp);
    } else if (allApps.length > 0 && !selectedAppId) {
      setSelectedAppId(allApps[0].maDon);
    }
  }, [location.state, allApps]);

  const selectedApp = allApps.find(a => a.maDon === selectedAppId);
  const ai = selectedApp?.aiReview;

  if (allApps.length === 0) {
    return (
      <div className="glass-panel p-12 rounded-2xl border border-border text-center max-w-3xl mx-auto">
        <Sparkles size={48} className="mx-auto text-slate-300 mb-4" />
        <h3 className="text-lg font-bold text-slate-800 mb-1">Chưa có đánh giá AI nào</h3>
        <p className="text-slate-500">Hệ thống AI chưa phân tích đơn ứng tuyển nào của bạn hoặc bạn chưa nộp đơn.</p>
      </div>
    );
  }

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600 bg-green-50 border-green-200';
    if (score >= 50) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getScoreGradient = (score) => {
    if (score >= 80) return 'from-green-400 to-green-600';
    if (score >= 50) return 'from-yellow-400 to-yellow-600';
    return 'from-red-400 to-red-600';
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Sidebar List */}
      <div className="w-full lg:w-80 shrink-0 flex flex-col gap-4">
        <h2 className="text-xl font-bold text-slate-800">Danh sách đánh giá</h2>
        <div className="flex flex-col gap-3">
          {allApps.map(app => (
            <div 
              key={app.maDon}
              onClick={() => setSelectedAppId(app.maDon)}
              className={`p-4 rounded-xl cursor-pointer border transition-all ${
                selectedAppId === app.maDon 
                  ? 'bg-blue-50/50 border-primary shadow-sm ring-1 ring-primary/20' 
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              <h4 className="font-semibold text-slate-800 line-clamp-1 mb-1">{app.job?.title}</h4>
              <p className="text-xs text-slate-500 mb-2">{app.job?.company?.name}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-muted flex items-center gap-1">
                  <Activity size={12} /> {app.aiReview?.trangThaiXuLy}
                </span>
                {app.aiReview?.diemPhuHop !== null && (
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${getScoreColor(app.aiReview.diemPhuHop)}`}>
                    {app.aiReview.diemPhuHop}%
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 glass-panel rounded-2xl border border-border shadow-sm overflow-y-auto custom-scrollbar p-6 lg:p-8">
        {selectedApp && ai ? (
          ai.trangThaiXuLy === 'DangXuLy' ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8">
              <div className="w-16 h-16 rounded-full border-4 border-slate-100 border-t-primary animate-spin mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">AI đang phân tích</h3>
              <p className="text-slate-500 max-w-md">Hệ thống đang đối chiếu CV của bạn với yêu cầu công việc. Quá trình này có thể mất vài phút.</p>
            </div>
          ) : (
            <div className="space-y-8 animate-fade-in-up">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 text-primary font-medium mb-2">
                  <Sparkles size={18} /> Phân tích AI SmartRecruit
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">
                  Đánh giá mức độ phù hợp: <span className="text-primary">{selectedApp.job?.title}</span>
                </h2>
                <p className="text-slate-600">{selectedApp.job?.company?.name}</p>
              </div>

              {/* Score & Summary */}
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="shrink-0 flex flex-col items-center justify-center">
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="64" cy="64" r="56" className="stroke-slate-200" strokeWidth="12" fill="none" />
                      <circle 
                        cx="64" cy="64" r="56" 
                        className={`stroke-current ${getScoreColor(ai.diemPhuHop).split(' ')[0]}`} 
                        strokeWidth="12" fill="none" 
                        strokeDasharray={2 * Math.PI * 56} 
                        strokeDashoffset={2 * Math.PI * 56 * (1 - ai.diemPhuHop / 100)} 
                        strokeLinecap="round"
                        style={{ transition: 'stroke-dashoffset 1s ease-out' }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-black text-slate-800">{ai.diemPhuHop}</span>
                      <span className="text-xs font-medium text-slate-500">/ 100</span>
                    </div>
                  </div>
                  <span className={`mt-4 px-4 py-1.5 rounded-full text-sm font-bold border ${getScoreColor(ai.diemPhuHop)}`}>
                    {ai.deXuat === 'TuyenNhanh' ? 'Rất phù hợp' : ai.deXuat === 'CoTheCanNhac' ? 'Có thể cân nhắc' : 'Chưa phù hợp'}
                  </span>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg font-bold text-slate-800 mb-3">Tóm tắt đánh giá</h3>
                  <p className="text-slate-700 leading-relaxed bg-white p-4 rounded-xl border border-slate-100 shadow-sm inline-block w-full">
                    {ai.tomTatUngVien}
                  </p>
                </div>
              </div>

              {/* Skills Analysis */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-green-100 p-6 rounded-2xl shadow-sm">
                  <h3 className="text-green-700 font-bold flex items-center gap-2 mb-4">
                    <CheckSquare size={20} /> Kỹ năng đáp ứng ({ai.kyNangPhuHop?.length || 0})
                  </h3>
                  {ai.kyNangPhuHop?.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {ai.kyNangPhuHop.map((skill, idx) => (
                        <span key={idx} className="bg-green-50 text-green-700 border border-green-200 px-3 py-1.5 rounded-lg text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-500 text-sm">Không tìm thấy kỹ năng phù hợp.</p>
                  )}
                </div>

                <div className="bg-white border border-red-100 p-6 rounded-2xl shadow-sm">
                  <h3 className="text-red-700 font-bold flex items-center gap-2 mb-4">
                    <ShieldAlert size={20} /> Kỹ năng còn thiếu ({ai.kyNangThieu?.length || 0})
                  </h3>
                  {ai.kyNangThieu?.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {ai.kyNangThieu.map((skill, idx) => (
                        <span key={idx} className="bg-red-50 text-red-700 border border-red-200 px-3 py-1.5 rounded-lg text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-500 text-sm">Tuyệt vời! Bạn đáp ứng đủ các kỹ năng cốt lõi.</p>
                  )}
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-slate-800 font-bold flex items-center gap-2 mb-3">
                    <Zap className="text-yellow-500" size={20} /> Điểm mạnh nổi bật
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-slate-700 leading-relaxed min-h-[100px]">
                    {ai.diemManh || 'Không có nhận xét cụ thể.'}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-slate-800 font-bold flex items-center gap-2 mb-3">
                    <Activity className="text-blue-500" size={20} /> Điểm cần cải thiện
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-slate-700 leading-relaxed min-h-[100px]">
                    {ai.diemYeu || 'Không có nhận xét cụ thể.'}
                  </div>
                </div>
              </div>

              {/* Note */}
              <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
                <Sparkles className="text-blue-500 shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-slate-600 leading-relaxed">
                  Đánh giá này được tạo tự động bởi AI SmartRecruit dựa trên đối chiếu giữa hồ sơ ứng viên và mô tả công việc. 
                  Kết quả chỉ mang tính tham khảo và hỗ trợ quyết định cho Nhà tuyển dụng.
                </p>
              </div>

            </div>
          )
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-slate-500">Vui lòng chọn một đơn ứng tuyển để xem đánh giá.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIReview;
