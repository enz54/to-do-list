
export const loadState = () => {
    try {
        const serialisedState = localStorage.getItem('state');
        if(serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (error) {
        console.log('error:',error);
    }
}

export const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem('state', serialisedState)
    } catch (error) {
        console.log('error:',error)
    }
}

