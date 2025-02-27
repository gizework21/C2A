"use client";

import React from "react";

export const DiscountTag: React.FC = () => {
    return (
        <div style={styles.tagContainer}>
            30% OFF
        </div>
    );
};

const styles = {
    tagContainer: {
        width: '65px',
        height: '24px',
        position: 'absolute' as 'absolute',
        top: '5px',
        right: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0px',
        borderRadius: '3px 0px 0px 0px',
        opacity: 1,
        background: 'linear-gradient(180deg, #FD0000 0%, #552828 100%)',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '12px',
    } as React.CSSProperties,
};
