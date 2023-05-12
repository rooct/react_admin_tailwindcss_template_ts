import React, { useState } from 'react';

import Banner from '../partials/Banner';
import Layout from '@/components/Layout';
import Card from '@/components/card';
import MiniCalendar from '@/components/calendar/MiniCalendar';
import Widget from '@/components/widget/Widget';
import { MdBarChart, MdDashboard, MdMenuOpen } from 'react-icons/md'
import { IoMdHome } from 'react-icons/io';
import { IoDocuments } from 'react-icons/io5';

function Dashboard() {

  return (
    <Layout>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Earnings"}
          subtitle={"$340.5"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Spend this month"}
          subtitle={"$642.39"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Sales"}
          subtitle={"$574.34"}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Your Balance"}
          subtitle={"$1,000"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"New Tasks"}
          subtitle={"145"}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Total Projects"}
          subtitle={"$2433"}
        />
      </div>
        <MiniCalendar/>
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Total Projects"}
          subtitle={"$2433"}
        />
    </Layout>
  );
}

export default Dashboard;


