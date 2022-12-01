// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import B9LabTollroadTollroad from './b9lab.tollroad.tollroad'


export default { 
  B9LabTollroadTollroad: load(B9LabTollroadTollroad, 'b9lab.tollroad.tollroad'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}