import React, { useState } from 'react';
import { Mail, Linkedin, Calendar, Award, Users, ChevronDown, ChevronUp } from 'lucide-react';

const BoardOfDirectors: React.FC = () => {
  const [expandedBio, setExpandedBio] = useState<number | null>(null);

  const boardMembers = [
    {
      id: 1,
      name: 'Margaret Thompson',
      title: 'President',
      class: '1995',
      profession: 'Healthcare Executive',
      company: 'Regional Medical Center',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      term: '2022-2025',
      bio: 'Margaret brings over 25 years of healthcare leadership experience to her role as Association President. As CEO of Regional Medical Center, she has led transformative initiatives in patient care and community health. Her passion for alumni engagement stems from her belief that strong networks create lasting positive impact.',
      achievements: [
        'Healthcare Executive of the Year 2023',
        'Led $50M hospital expansion project',
        'Board member of 3 healthcare nonprofits'
      ],
      committees: ['Executive Committee (Chair)', 'Strategic Planning Committee'],
      email: 'm.thompson@university.edu',
      linkedin: 'https://linkedin.com/in/margaretthompson'
    },
    {
      id: 2,
      name: 'Dr. James Rodriguez',
      title: 'Vice President',
      class: '1988',
      profession: 'University Professor',
      company: 'State University',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      term: '2023-2026',
      bio: 'Dr. Rodriguez is a distinguished professor of Engineering with expertise in sustainable technology. His research has been published in over 100 peer-reviewed journals. He is passionate about mentoring young alumni and fostering innovation in education.',
      achievements: [
        'National Science Foundation Fellow',
        'Published 100+ research papers',
        'Mentor to 50+ graduate students'
      ],
      committees: ['Academic Affairs Committee (Chair)', 'Scholarship Committee'],
      email: 'j.rodriguez@university.edu',
      linkedin: 'https://linkedin.com/in/drjamesrodriguez'
    },
    {
      id: 3,
      name: 'Sarah Chen',
      title: 'Secretary',
      class: '2005',
      profession: 'Corporate Attorney',
      company: 'Chen & Associates Law',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      term: '2024-2027',
      bio: 'Sarah is a founding partner of Chen & Associates Law, specializing in corporate governance and nonprofit law. Her legal expertise has been invaluable in guiding the Association through complex regulatory matters while maintaining our mission-focused approach.',
      achievements: [
        'Top 40 Under 40 Lawyers',
        'Pro bono legal services award',
        'Founded successful law practice'
      ],
      committees: ['Governance Committee (Chair)', 'Executive Committee'],
      email: 's.chen@university.edu',
      linkedin: 'https://linkedin.com/in/sarahchenlaw'
    },
    {
      id: 4,
      name: 'Michael Foster',
      title: 'Treasurer',
      class: '1998',
      profession: 'Investment Manager',
      company: 'Foster Capital Management',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      term: '2022-2025',
      bio: 'Michael founded Foster Capital Management and has over 20 years of experience in investment management and financial planning. His financial acumen has helped the Association grow its endowment and implement sound fiscal policies.',
      achievements: [
        'Chartered Financial Analyst (CFA)',
        'Managed $500M+ in assets',
        'Financial literacy advocate'
      ],
      committees: ['Finance Committee (Chair)', 'Investment Committee (Chair)'],
      email: 'm.foster@university.edu',
      linkedin: 'https://linkedin.com/in/michaelfoster'
    },
    {
      id: 5,
      name: 'Dr. Patricia Williams',
      title: 'Director',
      class: '1995',
      profession: 'Healthcare Innovation Leader',
      company: 'MedTech Solutions',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      term: '2024-2027',
      bio: 'Dr. Williams is a pioneer in healthcare technology, leading digital transformation initiatives that have improved patient outcomes across multiple health systems. She brings fresh perspectives on innovation and technology to the board.',
      achievements: [
        'Healthcare Innovation Award 2023',
        'Led digital transformation at 5 hospitals',
        'Published author on healthcare technology'
      ],
      committees: ['Technology Committee (Chair)', 'Program Committee'],
      email: 'p.williams@university.edu',
      linkedin: 'https://linkedin.com/in/drpatriciawilliams'
    },
    {
      id: 6,
      name: 'Marcus Johnson',
      title: 'Director',
      class: '2010',
      profession: 'Tech Entrepreneur',
      company: 'Johnson Innovations',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      term: '2024-2027',
      bio: 'Marcus is a serial entrepreneur who has founded three successful tech startups. His expertise in digital engagement and young alumni outreach has been instrumental in modernizing our communication strategies and expanding our reach.',
      achievements: [
        'Founded 3 successful startups',
        'Forbes 30 Under 30 recipient',
        'Angel investor in 20+ companies'
      ],
      committees: ['Young Alumni Committee (Chair)', 'Digital Engagement Committee'],
      email: 'm.johnson@university.edu',
      linkedin: 'https://linkedin.com/in/marcusjohnson'
    },
    {
      id: 7,
      name: 'Dr. Lisa Chen',
      title: 'Director',
      class: '2008',
      profession: 'Education Policy Expert',
      company: 'National Education Foundation',
      image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      term: '2024-2027',
      bio: 'Dr. Chen is a nationally recognized expert in education policy and program development. Her work has influenced educational initiatives across the country, and she brings valuable insights on partnerships and program development to our board.',
      achievements: [
        'National Education Policy Award',
        'Advisor to Department of Education',
        'Author of education reform legislation'
      ],
      committees: ['Education Partnership Committee (Chair)', 'Program Committee'],
      email: 'l.chen@university.edu',
      linkedin: 'https://linkedin.com/in/drlisachen'
    },
    {
      id: 8,
      name: 'Robert Kim',
      title: 'Director',
      class: '1992',
      profession: 'Nonprofit Executive',
      company: 'Community Development Corp',
      image: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      term: '2023-2026',
      bio: 'Robert has dedicated his career to community development and social impact. As Executive Director of Community Development Corp, he has led initiatives that have transformed underserved communities and created lasting positive change.',
      achievements: [
        'Community Leadership Award',
        'Led $25M community development project',
        'Board member of 5 nonprofit organizations'
      ],
      committees: ['Community Outreach Committee (Chair)', 'Volunteer Committee'],
      email: 'r.kim@university.edu',
      linkedin: 'https://linkedin.com/in/robertkim'
    },
    {
      id: 9,
      name: 'Amanda Davis',
      title: 'Director',
      class: '2001',
      profession: 'Marketing Executive',
      company: 'Global Marketing Solutions',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      term: '2023-2026',
      bio: 'Amanda is a seasoned marketing executive with expertise in brand strategy and digital marketing. Her creative approach to alumni engagement has helped increase participation in Association events and programs by over 40%.',
      achievements: [
        'Marketing Executive of the Year',
        'Led rebranding for Fortune 500 company',
        'Increased alumni engagement by 40%'
      ],
      committees: ['Marketing Committee (Chair)', 'Events Committee'],
      email: 'a.davis@university.edu',
      linkedin: 'https://linkedin.com/in/amandadavis'
    }
  ];

  const toggleBio = (id: number) => {
    setExpandedBio(expandedBio === id ? null : id);
  };

  const officers = boardMembers.filter(member => 
    ['President', 'Vice President', 'Secretary', 'Treasurer'].includes(member.title)
  );

  const directors = boardMembers.filter(member => member.title === 'Director');

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            役員紹介
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            同窓会の戦略的方向性を導き、コミュニティへの卓越した貢献を支えるリーダーたちをご紹介します。
          </p>
        </div>

        {/* Board Overview */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">9</h3>
              <p className="text-gray-600 font-medium">役員</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">3</h3>
              <p className="text-gray-600 font-medium">任期（年）</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600 font-medium">累計奉仕年数</p>
            </div>
          </div>
        </div>

        {/* Officers Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Executive Officers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {officers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{member.title}</p>
                    <p className="text-gray-600 text-sm">Class of {member.class}</p>
                  </div>
                  
                  <div className="text-center mb-4">
                    <p className="text-gray-700 font-medium text-sm">{member.profession}</p>
                    <p className="text-gray-600 text-sm">{member.company}</p>
                  </div>

                  <div className="flex justify-center space-x-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Directors Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Board Directors</h2>
          <div className="space-y-8">
            {directors.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-8">
                  <div className="lg:col-span-1">
                    <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 font-semibold mb-1">Class of {member.class}</p>
                      <p className="text-gray-600 text-sm mb-3">Term: {member.term}</p>
                      <div className="flex justify-center space-x-3">
                        <a
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors duration-200"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-3">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.profession}</h4>
                      <p className="text-gray-600">{member.company}</p>
                    </div>

                    <div className="mb-6">
                      <p className="text-gray-700 leading-relaxed">
                        {expandedBio === member.id ? member.bio : `${member.bio.substring(0, 200)}...`}
                      </p>
                      <button
                        onClick={() => toggleBio(member.id)}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 mt-2"
                      >
                        {expandedBio === member.id ? (
                          <>
                            Show Less
                            <ChevronUp className="w-4 h-4 ml-1" />
                          </>
                        ) : (
                          <>
                            Read More
                            <ChevronDown className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Key Achievements</h5>
                        <ul className="space-y-1">
                          {member.achievements.map((achievement, index) => (
                            <li key={index} className="text-gray-600 text-sm flex items-start">
                              <Award className="w-3 h-3 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Committee Roles</h5>
                        <div className="space-y-1">
                          {member.committees.map((committee, index) => (
                            <span
                              key={index}
                              className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-2 mb-1"
                            >
                              {committee}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in Board Service?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We welcome passionate alumni who want to contribute to our association's leadership. 
            Board elections are held annually, and we encourage qualified candidates to apply.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-xl">
              Learn About Board Service
            </button>
            <a
              href="/contact"
              className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 transition-colors duration-200 border-2 border-blue-400"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardOfDirectors;