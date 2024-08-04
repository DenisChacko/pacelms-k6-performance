export const signInMutation = `
mutation {
    signIn(requestor: LMS_BASIC, username: "mobiledemo1", password: "Cow1234!", createSession: true) {
        succeeded
        token
        refreshToken
        failed {
            usedAttempts
            allowedAttempts
            withLockout
            lockoutSeconds
        }
    }
}`;

export const personQuery = `
query {
    person {
        firstName
        personID
        learner {
            username
            programs {
                name
                programId
                headers {
                    details {
                        name
                        enrollmentDetailId
                    }
                }
            }
        }
    }
}`;

export const versionQuery = `
query Version {
    about {
        version
    }
}`;
