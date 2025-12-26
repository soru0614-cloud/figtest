import React from 'react';
import { Mic, Zap, MessageCircle } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-black text-white relative">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">심사위원단을 놀라게 한<br /><span className="text-gold-gradient">혁신적인 AI 기술</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5">
            <Mic size={28} className="text-amber-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">실시간 음성 인식</h3>
            <p className="text-slate-400 text-sm">당신이 말하는 즉시 AI가 듣고 이해합니다.</p>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5">
            <Zap size={28} className="text-amber-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">즉각적인 피드백</h3>
            <p className="text-slate-400 text-sm">어색한 표현을 원어민이 쓰는 표현으로 고쳐줍니다.</p>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5">
            <MessageCircle size={28} className="text-amber-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">무제한 프리토킹</h3>
            <p className="text-slate-400 text-sm">원하는 주제로 밤새도록 대화하세요.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
