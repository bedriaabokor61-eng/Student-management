import useFetch from "../hooks/Usefetch";
import StudentCard from "../components/StudentCard";

function Students() {
    const { data, loading, error } = useFetch(
        "http://localhost:3001/students"
    );

    if (loading) {
        return (
            <div className="container text-center py-5">
                <div className="spinner-border text-primary"></div>
                <p className="mt-3">Loading students...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container py-5">
                <div className="alert alert-danger">
                    Error: {error}
                </div>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Students</h1>

            <div className="row g-4">
                {data.map((student) => (
                    <div className="col-md-6 col-lg-4" key={student.id}>
                        <StudentCard student={student} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Students;