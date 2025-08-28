import { environment } from "src/environments/environment";

export const API = {
    AUTH: {
        LOGIN: `${environment.apiBaseUrl}/login`,
        REGISTER: `${environment.apiBaseUrl}/register`
    }
}