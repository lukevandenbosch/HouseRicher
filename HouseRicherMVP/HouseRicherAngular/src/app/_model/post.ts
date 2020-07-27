import { Comment } from './comment'

export class Post {
    id: number;
    name: string;
    message: string;
    likes: number;
    isLiked: boolean;
    datePosted: string;
    personId: number;
    firstName: string;
    lastName: string;
    profilePicture: string;
    commentCount: number;
    comments: Array<Comment>;
}