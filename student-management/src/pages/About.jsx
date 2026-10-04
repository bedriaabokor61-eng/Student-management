function About() {
    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1>About Student Management System</h1>
                <p className="lead">
                    A simple React application for managing and viewing
                    student information.
                </p>
            </div>

            <div className="row g-4">
                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title">Purpose</h4>
                            <p className="card-text">
                                This system allows users to view student
                                information, view individual student details,
                                and access a student registration form.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h4 className="card-title">Technologies</h4>
                            <p className="card-text">
                                React, React Router, Bootstrap, JavaScript,
                                JSON Server, Fetch API and useEffect.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card shadow-sm mt-4">
                <div className="card-body text-center">
                    <h4>Student Information</h4>
                    <p className="mb-1">
                        <strong>Name:</strong> Bedria Abokor Hashi
                    </p>
                    <p>
                        <strong>Student ID:</strong> 260248
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;