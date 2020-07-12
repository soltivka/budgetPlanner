const SET_CURRENT_URL_LOCATION = 'SET_CURRENT_URL_LOCATION';
const CHANGE_TRANSACTION_VIEW = 'CHANGE_TRANSACTION_VIEW';

export const setCurrentUrlLocation_action = (url) => (
    {
        type: SET_CURRENT_URL_LOCATION,
        location: url,
    }
)

export const changeTransactionView_action = (id) => (
    {
        type: CHANGE_TRANSACTION_VIEW,
        id: id
    });



