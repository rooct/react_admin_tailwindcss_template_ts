import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
//compoents
import Accordion from './pages/component/Accordion';
import AlertBanner from './pages/component/AlertBanner';
import Avatar from './pages/component/Avatar';
import Badge from './pages/component/Badge';
import Breadcrumb from './pages/component/Breadcrumb';
import Button from './pages/component/Button';
import Dropdown from './pages/component/Dropdown';
import Icons from './pages/component/Icons';
import InputForm from './pages/component/InputForm';
import Modal from './pages/component/Modal';
import Pagination from './pages/component/Pagination';
import Tabs from './pages/component/Tabs';
import Tooltip from './pages/component/Tooltip';
import Tables from './pages/component/tables';
import Profile from './pages/profile';
import Marketplace from './pages/marketplace';

function App() {

  const location = useLocation();

  // useEffect(() => {
  //   document.querySelector('html').style.scrollBehavior = 'auto'
  //   window.scroll({ top: 0 })
  //   document.querySelector('html').style.scrollBehavior = ''
  // }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/nft-marketplace" element={<Marketplace />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/component/accordion" element={<Accordion />} />
        <Route path="/component/alert" element={<AlertBanner />} />
        <Route path="/component/avatar" element={<Avatar />} />
        <Route path="/component/badge" element={<Badge />} />
        <Route path="/component/breadcrumb" element={<Breadcrumb />} />
        <Route path="/component/button" element={<Button />} />
        <Route path="/component/dropdown" element={<Dropdown />} />
        <Route path="/component/icons" element={<Icons />} />
        <Route path="/component/form" element={<InputForm />} />
        <Route path="/component/modal" element={<Modal />} />
        <Route path="/component/pagination" element={<Pagination />} />
        <Route path="/component/tabs" element={<Tabs />} />
        <Route path="/component/tables" element={<Tables />} />
        <Route path="/component/tooltip" element={<Tooltip />} />
      </Routes>
    </>
  );
}

export default App;
