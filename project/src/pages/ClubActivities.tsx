import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Award, Calendar, Volume2, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

const ClubActivities: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // 最近の活動データ
  const recentActivities = [
    {
      id: 1,
      title: '東北大会出場・国体出場',
      description: '黄金期以来の東北大会出場を果たしました。岩手県選抜から6名が選出され東北総体で準優勝を収めました。',
      stats: '東北総体準優勝',
      date: '2024年',
      label: 'バスケットボール部',
      bgColor: 'from-orange-900 to-red-700',
      href: '/club-activities/basketball'
    },
    {
      id: 2,
      title: '秋季大会ベスト8',
      description: '第77回秋季東北地区高等学校野球岩手県大会でベスト8に進出。新チーム体制での挑戦が実を結びました。',
      stats: '岩手県大会ベスト8',
      date: '2024年',
      label: '硬式野球部',
      bgColor: 'from-green-700 to-blue-700',
      href: '/club-activities/baseball'
    },
    {
      id: 3,
      title: '軽音楽部 高文祭で優秀な成績',
      description: '顧問：小平創 音楽が大好きで観客を感動させる演奏を目標に活動。地域イベントや児童養護施設での演奏会で地域貢献。中学生体験会に文化部初参加。',
      stats: '高文祭第3位',
      date: '2024年',
      label: '軽音楽部',
      bgColor: 'from-purple-700 to-pink-700',
      href: '#lightmusic',
      fullContent: {
        subtitle: '軽音楽部顧問 小平 創',
        paragraphs: [
          '同窓会の皆様におかれましては、日頃よりご支援ご協力を賜り誠にありがとうございます。盛工軽音楽部は、平成30年にギター同好会から生徒総会での承認を受けて、正式に部として誕生いたしました。当時熱心に音楽に取り組んでいた部員が部への昇格に提起して成立したことであります。この部員は卒業後もプロのミュージシャンとして全国を巡り、現在も活動を続けております。',
          'さて軽音楽部の印象に関してでございますが、90年代においてはエレキギターを持っているだけで、いわゆる不良少年と認知されることも多かったり、また現在でも全国軽音楽協会が発行する月刊誌においても「校内でヒエラルキーの低い部活動」と認知されている高校も少なくないとさえ特集されております。しかし現在所属する部員たちは音楽が大好きで練習に真剣に取り組んでおり、仲間とともに「観客を感動させる演奏」を目標に活動をしています。日常の部活動での練習の成果を、矢巾祭・ペアレン醸造祭などの地元イベントで披露し、また児童養護施設での演奏会などで地域への貢献にも幅広く取り組んでいます。今年度は中学生部活動体験会に盛工の文化部として初めて参加し、体験に来た中学生・保護者からは好評を頂くことが出来ました。また高文祭では全県29バンドが参加した中で第3位の成績を収めることが出来ました。',
          'ポップミュージックは時代を彩ってきた音楽で誰しもこの歌を聴くとあの頃を思いだすという曲があると思います。そのような時代とともに移り行く音楽を、多くの皆様に楽しんでいただけるよう軽音楽部は邁進してまいりますので、今後も同窓会の皆様にはご理解ご協力を賜りますようお願い上げて結びの言葉といたします。'
        ]
      }
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 最近の活動 */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">最近の活動</h2>
            <p className="text-lg font-semibold text-gray-800">令和年度後期～令和年度前期主な部活動結果</p>
            <p className="text-gray-600">生徒たちの活発な部活動の様子をお伝えします</p>
          </div>

          <div className="-mx-4 overflow-x-auto px-4 pb-2">
            <div className="flex snap-x snap-mandatory gap-4">
              {recentActivities.map((activity) => {
                const hasFullContent = activity.fullContent;
                const isExpanded = expandedCard === activity.id;

                if (hasFullContent) {
                  return (
                    <div
                      key={activity.id}
                      className={`relative shrink-0 snap-center overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 ${
                        isExpanded ? 'w-[600px]' : 'w-[320px]'
                      }`}
                    >
                      {/* 画像エリア */}
                      <div className={`relative h-48 bg-gradient-to-br ${activity.bgColor} overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute top-4 left-4">
                          <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                            {activity.label}
                          </span>
                        </div>
                        {/* 画像プレースホルダー */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white/30 text-6xl">📸</div>
                        </div>
                      </div>

                      {/* コンテンツエリア */}
                      <div className="p-5 relative">
                        <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
                          {activity.title}
                        </h3>

                        {!isExpanded && (
                          <>
                            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                              {activity.description}
                            </p>
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center gap-2 text-blue-600">
                                <Award className="h-4 w-4" />
                                <span className="text-sm font-semibold">{activity.stats}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-500">
                                <Calendar className="h-4 w-4" />
                                <span className="text-xs">{activity.date}</span>
                              </div>
                            </div>
                          </>
                        )}

                        {isExpanded && (
                          <div className="space-y-4 max-h-[500px] overflow-y-auto">
                            <p className="text-sm font-semibold text-gray-700">{activity.fullContent.subtitle}</p>
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center gap-2 text-blue-600">
                                <Award className="h-4 w-4" />
                                <span className="text-sm font-semibold">{activity.stats}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-500">
                                <Calendar className="h-4 w-4" />
                                <span className="text-xs">{activity.date}</span>
                              </div>
                            </div>
                            {activity.fullContent.paragraphs.map((paragraph, index) => (
                              <p key={index} className="text-sm text-gray-700 leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}

                        {/* 展開/折りたたみボタン */}
                        <button
                          onClick={() => setExpandedCard(isExpanded ? null : activity.id)}
                          className="mt-4 w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-200"
                        >
                          {isExpanded ? (
                            <>
                              <ChevronUp className="h-4 w-4" />
                              <span>閉じる</span>
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-4 w-4" />
                              <span>詳細を読む</span>
                            </>
                          )}
                        </button>

                        {/* 音声再生ボタン */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('Playing audio for:', activity.title);
                          }}
                          className="absolute top-2 right-2 w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
                          aria-label="音声を再生"
                        >
                          <Volume2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={activity.id}
                    to={activity.href}
                    className="relative w-[320px] shrink-0 snap-center overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-200 hover:shadow-xl"
                  >
                    {/* 画像エリア */}
                    <div className={`relative h-48 bg-gradient-to-br ${activity.bgColor} overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                          {activity.label}
                        </span>
                      </div>
                      {/* 画像プレースホルダー */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white/30 text-6xl">📸</div>
                      </div>
                    </div>

                    {/* コンテンツエリア */}
                    <div className="p-5 relative">
                      <h3 className="text-base font-bold text-gray-900 mb-2 leading-tight">
                        {activity.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {activity.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-blue-600">
                          <Award className="h-4 w-4" />
                          <span className="text-sm font-semibold">{activity.stats}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span className="text-xs">{activity.date}</span>
                        </div>
                      </div>

                      {/* 音声再生ボタン */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log('Playing audio for:', activity.title);
                        }}
                        className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
                        aria-label="音声を再生"
                      >
                        <Volume2 className="h-5 w-5" />
                      </button>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">演劇部</h2>
            </div>

            <div className="space-y-8">
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">岩手県高等学校総合文化祭県央盛岡南地区発表会第78回高校演劇研究発表会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>優良賞</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">アーチェリー部</h2>
            </div>

            <div className="space-y-8">
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">令和年度第76回岩手県高等学校総合体育大会アーチェリー競技</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>男子団体 第位</li>
                  <li>男子個人 第位 佐々木粋 (AD3)、ベスト32 成田勇吹 (C3)、ベスト64 佐々木陽葵 (AD2)、山崎皇汰 (C2)</li>
                  <li>男子個人 第位 佐々木粋 (AD3)、ベスト32 成田勇吹 (C3)、ベスト64 佐々木陽葵 (AD2)、山崎皇汰 (C2)</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">令和年度第42回東北高等学校アーチェリー選手権大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>男子団体の部 第位（予選 位通過）</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">令和年度全国高等学校総合体育大会アーチェリー競技大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>男子団体の部 第23位</li>
                  <li>男子個人 第37位 佐々木粋 (AD3)、第60位 成田勇吹 (C3)、第40位 佐々木陽葵 (AD2)</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">令和年度岩手県高等学校新人大会アーチェリー競技大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>男子団体の部 第位</li>
                  <li>男子個人 第位 佐々木陽葵 (AD2)、ベスト32 岩渕真咲 (M2)</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第78回国民スポーツ大会アーチェリー競技会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>少年男子団体 第12位（岩手県）</li>
                  <li>少年男子 個人 第位 佐々木粋 (AD3)、第36位 成田勇吹 (C3)、第40位 佐々木陽葵 (AD2)</li>
                </ul>
              </article>
            </div>
          </div>
        </section>


        <section className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">ウェイトリフティング部</h2>
            </div>

            <div className="space-y-8">
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第76回岩手県高等学校総合体育大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>55kg級 第位 遠藤大翔 (M3)</li>
                  <li>67kg級 第位 柳田遥登 (ME2)</li>
                  <li>73kg級 第位 工藤勇司 (C3)</li>
                  <li>81kg級 第位 吉田優日 (Ch3)</li>
                  <li>89kg級 第位 杉山竜聖 (EI3)</li>
                  <li>102kg級 川村遙輝 (ME2) スナッチ第11位／C&ジャーク第11位</li>
                  <li>+102kg級 山崎拳士郎 (C3) スナッチ第位／C&ジャーク第位</li>
                  <li>学校対抗戦 第位</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第44回東北高等学校選手権大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>55kg級 第位 遠藤大翔 (M3)</li>
                  <li>67kg級 第位 柳田遥登 (ME2)</li>
                  <li>73kg級 第位 工藤勇司 (C3)</li>
                  <li>81kg級 第位 吉田優日 (Ch3)</li>
                  <li>102kg級 川村遙輝 (ME2) スナッチ第11位／C&ジャーク第11位</li>
                  <li>+102kg級 山崎拳士郎 (C3) スナッチ第位／C&ジャーク第位</li>
                  <li>学校対抗戦 第位（22年ぶり回目）</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">令和年度全国高等学校総合体育大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>67kg級 第33位 柳田遥登 (ME2)</li>
                  <li>73kg級 工藤勇司 (C3) スナッチ第位／C&ジャーク第位</li>
                  <li>81kg級 第27位 吉田優日 (Ch3)</li>
                  <li>+102kg級 山崎拳士郎 (C3) スナッチ第位／C&ジャーク第位</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第51回東北総合体育大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>67kg級 第位 柳田遥登 (ME2)</li>
                  <li>73kg級 第位 工藤勇司 (C3)</li>
                  <li>81kg級 第位 吉田優日 (Ch3)</li>
                  <li>102kg級 川村遙輝 (ME2) スナッチ第11位／C&ジャーク第11位</li>
                  <li>+102kg級 山崎拳士郎 (C3) スナッチ第位／C&ジャーク第位</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第78回国民スポーツ大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>少年男子</li>
                </ul>
              </article>
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第59回岩手県高等学校新人大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>73kg級 第位 柳田遥登 (ME2)、第位 田中健詞 (C2)</li>
                  <li>81kg級 第位 三上勇輝 (E1)</li>
                  <li>+102kg級 第位 川村遙輝 (ME2)</li>
                  <li>学校対抗戦 第位</li>
                </ul>
              </article>

            </div>
          </div>
        </section>
        <section className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">陸上競技部</h2>
            </div>

            <div className="space-y-8">
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第76回岩手県高等学校総合体育大会陸上競技大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>男子110mH 第位菊池祐希 (C2年) 15&quot;67</li>
                  <li>男子400mH 第位菊池祐希 (C2年) 57&quot;06</li>
                  <li>男子ハンマー投第位山下暖人 (AD3) 42m14、第位竹田結人 (E2) 40m69、第位佐藤秀磨 (AD3) 39m41</li>
                  <li>男子やり投第位佐々木斗吾 (E3) 50m89</li>
                  <li>男子円盤投第位佐々木斗吾 (E3) 34m60、第位佐々木響己 (C3) 33m14、第位竹田結人 (E2) 32m59</li>
                  <li>女子ハンマー投第位立花優奈 (Ch2) 28m10</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第44回東北高等学校選手権大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>55kg級 第位 遠藤大翔 (M3)</li>
                  <li>67kg級 第位 柳田遥登 (ME2)</li>
                  <li>73kg級 第位 工藤勇司 (C3)</li>
                  <li>81kg級 第位 吉田優日 (Ch3)</li>
                  <li>102kg級 川村遙輝 (ME2) スナッチ第11位／C&ジャーク第11位</li>
                  <li>+102kg級 山崎拳士郎 (C3) スナッチ第位／C&ジャーク第位</li>
                  <li>学校対抗戦 第位（22年ぶり○回目）</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第79回東北高等学校陸上競技大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>男子110mH 準決勝組着菊池祐希 (C2) 15&quot;49</li>
                  <li>男子400mH 予選組着菊池祐希 (C2) 57&quot;30</li>
                  <li>男子ハンマー投第27位山下暖人 (AD3) 39m1、第28位竹田結人 (E2) 38m86、第30位佐藤秀磨 (AD3) 36m33</li>
                  <li>男子円盤投第23位佐々木響己 (C3) 34m25、第34位佐々木斗吾 (E3) 26m62</li>
                  <li>男子やり投第12位佐々木斗吾 (E3) 51m70</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">2024岩手県陸上競技選手権大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>男子部100m 第位吉田怜央 (C3) 11&quot;21、第位鈴木光太郎 (AD3)</li>
                  <li>男子部円盤投第位竹田結人 (E2) 32m82、第位佐々木響己 (C3) 31m36</li>
                  <li>男子部やり投優勝佐々木煌琉 (AD2) 45m80、第位吉田怜央 (C3) 44m35</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第76回岩手県民体育大会陸上競技大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>1部成年男子110mH 第位小原俊介 (顧問) 15&quot;86</li>
                  <li>1部成年男子400mH 優勝小原俊介 (顧問) 56&quot;63</li>
                  <li>2部少年男子110mH 優勝菊池祐希 (C2) 15.10</li>
                  <li>2部少年男子ハンマー投第位山下暖人 (AD3) 41m14</li>
                  <li>2部少年男子やり投第位佐々木斗吾 (E3) 48m02</li>
                  <li>12部女子ハンマー投第位立花優奈 (Ch2) 35m42</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">岩手県高等学校新人陸上競技大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>男子110mH 第位菊池祐希 (C2) 15&quot;49</li>
                  <li>男子400mH 優勝菊池祐希 (C2) 57&quot;01</li>
                  <li>男子円盤投第位佐々木煌琉 (AD2) 33m95</li>
                  <li>男子ハンマー投第位竹田結人 (E2) 47m22、優勝佐々木煌琉 (AD2) 52m68</li>
                  <li>女子ハンマー投第位立花優奈 (Ch2) 34m19</li>
                  <li>男子総合の部第位</li>
                  <li>男子フィールドの部第位</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第29回東北高等学校新人陸上競技選手権大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>男子110mH 第位菊池祐希 (C2) 15&quot;63</li>
                  <li>男子400mH 第位菊池祐希 (C2) 1&apos;01&quot;59</li>
                  <li>男子円盤投第24位佐々木煌琉 (AD2) 31m28</li>
                  <li>男子ハンマー投第位竹田結人 (E2) 41m86</li>
                  <li>男子やり投第21位佐々木煌琉 (E2) 44m47</li>
                  <li>女子ハンマー投第10位立花優奈 (Ch2) 33m76</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">全国高等学校駅伝岩手県大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>第11位 2:33:56</li>
                </ul>
              </article>
            </div>
          </div>
        </section>


        <section className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">レスリング部</h2>
            </div>

            <div className="space-y-8">

              <article className="space-y-3">

                <h3 className="text-xl font-semibold text-gray-900">JOCジュニアオリンピックカップジュニアオリンピック大会2024年度全日本ジュニアレスリング選手権大会</h3>

                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">

                  <li>個人対抗戦第位伊藤慎人 (C3)</li>

                </ul>

              </article>



              <article className="space-y-3">

                <h3 className="text-xl font-semibold text-gray-900">第76回岩手県高等学校総合体育大会</h3>

                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">

                  <li>学校対抗戦優勝</li>

                  <li>個人対抗戦優勝鬼同健悠 (EI3)、55kg級第位前田三四郎 (AD2)、65kg級優勝千田徠貴 (C3)、71kg級優勝伊藤慎人 (C3)、80kg級第位柏木壮介 (EI1)、125kg級優勝阿部龍樹 (ME2)</li>

                  <li>女子 50kg級以下の部第位千田愛穂 (C1)</li>

                </ul>

              </article>



              <article className="space-y-3">

                <h3 className="text-xl font-semibold text-gray-900">令和年度第70回東北高等学校レスリング選手権大会</h3>

                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">

                  <li>学校対抗戦第位</li>

                  <li>個人対抗戦 55kg級第位鬼同健悠 (EI3)、65kg級第位千田徠貴 (C3)、71kg級第位伊藤慎人 (C3)、125kg級第位阿部龍樹 (ME2)</li>

                  <li>女子第位千田愛穂 (C1)</li>

                </ul>

              </article>

            </div>

          </div>

        </section>



        <section className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">野球部</h2>
            </div>

            <div className="space-y-8">
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第71回春季東北地区高等学校野球岩手県大会盛岡地区予選</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>1回戦盛工 6－5 不来方紫波連合</li>
                  <li>代表決定戦盛工 2－4 盛岡第三</li>
                  <li>代表決定戦盛工 1－24 盛岡中央 (7C)</li>
                  <li>代表決定戦盛工 11－0 盛岡農業 (6C)</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第71回春季東北地区高等学校野球岩手県大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>1回戦盛工 7－10 盛岡第一</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第106回全国高等学校野球選手権岩手県大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>1回戦盛工 2－1 黒沢尻工業</li>
                  <li>2回戦盛工 0－5 水沢商業</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第77回秋季東北地区高等学校野球岩手県大会盛岡地区予選</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>1回戦盛工 15－0 平舘 (5C)</li>
                  <li>代表決定戦盛工 4－3 盛岡第三</li>
                  <li>準決勝盛工 7－6 盛岡中央</li>
                  <li>決勝盛工 0－8 盛岡誠桜 (7C)</li>
                  <li>準優勝（盛岡地区第代表）</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第77回秋季東北地区高等学校野球岩手県大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>2回戦盛工 7－5 盛岡第一</li>
                  <li>準々決勝盛工 2－8 花巻東（ベスト8）</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">水泳部</h2>
            </div>

            <div className="space-y-8">
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第76回岩手県高等学校総合体育大会水泳競技</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>男子50m自由形 予選 山崎光貴 (E2) 30.82、竹澤衆人 (E2) 32.42、石田悠翔 (E2) 37.27</li>
                  <li>男子4x100mメドレーリレー 予選 石田悠翔 (E2)・竹澤衆人 (E2)・高橋登志 (AD3)・山崎光貴 (E2) 5:56.87</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第62回岩手県高等学校新人大会水泳競技</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>男子100m平泳ぎ タイム決勝 竹澤衆人 (E2) 1:31.90</li>
                  <li>男子50m自由形 タイム決勝 山崎光貴 (E2) 30.41、竹澤衆人 (E2) 34.51、石田悠翔 (E2) 40.27</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">柔道部</h2>
            </div>

            <div className="space-y-8">
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第76回岩手県高等学校総合体育大会柔道競技</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>団体試合 盛工 0－5 久慈高</li>
                  <li>個人試合 60kg級菊地椋大 (E3) 2回戦、60kg級大坂航史 (E2) 2回戦、60kg級千葉尊史 (EI2) 2回戦、66kg級佐々木菜汰 (AD2) ベスト、81kg級浦田豊隆 (E3) 2回戦</li>
                </ul>
              </article>
            </div>
          </div>
        </section>



        <section className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">ラグビー部</h2>
            </div>

            <div className="space-y-8">
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">令和年度全国高等学校人制ラグビーフットボール岩手県予選会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>予選グループ 1回戦盛工 55－0 沿岸合同、決勝盛工 19－21 花巻東</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">令和年度第76回岩手県高等学校総合体育大会ラグビーフットボール競技</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>1回戦盛工 40－7 合同</li>
                  <li>準決勝盛工 20－19 黒沢尻北</li>
                  <li>決勝盛工 7－69 黒沢尻工業</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">令和年度第75回東北高等学校ラグビーフットボール大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>1回戦盛工 28－26 三本木農業恵拓</li>
                  <li>準決勝盛工 59－12 仙台三高</li>
                  <li>決勝盛工 24－17 黒沢尻北 優勝</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">令和年度第104回全国高等学校ラグビーフットボール大会岩手県大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>準々決勝盛工 97－0 合同</li>
                  <li>準決勝盛工 28－17 黒沢尻北</li>
                  <li>決勝盛工 21－20 黒沢尻工業 優勝（年ぶり36回目の出場）</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">女子バスケットボール部</h2>
            </div>

            <div className="space-y-8">
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第76回岩手県高等学校総合体育大会バスケットボール競技</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>盛工盛附 43－118 北桜</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">男子バスケットボール部</h2>
            </div>

            <div className="space-y-8">
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第76回岩手県高等学校総合体育大会バスケットボール競技</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>2回戦盛工 137－17 花泉一関学院</li>
                  <li>3回戦盛工 150－23 盛岡商業</li>
                  <li>4回戦盛工 94－60 釜石</li>
                  <li>準々決勝盛工 72－58 盛岡南</li>
                  <li>準決勝盛工 64－72 花巻東</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第79回東北高等学校男女バスケットボール選手権兼第60回NHK杯</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>1回戦盛工 44－86 秋田工業</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">バレーボール部</h2>
            </div>

            <div className="space-y-8">
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第76回岩手県高等学校総合体育大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>盛工 2－0 水沢第一</li>
                  <li>盛工 0－2 不来方</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">テニス部</h2>
            </div>

            <div className="space-y-8">
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第76回岩手県高等学校総合体育大会テニス競技</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>団体戦 1回戦盛工 2－1 北桜、回戦盛工 1－2 盛岡第三</li>
                  <li>個人戦シングルス 伊勢遥翔 (E2) ベスト16、ダブルス 上中屋敷惺麻 (C3)・沓掛颯輝 (C3) ベスト8</li>
                </ul>
              </article>
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第56回岩手県高校新人テニス大会</h3>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">団体戦</p>
                  <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                    <li>1回戦盛工 1－4 盛岡第四</li>
                    <li>2回戦盛工 3－0 黒沢尻工業</li>
                    <li>3回戦盛工 3－1 盛岡南不来方</li>
                    <li>4回戦盛工 2－3 花巻北</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">個人戦</p>
                  <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                    <li>シングルス 伊勢遥翔 (E2) ベスト16</li>
                  </ul>
                </div>
              </article>

            </div>
          </div>
        </section>

        <section className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">ソフトテニス部</h2>
            </div>

            <div className="space-y-8">
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">全日本シングルス岩手県予選</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>第位 吉田蓮</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">ジュニア選抜大会（北上）</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>シングルス優勝 吉田蓮</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">全日本シングルス（会津若松）</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>吉田蓮 出場（1回戦敗退）</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">高総体（北上）</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>団体 3回戦敗退</li>
                  <li>個人 第位 高橋・小田島ペア（インターハイ出場）</li>
                  <li>個人 第位 吉田・城内ペア（インターハイ出場）</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">東北大会（青森）</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>個人 高橋・小田島ペア ベスト8</li>
                  <li>個人 吉田・城内ペア ベスト8</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">ハイスクールジャパンカップ（札幌）</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>吉田蓮 1回戦敗退</li>
                </ul>
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">インターハイ（長崎）</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>個人 高橋・小田島ペア 3回戦敗退</li>
                  <li>個人 吉田・城内ペア 3回戦敗退</li>
                  <li>個人 白澤・久保ペア ベスト16</li>
                  <li>個人 吉田・近藤ペア ベスト32</li>
                </ul>
              </article>

              </article>
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">新人戦（北上）</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>団体 3回戦敗退</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">個人戦（ソフトテニス）</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>個人 白澤・久保ペア ベスト16</li>
                  <li>個人 吉田・近藤ペア ベスト32</li>
                </ul>
              </article>

            </div>
          </div>
        </section>

        <section className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">ウェイトリフティング部</h2>
            </div>

            <div className="space-y-8">
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第76回岩手県高等学校総合体育大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>55kg級 第位 遠藤大翔 (M3)</li>
                  <li>67kg級 第位 柳田遥登 (ME2)</li>
                  <li>73kg級 第位 工藤勇司 (C3)</li>
                  <li>81kg級 第位 吉田優日 (Ch3)</li>
                  <li>89kg級 第位 杉山竜聖 (EI3)</li>
                  <li>102kg級 川村遙輝 (ME2) スナッチ第11位／C&ジャーク第11位</li>
                  <li>+102kg級 山崎拳士郎 (C3) スナッチ第位／C&ジャーク第位</li>
                  <li>学校対抗戦 第位</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">スケート部</h2>
            </div>

            <div className="space-y-8">
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第35回東北高等学校スケート競技選手権大会スピードスケート競技</h3>
                                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>男子500m 第位 根木虹 (Ch2) 48.26、第位 宮崎龍生 (E2) 49.82</li>
                  <li>男子1000m 第10位 根木虹 (Ch2) 1:40.58、第11位 宮崎龍生 (E2) 1:40.59、第12位 福島遥輝 (EI1) 1:41.17</li>
                  <li>男子1500m 第11位 福島遥輝 (EI1) 2:40.04</li>
                  <li>女子500m 第位 三浦陽 (AD3) 43.77</li>
                  <li>女子1000m 第位 三浦陽 (AD3) 1:32.43</li>
                  <li>学校対抗 第位 盛岡工業高校 10点（男子 第位 盛岡工業高校 3点）</li>
                </ul>
              </article>
               <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第47回全日本ジュニアスピードスケート選手権大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>女子500m 第19位 三浦陽 (AD3) 41.93</li>
                  <li>女子1000m 第28位 三浦陽 (AD3)</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text_gray-900">第73回全国高等学校スピードスケート競技選手権大会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>男子500m 第48位 根木虹 (Ch2) 46.61、第52位 宮崎龍生 (E2) 47.64</li>
                  <li>男子1000m 第59位 根木虹 (Ch2) 1:34.02、第61位 福島遥輝 (EI1) 1:35.26</li>
                  <li>男子1500m 第45位 福島遥輝 (EI1) 2:29.70</li>
                  <li>女子500m 第10位 三浦陽 (AD3) 42.77</li>
                  <li>女子1000m 第17位 三浦陽 (AD3) 1:28.01</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第78回国民スポーツ大会冬季大会スケート競技会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>女子500m 第位 三浦陽 (AD3) 43.77</li>
                  <li>女子1000m 第位 三浦陽 (AD3)</li>
                </ul>
              </article>

           </div>
          </div>
        </section>

        <section className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">アマチュア無線部</h2>
            </div>

            <div className="space-y-8">
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">ALL JAコンテスト XMA部門</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>第57位</li>
                </ul>
              </article>
              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">全国高等学校アマチュア無線コンテスト SWL部門</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>優勝</li>
                </ul>
              </article>

            </div>
          </div>
        </section>

        <section class="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <div class="space-y-10">
            <div>
              <h2 class="text-2xl md:text-3xl font-bold text-gray-900">文学部</h2>
            </div>

            <div class="space-y-8">
              <article class="space-y-3">
                <h3 class="text-xl font-semibold text-gray-900">第47回岩手県高等学校総合文化祭文芸部門（令和年度岩手県高校生文芸コンクール）</h3>
                <ul class="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>短歌部門 入選 柏田豊 (E2)、小原奈々 (AD2)</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section class="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <div class="space-y-10">
            <div>
              <h2 class="text-2xl md:text-3xl font-bold text-gray-900">自動車部</h2>
            </div>

            <div class="space-y-8">
              <article class="space-y-3">
                <h3 class="text-xl font-semibold text-gray-900">2024ワールドエコノムーブ大会</h3>
                <ul class="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>ヘルパーガ号 ジュニアクラス 第位</li>
                </ul>
              </article>
            </div>
          </div>
        </section>
        <section id="lightmusic" className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">軽音楽部 近況報告</h2>
              <p className="text-lg text-gray-600 mt-2">軽音楽部顧問 小平 創</p>
            </div>

            <div className="space-y-8">
              <article className="space-y-4">
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    同窓会の皆様におかれましては、日頃よりご支援ご協力を賜り誠にありがとうございます。
                    盛工軽音楽部は、平成30年にギター同好会から生徒総会での承認を受けて、正式に部として誕生いたしました。当時熱心に音楽に取り組んでいた部員が部への昇格に提起して成立したことであります。この部員は卒業後もプロのミュージシャンとして全国を巡り、現在も活動を続けております。
                  </p>
                  <p>
                    さて軽音楽部の印象に関してでございますが、90年代においてはエレキギターを持っているだけで、いわゆる不良少年と認知されることも多かったり、また現在でも全国軽音楽協会が発行する月刊誌においても「校内でヒエラルキーの低い部活動」と認知されている高校も少なくないとさえ特集されております。しかし現在所属する部員たちは音楽が大好きで練習に真剣に取り組んでおり、仲間とともに「観客を感動させる演奏」を目標に活動をしています。日常の部活動での練習の成果を、矢巾祭・ペアレン醸造祭などの地元イベントで披露し、また児童養護施設での演奏会などで地域への貢献にも幅広く取り組んでいます。今年度は中学生部活動体験会に盛工の文化部として初めて参加し、体験に来た中学生・保護者からは好評を頂くことが出来ました。また高文祭では全県29バンドが参加した中で第3位の成績を収めることが出来ました。
                  </p>
                  <p>
                    ポップミュージックは時代を彩ってきた音楽で誰しもこの歌を聴くとあの頃を思いだすという曲があると思います。そのような時代とともに移り行く音楽を、多くの皆様に楽しんでいただけるよう軽音楽部は邁進してまいりますので、今後も同窓会の皆様にはご理解ご協力を賜りますようお願い上げて結びの言葉といたします。
                  </p>
                </div>
              </article>

              <article className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">第47回岩手県高等学校総合文化祭第24回軽音楽発表会</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>優秀賞（第3位）バンド名：@fternoon.</li>
                  <li>メンバー：浦田華花 (E3)、小武方幸来 (EI3)、岩下愛理 (AD2)、角掛彩花 (AD2)</li>
                  <li>優良賞（第位）バンド名：Springrainy.</li>
                  <li>メンバー：宮田虎太郎 (M3)、伊藤優芽 (ME2)、戸田拓海 (EI2)、岸本龍斗 (Ch2)、黒崎柊人 (Ch2)</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section class="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-12 mt-12">
          <div class="space-y-10">
            <div>
              <h2 class="text-2xl md:text-3xl font-bold text-gray-900">囲碁将棋部</h2>
            </div>

            <div class="space-y-8">
              <article class="space-y-3">
                <h3 class="text-xl font-semibold text-gray-900">第46回岩手県高等学校将棋大会</h3>
                <ul class="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>男子団体 級 第位 千葉響希 (EI3)、鈴木広翔 (EI3)、藤川裕睦 (EI3)</li>
                  <li>男子団体 級 第位 北川蓮 (E3)、米沢柊真 (EI3)、千葉吹雅 (EI3)</li>
                </ul>
              </article>

              <article class="space-y-3">
                <h3 class="text-xl font-semibold text-gray-900">第48回文部科学大臣杯全国高等学校囲碁選手権大会岩手県大会</h3>
                <ul class="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>個人戦Ⅰ級 第位 工藤蒼空 (AD3)</li>
                  <li>個人戦Ⅱ級 第位 福田拓也 (C1)</li>
                  <li>女子個人 級 第位 犬飼珠乃 (C1)</li>
                  <li>初段認定 鈴木広翔 (EI3)</li>
                </ul>
              </article>

              <article class="space-y-3">
                <h3 class="text-xl font-semibold text-gray-900">令和年度岩手県高等学校校級別囲碁大会</h3>
                <ul class="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>B級 第位 月舘夏 (EI1)、第位 澁谷魁人 (EI1)</li>
                  <li>G級 第位 犬飼珠乃 (C1)</li>
                </ul>
              </article>

              <article class="space-y-3">
                <h3 class="text-xl font-semibold text-gray-900">令和年度第23回岩手県高等学校文化連盟将棋竜王戦</h3>
                <ul class="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>B級 第位 遠藤尚広 (M2)</li>
                  <li>初段認定 鈴木広翔 (EI3)</li>
                </ul>
              </article>

              <article class="space-y-3">
                <h3 class="text-xl font-semibold text-gray-900">第33回岩手県高等学校文化連盟囲碁新人大会</h3>
                <ul class="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>男子団体 級 第位 一柳リイ (E2)、工藤蒼空 (AD3)、小川輝輝 (M2)</li>
                  <li>男子個人Ⅱ級 第位 澁谷魁人 (EI1)、第位 山崎頼翔 (C1)</li>
                  <li>D級 第位 佐藤葵 (E1)</li>
                </ul>
              </article>

              <article class="space-y-3">
                <h3 class="text-xl font-semibold text-gray-900">第43回岩手県高等学校文化連盟将棋新人大会</h3>
                <ul class="list-disc list-outside pl-5 space-y-1 text-gray-700">
                  <li>男子個人 級 第位 石井悠利 (ME1)、第位 澁谷魁人 (EI1)、第位 佐々木聖将 (M1)</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ClubActivities;
