export class User {
    name: string;
    login: string;
    avatar_url: string;
    bio: string
    followers: number;
    email: string;
    html_url: string;

    constructor(){
        this.name = null;
        this.login = null;
        this.avatar_url = null;
        this.bio = null;
        this.followers = null;
        this.email = null;
        this.html_url = null;
    }
}