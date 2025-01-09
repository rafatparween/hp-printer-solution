"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import './PrinterSetup.css';
import JivoChat from '@/app/Jivochat';


const PrinterSetup = () => {
  const router = useRouter();

  const handleSetupClick = () => {
    router.push('../customsoftware/Pages');
  };

  return (
    <>
      <div className="printer-setup">
        <div className="text-content ">
          <h1>123 EASY PRINTER SETUP INSTALLATION</h1>
          <ul>
            <li>Make sure your printer is powered on</li>
            <li className='select'>Click Printer Setup for step by step guidance on how to setup, configure and register your printer.</li>
          </ul>
          <button className="btn" onClick={handleSetupClick}>
            Click Here for Printer Setup
            {/* <img src='hplogo.png' alt="HP Logo" className="hp-logo" /> */}
          </button>
        </div>

        <img src='boyimage.png' alt="Printer" className="printer-image" />

      </div>
      <JivoChat/>
    </>
  );
};

export default PrinterSetup;








