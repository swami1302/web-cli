'use client';
import { Terminal } from '@xterm/xterm';
import React, { useEffect, useRef } from 'react'
import '@xterm/xterm/css/xterm.css';


const term = new Terminal();

function TerminalClient() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        term.open(containerRef.current);
        term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
    }, [containerRef.current]);
    return (
        <div ref={containerRef} ></div>
    )
}

export default TerminalClient