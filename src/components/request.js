export function SendQuery(url, body) {
    console.log(body)
    return fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        return new Promise((resolve, reject) => {                    
            if (response.ok) {
                resolve(response.json());
            }
            reject({
                error: true,
                error_num: 322,
                error_info: "Что-то пошло не так",
            });
        });
    })                
}
