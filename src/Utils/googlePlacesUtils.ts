import { Loader } from '@googlemaps/js-api-loader';

const GOOGLE_MAP_API_KEY = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

let loaderInstance: Loader | null = null;

export const loadGoogleMapsAPI = async (): Promise<void> => {
    if (!GOOGLE_MAP_API_KEY) throw new Error('Google Maps API key is missing');

    if (!loaderInstance) {
        loaderInstance = new Loader({
            apiKey: GOOGLE_MAP_API_KEY,
            libraries: ['places'],
        });
    }

    await loaderInstance.load();
};

/**
 * Initialize Google Places Autocomplete.
 * @param inputElement The input element to attach autocomplete to.
 * @param options Autocomplete options.
 */
export const initializeAutocomplete = (
    inputElement: HTMLInputElement,
    options: google.maps.places.AutocompleteOptions
): google.maps.places.Autocomplete => {
    return new google.maps.places.Autocomplete(inputElement, options);
};

/**
 * Fetch place details by place ID.
 * @param placeId The place ID to fetch details for.
 */
export const getPlaceDetails = async (
    placeId: string
): Promise<google.maps.places.PlaceResult | null> => {
    return new Promise((resolve) => {
        const service = new google.maps.places.PlacesService(document.createElement('div'));
        service.getDetails({ placeId }, (result, status) => {
            resolve(status === google.maps.places.PlacesServiceStatus.OK ? result : null);
        });
    });
};
