import React from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import NewsNotif from './components/NewsNotif';
import SideSection from './components/SideSection';

function App() {
  return (
    <div>
      <Header />
      <NewsNotif topic="NIMET" body="Mies sai luvan nimetä itsensä Luciferiksi"/>
      <NewsNotif topic="PÄIVÄN TIMANTTI" body="Kymmenisen vuotta sitten Lena Nelskylä päätti, että synkistely saa riittää"/>

        <MainSection />
        <SideSection />

    </div>
  );
}

export default App;
