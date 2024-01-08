import React, { Component } from 'react'

export class LifeCyclesCDM extends Component {

    constructor(props) {
        console.log('Child Constructor Called')
        super(props)

        this.state = {
            data: 'Child loading...'
        }
    }

    getData() {
        console.log('Child getData() called')
        setTimeout(() => {
            console.log('Child data fetched!')
            this.setState({
                data: 'Child Loaded'
            })
        }, 3000)
    }


    componentDidMount() {
        console.log('Child Component mounted!')
        this.getData();
    }

    render() {
        console.log('Child Render method called')
        return (
            <div>
                <h1>{this.state.data}</h1>
            </div>
        )
    }
}

export default LifeCyclesCDM