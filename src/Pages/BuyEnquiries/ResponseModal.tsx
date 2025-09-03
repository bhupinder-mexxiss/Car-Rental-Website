import React from 'react';
import { Modal, ModalBody } from 'flowbite-react';
import { Close } from '@mui/icons-material';
import { enquiryApi, useRespondToEnquiryMutation } from '../../redux/api/Enquiry';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { FormikInput } from '../../Components/CommanFields/FormikInput';
import { format } from 'date-fns';
import { IBuyEnquiry } from '../../Types/IBuyEnquiry';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';

interface ResponseModalProps {
    isOpen: boolean;
    onClose: () => void;
    setSelectedEnquiry: React.Dispatch<React.SetStateAction<IBuyEnquiry | null>>;
    selectedEnquiry: IBuyEnquiry | null;
}

const ResponseModal: React.FC<ResponseModalProps> = ({
    isOpen,
    onClose,
    setSelectedEnquiry,
    selectedEnquiry,
}) => {
    const dispatch = useDispatch();
    const [respondToEnquiry, { isLoading }] = useRespondToEnquiryMutation()
    return (
        <div>
            <Modal show={isOpen} onClose={onClose}>
                <ModalBody className='p-0'>

                    <div className="px-6 py-3 flex justify-between items-center">
                        <h4 className='text-lg font-medium'>Chat with {selectedEnquiry?.buyer?.name}</h4>
                        <button onClick={onClose} className='w-7 h-7 rounded hover:bg-gray-200/80 cursor-pointer'><Close className='!text-lg' /></button>
                    </div>
                    {selectedEnquiry && (
                        <div className="space-y-6 px-6 py-5 border-t border-border">
                            {/* Original Request */}
                            <div className="p-4 border border-border rounded-lg">
                                <div className="flex items-center mb-2">
                                    <span className="font-medium">{selectedEnquiry?.buyer?.name}</span>
                                    <span className="text-sm text-gray-500 ml-2">{format(new Date(selectedEnquiry?.createdAt), 'MMMM dd, yyyy')}</span>
                                </div>
                                <p className="text-gray-700">{selectedEnquiry.message}</p>
                                {selectedEnquiry.offeredPrice && (
                                    <div className="mt-2 text-sm">
                                        <span className="font-medium">Offered: </span>
                                        <span className="text-[#f07e2c] font-bold">${selectedEnquiry.offeredPrice.toLocaleString()}</span>
                                    </div>
                                )}
                            </div>

                            {/* Chat History */}
                            {selectedEnquiry.responses && selectedEnquiry.responses.length > 0 && (
                                <div className="p-4 border border-border rounded-lg">
                                    <div className="text-lg font-medium mb-4">Chat History</div>
                                    <div className="space-y-3 max-h-60 overflow-y-auto">
                                        {selectedEnquiry.responses.map((response) => (
                                            <div key={response.id} className={`p-3 rounded-lg ${response.sender === "seller"
                                                ? "bg-[#f07e2c]/10 ml-8"
                                                : "bg-gray-50 mr-8"
                                                }`}>
                                                <div className="flex items-center mb-1">
                                                    <span className="font-medium text-sm">
                                                        {response?.sender === "seller" ? "You" : selectedEnquiry?.buyer?.name}
                                                    </span>
                                                    <span className="text-xs text-gray-500 ml-2">{format(new Date(response?.timestamp), 'dd-MM-yyyy hh:mm a')}</span>
                                                </div>
                                                <p className="text-sm text-gray-700">{response?.message}</p>
                                                {response?.offeredPrice && (
                                                    <div className="mt-2 text-sm">
                                                        <span className="font-medium">Offer: </span>
                                                        <span className="text-[#f07e2c] font-bold">${response.offeredPrice.toLocaleString()}</span>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Response Form */}
                            <div className="p-4 border border-border rounded-lg">
                                <div className="text-lg font-medium mb-4">Send Response</div>
                                <Formik
                                    initialValues={{
                                        enquiryId: selectedEnquiry.enquiryId,
                                        sender: "seller",
                                        message: "",
                                        offeredPrice: undefined
                                    }}
                                    validationSchema={Yup.object({
                                        message: Yup.string().required("Message is required"),
                                        offeredPrice: Yup.number().min(0, "Invalid price")
                                    })}
                                    enableReinitialize
                                    onSubmit={async (values, { resetForm }) => {
                                        try {
                                            const res = await respondToEnquiry(values).unwrap();
                                            toast.success("Response sent successfully!");
                                            setSelectedEnquiry(res)
                                            const patch = dispatch(
                                                enquiryApi.util.updateQueryData(
                                                    'getEnquiries',
                                                    { type: 'seller' },
                                                    (draft: any) => {
                                                        const enquiry = draft.find(
                                                            (item) => item.enquiryId === selectedEnquiry.enquiryId
                                                        );
                                                        if (enquiry) {
                                                            Object.assign(enquiry, res);
                                                        }
                                                    }
                                                )
                                            );
                                            console.log(patch);

                                            resetForm();
                                        } catch (error) {
                                            console.error("Error sending response:", error);
                                        }
                                    }}
                                >
                                    {() => (
                                        <Form>
                                            <div className="space-y-4">
                                                <div>
                                                    <FormikInput type='textarea' name="message" placeholder="Type your response..." />
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div>
                                                        <FormikInput name="offeredPrice" type="number" placeholder="Enter counter offer" />
                                                    </div>
                                                    <div className="flex items-end">
                                                        <button
                                                            type="submit"
                                                            disabled={isLoading}
                                                            className="w-full bg-[#f07e2c] text-white py-2 px-4 rounded hover:bg-[#e06d1f] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                                        >
                                                            {isLoading ? "Sending..." : "Send Response"}
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    )}
                </ModalBody>
            </Modal>
        </div>
    );
};

export default ResponseModal;