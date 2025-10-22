import React from 'react';
import { Users, Calendar } from 'lucide-react';

const BoardOfDirectors: React.FC = () => {
  const boardMembers = [
    // 会長
    { position: '会長', graduationYear: '昭54⑦', name: '松　井　正　文' },
    
    // 副会長
    { position: '副会長', graduationYear: '昭53⑥', name: '今　川　　　一' },
    { position: '副会長', graduationYear: '昭53⑤', name: '石　橋　久　子' },
    { position: '副会長', graduationYear: '昭54①', name: '浮　木　　　隆' },
    { position: '副会長', graduationYear: '昭58①', name: '川　村　　　洋' },
    
    // 理事
    { position: '理事', graduationYear: '昭53⑧', name: '柏　崎　正　文' },
    { position: '理事', graduationYear: '昭53⑥', name: '西　塚　夏志人' },
    { position: '理事', graduationYear: '昭53⑤', name: '豊　川　寛　一' },
    { position: '理事', graduationYear: '昭53④', name: '野　田　継　子' },
    { position: '理事', graduationYear: '昭54①', name: '加　藤　信　一' },
    { position: '理事', graduationYear: '昭54②', name: '昆　　　悟　志' },
    { position: '理事', graduationYear: '昭54④', name: '中　里　明　光' },
    { position: '理事', graduationYear: '昭54③', name: '河　村　和　男' },
    { position: '理事', graduationYear: '昭56⑦', name: '細　越　寿　一' },
    { position: '理事', graduationYear: '昭57①', name: '黒　澤　宗　男' },
    { position: '理事', graduationYear: '昭57②', name: '佐々木　伸　夫' },
    { position: '理事', graduationYear: '昭59③', name: '大久保　圭一郎' },
    { position: '理事', graduationYear: '昭61⑤', name: '小　林　弘　文' },
    { position: '理事', graduationYear: '平４③', name: '田　村　哲　章' },
    { position: '理事', graduationYear: '平４⑧', name: '安ケ平　幸　子' },
    { position: '理事', graduationYear: '平６④', name: '安　達　康　裕' },
    { position: '理事', graduationYear: '平９①', name: '岡　本　信　也' },
    { position: '理事', graduationYear: '平12④', name: '角　　　由香里' },
    { position: '理事', graduationYear: '平14④', name: '大　山　慎　司' },
    { position: '理事（関東支部長）', graduationYear: '昭54②', name: '田名部　和　人' },
    { position: '理事（事務局長）', graduationYear: '昭54③', name: '橋　場　秀　樹' },
    
    // 事務局
    { position: '事務局', graduationYear: '昭54⑥', name: '泉　山　謙　一' },
    { position: '事務局', graduationYear: '昭54⑤', name: '石　倉　多美子' },
    { position: '事務局', graduationYear: '昭58③', name: '柳　谷　歌奈子' },
    { position: '事務局', graduationYear: '平６③', name: '奥　島　義　範' },
    { position: '事務局・関東支部', graduationYear: '昭62②', name: '星　野　まり子' },
    
    // 会計監事
    { position: '会計監事', graduationYear: '昭53⑧', name: '鎌　田　視　久' },
    { position: '会計監事', graduationYear: '昭55⑥', name: '高　橋　　　学' },
    
    // 顧問
    { position: '顧問', graduationYear: '昭53①', name: '斎　藤　学　成' }
  ];

  const representatives = [
    // 代表幹事
    { position: '代表幹事', graduationYear: '昭53⑥', name: '今　川　　　一' },
    { position: '代表幹事', graduationYear: '昭53⑤', name: '石　橋　久　子' },
    { position: '代表幹事', graduationYear: '昭54①', name: '加　藤　信　一' },
    { position: '代表幹事', graduationYear: '昭55③', name: '村　上　荘　士' },
    { position: '代表幹事', graduationYear: '昭55⑦', name: '三　浦　俊　司' },
    { position: '代表幹事', graduationYear: '昭56⑦', name: '小　泉　　　智' },
    { position: '代表幹事', graduationYear: '昭56①', name: '相　内　秀　明' },
    { position: '代表幹事', graduationYear: '昭57②', name: '千　葉　信　彦' },
    { position: '代表幹事', graduationYear: '昭57①', name: '黒　澤　宗　男' },
    { position: '代表幹事', graduationYear: '昭58③', name: '上　野　真　司' },
    { position: '代表幹事', graduationYear: '昭58①', name: '川　村　　　洋' },
    { position: '代表幹事', graduationYear: '昭58③', name: '柳　谷　歌奈子' },
    { position: '代表幹事', graduationYear: '昭58⑦', name: '塚　原　敏　之' },
    { position: '代表幹事', graduationYear: '昭59⑥', name: '中　里　充　孝' },
    { position: '代表幹事', graduationYear: '昭59②', name: '松　本　　　徹' },
    { position: '代表幹事', graduationYear: '昭59⑦', name: '橋　本　浩　弥' },
    { position: '代表幹事', graduationYear: '昭59⑤', name: '佐　藤　　　晃' },
    { position: '代表幹事', graduationYear: '昭60⑤', name: '石　鉢　智　広' },
    { position: '代表幹事', graduationYear: '昭60⑤', name: '小笠原　新　一' },
    { position: '代表幹事', graduationYear: '昭60④', name: '富　岡　朋　尚' },
    { position: '代表幹事', graduationYear: '昭61⑤', name: '小　山　　　徹' },
    { position: '代表幹事', graduationYear: '昭62①', name: '上　野　博　信' },
    { position: '代表幹事', graduationYear: '昭62②', name: '杉　本　秀　直' },
    { position: '代表幹事', graduationYear: '昭63⑤', name: '佐々木　美由紀' },
    { position: '代表幹事', graduationYear: '平元⑤', name: '笹　森　詩　子' },
    { position: '代表幹事', graduationYear: '平２⑥', name: '太　田　勝　裕' },
    { position: '代表幹事', graduationYear: '平２⑦', name: '沼　畑　武　行' },
    { position: '代表幹事', graduationYear: '平３②', name: '大　里　知　矢' },
    { position: '代表幹事', graduationYear: '平４①', name: '鈴　木　　　勇' },
    { position: '代表幹事', graduationYear: '平４⑧', name: '船　渡　大　祐' },
    { position: '代表幹事', graduationYear: '平４③', name: '久　慈　広　隆' },
    { position: '代表幹事', graduationYear: '平４④', name: '村　松　　　環' },
    { position: '代表幹事', graduationYear: '平４③', name: '中　田　千　秋' },
    { position: '代表幹事', graduationYear: '平５⑦', name: '小　田　正　徳' },
    { position: '代表幹事', graduationYear: '平５③', name: '石　橋　一　水' },
    { position: '代表幹事', graduationYear: '平６②', name: '佐　藤　洋　輔' },
    { position: '代表幹事', graduationYear: '平６③', name: '奥　島　義　範' },
    { position: '代表幹事', graduationYear: '平７⑧', name: '松　舘　隆　一' },
    { position: '代表幹事', graduationYear: '平７①', name: '藤　嶋　章　司' },
    { position: '代表幹事', graduationYear: '平７③', name: '岩　藤　裕　樹' },
    { position: '代表幹事', graduationYear: '平７④', name: '松　倉　寛　幸' },
    { position: '代表幹事', graduationYear: '平８①', name: '平　山　佳　子' },
    { position: '代表幹事', graduationYear: '平９③', name: '河　村　将　弥' },
    { position: '代表幹事', graduationYear: '平９①', name: '岡　本　信　也' },
    { position: '代表幹事', graduationYear: '平10④', name: '川　井　　　勉' },
    { position: '代表幹事', graduationYear: '平10①', name: '大　西　正　章' },
    { position: '代表幹事', graduationYear: '平10⑧', name: '荒屋敷　　　圭' },
    { position: '代表幹事', graduationYear: '平10①', name: '岩　間　正　雄' },
    { position: '代表幹事', graduationYear: '平11③', name: '福　山　雄　亮' },
    { position: '代表幹事', graduationYear: '平12②', name: '前川原　　　亮' },
    { position: '代表幹事', graduationYear: '平12⑦', name: '大　山　泰　弘' },
    { position: '代表幹事', graduationYear: '平13②', name: '小　泉　智　心' },
    { position: '代表幹事', graduationYear: '平14③', name: '林　　　源　太' },
    { position: '代表幹事', graduationYear: '平14④', name: '柳　町　　　浩' },
    { position: '代表幹事', graduationYear: '平16④', name: '大　沢　泰　尚' },
    { position: '代表幹事', graduationYear: '平16⑤', name: '田　中　　　圭' },
    { position: '代表幹事', graduationYear: '平18⑥', name: '西　野　茂　樹' },
    { position: '代表幹事', graduationYear: '平19⑤', name: '田名部　祐　也' },
    { position: '代表幹事', graduationYear: '平19⑥', name: '大　舘　和　史' },
    { position: '代表幹事', graduationYear: '平20⑤', name: '遠　藤　優　季' },
    { position: '代表幹事', graduationYear: '平20⑤', name: '田　中　順　弥' },
    { position: '代表幹事', graduationYear: '平21②', name: '竹　原　香代子' },
    { position: '代表幹事', graduationYear: '平22③', name: '川　井　秋　穂' },
    { position: '代表幹事', graduationYear: '平22⑥', name: '若　宮　大　樹' },
    { position: '代表幹事', graduationYear: '平23②', name: '大　西　　　萌' },
    { position: '代表幹事', graduationYear: '平24⑤', name: '和　田　拓　也' },
    { position: '代表幹事', graduationYear: '平25⑥', name: '佐々木　俊　哉' },
    { position: '代表幹事', graduationYear: '平26③', name: 'ワイアットチャールズウィリアム5世' },
    { position: '代表幹事', graduationYear: '平27②', name: '渡　部　ゆきの' },
    { position: '代表幹事', graduationYear: '平28④', name: '三　田　あおい' },
    { position: '代表幹事', graduationYear: '平29①', name: '木澤畑　　　星' },
    { position: '代表幹事', graduationYear: '平30④', name: '苫米地　李　奈' },
    { position: '代表幹事', graduationYear: '平31③', name: '河守田　桃　華' },
    { position: '代表幹事', graduationYear: '令２①', name: '星　　　春　輝' },
    { position: '代表幹事', graduationYear: '令３④', name: '大　嶋　響　輝' },
    { position: '代表幹事', graduationYear: '令４⑤', name: '道　地　来　阿' },
    { position: '代表幹事', graduationYear: '令５①', name: '熊　澤　綾　里' },
    { position: '代表幹事', graduationYear: '令６①', name: '石　田　叶　大' }
  ];

  const positionOrder = ['会長', '副会長', '理事', '理事（関東支部長）', '理事（事務局長）', '事務局', '事務局・関東支部', '会計監事', '顧問'];

  const groupedMembers = positionOrder.reduce((acc, position) => {
    const members = boardMembers.filter(member => {
      if (position === '理事') {
        return member.position === '理事';
      }
      return member.position === position;
    });
    if (members.length > 0) {
      acc[position] = members;
    }
    return acc;
  }, {} as Record<string, typeof boardMembers>);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="px-4 py-6">
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              役員名簿
            </h1>
            <p className="text-sm text-gray-600 mb-3">
              青森県立八戸西高等学校同窓会奧南会
            </p>
            <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
              <Calendar className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm text-gray-600">令和6年度</span>
            </div>
          </div>

          {/* Board Members */}
          <div className="mb-6">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3">
                <h2 className="text-lg font-bold text-white flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  役員
                </h2>
              </div>
              
              <div className="p-4">
                {Object.entries(groupedMembers).map(([position, members]) => (
                  <div key={position} className="mb-6 last:mb-0">
                    <h3 className="text-base font-bold text-gray-900 mb-3 pb-2 border-b border-blue-200">
                      {position}
                    </h3>
                    <div className="space-y-2">
                      {members.map((member, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                          <div className="flex-1">
                            <div className="text-xs text-blue-600 font-medium mb-0.5">
                              {member.graduationYear}
                            </div>
                            <div className="text-base font-bold text-gray-900">
                              {member.name}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Representatives */}
          <div className="mb-6">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 px-4 py-3">
                <h2 className="text-lg font-bold text-white flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  代表幹事
                </h2>
              </div>
              
              <div className="p-4">
                <div className="space-y-2">
                  {representatives.map((rep, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                      <div className="flex-1">
                        <div className="text-xs text-green-600 font-medium mb-0.5">
                          {rep.graduationYear}
                        </div>
                        <div className="text-sm font-bold text-gray-900">
                          {rep.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="text-xs text-gray-600 leading-relaxed text-center">
              令和6年度役員・代表幹事名簿。ご質問は事務局までお問い合わせください。
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                役員名簿
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                青森県立八戸西高等学校同窓会奧南会の役員・代表幹事名簿
              </p>
            </div>

            {/* Update Info */}
            <div className="bg-white rounded-3xl p-6 shadow-xl mb-12 text-center">
              <div className="flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                <span className="text-gray-600">令和6年度役員名簿</span>
              </div>
            </div>

            {/* Board Members */}
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <Users className="w-6 h-6 mr-3" />
                    役員
                  </h2>
                </div>
                
                <div className="p-8">
                  {Object.entries(groupedMembers).map(([position, members]) => (
                    <div key={position} className="mb-8 last:mb-0">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-200">
                        {position}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {members.map((member, index) => (
                          <div key={index} className="bg-gray-50 rounded-xl p-4">
                            <div className="text-sm text-blue-600 font-medium mb-1">
                              {member.graduationYear}
                            </div>
                            <div className="text-lg font-bold text-gray-900">
                              {member.name}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Representatives */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <Users className="w-6 h-6 mr-3" />
                    代表幹事
                  </h2>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {representatives.map((rep, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-4">
                        <div className="text-sm text-green-600 font-medium mb-1">
                          {rep.graduationYear}
                        </div>
                        <div className="text-base font-bold text-gray-900">
                          {rep.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-16 text-center">
              <div className="bg-gray-50 rounded-2xl p-8">
                <p className="text-gray-600 leading-relaxed">
                  この名簿は、青森県立八戸西高等学校同窓会奧南会の令和6年度役員・代表幹事名簿です。
                  ご質問やご不明な点がございましたら、事務局までお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;