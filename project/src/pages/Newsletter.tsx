import React from 'react';
import Newsletter3D from '../components/Newsletter3D';
import { BookOpen } from 'lucide-react';

const Newsletter: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#F7F3F0] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <BookOpen className="h-8 w-8 text-morioka-600" />
                        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            同窓会報
                        </h1>
                    </div>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        最新の同窓会報を3Dビューアでご覧いただけます。
                        ページをクリックするとめくることができます。
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 mb-12">
                    <Newsletter3D />

                    <div className="mt-8 text-center text-sm text-gray-500">
                        <p>※ マウスでドラッグして視点を変更できます</p>
                    </div>
                </div>

                {/* Archive Section */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">バックナンバー</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Placeholder for archives */}
                        {[74, 73, 72].map((issue) => (
                            <div key={issue} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="h-48 bg-gray-200 flex items-center justify-center">
                                    <span className="text-gray-400 font-medium">第{issue}号 表紙</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">第{issue}号</h3>
                                    <p className="text-gray-600 text-sm mb-4">202{5 - (75 - issue)}年発行</p>
                                    <button className="text-morioka-600 font-medium hover:text-morioka-700 transition-colors">
                                        PDFをダウンロード
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
