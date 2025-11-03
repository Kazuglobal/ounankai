import React from 'react';

const LegalNotice: React.FC = () => {
  return (
    <div className="bg-[#F7F3F0] min-h-screen py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white p-8 shadow-xl sm:p-10">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            特定商取引法に基づく表記
          </h1>
          <p className="mt-4 text-sm text-gray-600">
            本ページは、青森県立八戸西高等学校同窓会奥南会（以下「当会」）が提供する寄付・グッズ販売等の取引に関して、特定商取引法第11条に基づいて必要な事項を表示するものです。
          </p>

          <dl className="mt-10 space-y-6">
            <div className="sm:grid sm:grid-cols-4 sm:gap-6 sm:items-start">
              <dt className="text-sm font-semibold text-gray-900 sm:col-span-1">販売業者</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-3">
                青森県立八戸西高等学校同窓会 奥南会
              </dd>
            </div>

            <div className="sm:grid sm:grid-cols-4 sm:gap-6 sm:items-start">
              <dt className="text-sm font-semibold text-gray-900 sm:col-span-1">運営責任者</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-3">
                会長　松井 正文
              </dd>
            </div>

            <div className="sm:grid sm:grid-cols-4 sm:gap-6 sm:items-start">
              <dt className="text-sm font-semibold text-gray-900 sm:col-span-1">所在地</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-3">
                〒039-1101 青森県八戸市尻内町字中根市16
              </dd>
            </div>

            <div className="sm:grid sm:grid-cols-4 sm:gap-6 sm:items-start">
              <dt className="text-sm font-semibold text-gray-900 sm:col-span-1">連絡先</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-3 space-y-1">
                <p>TEL：019-638-3141（受付時間：平日10:00〜17:00）</p>
                <p>メール：ounankai50@gmail.com</p>
                <p>お問い合わせフォーム：<a href="/contact" className="text-blue-600 underline">お問い合わせページ</a></p>
              </dd>
            </div>

            <div className="sm:grid sm:grid-cols-4 sm:gap-6 sm:items-start">
              <dt className="text-sm font-semibold text-gray-900 sm:col-span-1">URL</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-3">
                <a href="https://project-ashen-two.vercel.app" className="text-blue-600 underline">
                  https://project-ashen-two.vercel.app
                </a>
              </dd>
            </div>

            <div className="sm:grid sm:grid-cols-4 sm:gap-6 sm:items-start">
              <dt className="text-sm font-semibold text-gray-900 sm:col-span-1">
                販売価格・寄付金
              </dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-3 space-y-1">
                <p>各寄付メニューに記載の金額（税込）をご確認ください。</p>
                <p>デジタルコンテンツの販売がある場合は、各商品ページに表示される価格となります。</p>
              </dd>
            </div>

            <div className="sm:grid sm:grid-cols-4 sm:gap-6 sm:items-start">
              <dt className="text-sm font-semibold text-gray-900 sm:col-span-1">商品代金以外の必要料金</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-3 space-y-1">
                <p>各種決済手数料（金融機関または決済事業者が定めるもの）</p>
                <p>銀行振込の場合：振込手数料</p>
                <p>コンビニ決済の場合：コンビニ事業者が定める手数料</p>
              </dd>
            </div>

            <div className="sm:grid sm:grid-cols-4 sm:gap-6 sm:items-start">
              <dt className="text-sm font-semibold text-gray-900 sm:col-span-1">お支払い方法</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-3 space-y-1">
                <p>Stripe決済（クレジットカード）</p>
                <p>Stripe決済（PayPay）</p>
                <p>Stripe決済（コンビニ支払い：ローソン・ファミリーマート・ミニストップ 他）</p>
                <p>Stripe決済（銀行振込：Stripeバンクトランスファー）</p>
              </dd>
            </div>

            <div className="sm:grid sm:grid-cols-4 sm:gap-6 sm:items-start">
              <dt className="text-sm font-semibold text-gray-900 sm:col-span-1">お支払い時期</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-3 space-y-1">
                <p>クレジットカード／PayPay：お申し込み時点で即時決済となります。</p>
                <p>コンビニ決済：お支払い番号発行後3日以内にお支払いください。</p>
                <p>銀行振込：振込案内に記載の期日までにお振り込みください。</p>
              </dd>
            </div>

            <div className="sm:grid sm:grid-cols-4 sm:gap-6 sm:items-start">
              <dt className="text-sm font-semibold text-gray-900 sm:col-span-1">商品引き渡し時期</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-3 space-y-1">
                <p>寄付については、決済完了をもって受付完了となります。</p>
                <p>デジタルコンテンツの販売がある場合は、決済完了後すぐにダウンロード可能です。</p>
                <p>物品販売（グッズ等）がある場合は、別途メールにて発送予定日をご案内いたします。</p>
              </dd>
            </div>

            <div className="sm:grid sm:grid-cols-4 sm:gap-6 sm:items-start">
              <dt className="text-sm font-semibold text-gray-900 sm:col-span-1">
                返品・キャンセルについて
              </dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-3 space-y-1">
                <p>寄付については性質上、決済完了後の返金は原則としてお受けしておりません。</p>
                <p>
                  デジタルコンテンツは商品の性質上、決済完了後の返品・キャンセルはお受けできません。
                </p>
                <p>
                  物品販売の場合、商品に欠陥がある場合を除き返品・交換はお受けできません。初期不良が確認された場合は 7 日以内にご連絡ください。
                </p>
              </dd>
            </div>

            <div className="sm:grid sm:grid-cols-4 sm:gap-6 sm:items-start">
              <dt className="text-sm font-semibold text-gray-900 sm:col-span-1">動作環境</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-3">
                本サイトは最新のブラウザ（Google Chrome / Microsoft Edge / Safari / Firefox）でのご利用を推奨しています。
              </dd>
            </div>

            <div className="sm:grid sm:grid-cols-4 sm:gap-6 sm:items-start">
              <dt className="text-sm font-semibold text-gray-900 sm:col-span-1">個人情報の取り扱い</dt>
              <dd className="mt-1 text-sm text-gray-700 sm:col-span-3 space-y-1">
                <p>
                  お預かりした個人情報は、決済処理および寄付に関するご連絡のほか、当会の活動報告等をご案内する目的で使用し、法的な要請を除き第三者へ提供いたしません。
                </p>
                <p>
                  詳細は <a href="/privacy-policy" className="text-blue-600 underline">プライバシーポリシー</a> をご確認ください。
                </p>
              </dd>
            </div>
          </dl>

          <div className="mt-10 rounded-2xl bg-red-50 p-6">
            <h2 className="text-lg font-semibold text-red-700">お問い合わせ</h2>
            <p className="mt-2 text-sm text-red-700">
              取引条件に関するご不明点や決済に関するお問い合わせは、上記「連絡先」までお願いいたします。迅速に対応させていただきます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;

