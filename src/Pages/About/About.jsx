import "../About/about.scss";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <>
      <header>
        <h1>About Cinepedia: Your Ultimate Movie Database</h1>
        <p>
          Welcome to Cinepedia, your go-to destination for all things movies!
          Whether you're a cinephile, a casual moviegoer, or just looking to
          explore the world of cinema, Cinepedia is here to provide you with a
          comprehensive and user-friendly movie database
        </p>
      </header>
      <main>
        <section>
          <h2>Our Mission</h2>
          <p>
            At Cinepedia, our mission is to create a centralized hub of
            information for movie enthusiasts worldwide. We understand the
            passion that people have for movies, and our goal is to cater to
            that passion by offering a one-stop platform that encompasses
            everything from classic films to the latest releases.
          </p>
        </section>
        <section>
          <h2>What We Offer</h2>
          <p>
            <span> Extensive Movie Catalog:</span> Our database boasts a vast
            collection of movies from various genres, eras, and countries.
            Whether you're into action, romance, comedy, or documentaries,
            you'll find something to pique your interest.
          </p>
          <p>
            <span>Detailed Information: </span>Get in-depth details about your
            favorite movies, including cast and crew information, synopses,
            release dates, and much more. We're committed to providing accurate
            and up-to-date information.
          </p>
          <p>
            <span>User Interaction:</span>Cinepedia isn't just a database; it's
            a community. Engage with fellow movie enthusiasts through reviews,
            ratings, and discussions. Share your thoughts, recommendations, and
            insights, and connect with like-minded individuals.
          </p>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            Have a question, suggestion, or just want to say hi? Feel free to
            reach out to us at{" "}
            <a href="mailto:contact@cinepedia.com">contact@cinepedia.com.</a>{" "}
            Your feedback is invaluable in helping us improve and grow.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
