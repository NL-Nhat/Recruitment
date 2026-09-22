import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, CheckCircle, XCircle } from 'lucide-react';

const ManageCandidates = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-slate-800">Quản lý ứng viên</h1>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-500">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-4 rounded-tl-lg">Ứng viên</th>
                <th scope="col" className="px-6 py-4">Vị trí ứng tuyển</th>
                <th scope="col" className="px-6 py-4 text-center">Mức độ phù hợp (AI)</th>
                <th scope="col" className="px-6 py-4">Trạng thái</th>
                <th scope="col" className="px-6 py-4 rounded-tr-lg text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((item) => (
                <tr key={item} className="bg-white border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                        UV
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Nguyễn Văn A</div>
                        <div className="text-xs text-slate-500">nguyenvana@gmail.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-700">
                    Senior Golang Developer
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600 font-bold">95%</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">Chờ AI đánh giá</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link to={`/employer/candidates/${item}`} className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors" title="Xem chi tiết AI">
                        <Eye size={18} />
                      </Link>
                      <button className="p-2 text-slate-400 hover:text-green-500 hover:bg-green-50 rounded-lg transition-colors" title="Chấp nhận">
                        <CheckCircle size={18} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Từ chối">
                        <XCircle size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageCandidates;
