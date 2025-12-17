import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function ContactMe() {
  return (
    <div className="min-h-screen pt-8 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">
          Get in <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">Touch</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-blue-400/30 p-8 hover:bg-white/10 transition-colors">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300">Email</h3>
                <p className="text-gray-400">barathsiv2008@gmail.com</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">Send me a message and I'll respond as soon as possible.</p>
          </div>

          <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-blue-400/30 p-8 hover:bg-white/10 transition-colors">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">Call or text me to discuss your project details.</p>
          </div>

          <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-blue-400/30 p-8 hover:bg-white/10 transition-colors">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300">Location</h3>
                <p className="text-gray-400">City, Country</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">Available for remote projects worldwide.</p>
          </div>

          <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-blue-400/30 p-8 hover:bg-white/10 transition-colors">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-blue-500/30 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-300">Business Hours</h3>
                <p className="text-gray-400">As per the Works</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">I respond to inquiries within 24 hours.</p>
          </div>
        </div>

        <div className="backdrop-blur-sm bg-white/5 rounded-xl border border-blue-400/30 p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-300 mb-8">Follow Me</h2>

          <div className="flex flex-wrap gap-4 mb-8">
           
            

            <a
              href="#"
              className="flex items-center space-x-2 px-6 py-3 bg-white/5 border border-blue-400/20 rounded-lg hover:bg-blue-500/30 hover:border-blue-400 transition-colors text-gray-300 hover:text-blue-300"
            >
              <Instagram className="barath.mp3" />
              <span>Instagram</span>
            </a>

            <a
              href="#"
              className="flex items-center space-x-2 px-6 py-3 bg-white/5 border border-blue-400/20 rounded-lg hover:bg-blue-500/30 hover:border-blue-400 transition-colors text-gray-300 hover:text-blue-300"
            >
              <Twitter className="w-5 h-5" />
              <span>Twitter</span>
            </a>
          </div>

          <div className="space-y-4 pt-8 border-t border-blue-400/30">
            <p className="text-gray-300 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Whether you have a specific project
              in mind or just want to discuss design ideas, feel free to reach out. I'm passionate about creating stunning
              visual experiences and collaborating with creative minds.
            </p>

            <p className="text-gray-300 leading-relaxed">
              You can contact me through any of the methods above. For faster responses, email or direct message is preferred,
              but I'm happy to have a phone call to discuss details about your project.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Looking forward to working with you on your next creative project!
          </p>
        </div>
      </div>
    </div>
  );
}
