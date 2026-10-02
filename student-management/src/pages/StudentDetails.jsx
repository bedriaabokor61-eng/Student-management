import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/Usefetch";

function StudentDetails() {
    const { id } = useParams();

    const { data, loading, error } = useFetch(
        `http://localhost:3001/students/${id}`
    );

    if (loading) {
        return (
            <div className="container text-center py-5">
                <div className="spinner-border text-primary"></div>
                <p className="mt-3">Loading student...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container py-5">
                <div className="alert alert-danger">
                    Error: {error}
                </div>

                <Link to="/students" className="btn btn-secondary">
                    Back to Students
                </Link>
            </div>
        );
    }

    if (!data || !data.id) {
        return (
            <div className="container text-center py-5">
                <h2>Student Not Found</h2>
                <p>The student you are looking for does not exist.</p>

                <Link to="/students" className="btn btn-primary">
                    Back to Students
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h1 className="mb-4">Student Details</h1>

            <div className="card shadow-sm">
                <div className="card-body">
                    <h3 className="card-title mb-4">
                        {data.name}
                    </h3>

                    <p>
                        <strong>ID:</strong> {data.id}
                    </p>

                    <p>
                        <strong>Email:</strong> {data.email}
                    </p>

                    <p>
                        <strong>Age:</strong> {data.age}
                    </p>

                    <p>
                        <strong>Gender:</strong> {data.gender}
                    </p>

                    <p>
                        <strong>Course:</strong> {data.course}
                    </p>

                    <Link
                        to="/students"
                        className="btn btn-secondary mt-3"
                    >
                        ← Back to Students
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default StudentDetails;