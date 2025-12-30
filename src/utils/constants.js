// production
// export const BASE_URL = "/api";

// dev
// export const BASE_URL = "http://localhost:3000";


// works for both dev as well as production
export const BASE_URL = location.hostname === "localhost" ? "http://localhost:3000" : "/api";
