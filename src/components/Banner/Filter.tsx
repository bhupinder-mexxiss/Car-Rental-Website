import { Close, PlaceOutlined, PlaceRounded, Remove, Search } from '@mui/icons-material';
import { useEffect, useMemo, useRef, useState } from 'react';
import { loadGoogleMapsAPI, getPlaceDetails } from '../../Utils/googlePlacesUtils';
import { useFilterContext } from '../../Context/FilterContext';
import { toast } from 'sonner';
import { useAreaLocation } from '../../Context/LocationContext';
import { useLocation, useNavigate } from 'react-router';

const emirates = ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Fujairah", "Ras Al Khaimah", "Umm Al Quwain"];

const Filter = () => {
    const location = useLocation()
    const navigate = useNavigate();
    const { setAreaLocation } = useAreaLocation()
    const { filterValues, setFilterValues } = useFilterContext();
    const locationRef = useRef<HTMLInputElement | null>(null);
    const [locationInput, setLocationInput] = useState<string>(''); // Renamed state variable
    const [startDate, setStartDate] = useState(filterValues?.startDate || '');
    const [endDate, setEndDate] = useState(filterValues?.endDate || '');
    const [suggestions, setSuggestions] = useState<google.maps.places.AutocompletePrediction[]>([]);
    const [loading, setLoading] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const isHome = useMemo(() => {
        return location.pathname === '/';
    }, [location.pathname]);

    useEffect(() => {
        if (!locationRef.current) return;

        loadGoogleMapsAPI().then(() => {
            if (!locationRef.current) return;

            const handleInputChange = (input: string) => {
                if (!input.trim()) {
                    setSuggestions([]);
                    return;
                }

                setLoading(true);
                const autocompleteService = new google.maps.places.AutocompleteService();
                autocompleteService.getPlacePredictions(
                    {
                        input,
                        componentRestrictions: { country: 'ae' },
                        types: ['geocode'],
                    },
                    (predictions, status) => {
                        setLoading(false);
                        if (status === google.maps.places.PlacesServiceStatus.OK) {
                            setSuggestions(predictions || []);
                        } else {
                            setSuggestions([]);
                        }
                    }
                );
            };

            const handleInputChangeWrapper = (e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;
                setLocationInput(value);
                handleInputChange(value);
            };

            locationRef.current.addEventListener('input', (e) => {
                handleInputChangeWrapper(e as unknown as React.ChangeEvent<HTMLInputElement>);
            });
        });
    }, []);
    // Update location state and filter context
    const handleSuggestionClick = async (suggestion: google.maps.places.AutocompletePrediction) => {
        const details = await getPlaceDetails(suggestion.place_id);
        const fullAddress = details?.formatted_address || suggestion.description;

        const components = details?.address_components || [];
        const areaComponent = components.find((c) =>
            c.types.includes("sublocality") || c.types.includes("neighborhood") || c.types.includes("locality")
        );

        const area = areaComponent?.long_name || '';

        setLocationInput(area || fullAddress); // Show area in input
        setSuggestions([]);
    };

    const handleEmirateClick = (emirate: string) => {
        setLocationInput(emirate);
        setSuggestions([]);
    };

    const handleSearch = () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time to midnight for accurate comparison

        const parsedStartDate = startDate ? new Date(String(startDate)) : null;
        const parsedEndDate = endDate ? new Date(String(endDate)) : null;

        if (parsedStartDate && parsedStartDate < today) {
            toast.error('Start date cannot be in the past');
            return;
        }

        if (parsedEndDate && parsedEndDate < today) {
            toast.error('End date cannot be in the past');
            return;
        }

        if (parsedStartDate && parsedEndDate && parsedStartDate > parsedEndDate) {
            toast.error('Start date cannot be after end date');
            return;
        }

        // Update context values
        setFilterValues((prev) => ({
            ...prev,
            startDate: startDate ? String(startDate) : undefined,
            endDate: endDate ? String(endDate) : undefined,
            area: locationInput ? [locationInput] : undefined,
        }));

        setAreaLocation({
            area: locationInput,
            emirate: locationInput,
            country: 'United Arab Emirates',
            full: locationInput,
        });

        // Navigate to /rent-car with query parameters
        const queryParams = new URLSearchParams({
            startDate: startDate ? String(startDate) : '',
            endDate: endDate ? String(endDate) : '',
            location: locationInput || '',
        }).toString();

        navigate(`/rent-car?${queryParams}`);
    };

    return (
        <div className={`bg-white/80 border border-color1/15 rounded-xl w-full max-w-[800px] shadow-[0px_30px_60px_-15px_#17172f2e] backdrop-blur-xs relative ${isHome ? 'py-5 h-24' : 'py-2 mx-auto'}`}>
            <div className="flex items-center h-full">
                {/* Location */}
                <div className='w-1/2'>
                    <div className='border-r-2 border-border px-4 relative'>
                        <label className={`font-semibold text-color1 ${isHome ? 'text-lg' : ''}`}>Location</label>
                        <div className='relative mt-1'>
                            <input
                                type="text"
                                ref={locationRef}
                                className='p-0 w-full pr-8 border-none focus:ring-0 bg-transparent placeholder:text-color2 text-color1'
                                placeholder='Select your City'
                                value={locationInput}
                                onChange={(e) => setLocationInput(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                            />
                            {locationInput ? (
                                <Close className='!text-lg text- absolute right-1 top-1/2 -translate-y-1/2' onClick={() => {
                                    setLocationInput('');
                                    setSuggestions([]);
                                }} />
                            ) : (
                                <PlaceRounded className='!text-lg text-primary absolute right-1 top-1/2 -translate-y-1/2' />
                            )}
                            {loading && isFocused && <div className="absolute right-10 top-1/2 -translate-y-1/2 text-sm text-gray-500">Loading...</div>}
                            {(isFocused && (suggestions.length > 0 || emirates.length > 0)) && (
                                <ul className="absolute w-full bg-white shadow z-[9999] rounded border border-border mt-1 max-h-[210px] overflow-auto">
                                    {suggestions.length > 0 ? (
                                        suggestions.map((s: google.maps.places.AutocompletePrediction) => (
                                            <li
                                                key={s.place_id}
                                                onMouseDown={(e) => e.preventDefault()} // Prevent input blur
                                                onClick={() => {
                                                    handleSuggestionClick(s);
                                                    setIsFocused(false); // Hide suggestions after selection
                                                }}
                                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm flex items-start gap-1"
                                            >
                                                <PlaceOutlined className='!text-base pt-0.5' />  {s.description}
                                            </li>
                                        ))
                                    ) : (
                                        emirates.map((emirate) => (
                                            <li
                                                key={emirate}
                                                onMouseDown={(e) => e.preventDefault()} // Prevent input blur
                                                onClick={() => {
                                                    handleEmirateClick(emirate);
                                                    setIsFocused(false); // Hide suggestions after selection
                                                }}
                                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                            >
                                                {emirate}
                                            </li>
                                        ))
                                    )}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                {/* Date */}
                <div className='w-1/2'>
                    <div className='px-4'>
                        <label className={`font-semibold text-color1 ${isHome ? 'text-lg' : ''}`}>Date</label>
                        <div className='flex items-center gap-2'>
                            <input
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className='p-0 w-full border-none focus:ring-0 bg-transparent placeholder:text-color2 text-color1'
                            />
                            <span><Remove /></span>
                            <input
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className='p-0 w-full border-none focus:ring-0 bg-transparent placeholder:text-color2 text-color1'
                            />
                        </div>
                    </div>
                </div>

                {/* Search Button */}
                <div className='px-4'>
                    <button
                        className='btn1 h-full rounded-2xl'
                        onClick={handleSearch} // Trigger search on click
                    >
                        <Search />
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Filter;
