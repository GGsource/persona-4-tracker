import { SocialLinkData } from "./SocialLinkData";
// LinkContainer Class that represents a collection of SocialLinkUI objects
export class LinkContainer {
    private links: SocialLinkUI[];
    private linkContainerUI: HTMLElement;

    constructor(linkData: SocialLinkData[]) {
        this.links = [];
        this.linkContainerUI = document.createElement("div");
        this.linkContainerUI.className = "linkContainer";
        linkData.forEach((element) => {
            this.addLink(new SocialLinkUI(element.arcana, element.name, element.rank, element.hidden));
        });
    }
    addLink(link: SocialLinkUI) {
        this.links.push(link);
        this.linkContainerUI.appendChild(link.getUI());
    }
    getLinks() {
        return this.links;
    }
    getLink(index: number) {
        return this.links[index];
    }
    getLength() {
        return this.links.length;
    }
    removeLink(index: number) {
        this.links.splice(index, 1);
        this.linkContainerUI.removeChild(this.linkContainerUI.childNodes[index]);
    }
    clear() {
        this.links = [];
    }
    getUI() {
        return this.linkContainerUI;
    }
}

// SocialLinkUI Class that represents a Social Link UI element
export class SocialLinkUI {
    // Contains the state of only the information that can be changed
    private rank: number;
    private hidden: boolean;
    private linkUI: HTMLElement;

    constructor(private arcana: string, private name: string, rank: number, hidden: boolean) {
        // Set the rank and hidden properties
        this.rank = rank;
        this.hidden = hidden;

        // Now we can create the HTML elements
        let linkUIFull = document.createElement("div");
        linkUIFull.className = "linkFull";
        let linkUILeft = document.createElement("div");
        linkUILeft.className = "linkSection linkLeft";
        // TODO: Turn linkleft into the full card using multiple divs
        let linkCenter = document.createElement("div");
        linkCenter.className = "linkSection linkCenter";
        // TODO: Insert the rank and the arcana below it inside linkCenter
        let linkUIRight = document.createElement("div");
        linkUIRight.className = "linkSection linkRight";
        // TODO: Insert the pip bar and the name of the social link inside linkRight

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
