import axios from "axios";

const baseUrlDistance = "";
const baseUrlCarbon = "https://beta3.api.climatiq.io/custom-activities/estimate";
const bearerToken = process.env.REACT_APP_CLIMATIQ_API_KEY;

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


const distanceAPI = {

};

const carbonAPI = {
    getCarEmissions: async (distance: number, units: string): Promise<IEmissionsResponse> => {
        const body = createBody(Labels.Car, distance, units);

        const { data } = await axios.post(
            baseUrlCarbon, 
            JSON.stringify(body), {
                headers: {
                    "Authorization": bearerToken,
                },
            }
        );

        return data as IEmissionsResponse;
    },
    getBusEmissions: async (distance: number, units: string): Promise<IEmissionsResponse> => {
        const body = createBody(Labels.Bus, distance, units);

        const { data } = await axios.post(
            baseUrlCarbon, 
            JSON.stringify(body), {
                headers: {
                    "Authorization": bearerToken,
                },
            }
        );

        return data as IEmissionsResponse;
    },
    getBicycleEmissions: async (distance: number, units: string): Promise<IEmissionsResponse> => {
        const body = createBody(Labels.Bicycle, distance, units);

        const { data } = await axios.post(
            baseUrlCarbon, 
            JSON.stringify(body), {
                headers: {
                    "Authorization": bearerToken,
                },
            }
        );

        return data as IEmissionsResponse;
    },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    carbonAPI,
    distanceAPI,
};
