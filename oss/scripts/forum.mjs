function createIconCount(iconSrc, altText, num, onClick) {
    const container = document.createElement("div");
    container.className = "icon-count";
    container.style.display = "inline-flex";
    container.style.alignItems = "center";
    container.style.marginRight = "15px";


    const icon = document.createElement("img");
    icon.src = iconSrc;
    icon.alt = altText;
    icon.width = 20;
    icon.height = 20;
    icon.style.verticalAlign = "middle";
    
    if (onClick) {
        container.style.cursor = "pointer";
        container.addEventListener("click", onClick);
    }

    const count = document.createElement("span");
    count.textContent = ` ${num}`;
    count.style.marginLeft = "5px";

    container.append(icon, count);
    return container;
}

const likeUrl = "images/forum/like.png";
const commentUrl = "images/forum/comment.png";
const replyUrl = "images/forum/reply.png";

export const likes = (num) => createIconCount(likeUrl, "Likes", num);
export const commentCount = (num, callback) => createIconCount(commentUrl, "Comments", num, callback);
export const replyCount = (num) => createIconCount(replyUrl, "Replies", num);