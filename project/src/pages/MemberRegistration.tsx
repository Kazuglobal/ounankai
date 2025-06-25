import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Briefcase, GraduationCap, FileText, Send } from 'lucide-react';

const MemberRegistration: React.FC = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    lastNameKana: '',
    firstNameKana: '',
    graduationYear: '',
    classNumber: '',
    email: '',
    phone: '',
    address: '',
    currentJob: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // フォーム送信のシミュレーション
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              登録申請を受け付けました
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              ご登録いただきありがとうございます。<br />
              事務局にて内容を確認の上、1週間以内にご連絡いたします。<br />
              ご不明な点がございましたら、お気軽にお問い合わせください。
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  lastName: '',
                  firstName: '',
                  lastNameKana: '',
                  firstNameKana: '',
                  graduationYear: '',
                  classNumber: '',
                  email: '',
                  phone: '',
                  address: '',
                  currentJob: '',
                  company: '',
                  message: ''
                });
              }}
              className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              新しい登録を行う
            </button>
          </div>
        </div>
      </div>
    );
  }

  const graduationYears = Array.from({ length: 50 }, (_, i) => {
    const year = new Date().getFullYear() - i;
    return year.toString();
  });

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            メンバー登録
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            奥南会メンバーとして登録し、同窓生ネットワークに参加しませんか
          </p>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
            <h2 className="text-2xl font-bold text-white">
              会員登録フォーム
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 姓 */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  姓 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="山田"
                  />
                </div>
              </div>

              {/* 名 */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  名 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="太郎"
                  />
                </div>
              </div>

              {/* 姓（カナ） */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  姓（カナ） <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastNameKana"
                  value={formData.lastNameKana}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ヤマダ"
                />
              </div>

              {/* 名（カナ） */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  名（カナ） <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstNameKana"
                  value={formData.firstNameKana}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="タロウ"
                />
              </div>

              {/* 卒業年 */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  卒業年 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <select
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">卒業年を選択</option>
                    {graduationYears.map(year => (
                      <option key={year} value={year}>{year}年</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* クラス */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  クラス
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="classNumber"
                    value={formData.classNumber}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="1組"
                  />
                </div>
              </div>

              {/* メールアドレス */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>

              {/* 電話番号 */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  電話番号
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="090-1234-5678"
                  />
                </div>
              </div>
            </div>

            {/* 住所 */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                現住所
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="都道府県市区町村（例：青森県八戸市）"
                />
              </div>
            </div>

            {/* 現在のお仕事 */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                現在のお仕事
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="currentJob"
                  value={formData.currentJob}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="職種（例：営業、教師、エンジニア）"
                />
              </div>
            </div>

            {/* 勤務先 */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                勤務先・所属
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="会社名・団体名"
                />
              </div>
            </div>

            {/* メッセージ */}
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                メッセージ・近況報告
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="同窓生へのメッセージや近況をお聞かせください（任意）"
                />
              </div>
            </div>

            {/* 注意事項 */}
            <div className="mt-8 p-6 bg-blue-50 rounded-2xl">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">ご登録にあたって</h3>
              <ul className="text-sm text-blue-800 space-y-2">
                <li>• 登録いただいた情報は、同窓会活動の目的でのみ使用いたします</li>
                <li>• 事務局にて内容を確認後、1週間以内にご連絡いたします</li>
                <li>• 会費は5,000円（終身会費）となります</li>
                <li>• ご不明な点がございましたら、事務局までお問い合わせください</li>
              </ul>
            </div>

            {/* 送信ボタン */}
            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    送信中...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    登録申請を送信
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MemberRegistration; 