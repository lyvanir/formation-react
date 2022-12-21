export async function fetchService (url: string) {

    try {
        let response = await fetch(url);

        if (!response.ok) {
            throw{
                err: true,
                status: response.status,
                statusText: !response.statusText ? "Une erreur est survenue" : response.statusText,
            };
        }

        let dataJson = await response.json();

        return {data: dataJson, isPending: false, error: false};

    } catch (err) {
        return {isPending: true, error: err};
    }

}