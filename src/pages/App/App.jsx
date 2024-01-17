// import React, { useState } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import styles from './App.css';
// import NewAppointmentPage from '../NewAppointmentPage/NewAppointmentPage';
// import AppointmentHistoryPage from '../AppointmentHistory/AppointmentHistory';
// import AuthPage from '../AuthPage/AuthPage';

// export default function App(){
//     const [user, setUser] = useState();
//     return (
//         <main className={styles.App}>
//           { user ?
//             <>
//               <Routes>
//                 {/* client-side route that renders the component instance if the path matches the url in the address bar */}
//                 <Route path="/orders/new" element={<NewAppointmentPage user={user} setUser={setUser} />} />
//                 <Route path="/orders" element={<AppointmentHistoryPage user={user} setUser={setUser} />} />
//                 {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
//                 <Route path="/*" element={<Navigate to="/orders/new" />} />
//               </Routes>
//             </>
//             :
//             <AuthPage setUser={setUser} />
//           }
//         </main>
//       );
// }