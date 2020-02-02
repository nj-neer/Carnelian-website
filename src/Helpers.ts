import md5 from "md5";
import IUser from "./interfaces/User.interface";

/**
 * Generate a gravatar url from user
 * @param user 
 */
export function getGravatarUrl(user: IUser): string {
    if (!user || !user.email) {
        return "";
    }
    const mailHash = md5(this.user.email);
    return "https://www.gravatar.com/avatar/" + mailHash;
}

/**
 * Clear the local storage and refresh the page
 */
export function disconnect() {
    localStorage.removeItem("cnl_token");
    localStorage.removeItem("cnl_user");
    document.location.href = "/";
}