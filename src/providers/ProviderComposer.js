import React from 'react';
import { TokenProvider } from './tokenProviders';



function ProviderComposer({ contexts, children }) {
    return contexts.reduceRight(
        (kids, parent) =>
            React.cloneElement(parent, {
            children: kids,
            }),
        children
    );
}

function ContextProvider({ children }) {
    return (
        // <ProviderComposer
        //     contexts={[<ChatProvider />, <ChatApoioProvider />, <ChatApoioMediasProvider />, <TokenProvider />, <ConversasListProvider />]}
        // >
        <ProviderComposer
        contexts={[<TokenProvider />]}
    >
            {children}
        </ProviderComposer>
    );
}

export { ContextProvider };