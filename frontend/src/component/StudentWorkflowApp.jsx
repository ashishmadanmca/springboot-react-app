import React, { Component } from 'react';
import ListStudents from './ListStudents';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//Student App
class StudentWorkflowApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <br/>
                    <br/>
                    <Switch>
                        <Route path="/" exact component={ListStudents} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default StudentWorkflowApp