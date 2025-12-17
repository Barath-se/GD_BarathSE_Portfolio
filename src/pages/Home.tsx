import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Creative Design
          <span className="block bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 bg-clip-text text-transparent">
            Portfolio
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 mb-8 drop-shadow-md max-w-xl mx-auto">
          Showcase your graphic design expertise with stunning visuals and creative works
        </p>

        <button
          onClick={() => navigate('/about')}
          className="group relative inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span>Get Started</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-300">
          <div className="backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-blue-400/20 hover:border-blue-400/50 transition-colors">
            <div className="text-3xl mb-2">🎨</div>
            <h3 className="font-semibold text-blue-300 mb-2">Design</h3>
            <p className="text-sm">Professional graphic design services</p>
          </div>

          <div className="backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-blue-400/20 hover:border-blue-400/50 transition-colors">
            <div className="text-3xl mb-2">✨</div>
            <h3 className="font-semibold text-blue-300 mb-2">Creative</h3>
            <p className="text-sm">Innovative and unique visual concepts</p>
          </div>

          <div className="backdrop-blur-sm bg-white/5 rounded-lg p-6 border border-blue-400/20 hover:border-blue-400/50 transition-colors">
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="font-semibold text-blue-300 mb-2">Expert</h3>
            <p className="text-sm">Years of experience in graphics</p>
          </div>
        </div>
      </div>
    </div>
  );
}
