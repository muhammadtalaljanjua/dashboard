import React from "react";
import "./sidebar.styles.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="welcome">
        <img src={`${process.env.PUBLIC_URL}/user.png`} alt="Logo" />
        <span>
          Welcome <span className="bold">Admin</span>
        </span>
      </div>
      <nav>
        <ul>
          <li className="main-item">
            <img src={`${process.env.PUBLIC_URL}/dashboard.png`} alt="Dashboard" className="icon" />
            Dashboard
          </li>
          <li className="main-item">
            <img src={`${process.env.PUBLIC_URL}/staff.png`} alt="Staff" className="icon" />
            Staff Management
          </li>
          <ul>
            <li className="sub-item">Staff Listing</li>
            <li className="sub-item">Staff Document Listing</li>
          </ul>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

// import React from "react";
// import "./sidebar.styles.css";

// const Sidebar = () => {
//   return (
//     <aside className="sidebar">
//       <div className="welcome">
//         <img src={`${process.env.PUBLIC_URL}/user.png`} alt="Logo" />
//         <span>
//           Welcome <span className="bold">Admin</span>
//         </span>
//       </div>
//       <nav>
//         <ul>
//           <li className="main-item">
//             <img src={`${process.env.PUBLIC_URL}/dashboard.png`} alt="Dashboard" className="icon" />
//             Dashboard
//           </li>
//           <li className="main-item">
//             <img
//               src={`${process.env.PUBLIC_URL}/staff_management.png`}
//               alt="Staff Management"
//               className="icon"
//             />
//             Staff Management
//           </li>
//           <ul>
//             <li className="sub-item">
//               <img
//                 src={`${process.env.PUBLIC_URL}/staff_listing.png`}
//                 alt="Staff Listing"
//                 className="icon"
//               />
//               Staff Listing
//             </li>
//             <li className="sub-item">
//               <img
//                 src={`${process.env.PUBLIC_URL}/document_listing.png`}
//                 alt="Staff Document Listing"
//                 className="icon"
//               />
//               Staff Document Listing
//             </li>
//           </ul>
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;