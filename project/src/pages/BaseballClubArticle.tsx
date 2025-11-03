import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy } from 'lucide-react';

const BaseballClubArticle: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => { if (window.history.length > 1) navigate(-1); else navigate('/'); }}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5" />
          ホームに戻る
        </button>

        {/* Article Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Trophy className="h-6 w-6 text-green-600" />
            <span className="text-sm font-semibold tracking-wide text-green-600 uppercase">
              Club Activity Report
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            硬式野球部
          </h1>
          <p className="text-xl text-gray-600">
            秋季大会を終えて ─ ベスト8の記録と新チームへの期待
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative h-96 bg-gradient-to-br from-green-700 to-blue-700 rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* 野球ボールを最前面に配置 */}
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <div className="text-white/60 text-9xl drop-shadow-2xl animate-pulse">⚾</div>
          </div>
          {/* 白いカードを小さくして右下に配置 */}
          <div className="absolute bottom-4 right-4 max-w-sm z-20">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
              <p className="text-sm font-semibold text-green-600 mb-2">2024年度</p>
              <h2 className="text-lg font-bold text-gray-900">第77回秋季東北地区高等学校野球岩手県大会 ベスト8</h2>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <article className="space-y-8">
          {/* 主将からのメッセージ */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="mb-6 pb-4 border-b border-gray-200">
              <p className="text-sm text-gray-600 mb-1">硬式野球部主将</p>
              <p className="text-lg font-bold text-gray-900">丹野 亮仁</p>
              <p className="text-sm text-gray-600">建築・デザイン科3年</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>
                私たち硬式野球部は、第77回秋季東北地区高等学校野球岩手県大会に出場しました。<br />
                今大会を振り返り、私たち3年生は新チームに大きな期待をしています。
              </p>

              <p>
                春季東北大会出場を目標に日々の練習に励んでいました。<br />
                盛岡工業高校は、3回戦で盛岡誠桜高校に敗退し、盛岡地区大会では盛岡桜高校に敗退し、代表として岩手県大会に出場することになりました。
              </p>

              <p>
                初戦は夏の大会でベスト4まで勝ち上がった盛岡第一高校との試合でした。両チーム共にヒット数が10本を超える乱打戦となり、かなり苦しい戦いでしたが、一挙7得点の繋ぐバッティングにより勝利を収めることができました。続く花巻東高校の試合では2対8で敗北し、ベスト8という結果になりました。
              </p>

              <p>
                目標の東北大会出場は達成することができなかったのですが、私たち3年生の夏が終わった後の新チームの試合を観ることができて大きな手応えを感じることができました。
              </p>

              <p>
                今大会の経験を活かし、来夏は甲子園でプレーできるように精一杯努力していこうと思います。
              </p>
            </div>
          </section>
        </article>

        {/* Back to Top */}
        <div className="mt-12 text-center">
          <button
            onClick={() => { if (window.history.length > 1) navigate(-1); else navigate('/'); }}
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="h-5 w-5" />
            ホームに戻る
          </button>
        </div>
      </div>
    </div>
  );
};

export default BaseballClubArticle;
