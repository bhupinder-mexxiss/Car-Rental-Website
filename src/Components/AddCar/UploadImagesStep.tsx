import { useRef, useState, useEffect } from "react";
import { Button } from "../ui/button.tsx";
import { AspectRatio } from "../ui/aspect-ratio.tsx";
import { toast } from 'sonner';
import { useUploadMultiMutation } from "../../redux/api/common.ts";

interface UploadImagesStepProps {
    values: any;
    setFieldValue: (field: string, value: any) => void;
}

const UploadImagesStep = ({ values, setFieldValue }: UploadImagesStepProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFiles, setSelectedFiles] = useState<File[]>(values.selectedFiles || []);
    const [uploadMulti, { isLoading }] = useUploadMultiMutation();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const validFiles: File[] = [];
        Array.from(files).forEach((file) => {
            if (!file.type.startsWith('image/')) {
                toast.error("Invalid file type", { description: "Only image files allowed." });
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                toast.error("File too large", { description: "Image should be < 5MB." });
                return;
            }
            validFiles.push(file);
        });

        if (validFiles.length > 0) {
            const updated = [...selectedFiles, ...validFiles];
            setSelectedFiles(updated);
        }

        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const uploadSelected = async () => {
        if (selectedFiles.length === 0) return;
        const formData = new FormData();
        selectedFiles.forEach((file) => formData.append("images", file));
        formData.append("folder", "car-rental");

        try {
            const result = await uploadMulti(formData).unwrap();
            const updatedImages = [...(values.images || []), ...result];
            setFieldValue("images", updatedImages);
            setSelectedFiles([]);
            if (!values.thumbnail && updatedImages.length > 0) {
                setFieldValue("thumbnail", updatedImages[0].url);
            }
            toast.success("Images uploaded successfully");
        } catch (err: any) {
            toast.error("Upload failed", { description: err?.data?.message || "Something went wrong." });
        }
    };

    const removeSelectedFile = (index: number) => {
        const updated = selectedFiles.filter((_, i) => i !== index);
        setSelectedFiles(updated);
    };

    const removeImage = (index: number) => {
        const currentImages = [...(values.images || [])];
        const removedImage = currentImages.splice(index, 1)[0];
        setFieldValue("images", currentImages);
        if (values.thumbnail == removedImage.url) {
            const newThumb = currentImages.length > 0 ? currentImages[0].url : null;
            setFieldValue("thumbnail", newThumb);
        }
    };

    const setAsThumbnail = (index: number) => {
        setFieldValue("thumbnail", values.images[index].url);
        toast.success("Thumbnail Updated", { description: "This image will be used as the main image for your listing." });
    };

    useEffect(() => {
        return () => {
            selectedFiles.forEach(file => URL.revokeObjectURL((file as any).preview));
        };
    }, [selectedFiles]);

    return (
        <div>
            <div className="mb-6">
                <div className="flex items-center justify-center w-full">
                    <label
                        htmlFor="car-images"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            {/* SVG icon omitted for brevity */}
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

            {selectedFiles.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-lg font-medium mb-2">New Images ({selectedFiles.length})</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {selectedFiles.map((file, index) => {
                            const preview = URL.createObjectURL(file);
                            return (
                                <div key={index} className="relative rounded-lg overflow-hidden">
                                    <AspectRatio ratio={4 / 3}>
                                        <img src={preview} alt={`Preview ${index + 1}`} className="w-full h-full object-cover" />
                                    </AspectRatio>
                                    <div className="absolute inset-0 bg-black/35 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                        <Button onClick={() => removeSelectedFile(index)} size="sm" type="button" className="bg-red-500 hover:bg-red-500/90 text-white">
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-between items-center mt-3">
                        <p className="text-sm text-gray-600">They will be uploaded when you click Upload.</p>
                        <Button type="button" onClick={uploadSelected} className="btn3" disabled={isLoading}>
                            {isLoading ? 'Uploading...' : 'Upload'}
                        </Button>
                    </div>
                </div>
            )}

            {(values.images || []).length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-medium mb-4">Uploaded Images</h3>
                    <p className="text-sm text-gray-500 mb-4">Click "Set as Main" or Remove.</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {(values.images || []).map((image: string, index: number) => (
                            <div key={index} className={`relative rounded-lg overflow-hidden ${values.thumbnail === image.url ? 'ring-2 ring-primary' : ''}`}>
                                <AspectRatio ratio={4 / 3}>
                                    <img src={image.url} alt={`Car image ${index + 1}`} className="w-full h-full object-cover" />
                                </AspectRatio>
                                <div className="absolute inset-0 bg-black/35 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                                    <div className="flex gap-2">
                                        {values.thumbnail !== image.url && (
                                            <Button onClick={() => setAsThumbnail(index)} size="sm" type="button" className="bg-white hover:bg-white/80">
                                                Set as Main
                                            </Button>
                                        )}
                                        <Button onClick={() => removeImage(index)} size="sm" type="button" className="bg-red-500 hover:bg-red-500/90 text-white">
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                                {values.thumbnail === image.url && (
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
                <p>* Please upload clear, high-quality images of your car from different angles.</p>
            </div>
        </div>
    );
};

export default UploadImagesStep;
