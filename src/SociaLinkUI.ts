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
		let linkUIBody = document.createElement("div");
		linkUIBody.className = "linkBody";

		let linkUILeft = document.createElement("div");
		linkUILeft.className = "linkSection linkLeft";
		linkUILeft.innerHTML = "A";
		linkUILeft.style.flex = "9.8"; // fractions of the space

		// TODO: Turn linkleft into the full card using multiple divs
		let linkCenter = document.createElement("div");
		linkCenter.className = "linkSection linkCenter";
		linkCenter.innerHTML = "B";
		linkCenter.style.flex = "28.1"; // fractions of the space
		// Arcana name child for linkCenter
		let linkCenterArcana = document.createElement("div");
		linkCenterArcana.className = "linkCenterArcana";
		linkCenterArcana.innerHTML = "Fool";

		// TODO: Insert the rank and the arcana below it inside linkCenter
		let linkUIRight = document.createElement("div");
		linkUIRight.className = "linkSection linkRight";
		linkUIRight.innerHTML = "C";
		linkUIRight.style.flex = "62.1"; //fractions of the space
		// TODO: Insert the pip bar and the name of the social link inside linkRight

		// TODO: Figure out how the color of the line between each link row is decided in original

		// Attach all three sections to the body of the row
		linkUIBody.appendChild(linkUILeft);
		linkUIBody.appendChild(linkCenter);
		linkUIBody.appendChild(linkUIRight);

		// children
		linkCenter.appendChild(linkCenterArcana);

		// Attach the body to the full row
		linkUIFull.appendChild(linkUIBody);

		// Attach the UI we've created to the class
		this.linkUI = linkUIFull;
	}
	getUI() {
		return this.linkUI;
	}
}
