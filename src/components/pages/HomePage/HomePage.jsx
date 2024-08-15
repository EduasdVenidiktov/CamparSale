import DocumentTitle from "../../DocumentTitle";

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <h1>HomePage</h1>;
    </>
  );
}

/* <>
  <DocumentTitle>Home</DocumentTitle>

  <div className={css.container}>
    <Typography
      variant="h2"
      component="span"
      color="primary"
      className={css.customText}
    >
      Welcom to your contacts manager!
      <img
        src="https://media.tenor.com/GCbRbnL1MYwAAAAi/contact-phone-number.gif"
        alt="Phone gif"
        className={css.gif}
      />
    </Typography>
  </div>
</>;
   */
