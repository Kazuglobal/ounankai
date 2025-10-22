import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Users, MapPin } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: '2024年ホームカミング',
      category: 'events',
      date: '2024年10月',
      location: 'メインキャンパス',
      description: '年次ホームカミング祝典のための同窓生の集い'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: '卒業式',
      category: 'campus',
      date: '2024年5月',
      location: '学校スタジアム',
      description: '2024年度卒業生の学位授与式'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'IT系同窓生ミートアップ',
      category: 'reunions',
      date: '2024年9月',
      location: 'サンフランシスコ',
      description: 'テクノロジー業界の同窓生ネットワーキングイベント'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'キャンパス図書館',
      category: 'campus',
      date: '歴史的',
      location: 'メインキャンパス',
      description: '多くの思い出が作られた象徴的な学校図書館'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: '若手同窓生ミキサー',
      category: 'events',
      date: '2024年8月',
      location: 'ダウンタウンホテル',
      description: '新卒者向けネットワーキングイベント'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: '1990年卒同窓会',
      category: 'reunions',
      date: '2024年6月',
      location: '同窓会センター',
      description: '35周年同窓会祝賀会'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: '歴史的中庭',
      category: 'campus',
      date: '歴史的',
      location: 'メインキャンパス',
      description: '何世代にもわたってキャンパス生活の中心となった場所'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: '2024年表彰ガラ',
      category: 'events',
      date: '2024年3月',
      location: 'グランドボールルーム',
      description: '年次同窓生功績表彰式'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: '医学部同窓生シンポジウム',
      category: 'reunions',
      date: '2024年7月',
      location: '医療センター',
      description: '医学部卒業生の年次集会'
    }
  ];

  const categories = [
    { id: 'all', name: 'すべての写真', count: galleryImages.length },
    { id: 'events', name: 'イベント', count: galleryImages.filter(img => img.category === 'events').length },
    { id: 'reunions', name: '同窓会', count: galleryImages.filter(img => img.category === 'reunions').length },
    { id: 'campus', name: 'キャンパス', count: galleryImages.filter(img => img.category === 'campus').length }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image: any) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="px-4 py-6">
          {/* Header */}
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              同窓生ギャラリー
            </h1>
            <p className="text-sm text-gray-600">
              思い出や特別な瞬間
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex overflow-x-auto gap-2 mb-6 pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 gap-3">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                onClick={() => openLightbox(image)}
                className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-xs font-bold text-gray-900 mb-1 line-clamp-1">
                    {image.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span className="truncate">{image.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white text-center">
              <h2 className="text-lg font-bold mb-2">
                思い出をシェア
              </h2>
              <p className="text-sm mb-4">
                写真をお持ちですか？<br/>ギャラリーでご紹介します。
              </p>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full text-sm font-semibold">
                写真を送信
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                同窓生ギャラリー
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                活気ある同窓生コミュニティの思い出や特別な瞬間をお届けします
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  onClick={() => openLightbox(image)}
                  className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {image.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{image.date}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{image.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  思い出をシェア
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  同窓生イベントやキャンパスの思い出の写真をお持ちですか？
                  ギャラリーでご紹介させていただきたいと思います。
                </p>
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-xl">
                  写真を送信
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox (共通) */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 z-10"
            >
              <X className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-2 lg:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-2 lg:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[70vh] object-contain rounded-2xl"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 lg:p-8 rounded-b-2xl">
              <h3 className="text-lg lg:text-2xl font-bold text-white mb-1 lg:mb-2">{selectedImage.title}</h3>
              <p className="text-sm lg:text-base text-gray-200 mb-2 lg:mb-4">{selectedImage.description}</p>
              <div className="flex items-center justify-between text-gray-300 text-xs lg:text-sm">
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                  <span>{selectedImage.date}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                  <span>{selectedImage.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;