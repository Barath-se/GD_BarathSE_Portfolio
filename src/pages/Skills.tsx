import { useState } from 'react';
import { Palette, Pen } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'photoshop' | 'illustrator'>('photoshop');

  return (
    <div className="min-h-screen pt-8 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
          My <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">Skills</span>
        </h1>

        <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-blue-400/30 overflow-hidden">
          <div className="flex border-b border-blue-400/30">
            <button
              onClick={() => setActiveTab('photoshop')}
              className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 font-semibold transition-all ${
                activeTab === 'photoshop'
                  ? 'bg-blue-500/30 text-blue-300 border-b-2 border-blue-400'
                  : 'text-gray-300 hover:text-blue-300'
              }`}
            >
              <Palette className="w-5 h-5" />
              <span>Photoshop</span>
            </button>

            <button
              onClick={() => setActiveTab('illustrator')}
              className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 font-semibold transition-all ${
                activeTab === 'illustrator'
                  ? 'bg-blue-500/30 text-blue-300 border-b-2 border-blue-400'
                  : 'text-gray-300 hover:text-blue-300'
              }`}
            >
              <Pen className="w-5 h-5" />
              <span>Illustrator</span>
            </button>
          </div>

          <div className="p-8 sm:p-12">
            {activeTab === 'photoshop' && (
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold text-blue-300 mb-4">Photoshop Skills</h2>

                <div className="space-y-6 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    I possess intermediate to advanced proficiency in Adobe Photoshop, with expertise in a wide range of
                    editing techniques and creative applications.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-blue-400/20 rounded-lg p-6 hover:bg-white/10 transition-colors">
                      <h3 className="text-blue-300 font-semibold mb-2">Photo Retouching</h3>
                      <p className="text-sm">Professional color correction, skin retouching, and image enhancement</p>
                    </div>

                    <div className="bg-white/5 border border-blue-400/20 rounded-lg p-6 hover:bg-white/10 transition-colors">
                      <h3 className="text-blue-300 font-semibold mb-2">Poster Design</h3>
                      <p className="text-sm">Creative poster layouts with typography and visual hierarchy</p>
                    </div>

                    <div className="bg-white/5 border border-blue-400/20 rounded-lg p-6 hover:bg-white/10 transition-colors">
                      <h3 className="text-blue-300 font-semibold mb-2">Masking Techniques</h3>
                      <p className="text-sm">Advanced layer masking and selection tools for precise editing</p>
                    </div>

                    <div className="bg-white/5 border border-blue-400/20 rounded-lg p-6 hover:bg-white/10 transition-colors">
                      <h3 className="text-blue-300 font-semibold mb-2">Image Manipulation</h3>
                      <p className="text-sm">Creative composition and surreal image blending</p>
                    </div>

                    <div className="bg-white/5 border border-blue-400/20 rounded-lg p-6 hover:bg-white/10 transition-colors">
                      <h3 className="text-blue-300 font-semibold mb-2">Gradient Works</h3>
                      <p className="text-sm">Complex gradient creations and color transitions</p>
                    </div>

                    <div className="bg-white/5 border border-blue-400/20 rounded-lg p-6 hover:bg-white/10 transition-colors">
                      <h3 className="text-blue-300 font-semibold mb-2">Digital Art</h3>
                      <p className="text-sm">Original digital illustrations and artwork creation</p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-500/10 border border-blue-400/30 rounded-lg">
                    <p className="text-blue-200">
                      My Photoshop expertise spans across multiple domains: retouching and color correction for photography,
                      poster design with creative layouts, advanced masking techniques for precise editing, image manipulation
                      for surreal compositions, gradient works for visual impact, and digital art for original creations.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'illustrator' && (
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold text-blue-300 mb-4">Illustrator Skills</h2>

                <div className="space-y-6 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    I have developed strong capabilities in Adobe Illustrator, specializing in vector graphics, illustration,
                    and graphic design with scalable, professional-quality output.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-blue-400/20 rounded-lg p-6 hover:bg-white/10 transition-colors">
                      <h3 className="text-blue-300 font-semibold mb-2">Vector Graphics</h3>
                      <p className="text-sm">Creating scalable graphics using Bezier curves and shapes</p>
                    </div>

                    <div className="bg-white/5 border border-blue-400/20 rounded-lg p-6 hover:bg-white/10 transition-colors">
                      <h3 className="text-blue-300 font-semibold mb-2">Illustrations</h3>
                      <p className="text-sm">Original custom illustrations and character designs</p>
                    </div>

                    <div className="bg-white/5 border border-blue-400/20 rounded-lg p-6 hover:bg-white/10 transition-colors">
                      <h3 className="text-blue-300 font-semibold mb-2">Logo Design</h3>
                      <p className="text-sm">Professional logo creation and brand identity work</p>
                    </div>

                    <div className="bg-white/5 border border-blue-400/20 rounded-lg p-6 hover:bg-white/10 transition-colors">
                      <h3 className="text-blue-300 font-semibold mb-2">Typography</h3>
                      <p className="text-sm">Custom text effects and typography design</p>
                    </div>

                    <div className="bg-white/5 border border-blue-400/20 rounded-lg p-6 hover:bg-white/10 transition-colors">
                      <h3 className="text-blue-300 font-semibold mb-2">Color Theory</h3>
                      <p className="text-sm">Expert use of color palettes and color harmonies</p>
                    </div>

                    <div className="bg-white/5 border border-blue-400/20 rounded-lg p-6 hover:bg-white/10 transition-colors">
                      <h3 className="text-blue-300 font-semibold mb-2">Layout Design</h3>
                      <p className="text-sm">Professional composition and visual hierarchy</p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-blue-500/10 border border-blue-400/30 rounded-lg">
                    <p className="text-blue-200">
                      My Illustrator expertise includes creating vector graphics for scalability, designing custom illustrations,
                      developing professional logos and branding, working with typography, applying color theory principles, and
                      crafting well-composed layouts for various design applications.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in;
        }
      `}</style>
    </div>
  );
}
