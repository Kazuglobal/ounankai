import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ExternalLink,
  X,
  Heart,
  MapPin,
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight,
  Hand,
  Megaphone,
  Building2,
  Mail,
  Phone,
  Check,
  CreditCard,
  Sparkles,
} from 'lucide-react';
import { useSwipeCards } from '../hooks/useSwipeCards';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Stripeの公開可能キーを設定（本番環境では環境変数から取得してください）
const stripePromise = loadStripe('pk_test_YOUR_PUBLISHABLE_KEY');

type Advertisement = {
  id: string;
  title: string;
  sponsor: string;
  category: string;
  description: string;
  details: string[];
  deadline?: string;
  contact?: string;
  image: string;
  url?: string;
};

type AdvertisingPlan = {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  recommended?: boolean;
  stripe_price_id: string;
};

const advertisements: Advertisement[] = [
  {
    id: 'festival-plan',
    title: '創立120周年フェスティバル 協賛プラン',
    sponsor: '東洋英和学院同窓会',
    category: 'イベント協賛',
    description: '2025年秋に開催される創立120周年フェスティバルの協賛企業・個人を募集しています。ブース出展やパンフレット広告など、目的に合わせてお選びいただけます。',
    details: [
      'パンフレット広告 3万円〜（先着20枠）',
      '卒業生向け特別ブース電源・Wi-Fi完備',
      '申込み締切：2025年5月31日（土）',
    ],
    deadline: '2025年5月31日（土）',
    contact: 'festival@ounankai.jp',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    url: '#',
  },
  {
    id: 'aomori-tourism',
    title: '青森県観光プロモーション',
    sponsor: '青森県観光連盟',
    category: '地域振興',
    description: '故郷・青森の魅力を全国の同窓生に届けるプロモーション企画。観光スポット、グルメ、イベント情報を定期配信。帰省の際にぜひご活用ください。',
    details: [
      '季節ごとの観光スポット紹介',
      '同窓生限定割引クーポン配布',
      '地元企業とのコラボ企画実施中',
    ],
    contact: 'tourism@aomori-kanko.jp',
    image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    url: '#',
  },
  {
    id: 'career-support',
    title: 'キャリア支援プログラム',
    sponsor: '株式会社キャリアパートナーズ',
    category: 'サービス',
    description: '同窓生のキャリアアップを応援。転職相談、起業サポート、スキルアップ講座など、多様なプログラムをご用意しています。',
    details: [
      '無料キャリア相談（60分）',
      'オンライン講座受講料20%OFF',
      '起業・副業サポートプラン完備',
    ],
    contact: 'support@career-partners.jp',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    url: '#',
  },
  {
    id: 'local-business',
    title: '地元企業による採用情報',
    sponsor: '青森地域雇用促進協議会',
    category: 'リクルート',
    description: 'Uターン・Iターンを検討中の同窓生向けに、青森県内企業の採用情報を随時更新。地元で働きたい方を全力でサポートします。',
    details: [
      '県内優良企業100社以上掲載',
      '移住支援金制度のご案内',
      '面接交通費補助あり（一部企業）',
    ],
    contact: 'jobs@aomori-work.jp',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    url: '#',
  },
  {
    id: 'alumni-shop',
    title: '卒業生経営店舗紹介',
    sponsor: '奥南会事業部',
    category: 'ショップ',
    description: '全国で活躍する卒業生が経営する店舗・サービスを紹介。飲食店、小売店、オンラインショップなど、ぜひご利用ください。',
    details: [
      '同窓生特典あり（店舗により異なる）',
      '新規掲載店舗募集中',
      '月1回の特集配信',
    ],
    contact: 'shops@ounankai.jp',
    image: 'https://images.pexels.com/photos/5591677/pexels-photo-5591677.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    url: '#',
  },
  {
    id: 'donation',
    title: '母校支援プログラム',
    sponsor: '奥南会基金',
    category: '寄付・支援',
    description: '母校の教育環境充実のための支援プログラム。奨学金、設備投資、部活動支援など、様々な形でご協力いただけます。',
    details: [
      '奨学金基金への寄付',
      '図書館・施設整備支援',
      '部活動・課外活動への支援',
    ],
    contact: 'donation@ounankai.jp',
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    url: '#',
  },
];

const categories = ['all', 'イベント協賛', '地域振興', 'サービス', 'リクルート', 'ショップ', '寄付・支援'];

const advertisingPlans: AdvertisingPlan[] = [
  {
    id: 'basic',
    name: 'ベーシックプラン',
    price: 30000,
    duration: '1ヶ月',
    features: [
      'トップページバナー掲載',
      '広告ギャラリーへの掲載',
      '月間表示回数: 約5,000回',
      'クリック数レポート提供',
    ],
    stripe_price_id: 'price_basic_monthly',
  },
  {
    id: 'standard',
    name: 'スタンダードプラン',
    price: 80000,
    duration: '3ヶ月',
    features: [
      'トップページバナー掲載',
      '広告ギャラリーへの掲載',
      'メールマガジン掲載（月1回）',
      '月間表示回数: 約5,000回',
      'クリック数レポート提供',
      '専用お問い合わせフォーム設置',
    ],
    recommended: true,
    stripe_price_id: 'price_standard_quarterly',
  },
  {
    id: 'premium',
    name: 'プレミアムプラン',
    price: 150000,
    duration: '6ヶ月',
    features: [
      'トップページバナー掲載',
      '広告ギャラリーへの掲載',
      'メールマガジン掲載（月2回）',
      '月間表示回数: 約5,000回',
      '詳細なアクセス解析レポート',
      '専用お問い合わせフォーム設置',
      'イベント協賛特典',
      '優先的な掲載位置',
    ],
    stripe_price_id: 'price_premium_biannual',
  },
];

// 決済フォームコンポーネント
const CheckoutForm: React.FC<{ plan: AdvertisingPlan; onClose: () => void }> = ({ plan, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      // 本番環境では、バックエンドAPIを呼び出してPaymentIntentを作成します
      // const response = await fetch('/api/create-payment-intent', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ planId: plan.id, amount: plan.price }),
      // });
      // const { clientSecret } = await response.json();

      // デモ用のダミー処理
      await new Promise(resolve => setTimeout(resolve, 2000));

      // 実際のStripe決済処理（本番環境で使用）
      // const cardElement = elements.getElement(CardElement);
      // if (!cardElement) return;
      //
      // const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      //   payment_method: { card: cardElement },
      // });
      //
      // if (stripeError) {
      //   throw new Error(stripeError.message);
      // }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : '決済に失敗しました');
    } finally {
      setProcessing(false);
    }
  };

  if (success) {
    return (
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-gray-900">決済が完了しました</h3>
        <p className="mb-6 text-sm text-gray-600">
          ご登録のメールアドレスに確認メールをお送りしました。
        </p>
        <button
          type="button"
          onClick={onClose}
          className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          閉じる
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="mb-4 text-xl font-bold text-gray-900">{plan.name}</h3>
        <div className="mb-4 rounded-xl bg-blue-50 p-4">
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-gray-600">お支払い金額</span>
            <div>
              <span className="text-3xl font-bold text-gray-900">¥{plan.price.toLocaleString()}</span>
              <span className="ml-2 text-sm text-gray-600">/ {plan.duration}</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-gray-700">カード情報</label>
        <div className="rounded-xl border border-gray-300 bg-white p-4">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
      </div>

      {error && (
        <div className="rounded-xl bg-red-50 p-4 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onClose}
          className="flex-1 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
        >
          キャンセル
        </button>
        <button
          type="submit"
          disabled={!stripe || processing}
          className="flex-1 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50"
        >
          {processing ? '処理中...' : `¥${plan.price.toLocaleString()} 支払う`}
        </button>
      </div>
    </form>
  );
};

const AdvertisementGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<AdvertisingPlan | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);

  const filteredAds = advertisements.filter(
    (ad) => selectedCategory === 'all' || ad.category === selectedCategory
  );

  const adSwipe = useSwipeCards({
    items: filteredAds,
    onSwipe: () => setShowSwipeHint(false),
  });

  useEffect(() => {
    setShowSwipeHint(true);
    const hintTimer = window.setTimeout(() => {
      setShowSwipeHint(false);
    }, 4000);

    return () => window.clearTimeout(hintTimer);
  }, [selectedCategory]);

  return (
    <div className="bg-[#F7F3F0] pb-24 pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white shadow-2xl">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDMwaDEybC0yIDRoMTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
          <div className="relative px-5 py-8 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wide">
                  NEW
                </span>
                <h1 className="mt-3 text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  広告ギャラリー
                </h1>
                <p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base lg:text-lg">
                  同窓会の皆さまに向けたおすすめのサービスやイベント情報をお届け。左右にスワイプして次の広告をご確認いただけます。
                </p>
                <p className="mt-2 text-xs text-blue-200">
                  広告内容は随時更新予定です。
                </p>
              </div>
              <div className="hidden lg:flex flex-col gap-3">
                <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4">
                  <p className="text-xs uppercase tracking-wide text-blue-100">掲載広告数</p>
                  <p className="mt-1 text-3xl font-bold">{advertisements.length}</p>
                </div>
                <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4">
                  <p className="text-xs uppercase tracking-wide text-blue-100">カテゴリ</p>
                  <p className="mt-1 text-3xl font-bold">{categories.length - 1}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mt-8">
          <div className="rounded-2xl bg-white p-4 shadow-lg">
            <h2 className="mb-3 text-sm font-semibold text-gray-700">カテゴリで絞り込む</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'すべて' : category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* こんな方におすすめ Section */}
        <section className="mt-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-lg">
          <h2 className="mb-4 text-lg font-bold text-gray-900">こんな方におすすめ</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              卒業生向けサービスを広げたい企業やショップ
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              周年イベントに合わせてプロモーションを行いたい方
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              同窓会活動を支援したい個人・団体
            </li>
          </ul>
        </section>

        {/* Mobile Swipe UI */}
        {filteredAds.length > 0 ? (
          <>
            <div className="mt-8 lg:hidden">
              {showSwipeHint && (
                <div
                  onClick={() => setShowSwipeHint(false)}
                  className="mb-4 cursor-pointer rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 p-6 text-white shadow-2xl transition hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="text-center">
                      <p className="text-lg font-bold">スワイプして閲覧</p>
                      <p className="mt-1 text-xs text-blue-100">カードを左右にスワイプできます</p>
                    </div>

                    <div className="relative flex items-center justify-center py-6">
                      <ChevronLeft
                        className="absolute left-0 h-8 w-8 animate-bounce text-white/80"
                        style={{ animationDuration: '1s' }}
                      />
                      <div className="relative mx-12">
                        <div
                          className="h-32 w-24 rounded-2xl bg-white/20 backdrop-blur-sm shadow-xl ring-2 ring-white/30 animate-pulse"
                          style={{ animationDuration: '2s' }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Hand className="h-12 w-12 animate-pulse" style={{ animationDuration: '1.5s' }} />
                        </div>
                      </div>
                      <ChevronRight
                        className="absolute right-0 h-8 w-8 animate-bounce text-white/80"
                        style={{ animationDuration: '1s' }}
                      />
                    </div>

                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                          <ChevronLeft className="h-5 w-5" />
                        </div>
                        <span>スキップ</span>
                      </div>
                      <div className="h-4 w-px bg-white/30" />
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                          <ChevronRight className="h-5 w-5" />
                        </div>
                        <span>次へ</span>
                      </div>
                    </div>

                    <p className="text-center text-xs text-blue-100 opacity-80">タップして閉じる</p>
                  </div>
                </div>
              )}

              <div className="relative mx-auto mt-2 h-[520px] max-w-sm">
                {adSwipe.visibleIndices.map((adIndex, stackPosition) => {
                  const ad = filteredAds[adIndex];
                  const isTopCard = stackPosition === 0;
                  const depth = stackPosition;
                  const scale = 1 - depth * 0.05;
                  const translateY = depth * 18;
                  const stackedOpacity = isTopCard ? 1 : 0.9 - depth * 0.12;
                  const cardStyle: React.CSSProperties = isTopCard
                    ? {
                        transform: `translateX(${adSwipe.dragOffset}px) rotate(${adSwipe.dragOffset * 0.04}deg)`,
                        transition: adSwipe.isDragging ? 'none' : 'transform 0.35s ease, opacity 0.25s ease',
                        opacity: adSwipe.isAnimating ? 0 : 1,
                        zIndex: adSwipe.visibleIndices.length - depth,
                      }
                    : {
                        transform: `scale(${scale}) translateY(${translateY}px)`,
                        transition: 'transform 0.35s ease, opacity 0.35s ease',
                        opacity: stackedOpacity,
                        zIndex: adSwipe.visibleIndices.length - depth,
                      };
                  const dragStrength = Math.min(Math.abs(adSwipe.dragOffset) / 150, 1);
                  const isPositive = adSwipe.dragOffset > 0;

                  return (
                    <article
                      key={`${ad.id}-${adIndex}`}
                      ref={
                        isTopCard
                          ? (node) => {
                              adSwipe.topCardRef.current = node;
                            }
                          : undefined
                      }
                      className={`absolute inset-0 flex flex-col overflow-hidden rounded-[32px] shadow-[0_25px_60px_rgba(219,39,119,0.18)] ring-1 ring-black/5 ${
                        isTopCard ? 'cursor-grab touch-pan-y active:cursor-grabbing' : 'pointer-events-none'
                      }`}
                      style={cardStyle}
                      onPointerDown={isTopCard ? adSwipe.handlePointerDown : undefined}
                      onPointerMove={isTopCard ? adSwipe.handlePointerMove : undefined}
                      onPointerUp={isTopCard ? adSwipe.handlePointerUp : undefined}
                      onPointerCancel={isTopCard ? adSwipe.handlePointerCancel : undefined}
                    >
                      <img src={ad.image} alt={ad.title} className="absolute inset-0 h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/85" />
                      {isTopCard && (
                        <div
                          className="pointer-events-none absolute inset-0 transition-opacity duration-200"
                          style={{ opacity: dragStrength }}
                        >
                          <div
                            className={`absolute inset-0 rounded-[32px] bg-gradient-to-br ${
                              isPositive
                                ? 'from-emerald-400/40 via-emerald-400/10 to-transparent'
                                : 'from-rose-500/35 via-rose-500/10 to-transparent'
                            }`}
                          />
                          <div
                            className={`absolute top-6 ${isPositive ? 'right-6' : 'left-6'} rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-blue-700 shadow-lg`}
                          >
                            {isPositive ? 'INTERESTED' : 'PASS'}
                          </div>
                        </div>
                      )}
                      <div className="relative z-10 flex h-full flex-col justify-between p-6">
                        <div className="flex items-start justify-between">
                          <span className="rounded-full bg-white/85 px-4 py-1 text-xs font-semibold text-blue-700 shadow">
                            {ad.category}
                          </span>
                          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                            <Megaphone className="h-3.5 w-3.5" />
                            広告
                          </span>
                        </div>
                        <div className="space-y-4 text-white">
                          <div>
                            <h3 className="text-2xl font-bold">{ad.title}</h3>
                            <p className="mt-1 text-sm font-medium text-blue-100">{ad.sponsor}</p>
                          </div>
                          <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                            <p className="text-sm leading-relaxed text-white/90">{ad.description}</p>
                            <ul className="mt-3 space-y-1 text-xs text-white/80">
                              {ad.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-300 flex-shrink-0" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                          {(ad.deadline || ad.contact) && (
                            <div className="space-y-2 text-xs text-white/80">
                              {ad.deadline && (
                                <p className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-white/70" />
                                  申込締切: {ad.deadline}
                                </p>
                              )}
                              {ad.contact && (
                                <p className="flex items-center gap-2">
                                  <Mail className="h-4 w-4 text-white/70" />
                                  {ad.contact}
                                </p>
                              )}
                            </div>
                          )}
                          <div className="flex items-center justify-between gap-3">
                            {ad.url ? (
                              <a
                                href={ad.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-swipe-ignore="true"
                                className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-white/30"
                              >
                                詳細を見る
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            ) : (
                              <div />
                            )}
                            <button
                              type="button"
                              data-swipe-ignore="true"
                              onClick={() => adSwipe.handleManualSwipe('right')}
                              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-blue-600 shadow-lg transition hover:bg-blue-50"
                            >
                              <Heart className="h-4 w-4" />
                              興味あり
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
                  {adSwipe.swipeIndex + 1} / {filteredAds.length}
                </span>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => adSwipe.handleManualSwipe('left')}
                    disabled={adSwipe.isAnimating || filteredAds.length === 0}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-rose-500 shadow-lg ring-1 ring-rose-100 transition hover:bg-rose-50 disabled:opacity-40"
                  >
                    <X className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => adSwipe.handleManualSwipe('right')}
                    disabled={adSwipe.isAnimating || filteredAds.length === 0}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-xl ring-4 ring-blue-200/60 transition hover:from-blue-600 hover:to-indigo-700 disabled:opacity-40"
                  >
                    <Heart className="h-7 w-7" />
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Grid Layout */}
            <div className="mt-8 hidden gap-6 lg:grid lg:grid-cols-2 xl:grid-cols-3">
              {filteredAds.map((ad) => (
                <article
                  key={ad.id}
                  className="flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <img src={ad.image} alt={ad.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-blue-600 shadow">
                      {ad.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{ad.title}</h3>
                      <p className="mt-1 text-sm font-medium text-blue-600">{ad.sponsor}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">{ad.description}</p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {ad.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    {(ad.deadline || ad.contact) && (
                      <div className="space-y-2 border-t border-gray-100 pt-4 text-xs text-gray-500">
                        {ad.deadline && (
                          <p className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-purple-500" />
                            申込締切: {ad.deadline}
                          </p>
                        )}
                        {ad.contact && (
                          <p className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-purple-500" />
                            {ad.contact}
                          </p>
                        )}
                      </div>
                    )}
                    {ad.url && (
                      <a
                        href={ad.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:from-blue-600 hover:to-indigo-700"
                      >
                        詳細を見る
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="mt-8 rounded-3xl border border-dashed border-blue-200 bg-blue-50/50 p-10 text-center">
            <h3 className="text-lg font-semibold text-blue-700">選択したカテゴリの広告がありません</h3>
            <p className="mt-2 text-sm text-blue-600">別のカテゴリをお試しください。</p>
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-500"
            >
              <X className="h-4 w-4" />
              フィルタをクリア
            </button>
          </div>
        )}

        {/* Advertising Plans Section */}
        <section className="mt-12">
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-lg">
              <Sparkles className="h-4 w-4" />
              広告掲載プラン
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">広告掲載をご希望の方へ</h2>
            <p className="mt-3 text-gray-600">
              同窓会の皆さまに向けた広告掲載プランをご用意しています。オンラインで簡単にお申し込みいただけます。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {advertisingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.recommended ? 'ring-4 ring-blue-500' : 'border border-gray-100'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute right-4 top-4 z-10">
                    <span className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-3 py-1 text-xs font-bold text-white shadow-lg">
                      おすすめ
                    </span>
                  </div>
                )}

                <div className={`p-8 ${plan.recommended ? 'bg-gradient-to-br from-blue-50 to-indigo-50' : ''}`}>
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">
                      ¥{(plan.price / 1000).toLocaleString()}K
                    </span>
                    <span className="ml-2 text-gray-600">/ {plan.duration}</span>
                  </div>
                </div>

                <div className="flex-1 space-y-4 p-8 pt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                          <Check className="h-3 w-3 text-blue-600" />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-8 pt-0">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPlan(plan);
                      setShowCheckout(true);
                    }}
                    className={`flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-semibold shadow-lg transition ${
                      plan.recommended
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    <CreditCard className="h-4 w-4" />
                    このプランを選択
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-blue-50 p-6 text-center">
            <p className="text-sm text-gray-700">
              カスタムプランや詳細なご相談は
              <Link to="/contact" className="ml-1 font-semibold text-blue-600 hover:text-blue-700">
                お問い合わせ
              </Link>
              からご連絡ください。
            </p>
          </div>
        </section>

        {/* Checkout Modal */}
        {showCheckout && selectedPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
              <Elements stripe={stripePromise}>
                <CheckoutForm
                  plan={selectedPlan}
                  onClose={() => {
                    setShowCheckout(false);
                    setSelectedPlan(null);
                  }}
                />
              </Elements>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvertisementGallery;
