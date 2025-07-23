import React from 'react';
import { Modal, ModalBody } from 'flowbite-react';
import { Close } from '@mui/icons-material';

interface ResponseModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedEnquiry: {
        requestType: "enquiry";
        buyerName: string;
        enquiryDate: string;
        message: string;
        offeredPrice?: number;
        responses: Array<{
            id: string;
            sender: string;
            timestamp: string;
            message: string;
            offer?: number;
        }>;
    } | null;
    responseMessage: string;
    setResponseMessage: (value: string) => void;
    counterOffer: string;
    setCounterOffer: (value: string) => void;
    handleSendResponse: () => void;
}

const ResponseModal: React.FC<ResponseModalProps> = ({
    isOpen,
    onClose,
    selectedEnquiry,
    responseMessage,
    setResponseMessage,
    counterOffer,
    setCounterOffer,
    handleSendResponse
}) => {
    return (
        <div>
            <Modal show={isOpen} onClose={onClose}>
                <ModalBody className='p-0'>

                    <div className="px-6 py-3 flex justify-between items-center">
                        <h4 className='text-lg font-medium'>Chat with {selectedEnquiry?.buyerName}</h4>
                        <button onClick={onClose} className='w-7 h-7 rounded hover:bg-gray-200/80 cursor-pointer'><Close className='!text-lg' /></button>
                    </div>
                    {selectedEnquiry && (
                        <div className="space-y-6 px-6 py-5 border-t border-border">
                            {/* Original Request */}
                            <div className="p-4 border border-border rounded-lg">
                                <div className="flex items-center mb-2">
                                    <span className="font-medium">{selectedEnquiry.buyerName}</span>
                                    <span className="text-sm text-gray-500 ml-2">{selectedEnquiry.enquiryDate}</span>
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
                                                        {response.sender === "seller" ? "You" : selectedEnquiry.buyerName}
                                                    </span>
                                                    <span className="text-xs text-gray-500 ml-2">{response.timestamp}</span>
                                                </div>
                                                <p className="text-sm text-gray-700">{response.message}</p>
                                                {response.offer && (
                                                    <div className="mt-2 text-sm">
                                                        <span className="font-medium">Offer: </span>
                                                        <span className="text-[#f07e2c] font-bold">${response.offer.toLocaleString()}</span>
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
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="response" className="block text-sm font-medium text-gray-700">Message</label>
                                        <textarea
                                            id="response"
                                            placeholder="Type your response..."
                                            value={responseMessage}
                                            onChange={(e) => setResponseMessage(e.target.value)}
                                            rows={3}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="counter-offer" className="block text-sm font-medium text-gray-700">Counter Offer ($)</label>
                                            <input
                                                id="counter-offer"
                                                type="number"
                                                placeholder="Enter counter offer"
                                                value={counterOffer}
                                                onChange={(e) => setCounterOffer(e.target.value)}
                                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div className="flex items-end">
                                            <button
                                                onClick={handleSendResponse}
                                                disabled={!responseMessage}
                                                className="w-full bg-[#f07e2c] text-white py-2 px-4 rounded hover:bg-[#e06d1f]"
                                            >
                                                Send Response
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </ModalBody>
            </Modal>
        </div>
    );
};

export default ResponseModal;