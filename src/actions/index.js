export const ApiCall = ( textToSearch ) => {
    return {
        type: 'API_CALL',
        payload: new Promise((resolve, reject) => {
            return fetch('https://swapi.co/api/people/?search=' + textToSearch )
                .then(response => {
                    if (response.ok) {
                        //resolve(response)
                        response.json().then((data)=>{
                            resolve(data);
                        });
                    } else {
                        reject(new Error('error'))
                    }
                }, error => {
                    reject(new Error(error.message))
                })
            }),
    }
};

export const actionShowDetails = ( item ) => {
    return {
        type: 'SHOW_INFO',
        payload: item,
    }
};
