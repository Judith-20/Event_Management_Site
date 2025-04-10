import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/navbar";
import About from "../pages/about_us";
import Services from "../pages/services";
import Events from "../pages/events";
import Home from "../pages/home";
import Rsvp from "../pages/rsvp";
import CreateInvitation from "../pages/e-invite1";
import Livestream from "../pages/live_streaming";
import Create from "../pages/create_wallet";
import Spray from "../pages/spray_pattern";
import Import from "../pages/import_contact";
import Guestlist from "../pages/guest_list";
import Invitelink from "../pages/create_invite_link";
import Login from "../pages/login_page";
import ForgotPwd from "../pages/forgot_password";
import ResetPwd from "../pages/reset_password";
import Signup from "../pages/sign_up_page";
import CreateInvitation2 from "../pages/e-invite2";
import CustomizeInvite from "../pages/customize_invite";
import { RsvpProvider } from "../context/RsvpContext";

const RenderNav = () => {
  return (
    <div>
      <RsvpProvider>
      <Navbar />
      
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/" element={<Home title="Home" />} />
        <Route path="/about_us" element={<About title="About" />} />
        <Route path="/events" element={<Events title="Contact Us" />} />
        <Route path="/sign_up_page" element={<Signup title="sign_up_page" />} />
          <Route path="/rsvp" element={<Rsvp title="RSVP" />} />
        <Route
          path="/e-invite1"
          element={<CreateInvitation title="E-invite" />}
        />
        <Route
          path="/e-invite2"
          element={<CreateInvitation2 title="E-invite" />}
        />
        <Route
          path="/customize_invite"
          element={<CustomizeInvite title="E-invite" />}
        />
        <Route
          path="/live_streaming"
          element={<Livestream title="Live Streaming" />}
        />
        <Route
          path="/create_wallet"
          element={<Create title="Create Wallet" />}
        />
        <Route
          path="/spray_pattern"
          element={<Spray title="Spray pattern" />}
        />
        <Route
          path="/import_contact"
          element={<Import title="Import contact" />}
        />
        <Route path="/guest_list" element={<Guestlist title="Guest List" />} />
        <Route
          path="/create_invite_link"
          element={<Invitelink title="Invite link" />}
        />

        <Route path="/login_page" element={<Login />} />
        <Route path="/forgot_password" element={<ForgotPwd />} />
        {/* <Route path="/reset_password" element={<PwdRecovery />} /> */}
        <Route path="/reset_password" element={<ResetPwd />} />
        </Routes>
        </RsvpProvider>
    </div>
  );
};

export default RenderNav;
