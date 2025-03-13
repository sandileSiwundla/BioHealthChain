import { useState } from "react";

const ImageUpload = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div id="image-upload-container" className="flex flex-col items-center justify-center p-4 bg-teal-600 rounded-lg shadow-sm">
      {/* Title */}
      <h2 className="upload-title text-xl font-semibold mb-3 text-gray-800">Upload Your Image</h2>

      {/* Upload Box */}
      <label
        htmlFor="file-upload"
        className="upload-box w-64 h-40 border-2 border-dashed border-teal-500 rounded-lg flex items-center justify-center cursor-pointer hover:bg-teal-50 transition-all duration-300"
      >
        {image ? (
          <img
            src={image}
            alt="Uploaded"
            className="uploaded-image w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="upload-text flex flex-col items-center text-center">
            <span className="text-base font-medium text-teal-700">Click to Upload</span>
            <span className="text-xs text-teal-500 opacity-80">or Drag & Drop</span>
          </div>
        )}
      </label>

      {/* Hidden File Input */}
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="hidden-input hidden"
      />

      {image && (
        <button
          onClick={() => setImage(null)}
          className="remove-button mt-3 px-4 py-1.5 bg-teal-500 text-white text-sm font-semibold rounded-md hover:bg-teal-600 transition-all duration-300"
        >
          Remove Image
        </button>
      )}
    </div>
  );
};

export default ImageUpload;