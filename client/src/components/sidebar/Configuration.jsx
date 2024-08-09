import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GeneralConfiguration from '../configuration/GeneralConfiguration';
import DisplayConfiguration from '../configuration/DisplayConfiguration';
import AdvanceConfiguration from '../configuration/AdvanceConfiguration';

function Configuration() {
  const [activeTab, setActiveTab] = useState('General');

  const tabs = [
    { name: 'General', component: <GeneralConfiguration /> },
    { name: 'Display', component: <DisplayConfiguration /> },
    { name: 'Advance', component: <AdvanceConfiguration /> }
  ];

  const renderActiveTab = () => {
    return tabs.find(tab => tab.name === activeTab)?.component || null;
  };

  return (
    <div className="w-10/12 ml-16">
      <h1 className="text-3xl font-bold text-purple-700">Configuration</h1>
      <div className="flex justify-start gap-12 mt-8 items-center">
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            to="#"
            onClick={() => setActiveTab(tab.name)}
            className={`${
              activeTab === tab.name
                ? 'text-purple-700 font-semibold border-b-4 border-purple-700'
                : 'text-gray-700 hover:text-blue-500'
            }`}
          >
            {tab.name}
          </Link>
        ))}
      </div>
      <hr className="border-gray-300 mb-4" />
      <div>
        {renderActiveTab()}
      </div>
    </div>
  );
}

export default Configuration;
