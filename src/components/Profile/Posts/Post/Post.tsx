import React, {FC, memo, SVGProps, useEffect, useState} from 'react';
import styles from './Post.module.scss';
import {getProfileForInitialize, PostDataType, ProfileAPIType} from '../../../../redux/profile-reducer';
import userNoPhoto from '../../../../assets/images/userLight.svg';
import {ReactComponent as DeleteIcon} from '../../../../assets/icons/trash.svg';
import {ReactComponent as ThumbsUpRegularIcon} from '../../../../assets/icons/thumbsUpRegular.svg';
import {ReactComponent as ThumbsDownRegularIcon} from '../../../../assets/icons/thumbsDownRegular.svg';
import {ReactComponent as ThumbsUpSolidIcon} from '../../../../assets/icons/thumbsUpSolid.svg';
import {ReactComponent as ThumbsDownSolidIcon} from '../../../../assets/icons/thumbsDownSolid.svg';
import {ReactComponent as DeletingIcon} from '../../../../assets/icons/requestGrey.svg';
import {useDispatch} from 'react-redux';
import {AxiosResponse} from 'axios';
import {ThunkDispatch} from 'redux-thunk';
import {AppStateType} from '../../../../redux/redux-store';
import {AnyAction} from 'redux';
import {toFormatDate, toFormatTime} from '../../../../utils/date-helpers';
import {Popconfirm} from 'antd';
import {useTranslation} from 'react-i18next';

export const Post: FC<PostPropsType> = memo(({userID, post, profile, onPutReaction, onDeletePost}) => {
    const {t, i18n} = useTranslation('profile');
    const dispatch = useDispatch<ThunkDispatch<AppStateType, any, AnyAction>>();
    const [senderPhoto, setSenderPhoto] = useState<string | null>(null);
    const [senderName, setSenderName] = useState<string | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const date = toFormatDate(post.date, i18n.language);
    const time = toFormatTime(post.date, i18n.language);

    const putLikeHandler = () => onPutReaction(post.id, 'likes');

    const putDislikeHandler = () => onPutReaction(post.id, 'dislikes');

    const deletePostHandler = () => {
        setIsDeleting(true);
        onDeletePost(post.id)
            .then(() => setIsDeleting(false));
    };

    const LikeIcon = (props: SVGProps<SVGSVGElement>) => {
        return post.likes.some(like => like === userID)
            ? <ThumbsUpSolidIcon {...props}/>
            : <ThumbsUpRegularIcon {...props}/>;
    };
    const DislikeIcon = (props: SVGProps<SVGSVGElement>) => {
        return post.dislikes.some(dislike => dislike === userID)
            ? <ThumbsDownSolidIcon {...props}/>
            : <ThumbsDownRegularIcon {...props}/>;
    };

    useEffect(() => {
        dispatch(getProfileForInitialize(post.senderUserID)).then((res: AxiosResponse<ProfileAPIType>) => {
            setSenderPhoto(res.data.photos.large);
            setSenderName(res.data.fullName);
        });

        return () => {
            setSenderPhoto(null);
            setSenderName(null);
        };
    }, [dispatch, post.senderUserID, profile]);

    return (
        <article className={styles.post}>
            <div className={styles.postHeader}>
                <img className={styles.photo} src={senderPhoto || userNoPhoto} alt=""/>
                <h3 className={styles.name}>{senderName}</h3>
                <time className={styles.date} dateTime={post.date}>
                    <span>{date}</span>
                    <span>{time}</span>
                </time>
            </div>

            <div className={styles.message}>{post.message}</div>

            <div className={styles.reactions}>
                <div className={styles.reactionItem}>
                    <LikeIcon className={styles.reactionIcon} onClick={putLikeHandler}/>
                    <span>{post.likes.length}</span>
                </div>
                <div className={styles.reactionItem}>
                    <DislikeIcon className={styles.reactionIcon} onClick={putDislikeHandler}/>
                    <span>{post.dislikes.length}</span>
                </div>
            </div>

            {userID === post.senderUserID &&
                <Popconfirm
                    title={t('deleteThisPost')}
                    description={t('sureDeleteThisPost')}
                    onConfirm={() => deletePostHandler()}
                    okText={t('yes')}
                    cancelText={t('no')}
                    disabled={isDeleting}
                >
                    {isDeleting
                        ? <DeletingIcon className={styles.deletingPost}/>
                        : <DeleteIcon className={styles.deletePost}/>}
                </Popconfirm>
            }
        </article>
    );
});

export type PostPropsType = {
    userID: number | null;
    post: PostDataType;
    profile: ProfileAPIType | null;
    onPutReaction: (postID: string, reactions: 'likes' | 'dislikes') => void;
    onDeletePost: (postID: string) => Promise<void>;
}