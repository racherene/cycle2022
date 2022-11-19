import axios from "axios";

const baseUrlDistance = "";
const baseUrlCarbon = "https://beta3.api.climatiq.io/custom-activities/estimate";
const bearerToken = process.env.REACT_APP_CLIMATIQ_API_KEY;

interface IEmissionsRequest {
    custom_activity: {
        label: string;
    };
    parameters: {
        distance: number;
        distance_unit: string;
    };
}

const createBody = (distance: number, units: string) => {
    return {
        custom_activity: {
            label: "EMISSION_BY_CAR_PER_KM",
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
    getCarEmissions: async (distance: number, units: string) => {
        const body = createBody(distance, units);

        const results = await axios.post(baseUrlCarbon, JSON.stringify(body), {
            headers: {
                "Authorization": bearerToken,
            },
        });
        return results;
    },
    getBusEmissions: () => {
        // stub
    },
    getBicycleEmissions: () => {
        // stub
    },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    carbonAPI,
    distanceAPI,
};