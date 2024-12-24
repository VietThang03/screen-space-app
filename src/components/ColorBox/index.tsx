interface Props {
  color: string;
  name: string;
  activeColor: boolean;
  handleColorChange?: () => void;
}

const ColorBox = ({ color, name, activeColor, handleColorChange }: Props) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div
        className={`w-32 h-20 border border-gray-300 rounded-lg shadow  ${
          activeColor ? "ring-4 ring-blue-500" : ""
        } ${color}`}
        onClick={handleColorChange}
      ></div>
      <p className="text-sm font-medium text-center">{name}</p>
    </div>
  );
};

export default ColorBox;
