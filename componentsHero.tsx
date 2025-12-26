import React from 'react';
import { ChevronRight, Star, Trophy } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-16 pb-20 lg:pt-28 lg:pb-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[-10%] left-1/4 w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute top-[10%] right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center z-10 relative">
        <div className="inline-flex items-center justify-center mb-8 animate-fade-in-up">
            <div className="relative">
                <div className="absolute inset-0 bg-amber-500 blur-xl opacity-20"></div>
                <div className="border border-amber-500/30 bg-slate-900/50 backdrop-blur px-6 py-2 rounded-full flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-200 text-xs font-bold tracking-widest uppercase">2024 Best Choice Awards</span>
                </div>
            </div>
        </div>
        <h1 className="text-5xl sm:text-7xl font-serif font-bold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
          올해의 <span className="italic text-gold-gradient">영어 대상</span>은<br/>당신입니다
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed font-light">
          더 이상 영어 때문에 주눅 들지 마세요.<br/>
          <strong className="text-amber-400">450만 명이 선택한 검증된 AI 튜터</strong>와 함께<br className="sm:hidden"/> 2024년 유종의 미를 거두세요.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto bg-gradient-to-r from-amber-300 via-amber-500 to-amber-600 text-black text-lg font-bold py-4 px-10 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 relative overflow-hidden group">
            <span className="relative z-10">트로피 도전하기</span>
            <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-xs text-slate-500 mt-2 sm:mt-0 font-medium">*30일 무료 체험권 포함</p>
        </div>
      </div>
    </section>
  );
};
