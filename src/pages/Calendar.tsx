import React, { useState } from 'react';

import Banner from '../partials/Banner';
import Layout from '@/components/Layout';
import Card from '@/components/card';
import MiniCalendar from '@/components/calendar/MiniCalendar';

function Dashboard() {

  return (
    <Layout>
        <MiniCalendar/>

    </Layout>
  );
}

export default Dashboard;


