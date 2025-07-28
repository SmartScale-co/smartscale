'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './Terminal.module.css';
import commandRegistry from '../../lib/commands';
import { CommandResponse } from '../../lib/commands/types';

interface TerminalWidget {
  initialMessage?: string;
}

interface TerminalLine {
  content: string;
  isCommand?: boolean;
  isError?: boolean;
}

export default function Terminal({ initialMessage = "Welcome to SmartScale.co! Type $help to see available commands." }: TerminalWidget) {
  const [inputValue, setInputValue] = useState('');
  const [lines, setLines] = useState<TerminalLine[]>([{ content: initialMessage }]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = async (command: string) => {
    if (!command) return;

    // Add command to history
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(-1);

    // Add command to terminal
    setLines(prev => [...prev, { content: `$ ${command}`, isCommand: true }]);

    // Handle clear command
    if (command.toLowerCase() === 'clear') {
      setLines([]);
      return;
    }

    try {
      // Parse command
      const parts = command.split(' ');
      const commandName = parts[0].replace('$', '');
      const args = parts.slice(1);

      // Execute command
      const cmd = commandRegistry.getCommand(commandName);
      if (!cmd) {
        throw new Error(`Command not found: ${commandName}`);
      }

      const response = await cmd.execute({ args });
      
      // Display response
      if (response.message) {
        setLines(prev => [...prev, { content: response.message }]);
      }
    } catch (error) {
      setLines(prev => [...prev, { 
        content: error instanceof Error ? error.message : 'An error occurred',
        isError: true 
      }]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue);
      setInputValue('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputValue('');
      }
    }
  };

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.terminal} onClick={focusInput} ref={terminalRef}>
      {lines.map((line, i) => (
        <div key={i} className={`${styles.line} ${line.isError ? styles.error : ''}`}>
          {line.content}
        </div>
      ))}
      <div className={styles.inputLine}>
        <span className={styles.prompt}>$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className={styles.input}
          autoFocus
        />
      </div>
    </div>
  );
} 