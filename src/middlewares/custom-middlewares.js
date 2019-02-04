const customMiddleWare = () => next => action => {
    switch (action.type) {
        case 'API_CALL':
            const { type, payload, ...metadata } = action;
            payload.then((response) => {
                next({
                    type,
                    payload: response,
                    ...metadata,
                });
            });
            break;
        default:
            next(action);
    }
};

export default customMiddleWare
