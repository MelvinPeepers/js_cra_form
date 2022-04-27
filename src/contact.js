export default function Contact() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);

  return (
    <Container maxWidth="sm">
      <h2>CONTACT</h2>
      {success && (
          <p style={{ color: "green" }}>Thanks for your message! </p>
        )}
      <Card>
        <form 
            name="contact" 
            method="POST" 
            action="/contact/?success=true"
            data-netlify="true" 
            >
        <input type="hidden" name="form-name" value="contact" />
          <TextField id="standard-basic" label="name" name="name" /> <br />
          <TextField id="standard-basic" label="email" name="email" /> <br />
          <TextField
            multiline
            id="standard-multiline-static"
            label="message"
            name="message"
          />
          <br />
          <div>
            <Button type="submit">Send</Button>
          </div>
        </form>
      </Card>
    </Container>
  );
}
