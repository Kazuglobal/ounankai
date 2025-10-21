import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '../config/emailjs';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
        subject: formData.subject,
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
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const officeInfo = [
    {
      icon: MapPin,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      label: '住所',
      value: '〒039-1101\n青森県八戸市大字尻内町字中根市14'
    },
    {
      icon: Mail,
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      label: 'メールアドレス',
      value: 'ounankai@gmail.com',
      link: 'mailto:ounankai@gmail.com'
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="px-4 py-6">
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">お問い合わせ</h1>
          </div>

          {/* Office Information */}
          <section className="mb-8">
            <div className="bg-gray-100 rounded-2xl p-4">
              <h2 className="text-base font-bold text-gray-900 mb-4">同窓会事務局情報</h2>
              <div className="space-y-3">
                {officeInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-10 h-10 ${info.iconBg} rounded-lg flex items-center justify-center`}>
                        <Icon className={`h-5 w-5 ${info.iconColor}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-gray-700 mb-0.5">{info.label}</p>
                        {info.link ? (
                          <a href={info.link} className="text-sm text-blue-600 hover:text-blue-700 break-all">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-900 whitespace-pre-line">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="mb-8">
            <h2 className="text-base font-bold text-gray-900 mb-4">お問い合わせフォーム</h2>
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    お名前 *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="田中 太郎"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    件名 *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="お問い合わせの件名を入力してください"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1.5">
                    お問い合わせ内容 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="お問い合わせ内容をご記入ください"
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-xs font-medium">
                      メッセージを送信いたしました。ありがとうございます！
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-xs font-medium">
                      送信に失敗しました。時間をおいて再度お試しください。
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white`}
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">お問い合わせ</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              母校や同窓生とのつながりをサポートします。 ご質問やご提案がありましたら、お気軽にご連絡ください。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Office Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">同窓会事務局情報</h2>
              <div className="bg-gray-100 rounded-3xl p-8">
                <div className="space-y-6">
                  {officeInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 ${info.iconBg} rounded-xl flex items-center justify-center`}>
                          <Icon className={`h-6 w-6 ${info.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-gray-700 mb-1">{info.label}</p>
                          {info.link ? (
                            <a href={info.link} className="text-base text-blue-600 hover:text-blue-700">
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-base text-gray-900 whitespace-pre-line">{info.value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">お問い合わせフォーム</h2>
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      お名前 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="田中 太郎"
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      件名 *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="お問い合わせの件名を入力してください"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      お問い合わせ内容 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="お問い合わせ内容をご記入ください"
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                      <p className="text-green-800 font-medium">
                        メッセージを送信いたしました。ありがとうございます！
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-red-800 font-medium">
                        送信に失敗しました。時間をおいて再度お試しください。
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-lg font-semibold transition-all ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
                    } text-white shadow-lg`}
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? '送信中...' : '送信する'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;