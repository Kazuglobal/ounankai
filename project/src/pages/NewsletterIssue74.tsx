import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Bookmark } from 'lucide-react';

type NewsletterSection = {
  id: string;
  title: string;
  note?: string;
  body?: React.ReactNode;
};

const issueMetadata = {
  title: '盛工同窓会報 第74号',
  publishedOn: '令和年11月15日発行',
};

const sections: NewsletterSection[] = [
  {
    id: 'yoshida-yukino',
    title: '吉田雪乃さん（令和2年度電子情報科卒）',
    body: (
      <article className="space-y-8">
        <header className="space-y-2">
          <p className="text-sm font-semibold tracking-wide text-morioka-600 uppercase">
            Alumni Voice - Speed Skating
          </p>
          <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
            同窓会報に寄せて
          </h4>
        </header>

        <section className="rounded-3xl border border-purple-100 bg-white shadow-sm">
          <div className="bg-gradient-to-r from-morioka-600 to-purple-500 px-6 py-4 rounded-t-3xl">
            <h5 className="text-xl font-semibold text-white">同窓会報に寄せて</h5>
          </div>
          <div className="px-6 py-6 space-y-4">
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900 mb-1">
                吉田 雪乃
              </p>
              <p className="text-sm text-gray-600">
                （令和2年度／電子情報科卒）
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 my-6">
              <div className="rounded-xl border-2 border-amber-200 bg-amber-50 p-4">
                <p className="text-xs font-semibold text-amber-700 mb-2">写真キャプション</p>
                <p className="text-sm text-gray-800">
                  2024 第31回全日本距離別選手権大会 500M <span className="font-bold text-amber-600">優勝</span>
                </p>
              </div>
              <div className="rounded-xl border-2 border-gray-200 bg-gray-50 p-4">
                <p className="text-xs font-semibold text-gray-700 mb-2">写真キャプション</p>
                <p className="text-sm text-gray-800">
                  同大会 1000M <span className="font-bold text-gray-600">第2位</span>
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              令和2年度電子情報科を卒業し、現在株式会社寿広に入社し4年目を迎えました。
            </p>

            <p className="text-gray-700 leading-relaxed">
              昨シーズンは、初めてワールドカップ日本代表に選出され世界を転戦しました。第1戦帯広大会では表彰台まで0.03差で表彰台こそ逃しましたが、世界で戦える力があると自信をつけることができました。3月に開催された世界距離別にも出場することができシーズンを通して充実した様々な経験を送ることができたと思います。
            </p>

            <p className="text-gray-700 leading-relaxed">
              今シーズンは、昨シーズンで課題として浮き彫りとなったフィジカルやメンタル強化を図るトレーニングを積んできました。自信をもって挑んだ全日本距離別（10/25～27）では、500m初優勝、1000m2位という結果を残すことができ2年連続で日本代表に選出されました。500mは優勝を狙ったなかで内容よりも勝ち切れたことが今後にとって大きな収穫となります。また、1000mでは春から積んできた持久力強化が表れ自己ベストを更新して2位に入ることができました。
            </p>

            <p className="text-gray-700 leading-relaxed">
              次のステップである世界大会では、500mで安定的に上位を狙い、強化を図っていきたいと思います。そして、来シーズン開催されるオリンピックメダル獲得に向けて経験を積んでいきたいと思います。
            </p>

            <p className="text-gray-700 leading-relaxed">
              最後になりますが、同窓会をはじめ、体育後援会・瀬戸校長先生など多くの方々から多大なご支援や激励をいただき私にとって大きな励みとなっています。感謝しかありません。盛工同窓生としての誇りを忘れず更に盛工会・体育後援会を盛り上げていけるよう精進して参りますので、今後ともご指導・ご鞭撻のほどよろしくお願いします。
            </p>

            <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 mt-6">
              <p className="text-sm font-semibold text-blue-800 mb-2">【同窓会より】</p>
              <p className="text-sm text-gray-800 leading-relaxed">
                同窓会では、ミラノ・コルティナ2026冬季オリンピックに向けた吉田選手への支援を計画しております。ご声援・ご協力お願いします。
              </p>
            </div>
          </div>
        </section>
      </article>
    ),
  },
  {
    id: 'takeda-hidenori',
    title: '竹田英憲さん（令和3年度土木科卒）',
    body: (
      <article className="space-y-8">
        <header className="space-y-2">
          <p className="text-sm font-semibold tracking-wide text-morioka-600 uppercase">
            Alumni Voice - Disaster Relief
          </p>
          <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
            能登半島地震災害支援を経験して
          </h4>
        </header>

        <section className="rounded-3xl border border-purple-100 bg-white shadow-sm">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 rounded-t-3xl">
            <h5 className="text-xl font-semibold text-white">能登半島地震災害支援を経験して</h5>
          </div>
          <div className="px-6 py-6 space-y-4">
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900 mb-1">
                竹田 英憲
              </p>
              <p className="text-sm text-gray-600">
                （令和3年度土木科卒）
              </p>
              <p className="text-sm text-gray-500 mt-1">
                株式会社郡南建設
              </p>
            </div>

            <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-4 my-6">
              <p className="text-xs font-semibold text-indigo-700 mb-2">顔写真</p>
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-sm text-gray-500">竹田英憲さん</p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              私は、本年元旦に最大震度7を記録した能登半島地震災害への災害支援で3月5日〜12日までの8日間、石川県の珠洲市に行ってきました。
            </p>

            <p className="text-gray-700 leading-relaxed">
              私が勤めている会社では、主に水道工事に関する事業を行っており、今回の災害支援では、地震で破損・漏水した水道管の修繕を主な目的としました。市内に入ると住宅のほとんどが倒壊しており、車がその下敷きになっている所などもありました。道路もアスファルトの割れや陥没、液状化現象により下水道も隆起しマンホールが露わになってしまっているところや、場所によっては地面が崩れてしまい、片側を通るのがやっとというような状態でした。
            </p>

            <p className="text-gray-700 leading-relaxed">
              私はこのような状況を自分の目で直接目にするという経験が無かったため、テレビやスマホなどの様な画面越しでは伝えることの出来ない光景に強い衝撃を受け、自分の出来ることの少なさを痛感するとともに、自分に出来ることを精一杯やろうという気持ちがより一層強くなりました。そして、その気持ちは普段の仕事においても大切なことだと感じています。
            </p>

            <p className="text-gray-700 leading-relaxed">
              私は現在、盛岡市の内丸や三本柳などで配水管の布設替工事に従事しています。既設の水道管を耐震性高い製品へ入れ替える工事であり、その町の人たちの安全な暮らしを支え続ける重要な仕事です。私はこれからもこの仕事に誇りと自信を持ち、これからも頑張っていきたいと思います。
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-3">
                <p className="text-xs font-semibold text-gray-700 mb-2">災害現場の様子 1</p>
                <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                  <p className="text-xs text-gray-500">写真</p>
                </div>
              </div>
              <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-3">
                <p className="text-xs font-semibold text-gray-700 mb-2">災害現場の様子 2</p>
                <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                  <p className="text-xs text-gray-500">写真</p>
                </div>
              </div>
              <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-3">
                <p className="text-xs font-semibold text-gray-700 mb-2">災害現場の様子 3</p>
                <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                  <p className="text-xs text-gray-500">写真</p>
                </div>
              </div>
              <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-3">
                <p className="text-xs font-semibold text-gray-700 mb-2">災害現場の様子 4</p>
                <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                  <p className="text-xs text-gray-500">写真</p>
                </div>
              </div>
              <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-3">
                <p className="text-xs font-semibold text-gray-700 mb-2">復旧作業の様子 1</p>
                <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                  <p className="text-xs text-gray-500">写真</p>
                </div>
              </div>
              <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-3">
                <p className="text-xs font-semibold text-gray-700 mb-2">復旧作業の様子 2</p>
                <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                  <p className="text-xs text-gray-500">写真</p>
                </div>
              </div>
              <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-3">
                <p className="text-xs font-semibold text-gray-700 mb-2">復旧作業の様子 3</p>
                <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                  <p className="text-xs text-gray-500">写真</p>
                </div>
              </div>
              <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-3">
                <p className="text-xs font-semibold text-gray-700 mb-2">復旧作業の様子 4</p>
                <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                  <p className="text-xs text-gray-500">写真</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    ),
  },
  {
    id: 'baseball-autumn-tournament',
    title: '硬式野球部主将 丹野 亮仁（建築・デザイン科3年）',
    body: (
      <article className="space-y-8">
        <header className="space-y-2">
          <p className="text-sm font-semibold tracking-wide text-morioka-600 uppercase">
            Club Report - Baseball
          </p>
          <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
            秋季大会を終えて
          </h4>
        </header>

        <section className="rounded-3xl border border-purple-100 bg-white shadow-sm">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-4 rounded-t-3xl">
            <h5 className="text-xl font-semibold text-white">秋季大会を終えて</h5>
          </div>
          <div className="px-6 py-6 space-y-4">
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900 mb-1">
                丹野 亮仁
              </p>
              <p className="text-sm text-gray-600">
                建築・デザイン科3年
              </p>
              <p className="text-sm text-gray-500 mt-1">
                硬式野球部主将
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed">
              私たち硬式野球部は、第77回秋季東北地区高等学校野球岩手県大会に出場しました。今大会を振り返り、私たち3年生は新チームに大きな期待をしています。
            </p>

            <p className="text-gray-700 leading-relaxed">
              春季東北大会出場を目標に日々の練習に励んでいました。盛岡工業高校は、3回戦で盛岡誠桜高校に敗退し、盛岡地区大会では盛岡桜高校に敗退しましたが、代表として岩手県大会に出場することになりました。
            </p>

            <div className="rounded-xl border-2 border-green-200 bg-green-50 p-4 my-6">
              <p className="text-xs font-semibold text-green-700 mb-2">大会ハイライト</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-800">
                  <span className="font-bold text-green-600">初戦:</span> 盛岡第一高校戦 勝利
                </p>
                <p className="text-sm text-gray-800">
                  <span className="font-bold text-green-600">2回戦:</span> 花巻東高校戦 2-8 敗北
                </p>
                <p className="text-sm text-gray-800">
                  <span className="font-bold text-green-600">最終結果:</span> ベスト8
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              初戦は夏の大会でベスト4まで勝ち上がった盛岡第一高校との試合でした。両チーム共にヒット数が10本を超える乱打戦となり、かなり苦しい戦いでしたが、一挙7得点の繋ぐバッティングにより勝利を収めることができました。続く花巻東高校の試合では2対8で敗北し、ベスト8という結果になりました。
            </p>

            <p className="text-gray-700 leading-relaxed">
              目標の東北大会出場は達成することができなかったのですが、私たち3年生の夏が終わった後の新チームの試合を観ることができて大きな手応えを感じることができました。
            </p>

            <p className="text-gray-700 leading-relaxed">
              今大会の経験を活かし、来夏は甲子園でプレーできるように精一杯努力していこうと思います。
            </p>

            <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-4 mt-6">
              <p className="text-sm font-semibold text-blue-800 mb-2">【主将コメント】</p>
              <p className="text-sm text-gray-800 leading-relaxed">
                新チームの皆さんには、この悔しさをバネに更なる高みを目指してほしいと思います。チーム全員で支え合い、切磋琢磨することで大きな力になります。後輩たちの甲子園出場を心から応援しています。
              </p>
            </div>
          </div>
        </section>
      </article>
    ),
  },
];

const NewsletterIssue74: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // URLにハッシュ（アンカー）が含まれている場合、そのセクションにスクロール
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // 少し遅延させてスクロールを確実に実行
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      // ハッシュがない場合はページトップにスクロール
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-morioka-600 hover:text-morioka-700 transition-colors"
            aria-label="ホームへ戻る"
          >
            <ArrowLeft className="w-4 h-4" />
            ホームへ戻る
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-sm text-gray-500">会報</span>
        </div>

        <div className="bg-gradient-to-r from-purple-50 via-white to-blue-50 rounded-3xl shadow-xl p-8 sm:p-12 mb-12">
          <div className="flex items-center gap-3 text-sm font-semibold text-morioka-600 mb-4">
            <Bookmark className="w-5 h-5" />
            会報アーカイブ
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {issueMetadata.title}
          </h1>
          <p className="text-lg text-gray-600">{issueMetadata.publishedOn}</p>
          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            新聞「盛工同窓会報」第74号の全文をカテゴリごとに整理して掲載しています。
            掲載内容は順次追記・更新されます。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          <aside className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-2xl shadow-lg p-6 space-y-4 border border-purple-100">
              <div>
                <p className="text-xs font-semibold text-morioka-600 uppercase tracking-widest mb-2">
                  CONTENTS
                </p>
                <h2 className="text-lg font-bold text-gray-900">
                  第74号 カテゴリ一覧
                </h2>
              </div>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block rounded-xl border border-transparent bg-purple-50/60 px-4 py-3 text-sm font-semibold text-morioka-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-morioka-200 hover:bg-purple-100/80"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="lg:col-span-3 space-y-12">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-morioka-600 to-purple-600 px-6 sm:px-10 py-6 sm:py-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {section.title}
                  </h3>
                  {section.note && (
                    <p className="mt-3 text-sm sm:text-base text-purple-100 leading-relaxed">
                      {section.note}
                    </p>
                  )}
                </div>
                <div className="px-6 sm:px-10 py-6 sm:py-8 bg-white">
                  {section.body ? (
                    section.body
                  ) : (
                    <p className="text-gray-600 leading-relaxed">
                      詳細な内容は追って掲載予定です。
                    </p>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterIssue74;
