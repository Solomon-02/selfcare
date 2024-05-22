import PropTypes from 'prop-types';

const SelfcareCard = ({ gambar, judul, deskripsi }) => {
  return (
    <div className="card w-[700px] h-48 rounded-2xl shadow-xl flex gap-5">
      <img src={gambar} alt="selfcare" className="w-1/4 rounded-l-2xl object-cover" />
      <div className="content py-4 pr-6 flex flex-col justify-between items-start">
        <div className="main-content">
          <h1 className="font-semibold text-2xl mb-1">{judul}</h1>
          <p>{deskripsi}</p>
        </div>
        <button className="text-[#9F41EA] font-medium hover:underline">Coba Sekarang</button>
      </div>
    </div>
  );
}

SelfcareCard.propTypes = {
  gambar: PropTypes.string.isRequired,
  judul: PropTypes.string.isRequired,
  deskripsi: PropTypes.string.isRequired,
};

export default SelfcareCard;