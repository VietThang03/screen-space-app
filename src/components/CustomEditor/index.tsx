import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // CSS mặc định của react-quill
import "tailwindcss/tailwind.css";
// Import child_process từ Node.js
//import { exec } from "child_process";

const CustomEditor: React.FC = () => {
  const [content, setContent] = useState<string>("");

  const handleChange = (value: string) => {
    setContent(value);
  };

  const handleSubmit = () => {
    console.log(content)
  }

//   const saveArticle = () => {
//     if (!content.trim()) {
//       alert("Nội dung không được để trống!");
//       return;
//     }

//     // Gọi script Node.js để lưu nội dung
//     const scriptPath = "./scripts/saveContent.ts";
//     exec(`ts-node ${scriptPath} "${content}"`, (error: any, stdout: string, stderr: string) => {
//       if (error) {
//         console.error(`Lỗi khi lưu bài viết: ${stderr}`);
//         alert("Đã xảy ra lỗi khi lưu bài viết!");
//         return;
//       }
//       alert("Bài viết đã được lưu!");
//       console.log(stdout);
//     });

//     // Xóa nội dung sau khi lưu
//     setContent("");
//   };

  return (
    <div className="w-full p-4 bg-white rounded-lg shadow-md ">
      <h2 className="text-xl font-bold mb-4">Custom Editor</h2>
      <ReactQuill
        value={content}
        onChange={handleChange}
        modules={{
          toolbar: [
            ["bold", "italic", "underline", "strike"], // Các nút định dạng văn bản
            [{ header: [1, 2, 3, false] }], // Thay đổi kiểu chữ
            [{ list: "ordered" }, { list: "bullet" }], // Danh sách
            ["link", "image"], // Gắn link và hình ảnh
            ["clean"], // Xóa định dạng
          ],
        }}
        formats={[
          "bold",
          "italic",
          "underline",
          "strike",
          "header",
          "list",
          "bullet",
          "link",
          "image",
        ]}
        className="h-48"
        placeholder="Nhập vào nội dung..."
      />
      <div className="mt-4">
        <h3 className="mt-10 text-lg font-semibold">Nội dung:</h3>
        <div className="p-2 border rounded bg-gray-100">
          {content || <em>Chưa có nội dung</em>}
        </div>
        <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ">
          Lưu bài viết
        </button>
      </div>
    </div>
  );
};

export default CustomEditor;
