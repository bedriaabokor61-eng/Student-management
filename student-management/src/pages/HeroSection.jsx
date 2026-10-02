import { Link } from "react-router-dom";
function HeroSection() {
    return (
        <section className="bg-light py-5">
            <div className="container py-5">
                <div className="row align-items-center">
                    {/* Hero Text */}
                    <div className="col-md-7">
                        <h1 className="display-4 fw-bold">
                            Student Management System
                        </h1>
                        <p className="lead mt-3">
                            Manage, view and access student information
                            quickly and easily in one place.
                        </p>
                        <Link
                            to="/students"
                            className="btn btn-primary btn-lg mt-3"
                        >
                            View Students
                        </Link>
                    </div>
            
                    <div className="col-md-5 text-center mt-4 mt-md-0">
                        <img
                            src="images/Student1 (2).jpg"
                            alt="Students"
                            className="img-fluid rounded"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HeroSection;