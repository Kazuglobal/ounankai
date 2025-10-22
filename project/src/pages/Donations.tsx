import React, { useState } from 'react';
import { Star, Heart, Building2, BookOpen, Users, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type DonationOption = {
  id: string;
  title: string;
  targetAmount: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  image: string;
  stripePriceId: string;
};

type SupportedMethod = 'card' | 'paypay' | 'konbini' | 'bank_transfer';

const checkoutEndpoint = '/api/create-checkout-session';

const paymentMethods: Array<{
  id: SupportedMethod;
  label: string;
  headline: string;
  description: string;
  note?: string;
}> = [
  {
    id: 'card',
    label: 'card',
    headline: 'クレジットカード',
    description: 'Visa / Mastercard / JCB / American Express など国内主要ブランドに対応しています。',
  },
  {
    id: 'paypay',
    label: 'paypay',
    headline: 'PayPay',
    description: 'QR決済アプリ PayPay でお支払いいただけます。チェックアウト後にPayPayアプリへ遷移します。',
  },
  {
    id: 'konbini',
    label: 'konbini',
    headline: 'コンビニ決済',
    description: 'ローソン、ファミリーマート、ミニストップなどのコンビニ店頭でお支払い可能です。',
    note: 'お支払い番号は決済完了画面とメールでご案内します。3日以内にお支払いください。',
  },
  {
    id: 'bank_transfer',
    label: 'bank_transfer',
    headline: '銀行振込（Stripeバンクトランスファー）',
    description: 'Stripeが生成する専用口座へお振り込みいただけます。振込先情報は決済完了後に表示されます。',
    note: '振込手数料はご負担ください。着金確認後に領収書をメールでお送りします。',
  },
];

const donationOptions: DonationOption[] = [
  {
    id: 'scholarship',
    title: '奨学金支援',
    targetAmount: '¥10,000',
    description: '未来の学生たちを支援するための奨学基金です。',
    icon: BookOpen,
    iconBg: 'bg-cyan-500',
    image:
      'https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=640',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_SCHOLARSHIP ?? '',
  },
  {
    id: 'facility',
    title: '施設整備基金',
    targetAmount: '¥50,000',
    description: '新しい校舎や教育設備の整備を支える寄付です。',
    icon: Building2,
    iconBg: 'bg-red-500',
    image:
      'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=640',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_FACILITY ?? '',
  },
  {
    id: 'club',
    title: '部活動応援',
    targetAmount: '¥5,000',
    description: '部活動の遠征費や備品購入を支援します。',
    icon: BookOpen,
    iconBg: 'bg-cyan-500',
    image:
      'https://images.pexels.com/photos/2228585/pexels-photo-2228585.jpeg?auto=compress&cs=tinysrgb&w=640',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_CLUB ?? '',
  },
  {
    id: 'global',
    title: '海外交流支援',
    targetAmount: '¥20,000',
    description: 'グローバルプログラムの渡航費・交流活動を応援します。',
    icon: Users,
    iconBg: 'bg-pink-500',
    image:
      'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=640',
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_GLOBAL ?? '',
  },
];

const heroStripePriceId =
  import.meta.env.VITE_STRIPE_PRICE_HERO ?? donationOptions[0]?.stripePriceId ?? '';

const PaymentMethodSelector: React.FC<{
  paymentMethod: SupportedMethod;
  onChange: (method: SupportedMethod) => void;
}> = ({ paymentMethod, onChange }) => (
  <div className="space-y-3">
    <h3 className="text-base font-semibold text-gray-900">お支払い方法</h3>
    <p className="text-sm text-gray-600">
      以下からご希望の決済方法をお選びください。決済画面は Stripe により安全に提供されます。
    </p>
    <div className="grid gap-3">
      {paymentMethods.map((method) => {
        const selected = paymentMethod === method.id;
        return (
          <label
            key={method.id}
            className={`rounded-2xl border p-4 transition-all ${
              selected
                ? 'border-red-500 bg-red-50 shadow-md'
                : 'border-gray-200 hover:border-red-300 hover:bg-red-50/40'
            }`}
          >
            <div className="flex items-start gap-3">
              <input
                type="radio"
                name="paymentMethod"
                value={method.id}
                checked={selected}
                onChange={() => onChange(method.id)}
                className="mt-1 h-4 w-4 text-red-600 focus:ring-red-500"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">{method.headline}</p>
                <p className="mt-1 text-xs text-gray-600 leading-relaxed">{method.description}</p>
                {method.note ? (
                  <p className="mt-2 rounded-lg bg-white/80 px-3 py-2 text-xs text-red-600">
                    {method.note}
                  </p>
                ) : null}
              </div>
            </div>
          </label>
        );
      })}
    </div>
  </div>
);

const Donations: React.FC = () => {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<SupportedMethod>('card');

  const handleDonate = async (priceId: string, sourceId: string) => {
    if (!priceId) {
      alert('この寄付メニューは準備中です。管理者にお問い合わせください。');
      return;
    }

    try {
      setLoadingId(sourceId);

      const response = await fetch(checkoutEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId,
          paymentMethod,
          successUrl: `${window.location.origin}/donations?success=true`,
          cancelUrl: `${window.location.origin}/donations?cancelled=true`,
        }),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => ({}));
        const message = errorBody?.error ?? '決済の受付に失敗しました。時間をおいて再度お試しください。';
        throw new Error(message);
      }

      const { url } = (await response.json()) as { url?: string };
      if (!url) {
        throw new Error('決済ページのURLを取得できませんでした。');
      }

      window.location.assign(url);
    } catch (error) {
      console.error('Checkout redirect error', error);
      const message =
        error instanceof Error
          ? error.message
          : '決済処理を開始できませんでした。設定を確認して再度お試しください。';
      alert(message);
    } finally {
      setLoadingId(null);
    }
  };

  const donationReports = [
    {
      id: 1,
      title: '奨学金支援が目標額の80%を達成',
      date: '2024年3月15日',
      description: '皆さまのご支援により、新たに10名の奨学生が決定しました。',
    },
    {
      id: 2,
      title: '施設整備プロジェクトが進行中',
      date: '2024年3月10日',
      description: '新体育館の改修工事が始まり、秋頃の完成を予定しています。',
    },
  ];

  const renderDonateButton = (priceId: string, sourceId: string, size: 'sm' | 'lg') => {
    const isLoading = loadingId === sourceId;
    const baseClass =
      'bg-gradient-to-r from-red-800 to-red-950 text-white font-semibold inline-flex items-center justify-center gap-2 hover:from-red-900 hover:to-black transition-all disabled:cursor-not-allowed disabled:opacity-60';
    const sizeClass =
      size === 'lg'
        ? 'py-4 px-8 text-lg rounded-xl shadow-lg transform hover:scale-105'
        : 'py-3 px-6 text-sm rounded-xl shadow-md';

    return (
      <button
        onClick={() => handleDonate(priceId, sourceId)}
        disabled={!priceId || isLoading}
        className={`${baseClass} ${sizeClass}`}
      >
        <Heart className={size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'} />
        {isLoading ? '接続中…' : '今すぐ寄付する'}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="px-4 py-6">
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              みなさまからの
              <br />
              寄付
            </h1>
          </div>

          {/* Hero Section */}
          <section className="mb-8">
            <div className="bg-white rounded-3xl p-6 shadow-md text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-800 to-red-950 rounded-3xl">
                <Star className="h-10 w-10 text-yellow-400 fill-yellow-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">母校の未来を支える寄付</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  卒業生の皆さまのご支援により、在校生がより良い環境で学び続けられるよう活動しています。
                </p>
              </div>
              <div className="space-y-4 text-left">
                <PaymentMethodSelector paymentMethod={paymentMethod} onChange={setPaymentMethod} />
              </div>
              <div className="flex justify-center">{renderDonateButton(heroStripePriceId, 'hero', 'lg')}</div>
            </div>
          </section>

          {/* Donation Options Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">寄付先を選ぶ</h2>
            <div className="space-y-4">
              {donationOptions.map((option) => {
                const Icon = option.icon;
                const isLoading = loadingId === option.id;
                return (
                  <div
                    key={option.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="h-36 overflow-hidden">
                      <img src={option.image} alt={option.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-4 p-4">
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-11 h-11 ${option.iconBg} rounded-xl flex items-center justify-center`}>
                          <Icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm">{option.title}</h3>
                          <p className="text-xs font-semibold text-cyan-600">
                            推奨寄付額: {option.targetAmount}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">{option.description}</p>
                      <button
                        onClick={() => handleDonate(option.stripePriceId, option.id)}
                        disabled={!option.stripePriceId || isLoading}
                        className="w-full bg-gradient-to-r from-red-800 to-red-950 text-white py-2.5 px-4 text-sm font-semibold rounded-xl flex items-center justify-center gap-2 hover:from-red-900 hover:to-black transition-all disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <Heart className="h-4 w-4" />
                        {isLoading ? '接続中…' : '寄付する'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Donation Reports Section */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">寄付の活用報告</h2>
            <div className="space-y-3">
              {donationReports.map((report) => (
                <div
                  key={report.id}
                  className="bg-white rounded-xl p-3.5 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm">{report.title}</h3>
                    <p className="text-xs text-gray-500 mb-1.5">{report.date}</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{report.description}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 ml-2" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">みなさまからの寄付</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              母校の未来を支えるために、卒業生・保護者・地域の皆さまの温かいご支援をお待ちしています。
            </p>
          </div>

          {/* Hero Section */}
          <section className="mb-16">
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <div className="grid gap-10 md:grid-cols-2 md:items-center">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-800 to-red-950 rounded-3xl">
                    <Star className="h-12 w-12 text-yellow-400 fill-yellow-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">母校の未来を支える寄付</h2>
                    <p className="text-gray-600 leading-relaxed">
                      寄付により教育環境の充実、設備の改善、学習・部活動支援など、さまざまなプロジェクトが前進します。
                      皆さまのご協力を心よりお願い申し上げます。
                    </p>
                  </div>
                  <PaymentMethodSelector paymentMethod={paymentMethod} onChange={setPaymentMethod} />
                </div>
                <div className="flex flex-col items-center justify-center gap-6">
                  <img
                    src="https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg?auto=compress&cs=tinysrgb&w=640"
                    alt="Donation hero"
                    className="w-full rounded-3xl object-cover shadow-lg"
                  />
                  {renderDonateButton(heroStripePriceId, 'hero-desktop', 'lg')}
                </div>
              </div>
            </div>
          </section>

          {/* Donation Options Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">寄付先を選ぶ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {donationOptions.map((option) => {
                const Icon = option.icon;
                const isLoading = loadingId === option.id;
                return (
                  <div
                    key={option.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="h-56 overflow-hidden">
                      <img src={option.image} alt={option.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-16 h-16 ${option.iconBg} rounded-xl flex items-center justify-center`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{option.title}</h3>
                          <p className="text-lg font-semibold text-cyan-600">
                            推奨寄付額: {option.targetAmount}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{option.description}</p>
                      <button
                        onClick={() => handleDonate(option.stripePriceId, option.id)}
                        disabled={!option.stripePriceId || isLoading}
                        className="w-full bg-gradient-to-r from-red-800 to-red-950 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-red-900 hover:to-black transition-all disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        <Heart className="h-5 w-5" />
                        {isLoading ? '接続中…' : '寄付する'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Donation Reports Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">寄付の活用報告</h2>
            <div className="space-y-4 max-w-3xl">
              {donationReports.map((report) => (
                <div
                  key={report.id}
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{report.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{report.date}</p>
                    <p className="text-gray-600">{report.description}</p>
                  </div>
                  <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0 ml-4" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Donations;

