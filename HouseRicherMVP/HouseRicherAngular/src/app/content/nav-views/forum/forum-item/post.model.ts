export class Post {
    message: string;
    likes: number;
    views: number;
    comments: Array<object>;
    user_name: string;
    user_image: string;
    attachments: Array<Object>;
    created_at: Date;
    feeds: Object;
}
