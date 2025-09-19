import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              포트폴리오
            </h1>
            <p className="text-lg text-gray-600">
              노션 API를 통해 관리되는 프로젝트들입니다.
            </p>
          </div>

          {/* 포트폴리오 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 임시 카드 - 추후 노션 API 연동 시 교체 */}
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
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full font-medium">
                    Tailwind
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

            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 bg-gradient-to-br from-green-500 via-teal-600 to-blue-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                    풀스택
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    프로젝트 2
                  </h3>
                  <p className="text-white/90 text-sm">
                    Next.js & Tailwind
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  프로젝트 설명이 여기에 표시됩니다. 성능과 사용성을 
                  모두 고려한 풀스택 애플리케이션입니다.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full font-medium">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full font-medium">
                    Tailwind
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                    Node.js
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
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

            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 bg-gradient-to-br from-red-500 via-pink-600 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                    모바일
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    프로젝트 3
                  </h3>
                  <p className="text-white/90 text-sm">
                    Node.js & MongoDB
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  프로젝트 설명이 여기에 표시됩니다. 모바일 우선으로 
                  설계된 반응형 웹 애플리케이션입니다.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full font-medium">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                    MongoDB
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
                    Express
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
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
          </div>

          {/* 로딩 상태 메시지 */}
          <div className="text-center mt-12">
            <p className="text-gray-500">
              노션 API 연동을 통해 실제 프로젝트 데이터를 불러올 예정입니다.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

