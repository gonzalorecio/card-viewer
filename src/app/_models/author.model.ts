import { SocialLink } from "./social-link.model";

export class Author {
    constructor(
        public name: string = '',
        public lastname: string = '',
        public bio: string = '',
        public socialLinks: SocialLink[] = []
    ){}
}