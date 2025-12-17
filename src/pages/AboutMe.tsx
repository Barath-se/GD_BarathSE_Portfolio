export default function AboutMe() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-blue-400/30 p-8 sm:p-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            About <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h1>

          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Hello! I'm a passionate graphic designer with a dedication to creating visually stunning and impactful designs.
              My journey in the world of creative design began with a deep love for art and visual communication.
            </p>

            <p className="text-lg">
              I specialize in digital design, image manipulation, and illustration using industry-leading tools like Adobe Photoshop
              and Adobe Illustrator. My expertise allows me to transform ideas into compelling visual narratives that captivate and
              engage audiences.
            </p>

            <p className="text-lg">
              With a strong foundation in both technical skills and creative thinking, I bring a unique perspective to every project.
              Whether it's retouching photographs, creating intricate digital art, designing posters, or developing gradient-based
              compositions, I approach each task with meticulous attention to detail and a commitment to excellence.
            </p>

            <p className="text-lg">
              My portfolio showcases a diverse range of works across various categories, from photo retouching and manipulation to
              custom illustrations and gradient designs. I'm constantly evolving my skills and exploring new creative possibilities
              to stay at the forefront of modern design trends.
            </p>

            <p className="text-lg">
              I believe that great design is more than just aesthetics—it's about solving problems, communicating effectively, and
              creating experiences that resonate with people. I'm excited to collaborate with you on your next creative project.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">Passion</h3>
              <p className="text-gray-400">Creating visually compelling designs that tell stories</p>
            </div>

            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">Expertise</h3>
              <p className="text-gray-400">Mastery of Photoshop and Illustrator with intermediate to advanced skills</p>
            </div>

            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">Dedication</h3>
              <p className="text-gray-400">Committed to delivering high-quality, professional results</p>
            </div>

            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-semibold text-blue-300 mb-2">Innovation</h3>
              <p className="text-gray-400">Always exploring new techniques and creative possibilities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
