import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class MessageConstants {
    public CREATESUCCESS: string = "Member was added succcessfully!"
    public UPDATESUCCESS: string = "Member was updated succcessfully!"
    public DELETESUCCESS: string = "Member was deleted succcessfully!"
    public ERROR_CRUD: string = "Oops! Something went wrong , please try again.."
}