import { useRef, useState } from "react";
import { TypeColorCard } from "../../utils/ArrayColor";

interface Resolution {
    label: string
    width: number
    height: number
}

interface Props{
    activeColor: TypeColorCard
}

const ScreenDisplay = ({activeColor}: Props) => {
  const resolutions: Resolution[] = [
    { label: "480p", width: 854, height: 480 },
    { label: "720p", width: 1280, height: 720 },
    { label: "1080p", width: 1920, height: 1080 },
    { label: "1440p 2K", width: 2560, height: 1440 },
    { label: "2160p 4K", width: 4096, height: 2160 },
    { label: "4320 8K", width: 7680, height: 4320 },
  ];

  // Trạng thái để theo dõi độ phân giải được chọn
  const [selectedResolution, setSelectedResolution] = useState<Resolution>(resolutions[2]);
  const screenRef = useRef<HTMLDivElement>(null); // Tham chiếu đến phần tử màu

  // Xử lý khi thay đổi độ phân giải
  const handleResolutionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = resolutions.find(
      (res) => res.label === event.target.value
    );
    setSelectedResolution(selected!);
  };

   // Hàm xử lý fullscreen
   const handleFullscreen = () => {
    if (screenRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen(); // Thoát fullscreen nếu đang ở chế độ fullscreen
      } else {
        screenRef.current.requestFullscreen(); // Kích hoạt fullscreen
      }
    }
  };

  return (
    <div className="flex flex-col items-center bg-white py-8">
      {/* Ô màu (Screen Box) */}
      <div ref={screenRef} className={`relative w-full max-w-2xl h-60 ${activeColor.color} rounded-xl shadow-lg`}>
        {/* Nút Fullscreen ở góc */}
        <button
          className="absolute bottom-4 right-4 w-6 h-6 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
          aria-label="Fullscreen"
          onClick={handleFullscreen}
        >
          ↔
        </button>
      </div>

      {/* Tên màn hình */}
      <p className="text-lg font-semibold mt-4">{activeColor.name}</p>

      {/* Chọn độ phân giải */}
      <div className="mt-4 flex flex-col sm:flex-row items-center sm:space-x-4">
        {/* Dropdown chọn độ phân giải */}
        <div className="relative inline-block">
        <select
            className="block w-full text-sm px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedResolution.label}
            onChange={handleResolutionChange}
          >
            {resolutions.map((res) => (
              <option key={res.label} value={res.label}>
                {res.label}
              </option>
            ))}
          </select>
        </div>

        {/* Kích thước pixel */}
        <div className="mt-4 sm:mt-0 flex space-x-2">
          <div className="text-center">
            <p className="text-sm font-medium">{selectedResolution.width}</p>
            <p className="text-xs text-gray-500">px</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium">{selectedResolution.height}</p>
            <p className="text-xs text-gray-500">px</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenDisplay;
