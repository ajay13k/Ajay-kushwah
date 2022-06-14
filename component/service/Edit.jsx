import React, { Component } from 'react';
import { getEmployee } from './empdata';
class Attendance extends Component {
    state = {
        emp_attendance: getEmployee()

    }
    render() {
        return (
            <>
                <table className="table">
                <thead>
                    <tr>
                        <th >id</th>
                        <th >FirstName </th>
                        <th >department</th>
                        <th >Email</th>
                        <th >Phone no</th>
                    </tr>
                </thead>
                <tbody >
                    {this.state.emp_attendance.map(emp => (<tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.firstName}</td>
                        <td>{emp.department.name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.number}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </>
        );
    }
}

export default Attendance;