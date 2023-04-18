import wretch from "wretch";

const headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
};

const api = wretch("https://foshizi.herokuapp.com/api")
    .headers(headersList)
    .errorType("json")
    .resolve((r) => r.json());

export async function doCreateSurvey(survey) {
    try {
        api.url("/createSurvey").post(survey);
    } catch (error) {
        console.log("something went wrong", error);
    }
}
export async function getSurveyByUserId(userId) {
    try {
        const res = await api.url("/getSurveyByUserId").post(userId);
        return res;
    } catch (error) {
        console.log(error);
        return null;
    }
}
export async function getAllSurveys() {
    try {
        const res = await api.url("/getallsurveys").get();
        return res.result;
    } catch (error) {
        console.log(error);
        return [];
    }
}
export async function getAllAnswers() {
    try {
        const res = await api.url("/getallanswers").get();
        return res.result;
    } catch (error) {
        console.log(error);
        return [];
    }
}
