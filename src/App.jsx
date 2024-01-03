import { useState } from "react";
import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./Layout/RootLayout";
import Homepage from "./components/Homepage";
import Aboutme from "./components/Aboutme";
import HelpLayout from "./Layout/HelpLayout";
import Faq from "./components/Help/Faq";
import Contact, { contactAction } from "./components/Help/Contact";
import Career, { careerLoader } from "./components/Careers/Career";
import CareerLayout from "./Layout/CareerLayout";
import Details, { careerLoaderDetails } from "./components/Careers/Details";
import CareerError from "./components/Careers/CareerError";
import NotFound from "./components/NotFound";
import Vedio from "./components/Vedio";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />}></Route>
      <Route path="about" element={<Aboutme />}></Route>
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}></Route>
        <Route path="contact" element={<Contact />} action={contactAction}></Route>
      </Route>
      <Route path="career" element={<CareerLayout />} errorElement={<CareerError/>}>
        <Route index element={<Career />} loader={careerLoader}></Route>
        <Route path=":id" element={<Details />} loader={careerLoaderDetails}></Route>
      </Route>
      <Route path="vedio" element={<Vedio />}></Route>
      <Route path="*" element={<NotFound/>}></Route>
    </Route>
  )
);
function App() {
  return (<RouterProvider router={router} />)
}

export default App;
