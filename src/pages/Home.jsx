import React from 'react';
import Greetings from "../components/home/Greetings";
import MiniCard from '../components/home/MiniCard';
import RecentOrders from '../components/home/RecentOrders';
import PopularDishes from '../components/home/PopularDishes';

import { BsCashCoin } from 'react-icons/bs';
import { GrInProgress } from 'react-icons/gr'; 

const Home = () => {
  return (
    <section className="w-full h-auto flex gap-4 p-4 overflow-y-auto pb-20">
        <div className="flex-[3] bg-[#1a1a1a] flex flex-col space-y-4 p-4 pb-8">
            <Greetings />
            <div className="flex items-center w-full gap-4">
                <MiniCard title="Total Earnings" icon={<BsCashCoin />} number={512} footerNum={1.6} />
                <MiniCard title="In Progress" icon={<GrInProgress />} number={16} footerNum={3.6} />
            </div>
            <RecentOrders />
        </div>
        <div className="flex-[2] bg-[#1a1a1a]">
            <PopularDishes />
        </div>
    </section>
  )
}

export default Home;
