import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const Upload = () => {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleAnalyze = async () => {
    if (!selectedImage) {
      alert("Please select an image first.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("prescription", selectedImage.file);

      const response = await api.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response.data);

      navigate("/processing", {
        state: {
          image: selectedImage,
          uploadResult: response.data,
        },
      });

    } catch (error) {
      console.error(error);
      alert("Upload Failed!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <main className="flex-grow pt-32 pb-xl px-margin-mobile md:px-margin-desktop">
        <div className="max-w-[1440px] mx-auto">
          <header className="mb-xl">
            <h1 className="font-headline-lg text-headline-lg text-on-surface">Upload Your Prescription</h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-sm">Securely upload or scan your document for instant AI verification.</p>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
            {/* Main Upload Area */}
            <div className="lg:col-span-8">
              <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-xl shadow-sm">
                {/* Drag & Drop Zone */}
                <div className="upload-dashed w-full h-[360px] flex flex-col items-center justify-center transition-all cursor-pointer group hover:bg-surface-container-low mb-xl relative overflow-hidden" id="dropzone">
                  {selectedImage ? (
                    <div className="flex flex-col items-center">
                      <img
                        src={selectedImage.preview}
                        alt="Prescription Preview"
                        className="max-h-72 rounded-lg shadow-md object-contain"
                      />

                      <p className="mt-4 font-medium">
                        {selectedImage.file.name}
                      </p>

                      <button
                        onClick={() => setSelectedImage(null)}
                        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Remove Image
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center text-center px-lg">
                      <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center text-primary mb-md">
                        <span className="material-symbols-outlined text-4xl">
                          upload
                        </span>
                      </div>

                      <p className="font-headline-sm mb-2">
                        Drag and drop prescription file
                      </p>

                      <p className="text-gray-500">
                        or click Upload Image
                      </p>
                    </div>
                  )}
                  {/* Processing State Mockup (Hidden by default) */}
                  <div className="absolute inset-0 bg-surface/90 flex flex-col items-center justify-center hidden" id="processing-overlay">
                    <div className="w-64 h-2 bg-outline-variant rounded-full overflow-hidden">
                      <div className="h-full bg-primary animate-[progress_2s_ease-in-out_infinite]" style={{ width: '40%' }}></div>
                    </div>
                    <p className="mt-md font-label-md text-label-md text-primary animate-pulse">Initializing AI Analysis...</p>
                  </div>

                </div>
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-md items-center justify-center">
                  <button
                    onClick={() => document.getElementById("fileInput").click()}
                    className="w-full sm:w-auto px-xl py-md bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center justify-center gap-sm active:scale-95 transition-all"
                  >
                    <span className="material-symbols-outlined">
                      image
                    </span>

                    Upload Image
                  </button>

                  <button className="w-full sm:w-auto px-xl py-md bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md flex items-center justify-center gap-sm hover:bg-surface-container-highest transition-all">
                    <span className="material-symbols-outlined">
                      photo_camera
                    </span>
                    Use Camera
                  </button>

                  <button className="w-full sm:w-auto px-xl py-md text-primary font-label-md text-label-md hover:underline decoration-primary decoration-2 underline-offset-4">
                    Try Sample Prescription
                  </button>

                  {/* Hidden File Input */}
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files[0];

                      if (file) {
                        setSelectedImage({
                          file,
                          preview: URL.createObjectURL(file),
                        });
                      }
                    }}
                  />
                </div>
              </div>
              {/* Footer Action */}
              <div className="mt-xl flex justify-end">
                <button
                  onClick={handleAnalyze}
                  disabled={!selectedImage || loading}
                  className={`w-full sm:w-auto px-8 py-4 rounded-lg font-semibold transition-all shadow-sm
  ${selectedImage
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                >
                  {loading ? "Uploading..." : "Analyze Prescription"}
                </button>
              </div>
            </div>
            {/* Right Sidebar */}
            <aside className="lg:col-span-4 space-y-lg">
              {/* Upload Tips */}
              <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-lg shadow-sm">
                <div className="flex items-center gap-sm mb-md text-primary">
                  <span className="material-symbols-outlined" data-icon="lightbulb">lightbulb</span>
                  <h3 className="font-headline-sm text-headline-sm">Upload Tips</h3>
                </div>
                <ul className="space-y-md">
                  <li className="flex gap-md">
                    <span className="material-symbols-outlined text-secondary" data-icon="check_circle">check_circle</span>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">Avoid shadows</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Ensure no dark shadows fall over the prescription text.</p>
                    </div>
                  </li>
                  <li className="flex gap-md">
                    <span className="material-symbols-outlined text-secondary" data-icon="check_circle">check_circle</span>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">Good lighting</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Natural daylight or bright indoor lighting works best.</p>
                    </div>
                  </li>
                  <li className="flex gap-md">
                    <span className="material-symbols-outlined text-secondary" data-icon="check_circle">check_circle</span>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface">Keep text flat</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Flatten the paper to avoid distortion in handwriting recognition.</p>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Example Thumbnails */}
              <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-lg shadow-sm">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-md">Example Successes</h3>
                <div className="grid grid-cols-2 gap-sm">
                  <div className="relative group cursor-zoom-in">
                    <div className="w-full aspect-square rounded-lg bg-surface-container overflow-hidden">
                      <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" data-alt="A high-resolution, clear photograph of a medical prescription lying flat on a bright white clinic table. The lighting is soft and even, highlighting legible handwriting and professional medical stamps. The aesthetic is clean, medical, and high-quality, aligning with a premium healthcare SaaS interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB9IGnuJ1XRh-cv4a5Gdbf9h4Kv_GBBoS_QTmC5NUdnU5rxJDsLHowqhhU-ww72osOnQ2vzKxRokWAJ3FaJZC4klaD8m_btOI6UHWhDY43pxiRsoT6piFgQJRtyLURO2fGFpQity-97weMIBZgKaA3v-dH7975FZ94NBklJ6cUw-iWxXb3MO6fvzzlBUibAUdh8qtkFkgxWFNwFSHdSNOMEMRimuq-8K5HJo1ZipuOXMs9S3B7WoJW" />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-secondary text-on-secondary rounded-full p-xs">
                      <span className="material-symbols-outlined text-[12px]" data-icon="verified">verified</span>
                    </div>
                  </div>
                  <div className="relative group cursor-zoom-in">
                    <div className="w-full aspect-square rounded-lg bg-surface-container overflow-hidden">
                      <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" data-alt="A perfectly scanned digital PDF of a prescription showing clear typography and structured headers. The document is perfectly aligned and center-focused, with no creases or distortions. The background is a sterile, light-toned office environment with high-end tech vibe." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf43N1yL7LrJbfo5MXrSV3sRs4czk5rfwypI0HU5ji6uWCMoR2kYJzMKX4j77yMgBCll5raPPYuaYi3YChxDJYJ5V-7U5aAetHHpV48X3R8S7zIqXmQLraRSesGuqcsW-d64eXwvTsnI9SeXDrurwozl-rxqNQi6F99S0t090PBSzZ2DPtxd46EW8bmRSiqSWUoJPrm0L2x4IeZPahaeCftuEKbJm81OpQzSjEJiBkqKdwv5jfrDMj" />
                    </div>
                    <div className="absolute bottom-1 right-1 bg-secondary text-on-secondary rounded-full p-xs">
                      <span className="material-symbols-outlined text-[12px]" data-icon="verified">verified</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Quality Guidelines */}
              <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-lg shadow-sm">
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-md">Quality Checklist</h3>
                <div className="space-y-sm">
                  <div className="flex justify-between items-center py-sm border-b border-outline-variant">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Resolution</span>
                    <span className="font-label-md text-label-md text-on-surface">Min 300 DPI</span>
                  </div>
                  <div className="flex justify-between items-center py-sm border-b border-outline-variant">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">File Size</span>
                    <span className="font-label-md text-label-md text-on-surface">Up to 10MB</span>
                  </div>
                  <div className="flex justify-between items-center py-sm">
                    <span className="font-body-sm text-body-sm text-on-surface-variant">OCR Readiness</span>
                    <span className="px-sm py-[2px] bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold">OPTIMIZED</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
};

export default Upload;
