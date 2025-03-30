// SocialLinkUI Class that represents a Social Link UI element
export class SocialLinkUI {
    // Contains the state of only the information that can be changed
    private rank: number;
    private hidden: boolean;
    private linkUI: HTMLDivElement;

    constructor(private arcana: string, private name: string, rank: number, hidden: boolean) {
        // Set the rank and hidden properties
        this.rank = rank;
        this.hidden = hidden;

        // Now we can create the HTML elements
        let linkUIFull = document.createElement("div");
        linkUIFull.className = "linkFull";
        let linkUILeft = document.createElement("div");
        linkUILeft.className = "linkSection linkLeft";
        linkUILeft.innerHTML = "Area for the arcana card";
        linkUILeft.style.flex = "1"; // Make the card take up 1 fraction of the space
        // TODO: Turn linkleft into the full card using multiple divs
        let linkCenter = document.createElement("div");
        linkCenter.className = "linkSection linkCenter";
        linkCenter.innerHTML = "Area for the level and arcana name";
        linkCenter.style.flex = "3"; // fractions of the space
        // TODO: Insert the rank and the arcana below it inside linkCenter
        let linkUIRight = document.createElement("div");
        linkUIRight.className = "linkSection linkRight";
        linkUIRight.innerHTML = "Area for the bar and the name of the social link";
        linkUIRight.style.flex = "6"; //fractions of the space
        // TODO: Insert the pip bar and the name of the social link inside linkRight

        // TODO: Figure out how the color of the line between each link row is decided in original

        // Attach all three sections to the full card
        linkUIFull.appendChild(linkUILeft);
        linkUIFull.appendChild(linkCenter);
        linkUIFull.appendChild(linkUIRight);

        // Attach the UI we've created to the class
        this.linkUI = linkUIFull;
    }
    getUI() {
        return this.linkUI;
    }
}
