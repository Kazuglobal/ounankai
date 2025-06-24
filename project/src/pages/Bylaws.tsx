import React, { useState } from 'react';
import { ChevronDown, ChevronRight, FileText, Download, Calendar } from 'lucide-react';

const Bylaws: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    'article-1': true
  });

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const bylawsSections = [
    {
      id: 'article-1',
      title: 'Article I - Name and Purpose',
      content: [
        {
          section: 'Section 1.1 - Name',
          text: 'The name of this organization shall be the "University Alumni Association" (hereinafter referred to as the "Association").'
        },
        {
          section: 'Section 1.2 - Purpose',
          text: 'The purpose of the Association is to foster lifelong connections among graduates, support the university\'s mission, and promote the welfare and advancement of the institution and its alumni community.'
        },
        {
          section: 'Section 1.3 - Mission Statement',
          text: 'To strengthen and expand the network of university graduates, fostering lifelong connections that support personal growth, professional development, and meaningful contributions to society.'
        }
      ]
    },
    {
      id: 'article-2',
      title: 'Article II - Membership',
      content: [
        {
          section: 'Section 2.1 - Eligibility',
          text: 'Membership in the Association is open to all graduates of the University who have received a degree, certificate, or diploma from any school, college, or program of the University.'
        },
        {
          section: 'Section 2.2 - Classes of Membership',
          text: 'The Association shall have the following classes of membership: (a) Regular Members - graduates of the University; (b) Associate Members - former students who attended for at least one academic year; (c) Honorary Members - individuals who have made significant contributions to the University or Association.'
        },
        {
          section: 'Section 2.3 - Rights and Privileges',
          text: 'All members in good standing shall have the right to participate in Association activities, receive publications, attend events, and vote in elections as specified in these bylaws.'
        },
        {
          section: 'Section 2.4 - Dues and Fees',
          text: 'The Board of Directors may establish annual dues and fees for membership. No member shall be denied participation in Association activities solely due to inability to pay dues.'
        }
      ]
    },
    {
      id: 'article-3',
      title: 'Article III - Board of Directors',
      content: [
        {
          section: 'Section 3.1 - Composition',
          text: 'The Board of Directors shall consist of no fewer than nine (9) and no more than fifteen (15) members, including the President, Vice President, Secretary, Treasurer, and other directors elected by the membership.'
        },
        {
          section: 'Section 3.2 - Terms of Office',
          text: 'Directors shall serve three-year terms and may be re-elected for one additional consecutive term. No director may serve more than six consecutive years without a break in service.'
        },
        {
          section: 'Section 3.3 - Powers and Duties',
          text: 'The Board of Directors shall have general supervision and control of the affairs of the Association, including but not limited to: setting policy, approving budgets, hiring staff, and ensuring compliance with applicable laws.'
        },
        {
          section: 'Section 3.4 - Meetings',
          text: 'The Board shall meet at least quarterly. Special meetings may be called by the President or upon written request of three or more directors. A majority of directors shall constitute a quorum.'
        }
      ]
    },
    {
      id: 'article-4',
      title: 'Article IV - Officers',
      content: [
        {
          section: 'Section 4.1 - Officers',
          text: 'The officers of the Association shall be a President, Vice President, Secretary, and Treasurer, elected by and from the Board of Directors.'
        },
        {
          section: 'Section 4.2 - President',
          text: 'The President shall preside at all meetings of the Association and Board of Directors, serve as the chief executive officer, and perform such other duties as may be assigned by the Board.'
        },
        {
          section: 'Section 4.3 - Vice President',
          text: 'The Vice President shall assist the President and, in the absence or inability of the President, shall perform the duties of the President.'
        },
        {
          section: 'Section 4.4 - Secretary',
          text: 'The Secretary shall keep accurate records of all meetings, maintain membership records, and handle official correspondence as directed by the Board.'
        },
        {
          section: 'Section 4.5 - Treasurer',
          text: 'The Treasurer shall oversee the financial affairs of the Association, ensure proper accounting procedures, and provide regular financial reports to the Board.'
        }
      ]
    },
    {
      id: 'article-5',
      title: 'Article V - Elections',
      content: [
        {
          section: 'Section 5.1 - Nominating Committee',
          text: 'A Nominating Committee of three members shall be appointed by the President with Board approval. The committee shall solicit and review nominations for Board positions.'
        },
        {
          section: 'Section 5.2 - Nominations',
          text: 'Nominations for the Board of Directors may be made by the Nominating Committee or by petition signed by at least twenty-five (25) members in good standing.'
        },
        {
          section: 'Section 5.3 - Elections Process',
          text: 'Elections shall be conducted annually by electronic ballot, mail ballot, or at the annual meeting. Each member in good standing shall be entitled to one vote per position.'
        },
        {
          section: 'Section 5.4 - Terms',
          text: 'Newly elected directors shall take office at the conclusion of the annual meeting at which they are elected.'
        }
      ]
    },
    {
      id: 'article-6',
      title: 'Article VI - Committees',
      content: [
        {
          section: 'Section 6.1 - Standing Committees',
          text: 'The Association may establish standing committees including but not limited to: Executive Committee, Finance Committee, Nominating Committee, and Program Committee.'
        },
        {
          section: 'Section 6.2 - Special Committees',
          text: 'The President, with Board approval, may establish special committees for specific purposes and limited duration.'
        },
        {
          section: 'Section 6.3 - Committee Authority',
          text: 'Committees shall have only such authority as specifically delegated by the Board of Directors and shall report regularly on their activities.'
        }
      ]
    },
    {
      id: 'article-7',
      title: 'Article VII - Finances',
      content: [
        {
          section: 'Section 7.1 - Fiscal Year',
          text: 'The fiscal year of the Association shall be from July 1 to June 30.'
        },
        {
          section: 'Section 7.2 - Budget',
          text: 'The Board of Directors shall approve an annual budget prior to the beginning of each fiscal year.'
        },
        {
          section: 'Section 7.3 - Financial Controls',
          text: 'The Association shall maintain appropriate financial controls and shall have its books audited or reviewed annually by an independent certified public accountant.'
        },
        {
          section: 'Section 7.4 - Contracts and Obligations',
          text: 'Contracts and financial obligations exceeding $10,000 must be approved by the Board of Directors.'
        }
      ]
    },
    {
      id: 'article-8',
      title: 'Article VIII - Amendments',
      content: [
        {
          section: 'Section 8.1 - Amendment Process',
          text: 'These bylaws may be amended by a two-thirds vote of the Board of Directors, provided that written notice of the proposed amendment is given to all directors at least thirty (30) days prior to the vote.'
        },
        {
          section: 'Section 8.2 - Member Input',
          text: 'Before adopting any amendment, the Board shall provide opportunity for member input through appropriate communication channels.'
        },
        {
          section: 'Section 8.3 - Effective Date',
          text: 'Amendments shall take effect immediately upon adoption unless otherwise specified in the amendment.'
        }
      ]
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Association Bylaws
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The governing documents that define our organization's structure, 
            operations, and member rights and responsibilities.
          </p>
        </div>

        {/* Document Info */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <FileText className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Official Bylaws Document</h2>
                <div className="flex items-center text-gray-600 mt-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Last Updated: March 15, 2024</span>
                </div>
              </div>
            </div>
            <button className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition-colors duration-200">
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </button>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-blue-50 rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bylawsSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => {
                  const element = document.getElementById(section.id);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-left p-3 rounded-xl hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <span className="text-blue-600 font-semibold">Article {index + 1}</span>
                <p className="text-gray-700 font-medium">{section.title.replace(`Article ${index + 1} - `, '')}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Bylaws Content */}
        <div className="space-y-8">
          {bylawsSections.map((article, index) => (
            <div key={article.id} id={article.id} className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <button
                onClick={() => toggleSection(article.id)}
                className="w-full p-8 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">{article.title}</h2>
                  {expandedSections[article.id] ? (
                    <ChevronDown className="w-6 h-6 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-500" />
                  )}
                </div>
              </button>

              {expandedSections[article.id] && (
                <div className="px-8 pb-8">
                  <div className="space-y-6">
                    {article.content.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="border-l-4 border-blue-200 pl-6">
                        <h3 className="text-lg font-semibold text-blue-800 mb-3">
                          {section.section}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {section.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions About Our Bylaws?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            If you have questions about our governing documents or would like to propose amendments, 
            please contact our Board of Directors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-xl"
            >
              Contact Board
            </a>
            <a
              href="/board-of-directors"
              className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 transition-colors duration-200 border-2 border-blue-400"
            >
              Meet Our Board
            </a>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            These bylaws were last amended and approved by the Board of Directors on March 15, 2024. 
            This document supersedes all previous versions of the Association bylaws.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bylaws;