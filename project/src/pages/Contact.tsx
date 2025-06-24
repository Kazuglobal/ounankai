import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    graduationYear: '',
    subject: '',
    category: 'general',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('メッセージありがとうございます！お返事いたします。');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'メール',
      details: 'alumni@hachinohe-nishi.ed.jp',
      description: '一般的なお問い合わせ',
      action: 'mailto:alumni@hachinohe-nishi.ed.jp'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'お電話',
      details: '(555) 123-4567',
      description: '同窓会担当チームへお電話ください',
      action: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'ご来訪',
      details: '123 University Avenue',
      description: '同窓会事務局 200号室\nCity, State 12345',
      action: 'https://maps.google.com'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: '受付時間',
      details: '月曜日 〜 金曜日',
      description: '9:00 - 17:00 (EST)\n学校の祝日は休業',
      action: null
    }
  ];

  const staff = [
    {
      name: '田中 美智子',
      role: '同窓会事務局長',
      email: 'm.tanaka@hachinohe-nishi.ed.jp',
      phone: '(03) 1234-5678',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      specialties: ['戦略計画', '同窓生関係', '役員連携']
    },
    {
      name: '佐藤 健一',
      role: '同窓会イベント企画責任者',
      email: 'd.sato@hachinohe-nishi.ed.jp',
      phone: '(03) 1234-5679',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      specialties: ['イベント企画', '同窓会総会', '地域支部']
    },
    {
      name: '山田 さくら',
      role: '同窓会広報責任者',
      email: 's.yamada@hachinohe-nishi.ed.jp',
      phone: '(03) 1234-5680',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      specialties: ['会報', 'ソーシャルメディア', '同窓生名簿']
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            お問い合わせ
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            母校や同窓生とのつながりをサポートします。 ご質問やご提案がありましたら、お気軽にご連絡ください。
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-lg font-semibold text-blue-600 mb-2">{info.details}</p>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {info.description}
              </p>
              {info.action && (
                <a
                  href={info.action}
                  target={info.action.startsWith('http') ? '_blank' : undefined}
                  rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-block mt-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                >
                  {info.title === 'ご来訪' ? '地図を見る' : 'お問い合わせ'}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex items-center mb-6">
              <MessageCircle className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">メッセージを送る</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    氏名 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="氏名を入力"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="メールアドレスを入力"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="電話番号を入力"
                  />
                </div>
                <div>
                  <label htmlFor="graduationYear" className="block text-sm font-semibold text-gray-700 mb-2">
                    卒業年
                  </label>
                  <input
                    type="text"
                    id="graduationYear"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="例: 2020"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                  お問い合わせ種別
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="general">一般</option>
                  <option value="events">イベント・プログラム</option>
                  <option value="membership">会員情報</option>
                  <option value="directory">同窓生名簿</option>
                  <option value="donations">寄付</option>
                  <option value="volunteer">ボランティア</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  件名
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="件名"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  メッセージ *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="メッセージを入力してください..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-xl"
              >
                送信
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>

          {/* Staff Directory */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">スタッフ紹介</h2>
              <p className="text-gray-600 mb-8">
                同窓生コミュニティの繋がりと活性化のために尽力する献身的なスタッフをご紹介します。
              </p>

              <div className="space-y-6">
                {staff.map((member, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors duration-200">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                      <p className="text-blue-600 font-semibold text-sm mb-2">{member.role}</p>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          <a href={`mailto:${member.email}`} className="hover:text-blue-600 transition-colors duration-200">
                            {member.email}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          <a href={`tel:${member.phone}`} className="hover:text-blue-600 transition-colors duration-200">
                            {member.phone}
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">クイックリンク</h3>
              <div className="space-y-4">
                <a href="/announcements" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  <Calendar className="w-5 h-5 mr-3" />
                  <span>今後のイベント</span>
                </a>
                <a href="/alumni-profiles" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>同窓生名簿</span>
                </a>
                <a href="#" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  <MessageCircle className="w-5 h-5 mr-3" />
                  <span>よくある質問</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
            <div className="p-8 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">アクセス</h2>
              <p className="text-gray-600">
                キャンパス内の同窓会事務局をご来訪ください
              </p>
            </div>
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">地図</p>
                <p className="text-gray-500 text-sm">123 University Avenue, Suite 200</p>
                <p className="text-gray-500 text-sm">City, State 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;