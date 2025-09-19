import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12 pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              소개
            </h1>
            <p className="text-lg text-gray-600">
              개발자로서의 여정과 기술 스택을 소개합니다.
            </p>
          </div>

          {/* 프로필 섹션 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                개발자
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  안녕하세요! 👋
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  열정적인 개발자로서 새로운 기술을 학습하고 프로젝트를 통해 
                  성장하고 있습니다. 사용자 경험을 중시하며, 효율적이고 
                  유지보수가 쉬운 코드를 작성하는 것을 목표로 합니다.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a
                    href="https://github.com"
                    className="text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://velog.io"
                    className="text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    벨로그
                  </a>
                  <a
                    href="mailto:your-email@example.com"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    이메일
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 기술 스택 섹션 */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              기술 스택
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-sm">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">
                    React Query
                  </span>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Backend & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Node.js
                  </span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    MongoDB
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    Supabase
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                    Git
                  </span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                    Vercel
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 경력 섹션 */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              경력
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  프론트엔드 개발자
                </h3>
                <p className="text-gray-600">회사명 • 2023 - 현재</p>
                <p className="text-gray-700 mt-2">
                  React와 Next.js를 활용한 웹 애플리케이션 개발 및 유지보수를 담당하고 있습니다.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  풀스택 개발자
                </h3>
                <p className="text-gray-600">회사명 • 2022 - 2023</p>
                <p className="text-gray-700 mt-2">
                  프론트엔드와 백엔드 개발을 모두 담당하며, 다양한 프로젝트를 성공적으로 완료했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

