'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Background } from '@/components/Background';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 배경 컴포넌트 */}
      <Background />
      
      {/* 헤더 컴포넌트 */}
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} />

      {/* 메인 콘텐츠 */}
      <main className="pt-16">
        {/* 홈 섹션 */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* 왼쪽 텍스트 섹션 */}
                <div className="p-12 lg:p-16">
                  <div className="space-y-8">
                    <div>
                      <p className="text-gray-600 text-sm font-medium mb-2">안녕하세요, 프론트엔드 개발자 오민택입니다.</p>
                      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        I Am <span className="text-purple-900">Flordir Forhed</span>
                      </h1>
                      <p className="text-2xl text-gray-700 font-medium">React Developer</p>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-md">
                      사용자 중심의 직관적인 인터페이스를 설계하고 구현합니다.<br />
                      반응형 디자인과 접근성을 고려한 웹 애플리케이션을 개발합니다.<br />
                      최신 기술 트렌드를 활용하여 사용자 경험을 지속적으로 개선합니다.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => scrollToSection('contact')}
                        className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
                      >
                        Hire Me
                      </button>
                      <button
                        onClick={() => scrollToSection('about')}
                        className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* 오른쪽 이미지 섹션 */}
                <div className="relative p-8 lg:p-16 bg-gray-50">
                  <div className="relative">
                    {/* 프로필 이미지 컨테이너 */}
                    <div className="relative">
                      {/* 흰색 박스 (프로필 사진) */}
                      <div className="bg-gray-900 rounded-md shadow-xl p-8 w-100 h-100 relative z-10">
                        <div className="w-100 h-100 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-md flex items-center justify-center overflow-hidden relative">
                          <Image 
                            src="/images/portfolio-profile-image.png" 
                            alt="Profile" 
                            width={256}
                            height={256}
                            className="w-full h-full object-cover rounded-md"
                            onError={() => {
                              // 이미지 로드 실패 시 플레이스홀더 표시
                              const imgElement = document.querySelector('.profile-image') as HTMLElement;
                              const placeholderElement = document.querySelector('.profile-placeholder') as HTMLElement;
                              if (imgElement && placeholderElement) {
                                imgElement.style.display = 'none';
                                placeholderElement.style.display = 'flex';
                              }
                            }}
                          />  
                        </div>
                      </div>
                      
                      {/* 검은색 박스 (오른쪽 상단으로 더 많이 나옴) */}
                      <div className="absolute -top-6 -right-6 w-96 h-96 bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl transform rotate-3 -z-10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About 섹션 */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="p-12 lg:p-16">
              <div className="text-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  <span className="text-purple-900">About Me</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  개발자로서의 여정과 프로젝트들을 공유하는 공간입니다.<br />
                  노션 API를 통해 포트폴리오를 관리하고, 벨로그와 연동하여<br />
                  블로그 포스트를 미리보기 카드 형태로 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services 섹션 */}
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="p-12 lg:p-16">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  <span className="text-purple-900">Services</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Next.js와 React Query를 활용한 현대적인 웹사이트
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group text-center p-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-white">📁</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    포트폴리오
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    노션 API를 통해 프로젝트를 관리하고<br />
                    동적으로 표시합니다.
                  </p>
                </div>
                
                <div className="group text-center p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-white">📝</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    블로그
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    벨로그 API와 연동하여 최신 포스트를<br />
                    미리보기 카드로 제공합니다.
                  </p>
                </div>
                
                <div className="group text-center p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl text-white">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    성능 최적화
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    React Query를 활용한 효율적인<br />
                    데이터 페칭과 캐싱을 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio 섹션 */}
        <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="p-12 lg:p-16">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  <span className="text-purple-900">Portfolio</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  노션 API를 통해 관리되는 프로젝트들입니다.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* 프로젝트 카드들 */}
                <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                        웹앱
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        프로젝트 1
                      </h3>
                      <p className="text-white/90 text-sm">
                        React & TypeScript
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      프로젝트 설명이 여기에 표시됩니다. 사용자 경험을 중시한 
                      현대적인 웹 애플리케이션입니다.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                        React
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                        TypeScript
                      </span>
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        데모 보기
                      </a>
                      <a
                        href="#"
                        className="flex-1 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium text-center hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* 추가 프로젝트 카드들... */}
              </div>
            </div>
          </div>
        </section>

        {/* Blog 섹션 */}
        <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="p-12 lg:p-16">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  <span className="text-purple-900">Blog</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  벨로그와 연동된 최신 포스트들을 확인해보세요.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* 블로그 포스트 카드들 */}
                <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                        튜토리얼
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        React Query 가이드
                      </h3>
                      <p className="text-white/90 text-sm">
                        2024.01.15 • 5분 읽기
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      React Query를 활용한 효율적인 데이터 페칭과 캐싱에 대해 
                      알아보겠습니다. 실무에서 바로 적용할 수 있는 팁들을 포함합니다.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                        React
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                        React Query
                      </span>
                    </div>
                    <a
                      href="#"
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3 rounded-lg font-medium text-center hover:shadow-lg transition-all duration-300 hover:scale-105 block"
                    >
                      포스트 읽기 →
                    </a>
                  </div>
                </div>
                
                {/* 추가 블로그 포스트 카드들... */}
              </div>
            </div>
          </div>
        </section>

        {/* Contact 섹션 */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="p-12 lg:p-16">
              <div className="text-center space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  <span className="text-purple-900">Contact Me</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  프로젝트나 협업에 대해 이야기하고 싶으시다면 언제든 연락주세요!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:your-email@example.com"
                    className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
                  >
                    이메일 보내기
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    GitHub 방문
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
