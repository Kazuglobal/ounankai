import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
  Users,
  Heart,
  MessageCircle,
  ExternalLink,
  X,
  Search,
  Briefcase,
  MapPin,
  Calendar,
  ArrowRight,
  Building2,
  Store,
  UtensilsCrossed,
  Sprout,
  Phone,
  Megaphone,
  Handshake,
  Mail,
} from 'lucide-react';

type TabId = 'career' | 'business' | 'network';

type AlumniProfile = {
  id: number;
  name: string;
  year: string;
  profession: string;
  company: string;
  location: string;
  industry: string;
  image: string;
  achievement: string;
  description: string;
  highlights: string[];
};

type BusinessHighlight = {
  id: string;
  name: string;
  owner: string;
  category: string;
  location: string;
  description: string;
  image: string;
  url?: string;
};

type ProgramHighlight = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  cta?: {
    label: string;
    href: string;
  };
};

const tabs: { id: TabId; label: string; description: string }[] = [
  {
    id: 'career',
    label: '卒業生キャリア紹介',
    description: '多彩な領域で活躍する同窓生のキャリアストーリーをチェック',
  },
  {
    id: 'business',
    label: '卒業生の事業・店舗',
    description: '地元や全国で活躍する卒業生ビジネスを応援しましょう',
  },
  {
    id: 'network',
    label: '交流・ネットワーク',
    description: 'イベントやメンタリングで新しいつながりを作りましょう',
  },
];

const alumniData: AlumniProfile[] = [
  {
    id: 1,
    name: '田中 さくら',
    year: '2018',
    profession: 'テクノロジー起業家',
    company: 'イノベートテック・ソリューションズ',
    location: '東京都',
    industry: 'テクノロジー',
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    achievement: '5000万ドルの価値を持つAIスタートアップを創設',
    description: 'ヘルスケア分野における人工知能と機械学習ソリューションのイノベーションを主導。',
    highlights: ['Forbes 30 Under 30', 'TechCrunch Disruptor Award', 'MIT Technology Review Innovator'],
  },
  {
    id: 2,
    name: '陳 健太',
    year: '2015',
    profession: '医学研究者',
    company: 'ハーバード医科大学',
    location: '大阪府',
    industry: 'ヘルスケア',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    achievement: '画期的ながん研究プロジェクトを主導',
    description: '免疫療法研究を通じたがん治療の新しいアプローチを開拓。',
    highlights: ['Nature誌論文著者', 'NIH研究助成金受賞', 'アメリカがん学会フェロー'],
  },
  {
    id: 3,
    name: '山田 美咲',
    year: '2012',
    profession: '環境弁護士',
    company: 'グリーン・ジャスティス連合',
    location: '愛知県',
    industry: '法律',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    achievement: '連邦レベルでの気候政策改革を推進',
    description: '環境正義と持続可能な政策実施の推進活動を行う。',
    highlights: ['最高裁判所訴訟勝訴', '環境法研究所賞', '気候政策アドバイザー'],
  },
  {
    id: 4,
    name: '金 大輔',
    year: '2010',
    profession: '投資銀行家',
    company: 'ゴールドマン・サックス',
    location: '神奈川県',
    industry: '金融',
    image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    achievement: '20億ドル以上の取引を監督するマネージングディレクター',
    description: 'テクノロジー分野のM&Aを専門とする。',
    highlights: ['トップ1%パフォーマー', '年間最優秀取引賞', '業界リーダーシップ賞'],
  },
  {
    id: 5,
    name: '佐藤 あまり',
    year: '2014',
    profession: 'ドキュメンタリー映画監督',
    company: '独立系プロデューサー',
    location: '埼玉県',
    industry: 'メディア',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    achievement: '社会正義ドキュメンタリーでエミー賞受賞',
    description: '社会変革と意識向上を推進するインパクトのあるドキュメンタリーを制作。',
    highlights: ['エミー賞受賞', 'サンダンス映画祭選出', 'ヒューマンライツ映画賞'],
  },
  {
    id: 6,
    name: '田村 太郎',
    year: '2008',
    profession: '再生可能エネルギーエンジニア',
    company: 'テスラエナジー',
    location: '千葉県',
    industry: 'エンジニアリング',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    achievement: '革新的バッテリー技術の主任エンジニア',
    description: '持続可能な未来のための次世代エネルギー貯蔵ソリューションを開発。',
    highlights: ['特許保有者（15件以上）', 'IEEEフェロー', 'クリーンエネルギーイノベーション賞'],
  },
  {
    id: 7,
    name: '中村 理沙',
    year: '2016',
    profession: '教育政策ディレクター',
    company: 'ゲイツ財団',
    location: '兵庫県',
    industry: '非営利',
    image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    achievement: '支援の行き届かない地域での教育アクセスを変革',
    description: '世界的に教育成果と公平性を向上させるイニシアティブを主導。',
    highlights: ['グローバル教育リーダー', 'ユネスコパートナーシップディレクター', '教育イノベーション賞'],
  },
  {
    id: 8,
    name: '鈴木 大樹',
    year: '2011',
    profession: 'スポーツ医学医師',
    company: 'オリンピックトレーニングセンター',
    location: '北海道',
    industry: 'ヘルスケア',
    image: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    achievement: '複数のオリンピックチームのチームドクター',
    description: 'エリートアスリートに最先端のスポーツ医学ケアを提供。',
    highlights: ['オリンピックチームドクター', 'スポーツ医学専門医', 'アスレチックパフォーマンス研究者'],
  },
  {
    id: 9,
    name: '小島 真理',
    year: '2013',
    profession: '航空宇宙エンジニア',
    company: 'スペースX',
    location: '福岡県',
    industry: '航空宇宙',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    achievement: '火星ミッション宇宙船の主任エンジニア',
    description: '次世代宇宙探査のための推進システムを設計。',
    highlights: ['火星ミッションチームリーダー', 'NASA共同研究', '航空宇宙イノベーション賞'],
  },
];

const industries = ['all', 'テクノロジー', 'ヘルスケア', '法律', '金融', 'メディア', 'エンジニアリング', '非営利', '航空宇宙', '飲食'];

const locations = [
  'all',
  '北海道',
  '青森県',
  '岩手県',
  '宮城県',
  '秋田県',
  '山形県',
  '福島県',
  '茨城県',
  '栃木県',
  '群馬県',
  '埼玉県',
  '千葉県',
  '東京都',
  '神奈川県',
  '新潟県',
  '富山県',
  '石川県',
  '福井県',
  '山梨県',
  '長野県',
  '岐阜県',
  '静岡県',
  '愛知県',
  '三重県',
  '滋賀県',
  '京都府',
  '大阪府',
  '兵庫県',
  '奈良県',
  '和歌山県',
  '鳥取県',
  '島根県',
  '岡山県',
  '広島県',
  '山口県',
  '徳島県',
  '香川県',
  '愛媛県',
  '高知県',
  '福岡県',
  '佐賀県',
  '長崎県',
  '熊本県',
  '大分県',
  '宮崎県',
  '鹿児島県',
  '沖縄県',
];

const businessHighlights: BusinessHighlight[] = [
  {
    id: 'cafe',
    name: 'Cafe Ounan',
    owner: '佐藤 優子（1999年卒）',
    category: 'カフェ・コミュニティスペース',
    location: '青森県八戸市',
    description: '地元の食材を活かしたクラフトコーヒーとスイーツで人気のカフェ。月１回の同窓生交流イベントを開催中。',
    image: 'https://images.pexels.com/photos/5591677/pexels-photo-5591677.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    url: 'https://example.com/cafe-ounan',
  },
  {
    id: 'agri',
    name: '遠野グリーンファーム',
    owner: '田村 亮（2005年卒）',
    category: 'スマート農業',
    location: '岩手県遠野市',
    description: 'ICTを活用した次世代農業で全国から視察が絶えない農園。季節の野菜セットをオンライン販売。',
    image: 'https://images.pexels.com/photos/14438674/pexels-photo-14438674.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    url: 'https://example.com/tono-green-farm',
  },
  {
    id: 'design',
    name: '北の風デザインスタジオ',
    owner: '小林 彩乃（2012年卒）',
    category: 'デザイン・ブランディング',
    location: '東京都渋谷区',
    description: '地方創生プロジェクトを中心にブランディング支援を行うクリエイティブスタジオ。青森県内企業のDX支援も。',
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    url: 'https://example.com/kitakaze-design',
  },
];

const networkingPrograms: ProgramHighlight[] = [
  {
    id: 'mentoring',
    title: 'キャリアメンタリング',
    description: '先輩卒業生が就職・転職・起業をサポート。オンライン面談の調整も可能です。',
    icon: Handshake,
    cta: { label: 'メンター登録・相談', href: '/contact' },
  },
  {
    id: 'events',
    title: '交流イベント & オンラインサロン',
    description: '年3回のリアル交流会と、月1回のオンライン勉強会で全国の同窓生と交流。',
    icon: Megaphone,
    cta: { label: 'イベント情報を見る', href: '/announcements' },
  },
  {
    id: 'support',
    title: '同窓会サポートデスク',
    description: '転居・転職・起業などのお知らせや、母校へのサポートについてお気軽にご相談ください。',
    icon: Mail,
    cta: { label: 'お問い合わせ', href: '/contact' },
  },
];

const AlumniProfiles: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('career');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [showConnectionModal, setShowConnectionModal] = useState(false);
  const [swipeIndex, setSwipeIndex] = useState(0);
  const [dragOffsetState, setDragOffsetState] = useState(0);
  const [isDraggingCard, setIsDraggingCard] = useState(false);
  const [isAnimatingCard, setIsAnimatingCard] = useState(false);
  const dragOffsetRef = useRef(0);
  const startXRef = useRef<number | null>(null);
  const pointerIdRef = useRef<number | null>(null);
  const animationTimeoutRef = useRef<number | undefined>();
  const topCardRef = useRef<HTMLDivElement | null>(null);

  const setDragOffset = useCallback((value: number) => {
    dragOffsetRef.current = value;
    setDragOffsetState(value);
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowConnectionModal(true);
    }, 600);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!showConnectionModal) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowConnectionModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [showConnectionModal]);

  useEffect(
    () => () => {
      if (animationTimeoutRef.current !== undefined) {
        window.clearTimeout(animationTimeoutRef.current);
      }
    },
    [],
  );

  const filteredAlumni = useMemo(
    () =>
      alumniData.filter((alumni) => {
        const lowerSearch = searchTerm.toLowerCase();
        const matchesSearch =
          alumni.name.toLowerCase().includes(lowerSearch) ||
          alumni.profession.toLowerCase().includes(lowerSearch) ||
          alumni.company.toLowerCase().includes(lowerSearch);
        const matchesIndustry = selectedIndustry === 'all' || alumni.industry === selectedIndustry;
        const matchesLocation = selectedLocation === 'all' || alumni.location === selectedLocation;
        return matchesSearch && matchesIndustry && matchesLocation;
      }),
    [searchTerm, selectedIndustry, selectedLocation],
  );

  const activeTabMeta = tabs.find((tab) => tab.id === activeTab);

  useEffect(() => {
    if (animationTimeoutRef.current !== undefined) {
      window.clearTimeout(animationTimeoutRef.current);
      animationTimeoutRef.current = undefined;
    }

    if (filteredAlumni.length === 0) {
      setSwipeIndex(0);
      setDragOffset(0);
      setIsAnimatingCard(false);
      setIsDraggingCard(false);
      return;
    }

    setSwipeIndex((prev) => (prev >= filteredAlumni.length ? 0 : prev));
    setDragOffset(0);
    setIsAnimatingCard(false);
    setIsDraggingCard(false);
  }, [filteredAlumni, setDragOffset]);

  const totalAlumni = filteredAlumni.length;
  const dragOffset = dragOffsetState;
  const SWIPE_THRESHOLD = 100;

  const finalizeSwipe = useCallback(
    (direction: 'left' | 'right') => {
      if (isAnimatingCard || totalAlumni === 0) {
        return;
      }

      setIsAnimatingCard(true);
      setIsDraggingCard(false);
      pointerIdRef.current = null;
      startXRef.current = null;

      const cardWidth = (topCardRef.current?.offsetWidth ?? 320) * 1.35;
      const travel = direction === 'right' ? cardWidth : -cardWidth;
      setDragOffset(travel);

      if (animationTimeoutRef.current !== undefined) {
        window.clearTimeout(animationTimeoutRef.current);
      }

      animationTimeoutRef.current = window.setTimeout(() => {
        setSwipeIndex((prev) => {
          if (totalAlumni === 0) {
            return 0;
          }
          const next = prev + 1;
          return next >= totalAlumni ? 0 : next;
        });
        setDragOffset(0);
        setIsAnimatingCard(false);
        animationTimeoutRef.current = undefined;
      }, 260);
    },
    [isAnimatingCard, setDragOffset, totalAlumni],
  );

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (isAnimatingCard || totalAlumni === 0) {
        return;
      }
      const targetElement = event.target as HTMLElement | null;
      if (targetElement && targetElement.closest('[data-swipe-ignore="true"]')) {
        return;
      }
      if (event.pointerType === 'mouse' && event.button !== 0) {
        return;
      }
      pointerIdRef.current = event.pointerId;
      startXRef.current = event.clientX;
      setIsDraggingCard(true);
      if (event.currentTarget.setPointerCapture) {
        event.currentTarget.setPointerCapture(event.pointerId);
      }
    },
    [isAnimatingCard, totalAlumni],
  );

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!isDraggingCard || pointerIdRef.current !== event.pointerId) {
        return;
      }
      const startX = startXRef.current;
      if (startX === null) {
        return;
      }
      const delta = event.clientX - startX;
      setDragOffset(delta);
    },
    [isDraggingCard, setDragOffset],
  );

  const resetDragState = useCallback(() => {
    setIsDraggingCard(false);
    pointerIdRef.current = null;
    startXRef.current = null;
    setDragOffset(0);
  }, [setDragOffset]);

  const handlePointerUp = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (pointerIdRef.current !== null && event.currentTarget.hasPointerCapture?.(pointerIdRef.current)) {
        event.currentTarget.releasePointerCapture(pointerIdRef.current);
      }
      if (!isDraggingCard) {
        return;
      }

      const currentOffset = dragOffsetRef.current;
      if (Math.abs(currentOffset) > SWIPE_THRESHOLD) {
        finalizeSwipe(currentOffset > 0 ? 'right' : 'left');
      } else {
        resetDragState();
      }
    },
    [finalizeSwipe, isDraggingCard, resetDragState],
  );

  const handlePointerCancel = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (pointerIdRef.current !== null && event.currentTarget.hasPointerCapture?.(pointerIdRef.current)) {
        event.currentTarget.releasePointerCapture(pointerIdRef.current);
      }
      if (!isAnimatingCard) {
        resetDragState();
      }
    },
    [isAnimatingCard, resetDragState],
  );

  const handleManualSwipe = useCallback(
    (direction: 'left' | 'right') => {
      if (isAnimatingCard || totalAlumni === 0) {
        return;
      }
      finalizeSwipe(direction);
    },
    [finalizeSwipe, isAnimatingCard, totalAlumni],
  );

  const visibleIndices = useMemo(() => {
    if (totalAlumni === 0) {
      return [] as number[];
    }
    const maxCards = Math.min(3, totalAlumni);
    const indices: number[] = [];
    for (let offset = 0; offset < maxCards; offset += 1) {
      const index = (swipeIndex + offset) % totalAlumni;
      if (!indices.includes(index)) {
        indices.push(index);
      }
    }
    return indices;
  }, [swipeIndex, totalAlumni]);

  return (
    <div className="bg-[#F7F3F0] pb-24 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white shadow-2xl">
          <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDMwaDEybC0yIDRoMTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
          <div className="relative px-5 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
              <div className="max-w-2xl">
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wide">
                  卒業生とつながろう
                </span>
                <h1 className="mt-3 text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  同窓生とつながり、新しい可能性を
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base lg:text-lg">
                  国内外で活躍する卒業生のキャリアを紹介。メンタリングや交流イベントで新しいつながりを。
                </p>
                <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:gap-3">
                  <Link
                    to="/member-registration"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                  >
                    メンバー登録をする
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="hidden lg:grid w-full max-w-sm grid-cols-2 gap-4 rounded-3xl bg-white/10 p-5 text-sm backdrop-blur-md">
                <div className="rounded-2xl bg-white/20 p-4 text-white shadow-inner">
                  <p className="text-xs uppercase tracking-wide text-blue-100">交流登録数</p>
                  <p className="mt-2 text-3xl font-bold">1,250+</p>
                  <p className="mt-1 text-xs text-blue-100">全国の奥南会メンバー</p>
                </div>
                <div className="rounded-2xl bg-white/20 p-4 text-white shadow-inner">
                  <p className="text-xs uppercase tracking-wide text-blue-100">メンターペア</p>
                  <p className="mt-2 text-3xl font-bold">85</p>
                  <p className="mt-1 text-xs text-blue-100">キャリア支援を実施中</p>
                </div>
                <div className="col-span-2 rounded-2xl bg-white/20 p-4 text-white shadow-inner">
                  <div className="flex items-center gap-3">
                    <Users className="h-10 w-10 rounded-full bg-white/20 p-2" />
                    <div>
                      <p className="text-xs uppercase tracking-wide text-blue-100">直近のイベント</p>
                      <p className="text-sm font-semibold">春のオンライン交流会 | 3月28日(金)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 rounded-3xl bg-white shadow-xl">
          <div className="flex flex-col gap-4 border-b border-gray-100 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                      isActive ? 'bg-blue-600 text-white shadow-lg' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
            {activeTabMeta && <p className="text-sm text-gray-600">{activeTabMeta.description}</p>}
          </div>

          <div className="px-4 py-6 sm:px-8 sm:py-10">
            {activeTab === 'career' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                  <div className="relative lg:col-span-1">
                    <Search className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-blue-500" />
                    <input
                      type="text"
                      placeholder="卒業生・キャリア・企業名で検索"
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                      className="w-full rounded-2xl border border-gray-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="relative lg:col-span-1">
                    <Briefcase className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-blue-500" />
                    <select
                      value={selectedIndustry}
                      onChange={(event) => setSelectedIndustry(event.target.value)}
                      className="w-full appearance-none rounded-2xl border border-gray-200 bg-white py-3 pl-12 pr-12 text-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    >
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry === 'all' ? 'すべての業界' : industry}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative lg:col-span-1">
                    <MapPin className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-blue-500" />
                    <select
                      value={selectedLocation}
                      onChange={(event) => setSelectedLocation(event.target.value)}
                      className="w-full appearance-none rounded-2xl border border-gray-200 bg-white py-3 pl-12 pr-12 text-sm outline-none transition focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    >
                      {locations.map((location) => (
                        <option key={location} value={location}>
                          {location === 'all' ? 'すべての地域' : location}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {filteredAlumni.length > 0 ? (
                  <>
                    <div className="lg:hidden">
                      <div className="relative mx-auto mt-2 h-[460px] max-w-sm">
                        {visibleIndices.map((profileIndex, stackPosition) => {
                          const alumni = filteredAlumni[profileIndex];
                          const isTopCard = stackPosition === 0;
                          const depth = stackPosition;
                          const scale = 1 - depth * 0.05;
                          const translateY = depth * 18;
                          const stackedOpacity = isTopCard ? 1 : 0.9 - depth * 0.12;
                          const cardStyle: React.CSSProperties = isTopCard
                            ? {
                                transform: `translateX(${dragOffset}px) rotate(${dragOffset * 0.04}deg)`,
                                transition: isDraggingCard ? 'none' : 'transform 0.35s ease, opacity 0.25s ease',
                                opacity: isAnimatingCard ? 0 : 1,
                                zIndex: visibleIndices.length - depth,
                              }
                            : {
                                transform: `scale(${scale}) translateY(${translateY}px)`,
                                transition: 'transform 0.35s ease, opacity 0.35s ease',
                                opacity: stackedOpacity,
                                zIndex: visibleIndices.length - depth,
                              };
                          const dragStrength = Math.min(Math.abs(dragOffset) / 150, 1);
                          const isPositive = dragOffset > 0;
                          const topHighlights = alumni.highlights.slice(0, 2);

                          return (
                            <article
                              key={`${alumni.id}-${profileIndex}`}
                              ref={
                                isTopCard
                                  ? (node) => {
                                      topCardRef.current = node;
                                    }
                                  : undefined
                              }
                              className={`absolute inset-0 flex flex-col overflow-hidden rounded-[32px] shadow-[0_25px_60px_rgba(30,64,175,0.18)] ring-1 ring-black/5 ${
                                isTopCard ? 'cursor-grab touch-pan-y active:cursor-grabbing' : 'pointer-events-none'
                              }`}
                              style={cardStyle}
                              onPointerDown={isTopCard ? handlePointerDown : undefined}
                              onPointerMove={isTopCard ? handlePointerMove : undefined}
                              onPointerUp={isTopCard ? handlePointerUp : undefined}
                              onPointerCancel={isTopCard ? handlePointerCancel : undefined}
                            >
                              <img src={alumni.image} alt={alumni.name} className="absolute inset-0 h-full w-full object-cover" />
                              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/80" />
                              {isTopCard && (
                                <div
                                  className="pointer-events-none absolute inset-0 transition-opacity duration-200"
                                  style={{ opacity: dragStrength }}
                                >
                                  <div
                                    className={`absolute inset-0 rounded-[32px] bg-gradient-to-br ${
                                      isPositive ? 'from-emerald-400/40 via-emerald-400/10 to-transparent' : 'from-rose-500/35 via-rose-500/10 to-transparent'
                                    }`}
                                  />
                                  <div
                                    className={`absolute top-6 ${isPositive ? 'right-6' : 'left-6'} rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-blue-700 shadow-lg`}
                                  >
                                    {isPositive ? 'CONNECT' : 'PASS'}
                                  </div>
                                </div>
                              )}
                              <div className="relative z-10 flex h-full flex-col justify-between p-6">
                                <div className="flex items-start justify-between">
                                  <span className="rounded-full bg-white/85 px-4 py-1 text-xs font-semibold text-blue-700 shadow">
                                    {alumni.year}年卒
                                  </span>
                                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                                    <MapPin className="h-3.5 w-3.5" />
                                    {alumni.location}
                                  </span>
                                </div>
                                <div className="space-y-4 text-white">
                                  <div>
                                    <h3 className="text-2xl font-bold">{alumni.name}</h3>
                                    <p className="mt-1 text-sm font-medium text-blue-100">{alumni.profession}</p>
                                    <p className="mt-3 flex items-center gap-2 text-xs font-medium text-white/75">
                                      <Briefcase className="h-4 w-4 text-white/70" />
                                      {alumni.company}
                                    </p>
                                  </div>
                                  <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                                    <p className="text-xs uppercase tracking-wider text-blue-100">ハイライト</p>
                                    <p className="mt-2 text-sm text-white/90">{alumni.achievement}</p>
                                    <ul className="mt-3 space-y-1 text-xs text-white/80">
                                      {topHighlights.map((highlight) => (
                                        <li key={highlight} className="flex items-center gap-2">
                                          <span className="h-1.5 w-1.5 rounded-full bg-blue-200" />
                                          {highlight}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <p className="text-sm leading-relaxed text-white/80">{alumni.description}</p>
                                  <div className="flex items-center justify-between gap-3">
                                    <Link
                                      to={`/alumni-profiles/${alumni.id}`}
                                      data-swipe-ignore="true"
                                      className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white/30"
                                    >
                                      詳細を見る
                                      <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <button
                                      type="button"
                                      data-swipe-ignore="true"
                                      onClick={() => handleManualSwipe('right')}
                                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-blue-600 shadow-lg transition hover:bg-blue-50"
                                    >
                                      <Handshake className="h-4 w-4" />
                                      つながる
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </article>
                          );
                        })}
                      </div>
                      <div className="mt-6 flex items-center justify-between px-2">
                        <span className="text-xs font-semibold text-blue-600">
                          {swipeIndex + 1} / {filteredAlumni.length}
                        </span>
                        <div className="flex items-center gap-4">
                          <button
                            type="button"
                            onClick={() => handleManualSwipe('left')}
                            disabled={isAnimatingCard || filteredAlumni.length === 0}
                            className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-rose-500 shadow-lg ring-1 ring-rose-100 transition hover:bg-rose-50 disabled:opacity-40"
                          >
                            <X className="h-6 w-6" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleManualSwipe('right')}
                            disabled={isAnimatingCard || filteredAlumni.length === 0}
                            className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-xl ring-4 ring-blue-200/60 transition hover:from-blue-600 hover:to-indigo-500 disabled:opacity-40"
                          >
                            <Heart className="h-7 w-7" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="hidden gap-6 lg:grid lg:grid-cols-2 xl:grid-cols-3">
                      {filteredAlumni.map((alumni) => (
                        <article
                          key={alumni.id}
                          className="flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        >
                          <div className="relative h-56 w-full overflow-hidden">
                            <img src={alumni.image} alt={alumni.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-600 shadow">
                              {alumni.year}年卒
                            </span>
                          </div>
                          <div className="flex flex-1 flex-col gap-4 p-6">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-xl font-bold text-gray-900">{alumni.name}</h3>
                                <p className="text-sm font-medium text-blue-600">{alumni.profession}</p>
                              </div>
                              <div className="rounded-2xl bg-blue-50 p-3">
                                <Users className="h-5 w-5 text-blue-600" />
                              </div>
                            </div>
                            <div className="space-y-3 text-sm text-gray-600">
                              <p className="flex items-center gap-3">
                                <Briefcase className="h-4 w-4 text-blue-500" />
                                {alumni.company}
                              </p>
                              <p className="flex items-center gap-3">
                                <MapPin className="h-4 w-4 text-blue-500" />
                                {alumni.location}
                              </p>
                              <p className="flex items-center gap-3">
                                <Calendar className="h-4 w-4 text-blue-500" />
                                {alumni.achievement}
                              </p>
                            </div>
                            <p className="text-sm leading-relaxed text-gray-600">{alumni.description}</p>
                            <div className="mt-auto space-y-2">
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">ハイライト</h4>
                              <ul className="space-y-1 text-sm text-gray-600">
                                {alumni.highlights.map((highlight) => (
                                  <li key={highlight} className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                    {highlight}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <Link
                              to={`/alumni-profiles/${alumni.id}`}
                              className="inline-flex items-center justify-center rounded-xl bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-100"
                            >
                              詳細プロフィールを見る
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </div>
                        </article>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="rounded-3xl border border-dashed border-blue-200 bg-blue-50/50 p-10 text-center">
                    <h3 className="text-lg font-semibold text-blue-700">条件に合う卒業生が見つかりませんでした。</h3>
                    <p className="mt-2 text-sm text-blue-600">検索条件を調整するか、メンバー登録フォームで最新情報をお知らせください。</p>
                    <button
                      type="button"
                      onClick={() => {
                        setSearchTerm('');
                        setSelectedIndustry('all');
                        setSelectedLocation('all');
                      }}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-500"
                    >
                      <X className="h-4 w-4" />
                      フィルタをクリア
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'business' && (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {businessHighlights.map((business) => (
                  <article
                    key={business.id}
                    className="flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-br from-blue-50 via-white to-white shadow-md transition hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <img src={business.image} alt={business.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                      <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-600">
                        <Store className="h-4 w-4 text-blue-500" />
                        卒業生の事業
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-4 p-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{business.name}</h3>
                        <p className="text-sm font-medium text-blue-600">{business.owner}</p>
                      </div>
                      <div className="space-y-3 text-sm text-gray-600">
                        <p className="flex items-center gap-3">
                          <Building2 className="h-4 w-4 text-blue-500" />
                          {business.category}
                        </p>
                        <p className="flex items-center gap-3">
                          <MapPin className="h-4 w-4 text-blue-500" />
                          {business.location}
                        </p>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-600">{business.description}</p>
                      <div className="mt-auto flex flex-wrap gap-2 text-xs font-semibold text-blue-600">
                        <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1">
                          <UtensilsCrossed className="h-4 w-4" />
                          卒業生特典あり
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1">
                          <Sprout className="h-4 w-4" />
                          地域活性プロジェクト
                        </span>
                      </div>
                      <div className="flex flex-col gap-2 pt-2">
                        <span className="flex items-center gap-2 text-xs text-gray-500">
                          <Phone className="h-4 w-4 text-blue-500" />
                          交流会や撮影利用の相談も受付中
                        </span>
                        {business.url && (
                          <a
                            href={business.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                          >
                            サイトで詳しく見る
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {activeTab === 'network' && (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {networkingPrograms.map((program) => {
                  const Icon = program.icon;
                  return (
                    <article key={program.id} className="flex flex-col gap-4 rounded-3xl border border-blue-100 bg-blue-50/60 p-6 shadow-inner">
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
                          <Icon className="h-6 w-6" />
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold text-blue-800">{program.title}</h3>
                          <p className="text-xs font-medium uppercase tracking-wider text-blue-500">Ounan Alumni Network</p>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-blue-900">{program.description}</p>
                      {program.cta && (
                        <Link
                          to={program.cta.href}
                          className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50"
                        >
                          {program.cta.label}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      )}
                    </article>
                  );
                })}
                <article className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-white shadow-xl">
                  <h3 className="text-lg font-semibold">卒業生登録フォーム</h3>
                  <p className="mt-3 text-sm text-blue-100">
                    近況報告、イベント情報、キャリア情報をお寄せください。会報やメーリングリストでもご紹介します。
                  </p>
                  <a
                    href="https://keen-whale-2c2.notion.site/2826e2231c40807aa844e554e4404588?pvs=105"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                  >
                    卒業生登録フォームを開く
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <div className="mt-6 rounded-2xl bg-white/15 p-4 text-sm">
                    <p className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4" />
                      フォーム記入後は事務局よりご連絡差し上げます。
                    </p>
                    <p className="mt-2 flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <a href="mailto:ounankai@gmail.com" className="underline">
                        ounankai@gmail.com
                      </a>
                    </p>
                  </div>
                </article>
              </div>
            )}
          </div>
        </section>
      </div>

      {showConnectionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="relative w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setShowConnectionModal(false)}
              aria-label="閉じる"
              className="absolute right-4 top-4 rounded-full bg-gray-100 p-2 text-gray-500 transition hover:bg-gray-200 hover:text-gray-700"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
                <Users className="h-8 w-8" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">卒業生とつながろう！</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                全国の同窓生と交流し、新しい出会いや学びを広げましょう。キャリア相談、イベント情報、近況レポートの投稿も大歓迎です。
              </p>
              <div className="mt-6 space-y-3">
                <Link
                  to="/member-registration"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:from-blue-500 hover:to-indigo-500"
                >
                  <Heart className="h-4 w-4" />
                  メンバー登録して交流する
                </Link>
                <button
                  type="button"
                  onClick={() => setShowConnectionModal(false)}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-gray-100 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-200"
                >
                  あとで見る
                </button>
              </div>
              <div className="mt-4 rounded-2xl bg-blue-50 p-4 text-xs text-blue-700">
                <p className="flex items-center justify-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  すでに登録済みの方は
                  <Link to="/contact" className="font-semibold text-blue-700 underline">
                    こちらから近況をお寄せください
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlumniProfiles;
