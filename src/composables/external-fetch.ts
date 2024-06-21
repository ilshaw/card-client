type FetchMessage = string;
type FetchStatus = number;
type FetchCause<C = unknown> = C;
type FetchData<D = unknown> = D;

interface FetchResponse<D = unknown, C = unknown> {
    status: FetchStatus
    body: FetchBody<D, C>
}

interface FetchBody<D = unknown, C = unknown> {
    message: FetchMessage
    status: FetchStatus
    cause?: FetchCause<C>
    data?: FetchData<D>
}

export async function useExternalFetch<D = unknown, C = unknown>(url: string, options?: RequestInit): Promise<FetchResponse<D, C>> {
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