import http from 'k6/http';
import { check, sleep } from 'k6';
import { signInMutation, personQuery, versionQuery } from './queries/queries.js';

export let options = {
    vus: 1, // Number of virtual users
    //duration: '10s', // Duration of the test
};

// Read the base URL from the environment variables
const BASE_URL = __ENV.BASE_URL;

if (!BASE_URL) {
    throw new Error('BASE_URL environment variable is not set');
}

// Function to perform the "Once Only" operation
export function setup() {
    // signIn Mutation
    let signInRes = http.post(`${BASE_URL}/graphql`, JSON.stringify({ query: signInMutation }), {
        headers: { 'Content-Type': 'application/json' },
    });

    console.log('signIn response:', signInRes.body);

    let token;
    check(signInRes, { 'signIn status is 200': (r) => r.status === 200 });
    if (signInRes.status === 200) {
        let body = JSON.parse(signInRes.body);
        if (body.data.signIn.succeeded) {
            token = body.data.signIn.token;
        } else {
            console.error('signIn failed');
        }
    } else {
        console.error('signIn request failed with status', signInRes.status);
    }

    // If signIn succeeded, perform the second query
    let programId;
    if (token) {
        let personRes = http.post(`${BASE_URL}/graphql`, JSON.stringify({ query: personQuery }), {
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        });

        console.log('person query response:', personRes.body);

        check(personRes, { 'person query status is 200': (r) => r.status === 200 });
        if (personRes.status === 200) {
            let body = JSON.parse(personRes.body);
            let programs = body.data.person.learner.programs;
            for (let program of programs) {
                if (program.name === 'Level III CFA August 2024') {
                    programId = program.programId;
                    console.log('programId:', programId);
                    break;
                }
            }
        } else {
            console.error('person query request failed with status', personRes.status);
        }
    }

    return { token: token, programId: programId }; // Return the token and programId to be used in the default function
}

export default function (data) {
    // Use the token and programId returned from setup
    let token = data.token;
    let programId = data.programId;

    // Validate the received data
    if (!token || !programId) {
        console.error('Missing token or programId');
        return;
    }

    // Run the curl command equivalent using the token from setup
    let curlRes = http.post(`${BASE_URL}/graphql`, JSON.stringify([{ query: versionQuery }]), {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    console.log('curl query response:', curlRes.body);

    check(curlRes, { 'curl query status is 200': (r) => r.status === 200 });

    sleep(1); // Wait for 1 second before the next iteration
}
