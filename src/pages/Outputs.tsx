import { useState } from 'react';
import { Images, Palette } from 'lucide-react';

export default function Outputs() {
  const [activeTab, setActiveTab] = useState<'photoshop' | 'illustrator'>('photoshop');
  const [activeCategory, setActiveCategory] = useState('retouches');

  const photoshopCategories = [
    { id: 'retouches', name: 'Retouches', count: 5 },
    { id: 'posters', name: 'Posters', count: 6 },
    { id: 'masks', name: 'Masks', count: 5 },
    { id: 'manipulations', name: 'Manipulations', count: 6 },
    { id: 'gradients', name: 'Gradient Works', count: 14 },
    { id: 'digital-art', name: 'Digital Art', count: 5 }
  ];

  return (
    <div className="min-h-screen pt-8 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
          My <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">Outputs</span>
        </h1>

        <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-blue-400/30 overflow-hidden">
          <div className="flex border-b border-blue-400/30">
            <button
              onClick={() => {
                setActiveTab('photoshop');
                setActiveCategory('retouches');
              }}
              className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 font-semibold transition-all ${
                activeTab === 'photoshop'
                  ? 'bg-blue-500/30 text-blue-300 border-b-2 border-blue-400'
                  : 'text-gray-300 hover:text-blue-300'
              }`}
            >
              <Palette className="w-5 h-5" />
              <span className="hidden sm:inline">Photoshop Works</span>
              <span className="sm:hidden">Photoshop</span>
            </button>

            <button
              onClick={() => setActiveTab('illustrator')}
              className={`flex-1 flex items-center justify-center space-x-2 px-6 py-4 font-semibold transition-all ${
                activeTab === 'illustrator'
                  ? 'bg-blue-500/30 text-blue-300 border-b-2 border-blue-400'
                  : 'text-gray-300 hover:text-blue-300'
              }`}
            >
              <Images className="w-5 h-5" />
              <span className="hidden sm:inline">Illustrator Works</span>
              <span className="sm:hidden">Illustrator</span>
            </button>
          </div>

          <div className="p-6 sm:p-12">
            {activeTab === 'photoshop' && (
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold text-blue-300 mb-8">Photoshop Works</h2>

                <div className="mb-8 flex flex-wrap gap-2 sm:gap-3">
                  {photoshopCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
                        activeCategory === category.id
                          ? 'bg-blue-500/40 text-blue-300 border border-blue-400'
                          : 'bg-white/5 text-gray-300 border border-blue-400/20 hover:bg-white/10'
                      }`}
                    >
                      {category.name}
                      <span className="ml-2 text-xs opacity-70">({category.count})</span>
                    </button>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="text-gray-400 text-center py-12">
                    Gallery for "{photoshopCategories.find(c => c.id === activeCategory)?.name}" will be displayed here.
                    You can add your images later.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-blue-500/10 border border-blue-400/30 rounded-lg">
                  <p className="text-blue-200 text-sm">
                    This section showcases your Photoshop work organized by category. Each category displays your portfolio
                    pieces for different types of work including retouches, poster designs, masking techniques, image manipulations,
                    gradient works, and digital art.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'illustrator' && (
              <div className="animate-fadeIn">
                <h2 className="text-3xl font-bold text-blue-300 mb-8">Illustrator Works</h2>

                <div className="mt-8">
                  <p className="text-gray-400 text-center py-12">
                    Your Illustrator gallery will be displayed here. You can add your illustration images later.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-blue-500/10 border border-blue-400/30 rounded-lg">
                  <p className="text-blue-200 text-sm">
                    This section is dedicated to showcasing all your Illustrator work. Upload your vector graphics, custom
                    illustrations, logo designs, and other Illustrator projects here to create an impressive portfolio gallery.
                  </p>
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
