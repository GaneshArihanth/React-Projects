import './Page.css'

function Header() {
    return (
        <>
            <header>
                <h1><u>My College/University</u></h1>
                <nav>
                    <ul>
                        <li><a href="#home" title="Click here to visit Home"><i>Home</i></a></li>
                        <li><a href="#courses" title="Click here to visit courses"><i>Courses</i></a></li>
                        <li><a href="#about" title="Click here to visit about"><i>About Us</i></a></li>
                        <li><a href="#admissions" title="Click here to visit admission"><i>Admissions</i></a></li>
                        <li><a href="#contact" title="Click here to visit contact"><i>Contact Us</i></a></li>
                    </ul>
                </nav>
            </header>

            <section id="home" className="hero">
                <br />
                <br />
                <h2><mark>Welcome to Our Institution</mark></h2>
                <br />
                <p><mark>Your path to knowledge and success starts here.</mark></p>
                <br />
                <br />
                <br />
                <a href="#" className="cta-button" title="Click here to Apply now"><i>Apply Now</i></a>
                <br />
                <br />
            </section>

            <section id="courses" className="courses">
                <h1>Featured Courses:</h1>
                <br />
                <div className="course">
                    <h3>Computer Science Engineering</h3>
                    <p><i>The architects of a digital world, crafting the future one line of code at a time.</i></p>
                </div>
                <div className="course">
                    <h3>Electrical Engineering</h3>
                    <p><i>A field that powers innovation, drives progress, and electrifies the future.</i></p>
                </div>
                <div className="course">
                    <h3>BioMedical Engineering</h3>
                    <p><i>A discipline that bridges the gap between life sciences and technology, creating a healthier future.</i></p>
                </div>
                <div className="course">
                    <h3>AeroSpace Engineering</h3>
                    <p><i>Where the sky is not the limit; it's just the beginning of limitless possibilities.</i></p>
                </div>
                <div className="course">
                    <h3>Business Administration</h3>
                    <p><i>Business Administration, the engine that fuels commerce and shapes the leaders of tomorrow.</i></p>
                </div>
            </section>

            <section id="about" className="about">
                <h2><u>About Us</u></h2>
                <br />
                <p>Welcome to Our College/University, where we provide quality education, world-class facilities, and a nurturing environment for our students. Our dedicated faculty and staff are committed to your success.</p>
            </section>

            <section id="admissions" className="admissions">
                <h2><u>Admissions</u></h2>
                <br />
                <p>Explore our programs and start your journey toward a brighter future. We offer a wide range of courses, scholarships, and a straightforward admissions process. Join us today!</p>
                <br />
                <br />
                <hr />
                <br />
                <br />
                <h3>Admission Details</h3>
                <br />
                <form action="submit_admission.php" method="post">
                    <label htmlFor="name">Full Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />

                    <label htmlFor="course">Select Course:</label>
                    <select id="course" name="course">
                        <option value="computer_science">Computer Science Engineering</option>
                        <option value="electrical_engineering">Electrical Engineering</option>
                        <option value="bioMedical_engineering">BioMedical Engineering</option>
                        <option value="aerospace_engineering">AeroSpace Engineering</option>
                        <option value="business_admin">Business Administration</option>
                    </select>

                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Reset" />
                </form>
            </section>

            <section id="contact" className="contact">
                <h2><u>Contact Us</u></h2>
                <br />
                <p>If you have any questions or need further information, please don't hesitate to get in touch with us. Our team is here to assist you.</p>
                <br />
                <a href="#" className="cta-button" title="Click here to Contact us"><i>Contact Us</i></a>
            </section>

            <footer>
                <p>&copy; 2023 My College/University</p>
            </footer>
        </>
    );
}

export default Header;
