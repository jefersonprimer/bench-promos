import React, { useState } from 'react';

function BotoesExtras() {
    const [showExpired, setShowExpired] = useState(false);

    const toggleShowExpired = () => {
        setShowExpired(prev => !prev);
    };

    return (
        <div className="flex w-full flex-col justify-between gap-4 sm:flex-row">
            <div className="flex w-full items-center gap-x-2">
                <div className="relative overflow-hidden w-full">
                    <div 
                        className="h-full w-full rounded-[inherit] overflow-scroll"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        <div style={{ minWidth: '100%', display: 'table' }}>
                            <div className="flex gap-x-2">
                                <button 
                                    type="button" 
                                    aria-pressed="false" 
                                    data-state="off" 
                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-8 px-2 min-w-max"
                                >
                                    Notebooks
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between gap-x-2">
                <label 
                    className="font-medium w-max text-sm" 
                    htmlFor="showExpired"
                >
                    Mostrar expiradas
                </label>
                <button 
                    type="button" 
                    role="switch" 
                    aria-checked={showExpired} 
                    onClick={toggleShowExpired} 
                    className={`peer inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ${showExpired ? 'bg-primary' : 'bg-input'}`} 
                    id="showExpired"
                >
                    <span 
                        className={`pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform ${showExpired ? 'translate-x-4' : 'translate-x-0'}`}
                    ></span>
                </button>
            </div>
        </div>
    );
}

export default BotoesExtras;
