import React from 'react';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

const WeekLink = ({ week }) => (
  <Link href="/week_38" className="group">
    <div className="bg-[#434a78] px-8 py-6 rounded-xl shadow-lg shadow-slate-700/30 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#5a629a] hover:shadow-xl hover:shadow-slate-700/50 flex items-center space-x-4">
      <Calendar className="text-slate-300 group-hover:text-slate-100 transition-colors duration-300" size={24} />
      <div>
        <span className="text-slate-300 group-hover:text-slate-100 font-semibold text-lg transition-colors duration-300">Week {week}</span>
        <div className="mt-2 w-0 group-hover:w-full h-0.5 bg-slate-300 transition-all duration-300 ease-in-out"></div>
      </div>
    </div>
  </Link>
);

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-[#2d2d3f] to-[#3d3d5f] flex flex-wrap justify-center gap-10 p-10 items-start">
      <WeekLink week={38} />
      <WeekLink week={39} />
      <WeekLink week={40} />
      <WeekLink week={41} />
      <WeekLink week={42} />
      <WeekLink week={43} />
      <WeekLink week={44} />
      <WeekLink week={45} />
      <WeekLink week={46} />
      <WeekLink week={47} />
      <WeekLink week={48} />
      <WeekLink week={49} />
      <WeekLink week={50} />
      <WeekLink week={51} />
      <WeekLink week={52} />
    </div>
  );
}