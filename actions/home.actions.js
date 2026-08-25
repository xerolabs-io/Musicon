'use server'

import { toast } from "sonner";
import { settings } from "../utils/config";

export async function getHomeData() {

    const BASEURL = settings.BASE_URL
    const API_KEY = settings.API_KEY

    try {

        const response = await fetch(`${BASEURL}/api/music/v1/discover`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${API_KEY}`
                },

            }
        )

        if (!response.ok) {
            console.log("Basexero API Error")
            toast.error("Basexero API Error")
        }

        const content = await response.json()
        const { success, data, client } = { ...content }

        return {
            success,
            data
        }

    } catch (error) {
        console.error('[getHomeData] fetch failed:', error)
        // toast.error(error.message)
    }

}