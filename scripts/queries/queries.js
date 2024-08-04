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

export const layoutQuery = `
query LAYOUT_QUERY($programId: String!) {
    session {
        ...FOOTER_FRAGMENT
        __typename
    }
    person {
        personID
        learner {
            ...NAVBAR_FRAGMENT
            __typename
        }
        __typename
    }
}

fragment NAVBAR_FRAGMENT on Learner {
    ...ACCOUNT_FRAGMENT
    programs {
        ...PROGRAM_ITEM_FRAGMENT
        __typename
    }
    logoutUrl
    displayAccountLink
    logoutLinkText
    __typename
}

fragment PROGRAM_ITEM_FRAGMENT on Program {
    programId
    productGroup
    productLevel
    dashboardVersion
    hasActivities
    isLibrary
    name
    url
    theme {
        logo
        __typename
    }
    __typename
}

fragment ACCOUNT_FRAGMENT on Learner {
    displayName
    __typename
}

fragment FOOTER_FRAGMENT on Session {
    jwt {
        serverAtEpoch
        __typename
    }
    __typename
}`;

export const eagerProgramHeadersQuery = `
query EAGER_PROGRAM_HEADERS_QUERY($programId: String!) {
    person {
        learner {
            programs(programId: $programId) {
                programId
                completionInstructions {
                    displayCompletionInstructionsAffirmation
                    __typename
                }
                productGroup
                hasActivities
                regulatoryDashboardVersion
                isLibrary
                productLevel
                headers {
                    ...PROGRAM_HEADERS
                    __typename
                }
                __typename
            }
            __typename
        }
        __typename
    }
}

fragment PROGRAM_HEADERS on Header {
    name
    details {
        name
        enrollmentDetailId
        version
        offeringDetailTypeName
        folderId
        parentFolderId
        iconDisplayName
        url
        expectedDate
        isLocked
        __typename
    }
    __typename
}`;

export const programRulesQuery = `
query PROGRAM_RULES_QUERY($programId: String!) {
    session {
        session
        __typename
    }
    person {
        learner {
            programs(programId: $programId) {
                programId
                dashboardVersion
                dashboardMyProgressViewEnabled
                productGroup
                productLevel
                hasActivities
                regulatoryDashboardVersion
                isLibrary
                isContentCopyDisabled
                library {
                    libraryVersion
                    __typename
                }
                dashboardTopicViewEnabled
                dashboardActivityViewEnabled
                dashboardCalendarViewEnabled
                studyPlan {
                    dashboardViewSortOrder
                    dashboardDefaultView
                    studyPlanForcedProgression
                    __typename
                }
                tourId
                ...ARTIFACTS_FRAGMENT
                displayCompletionInstructionsOnDashboard
                completionInstructions {
                    content
                    autoDisplayCompletionInstructions
                    displayCompletionInstructionsAffirmation
                    url
                    __typename
                }
                accountReview {
                    displayAccountReviewPage
                    url
                    __typename
                }
                __typename
            }
            __typename
        }
        __typename
    }
}

fragment ARTIFACTS_FRAGMENT on Program {
    programId
    displayTourOnFirstLaunch
    completionInstructions {
        content
        autoDisplayCompletionInstructions
        displayCompletionInstructionsAffirmation
        __typename
    }
    __typename
}`;

export const userNotificationsQuery = `
query USER_NOTIFICATIONS_QUERY {
    person {
        learner {
            logoutUrl
            logoutLinkText
            displayAccountLink
            notifications {
                notificationId
                text
                url
                startsAt
                isRead
                __typename
            }
            __typename
        }
        __typename
    }
}`;

export const statsQuery = `
query STATS_QUERY($programId: String, $studyPlanView: Boolean = true) {
    person {
        seminars @include(if: $studyPlanView) {
            ...SESSIONS_FRAGMENT
            __typename
        }
        learner {
            programs(programId: $programId) {
                programId
                productLevel
                productGroup
                displayCompletionInstructionsOnDashboard
                isStudyPlanEnabled
                ...SEMINARS_FRAGMENT
                stats {
                    ...STATS_FRAGMENT
                    __typename
                }
                completionInstructions {
                    content
                    autoDisplayCompletionInstructions
                    displayCompletionInstructionsAffirmation
                    url
                    __typename
                }
                activityFeed {
                    studyPlan {
                        endDate
                        startDate
                        plannedFinishDate
                        plannedStartDate
                        averageWeeklyDuration
                        dailyStats {
                            date
                            completedDuration
                            __typename
                        }
                        __typename
                    }
                    __typename
                }
                __typename
            }
            __typename
        }
        __typename
    }
}

fragment SESSIONS_FRAGMENT on Seminar {
    isCancelled
    instructors
    product {
        productID
        displayName
        category
        group
        level
        __typename
    }
    startDate {
        epoch
        __typename
    }
    endDate {
        epoch
        __typename
    }
    sessions {
        startDate {
            epoch
            __typename
        }
        endDate {
            epoch
            __typename
        }
        __typename
    }
    location {
        venue
        area
        room
        notes
        address {
            street1
            street2
            street3
            postalcode
            city
            region {
                code
                __typename
            }
            country {
                name
                __typename
            }
            city
            __typename
        }
        __typename
    }
    __typename
}

fragment SEMINARS_FRAGMENT on Program {
    name
    liveSeminarNotificationDays
    liveSeminarDisplayAddToCalendar
    __typename
}

fragment STATS_FRAGMENT on ProgramStats {
    examDate
    finalExamDate
    accessEndsAt
    enrollmentDate
    rules {
        lowScore
        highScore
        __typename
    }
    activities {
        total
        completed
        totalDuration
        completedDuration
        markedForReview
        __typename
    }
    exam {
        performanceTrackerUrl
        recentExamDate
        points
        pointsPossible
        __typename
    }
    qbank {
        performanceTrackerUrl
        answered
        points
        pointsPossible
        secondsElapsed
        __typename
    }
    __typename
}`;

export const studyPlanRulesQuery = `
query STUDY_PLAN_RULES_QUERY($programId: String!, $label: [String], $timezone: String) {
    person {
        learner {
            programs(programId: $programId) {
                programId
                isStudyPlanEnabled
                stats {
                    accessEndsAt
                    examDate
                    finalExamDate
                    __typename
                }
                activityFeed {
                    postCompletionInstructions
                    activityPage(isComplete: false, page: 1, pageRows: 1) {
                        activities {
                            activityId
                            __typename
                        }
                        __typename
                    }
                    studyPlan(timezone: $timezone) {
                        plannedFinishDate
                        plannedStartDate
                        studyPlanForcedProgression
                        studyPlanRecalibrationDay
                        isDaysOffEnabled
                        __typename
                    }
                    firstActivity: activityPage(
                        label: $label
                        isComplete: false
                        page: 1
                        pageRows: 2
                    ) {
                        activities {
                            activityId
                            __typename
                        }
                        __typename
                    }
                    __typename
                }
                __typename
            }
            __typename
        }
        __typename
    }
}`;

export const studyPlanQuery = `
query STUDY_PLAN_QUERY($programId: String, $timezone: String) {
    person {
        learner {
            programs(programId: $programId) {
                programId
                isExamDateEnabled
                stats {
                    accessEndsAt
                    enrollmentDate
                    examDate
                    finalExamDate
                    activities {
                        totalDuration
                        __typename
                    }
                    __typename
                }
                activityFeed {
                    studyPlan(timezone: $timezone) {
                        startDate
                        endDate
                        plannedFinishDate
                        plannedStartDate
                        isPlannedFinishDateEnabled
                        isPlannedStartDateEnabled
                        averageWeeklyDuration
                        studyPlanDefaultLengthDays
                        isAllowExcludeWeekendsEnabled
                        isDaysOffEnabled
                        excludeWeekends
                        dailyStats {
                            date
                            completedDuration
                            __typename
                        }
                        __typename
                    }
                    __typename
                }
                __typename
            }
            __typename
        }
        __typename
    }
}`;

export const eagerStudyPlanQuery = `
query EAGER_STUDY_PLAN_QUERY($programId: String, $label: [String], $week: Int, $page: Int, $pageRows: Int, $timezone: String, $withLabels: Boolean = false) {
    person {
        learner {
            programs(programId: $programId) {
                programId
                stats {
                    examDate
                    finalExamDate
                    activities {
                        total
                        completed
                        __typename
                    }
                    __typename
                }
                activityFeed {
                    studyPlan(timezone: $timezone) {
                        startDate
                        endDate
                        activityFeedHideMarkCompleteByOfferingDetailType
                        averageWeeklyDuration
                        activityWeek(week: $week) {
                            startDate
                            endDate
                            nextActivityWeek
                            activityPage(label: $label, page: $page, pageRows: $pageRows) {
                                nextActivityPage
                                activities {
                                    ...ACTIVITY_FRAGMENT
                                    moduleLink {
                                        url
                                        offeringDetailType
                                        __typename
                                    }
                                    __typename
                                }
                                __typename
                            }
                            stats {
                                total
                                completed
                                totalDuration
                                completedDuration
                                __typename
                            }
                            __typename
                        }
                        filteredWeek: activityWeek(week: $week, label: $label) @include(if: $withLabels) {
                            startDate
                            stats {
                                total
                                completed
                                totalDuration
                                completedDuration
                                __typename
                            }
                            __typename
                        }
                        __typename
                    }
                    __typename
                }
                __typename
            }
            __typename
        }
        __typename
    }
}

fragment ACTIVITY_FRAGMENT on Activity {
    activityId
    name
    content
    type
    label
    isComplete
    durationMinutes
    markedForReview
    isAccessible
    expectedDate
    __typename
}`;
