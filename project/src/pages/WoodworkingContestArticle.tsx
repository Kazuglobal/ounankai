import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award } from 'lucide-react';

const WoodworkingContestArticle: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          to="/club-activities"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          部活動報告に戻る
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Award className="h-6 w-6 text-amber-600" />
            <span className="text-sm font-semibold tracking-wide text-amber-600 uppercase">
              Student Achievement Report
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            高校生ものづくりコンテスト2024東北大会<br />
            <span className="text-2xl sm:text-3xl">【山形県大会】木材加工部門</span>
          </h1>
          <p className="text-xl text-gray-600">
            県勢初の3位入賞 ─ 岩手県代表として参加
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative h-96 bg-gradient-to-br from-amber-700 to-orange-700 rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white/30 text-9xl">🪚</div>
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <p className="text-sm font-semibold text-amber-600 mb-2">2024年度</p>
              <h2 className="text-2xl font-bold text-gray-900">東北大会 第3位入賞（県勢初）</h2>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <article className="space-y-8">
          {/* 記事本文 */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="mb-6 pb-4 border-b border-gray-200">
              <p className="text-sm text-gray-600 mb-1">建築・デザイン科2年</p>
              <p className="text-lg font-bold text-gray-900">工藤 耕平</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>
                私は山形県で行われた高校生ものづくりコンテスト東北大会（木材加工部門）に岩手県代表として参加しました。結果は県勢初の3位に入賞することができました。大会では、入賞できてうれしく思う反面、優勝に届かなかった悔しさも残りました。終了後には講評をいただき、何度も組み直して調整したことがかえって作品の精度を下げてしまったようでした。
              </p>

              <p>
                岩手県大会と東北大会では勉強になることがたくさんありました。水沢工業高校では、美しい墨線を引くために施された墨差しへの工夫に魅了され、一つ一つの作業の美しさを追求していました。福島工業高校では、難しい作業や精度が求められる作業に時間割く等、時間配分を工夫していました。私たちもより早くより精度の高いものに仕上げるために、何度も繰り返し道具の扱い方や作業時の工夫、気を付けるところなど身体で覚え成長できています。また、自分たちでも様々な方法を考えては試作を繰り返しましたが、成功したと思えるのは一割ほどで小さな積み重ねが非常に大事なことだと実感しております。
              </p>

              <p>
                また、色々な方とのお話を通し次に繋がる発見や工夫の仕方などその方々の培ってきた技術を継承できるように自分たちの腕を磨いていきたいです。そして、自分たちからもその作業や技術を盗み、少しでも今後の参考にしてくれればうれしいです。
              </p>

              <p>
                今回の大会に参加するにあたりたくさんの方々に支えていただきました。ありがとうございました。
              </p>
            </div>
          </section>

          {/* 写真ギャラリー */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">大会の様子</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative h-64 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-amber-300 text-6xl">📸</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <p className="text-white text-sm font-semibold">作業風景1</p>
                </div>
              </div>
              <div className="relative h-64 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-amber-300 text-6xl">📸</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                  <p className="text-white text-sm font-semibold">作業風景2</p>
                </div>
              </div>
            </div>
          </section>

          {/* 成果セクション */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">大会成績</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-amber-600 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  高校生ものづくりコンテスト2024東北大会【山形県大会】
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>木材加工部門</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>第3位入賞</strong>（県勢初）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>岩手県代表として出場</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>

        {/* Back to Top */}
        <div className="mt-12 text-center">
          <Link
            to="/club-activities"
            className="inline-flex items-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-amber-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="h-5 w-5" />
            部活動報告に戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WoodworkingContestArticle;
