import { syncHistoryWithStore } from 'react-router-redux';
import store, { history as browserHistory } from './store';

const history = syncHistoryWithStore(browserHistory, store)

history.listen(location => {
    // Fire event tracking to GTM
})
