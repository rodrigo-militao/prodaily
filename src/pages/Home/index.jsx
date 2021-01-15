import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import SectionTop from '../../components/SectionTop';
import Destaques from '../../components/Destaques';
import Footer from '../../components/Footer';

import { getData } from '../../service/mainApi';

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(getData());
  }, [])
  
  return (
    <main>
      <Header />
      <SectionTop />
      <Destaques data={data} />

      <Footer />
    </main>
  );
}

export default Home;