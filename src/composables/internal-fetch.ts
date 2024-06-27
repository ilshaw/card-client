type FetchCredentials = RequestCredentials;
type FetchHeaders = HeadersInit;
type FetchBody = BodyInit;
type FetchUrl = string;

interface FetchOptions {
    credentials?: FetchCredentials
    headers?: FetchHeaders
    body?: FetchBody
}

export function useInternalFetch() {
    async function post<D = unknown, C = unknown>(url: FetchUrl, options?: FetchOptions) {
        try {
            return await useExternalFetch<D, C>(url, { ...options, method: "POST" });
        }
        catch(error) {
            return {
                body: {
                    message: "Unexpected error has occurred",
                    status: 500
                },
                status: 500
            }
        }
    }

    async function get<D = unknown, C = unknown>(url: FetchUrl, options?: FetchOptions) {
        try {
            return await useExternalFetch<D, C>(url, { ...options, method: "GET" });
        }
        catch(error) {
            return {
                body: {
                    message: "Unexpected error has occurred",
                    status: 500
                },
                status: 500
            }
        }
    }

    return { 
        post, 
        get 
    };
}