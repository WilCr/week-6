'use client';

import { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperation = (op: string) => {
    const currentValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(currentValue);
    } else if (operation) {
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setOperation(op);
    setWaitingForNewValue(true);
  };

  const calculate = (prev: number, current: number, op: string): number => {
    switch (op) {
      case '+':
        return prev + current;
      case '-':
        return prev - current;
      case '*':
        return prev * current;
      case '/':
        return prev / current;
      default:
        return current;
    }
  };

  const handleEquals = () => {
    if (previousValue !== null && operation) {
      const currentValue = parseFloat(display);
      const result = calculate(previousValue, currentValue, operation);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForNewValue(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const buttonClass = "h-14 rounded-lg text-lg font-medium transition-colors hover:opacity-80";
  const numberButtonClass = `${buttonClass} bg-zinc-200 text-black dark:bg-zinc-800 dark:text-zinc-50`;
  const operationButtonClass = `${buttonClass} bg-zinc-950 text-white dark:bg-zinc-50 dark:text-black`;
  const equalsButtonClass = `${buttonClass} bg-blue-600 text-white hover:bg-blue-700`;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-md flex-col items-center justify-center py-32 px-8 bg-white dark:bg-black">
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-semibold mb-8 text-center text-black dark:text-zinc-50">
            Calculator
          </h1>
          
          <div className="mb-4 rounded-lg bg-zinc-100 dark:bg-zinc-900 p-6">
            <div className="text-right text-4xl font-semibold text-black dark:text-zinc-50 min-h-[60px] flex items-center justify-end">
              {display}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            <button
              onClick={handleClear}
              className={`${buttonClass} col-span-2 bg-red-500 text-white hover:bg-red-600`}
            >
              Clear
            </button>
            <button
              onClick={() => handleOperation('/')}
              className={operationButtonClass}
            >
              ÷
            </button>
            <button
              onClick={() => handleOperation('*')}
              className={operationButtonClass}
            >
              ×
            </button>

            <button onClick={() => handleNumber('7')} className={numberButtonClass}>7</button>
            <button onClick={() => handleNumber('8')} className={numberButtonClass}>8</button>
            <button onClick={() => handleNumber('9')} className={numberButtonClass}>9</button>
            <button
              onClick={() => handleOperation('-')}
              className={operationButtonClass}
            >
              −
            </button>

            <button onClick={() => handleNumber('4')} className={numberButtonClass}>4</button>
            <button onClick={() => handleNumber('5')} className={numberButtonClass}>5</button>
            <button onClick={() => handleNumber('6')} className={numberButtonClass}>6</button>
            <button
              onClick={() => handleOperation('+')}
              className={operationButtonClass}
            >
              +
            </button>

            <button onClick={() => handleNumber('1')} className={numberButtonClass}>1</button>
            <button onClick={() => handleNumber('2')} className={numberButtonClass}>2</button>
            <button onClick={() => handleNumber('3')} className={numberButtonClass}>3</button>
            <button
              onClick={handleEquals}
              className={`${equalsButtonClass} row-span-2`}
            >
              =
            </button>

            <button
              onClick={() => handleNumber('0')}
              className={`${numberButtonClass} col-span-2`}
            >
              0
            </button>
            <button onClick={() => handleNumber('.')} className={numberButtonClass}>.</button>
          </div>
        </div>
      </main>
    </div>
  );
}

