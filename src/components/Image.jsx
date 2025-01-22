import ECell from "../assets/image.png";

function Image() {
  return (
    <div className="flex justify-center items-center w-[200px] h-[200px]  rounded-lg">
      <img src={ECell} alt="Cell" className="h-full" />
    </div>
  );
}

export default Image;
