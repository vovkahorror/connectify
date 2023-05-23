import React, {ChangeEvent} from 'react';

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value,
        });
    };

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: typeof this.state) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode
                    ? <div><span onDoubleClick={this.activateEditMode}>{this.props.status || 'no status'}</span></div>
                    : <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                                  value={this.state.status}/></div>}
            </>
        );
    }
}

type ProfileStatusPropsType = {
    status: string;
    updateStatus: (status: string) => void;
}