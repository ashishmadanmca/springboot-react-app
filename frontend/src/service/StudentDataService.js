import axios from 'axios'

const STUDENT_API_URL = 'http://localhost:8080/api'

class StudentDataService {
    //
    retrieveAllStudents() {
        return axios.get(`${STUDENT_API_URL}/students`);
    }

    createStudent(student) {
        return axios.post(`${STUDENT_API_URL}/students/`, student);
    }
}

export default new StudentDataService()