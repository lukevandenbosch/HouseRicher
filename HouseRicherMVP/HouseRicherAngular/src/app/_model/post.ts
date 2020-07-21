import { Comment } from './comment'

export class Post {
    id: number;
    name: string;
    message: string;
    likes: number;
    isLiked: boolean;
    datePosted: string;
    firstName: string;
    lastName: string;
    description: string;
    comments: Array<Comment>;
}