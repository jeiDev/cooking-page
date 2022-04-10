export default {
    provider: {
        isAxioMock: process.env.NEXT_PUBLIC_IS_AXIOS_MOCK == "true"
    },
    server: {
        api: process.env.NEXT_PUBLIC_SERVER_API
    }
}