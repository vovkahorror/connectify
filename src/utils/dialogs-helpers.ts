import {MessageInstance} from 'antd/es/message/interface';
import {AxiosError} from 'axios';
import {TFunction} from 'i18next';

export const sendAndSetNotification = async (messageApi: MessageInstance, sendMessage: (userId: number, messageText: string) => Promise<void>, userID: number, messageText: string, t: TFunction) => {
    const key = 'updatable';

    messageApi.open({
        key,
        type: 'loading',
        content: `${t('sendingYourMessage')}...`,
    });

    try {
        await sendMessage(userID, messageText);

        messageApi.open({
            key,
            type: 'success',
            content: t('sentSuccessfully'),
            duration: 2,
        });
    } catch (e) {
        const error = e as AxiosError;

        messageApi.open({
            key,
            type: 'error',
            content: error.response?.data.message || error.message,
            duration: 2,
        });
    }
};