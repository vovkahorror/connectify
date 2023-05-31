import React, {FC, memo, SVGProps, useEffect, useState} from 'react';
import styles from './Post.module.scss';
import {getProfileForInitialize, PostDataType, ProfileAPIType} from '../../../../redux/profile-reducer';
import userNoPhoto from '../../../../assets/images/user.svg';
import {ReactComponent as DeleteIcon} from '../../../../assets/icons/trash.svg';
import {ReactComponent as ThumbsUpRegularIcon} from '../../../../assets/icons/thumbsUpRegular.svg';
import {ReactComponent as ThumbsDownRegularIcon} from '../../../../assets/icons/thumbsDownRegular.svg';
import {ReactComponent as ThumbsUpSolidIcon} from '../../../../assets/icons/thumbsUpSolid.svg';
import {ReactComponent as ThumbsDownSolidIcon} from '../../../../assets/icons/thumbsDownSolid.svg';
import {useDispatch} from 'react-redux';
import {AxiosResponse} from 'axios';
import {ThunkDispatch} from 'redux-thunk';
import {AppStateType} from '../../../../redux/redux-store';
import {AnyAction} from 'redux';

export const Post: FC<PostPropsType> = memo(({userID, post, profile, onPutReaction, onDeletePost}) => {
    const dispatch = useDispatch<ThunkDispatch<AppStateType, any, AnyAction>>();
    const [senderPhoto, setSenderPhoto] = useState<string | null>(null);
    const [senderName, setSenderName] = useState<string | null>(null);

    const putLikeHandler = () => onPutReaction(post.id, 'likes');

    const putDislikeHandler = () => onPutReaction(post.id, 'dislikes');

    const deletePostHandler = () => onDeletePost(post.id);

    const date = new Date(post.date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const time = new Date(post.date).toLocaleTimeString('en-GB', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
    });

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

            {userID === post.senderUserID && <DeleteIcon className={styles.deletePost} onClick={deletePostHandler}/>}
        </article>
    );
});

export type PostPropsType = {
    userID: number | null;
    post: PostDataType;
    profile: ProfileAPIType | null;
    onPutReaction: (postID: string, reactions: 'likes' | 'dislikes') => void;
    onDeletePost: (postID: string) => void;
}