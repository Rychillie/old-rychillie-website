import styles from "./styles.module.scss";

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <h2>Subscribe to the newsletter</h2>
      <p>
        Get emails from me about web development, tech, and early access to new
        articles.
      </p>

      <div id="revue-embed">
        <form
          action="https://www.getrevue.co/profile/rychillie/add_subscriber"
          method="post"
          id="revue-form"
          name="revue-form"
          target="_blank"
        >
          <div className={styles.revueFormGroup}>
            <label htmlFor="member_email">Your email address...</label>
            <input
              className={styles.revueFormField}
              placeholder="Your email address..."
              type="email"
              name="member[email]"
              id="member_email"
            />
          </div>
          <div className={styles.revueFormActions}>
            <input
              type="submit"
              value="Subscribe"
              name="member[subscribe]"
              id="member_submit"
            />
          </div>
        </form>
        <div className={styles.revueFormFooter}>
          By subscribing, you agree with Revue’s{" "}
          <a
            target="_blank"
            href="https://www.getrevue.co/terms"
            rel="noreferrer"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            href="https://www.getrevue.co/privacy"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
