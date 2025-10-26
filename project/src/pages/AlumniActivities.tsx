import React from 'react';
import { Calendar, MapPin, Users, Heart, Award, Globe } from 'lucide-react';

const AlumniActivities: React.FC = () => {
  const activityReports = [
    {
      id: 1,
      type: 'general',
      title: '令和6年度盛工同窓会・体育後援会総会',
      date: '令和6年7月6日（土）',
      location: 'ホテルメトロポリタン盛岡本館',
      images: [
        '/images/alumni-sokai-2024-1.jpg',
        '/images/alumni-sokai-2024-2.jpg',
        '/images/alumni-sokai-2024-3.jpg'
      ],
      content: `同窓会長挨拶では白根会長より、前吉田会長がお亡くなりになり早いもので1年がたとうとしていること、今年の総会は5年ぶりに懇親会までの開催できたこと、コロナ禍での生活が元に戻りつつありうれしく思うことなどの話をされました。

続いて、議長に浅沼新一氏（擬宝珠会S42年卒）を選出し議事に入りました。はじめに、令和5年度事業報告並びに会計報告では、4月7日の入学式を皮切りに例年通りの事業が行われたことに加え、9月には前会長ご逝去に伴い臨時の常任委員会が行われ役員体制についての審議が行われたことなど、会計決算と併せて承認をいただきました。続いて、準会員（在校生）からの徴収金運用方法及び徴収金値下げ、これに伴う会則の一部改定についてご審議いただき原案のとおり可決されました。続いて、令和6年度事業計画（案）並びに予算（案）について審議をいただき承認をいただきました。

最後に、役員改選について審議され、原案通り可決いただきました。また、校舎移転にかかわる検討委員会が発足されたこと、今後の収入減に伴い多くの皆様から会費を頂戴したい旨、事業の縮小・整理など昨今の物価上昇を含め時代に即した形で進められるよう検討していきたいことなどお伝えしております。

5年ぶりとなった懇親会については、叙勲受章者への記念品の贈呈や、多年にわたり同窓会副会長として歴任されました金谷栄治様・体育後援会副会長渡邊力様のご退任に伴い感謝状が贈呈されました。また、来年の冬季オリンピックに向けて励んでいる吉田雪乃様にも参加いただき経過・展望等お話しいただき会の中でも激励を行ったところです。ご参加いただきました皆様ありがとうございました。

次回開催予定は、令和7年7月5日（土）※7月第1土曜日 ホテルメトロポリタン盛岡となっております。たくさんの方々のご参加お待ちしております。`
    },
    {
      id: 2,
      type: 'financial',
      title: '令和5年度 同窓会会計決算書',
      subtitle: '議題(2) 令和5年度会計決算承認について',
      date: '令和5年4月1日～令和6年3月31日',
      fiscalNote: '△は予算より決算が少ないことを示す'
    }
  ];

  // 会計データ
  const incomeData = [
    { item: '繰 越 金', budget: '2,791,583', actual: '2,791,583', diff: '0', note: '' },
    { item: '年 会 費', budget: '1,500,000', actual: '1,596,993', diff: '96,993', note: '年会費 3,000円' },
    { item: '同窓会基金', budget: '10,137,000', actual: '9,857,700', diff: '△ 279,300', note: '在校生より' },
    { item: '雑 収 入', budget: '17', actual: '70,735', diff: '70,718', note: '利息・寄付金他' }
  ];

  const expenseData = [
    { category: '事業費', item: '会報発行費', budget: '2,450,000', actual: '2,337,777', diff: '△ 112,223', note: '令和5年12月発行' },
    { category: '', item: '広報活動費', budget: '300,000', actual: '247,060', diff: '△ 52,940', note: '卒業記念品ほか' },
    { category: '体育後援費', item: '強化費', budget: '4,200,000', actual: '3,814,503', diff: '△ 385,497', note: '春夏強化費配分' },
    { category: '', item: '備品購入費', budget: '500,000', actual: '499,136', diff: '△ 864', note: '部活動備品購入' },
    { category: '', item: '特別強化補助費', budget: '700,000', actual: '663,773', diff: '△ 36,227', note: 'アーチェリー・スケート・ウエイトリフティング・レスリング' },
    { category: '', item: '部活動奨励費', budget: '500,000', actual: '325,000', diff: '△ 175,000', note: '全国大会・インターハイ・選抜等' },
    { category: '会議費', item: '役員会費', budget: '250,000', actual: '192,271', diff: '△ 57,729', note: '常任理事会・役員会経費' },
    { category: '', item: '総会費', budget: '550,000', actual: '346,875', diff: '△ 203,125', note: '総会資料等経費' },
    { category: '', item: '各科総会支援費', budget: '180,000', actual: '180,000', diff: '0', note: '各科支援費' },
    { category: '事務局費', item: '人件費', budget: '1,300,000', actual: '1,271,387', diff: '△ 28,613', note: '事務職員給与' },
    { category: '', item: '旅費', budget: '200,000', actual: '21,000', diff: '△ 179,000', note: '市内交通費' },
    { category: '', item: '印刷費', budget: '20,000', actual: '18,700', diff: '△ 1,300', note: '角2封筒印刷' },
    { category: '', item: '庶務費', budget: '50,000', actual: '50,276', diff: '276', note: '事務用品等' },
    { category: '', item: '通信費', budget: '500,000', actual: '389,764', diff: '△ 110,236', note: '会員情報管理費・切手・電話料金・コピー機リース代' },
    { category: '', item: '雑費', budget: '150,000', actual: '69,280', diff: '△ 80,720', note: '振込手数料・学事職員懇親・アルバムほか' },
    { category: '慶弔費', item: '', budget: '300,000', actual: '212,000', diff: '△ 88,000', note: '香典・御祝' },
    { category: '予備費', item: '', budget: '278,600', actual: '0', diff: '△ 278,600', note: '' },
    { category: '基金積立金', item: '', budget: '2,000,000', actual: '2,000,000', diff: '0', note: '同窓会基金会計への繰出' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: '2024年度同窓会総会',
      date: '2024年4月15日 14:00-17:00',
      location: 'カートメルホール',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=640'
    },
    {
      id: 2,
      title: '春季コンサート',
      date: '2024年5月10日',
      location: '大講堂',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=640'
    }
  ];

  const annualActivities = [
    {
      id: 1,
      icon: Users,
      title: '同窓会総会',
      description: '年次総会、役員選出、記念講演会を開催',
      frequency: '毎年4月',
      iconBg: 'bg-blue-500'
    },
    {
      id: 2,
      icon: Heart,
      title: '植国祭参加',
      description: '母校の学園祭に展示・模擬店運営',
      frequency: '毎年5月',
      iconBg: 'bg-pink-500'
    },
    {
      id: 3,
      icon: Award,
      title: '奨学金授与式',
      description: '後輩への奨学金支援活動',
      frequency: '毎年7月',
      iconBg: 'bg-amber-500'
    },
    {
      id: 4,
      icon: Globe,
      title: '海外支部訪問',
      description: '海外在住卒業生との交流会',
      frequency: '隔年開催',
      iconBg: 'bg-indigo-500'
    }
  ];

  const regionalChapters = [
    {
      id: 1,
      name: '関東支部',
      leader: '田中 美智子',
      activities: '月例会、観劇会、講演会',
      members: 850
    },
    {
      id: 2,
      name: '関西支部',
      leader: '山田 花子',
      activities: '年次総会、ボランティア活動',
      members: 320
    },
    {
      id: 3,
      name: '東海支部',
      leader: '佐藤 恵子',
      activities: '文化活動、地域貢献活動',
      members: 180
    },
    {
      id: 4,
      name: '九州支部',
      leader: '鈴木 由美',
      activities: '定期交流会、チャリティー活動',
      members: 120
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="px-4 py-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">同窓会活動</h1>
            <p className="text-sm text-gray-600">卒業生の皆様どの絆を深める活動をご紹介します</p>
          </div>

          {/* Activity Reports Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">活動報告</h2>
            <div className="space-y-4">
              {activityReports.map((report: any) => (
                <div
                  key={report.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md"
                >
                  {report.type === 'general' && (
                    <>
                      {/* 画像ギャラリー */}
                      <div className="-mx-4 overflow-x-auto px-4 pb-2 pt-3">
                        <div className="flex snap-x snap-mandatory gap-2">
                          {report.images?.map((image: string, index: number) => (
                            <div
                              key={index}
                              className="w-[80vw] max-w-[300px] h-48 shrink-0 snap-center rounded-xl overflow-hidden"
                            >
                              <img
                                src={image}
                                alt={`${report.title} - 写真${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* コンテンツ */}
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900 mb-3 text-base">{report.title}</h3>
                        <div className="space-y-1 mb-3">
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <Calendar className="h-3.5 w-3.5 text-blue-600" />
                            <span>{report.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-gray-600">
                            <MapPin className="h-3.5 w-3.5 text-blue-600" />
                            <span>{report.location}</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                          {report.content}
                        </div>
                      </div>
                    </>
                  )}

                  {report.type === 'financial' && (
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2 text-base">{report.title}</h3>
                      {report.subtitle && (
                        <p className="text-sm font-semibold text-blue-600 mb-3">{report.subtitle}</p>
                      )}
                      <div className="space-y-1 mb-4">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Calendar className="h-3.5 w-3.5 text-blue-600" />
                          <span>{report.date}</span>
                        </div>
                      </div>

                      {/* 一般会計 - 収入の部 */}
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-900 mb-2 text-sm">一般会計 - 収入の部</h4>
                        <p className="text-xs text-gray-500 mb-2">{report.fiscalNote} (単位：円)</p>
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs border-collapse">
                            <thead>
                              <tr className="bg-blue-50">
                                <th className="border border-gray-300 px-2 py-1 text-left">項目</th>
                                <th className="border border-gray-300 px-2 py-1 text-right">予算額</th>
                                <th className="border border-gray-300 px-2 py-1 text-right">決算額</th>
                                <th className="border border-gray-300 px-2 py-1 text-right">増減</th>
                              </tr>
                            </thead>
                            <tbody>
                              {incomeData.map((row, index) => (
                                <tr key={index}>
                                  <td className="border border-gray-300 px-2 py-1">{row.item}</td>
                                  <td className="border border-gray-300 px-2 py-1 text-right">{row.budget}</td>
                                  <td className="border border-gray-300 px-2 py-1 text-right">{row.actual}</td>
                                  <td className="border border-gray-300 px-2 py-1 text-right">{row.diff}</td>
                                </tr>
                              ))}
                              <tr className="bg-gray-100 font-bold">
                                <td className="border border-gray-300 px-2 py-1">合計</td>
                                <td className="border border-gray-300 px-2 py-1 text-right">14,428,600</td>
                                <td className="border border-gray-300 px-2 py-1 text-right">14,317,011</td>
                                <td className="border border-gray-300 px-2 py-1 text-right">△ 111,589</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* 一般会計 - 支出の部 */}
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-900 mb-2 text-sm">一般会計 - 支出の部</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-xs border-collapse">
                            <thead>
                              <tr className="bg-blue-50">
                                <th className="border border-gray-300 px-2 py-1 text-left">項目</th>
                                <th className="border border-gray-300 px-2 py-1 text-right">予算額</th>
                                <th className="border border-gray-300 px-2 py-1 text-right">決算額</th>
                                <th className="border border-gray-300 px-2 py-1 text-right">増減</th>
                              </tr>
                            </thead>
                            <tbody>
                              {expenseData.map((row, index) => (
                                <tr key={index} className={row.category ? 'bg-gray-50 font-semibold' : ''}>
                                  <td className="border border-gray-300 px-2 py-1">
                                    {row.category && <span className="font-bold">{row.category}</span>}
                                    {row.item && <span className={row.category ? 'ml-2' : ''}>{row.item}</span>}
                                  </td>
                                  <td className="border border-gray-300 px-2 py-1 text-right">{row.budget}</td>
                                  <td className="border border-gray-300 px-2 py-1 text-right">{row.actual}</td>
                                  <td className="border border-gray-300 px-2 py-1 text-right">{row.diff}</td>
                                </tr>
                              ))}
                              <tr className="bg-gray-100 font-bold">
                                <td className="border border-gray-300 px-2 py-1">合計</td>
                                <td className="border border-gray-300 px-2 py-1 text-right">14,428,600</td>
                                <td className="border border-gray-300 px-2 py-1 text-right">12,638,802</td>
                                <td className="border border-gray-300 px-2 py-1 text-right">△ 1,789,798</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* 差引残高 */}
                      <div className="bg-blue-50 rounded-lg p-3 mb-4">
                        <p className="text-sm font-semibold text-gray-900">
                          (収入総額) 14,317,011円 - (支出総額) 12,638,802円 = (差引残高) 1,678,209円 (次年度繰越金)
                        </p>
                      </div>

                      {/* 監査報告 */}
                      <div className="border-t border-gray-200 pt-3">
                        <p className="text-xs text-gray-700 mb-3">
                          通帳、諸帳簿等を照合した結果、以上の会計に相違ないことを認めます。
                        </p>
                        <p className="text-xs text-gray-600">令和6年4月9日</p>
                        <div className="mt-2 space-y-1 text-xs text-gray-700">
                          <p>監事　玉井 康隆</p>
                          <p>　　　小山田 正敏</p>
                          <p>　　　滝澤 輝雄</p>
                          <p>PTA会長　及川 大造</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Upcoming Events Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">今後のイベント</h2>
            <div className="-mx-4 overflow-x-auto px-4 pb-2">
              <div className="flex snap-x snap-mandatory gap-3">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="w-[85vw] max-w-[320px] shrink-0 snap-center bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="h-36 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3.5">
                      <h3 className="font-bold text-gray-900 mb-2 text-sm">{event.title}</h3>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Calendar className="h-3.5 w-3.5 text-blue-600" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <MapPin className="h-3.5 w-3.5 text-blue-600" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Annual Activities Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">年間活動</h2>
            <div className="space-y-3">
              {annualActivities.map((activity) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={activity.id}
                    className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-12 h-12 ${activity.iconBg} rounded-full flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-bold text-gray-900">{activity.title}</h3>
                          <span className="text-xs font-semibold text-blue-600 whitespace-nowrap ml-2">
                            {activity.frequency}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{activity.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Regional Chapters Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">地域支部</h2>
            <div className="space-y-3">
              {regionalChapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900 text-lg">{chapter.name}</h3>
                    <div className="flex items-center gap-1 text-blue-600">
                      <Users className="h-4 w-4" />
                      <span className="text-sm font-semibold">{chapter.members}名</span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">支部長：</span>
                      {chapter.leader}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">主な活動：</span>
                      {chapter.activities}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Alumni Office Contact Section */}
          <section className="mb-8">
            <div className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 mb-4 text-lg">同窓会事務局</h2>
              <div className="space-y-2 text-sm text-gray-700">
                <p>〒028-0525 岩手県遠野市中央通り3-17</p>
                <p>TEL: 0198-62-2823</p>
                <p>Email: info@tono-hs-alumni.jp</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">同窓会活動</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              卒業生の皆様どの絆を深める活動をご紹介します
            </p>
          </div>

          {/* Activity Reports Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">活動報告</h2>
            <div className="space-y-8">
              {activityReports.map((report: any) => (
                <div
                  key={report.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {report.type === 'general' && (
                    <>
                      {/* 画像ギャラリー */}
                      <div className="grid grid-cols-3 gap-0 h-80">
                        {report.images?.map((image: string, index: number) => (
                          <div key={index} className="relative h-full overflow-hidden">
                            <img
                              src={image}
                              alt={`${report.title} - 写真${index + 1}`}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>

                      {/* コンテンツ */}
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{report.title}</h3>
                        <div className="flex items-center gap-6 mb-6">
                          <div className="flex items-center gap-3 text-gray-600">
                            <Calendar className="h-5 w-5 text-blue-600" />
                            <span>{report.date}</span>
                          </div>
                          <div className="flex items-center gap-3 text-gray-600">
                            <MapPin className="h-5 w-5 text-blue-600" />
                            <span>{report.location}</span>
                          </div>
                        </div>
                        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {report.content}
                        </div>
                      </div>
                    </>
                  )}

                  {report.type === 'financial' && (
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{report.title}</h3>
                      {report.subtitle && (
                        <p className="text-lg font-semibold text-blue-600 mb-4">{report.subtitle}</p>
                      )}
                      <div className="flex items-center gap-3 text-gray-600 mb-6">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span>{report.date}</span>
                      </div>

                      {/* 一般会計 - 収入の部 */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">一般会計 - 収入の部</h4>
                        <p className="text-sm text-gray-500 mb-3">{report.fiscalNote} (単位：円)</p>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-blue-50">
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">項目</th>
                                <th className="border border-gray-300 px-4 py-3 text-right font-semibold">予算額 (A)</th>
                                <th className="border border-gray-300 px-4 py-3 text-right font-semibold">決算額 (B)</th>
                                <th className="border border-gray-300 px-4 py-3 text-right font-semibold">比較増減 (B-A)</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">摘要</th>
                              </tr>
                            </thead>
                            <tbody>
                              {incomeData.map((row, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                  <td className="border border-gray-300 px-4 py-2">{row.item}</td>
                                  <td className="border border-gray-300 px-4 py-2 text-right">{row.budget}</td>
                                  <td className="border border-gray-300 px-4 py-2 text-right">{row.actual}</td>
                                  <td className="border border-gray-300 px-4 py-2 text-right">{row.diff}</td>
                                  <td className="border border-gray-300 px-4 py-2 text-sm">{row.note}</td>
                                </tr>
                              ))}
                              <tr className="bg-gray-100 font-bold">
                                <td className="border border-gray-300 px-4 py-2">合 計</td>
                                <td className="border border-gray-300 px-4 py-2 text-right">14,428,600</td>
                                <td className="border border-gray-300 px-4 py-2 text-right">14,317,011</td>
                                <td className="border border-gray-300 px-4 py-2 text-right">△ 111,589</td>
                                <td className="border border-gray-300 px-4 py-2"></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* 一般会計 - 支出の部 */}
                      <div className="mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">一般会計 - 支出の部</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-blue-50">
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">大項目</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">項目</th>
                                <th className="border border-gray-300 px-4 py-3 text-right font-semibold">予算額 (A)</th>
                                <th className="border border-gray-300 px-4 py-3 text-right font-semibold">決算額 (B)</th>
                                <th className="border border-gray-300 px-4 py-3 text-right font-semibold">比較増減 (B-A)</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">摘要</th>
                              </tr>
                            </thead>
                            <tbody>
                              {expenseData.map((row, index) => (
                                <tr key={index} className={row.category ? 'bg-gray-50' : 'hover:bg-gray-50'}>
                                  <td className="border border-gray-300 px-4 py-2 font-semibold">{row.category}</td>
                                  <td className="border border-gray-300 px-4 py-2">{row.item}</td>
                                  <td className="border border-gray-300 px-4 py-2 text-right">{row.budget}</td>
                                  <td className="border border-gray-300 px-4 py-2 text-right">{row.actual}</td>
                                  <td className="border border-gray-300 px-4 py-2 text-right">{row.diff}</td>
                                  <td className="border border-gray-300 px-4 py-2 text-sm">{row.note}</td>
                                </tr>
                              ))}
                              <tr className="bg-gray-100 font-bold">
                                <td className="border border-gray-300 px-4 py-2" colSpan={2}>合 計</td>
                                <td className="border border-gray-300 px-4 py-2 text-right">14,428,600</td>
                                <td className="border border-gray-300 px-4 py-2 text-right">12,638,802</td>
                                <td className="border border-gray-300 px-4 py-2 text-right">△ 1,789,798</td>
                                <td className="border border-gray-300 px-4 py-2"></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* 差引残高 */}
                      <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                        <p className="text-lg font-semibold text-gray-900">
                          (収入総額) 14,317,011円 - (支出総額) 12,638,802円 = (差引残高) 1,678,209円 (次年度繰越金)
                        </p>
                      </div>

                      {/* 監査報告 */}
                      <div className="border-t border-gray-200 pt-6">
                        <p className="text-gray-700 mb-4">
                          通帳、諸帳簿等を照合した結果、以上の会計に相違ないことを認めます。
                        </p>
                        <p className="text-gray-600 mb-3">令和6年4月9日</p>
                        <div className="grid grid-cols-2 gap-4 text-gray-700">
                          <div className="space-y-2">
                            <p>監事　玉井 康隆</p>
                            <p>　　　小山田 正敏</p>
                          </div>
                          <div className="space-y-2">
                            <p>　　　滝澤 輝雄</p>
                            <p>PTA会長　及川 大造</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Upcoming Events Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">今後のイベント</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin className="h-5 w-5 text-blue-600" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Annual Activities Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">年間活動</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {annualActivities.map((activity) => {
                const Icon = activity.icon;
                return (
                  <div
                    key={activity.id}
                    className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-16 h-16 ${activity.iconBg} rounded-full flex items-center justify-center`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{activity.title}</h3>
                          <span className="text-sm font-semibold text-blue-600 whitespace-nowrap ml-4">
                            {activity.frequency}
                          </span>
                        </div>
                        <p className="text-gray-600">{activity.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Regional Chapters Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">地域支部</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {regionalChapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{chapter.name}</h3>
                    <div className="flex items-center gap-2 text-blue-600">
                      <Users className="h-5 w-5" />
                      <span className="font-semibold">{chapter.members}名</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-medium">支部長：</span>
                      {chapter.leader}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">主な活動：</span>
                      {chapter.activities}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Alumni Office Contact Section */}
          <section>
            <div className="bg-white rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">同窓会事務局</h2>
              <div className="space-y-3 text-gray-700">
                <p className="text-lg">〒028-0525 岩手県遠野市中央通り3-17</p>
                <p className="text-lg">TEL: 0198-62-2823</p>
                <p className="text-lg">Email: info@tono-hs-alumni.jp</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AlumniActivities;
