import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, ArrowRight, Users, Briefcase, Award } from 'lucide-react';

const AlumniProfiles: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const alumniData = [
    {
      id: 1,
      name: 'Sarah Johnson',
      year: '2018',
      profession: 'Tech Entrepreneur',
      company: 'InnovateTech Solutions',
      location: '東京都',
      industry: 'テクノロジー',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievement: 'Founded successful AI startup valued at $50M',
      description: 'Leading innovation in artificial intelligence and machine learning solutions for healthcare.',
      highlights: ['Forbes 30 Under 30', 'TechCrunch Disruptor Award', 'MIT Technology Review Innovator']
    },
    {
      id: 2,
      name: 'Michael Chen',
      year: '2015',
      profession: 'Medical Researcher',
      company: 'Harvard Medical School',
      location: '大阪府',
      industry: 'ヘルスケア',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievement: 'Leading breakthrough cancer research initiatives',
      description: 'Pioneering novel approaches to cancer treatment through immunotherapy research.',
      highlights: ['Nature Publication Author', 'NIH Research Grant Recipient', 'American Cancer Society Fellow']
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      year: '2012',
      profession: 'Environmental Lawyer',
      company: 'Green Justice Coalition',
      location: '愛知県',
      industry: '法律',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievement: 'Championing climate policy reform at federal level',
      description: 'Advocating for environmental justice and sustainable policy implementation.',
      highlights: ['Supreme Court Case Winner', 'Environmental Law Institute Award', 'Climate Policy Advisor']
    },
    {
      id: 4,
      name: 'David Kim',
      year: '2010',
      profession: 'Investment Banker',
      company: 'Goldman Sachs',
      location: '神奈川県',
      industry: '金融',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievement: 'Managing Director overseeing $2B+ in transactions',
      description: 'Specializing in technology sector mergers and acquisitions.',
      highlights: ['Top 1% Performer', 'Deal of the Year Award', 'Industry Leadership Recognition']
    },
    {
      id: 5,
      name: 'Amanda Williams',
      year: '2014',
      profession: 'Documentary Filmmaker',
      company: 'Independent Producer',
      location: '埼玉県',
      industry: 'メディア',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievement: 'Emmy Award winner for social justice documentary',
      description: 'Creating impactful documentaries that drive social change and awareness.',
      highlights: ['Emmy Award Winner', 'Sundance Film Festival Selection', 'Human Rights Film Award']
    },
    {
      id: 6,
      name: 'Robert Thompson',
      year: '2008',
      profession: 'Renewable Energy Engineer',
      company: 'Tesla Energy',
      location: '千葉県',
      industry: 'エンジニアリング',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievement: 'Lead engineer on revolutionary battery technology',
      description: 'Developing next-generation energy storage solutions for sustainable future.',
      highlights: ['Patent Holder (15+ patents)', 'IEEE Fellow', 'Clean Energy Innovation Award']
    },
    {
      id: 7,
      name: 'Lisa Chang',
      year: '2016',
      profession: 'Education Policy Director',
      company: 'Gates Foundation',
      location: '兵庫県',
      industry: '非営利',
      image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievement: 'Transforming education access in underserved communities',
      description: 'Leading initiatives to improve educational outcomes and equity globally.',
      highlights: ['Global Education Leader', 'UNESCO Partnership Director', 'Education Innovation Award']
    },
    {
      id: 8,
      name: 'James Foster',
      year: '2011',
      profession: 'Sports Medicine Physician',
      company: 'Olympic Training Center',
      location: '北海道',
      industry: 'ヘルスケア',
      image: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievement: 'Team physician for multiple Olympic teams',
      description: 'Providing cutting-edge sports medicine care to elite athletes.',
      highlights: ['Olympic Team Physician', 'Sports Medicine Board Certified', 'Athletic Performance Researcher']
    },
    {
      id: 9,
      name: 'Maria Santos',
      year: '2013',
      profession: 'Aerospace Engineer',
      company: 'SpaceX',
      location: '福岡県',
      industry: '航空宇宙',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      achievement: 'Lead engineer on Mars mission spacecraft',
      description: 'Designing propulsion systems for next-generation space exploration.',
      highlights: ['Mars Mission Team Lead', 'NASA Collaboration', 'Aerospace Innovation Award']
    }
  ];

  const industries = ['all', 'テクノロジー', 'ヘルスケア', '法律', '金融', 'メディア', 'エンジニアリング', '非営利', '航空宇宙', '飲食'];
  const locations = [
    'all', 
    '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
    '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
    '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県',
    '三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県',
    '鳥取県', '島根県', '岡山県', '広島県', '山口県',
    '徳島県', '香川県', '愛媛県', '高知県',
    '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
  ];

  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alumni.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === 'all' || alumni.industry === selectedIndustry;
    const matchesLocation = selectedLocation === 'all' || alumni.location === selectedLocation;
    
    return matchesSearch && matchesIndustry && matchesLocation;
  });

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            同窓生とつながる
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            多彩なキャリアと卓越した功績を持つ同窓生たちとつながりましょう
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="同窓生を検索..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Industry Filter */}
            <div className="relative">
              <Briefcase className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                {industries.map(industry => (
                  <option key={industry} value={industry}>
                    {industry === 'all' ? 'すべての業界' : industry}
                  </option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div className="relative">
              <MapPin className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'すべての地域' : location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {alumniData.length}名中 {filteredAlumni.length} 名を表示
            </p>
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAlumni.map((alumni) => (
            <div
              key={alumni.id}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-square">
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-600 font-semibold">Class of {alumni.year}</span>
                  </div>
                  <div className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                    {alumni.industry}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{alumni.name}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-1">{alumni.profession}</p>
                <p className="text-gray-600 mb-3">{alumni.company}</p>

                <div className="flex items-center text-gray-500 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{alumni.location}</span>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {alumni.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Award className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm font-semibold text-gray-700">主な功績</span>
                  </div>
                  <p className="text-sm text-gray-600">{alumni.achievement}</p>
                </div>

                <Link
                  to={`/alumni-profiles/${alumni.id}`}
                  className="inline-flex items-center w-full justify-center bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  詳細プロフィールを見る
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredAlumni.length === 0 && (
          <div className="text-center py-16">
            <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">同窓生が見つかりません</h3>
            <p className="text-gray-600 mb-8">
              検索条件やフィルタを調整してください。
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedIndustry('all');
                setSelectedLocation('all');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              すべてのフィルタをクリア
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default AlumniProfiles;