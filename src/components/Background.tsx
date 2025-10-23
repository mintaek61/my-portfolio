export function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* 점 패턴 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #8b5cf6 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}></div>
      </div>
      
      {/* 물결선 그래픽 */}
      <div className="absolute top-20 left-10 w-40 h-40 opacity-30">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M10,50 Q30,20 50,50 T90,50" stroke="#8b5cf6" strokeWidth="2" fill="none" />
          <path d="M10,60 Q30,30 50,60 T90,60" stroke="#8b5cf6" strokeWidth="1" fill="none" />
        </svg>
      </div>
      
      {/* 추가 장식 요소들 */}
      <div className="absolute top-32 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-indigo-200 rounded-full opacity-50"></div>
      <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-pink-200 rounded-full opacity-60"></div>
    </div>
  );
}
