const [protectedText, setProtectedText] = useState("");

useEffect(() => {
  fetch("/api/getText")
    .then((res) => res.text())
    .then((text) => setProtectedText(text));
}, []);