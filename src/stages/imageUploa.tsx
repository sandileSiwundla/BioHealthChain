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
    <div id="image-upload-container">
      <h2 className="upload-title">Upload Your Image</h2>

      {/* Upload Box */}
      <label htmlFor="file-upload" className="upload-box">
        {image ? (
          <img src={image} alt="Uploaded" className="uploaded-image" />
        ) : (
          <div className="upload-text">
            <span className="text-lg font-semibold">Click to Upload</span>
            <span className="text-sm opacity-80">or Drag & Drop</span>
          </div>
        )}
      </label>

      {/* Hidden File Input */}
      <input id="file-upload" type="file" accept="image/*" onChange={handleImageChange} className="hidden-input" />

      {/* Remove Button */}
      {image && (
        <button onClick={() => setImage(null)} className="remove-button">
          Remove Image
        </button>
      )}
    </div>
  );
};

export default ImageUpload;
