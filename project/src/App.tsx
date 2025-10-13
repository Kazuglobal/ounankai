import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import AlumniProfiles from './pages/AlumniProfiles';
import AlumniProfile from './pages/AlumniProfile';
import Announcements from './pages/Announcements';
import Contact from './pages/Contact';
import Bylaws from './pages/Bylaws';
import BoardOfDirectors from './pages/BoardOfDirectors';
import MemberRegistration from './pages/MemberRegistration';
import AdvertisementGallery from './pages/AdvertisementGallery';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/alumni-profiles" element={<AlumniProfiles />} />
          <Route path="/alumni-profiles/:id" element={<AlumniProfile />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/advertisement-gallery" element={<AdvertisementGallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bylaws" element={<Bylaws />} />
          <Route path="/board-of-directors" element={<BoardOfDirectors />} />
          <Route path="/member-registration" element={<MemberRegistration />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;