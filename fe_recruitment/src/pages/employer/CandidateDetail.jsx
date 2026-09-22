import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle, XCircle, BrainCircuit } from 'lucide-react';

const CandidateDetail = () => {
  const { id } = useParams();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/employer/candidates" className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-2xl font-bold text-slate-800">Chi tiết ứng viên</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile */}
        <div className="md:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-3xl mx-auto mb-4">
              UV
            </div>
            <h2 className="text-xl font-bold text-slate-800">Nguyễn Văn A</h2>
            <p className="text-sm text-slate-500 mb-4">nguyenvana@gmail.com</p>
            <div className="flex justify-center gap-2">
              <button className="btn btn-primary px-4 py-2 text-sm flex items-center gap-2">
                <CheckCircle size={16} /> Duyệt
              </button>
              <button className="btn btn-outline border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 px-4 py-2 text-sm flex items-center gap-2">
                <XCircle size={16} /> Từ chối
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            <h3 className="font-bold text-slate-800 mb-3">Thông tin hồ sơ</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><span className="font-medium text-slate-700">Kinh nghiệm:</span> 4 năm</li>
              <li><span className="font-medium text-slate-700">Vị trí:</span> Backend Developer</li>
              <li><span className="font-medium text-slate-700">Link CV:</span> <a href="#" className="text-primary hover:underline">nguyenvana_cv.pdf</a></li>
            </ul>
          </div>
        </div>

        {/* AI Analysis */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none -z-10"></div>
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="p-2 bg-primary/10 text-primary rounded-lg">
                <BrainCircuit size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800">Phân tích CV từ AI</h3>
                <p className="text-sm text-slate-500">Đánh giá tự động mức độ phù hợp với JD</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center">
                  <div className="text-2xl font-bold text-green-600">95%</div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Mức độ phù hợp cực kỳ cao</h4>
                  <p className="text-slate-600 text-sm">Ứng viên đáp ứng hầu hết các tiêu chí quan trọng trong JD.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                  <h4 className="font-bold text-green-800 text-sm mb-2">Kỹ năng đáp ứng</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white text-green-700 text-xs rounded-md border border-green-200">Golang</span>
                    <span className="px-2 py-1 bg-white text-green-700 text-xs rounded-md border border-green-200">Redis</span>
                    <span className="px-2 py-1 bg-white text-green-700 text-xs rounded-md border border-green-200">Docker</span>
                  </div>
                </div>
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                  <h4 className="font-bold text-amber-800 text-sm mb-2">Kỹ năng còn thiếu</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white text-amber-700 text-xs rounded-md border border-amber-200">AWS</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-800 text-sm mb-2">Nhận xét chi tiết:</h4>
                <p className="text-slate-600 text-sm bg-slate-50 p-4 rounded-lg border border-slate-100">
                  Ứng viên hoàn hảo cho vị trí Senior Golang. Có đủ 4 năm kinh nghiệm. Nền tảng vững vàng, có hiểu biết sâu về hệ thống high concurrency.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-bold text-slate-800 text-sm mb-2 flex items-center gap-2">
                  Đề xuất từ AI: <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">Tuyển ngay</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetail;
