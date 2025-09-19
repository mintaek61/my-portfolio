import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              블로그
            </h1>
            <p className="text-lg text-gray-600">
              벨로그와 연동된 최신 포스트들을 확인해보세요.
            </p>
          </div>

          {/* 블로그 포스트 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 임시 카드 - 추후 벨로그 API 연동 시 교체 */}
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
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full font-medium">
                    튜토리얼
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

            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 bg-gradient-to-br from-green-500 via-teal-600 to-blue-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                    업데이트
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Next.js 15 신기능
                  </h3>
                  <p className="text-white/90 text-sm">
                    2024.01.10 • 3분 읽기
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Next.js 15에서 추가된 새로운 기능들과 개선사항을 살펴보겠습니다. 
                  성능 향상과 개발자 경험 개선에 집중합니다.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full font-medium">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full font-medium">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                    업데이트
                  </span>
                </div>
                <a
                  href="#"
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white px-4 py-3 rounded-lg font-medium text-center hover:shadow-lg transition-all duration-300 hover:scale-105 block"
                >
                  포스트 읽기 →
                </a>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 bg-gradient-to-br from-orange-500 via-red-600 to-pink-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                    고급
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    TypeScript 타입 가드
                  </h3>
                  <p className="text-white/90 text-sm">
                    2024.01.05 • 7분 읽기
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  TypeScript의 타입 가드를 활용하여 더 안전한 코드를 작성하는 
                  방법을 알아보겠습니다. 실무 예제와 함께 설명합니다.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full font-medium">
                    타입 시스템
                  </span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full font-medium">
                    고급 기법
                  </span>
                </div>
                <a
                  href="#"
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-3 rounded-lg font-medium text-center hover:shadow-lg transition-all duration-300 hover:scale-105 block"
                >
                  포스트 읽기 →
                </a>
              </div>
            </div>
          </div>

          {/* 로딩 상태 메시지 */}
          <div className="text-center mt-12">
            <p className="text-gray-500">
              벨로그 API 연동을 통해 실제 블로그 포스트를 불러올 예정입니다.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

