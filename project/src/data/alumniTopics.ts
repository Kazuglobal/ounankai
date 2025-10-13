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
