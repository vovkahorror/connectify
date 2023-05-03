import {create, ReactTestInstance} from 'react-test-renderer';
import {ProfileStatus} from './ProfileStatus';

describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status="Hello" updateStatus={() => {
        }}/>);
        const instance = component.getInstance() as ProfileStatusInstance;
        expect(instance.state.status).toBe('Hello');
    });

    test('after creation <span> should be displayed', async () => {
        const component = create(<ProfileStatus status="Hello" updateStatus={() => {
        }}/>);
        const span = await component.root.findByType('span');
        expect(span).toBeDefined();
    });

    test('after creation <input> shouldn\'t be displayed', () => {
        const component = create(<ProfileStatus status="Hello" updateStatus={() => {
        }}/>);
        expect(() => component.root.findByType('input')).toThrow();
    });

    test('after creation <span> should contains correct status', async () => {
        const component = create(<ProfileStatus status="Hello" updateStatus={() => {
        }}/>);
        const span = await component.root.findByType('span');
        expect(span.children[0]).toBe('Hello');
    });

    test('<input> should be displayed in editMode instead of <span>', async () => {
        const component = create(<ProfileStatus status="Hello" updateStatus={() => {
        }}/>);
        const span = await component.root.findByType('span');
        span.props.onDoubleClick();
        const input = await component.root.findByType('input');
        expect(input.props.value).toBe('Hello');
    });
});

interface ProfileStatusInstance extends ReactTestInstance {
    state: {
        status: string;
    };
}