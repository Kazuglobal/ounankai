export type AlumniTopic = {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  url?: string;
};

export const alumniTopics: AlumniTopic[] = [
  {
    id: 'topic6',
    title: '竹田英憲さん（令和3年度卒）能登半島地震災害支援に参加',
    date: '2024年03月12日',
    category: '社会貢献',
    description: '土木科卒業生の竹田英憲さん（株式会社郡南建設）が、能登半島地震災害支援として3月5日〜12日の8日間、石川県珠洲市で水道管復旧作業に従事されました。現場で得た経験を、現在の盛岡市内での配水管布設替工事に活かしています。',
    url: '/newsletter/issue-74#takeda-hidenori'
  },
  {
    id: 'topic5',
    title: '吉田雪乃選手（令和2年度卒）全日本距離別選手権で優勝',
    date: '2024年10月27日',
    category: 'スポーツ',
    description: '電子情報科卒業生の吉田雪乃選手が、2024年第31回全日本距離別選手権大会で500m優勝、1000m第2位の輝かしい成績を収め、2年連続で日本代表に選出されました。ミラノ・コルティナ2026冬季オリンピックでの活躍が期待されます。',
    url: '/newsletter/issue-74#yoshida-yukino'
  },
  {
    id: 'topic1',
    title: '卒業生ネットワークインタビュー',
    date: '2024年03月12日',
    category: 'インタビュー',
    description: '全国で活躍する同窓生にインタビュー。キャリアの選択や地元への想いを語っていただきました。',
    url: '/announcements'
  },
  {
    id: 'topic2',
    title: '春の同窓会イベント開催報告',
    date: '2024年04月05日',
    category: 'イベント',
    description: '東京・大阪・青森の3会場で同時開催された春の同窓会の様子をレポート。100名以上が参加しました。',
    url: '/announcements'
  },
  {
    id: 'topic3',
    title: '卒業生起業家特集',
    date: '2024年02月20日',
    category: '特集',
    description: '地元で起業した卒業生3名の事業紹介。地域貢献と新しいビジネスモデルへの挑戦について。',
    url: '/announcements'
  },
  {
    id: 'topic4',
    title: 'メンタリングプログラム開始',
    date: '2024年01月15日',
    category: 'お知らせ',
    description: 'キャリア相談や就職活動をサポートする新しいメンタリングプログラムがスタートしました。',
    url: '/contact'
  }
];
