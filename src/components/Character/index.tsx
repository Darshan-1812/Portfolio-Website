import "./photo.css";

const CharacterModel = () => {
  return (
    <div className="character-model">
      <div className="photo-wrapper">
        <img
          src="/images/darshan-3d.png"
          alt="Darshan Girase - 3D Character"
          className="hero-photo"
          draggable={false}
        />
        <div className="photo-glow-ring" />
        <div className="photo-bottom-fade" />
      </div>
      <div className="character-rim" />
    </div>
  );
};

export default CharacterModel;
