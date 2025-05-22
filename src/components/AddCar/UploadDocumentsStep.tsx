import { Label } from "../../components/ui/label";
import { Button } from "../../components/ui/button";
import { toast } from 'sonner';

interface UploadDocumentsStepProps {
    values: any;
    setFieldValue: (field: string, value: any) => void;
}

const UploadDocumentsStep = ({ values, setFieldValue }: UploadDocumentsStepProps) => {
    const fileTypes = {
        driverLicense: "Driver's License",
        carRegistration: "Car Registration",
        insuranceDocument: "Insurance Document",
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, docType: keyof typeof fileTypes) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Check file size (limit to 5MB)
        if (file.size > 5 * 1024 * 1024) {
            toast.error(("File too large"), {
                description: "Document size should be less than 5MB.",
            });
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setFieldValue(docType, {
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    data: reader.result,
                });

                toast(("Document Uploaded"), {
                    description: `Your ${fileTypes[docType]} has been uploaded successfully.`,
                });
            }
        };
        reader.readAsDataURL(file);

        // Reset input
        e.target.value = '';
    };

    const removeDocument = (docType: keyof typeof fileTypes) => {
        setFieldValue(docType, null);

        toast(("Document Removed"), {
            description: `Your ${fileTypes[docType]} has been removed.`,
        });
    };

    return (
        <div>
            {/* <h2 className="text-xl font-semibold mb-6">Upload Required Documents</h2> */}

            <div className="space-y-8">
                {(Object.keys(fileTypes) as Array<keyof typeof fileTypes>).map((docType) => (
                    <div key={docType} className="space-y-2">
                        <Label htmlFor={docType}>{fileTypes[docType]}</Label>

                        {values[docType] ? (
                            <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-md border border-gray-200">
                                <div className="p-2 bg-blue-100 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        {values[docType].name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {(values[docType].size / 1024).toFixed(2)} KB
                                    </p>
                                </div>

                                <Button
                                    onClick={() => removeDocument(docType)}
                                    variant="destructive"
                                    size="sm"
                                >
                                    Remove
                                </Button>
                            </div>
                        ) : (
                            <div className="flex items-center justify-center w-full">
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
                                        onChange={(e) => handleFileChange(e, docType)}
                                        accept=".pdf,.png,.jpg,.jpeg"
                                    />
                                </label>
                            </div>
                        )}

                        <p className="text-xs text-gray-500">
                            Upload a clear, legible scan or photo of your {fileTypes[docType].toLowerCase()}.
                        </p>
                    </div>
                ))}

                <div className="bg-amber-50 p-4 rounded-md">
                    <h3 className="text-amber-700 font-medium mb-1">Document Verification</h3>
                    <p className="text-[13px]">
                        All documents will be securely stored and verified by our team. This verification process may take 1-2 business days. Your car listing will be published after verification is complete.
                    </p>
                </div>
            </div>

            <div className="text-sm text-gray-500 mt-6">
                <p>These documents are required to verify your identity and vehicle ownership. We take your privacy seriously and protect your documents according to our privacy policy.</p>
            </div>
        </div>
    );
};

export default UploadDocumentsStep;