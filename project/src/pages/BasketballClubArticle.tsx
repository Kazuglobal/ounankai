import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Trophy } from 'lucide-react';

const BasketballClubArticle: React.FC = () => {
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
            <Trophy className="h-6 w-6 text-orange-600" />
            <span className="text-sm font-semibold tracking-wide text-orange-600 uppercase">
              Club Activity Report
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            バスケットボール部
          </h1>
          <p className="text-xl text-gray-600">
            古豪から強豪への挑戦 ─ 東北大会出場・国体出場
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative h-96 bg-gradient-to-br from-orange-900 to-orange-700 rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white/30 text-9xl">🏀</div>
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <p className="text-sm font-semibold text-orange-600 mb-2">2024年度</p>
              <h2 className="text-2xl font-bold text-gray-900">東北大会出場・国民スポーツ大会出場</h2>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <article className="space-y-8">
          {/* 記事本文 */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <div className="mb-6 pb-4 border-b border-gray-200">
              <p className="text-sm text-gray-600 mb-1">バスケットボール部顧問</p>
              <p className="text-lg font-bold text-gray-900">後藤 泰宏</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p>
                同窓生の皆様におかれましては、益々ご健勝のこととお喜び申し上げます。<br />
                また、日頃より同窓会活動にご理解とご支援を賜り、誠にありがとうございます。
              </p>

              <p>
                岩手県高等学校総合体育大会がスタートしたのが昭和24年。バスケットボールは第1回大会から実施され、盛岡工業は昭和35年の第12回大会で悲願の初優勝を飾りました。以来、3度の4年連続優勝の偉業を成し遂げるなど黄金時代を築き、優勝回数は県内最多の20度を数えます。
              </p>

              <p>
                現在、バスケットボール部は40名を超える部員が所属し、日々活動しています。「強豪」ではなく「古豪」と呼ばれる現状に、当時をご存じの同窓生の皆様は歯がゆい思いをされていることと存じますが、今年度は、黄金期以来の東北大会出場を果たしました。また、岩手県選抜チームではありますが、盛岡工業から中村琉雅（電気科2年）、鈴木琥太郎（工業化学科2年）、小山内禅（建築・デザイン科2年）、玉山明日翔（電気科1年）、藤井煌馬（電気科1年）、細川優生（電子情報科1年）の6名が選出され、東北総体で準優勝という成績を残すことができました。佐賀県で開催された国民スポーツ大会に東北代表として出場し、それぞれが持ち味を発揮してきました。
              </p>

              <p>
                盛工黄金期の活躍には遠く及びませんが、古豪復活を印象づける戦いぶりができたのではないかと感じています。今年度、バスケットボール部OB会より部旗を寄贈していただきました。部旗には大きく「君臨」と書かれており、我々を鼓舞する素晴らしいデザインになっています。このように多くの方々に支えていただいていることに感謝の気持ちを忘れることなく、今後も歴史と伝統を背負って戦い、全国への復活を成し遂げられるよう日々精進します。「古豪から強豪への挑戦」を続けるバスケットボール部への熱いご声援をよろしくお願いいたします。
              </p>
            </div>
          </section>
        </article>

        {/* Back to Top */}
        <div className="mt-12 text-center">
          <button
            onClick={() => { if (window.history.length > 1) navigate(-1); else navigate('/'); }}
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="h-5 w-5" />
            ホームに戻る
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketballClubArticle;
