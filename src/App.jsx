import { useState, useEffect } from "react";
import SelfcareCard from "./selfcareCard";

const App = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar w-full h-screen">
      {/* navbar */}
      <nav
        className={`fixed w-full flex justify-between items-center py-4 px-16 transition-colors duration-300 ${
          scroll ? "bg-white text-black shadow-xl" : "bg-transparent text-white"
        }`}
      >
        <div className="w-1/12">
          <img src={scroll ? "./assets/logo-scroll.png" : "./assets/logo.png"} alt="logo" />
        </div>

        <ul className="flex">
          <li>
            <a href="#" className="px-5 py-3 font-medium text-lg">
              Tentang
            </a>
          </li>
          <li>
            <a href="#" className="px-5 py-3 font-medium text-lg">
              Artikel
            </a>
          </li>
          <li>
            <a href="#" className="px-5 py-3 font-medium text-lg">
              Konsultan
            </a>
          </li>
          <li>
            <a href="#" className="px-5 py-3 font-medium text-lg">
              Layanan
            </a>
          </li>
        </ul>

        <div>
          <img src="./assets/ava.png" alt="ava" className="w-12" />
        </div>
      </nav>

      {/* header */}
      <div className="header w-full h-3/5 bg-[#9F41EA]">
        <div className="bg-[url('./assets/Vector.png')] bg-no-repeat bg-cover w-full h-full flex flex-col justify-center items-center gap-5 text-white">
          <h1 className="font-bold text-5xl text-center leading-[58px]">
            Sudahkah Kamu
            <br />
            Mengenali Diri Sendiri?
          </h1>
          <p>Kenali diri dulu, baru tentukan yang terbaik untukmu</p>
        </div>
      </div>

      {/* selfcare */}
      <div className="self-care container py-40 px-10 m-auto flex justify-center items-center">
        <div className="h-[500px] flex flex-wrap justify-center gap-[1%] items-center">
          <SelfcareCard
            gambar="./assets/self-1.png"
            judul="1 Minute Selfcare"
            deskripsi="1 Menit SelfCare untuk redakan kecemasanmu dan hal yang membuatmu tidak nyaman."
          />
          <SelfcareCard
            gambar="./assets/self-2.png"
            judul="Audio Mindfulness with Solfeggio Frequencies"
            deskripsi="Nikmati Audio kami yang tertanam dengan Frekuensi Solfeggio"
          />
          <SelfcareCard
            gambar="./assets/self-3.png"
            judul="Audio Self-Care 6 Minutes"
            deskripsi="Selfcare dengan Mindful Breathing, mari Sadar Penuh dan Hadir Utuh saat ini."
          />
          <SelfcareCard
            gambar="./assets/self-4.png"
            judul="4-7-8 Breathing Techniques"
            deskripsi="Rileks, dan tenangkan diri dengan teknik pernapasan 4-7-8"
          />
        </div>
      </div>

      {/* footer */}
      <div className="container py-14 px-10 m-auto flex flex-col justify-center items-center bg-[#9F41EA] text-white">
        <img src="./assets/logo.png" alt="logo" className="w-1/12 mb-4" />
        <h1 className="font-bold w-[600px] text-center mb-16">
          Dengan adanya RusCare diharapkan dapat membantu menyelesaikan masalah
          peserta didik dan membantu dalam kegiatan pembelajaran
        </h1>
        <div className="flex justify-between w-96 mb-16">
          <button>Tentang Kami</button>
          <button>Kritik Saran</button>
          <button>Kontak</button>
        </div>
        <div className="flex justify-between w-32">
          <button>
            <img className="w-2" src="./assets/facebook.png" alt="facebook" />
          </button>
          <button>
            <img className="w-4" src="./assets/twitter.png" alt="twitter" />
          </button>
          <button>
            <img className="w-4" src="./assets/instagram.png" alt="instagram" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
