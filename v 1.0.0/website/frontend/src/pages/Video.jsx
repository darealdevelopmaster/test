import { Box, Tabs } from "../components";
import video from "../assets/video.mp4";

const Video = () => {
  return (
    <div className="container min-h-screen">
      <section className="grid gap-12">
        <div className="video-container aspect-video">
          <Box.Video
            style={{
              aspectRatio: "16 / 9",
            }}
            src={video}
          />
        </div>

        <Tabs
          tabs={[
            {
              title: "الوصف",
              content: (
                <h4 className="text-[#808080] text-center">Coming soon...</h4>
              ),
            },
            {
              title: "Q&A",
              content: (
                <h4 className="text-[#808080] text-center">Coming soon...</h4>
              ),
            },
            {
              title: "ملحوظات",
              content: (
                <h4 className="text-[#808080] text-center">Coming soon...</h4>
              ),
            },
            {
              title: "ملفات",
              content: (
                <h4 className="text-[#808080] text-center">Coming soon...</h4>
              ),
            },
          ]}
        />
      </section>
    </div>
  );
};

// function Tabs({ tabs, selectedIndex = 0 }) {
//   const [activeTabIndex, setActiveTabIndex] = useState(selectedIndex);

//   const handleClick = (index) => {
//     setActiveTabIndex(index);
//   };

//   return (
//     <div className="video-tabs grid gap-12">
//       <ul className="video-tabs-list">
//         {tabs.map((tab, index) => (
//           <li
//             key={index}
//             className={`video-tab ${index === activeTabIndex ? "active" : ""}`}
//             onClick={() => handleClick(index)}
//           >
//             {tab.title}
//           </li>
//         ))}
//       </ul>
//       <div className="video-tabs-content">
//         {tabs.map((tab, index) => (
//           <div
//             key={index}
//             className={`video-tabs-pane ${index === activeTabIndex ? "active" : "hidden"}`}
//           >
//             {tab.content}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

export default Video;
