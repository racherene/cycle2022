import axios from "axios";

const baseUrlCarbon = "https://beta3.api.climatiq.io/custom-activities/estimate";
const bearerToken = process.env.REACT_APP_CLIMATIQ_API_KEY;

// Example usage:
/*
const callAPI = async () => {
    const results = await carbonAPI.getCarEmissions(100, "km");
    console.log(results);
}
*/

// custom activity ID aliases that were set on Climatiq API for convenience
enum Labels {
    Car = "EMISSION_BY_CAR_PER_KM",
    Bicycle = "EMISSION_BY_BICYCLE_PER_KM",
    Bus = "EMISSION_BY_BUS_PER_KM",
};

interface IEmissionsRequest {
    custom_activity: {
        label: string;
    };
    parameters: {
        distance: number;
        distance_unit: string;
    };
}

export interface IEmissionsResponse {
    co2e: number;
    co2e_unit: string;
}

const createBody = (label: Labels, distance: number, units: string): IEmissionsRequest => {
    return {
        custom_activity: {
            label,
        },
        parameters: {
            distance,
            distance_unit: units,
        },
    } as IEmissionsRequest;
}

const fetchEmissionsData = async (label: Labels, distance: number, units: string): Promise<IEmissionsResponse> => {
    const body = createBody(label, distance, units);

    const { data } = await axios.post(
        baseUrlCarbon, 
        JSON.stringify(body), {
            headers: {
                "Authorization": bearerToken,
            },
        }
    );

    return data as IEmissionsResponse;
}

const carbonAPI = {
    getCarEmissions: async (distance: number, units: string): Promise<IEmissionsResponse> => {
        return await fetchEmissionsData(Labels.Car, distance, units);
    },
    getBusEmissions: async (distance: number, units: string): Promise<IEmissionsResponse> => {
        return await fetchEmissionsData(Labels.Bus, distance, units);
    },
    getBicycleEmissions: async (distance: number, units: string): Promise<IEmissionsResponse> => {
        return await fetchEmissionsData(Labels.Bicycle, distance, units);
    },
};

export default carbonAPI;
