import React from 'react';
import Navbar from '../components/Navbar';
import TrackForms from "../components/TrackForms";
import { useState } from 'react';


const Index = () => {
  const [data, setData] = useState([]);
  return (
    <div className="w-full h-screen px-7 mt-5 bg-white">
      <div className="w-full h-full">
        <div className="">
          <Navbar />
        </div>
        <div className="w-full h-full" onClick={() => setData(data)}>
          <TrackForms />
        </div>
      </div>
    </div>
  );
}

export default Index;