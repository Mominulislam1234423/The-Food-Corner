import SharedCover from "../../../Componants/SharedCover/SharedCover";
import menuImg from "../../../../assets/menu/banner3.jpg";
export default function MenuCover() {
  return (
    <div className="mb-8">
      <SharedCover
        img={menuImg}
        name={"Our Menu"}
        title={"Would you like to try a dish?"}
      ></SharedCover>
    </div>
  );
}
