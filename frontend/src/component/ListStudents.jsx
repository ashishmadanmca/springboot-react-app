import React, { Component } from 'react'
import StudentDataService from '../service/StudentDataService';
import DataGrid from 'react-data-grid';
import ReactModal from 'react-modal';
import AddStudent from "./AddStudent";

const defaultColumnProperties = {
    resizable: true
};

//Columns for the grid
const columns = [
    { key: 'id', name: 'ID' , width: 10 },
    { key: 'name', name: 'Name' , width: 150, frozen: true},
    { key: 'city', name: 'City' },
    { key: 'pincode', name: 'Pincode' }
].map(c => ({ ...c, ...defaultColumnProperties }));

//Records size
const ROW_COUNT = 100;

//Shows the student list
class ListStudents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [],
            showModal: false,
            message: null
        }
        this.refreshStudents = this.refreshStudents.bind(this)
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    componentDidMount() {
        this.refreshStudents();
    }

    //Retrieve all the students from backend
    refreshStudents() {
        StudentDataService.retrieveAllStudents()
            .then(
                response => {
                    this.setState({ students: response.data })
                }
            )
    }

    //Opens the modal
    handleOpenModal () {
        this.setState({ showModal: true });
    }

    //Closes the modal
    handleCloseModal () {
        this.setState({ showModal: false });
        this.refreshStudents();
    }

    render() {
        const {students} = this.state;
        return (
            <div className="container">
                <h4>Student's Portfolio</h4>
                { this.state.message && <div class="alert alert-success">{this.state.message}</div> }

                <DataGrid
                    columns={columns}
                    rows={students}
                    rowsCount={ROW_COUNT}
                />

                <div id="reactModalContainer">
                    <ReactModal
                        id="reactModal"
                        isOpen={this.state.showModal}
                        contentLabel="Add Student"
                        onRequestClose = { this.refreshStudents}
                    >
                        <button id="btnCloseModal" onClick={this.handleCloseModal}>X</button>
                        <AddStudent onCloseModel={this.handleCloseModal}/>
                    </ReactModal>
                </div>
                <br/>
                <div className="container">
                    <div className="row">
                        <button id="btnAddStudent" className="" onClick={this.handleOpenModal}>Add Student</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListStudents