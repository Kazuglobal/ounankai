import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Music } from 'lucide-react';

const LightMusicClubArticle: React.FC = () => {
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
            <Music className="h-6 w-6 text-purple-600" />
            <span className="text-sm font-semibold tracking-wide text-purple-600 uppercase">
              Club Activity Report
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            軽音楽部 近況報告
          </h1>
          <p className="text-xl text-gray-600">
            観客を感動させる演奏を目指して ─ 高文祭第3位
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative h-96 bg-gradient-to-br from-purple-700 to-pink-700 rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white/30 text-9xl">🎸</div>
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <p className="text-sm font-semibold text-purple-600 mb-2">2024年度</p>
              <h2 className="text-2xl font-bold text-gray-900">第47回岩手県高等学校総合文化祭 第3位</h2>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <article className="space-y-8">
          {/* 記事本文 */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="mb-6 pb-4 border-b border-gray-200">
              <p className="text-sm text-gray-600 mb-1">軽音楽部顧問</p>
              <p className="text-lg font-bold text-gray-900">小平 創</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>
                同窓会の皆様におかれましては、日頃よりご支援ご協力を賜り誠にありがとうございます。<br />
                盛工軽音楽部は、平成30年にギター同好会から生徒総会での承認を受けて、正式に部として誕生いたしました。当時熱心に音楽に取り組んでいた部員が部への昇格に提起して成立したことであります。この部員は卒業後もプロのミュージシャンとして全国を巡り、現在も活動を続けております。
              </p>

              <p>
                さて軽音楽部の印象に関してでございますが、90年代においてはエレキギターを持っているだけで、いわゆる不良少年と認知されることも多かったり、また現在でも全国軽音楽協会が発行する月刊誌においても「校内でヒエラルキーの低い部活動」と認知されている高校も少なくないとさえ特集されております。しかし現在所属する部員たちは音楽が大好きで練習に真剣に取り組んでおり、仲間とともに「観客を感動させる演奏」を目標に活動をしています。日常の部活動での練習の成果を、矢巾祭・ペアレン醸造祭などの地元イベントで披露し、また児童養護施設での演奏会などで地域への貢献にも幅広く取り組んでいます。今年度は中学生部活動体験会に盛工の文化部として初めて参加し、体験に来た中学生・保護者からは好評を頂くことが出来ました。また高文祭では全県29バンドが参加した中で第3位の成績を収めることが出来ました。
              </p>

              <p>
                ポップミュージックは時代を彩ってきた音楽で誰しもこの歌を聴くとあの頃を思いだすという曲があると思います。そのような時代とともに移り行く音楽を、多くの皆様に楽しんでいただけるよう軽音楽部は邁進してまいりますので、今後も同窓会の皆様にはご理解ご協力を賜りますようお願い上げて結びの言葉といたします。
              </p>
            </div>
          </section>

          {/* 活動実績 */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">活動実績</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  第47回岩手県高等学校総合文化祭第24回軽音楽発表会
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span><strong>優秀賞（第3位）</strong> バンド名：@fternoon.</span>
                  </li>
                  <li className="flex items-start gap-2 ml-6 text-sm text-gray-600">
                    <span>メンバー：浦田華花 (E3)、小武方幸来 (EI3)、岩下愛理 (AD2)、角掛彩花 (AD2)</span>
                  </li>
                  <li className="flex items-start gap-2 mt-4">
                    <span className="text-purple-600 mt-1">•</span>
                    <span><strong>優良賞</strong> バンド名：Springrainy.</span>
                  </li>
                  <li className="flex items-start gap-2 ml-6 text-sm text-gray-600">
                    <span>メンバー：宮田虎太郎 (M3)、伊藤優芽 (ME2)、戸田拓海 (EI2)、岸本龍斗 (Ch2)、黒崎柊人 (Ch2)</span>
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
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="h-5 w-5" />
            部活動報告に戻る
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LightMusicClubArticle;
