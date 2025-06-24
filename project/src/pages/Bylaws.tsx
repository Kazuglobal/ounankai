import React from 'react';

const Bylaws: React.FC = () => {
  const bylawsSections = [
    {
      id: 'chapter-1',
      title: '第１章　総則',
      content: [
        {
          section: '第１条（名称）',
          text: 'この会は、青森県立八戸西高等学校同窓会『奥南会』（以下「本会」という。）と称する。'
        },
        {
          section: '第２条（目的）',
          text: '本会は会員相互の親睦を図り、併せて母校の発展に寄与することを目的とする。'
        },
        {
          section: '第３条（事務所）',
          text: '本会の事務所を、会長の定める所に置く。'
        }
      ]
    },
    {
      id: 'chapter-2',
      title: '第２章　会員、役員、幹事、事務局、顧問及び相談役',
      content: [
        {
          section: '第４条（会員）',
          text: '本会は、正会員及び特別会員により構成される。\n２ 正会員は、青森県立八戸西高等学校の卒業生とする。ただし、同校に籍をおいた者で、正会員３名以上の紹介により、理事会が認めた者は会費の納入をもって正会員となる。\n３ 特別会員は、青森県立八戸西高等学校に奉職した教職員とする。'
        },
        {
          section: '第５条（役員）',
          text: '本会に、次の役員を置く。\n１）会長　１名　２）副会長　若干名　３）理事　若干名　４）代表幹事　５）監査役　２名'
        },
        {
          section: '第６条（役員の選出）',
          text: '役員は、会員の中から選出し、総会において承認される。'
        },
        {
          section: '第７条（役員の任務）',
          text: '会長は本会を代表し、会務を総括するとともに会議を招集してその議長となる。\n２ 副会長は会長を補佐し、会長に事故のあるとき、あらかじめ会長が指名する順にその職務を代行する。\n３ 理事は、主要会務の審議執行にあたる。\n４ 代表幹事は、全体総会に係る会務の審議執行にあたる。\n５ 監査は、会計事務について監査し、会議に出席して報告もしくは意見を述べるものとする。'
        },
        {
          section: '第８条（役員の任期）',
          text: '役員の任期は、５年とする。（ただし、代表幹事は除く。）\n２ 補欠の役員の任期は、前任者の残任期間とする。\n３ 役員は、再任されることができる。'
        },
        {
          section: '第９条（幹事）',
          text: 'この会に、幹事を置く。\n２ 幹事は、各期の卒業時の各クラスより２名を選出する。\n３ 幹事は、会員間の連絡を図る。\n４ 幹事は、必要に応じて役員会に出席し、意見を述べることができる。\n５ 各期幹事の中から、代表幹事１名を選出する。'
        },
        {
          section: '第10条（事務局）',
          text: '本会に、事務局を置く。\n２ 事務局の構成は次による。\n１）事務局長　１名　２）事務局員　若干名　３）会計　若干名\n３ 事務局長、事務局員及び会計は、会長が任命する。但し、事務局長は理事の中から選任する。'
        },
        {
          section: '第11条（顧問・相談役）',
          text: '本会に、顧問及び相談役を置くことができる。\n２ 顧問及び相談役は、理事会の同意を得て会長が委嘱する。\n３ 顧問及び相談役は、会長の要請により本会の会議に出席し、意見を述べるものとする。'
        }
      ]
    },
    {
      id: 'chapter-3',
      title: '第３章　会議',
      content: [
        {
          section: '第12条（会議の種類）',
          text: '本会の会議は、総会、役員会及び理事会とし、総会は通常総会及び臨時総会とする。'
        },
        {
          section: '第13条（総会）',
          text: '通常総会は、５年毎に開催し、次の事項の報告及び審議をする。\n１）会務状況及び財務状況の報告\n２）役員の選任\n２ 臨時総会は、次に掲げる場合に開催する。\n１）理事の３分の２以上から案件を示して請求のあったとき\n２）幹事の２分の１以上から案件を示して請求のあったとき\n３）会員の３分の１以上から案件を示して請求のあったとき\n４）会長が必要と認めたとき'
        },
        {
          section: '第14条（役員会及び決算役員会）',
          text: '役員会は、第５条に規定する役員により構成する。\n２ 決算役員会は、毎年会計年度終了後、早期に開催し、次の事項を審議する。\n１）事業報告及び収支決算\n２）事業計画及び収支予算\n３）規約改正\n４）その他会長が附議した事項\n３ 役員会は、次に掲げる場合に開催する。\n１）会長が必要と認めたとき\n２）役員の３分の２以上から案件を示して請求のあったとき'
        },
        {
          section: '第15条（理事会）',
          text: '理事会は、代表幹事を除く役員により構成され、次に掲げる場合に開催する。\n１）会長が必要と認めたとき\n２）理事の３分の２以上から案件を示して請求のあったとき'
        },
        {
          section: '第16条（議決）',
          text: '会議の議決は、出席した構成員の過半数の同意をもって決し、可否同数のときは、議長の決するところによる。'
        }
      ]
    },
    {
      id: 'chapter-4',
      title: '第４章　会計',
      content: [
        {
          section: '第17条（資産）',
          text: 'この会の資産は、次に掲げるものをもって構成する。\n１）正会員の納める会費　２）寄付金品　３）資産から生じる収入　４）その他の収入\n２ 会費は、5,000円とし、終身会費とする。'
        },
        {
          section: '第18条（資産の管理）',
          text: '本会の資産は、会長が管理し、その方法は、会長が役員会の議決を経て定める。'
        },
        {
          section: '第19条（会計年度）',
          text: '本会の会計年度は、毎年４月１日に始まり、翌年３月31日に終わる。'
        }
      ]
    },
    {
      id: 'chapter-5',
      title: '第５章　支部',
      content: [
        {
          section: '第20条（支部）',
          text: '本会に、必要に応じ、地方に支部を設けることができる。\n２ 支部に、次の役員を置く。\n１）支部長　１名　２）副支部長　若干名\n３ 支部長は、理事となる。'
        }
      ]
    },
    {
      id: 'chapter-6',
      title: '第６章　補則',
      content: [
        {
          section: '第21条（疑義処理）',
          text: 'この規約に定めのない事項について疑義を生じた場合は、その軽重により正副会長の合議、役員会及び総会の決定による。'
        }
      ]
    },
    {
      id: 'appendix',
      title: '附則',
      content: [
        {
          section: '施行',
          text: 'この規約は、昭和53年３月８日から施行する。\nこの規約は、昭和59年８月13日から施行する。\nこの規約は、昭和63年８月13日から施行する。\nこの規約は、平成15年８月14日から施行する。\nこの規約は、平成21年９月29日から施行する。'
        }
      ]
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            奧南会会則
          </h1>
        </div>


        {/* Bylaws Content */}
        <div className="space-y-12">
          {bylawsSections.map((section) => (
            <div key={section.id} className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
                <h2 className="text-2xl font-bold text-white">
                  {section.title}
                </h2>
              </div>
              
              <div className="p-8">
                <div className="space-y-8">
                  {section.content.map((item, index) => (
                    <div key={index} className="border-l-4 border-blue-200 pl-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">
                        {item.section}
                      </h4>
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {item.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-gray-600 leading-relaxed">
              この会則は、青森県立八戸西高等学校同窓会奧南会の組織運営に関する基本的な事項を定めたものです。
              ご質問やご不明な点がございましたら、事務局までお問い合わせください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bylaws;