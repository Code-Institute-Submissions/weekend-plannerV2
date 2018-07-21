import { showLoading, hideLoading } from 'react-redux-loading';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
    }
}