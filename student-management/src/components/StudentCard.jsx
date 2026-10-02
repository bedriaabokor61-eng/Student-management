import { Link } from "react-router-dom";

function StudentCard({ student }) {
    return (
        <div className="card h-100 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{student.name}</h5>

                <p className="card-text">
                    <strong>Email:</strong> {student.email}
                </p>

                <p className="card-text">
                    <strong>Age:</strong> {student.age}
                </p>

                <p className="card-text">
                    <strong>Course:</strong> {student.course}
                </p>

                <Link
                    to={`/students/${student.id}`}
                    className="btn btn-primary"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
}

export default StudentCard;