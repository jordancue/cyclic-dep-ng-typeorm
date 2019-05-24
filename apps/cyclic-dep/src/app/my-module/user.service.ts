import { Injectable } from '@angular/core';
import {Photo, User} from "@cyclicdep/schema";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    currentUser: User;
    photos: Photo[];

    constructor() {
        this.currentUser = new User();
        this.currentUser.name = 'John Bonham';

        this.photos = Array<Photo>();
    }
}
