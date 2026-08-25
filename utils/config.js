class Settings {
    constructor() {
        this.BASE_URL = process.env.BASE_URL || ""
        this.API_KEY = process.env.API_KEYS || ""
    }
}

export const settings = new Settings()