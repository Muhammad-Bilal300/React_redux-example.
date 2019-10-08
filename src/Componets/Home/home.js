import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { changeUser_name } from '../../React Store/actions/action';
import { change_Class } from '../../React Store/actions/action';
import { change_Roll_no } from '../../React Store/actions/action';
import { decrement } from '../../React Store/actions/action';
import { increment } from '../../React Store/actions/action';




class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            rollNo: '',
            class: ''
        }
    }

    userName_Change = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    class_Change = (event) => {
        this.setState({
            class: event.target.value
        })
    }
    rollNo_Change = (event) => {
        this.setState({
            rollNo: event.target.value
        })
    }

    _changeState = () => {

        this.props.change_Username_ToReducer(this.state.userName);
        this.props.change_RollNo_ToReducer(this.state.rollNo);
        this.props.change_Class_ToReducer(this.state.class);

    }

    render() {

        return (
            <div className="container-fluid">

                <div className="container text-center">
                    <u><h1>Welcome To Home Page</h1></u>
                </div>
                <br></br>
                <br></br>

                <div className="container-fluid">
                    <form>
                        User Name:<br></br>
                        <input type="text" value={this.state.userName} onChange={this.userName_Change} />
                        <br></br>
                        <br></br>
                        Class:<br></br>
                        <input type="text" value={this.state.class} onChange={this.class_Change} />
                        <br></br>
                        <br></br>
                        Roll No:<br></br>
                        <input type="number" value={this.state.rollNo} onChange={this.rollNo_Change} />
                        <br></br>
                        <br></br>

                        <button type="button" onClick={this._changeState}>Registration</button>

                    </form>
                </div>
                <br></br>

                <div>
                    <h1>Your UserName is : <i>{this.props.user_name}</i></h1>
                    <h1>Your class is : <i>{this.props.class}</i></h1>
                    <h1>Your Roll No is : <i>{this.props.roll_no}</i></h1>
                </div>

                <div>
                    <Link to="/about">
                        <button>Go To About Page</button>
                    </Link>
                    <Link to="/contacts">
                        <button>Go To Contacts Page</button>
                    </Link>
                </div>


                <br></br>
                <br></br>
                <div className="container text-center">
                    <h1>{this.props.counter}</h1>
                    <br></br>
                    <button onClick={() => { this.props.counterIncrement() }}>Increment</button>
                    <button onClick={() => { this.props.counterDecrement() }}>Decrement</button>

                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        user_name: state.registrating_reducer.user_name,
        roll_no: state.registrating_reducer.roll_no,
        class: state.registrating_reducer.class,
        counter: state.registrating_reducer.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    return ({
        change_Username_ToReducer: (updatedUsername) => {
            dispatch(changeUser_name(updatedUsername))
        },
        change_Class_ToReducer: (updatedClass) => {
            dispatch(change_Class(updatedClass))
        },
        change_RollNo_ToReducer: (updatedRollNo) => {
            dispatch(change_Roll_no(updatedRollNo))
        },
        counterIncrement: () => {
            dispatch(increment())
        },
        counterDecrement: () => {
            dispatch(decrement())
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);