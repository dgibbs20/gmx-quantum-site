import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start px-6 py-32">
      <p className="font-display text-sm italic text-gold">404 — Record not found</p>
      <h1 className="mt-4 font-display text-4xl font-normal text-ivory">
        Nothing catalogued at this address.
      </h1>
      <p className="mt-4 text-ivory-dim">Check the portfolio on the home page.</p>
      <div className="mt-8">
        <Button as={Link} to="/" variant="primary">
          Back to home
        </Button>
      </div>
    </section>
  );
}
