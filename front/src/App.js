import React,{ Component } from 'react';
import PhoneForm from './PhoneForm.js'
import PhoneInfoList from "./PhoneInfoList";
class App extends Component {
    id = 0;
    state = {
        information:[
        ]
    }
    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
            information: information.concat(
                {
                    id: this.id++,
                    ...data
                }
                )
        })
    }
    handleRemove = (id) => {
        const { information } = this.state;
        this.setState({
            information: information.filter(info => info.id !== id)
        })
    }
    render() {
        const { information } = this.state;

        return (
            <div>
                <PhoneForm
                    onCreate={this.handleCreate}
                />
                <PhoneInfoList
                    data={this.state.information}
                    onRemove={this.handleRemove}
                />
            </div>
        );
    }
}

export default App;
