import { IconBox, Tabs } from "../components";
import { faEdit, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

// Styles
import "../styles/pages/users.css";

// Pseudo Data
const tabsData = [
  {
    title: "الوصف",
    content: (
      <h4 className="text-[#808080] text-center">Desc. Coming soon...</h4>
    ),
  },
  {
    title: "Q&A",
    content: <h4 className="text-[#808080] text-center">Q&A Coming soon...</h4>,
  },
  {
    title: "ملحوظات",
    content: (
      <h4 className="text-[#808080] text-center">Notes Coming soon...</h4>
    ),
  },
  {
    title: "ملفات",
    content: (
      <h4 className="text-[#808080] text-center">Files Coming soon...</h4>
    ),
  },
];

const User = () => {
  return (
    <div className="container">
      <section className="min-h-screen">
        {/* User Profile */}
        <div className="user-profile">
          <div className="user-profile-img">{/* <img src={"../"} /> */}</div>

          <div className="user-profile-info">
            <ul className="user-profile-info-list" role="list">
              <li className="user-profile-info-item">
                <span className="user-profile-info-label">Name:</span>
                <span className="user-profile-info-value">John Doe</span>
              </li>

              <li className="user-profile-info-item">
                <span className="user-profile-info-label">School Year:</span>
                <span className="user-profile-info-value">2nd Sec</span>
              </li>

              <li className="user-profile-info-item">
                <span className="user-profile-info-label">Age:</span>
                <span className="user-profile-info-value">18</span>
              </li>

              <li className="user-profile-info-item">
                <IconBox size="small" icon={faEnvelope} />
                <IconBox size="small" icon={faPhone} />
                <IconBox size="small" icon={faEdit} />
              </li>
            </ul>
          </div>
        </div>

        {/* Tabs */}
        <Tabs tabs={tabsData} />
      </section>
    </div>
  );
};

export default User;
