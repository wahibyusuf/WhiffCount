import React, { useState, useEffect, useCallback } from 'react';
import { ChartDataPoint } from '../types';
import { NICOTINE_PER_PUFF_MG, INITIAL_CHART_DATA } from '../constants';
import UsageChart from './UsageChart';
import { TargetIcon, ChartIcon, UserIcon, PlusIcon } from './Icons';

const PhoneMockup: React.FC = () => {
    const [puffs, setPuffs] = useState(25);
    const [chartData, setChartData] = useState<ChartDataPoint[]>(INITIAL_CHART_DATA);

    const nicotineIntake = (puffs * NICOTINE_PER_PUFF_MG).toFixed(3);
    const dailyGoal = 50;
    const progress = Math.min((puffs / dailyGoal) * 100, 100);

    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    const handlePuffClick = useCallback(() => {
        setPuffs(prevPuffs => prevPuffs + 1);
        setChartData(prevData => {
            const now = new Date();
            const lastPoint = prevData[prevData.length - 1];
            // In a real app, this logic would be more robust.
            // For demo, we just increment the last point's puff count.
            const updatedLastPoint = { ...lastPoint, puffs: lastPoint.puffs + 1 };
            return [...prevData.slice(0, prevData.length - 1), updatedLastPoint];
        });
    }, []);

    return (
        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl">
            <div className="w-[140px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-gray-50 text-gray-800">
                <div className="flex flex-col h-full">
                    <main className="flex-grow flex flex-col items-center justify-around p-4">
                        <div className="flex flex-col items-center">
                             <h2 className="text-2xl font-bold mb-2">
                                <span className="text-primary">Whiff</span><span className="text-red-500">Count</span>
                            </h2>
                            <div className="relative w-48 h-48">
                                <svg className="w-full h-full" viewBox="0 0 200 200">
                                    <circle cx="100" cy="100" r={radius} fill="none" stroke="#e6e6e6" strokeWidth="15" />
                                    <circle
                                        cx="100"
                                        cy="100"
                                        r={radius}
                                        fill="none"
                                        stroke="url(#gradient)"
                                        strokeWidth="15"
                                        strokeLinecap="round"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={strokeDashoffset}
                                        transform="rotate(-90 100 100)"
                                        className="transition-all duration-500"
                                    />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#00A99D" />
                                            <stop offset="100%" stopColor="#4FD1C5" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-5xl font-bold text-gray-800">{puffs}</span>
                                    <span className="text-sm text-gray-500">WHIFFS TODAY</span>
                                    <span className="text-sm font-semibold text-amber-500 mt-2">{nicotineIntake} mg</span>
                                    <span className="text-xs text-gray-400">NICOTINE</span>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-32 bg-white rounded-lg shadow-inner p-2">
                             <h3 className="text-sm font-medium text-gray-600 mb-1">Usage today</h3>
                            <UsageChart data={chartData} />
                        </div>
                        
                        <button 
                            onClick={handlePuffClick}
                            className="w-full bg-primary text-white font-bold py-4 rounded-full shadow-lg flex items-center justify-center space-x-2 transform active:scale-95 transition-transform duration-150"
                        >
                            <PlusIcon className="w-6 h-6" />
                            <span>WHIFF</span>
                        </button>
                    </main>
                    <footer className="w-full border-t border-gray-200 bg-white">
                        <div className="flex justify-around items-center h-16">
                            <TargetIcon className="w-7 h-7 text-primary" />
                            <ChartIcon className="w-7 h-7 text-gray-400" />
                            <UserIcon className="w-7 h-7 text-gray-400" />
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default PhoneMockup;