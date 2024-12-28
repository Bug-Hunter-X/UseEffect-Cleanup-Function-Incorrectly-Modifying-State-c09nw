```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly trying to update state directly within the effect's return function
    return () => {
      setCount(10); // This will not work as expected
    };
  }, []);

  return <div>Count: {count}</div>;
}
```