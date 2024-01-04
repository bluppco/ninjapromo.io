import { defineConfig } from "cypress"

export default defineConfig({

    e2e: {

        supportFile: false,
        baseUrl: "http://localhost:4321/"

    },
    viewportWidth: 1440,
    viewportHeight: 900,

})
