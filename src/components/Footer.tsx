export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 소개 */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              포트폴리오
            </h3>
            <p className="text-gray-300 leading-relaxed">
              개발자 포트폴리오 및 블로그 사이트입니다.<br />
              Next.js와 React Query를 활용한 현대적인 웹사이트입니다.
            </p>
          </div>

          {/* 링크 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              링크
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://velog.io"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  벨로그
                </a>
              </li>
              <li>
                <a
                  href="mailto:your-email@example.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                  이메일
                </a>
              </li>
            </ul>
          </div>

          {/* 기술 스택 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              기술 스택
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                Next.js
              </span>
              <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-sm rounded-full border border-pink-500/30">
                React Query
              </span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 text-sm rounded-full border border-green-500/30">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <p className="text-center text-gray-400">
            © 2024 포트폴리오. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

