import { useState } from "react";
import "../../styles/layout.css";

function Tabs({ tabs, selectedIndex = 0 }) {
  const [activeTabIndex, setActiveTabIndex] = useState(selectedIndex);

  const handleClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="tabs grid gap-12">
      <ul className="tabs-list">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab ${index === activeTabIndex ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="tabs-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tabs-pane ${index === activeTabIndex ? "active" : "hidden"}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
