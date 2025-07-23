import { createContext, useContext, useState } from "react";

export interface Location {
    area: string;
    emirate: string;
    country: string;
    full: string;
}

interface LocationContextType {
    areaLocation: Location;
    setAreaLocation: (loc: Location) => void;
}

const defaultLocation: Location = {
    area: "",
    emirate: "",
    country: "United Arab Emirates",
    full: "All Emirates, United Arab Emirates",
};

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
    const [areaLocation, setAreaLocationState] = useState<Location>(() => {
        const stored = sessionStorage.getItem("selectedLocation");
        try {
            return stored ? JSON.parse(stored) : defaultLocation;
        } catch {
            return defaultLocation;
        }
    });

    const setAreaLocation = (loc: Location) => {
        setAreaLocationState(loc);
        sessionStorage.setItem("selectedLocation", JSON.stringify(loc));
    };

    return (
        <LocationContext.Provider value={{ areaLocation, setAreaLocation }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useAreaLocation = () => {
    const context = useContext(LocationContext);
    if (!context) throw new Error("useAreaLocation must be used within LocationProvider");
    return context;
};