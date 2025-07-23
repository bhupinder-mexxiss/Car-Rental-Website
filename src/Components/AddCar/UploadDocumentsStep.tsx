import React, { useState } from "react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useUploadMultiMutation } from "../../redux/api/common";
import { useFormikContext } from "formik";

const isImageFile = (file: File | null) =>
    file?.type.startsWith("image/");

const isDocumentFile = (url: string) => {
    return /\.(pdf|docx|xlsx)$/i.test(url);
};
type DocumentType = {
    url: string;
};

type FormValues = {
    documents: {
        carRegistration?: DocumentType | null;
        insuranceDocument?: DocumentType | null;
        [key: string]: DocumentType | null | undefined;
    };
};

const UploadDocumentsStep = () => {
    const { values, setFieldValue, errors, touched } = useFormikContext<FormValues>()
    const [previews, setPreviews] = useState<{ [key: string]: string }>({});
    const [files, setFiles] = useState<{ [key: string]: File | null }>({});
    const [uploadDocument] = useUploadMultiMutation()

    console.log("Documents: ", values);
    

    const fileTypes = {
        carRegistration: "Car Registration",
        insuranceDocument: "Insurance Document",
    };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, docType: keyof typeof fileTypes) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            toast.error("File too large", {
                description: "Document size should be less than 5MB.",
            });
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviews((prev) => ({ ...prev, [docType]: reader.result as string }));
            setFiles((prev) => ({ ...prev, [docType]: file }));
        };
        reader.readAsDataURL(file);

        e.target.value = "";
    };

    const handleUpload = async (docType: keyof typeof fileTypes) => {
        const file = files[docType];
        if (!file) return;

        const formData = new FormData();
        formData.append("images", file);
        formData.append("folder", "car-rental/documents");

        await uploadDocument(formData).unwrap().then(async (res) => {
            setFieldValue(`documents.${docType}`, res[0])
        })
    };

    const removeDocument = (docType: keyof typeof fileTypes) => {
        setFieldValue(`documents.${docType}`, null);
        setPreviews((prev) => ({ ...prev, [docType]: "" }));
        setFiles((prev) => ({ ...prev, [docType]: null }));
        toast("Removed", {
            description: `Your ${fileTypes[docType]} has been removed.`,
        });
    };

    return (
        <div className="space-y-8">
            {(Object.keys(fileTypes) as Array<keyof typeof fileTypes>).map((docType) => {
                const documentValue = values.documents?.[docType];
                return (
                    <div key={docType} className="space-y-2">
                        <Label htmlFor={docType}>{fileTypes[docType]} *</Label>
                        {documentValue ? (
                            <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-md border border-gray-200">
                                {isDocumentFile(values.documents[docType]?.url ?? "") ? (
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <p className="text-sm text-gray-700">
                                            {decodeURIComponent(values.documents[docType]?.url.split("/").pop() || "")}
                                        </p>
                                    </div>
                                ) : (
                                    <img src={values.documents[docType]?.url} alt="Uploaded" className="h-20 rounded object-contain" />
                                )}
                                {/* <div className="flex-1 text-sm text-gray-700 break-all">{values[docType].url}</div> */}
                                <Button type="button" size="sm" className="btn2 !bg-transparent hover:text-red-600 hover:border-red-600" onClick={() => removeDocument(docType)}>Remove</Button>
                            </div>
                        ) : previews[docType] ? (
                            <div className="flex flex-col gap-2 bg-gray-50 p-4 rounded-md border border-gray-200">
                                {isImageFile(files[docType]) ? (
                                    <img src={previews[docType]} alt="Preview" className="h-20 rounded object-contain" />
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        <p className="text-sm text-gray-700">{files[docType]?.name}</p>
                                    </div>
                                )}
                                <div className="flex gap-2">
                                    <Button type="button" size="sm" className="text-white cursor-pointer" onClick={() => handleUpload(docType)}>Upload</Button>
                                    <Button type="button" size="sm" className="btn2 !bg-transparent hover:text-red-600 hover:border-red-600" onClick={() => removeDocument(docType)}>Cancel</Button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="flex items-center justify-center w-full mb-1">
                                    <label
                                        htmlFor={docType}
                                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                                    >
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mb-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500">PDF, PNG or JPG (MAX. 5MB)</p>
                                        </div>
                                        <input
                                            id={docType}
                                            type="file"
                                            className="hidden"
                                            accept=".pdf,.png,.jpg,.jpeg"
                                            onChange={(e) => handleFileChange(e, docType)}
                                        />
                                    </label>
                                </div>
                            </div>
                        )}
                        {errors.documents?.[docType] &&
                            touched.documents?.[docType] &&
                            !values.documents?.[docType]?.url && (
                                <p className="text-xs text-red-500">{errors.documents[docType]}</p>
                            )}

                        <p className="text-xs text-gray-500">
                            Select & Upload a clear, legible scan or photo of your {fileTypes[docType].toLowerCase()}.
                        </p>
                    </div>
                )
            })}

            <div className="bg-amber-50 p-4 rounded-md">
                <h3 className="text-amber-700 font-medium mb-1">Document Verification</h3>
                <p className="text-[13px]">
                    All documents will be securely stored and verified by our team. This verification process may take 1-2 business days. Your car listing will be published after verification is complete.
                </p>
            </div>

            <div className="text-sm text-gray-500 mt-6">
                <p>These documents are required to verify your identity and vehicle ownership. We take your privacy seriously and protect your documents according to our privacy policy.</p>
            </div>
        </div>
    );
};

export default UploadDocumentsStep;
