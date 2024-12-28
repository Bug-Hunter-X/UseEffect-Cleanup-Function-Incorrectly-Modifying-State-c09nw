```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct implementation: no state updates in return function
    let interval;
    if (count < 5) {
       interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return <div>Count: {count}</div>;
}
```