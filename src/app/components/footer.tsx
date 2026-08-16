import { Heart, Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 py-8 bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Code2 className="w-5 h-5 text-purple-400" />
          <span className="font-semibold text-white">Nur Izzati Binti Mohd Talib</span>
        </div>
        
        <p className="text-sm mb-2 flex items-center justify-center gap-2">
          Built with <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> and React
        </p>
        
        <p className="text-xs text-gray-400">
          © 2026 Nur Izzati Binti Mohd Talib. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
