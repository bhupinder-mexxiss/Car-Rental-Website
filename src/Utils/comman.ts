import { format } from "date-fns";

interface Address {
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
}

export const formatAddress = (address?: Address): string => {
    if (!address) return "-";
    const parts = [
        address.address1,
        address.address2,
        address.city,
        address.state,
        address.country,
        address.postalCode
    ];
    return parts.filter(Boolean).join(', ') || "-";
};

export const formatDateRange = (dates: Date[] | undefined) => {
    if (!dates || dates.length !== 2) return "Any Week";

    const [start, end] = dates;
    const startMonth = format(start, "MMM");
    const endMonth = format(end, "MMM");
    const startYear = format(start, "yyyy");
    const endYear = format(end, "yyyy");

    const currentYear = new Date().getFullYear();

    // Case 1: Same month & year
    if (startMonth === endMonth && startYear === endYear) {
        return startYear !== String(currentYear)
            ? `${startMonth} ${format(start, "d")}-${format(end, "d")}, ${startYear}`
            : `${format(start, "d")}-${format(end, "d")} ${startMonth}`;
    }

    // Case 2: Different month but same year
    if (startYear === endYear) {
        return startYear !== String(currentYear)
            ? `${format(start, "d MMM")} - ${format(end, "d MMM")}, ${startYear}`
            : `${format(start, "d MMM")} - ${format(end, "d MMM")}`;
    }

    // Case 3: Different year
    return `${format(start, "d MMM yyyy")} - ${format(end, "d MMM yyyy")}`;
};