import React from 'react';

type ProfileStatusPropsType = {
    status: string;
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
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
    };

    render() {
        const {status} = this.props;

        return (
            <>
                {!this.state.editMode
                    ? <div><span onDoubleClick={this.activateEditMode}>{status}</span></div>
                    : <div><input autoFocus={true} onBlur={this.deactivateEditMode} value={status}/></div>}
            </>
        );
    }
}