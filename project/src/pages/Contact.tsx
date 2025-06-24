import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/emailjs';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        to_email: 'ounankai@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        graduation_year: formData.graduationYear,
        subject: formData.subject,
        category: formData.category,
        message: formData.message,
      };

      // デモモード: 実際のEmailJS設定がない場合のフォールバック
      if (EMAIL_CONFIG.PUBLIC_KEY === 'demo_public_key_placeholder') {
        console.log('🎯 デモモード: メール送信内容', templateParams);
        // デモ用の遅延
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('✅ デモ: ounankai@gmail.com への送信完了');
      } else {
        // 実際のEmailJS送信
        await emailjs.send(
          EMAIL_CONFIG.SERVICE_ID,
          EMAIL_CONFIG.TEMPLATE_ID,
          templateParams,
          EMAIL_CONFIG.PUBLIC_KEY
        );
      }
      
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        graduationYear: '',
        subject: '',
        category: 'general',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'メール',
      details: 'ounankai@gmail.com',
      description: '同窓会へのお問い合わせ',
      action: 'mailto:ounankai@gmail.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'ご住所',
      details: '〒031-0071',
      description: '青森県八戸市沼館4-7-112\n青森県立八戸西高等学校同窓会奥南会',
      action: 'https://maps.google.com'
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
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
                  {info.title === 'ご住所' ? '地図を見る' : 'お問い合わせ'}
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

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-2xl">
                  <p className="text-green-800 font-medium">
                    メッセージを送信いたしました。ありがとうございます！
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
                  <p className="text-red-800 font-medium">
                    送信に失敗しました。時間をおいて再度お試しください。
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-xl ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
                } text-white`}
              >
                {isSubmitting ? '送信中...' : '送信'}
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
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

      </div>
    </div>
  );
};

export default Contact;