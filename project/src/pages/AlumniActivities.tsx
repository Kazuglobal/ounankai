import React from 'react';
import { Calendar, MapPin, Users, FileText, DollarSign, TrendingUp, Award, BookOpen, Globe } from 'lucide-react';

const AlumniActivities: React.FC = () => {
  const generalMeeting = {
    title: '令和7年度 青森県立八戸西高等学校同窓会奥南会 決算役員会・総会',
    date: '令和7年6月24日(火) 18:00〜',
    location: '八戸パークホテル',
    agenda: [
      '開 会',
      '会長挨拶',
      '議 事',
      '　第1号議案 令和6年度事業報告及び収支決算報告承認の件',
      '　第2号議案 剰余金処分(案)承認の件',
      '　第3号議案 令和7年度事業計画(案)及び収支予算(案)承認の件',
      '懇親会',
      '・会長挨拶',
      '・祝 辞',
      '・乾 杯',
      '懇親会',
      '・閉 会'
    ]
  };

  const receptionMeeting = {
    title: '令和7年度 八戸西高同窓会「奥南会」決算役員会 懇親会',
    date: '令和7年6月24日(火) 18時00分から',
    location: '八戸パークホテル',
    agenda: [
      '開 会',
      '挨 拶 奥南会会長 松井 正文',
      '来賓挨拶 八戸西高校長 坪 宏至 様',
      '乾 杯 後援会理事長 斉藤 学成 様',
      '懇 親',
      '中 締 め PTA会長 小田 正徳 様',
      '閉 会'
    ]
  };

  const businessReport = {
    year: '令和6年度',
    period: '令和6年4月1日~令和7年3月31日',
    activities: [
      {
        title: '各種会議の開催',
        details: [
          '令和6年4月11日(木)八戸プラザホテル 「奥南会50周年」に向けて',
          '幹事会等の開催(組織体制の強化)'
        ]
      },
      {
        title: '決算役員会',
        details: ['令和6年7月18日(木) 吹上小学校']
      },
      {
        title: '奥南会総会・祝賀会',
        details: ['令和6年8月16日(金) 八戸プラザアーバンホール']
      },
      {
        title: '奥南会入会式の開催',
        details: ['令和7年2月28日(金)、卒業生へ記念品(DVD)贈呈']
      },
      {
        title: '学校行事への参加',
        details: ['入学式、卒業式、歓迎式、送別会、西高祭他']
      },
      {
        title: '同期会開催助成',
        details: ['6期会開催への助成金支援']
      }
    ],
    businessDetails: [
      { date: '令和6年4月5日', content: '教職員歓迎会、八戸パークホテル、会長出席' },
      { date: '令和6年4月7日', content: '入学式、会長出席' },
      { date: '令和6年4月11日', content: '幹事会開催、27名出席' },
      { date: '令和6年4月26日', content: '西高50周年実行委員会(開催日 4/26 5/23 6/28 7/24 9/12 9/27 等々)' },
      { date: '令和6年5月15日', content: '幹事会開催、28名出席' },
      { date: '令和6年6月24日', content: '後援会、父母と教師の会、同窓会との3者合同懇親会出席、(八戸PH、4名出席)' },
      { date: '令和6年7月18日', content: '決算役員会及び同窓会50周年記念幹事会' },
      { date: '令和6年8月12日', content: '6期生同期会出席(浮木副会長)' },
      { date: '令和6年8月16日', content: '奥南会総会・祝賀会 179名出席' },
      { date: '令和6年9月26日', content: '50周年記念同窓会収支報告及び慰労会 19名出席' },
      { date: '令和6年11月1日', content: '八戸西高50周年記念式典・祝賀会(学校主催 会長出席)' },
      { date: '令和7年1月31日', content: '三役会開催 10名出席' },
      { date: '令和7年2月28日', content: '同窓会入会式、卒業記念DVD贈呈、8名出席' },
      { date: '令和7年3月1日', content: '卒業式出席(松井会長)' },
      { date: '令和7年3月26日', content: '教職員送別会(松井会長)' }
    ],
    financial: {
      totalIncome: 6116792,
      totalExpense: 4810705,
      balance: 1306087,
      income: [
        { item: '会費', budget: 1200000, actual: 1140000, diff: -60000, note: '' },
        { item: '雑収入', budget: 100, actual: 148, diff: 48, note: '' },
        { item: '繰越金', budget: 1589505, actual: 1889505, diff: 300000, note: '剰余金(定期預金)' },
        { item: '特別会計', budget: 1800100, actual: 3087139, diff: 1287039, note: '懇親会参加費1,232千円他' }
      ],
      expense: [
        { category: '事務費', budget: 710000, actual: 170146, diff: -539854, items: [
          { item: '会議費', budget: 300000, actual: 68710, diff: -231290 },
          { item: '通信運搬費', budget: 120000, actual: 0, diff: -120000 },
          { item: '消耗品費', budget: 90000, actual: 2464, diff: -87536 },
          { item: '交際費', budget: 200000, actual: 98972, diff: -101028 }
        ]},
        { category: '事業費', budget: 1910000, actual: 744740, diff: -1165260, items: [
          { item: '記念品費', budget: 450000, actual: 400400, diff: -49600, note: '卒業生記念品DVD400千円' },
          { item: '学校支援費', budget: 50000, actual: 770, diff: -49230 },
          { item: '助成費', budget: 1100000, actual: 40000, diff: -1060000, note: '特別会計より西高50周年寄付金1,000千円支出' },
          { item: '広報費', budget: 10000, actual: 3570, diff: -6430 },
          { item: '積立金', budget: 300000, actual: 300000, diff: 0 }
        ]},
        { category: '雑費', budget: 40000, actual: 0, diff: -40000, items: [] },
        { category: '予備費', budget: 129605, actual: 0, diff: -129605, items: [] },
        { category: '特別会計', budget: 0, actual: 3895819, diff: 3895819, items: [] }
      ]
    },
    surplus: {
      total: 1306087,
      items: [
        { item: '奥南会周年事業新規積立金繰入', amount: 300000 },
        { item: '次年度一般会計繰入', amount: 1006087 }
      ]
    },
    audit: {
      date: '令和7年5月29日',
      auditors: ['監事 鎌田視久', '監事 高橋 学'],
      report: '令和6年度青森県立八戸西高等学校同窓会奥南会の会計について監査したところ、各帳簿類及び関係書類等は適正に処理されていることを確認しましたので、ここにご報告致します。'
    }
  };

  const businessPlan = {
    year: '令和7年度',
    activities: [
      {
        title: '会員名簿の整備',
        description: '同窓会名簿作成の事務委託及びクラス幹事の見直し(各期・クラスの会員情報の収集・整理)'
      },
      {
        title: '学校行事への参加',
        description: '入学式、卒業式、歓迎式、送別会、西高祭他'
      },
      {
        title: '奥南会入会式の開催',
        description: '令和8年2月28日、卒業生へ記念品(DVD)贈呈'
      },
      {
        title: '新入幹事歓迎会の開催',
        description: '令和8年3月下旬'
      },
      {
        title: '各種会議の開催',
        description: '幹事会、役員会等の開催(幹事連絡体制の構築)'
      },
      {
        title: '同期会開催助成',
        description: '同期会開催経費助成'
      },
      {
        title: '同窓会ホームページ開設',
        description: 'ホームページ開設の準備及び'
      }
    ],
    budget: {
      income: [
        { item: '会費', current: 1155000, previous: 1200000, diff: -45000, note: '231名' },
        { item: '雑収入', current: 100, previous: 100, diff: 0, note: '' },
        { item: '繰越金', current: 1006087, previous: 1589505, diff: -583418, note: '' }
      ],
      expense: [
        { category: '事務費', current: 280000, previous: 710000, diff: -430000, items: [
          { item: '会議費', current: 100000, previous: 300000, diff: -200000 },
          { item: '通信運搬費', current: 50000, previous: 120000, diff: -70000 },
          { item: '消耗品費', current: 30000, previous: 90000, diff: -60000 },
          { item: '交際費', current: 100000, previous: 200000, diff: -100000 }
        ]},
        { category: '事業費', current: 870000, previous: 1910000, diff: -1040000, items: [
          { item: '記念品費', current: 400000, previous: 450000, diff: -50000 },
          { item: '学校支援費', current: 50000, previous: 50000, diff: 0 },
          { item: '助成費', current: 100000, previous: 1100000, diff: -1000000 },
          { item: '広報費', current: 20000, previous: 10000, diff: 10000 },
          { item: '積立金', current: 300000, previous: 300000, diff: 0 }
        ]},
        { category: '雑費', current: 10000, previous: 40000, diff: -30000, items: [] },
        { category: '予備費', current: 1001187, previous: 129605, diff: 871582, items: [] }
      ]
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="px-4 py-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">同窓会活動</h1>
            <p className="text-sm text-gray-600">卒業生の皆様との絆を深める活動をご紹介します</p>
          </div>

          {/* General Meeting Section */}
          <section className="mb-8">
            <div className="bg-white rounded-2xl p-5 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="h-5 w-5 text-blue-600" />
                <h2 className="text-lg font-bold text-gray-900">決算役員会・総会</h2>
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-3">{generalMeeting.title}</h3>
              <div className="space-y-2 text-sm text-gray-700 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span>{generalMeeting.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span>{generalMeeting.location}</span>
                </div>
              </div>
              <div className="border-t pt-3">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">次第</h4>
                <ul className="space-y-1 text-xs text-gray-600">
                  {generalMeeting.agenda.map((item, index) => (
                    <li key={index} className="pl-2">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Business Report Section */}
          <section className="mb-8">
            <div className="bg-white rounded-2xl p-5 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5 text-blue-600" />
                <h2 className="text-lg font-bold text-gray-900">第一号議案</h2>
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-3">
                令和6年度事業報告及び収支決算報告
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">事業報告</h4>
                  <ul className="space-y-2 text-gray-700">
                    {businessReport.activities.map((activity, index) => (
                      <li key={index} className="pl-2">
                        <span className="font-medium">{activity.title}</span>
                        <ul className="pl-4 mt-1 space-y-1">
                          {activity.details.map((detail, idx) => (
                            <li key={idx} className="text-xs">{detail}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t pt-3">
                  <h4 className="font-semibold text-gray-800 mb-2">収支決算</h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>総収入額</span>
                      <span className="font-semibold">{formatCurrency(businessReport.financial.totalIncome)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>総支出額</span>
                      <span className="font-semibold">{formatCurrency(businessReport.financial.totalExpense)}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span>残額</span>
                      <span className="font-semibold text-blue-600">{formatCurrency(businessReport.financial.balance)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Surplus Section */}
          <section className="mb-8">
            <div className="bg-white rounded-2xl p-5 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <DollarSign className="h-5 w-5 text-blue-600" />
                <h2 className="text-lg font-bold text-gray-900">第二号議案</h2>
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-3">剰余金処分(案)</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between border-b pb-2">
                  <span>令和6年度残額(剰余金)</span>
                  <span className="font-semibold">{formatCurrency(businessReport.surplus.total)}</span>
                </div>
                {businessReport.surplus.items.map((item, index) => (
                  <div key={index} className="flex justify-between pl-4">
                    <span>{item.item}</span>
                    <span>{formatCurrency(item.amount)}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Business Plan Section */}
          <section className="mb-8">
            <div className="bg-white rounded-2xl p-5 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <h2 className="text-lg font-bold text-gray-900">第三号議案</h2>
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-3">
                令和7年度事業計画(案)及び収支予算(案)
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">事業計画</h4>
                  <ul className="space-y-2 text-gray-700">
                    {businessPlan.activities.map((activity, index) => (
                      <li key={index} className="pl-2">
                        <span className="font-medium">{activity.title}</span>
                        <p className="text-xs text-gray-600 mt-1">{activity.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Reception Meeting Section */}
          <section className="mb-8">
            <div className="bg-white rounded-2xl p-5 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-5 w-5 text-blue-600" />
                <h2 className="text-lg font-bold text-gray-900">懇親会</h2>
              </div>
              <h3 className="text-base font-semibold text-gray-800 mb-3">{receptionMeeting.title}</h3>
              <div className="space-y-2 text-sm text-gray-700 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span>{receptionMeeting.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span>{receptionMeeting.location}</span>
                </div>
              </div>
              <div className="border-t pt-3">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">次第</h4>
                <ul className="space-y-1 text-xs text-gray-600">
                  {receptionMeeting.agenda.map((item, index) => (
                    <li key={index} className="pl-2">{item}</li>
                  ))}
                </ul>
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
              卒業生の皆様との絆を深める活動をご紹介します
            </p>
          </div>

          {/* General Meeting Section */}
          <section className="mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">決算役員会・総会</h2>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{generalMeeting.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span>{generalMeeting.date}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>{generalMeeting.location}</span>
                </div>
              </div>
              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">次第</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                  {generalMeeting.agenda.map((item, index) => (
                    <li key={index} className="pl-2">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Business Report Section */}
          <section className="mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">第一号議案</h2>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                令和6年度事業報告及び収支決算報告
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">事業報告</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {businessReport.activities.map((activity, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">{activity.title}</h5>
                        <ul className="space-y-1 text-sm text-gray-700">
                          {activity.details.map((detail, idx) => (
                            <li key={idx} className="pl-2">{detail}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">事業庶務報告</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-4 py-2 text-left text-gray-700 font-semibold">期日</th>
                          <th className="px-4 py-2 text-left text-gray-700 font-semibold">內容</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {businessReport.businessDetails.map((detail, index) => (
                          <tr key={index}>
                            <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{detail.date}</td>
                            <td className="px-4 py-2 text-gray-700">{detail.content}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">収支決算報告</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-blue-50 rounded-xl p-4 text-center">
                      <p className="text-sm text-gray-600 mb-1">総収入額</p>
                      <p className="text-2xl font-bold text-blue-600">{formatCurrency(businessReport.financial.totalIncome)}</p>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4 text-center">
                      <p className="text-sm text-gray-600 mb-1">総支出額</p>
                      <p className="text-2xl font-bold text-red-600">{formatCurrency(businessReport.financial.totalExpense)}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4 text-center">
                      <p className="text-sm text-gray-600 mb-1">残額</p>
                      <p className="text-2xl font-bold text-green-600">{formatCurrency(businessReport.financial.balance)}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">収入の部</h5>
                      <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-4 py-2 text-left text-gray-700 font-semibold">科目</th>
                              <th className="px-4 py-2 text-right text-gray-700 font-semibold">予算額</th>
                              <th className="px-4 py-2 text-right text-gray-700 font-semibold">決算額</th>
                              <th className="px-4 py-2 text-right text-gray-700 font-semibold">増減</th>
                              <th className="px-4 py-2 text-left text-gray-700 font-semibold">適用</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {businessReport.financial.income.map((item, index) => (
                              <tr key={index}>
                                <td className="px-4 py-2 text-gray-700">{item.item}</td>
                                <td className="px-4 py-2 text-right text-gray-700">{formatCurrency(item.budget)}</td>
                                <td className="px-4 py-2 text-right text-gray-700 font-semibold">{formatCurrency(item.actual)}</td>
                                <td className={`px-4 py-2 text-right ${item.diff >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                  {item.diff >= 0 ? '+' : ''}{formatCurrency(item.diff)}
                                </td>
                                <td className="px-4 py-2 text-gray-600 text-sm">{item.note}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">支出の部</h5>
                      <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-4 py-2 text-left text-gray-700 font-semibold">科目</th>
                              <th className="px-4 py-2 text-right text-gray-700 font-semibold">予算額</th>
                              <th className="px-4 py-2 text-right text-gray-700 font-semibold">決算額</th>
                              <th className="px-4 py-2 text-right text-gray-700 font-semibold">増減</th>
                              <th className="px-4 py-2 text-left text-gray-700 font-semibold">適用</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {businessReport.financial.expense.map((category, catIndex) => (
                              <React.Fragment key={catIndex}>
                                <tr className="bg-gray-50">
                                  <td className="px-4 py-2 font-semibold text-gray-800">{category.category}</td>
                                  <td className="px-4 py-2 text-right text-gray-700">{formatCurrency(category.budget)}</td>
                                  <td className="px-4 py-2 text-right text-gray-700 font-semibold">{formatCurrency(category.actual)}</td>
                                  <td className={`px-4 py-2 text-right ${category.diff >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {category.diff >= 0 ? '+' : ''}{formatCurrency(category.diff)}
                                  </td>
                                  <td className="px-4 py-2"></td>
                                </tr>
                                {category.items.map((item, itemIndex) => (
                                  <tr key={itemIndex} className="pl-8">
                                    <td className="px-4 py-2 text-gray-700 pl-8">{item.item}</td>
                                    <td className="px-4 py-2 text-right text-gray-600">{formatCurrency(item.budget)}</td>
                                    <td className="px-4 py-2 text-right text-gray-600">{formatCurrency(item.actual)}</td>
                                    <td className={`px-4 py-2 text-right ${item.diff >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                      {item.diff >= 0 ? '+' : ''}{formatCurrency(item.diff)}
                                    </td>
                                    <td className="px-4 py-2 text-gray-600 text-xs">{(item as any).note || ''}</td>
                                  </tr>
                                ))}
                              </React.Fragment>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">監査報告</h4>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-gray-700 mb-3">{businessReport.audit.report}</p>
                    <div className="text-right text-sm text-gray-600">
                      <p>{businessReport.audit.date}</p>
                      <div className="mt-2 space-y-1">
                        {businessReport.audit.auditors.map((auditor, index) => (
                          <p key={index}>{auditor}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Surplus Section */}
          <section className="mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">第二号議案</h2>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">剰余金処分(案)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-gray-700 font-semibold">項目</th>
                      <th className="px-4 py-2 text-right text-gray-700 font-semibold">金額</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 text-gray-700 font-semibold">令和6年度残額(剰余金)</td>
                      <td className="px-4 py-2 text-right text-gray-700 font-semibold">{formatCurrency(businessReport.surplus.total)}</td>
                    </tr>
                    {businessReport.surplus.items.map((item, index) => (
                      <tr key={index} className="bg-gray-50">
                        <td className="px-4 py-2 text-gray-700 pl-8">{item.item}</td>
                        <td className="px-4 py-2 text-right text-gray-700">{formatCurrency(item.amount)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Business Plan Section */}
          <section className="mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">第三号議案</h2>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                令和7年度事業計画(案)及び収支予算(案)
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">事業計画(案)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {businessPlan.activities.map((activity, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-4">
                        <h5 className="font-semibold text-gray-800 mb-2">{activity.title}</h5>
                        <p className="text-sm text-gray-700">{activity.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">収支予算(案)</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">収入の部</h5>
                      <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-4 py-2 text-left text-gray-700 font-semibold">科目</th>
                              <th className="px-4 py-2 text-right text-gray-700 font-semibold">本年度予算額</th>
                              <th className="px-4 py-2 text-right text-gray-700 font-semibold">前年度予算額</th>
                              <th className="px-4 py-2 text-right text-gray-700 font-semibold">増減</th>
                              <th className="px-4 py-2 text-left text-gray-700 font-semibold">適用</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {businessPlan.budget.income.map((item, index) => (
                              <tr key={index}>
                                <td className="px-4 py-2 text-gray-700">{item.item}</td>
                                <td className="px-4 py-2 text-right text-gray-700 font-semibold">{formatCurrency(item.current)}</td>
                                <td className="px-4 py-2 text-right text-gray-700">{formatCurrency(item.previous)}</td>
                                <td className={`px-4 py-2 text-right ${item.diff >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                  {item.diff >= 0 ? '+' : ''}{formatCurrency(item.diff)}
                                </td>
                                <td className="px-4 py-2 text-gray-600 text-sm">{item.note}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">支出の部</h5>
                      <div className="overflow-x-auto">
                        <table className="min-w-full text-sm">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="px-4 py-2 text-left text-gray-700 font-semibold">科目</th>
                              <th className="px-4 py-2 text-right text-gray-700 font-semibold">本年度予算額</th>
                              <th className="px-4 py-2 text-right text-gray-700 font-semibold">前年度予算額</th>
                              <th className="px-4 py-2 text-right text-gray-700 font-semibold">増減</th>
                              <th className="px-4 py-2 text-left text-gray-700 font-semibold">適用</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {businessPlan.budget.expense.map((category, catIndex) => (
                              <React.Fragment key={catIndex}>
                                <tr className="bg-gray-50">
                                  <td className="px-4 py-2 font-semibold text-gray-800">{category.category}</td>
                                  <td className="px-4 py-2 text-right text-gray-700 font-semibold">{formatCurrency(category.current)}</td>
                                  <td className="px-4 py-2 text-right text-gray-700">{formatCurrency(category.previous)}</td>
                                  <td className={`px-4 py-2 text-right ${category.diff >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {category.diff >= 0 ? '+' : ''}{formatCurrency(category.diff)}
                                  </td>
                                  <td className="px-4 py-2"></td>
                                </tr>
                                {category.items.map((item, itemIndex) => (
                                  <tr key={itemIndex} className="pl-8">
                                    <td className="px-4 py-2 text-gray-700 pl-8">{item.item}</td>
                                    <td className="px-4 py-2 text-right text-gray-600">{formatCurrency(item.current)}</td>
                                    <td className="px-4 py-2 text-right text-gray-600">{formatCurrency(item.previous)}</td>
                                    <td className={`px-4 py-2 text-right ${item.diff >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                      {item.diff >= 0 ? '+' : ''}{formatCurrency(item.diff)}
                                    </td>
                                    <td className="px-4 py-2"></td>
                                  </tr>
                                ))}
                              </React.Fragment>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reception Meeting Section */}
          <section className="mb-16">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">懇親会</h2>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{receptionMeeting.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span>{receptionMeeting.date}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>{receptionMeeting.location}</span>
                </div>
              </div>
              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">次第</h4>
                <ul className="space-y-2 text-gray-700">
                  {receptionMeeting.agenda.map((item, index) => (
                    <li key={index} className="pl-2">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AlumniActivities;
