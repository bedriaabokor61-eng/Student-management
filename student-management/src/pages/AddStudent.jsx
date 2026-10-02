function AddStudent() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Add Student</h1>

      <div className="card shadow-sm mx-auto" style={{ maxWidth: "700px" }}>
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter student name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter age"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select className="form-select">
                <option>Select gender</option>
                <option>Female</option>
                <option>Male</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Course</label>
              <select className="form-select">
                <option>Select course</option>
                <option>Software Development</option>
                <option>Networking</option>
                <option>Data Analytics</option>
                <option>Cybersecurity</option>
                <option>Business IT</option>
              </select>
            </div>

            <button
              className="btn text-white"
              style={{ backgroundColor: "#6f42c1" }}
            >
              Add Student
            </button>
          </form>

          <div className="alert alert-info mt-4 mb-0">
            This is a prototype form. Student data is not saved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
