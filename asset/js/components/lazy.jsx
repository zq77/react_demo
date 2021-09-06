import React, {Suspense} from 'react';
// const LazyBasicComponent = React.lazy(() => import('./basic'))
const LazyBasicComponent = React.lazy(() => new Promise(resolve=>{
    setTimeout(()=> resolve(import('./basic')), 1000);
}))

function LazyComponent() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <LazyBasicComponent name="lazy" />
            </Suspense>
        </div>
    );
}

export {LazyComponent};