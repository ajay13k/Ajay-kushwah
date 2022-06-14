import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class EmployeeTable extends Component {
    raiseSort = path => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path)
            sortColumn.order = sortColumn.order === 'asc' ? 'desk' : 'asc';
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);

    }

    render() {
        const { employee, onDelete, onSort, sortColumn,onEdit } = this.props;

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th onClick={() => this.raiseSort('id')}>id</th>
                        <th onClick={() => this.raiseSort('firstname')}>FirstName </th>
                        <th onClick={() => this.raiseSort('department.name')}>department</th>
                        <th onClick={() => this.raiseSort('email')}>Email</th>
                        <th onClick={() => this.raiseSort('number')}>Phone no</th>
                        <th>Delete</th>
                        <th>Edit</th>
                        <th>Attendance</th>
                    </tr>
                </thead>
                <tbody >
                    {employee.map(emp => (<tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.firstName}</td>
                        <td>{emp.department.name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.number}</td>
                        <td><button onClick={() => onDelete(emp)} className="btn btn-danger">Delete</button></td>
                        <td><button className="btn btn-primary" onClick={() => onEdit(emp)} >edit</button></td>
                        <td><button className="btn btn-primary"><NavLink className="text_color"  to="/attendance">Attendance</NavLink></button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default EmployeeTable;