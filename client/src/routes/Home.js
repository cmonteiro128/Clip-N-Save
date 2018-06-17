import React from 'react';
import { css } from 'emotion';
import HeaderBar from '../components/HeaderBar';
import WelcomeMessage from '../components/WelcomeMessage';
import SaleCard from '../components/SaleCard';

const Home = () => (
  <div
    className={css`
      margin-top: 10px;
    `}
  >
    <HeaderBar />
    <WelcomeMessage />
    <SaleCard />
  </div>
);
export default Home;
