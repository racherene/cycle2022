import axios from "axios";

const baseUrlDistance = "";
const baseUrlCarbon = "https://beta3.api.climatiq.io/custom-activities/estimate";
const bearerToken = process.env.REACT_APP_CLIMATIQ_API_KEY;


const distanceAPI = {

};

const carbonAPI = {
    getCarEmissions: () => {
        const body = {
            "custom_activity": {
                label: "EMISSION_BY_CAR_PER_KM",
            },
            "parameters": {
                distance: 100,
                distance_unit: "km",
            },
        };

        const results = axios.post(baseUrlCarbon, JSON.stringify(body), {
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
