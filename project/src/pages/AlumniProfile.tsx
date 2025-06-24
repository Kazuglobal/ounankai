import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Award, Briefcase, GraduationCap, Mail, Linkedin, ExternalLink } from 'lucide-react';

const AlumniProfile: React.FC = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  const alumniData: { [key: string]: any } = {
    '1': {
      id: 1,
      name: 'Sarah Johnson',
      year: '2018',
      degree: 'Bachelor of Science in Computer Science',
      profession: 'Tech Entrepreneur & CEO',
      company: 'InnovateTech Solutions',
      location: 'San Francisco, CA',
      industry: 'Technology',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      coverImage: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop',
      achievement: 'Founded successful AI startup valued at $50M',
      bio: 'Sarah Johnson is a visionary entrepreneur who has made significant contributions to the field of artificial intelligence and healthcare technology. After graduating with honors from our Computer Science program, she quickly established herself as a leader in Silicon Valley\'s tech ecosystem. Her company, InnovateTech Solutions, focuses on developing AI-powered diagnostic tools that have revolutionized patient care in hospitals across the country.',
      careerJourney: [
        {
          year: '2018-2019',
          role: 'Software Engineer',
          company: 'Google',
          description: 'Started career at Google working on machine learning algorithms for search optimization.'
        },
        {
          year: '2019-2021',
          role: 'Senior ML Engineer',
          company: 'Apple',
          description: 'Led development of privacy-preserving machine learning features for iOS applications.'
        },
        {
          year: '2021-Present',
          role: 'Founder & CEO',
          company: 'InnovateTech Solutions',
          description: 'Founded company focused on AI-powered healthcare diagnostics, raised $50M in Series A funding.'
        }
      ],
      achievements: [
        'Forbes 30 Under 30 (2022)',
        'TechCrunch Disruptor Award (2023)',
        'MIT Technology Review Innovator (2024)',
        'Featured speaker at AI Healthcare Summit',
        'Published 12 research papers on AI in healthcare',
        'Mentor to 25+ startup founders'
      ],
      education: [
        {
          degree: 'Bachelor of Science in Computer Science',
          institution: 'University Name',
          year: '2018',
          honors: 'Magna Cum Laude, Phi Beta Kappa'
        }
      ],
      personalInfo: {
        hometown: 'Portland, OR',
        interests: ['Rock Climbing', 'Photography', 'Sustainable Technology', 'Mentoring'],
        languages: ['English', 'Spanish', 'Mandarin'],
        volunteerWork: 'Board member of TechCorps, teaching coding to underserved youth'
      },
      quote: 'The university didn\'t just give me a degree – it gave me the foundation to think critically, dream big, and the network to make those dreams reality.',
      contact: {
        email: 'sarah.johnson@innovatetech.com',
        linkedin: 'https://linkedin.com/in/sarahjohnsontech',
        website: 'https://innovatetech.com'
      }
    },
    '2': {
      id: 2,
      name: 'Michael Chen',
      year: '2015',
      degree: 'Doctor of Medicine',
      profession: 'Medical Researcher & Oncologist',
      company: 'Harvard Medical School',
      location: 'Boston, MA',
      industry: 'Healthcare',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      coverImage: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop',
      achievement: 'Leading breakthrough cancer research initiatives',
      bio: 'Dr. Michael Chen is a renowned oncologist and researcher whose groundbreaking work in immunotherapy has transformed cancer treatment protocols worldwide. His research has led to three FDA-approved treatments that have extended the lives of thousands of patients. Currently serving as Associate Professor at Harvard Medical School, he continues to push the boundaries of cancer research while maintaining an active clinical practice.',
      careerJourney: [
        {
          year: '2015-2018',
          role: 'Medical Resident',
          company: 'Johns Hopkins Hospital',
          description: 'Completed internal medicine residency with focus on oncology and hematology.'
        },
        {
          year: '2018-2021',
          role: 'Oncology Fellow',
          company: 'Memorial Sloan Kettering',
          description: 'Specialized fellowship in medical oncology with research in immunotherapy.'
        },
        {
          year: '2021-Present',
          role: 'Associate Professor & Researcher',
          company: 'Harvard Medical School',
          description: 'Leading cancer immunotherapy research lab while treating patients at Dana-Farber.'
        }
      ],
      achievements: [
        'Nature Publication Lead Author (3 papers)',
        'NIH Research Grant Recipient ($2.3M)',
        'American Cancer Society Fellow',
        'ASCO Young Investigator Award',
        'Developed 3 FDA-approved cancer treatments',
        'Over 50 peer-reviewed publications'
      ],
      education: [
        {
          degree: 'Doctor of Medicine',
          institution: 'University Name School of Medicine',
          year: '2015',
          honors: 'Alpha Omega Alpha Honor Society'
        },
        {
          degree: 'Bachelor of Science in Biochemistry',
          institution: 'University Name',
          year: '2011',
          honors: 'Summa Cum Laude'
        }
      ],
      personalInfo: {
        hometown: 'Seattle, WA',
        interests: ['Classical Music', 'Marathon Running', 'Medical Education', 'Global Health'],
        languages: ['English', 'Mandarin', 'French'],
        volunteerWork: 'Provides free cancer screenings in underserved communities'
      },
      quote: 'Every patient I treat reminds me why I chose medicine. The university instilled in me not just the scientific rigor, but the compassion that drives my research.',
      contact: {
        email: 'm.chen@harvard.edu',
        linkedin: 'https://linkedin.com/in/drmichaelchen'
      }
    },
    '3': {
      id: 3,
      name: 'Emily Rodriguez',
      year: '2012',
      degree: 'Juris Doctor',
      profession: 'Environmental Lawyer & Policy Advocate',
      company: 'Green Justice Coalition',
      location: 'Washington, DC',
      industry: 'Legal',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      coverImage: 'https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop',
      achievement: 'Championing climate policy reform at federal level',
      bio: 'Emily Rodriguez is a passionate environmental lawyer who has dedicated her career to fighting climate change through legal advocacy and policy reform. Her landmark Supreme Court case victory in 2023 established new precedents for corporate environmental accountability. As Executive Director of the Green Justice Coalition, she leads a team of attorneys working on climate litigation across the nation.',
      careerJourney: [
        {
          year: '2012-2015',
          role: 'Associate Attorney',
          company: 'Natural Resources Defense Council',
          description: 'Worked on clean air and water litigation, gaining experience in environmental law.'
        },
        {
          year: '2015-2019',
          role: 'Senior Environmental Attorney',
          company: 'Earthjustice',
          description: 'Led major climate litigation cases, including successful challenges to coal plant permits.'
        },
        {
          year: '2019-Present',
          role: 'Executive Director',
          company: 'Green Justice Coalition',
          description: 'Founded and leads coalition of environmental lawyers working on climate policy reform.'
        }
      ],
      achievements: [
        'Supreme Court Case Victory (2023)',
        'Environmental Law Institute Award',
        'White House Climate Policy Advisor',
        'Harvard Environmental Law Review Editor',
        'Argued 15+ federal court cases',
        'Led coalition of 50+ environmental organizations'
      ],
      education: [
        {
          degree: 'Juris Doctor',
          institution: 'University Name School of Law',
          year: '2012',
          honors: 'Order of the Coif, Environmental Law Review Editor-in-Chief'
        },
        {
          degree: 'Bachelor of Arts in Environmental Studies',
          institution: 'University Name',
          year: '2009',
          honors: 'Phi Beta Kappa'
        }
      ],
      personalInfo: {
        hometown: 'Denver, CO',
        interests: ['Hiking', 'Sustainable Living', 'Environmental Photography', 'Policy Writing'],
        languages: ['English', 'Spanish', 'Portuguese'],
        volunteerWork: 'Pro bono legal services for indigenous communities affected by climate change'
      },
      quote: 'The law school taught me that legal precedent can be a powerful force for environmental justice. Every case we win protects our planet for future generations.',
      contact: {
        email: 'e.rodriguez@greenjustice.org',
        linkedin: 'https://linkedin.com/in/emilyrodriguezlaw'
      }
    }
  };

  const alumni = alumniData[id || '1'];

  if (!alumni) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Alumni Not Found</h1>
          <p className="text-gray-600 mb-8">The requested alumni profile could not be found.</p>
          <Link
            to="/alumni-profiles"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Alumni Directory
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          to="/alumni-profiles"
          className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Alumni Directory
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 rounded-3xl mx-4 sm:mx-6 lg:mx-8 overflow-hidden">
          <img
            src={alumni.coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-end">
            <div className="lg:col-span-2">
              <div className="text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg font-medium">Class of {alumni.year}</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                  {alumni.name}
                </h1>
                <p className="text-2xl font-light mb-4">{alumni.profession}</p>
                <p className="text-xl text-blue-200">{alumni.company}</p>
                <div className="flex items-center mt-6">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-lg">{alumni.location}</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-64 h-80 object-cover rounded-3xl shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Quote */}
              <div className="bg-blue-50 rounded-3xl p-8">
                <blockquote className="text-2xl font-light text-gray-800 italic leading-relaxed">
                  "{alumni.quote}"
                </blockquote>
              </div>

              {/* Biography */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Biography</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{alumni.bio}</p>
              </div>

              {/* Career Journey */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Journey</h2>
                <div className="space-y-6">
                  {alumni.careerJourney.map((job: any, index: number) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
                        {index < alumni.careerJourney.length - 1 && (
                          <div className="w-px h-16 bg-gray-200 ml-2 mt-2"></div>
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="text-sm text-blue-600 font-semibold">{job.year}</div>
                        <h3 className="text-xl font-bold text-gray-900">{job.role}</h3>
                        <p className="text-gray-700 font-medium">{job.company}</p>
                        <p className="text-gray-600 mt-2">{job.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {alumni.achievements.map((achievement: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect</h3>
                <div className="space-y-4">
                  {alumni.contact.email && (
                    <a
                      href={`mailto:${alumni.contact.email}`}
                      className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Email</span>
                    </a>
                  )}
                  {alumni.contact.linkedin && (
                    <a
                      href={alumni.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {alumni.contact.website && (
                    <a
                      href={alumni.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Website</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
                <div className="space-y-4">
                  {alumni.education.map((edu: any, index: number) => (
                    <div key={index}>
                      <div className="flex items-start space-x-3">
                        <GraduationCap className="w-5 h-5 text-blue-600 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                          <p className="text-gray-600">{edu.institution}</p>
                          <p className="text-sm text-gray-500">{edu.year}</p>
                          {edu.honors && (
                            <p className="text-sm text-blue-600 font-medium">{edu.honors}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Info */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hometown</h4>
                    <p className="text-gray-600">{alumni.personalInfo.hometown}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      {alumni.personalInfo.interests.map((interest: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                    <p className="text-gray-600">{alumni.personalInfo.languages.join(', ')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Volunteer Work</h4>
                    <p className="text-gray-600">{alumni.personalInfo.volunteerWork}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Alumni */}
      <section className="py-20 bg-gray-50 rounded-3xl mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Alumni in {alumni.industry}
            </h2>
            <Link
              to="/alumni-profiles"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
            >
              View All Alumni
              <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlumniProfile;