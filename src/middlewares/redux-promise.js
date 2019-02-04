const isFunction = val => typeof val === 'function';

const isAsyncAction = action => action && isFunction(action.then);

const reduxPromise = () => next => action => {
    const { type, payload, ...metadata } = action;
    debugger;
    if (isAsyncAction(payload)) {
        payload.then((response) => {
            next({
                type,
                payload: response,
                ...metadata,
            });
        });
    } else {
        next(action)
    }
};

export default reduxPromise
