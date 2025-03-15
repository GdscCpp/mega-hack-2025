"use server";
import { createClient } from "@/utils/supabase/server"

// feel free to update these as needed
enum IMPACT {
    FULLY_REPLACED = "FULLY_REPLACED",
    PARTIALLY_REPLACED = "PARTIALLY_REPLACED",
    NO_IMPACT = "NO_IMPACT",
    ASSISTS_WORK = "ASSISTS_WORK",
}

enum USAGE {
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY",
    RARELY = "RARELY",
}

enum CAREER_SWITCH_LIKELIHOOD {
    NO = "NO",
    HAVE_SWITCHED = "HAVE_SWITCHED",
    WILL_SWITCH = "WILL_SWITCH",
}

export type Response = {
    impact: IMPACT;
    usage: USAGE;
    productivityIncrease: number;
    careerSwitchLikelihood: CAREER_SWITCH_LIKELIHOOD;
}

export const createSurvey = async (response: Response, userId: string /* Add more params as needed */) => {
    // HINT: this may require also creating a new industry and or profession
}

export const getPaginateSurveys = async (page: number, limit: number) => {

}
