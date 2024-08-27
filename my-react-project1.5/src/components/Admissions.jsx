import React from 'react';

function Admissions() {
  return (
    <section id="admissions" className="admissions">
      <h2><u>Admissions</u></h2>
      <p>Explore our programs and start your journey toward a brighter future. We offer a wide
         range of courses, scholarships, and a straightforward admissions process. Join us today!</p>
      <h3>Admission Details</h3>
      <form action="./thank-you" method="post">
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
        <label htmlFor="course">Select Course:</label>
        <select id="course" name="course">
          <option value="computer_science">Computer Science Engineering</option>
          <option value="electrical_engineering">Electrical Engineering</option>
          <option value="biomedical_engineering">Biomedical Engineering</option>
          <option value="aerospace_engineering">Aerospace Engineering</option>
          <option value="business_admin">Business Administration</option>
        </select>
        <input href="/thank-you" type="submit" value="Submit" />
        <input type="reset" value="Reset" />
      </form>
    </section>
  );
}

export default Admissions;
