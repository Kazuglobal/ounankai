import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Store, MapPin, ExternalLink, Calendar, Users } from 'lucide-react';

// ダミーデータ（実際にはAlumniProfiles.tsxのbusinessHighlightsから取得）
const businessData = {
  1: {
    id: '1',
    name: 'Cafe Ounan',
    owner: '佐藤 優子（1999年卒）',
    category: 'カフェ・コミュニティスペース',
    location: '青森県八戸市',
    description: '地元の食材を活かしたクラフトコーヒーとスイーツで人気のカフェ。月1回の同窓生交流イベントを開催中。',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    url: 'https://cafe-ounan.example.com',
    foundedYear: '2018年',
    employees: '5名',
    services: [
      'クラフトコーヒー',
      '手作りスイーツ',
      'コミュニティスペース貸出',
      '同窓生交流イベント'
    ],
    story: '大学卒業後、大手カフェチェーンで10年間勤務。地元に貢献したいという思いから、2018年に故郷の八戸市でカフェをオープン。地元産の食材にこだわり、同窓生の農家から直接仕入れることで、地域経済の活性化にも貢献している。',
    vision: '地域の人々が集まる「サードプレイス」として、カフェを通じて人と人をつなぐコミュニティづくりを目指しています。同窓生ネットワークを活かし、月1回の交流イベントでは、様々な業界で活躍する卒業生が集まり、新たなビジネスの種が生まれています。'
  }
};

function BusinessDetail() {
  const { id } = useParams<{ id: string }>();
  const business = businessData[id as keyof typeof businessData];

  if (!business) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">ビジネスが見つかりません</h2>
          <Link
            to="/alumni-profiles?tab=business"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-500"
          >
            <ArrowLeft className="h-4 w-4" />
            一覧に戻る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* ヘッダー画像 */}
      <div className="relative h-64 overflow-hidden">
        <img src={business.image} alt={business.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        
        {/* 戻るボタン */}
        <Link
          to="/alumni-profiles?tab=business"
          className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg transition hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4" />
          一覧に戻る
        </Link>

        {/* タイトル */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              <Store className="h-3 w-3" />
              {business.category}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <MapPin className="h-3 w-3" />
              {business.location}
            </span>
          </div>
          <h1 className="text-3xl font-bold">{business.name}</h1>
          <p className="mt-2 text-sm text-blue-100">{business.owner}</p>
        </div>
      </div>

      {/* コンテンツ */}
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="space-y-6">
          {/* 基本情報 */}
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">基本情報</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">設立</p>
                  <p className="font-semibold text-gray-900">{business.foundedYear}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">従業員数</p>
                  <p className="font-semibold text-gray-900">{business.employees}</p>
                </div>
              </div>
            </div>
          </div>

          {/* 概要 */}
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">概要</h2>
            <p className="text-gray-700 leading-relaxed">{business.description}</p>
          </div>

          {/* サービス・事業内容 */}
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">サービス・事業内容</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {business.services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-xl bg-blue-50 px-4 py-3"
                >
                  <div className="h-2 w-2 rounded-full bg-blue-600" />
                  <span className="text-sm font-medium text-gray-900">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ストーリー */}
          <div className="rounded-3xl bg-white p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">創業ストーリー</h2>
            <p className="text-gray-700 leading-relaxed">{business.story}</p>
          </div>

          {/* ビジョン */}
          <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">ビジョン</h2>
            <p className="text-gray-700 leading-relaxed">{business.vision}</p>
          </div>

          {/* ウェブサイトへのリンク */}
          {business.url && (
            <div className="text-center">
              <a
                href={business.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-xl transition hover:bg-blue-500"
              >
                公式サイトを見る
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BusinessDetail;

