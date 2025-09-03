
export interface IBuyEnquiry {
    enquiryId: string;
    buyer: {
        name: string;
        email: string;
        phone?: string;
    },
    car: {
        title: string;
        price: number;
    };
    message: string;
    offeredPrice?: number;
    status: "new" | "negotiating" | "completed" | "closed";
    createdAt: string | Date;
    responses: Array<{
        id: string;
        message: string;
        sender: "buyer" | "seller";
        timestamp: string;
        offeredPrice?: number;
    }>;
    finalPrice?: number;
}