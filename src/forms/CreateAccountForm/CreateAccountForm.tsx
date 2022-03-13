import { useState } from "react";
import styles from "./CreateAccountForm.module.scss";

export const CreateAccountForm = () => {
  const [firstName, setFirstName] = useState<null | string>(null);

  const handleChange = () => {};

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {};

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <label htmlFor="first_name">First name</label>
        <input
          id="first_name"
          type="text"
          name="first_name"
          placeholder="First name"
          required={true}
          value={""}
          onChange={handleChange}
        />
        <label>Birthday</label>
        <input
          id="dob_day"
          type="number"
          name="dob_day"
          placeholder="DD"
          required={true}
          value={""}
          onChange={handleChange}
        />
        <input
          id="dob_month"
          type="number"
          name="dob_month"
          placeholder="MM"
          required={true}
          value={""}
          onChange={handleChange}
        />
        <input
          id="dob_year"
          type="number"
          name="dob_year"
          placeholder="YYYY"
          required={true}
          value={""}
          onChange={handleChange}
        />
        <label>Gender</label>
        <input
          id="woman_gender_identity"
          type="radio"
          name="gender"
          required={true}
          value="woman"
          onChange={handleChange}
          checked={false}
        />
        <input
          id="man_gender_identity"
          type="radio"
          name="gender"
          required={true}
          value="man"
          onChange={handleChange}
          checked={false}
        />
      </section>
    </form>
  );
};
