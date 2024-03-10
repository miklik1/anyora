interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Vyplnění kontaktního formuláře</h1>
    <p>
      Od <strong>{name}</strong> z {email}
    </p>
    <h2>Zpráva:</h2>
    <p>{message}</p>
  </div>
);

export default ContactFormEmail;
