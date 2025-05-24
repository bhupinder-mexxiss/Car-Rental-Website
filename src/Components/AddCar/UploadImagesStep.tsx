import { useRef } from "react";
import { Button } from "../../Components/ui/button";
import { AspectRatio } from "../../Components/ui/aspect-ratio.tsx";
import { toast } from 'sonner';

interface UploadImagesStepProps {
    values: any;
    setFieldValue: (field: string, value: any) => void;
}

const UploadImagesStep = ({ values, setFieldValue }: UploadImagesStepProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const currentImages = [...(values.images || [])];

        Array.from(files).forEach((file) => {
            // Check file type
            if (!file.type.startsWith('image/')) {
                toast.error(("Invalid file type"), {
                    description: "Please upload only image files."
                });
                return;
            }

            // Check file size (limit to 5MB)
            if (file.size > 5 * 1024 * 1024) {
                toast.error(("File too large"), {
                    description: "Image size should be less than 5MB.",
                });
                return;
            }

            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    const newImage = reader.result as string;
                    currentImages.push(newImage);
                    setFieldValue("images", currentImages);

                    // If this is the first image, set it as thumbnail as well
                    if (!values.thumbnail) {
                        setFieldValue("thumbnail", newImage);
                    }
                }
            };
            reader.readAsDataURL(file);
        });

        // Reset the input so the same file can be selected again if needed
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const removeImage = (index: number) => {
        const currentImages = [...(values.images || [])];
        const removedImage = currentImages.splice(index, 1)[0];
        setFieldValue("images", currentImages);

        // If the removed image was the thumbnail, set a new thumbnail
        if (values.thumbnail === removedImage) {
            const newThumbnail = currentImages.length > 0 ? currentImages[0] : null;
            setFieldValue("thumbnail", newThumbnail);
        }
    };

    const setAsThumbnail = (index: number) => {
        setFieldValue("thumbnail", values.images[index]);
        toast.success(("Thumbnail Updated"), {
            description: "This image will be used as the main image for your listing.",
        });
    };

    return (
        <div>
            {/* <h2 className="text-xl font-semibold mb-6">Upload Car Images</h2> */}

            <div className="mb-6">
                <div className="flex items-center justify-center w-full">
                    <label
                        htmlFor="car-images"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500">PNG, JPG or WEBP (MAX. 5MB)</p>
                        </div>
                        <input
                            id="car-images"
                            ref={fileInputRef}
                            type="file"
                            className="hidden"
                            accept="image/*"
                            multiple
                            onChange={handleFileChange}
                        />
                    </label>
                </div>
            </div>

            {(values.images || []).length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-medium mb-4">Uploaded Images</h3>
                    <p className="text-sm text-gray-500 mb-4">
                        Click "Set as Main" to choose your thumbnail image, which will be the first image users see.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {(values.images || []).map((image: string, index: number) => (
                            <div
                                key={index}
                                className={`relative rounded-lg overflow-hidden ${values.thumbnail === image ? 'ring-2 ring-primary' : ''
                                    }`}
                            >
                                <AspectRatio ratio={4 / 3}>
                                    <img
                                        src={image}
                                        alt={`Car image ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </AspectRatio>
                                <div className="absolute inset-0 bg-black/35 hover:bg-opacity-50 transition-opacity flex items-center justify-center opacity-0 hover:opacity-100">
                                    <div className="flex gap-2">
                                        {values.thumbnail !== image && (
                                            <Button
                                                onClick={() => setAsThumbnail(index)}
                                                size="sm"
                                                type="button"
                                                className="bg-white hover:bg-white/80 cursor-pointer font-normal"
                                            >
                                                Set as Main
                                            </Button>
                                        )}
                                        <Button
                                            onClick={() => removeImage(index)}
                                            size="sm"
                                            type="button"
                                            className="bg-red-500 hover:bg-red-500/90 text-white cursor-pointer font-normal"
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                                {values.thumbnail === image && (
                                    <div className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                                        Main Image
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="text-sm text-gray-500 mt-6">
                <p>* Please upload clear, high-quality images of your car from different angles. A good set of photos increases the likelihood of your car being rented.</p>
            </div>
        </div>
    );
};

export default UploadImagesStep;