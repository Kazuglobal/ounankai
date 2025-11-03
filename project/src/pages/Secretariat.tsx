import React from 'react';
import { Users, Mail, Phone, MapPin } from 'lucide-react';

const Secretariat: React.FC = () => {
  const secretariatMembers = [
    { role: '会長', name: '石川 聖' },
    { role: '事務局長', name: '菅原 一彦' },
    { role: '体育後援会理事長', name: '大坪 晴彦' },
    { role: '事務局次長', name: '角 清一' },
    { role: '事務局次長', name: '石川 一聖' },
    { role: '', name: '水澤 修' },
    { role: '', name: '中島 将太' },
    { role: '', name: '小野澤 義巧' },
    { role: '', name: '澤瀬 修' },
    { role: '', name: '小原 崇寛' },
    { role: '', name: '小野寺 優介' },
    { role: '', name: '村田 和夫' },
    { role: '', name: '吉田 大地' },
    { role: '', name: '箱石 芳美' },
    { role: '', name: '中村 文枝' },
    { role: '', name: '舘澤 忠則' },
    { role: '', name: '田村 和夫' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="px-4 py-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">事務局</h1>
            <p className="text-sm text-gray-600">盛工同窓会事務局のご紹介</p>
          </div>

          {/* 事務局だより */}
          <section className="mb-8">
            <div className="bg-white rounded-2xl shadow-md p-5">
              <h2 className="text-lg font-bold text-morioka-700 mb-4">事務局だより</h2>

              <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                <p>
                  総会では5年ぶりとなる懇親会を無事開催することができました。また、各支部においてもコロナ禍前と同様に総会・懇親会が開催され、先輩方の熱い思いに触発されたところです。
                </p>

                <p>
                  コロナ禍での自粛生活の間に社会情勢が大きく変化し、その働き方に大きな変化が進みより一層のデジタル化が図られようとしています。便利な反面、人と人との繋がりが希薄なものに変化してきている様に感じます。盛工同窓会には、横の繋がりをはじめ、縦の繋がり・職域を超えた交流などの機会があります。
                </p>

                <p>
                  他業種との交流等を通し専門分野の力を結集させ、より良い社会へと繋がる機会としていただけると幸いです。
                </p>

                <p>
                  同窓生の皆様には日頃よりご理解ご協力を頂き、事務局一同、心から感謝申し上げると共に、皆様のご健勝・活躍を祈念いたしております。
                </p>
              </div>
            </div>
          </section>

          {/* 令和六年度盛工同窓会事務局 */}
          <section className="mb-8">
            <div className="bg-white rounded-2xl shadow-md p-5">
              <h2 className="text-lg font-bold text-morioka-700 mb-4">令和六年度盛工同窓会事務局</h2>

              <div className="space-y-3">
                {secretariatMembers.map((member, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 pb-3 ${
                      index < secretariatMembers.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    <Users className="h-5 w-5 text-morioka-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      {member.role && (
                        <p className="text-xs font-semibold text-morioka-600 mb-1">
                          {member.role}
                        </p>
                      )}
                      <p className="text-sm font-medium text-gray-900">{member.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <div className="bg-white rounded-2xl shadow-md p-5">
              <h2 className="text-lg font-bold text-morioka-700 mb-4">お問い合わせ</h2>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-morioka-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">所在地</p>
                    <p className="text-sm text-gray-900">〒020-0841 岩手県盛岡市羽場１８地割１１−１</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-morioka-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">電話</p>
                    <p className="text-sm text-gray-900">019-638-3141</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-morioka-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-1">メール</p>
                    <p className="text-sm text-gray-900">info@morioka-ths-alumni.jp</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">事務局</h1>
            <p className="text-lg text-gray-600">盛工同窓会事務局のご紹介</p>
          </div>

          {/* 事務局だより */}
          <section className="mb-12">
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-morioka-700 mb-6">事務局だより</h2>

              <div className="space-y-5 text-base text-gray-700 leading-relaxed">
                <p>
                  総会では5年ぶりとなる懇親会を無事開催することができました。また、各支部においてもコロナ禍前と同様に総会・懇親会が開催され、先輩方の熱い思いに触発されたところです。
                </p>

                <p>
                  コロナ禍での自粛生活の間に社会情勢が大きく変化し、その働き方に大きな変化が進みより一層のデジタル化が図られようとしています。便利な反面、人と人との繋がりが希薄なものに変化してきている様に感じます。盛工同窓会には、横の繋がりをはじめ、縦の繋がり・職域を超えた交流などの機会があります。
                </p>

                <p>
                  他業種との交流等を通し専門分野の力を結集させ、より良い社会へと繋がる機会としていただけると幸いです。
                </p>

                <p>
                  同窓生の皆様には日頃よりご理解ご協力を頂き、事務局一同、心から感謝申し上げると共に、皆様のご健勝・活躍を祈念いたしております。
                </p>
              </div>
            </div>
          </section>

          {/* 令和六年度盛工同窓会事務局 */}
          <section className="mb-12">
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-morioka-700 mb-6">令和六年度盛工同窓会事務局</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {secretariatMembers.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <Users className="h-6 w-6 text-morioka-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      {member.role && (
                        <p className="text-sm font-semibold text-morioka-600 mb-1">
                          {member.role}
                        </p>
                      )}
                      <p className="text-base font-medium text-gray-900">{member.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-morioka-700 mb-6 text-center">お問い合わせ</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 bg-morioka-100 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-morioka-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">所在地</p>
                  <p className="text-base text-gray-900">〒020-0841<br />岩手県盛岡市羽場１８地割１１−１</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 bg-morioka-100 rounded-full flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-morioka-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">電話</p>
                  <p className="text-base text-gray-900">019-638-3141</p>
                </div>

                <div className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 bg-morioka-100 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-morioka-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">メール</p>
                  <p className="text-base text-gray-900">info@morioka-ths-alumni.jp</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Secretariat;
