import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Award, Briefcase, GraduationCap, Mail, Linkedin, ExternalLink, Users } from 'lucide-react';

const AlumniProfile: React.FC = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  const alumniData: { [key: string]: any } = {
    '1': {
      id: 1,
      name: '田中 さくら',
      year: '2018',
      degree: 'コンピューターサイエンス学士',
      profession: 'テクノロジー起業家・CEO',
      company: 'イノベートテック・ソリューションズ',
      location: 'サンフランシスコ、カリフォルニア州',
      industry: 'テクノロジー',
            club: '起業研究会',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      coverImage: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop',
      achievement: '5000万ドルの価値を持つAIスタートアップを創設',
      bio: '田中さくらは、人工知能とヘルスケアテクノロジー分野で重要な貢献をしたビジョナリー起業家です。コンピューターサイエンスプログラムを優秀な成績で卒業後、シリコンバレーのテックエコシステムでリーダーとしての地位を素早く確立しました。彼女の会社であるイノベートテック・ソリューションズは、全国の病院で患者ケアを革新したAIパワー診断ツールの開発に焦点を当てています。',
      careerJourney: [
        {
          year: '2018-2019',
          role: 'ソフトウェアエンジニア',
          company: 'Google',
          description: '検索最適化のための機械学習アルゴリズムに取り組み、Googleでキャリアをスタート。'
        },
        {
          year: '2019-2021',
          role: 'シニアMLエンジニア',
          company: 'Apple',
          description: 'iOSアプリケーションのプライバシー保護機械学習機能の開発を主導。'
        },
        {
          year: '2021-現在',
          role: '创設者・CEO',
          company: 'イノベートテック・ソリューションズ',
          description: 'AIパワーヘルスケア診断に焦点を当てた会社を設立、シリーズAラウンドで5000万ドルを調達。'
        }
      ],
      achievements: [
        'Forbes 30 Under 30 (2022)',
        'TechCrunchディスラプター賞 (2023)',
        'MITテクノロジーレビューイノベーター (2024)',
        'AIヘルスケアサミット特別講演',
        'ヘルスケア分野のAIに関する研究論文　12本公開',
        '25人以上のスタートアップ创設者のメンター'
      ],
      education: [
        {
          degree: 'コンピューターサイエンス学士',
          institution: '八戸西高等学校',
          year: '2018',
          honors: '優等卒業、ファイ・ベータ・カッパ'
        }
      ],
      personalInfo: {
        hometown: 'ポートランド、オレゴン州',
        interests: ['ロッククライミング', '写真', '持続可能テクノロジー', 'メンタリング'],
        languages: ['英語', 'スペイン語', '中国語'],
        volunteerWork: 'TechCorps理事、支援の行き届かない若者へのプログラミング教育'
      },
      quote: '大学は単に学位を与えてくれただけではありません。批判的に考え、大きな夢を描き、その夢を現実にするネットワークを与えてくれました。',
      contact: {
        email: 'sarah.johnson@innovatetech.com',
        linkedin: 'https://linkedin.com/in/sarahjohnsontech',
        website: 'https://innovatetech.com'
      }
    },
    '2': {
      id: 2,
      name: '陳 健太',
      year: '2015',
      degree: '医学博士',
      profession: '医学研究者・がん専門医',
      company: 'ハーバード医科大学',
      location: 'ボストン、マサチューセッツ州',
      industry: 'ヘルスケア',
            club: '医学研究会',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      coverImage: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop',
      achievement: '画期的ながん研究プロジェクトを主導',
      bio: '陳健太博士は、免疫療法における画期的な研究で世界のがん治療プロトコルを変革した著名ながん専門医・研究者です。彼の研究はFDA承認、3つの治療法を生み出し、何千人もの患者の命を延ばしてきました。現在はハーバード医科大学の準教授として、継続的にがん研究の限界を押し広げる一方、アクティブな臨床練習を維持しています。',
      careerJourney: [
        {
          year: '2015-2018',
          role: '医学研修医',
          company: 'ジョンズ・ホプキンス病院',
          description: 'がん学と血液学に焦点を当てた内科医学研修を修了。'
        },
        {
          year: '2018-2021',
          role: 'がん専門フェロー',
          company: 'メモリアル・スローン・ケタリング',
          description: '免疫療法研究を伴う腐瘤内科の専門フェローシップ。'
        },
        {
          year: '2021-現在',
          role: '準教授・研究者',
          company: 'ハーバード医科大学',
          description: 'ダナファーバーで患者を治療しながら、がん免疫療法研究ラボを主導。'
        }
      ],
      achievements: [
        'Nature誌筆頭著者（3本）',
        'NIH研究助成金受賞（230万ドル）',
        'アメリカがん学会フェロー',
        'ASCO若手研究者賞',
        'FDA承認がん治療法3種類を開発',
        '査読付き論文、50本以上'
      ],
      education: [
        {
          degree: '医学博士',
          institution: '八戸西高等学校連携大学医学部',
          year: '2015',
          honors: 'アルファ・オメガ・アルファ名誉学会'
        },
        {
          degree: '生化学学士',
          institution: '八戸西高等学校',
          year: '2011',
          honors: '最優等卒業'
        }
      ],
      personalInfo: {
        hometown: 'シアトル、ワシントン州',
        interests: ['クラシック音楽', 'マラソン', '医学教育', 'グローバルヘルス'],
        languages: ['英語', '中国語', 'フランス語'],
        volunteerWork: '支援の行き届かない地域での無料がん検診を提供'
      },
      quote: '治療する患者の皆さんが、なぜ医学を選んだかを思い出させてくれます。大学で学んだのは科学的厳密さだけではなく、研究の原動力となる悲惇の心でした。',
      contact: {
        email: 'm.chen@harvard.edu',
        linkedin: 'https://linkedin.com/in/drmichaelchen'
      }
    },
    '3': {
      id: 3,
      name: '山田 美咲',
      year: '2012',
      degree: '法務博士',
      profession: '環境弁護士・政策推進者',
      company: 'グリーン・ジャスティス連合',
      location: 'ワシントンDC',
      industry: '法律',
            club: '環境法研究会',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      coverImage: 'https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop',
      achievement: '連邦レベルでの気候政策改革を推進',
      bio: '山田美咲は、法的な推進活動と政策改革を通じて気候変動と闘うことにキャリアを捧げた情熱的な環境弁護士です。2023年の最高裁判所の画期的な勝訴は、企業の環境責任に新しい判例を確立しました。グリーン・ジャスティス連合のエグゼクティブディレクターとして、全国で気候訴訟に取り組む弁護士チームを率いています。',
      careerJourney: [
        {
          year: '2012-2015',
          role: 'アソシエイト弁護士',
          company: '自然資源防衛評議会',
          description: '大気と水質の汚染訴訟に取り組み、環境法の経験を積んでいました。'
        },
        {
          year: '2015-2019',
          role: 'シニア環境弁護士',
          company: 'アースジャスティス',
          description: '石炭発電所許可への成功した異議申し立てを含む、主要な気候訴訟事件を主導。'
        },
        {
          year: '2019-現在',
          role: 'エグゼクティブディレクター',
          company: 'グリーン・ジャスティス連合',
          description: '気候政策改革に取り組む環境弁護士の連合を設立し、率いています。'
        }
      ],
      achievements: [
        '最高裁判所訴訟勝訴 (2023)',
        '環境法研究所賞',
        'ホワイトハウス気候政策アドバイザー',
        'ハーバード環境法レビュー編集者',
        '連邦裁判所の訴訟15件以上を担当',
        '50以上の環境団体の連合を率いる'
      ],
      education: [
        {
          degree: '法務博士',
          institution: '八戸西高等学校連携大学法学部',
          year: '2012',
          honors: 'オーダー・オブ・ザ・コイフ、環境法レビュー編集長'
        },
        {
          degree: '環境学学士',
          institution: '八戸西高等学校',
          year: '2009',
          honors: 'ファイ・ベータ・カッパ'
        }
      ],
      personalInfo: {
        hometown: 'デンバー、コロラド州',
        interests: ['ハイキング', '持続可能な生活', '環境写真', '政策文書作成'],
        languages: ['英語', 'スペイン語', 'ポルトガル語'],
        volunteerWork: '気候変動の影響を受ける先住民コミュニティへのプロボノ法的サービス'
      },
      quote: '法科大学院では、法的判例が環境正義のための強力な力になり得ることを学びました。私たちが勝ち取る一つ一つの訴訟が、将来の世代のために地球を守っているのです。',
      contact: {
        email: 'e.rodriguez@greenjustice.org',
        linkedin: 'https://linkedin.com/in/emilyrodriguezlaw'
      }
    }
  };

  const alumni = alumniData[id || '1'];

  if (!alumni) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">同窓生が見つかりません</h1>
          <p className="text-gray-600 mb-8">リクエストされた同窓生のプロフィールが見つかりませんでした。</p>
          <Link
            to="/alumni-profiles"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
同窓生名簿に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/alumni-profiles"
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Alumni Directory
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 rounded-3xl mx-4 sm:mx-6 lg:mx-8 overflow-hidden">
          <img
            src={alumni.coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-end">
            <div className="lg:col-span-2">
              <div className="text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg font-medium">{alumni.year}年卒業</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                  {alumni.name}
                </h1>
                <p className="text-2xl font-light mb-4">{alumni.profession}</p>
                <p className="text-xl text-blue-200">{alumni.company}</p>
                <div className="flex items-center mt-6">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-lg">{alumni.location}</span>
                </div>
                <div className="mt-3 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur">
                  <Users className="w-4 h-4 mr-2" />
                  <span>当時の部活: {alumni.club}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-64 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Quote */}
              <div className="bg-blue-50 rounded-3xl p-8">
                <blockquote className="text-2xl font-light text-gray-800 italic leading-relaxed">
                  "{alumni.quote}"
                </blockquote>
              </div>

              {/* Biography */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">経歴</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{alumni.bio}</p>
              </div>

              {/* Career Journey */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">キャリアジャーニー</h2>
                <div className="space-y-6">
                  {alumni.careerJourney.map((job: any, index: number) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
                        {index < alumni.careerJourney.length - 1 && (
                          <div className="w-px h-16 bg-gray-200 ml-2 mt-2"></div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="text-sm text-blue-600 font-semibold">{job.year}</div>
                        <h3 className="text-xl font-bold text-gray-900">{job.role}</h3>
                        <p className="text-gray-700 font-medium">{job.company}</p>
                        <p className="text-gray-600 mt-2">{job.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">主な実績</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {alumni.achievements.map((achievement: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">連絡先</h3>
                <div className="space-y-4">
                  {alumni.contact.email && (
                    <a
                      href={`mailto:${alumni.contact.email}`}
                      className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Mail className="w-5 h-5" />
                      <span>メール</span>
                    </a>
                  )}
                  {alumni.contact.linkedin && (
                    <a
                      href={alumni.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {alumni.contact.website && (
                    <a
                      href={alumni.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>ウェブサイト</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">学歴</h3>
                <div className="space-y-4">
                  {alumni.education.map((edu: any, index: number) => (
                    <div key={index}>
                      <div className="flex items-start space-x-3">
                        <GraduationCap className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                          <p className="text-gray-600">{edu.institution}</p>
                          <p className="text-sm text-gray-500">{edu.year}</p>
                          {edu.honors && (
                            <p className="text-sm text-blue-600 font-medium">{edu.honors}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Info */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">個人情報</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">出身地</h4>
                    <p className="text-gray-600">{alumni.personalInfo.hometown}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">当時の部活</h4>
                    <p className="text-gray-600">{alumni.club}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">趣味</h4>
                    <div className="flex flex-wrap gap-2">
                      {alumni.personalInfo.interests.map((interest: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">言語</h4>
                    <p className="text-gray-600">{alumni.personalInfo.languages.join(', ')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">ボランティア活動</h4>
                    <p className="text-gray-600">{alumni.personalInfo.volunteerWork}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Alumni */}
      <section className="py-20 bg-gray-50 rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {alumni.industry}分野の同窓生
            </h2>
            <Link
              to="/alumni-profiles"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
すべての同窓生を見る
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlumniProfile;
