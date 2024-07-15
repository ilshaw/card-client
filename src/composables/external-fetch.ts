type FetchMessage = string;
type FetchStatus = number;
type FetchCause<C = any> = C;
type FetchData<D = any> = D;

interface FetchResponse<D = any, C = any> {
    status: FetchStatus
    body: FetchBody<D, C>
}

interface FetchBody<D = any, C = any> {
    message: FetchMessage
    status: FetchStatus
    cause?: FetchCause<C>
    data?: FetchData<D>
}

export async function useExternalFetch<D = any, C = any>(url: string, options?: RequestInit): Promise<FetchResponse<D, C>> {
    try {
        const response = await fetch(url, options);

        const body = await response.json();

        return {
            body: body,
            status: response.status
        }
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