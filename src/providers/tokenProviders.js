import React, { useState, createContext } from 'react';

export const TokenContext = createContext({ hasToken: false, token: 'null' });

export function TokenProvider(props) {
    const [userToken, setUserToken ] = useState({ hasToken: false, token: 'null' });

    return (
        <TokenContext.Provider
            value={{ userToken, setUserToken }}
            >
                {props.children}
        </TokenContext.Provider>
    )
};