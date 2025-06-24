import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Heart, Award, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'コミュニティ',
      description: '多様な同窓生ネットワークの中で生涯にわたるつながりを育む'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: '卓越性',
      description: 'あらゆる分野での優れた成果を祝福し、支援する'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: '影響力',
      description: '私たちのコミュニティと世界に意味のある変化をもたらす'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '遺産',
      description: '卒業生の世代間の架け橋を築く'
    }
  ];

  const milestones = [
    {
      year: '1950年',
      title: '設立',
      description: '500名の創設メンバーにより同窓会が正式に設立'
    },
    {
      year: '1975年',
      title: '国際展開',
      description: '10カ国に国際支部を設立'
    },
    {
      year: '2000年',
      title: 'デジタル時代',
      description: 'オンライン名簿とデジタルネットワーキングプラットフォームを開始'
    },
    {
      year: '2024年',
      title: '現代のコミュニティ',
      description: '世界75カ国で15,000人以上の活動中メンバー'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              同窓会について
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              70年以上にわたり、私たちは同窓生コミュニティの力を通じて、
              母校の過去、現在、そして未来を結ぶ架け橋となってきました。
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop"
              alt="同窓生の集まり"
              className="w-full h-80 object-cover"
            />
            <div className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">私たちの歴史</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                1950年に情熱的な卒業生グループによって設立された私たちの同窓会は、
                小さな地域ネットワークから15,000人以上の活動中メンバーを持つ
                グローバルコミュニティへと成長しました。私たちは共通の経験、
                多様な視点、そして世界にポジティブな影響を与えるというコミットメントによって結ばれています。
              </p>
              <p className="text-gray-600 leading-relaxed">
                今日、私たちの同窓生は、テクノロジーや医学から芸術や公共サービスまで、
                あらゆる分野でリーダーとして活躍しています。私たちは共に、
                イノベーションと変化を受け入れながら、母校を定義する価値と伝統を維持し続けています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">私たちの使命</h3>
              <p className="text-gray-600 leading-relaxed">
                母校卒業生のネットワークを強化・拡大し、個人の成長、
                専門的な発展、そして社会への意義ある貢献を支援する
                生涯にわたるつながりを育むこと。
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">私たちのビジョン</h3>
              <p className="text-gray-600 leading-relaxed">
                世代を橋渡しし、成果を祝福し、メンバーがコミュニティと
                世界全体でポジティブな変化を創造する力を与える
                最高の同窓生コミュニティになること。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              私たちの核となる価値観
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              私たちのコミュニティを導き、影響を形作る原則
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              私たちの歩み
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              同窓会の誇らしい歴史における主要なマイルストーン
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2">
                  <div className="bg-white rounded-3xl p-8 shadow-xl">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                詳しく知る
              </h2>
              <p className="text-xl max-w-2xl mx-auto">
                同窓生コミュニティのさまざまな側面を探索する
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                to="/bylaws"
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-200 transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-2">同窓会会則</h3>
                <p className="text-blue-100 mb-4">運営文書と組織構造をご確認ください</p>
                <div className="flex items-center text-white font-medium">
                  会則を読む
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
              <Link
                to="/board-of-directors"
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-200 transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-2">役員紹介</h3>
                <p className="text-blue-100 mb-4">同窓会を導く献身的なリーダーたちをご紹介</p>
                <div className="flex items-center text-white font-medium">
                  役員を見る
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;