// import AppointPopup from '@/pages/components/appoint-popup';
import React , { createContext , useState } from 'react'

const RouteContext = createContext();

const RouterProvider = ({children}) => {
    // const [isPopup , setIsPopup] = useState(false);
    // const PopupOpen = () => {
    //     setIsPopup(true);
    //   };
  
    //   const PopupClose = () => {
    //     setIsPopup(false);
    //   };
  return (
    <RouteContext.Provider value={{isPopup , PopupOpen , PopupClose}} >
      {/* <AppointPopup /> */}
      {children}
    </RouteContext.Provider>
  )
}

export  { RouterProvider , RouteContext };