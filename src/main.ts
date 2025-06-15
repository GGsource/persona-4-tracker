import { SocialLinkData } from "./SocialLinkData";
import { SocialLinkUI } from "./SociaLinkUI";
export let mute = false;

// Initial Social Link Information stored in an Object
let linkData: SocialLinkData[] = [
	{ arcana: "Fool", name: "Investigation Team", rank: 1, hidden: false },
	{ arcana: "Magician", name: "Yosuke Hanamura", rank: 1, hidden: false },
	{ arcana: "Priestess", name: "Yukiko Amagi", rank: 1, hidden: true },
	{ arcana: "Empress", name: "Margaret", rank: 1, hidden: true },
	{ arcana: "Emperor", name: "Kanji Tatsumi", rank: 1, hidden: true },
	{ arcana: "Hierophant", name: "Ryotaro Dojima", rank: 1, hidden: true },
	{ arcana: "Lovers", name: "Rise Kujikawa", rank: 1, hidden: true },
	{ arcana: "Chariot", name: "Chie Satonaka", rank: 1, hidden: true },
	{ arcana: "Justice", name: "Nanako Dojima", rank: 1, hidden: true },
	{ arcana: "Hermit", name: "Fox", rank: 1, hidden: true },
	{ arcana: "Fortune", name: "Naoto Shirogane", rank: 1, hidden: true },
	{ arcana: "Strength", name: "Fellow Athletes", rank: 1, hidden: true },
	{ arcana: "Hanged Man", name: "Saki's Brother", rank: 1, hidden: true },
	{ arcana: "Death", name: "Old Lady", rank: 1, hidden: true },
	{ arcana: "Temperance", name: "Young Mother", rank: 1, hidden: true },
	{ arcana: "Devil", name: "Nurse", rank: 1, hidden: true },
	{ arcana: "Tower", name: "Tutored Student", rank: 1, hidden: true },
	{ arcana: "Star", name: "Teddie", rank: 1, hidden: true },
	{ arcana: "Moon", name: "Ai Ebihara", rank: 1, hidden: true },
	{ arcana: "Sun", name: "Yumi Ozawa", rank: 1, hidden: true },
	{ arcana: "Sun", name: "Ayane Matsunaga", rank: 1, hidden: true },
	{ arcana: "Judgement", name: "Seekers of Truth", rank: 1, hidden: true },
	{ arcana: "Jester", name: "Tohru Adachi", rank: 1, hidden: true },
	{ arcana: "Hunger", name: "Tohru Adachi", rank: 8, hidden: true },
	{ arcana: "Aeon", name: "Marie", rank: 1, hidden: true },
];

// gets cookies' values when you feed the cookie's name (key)
// will be used to get the values of the social links, mute button and the debug image
function getCookie(cname: string) {
	let name = cname + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(";");

	// for cook in cookies
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];

		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}

		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

// Get the app element
const linkContainer = document.getElementById("linkContainer");
const SLICE_SIZE = 5;
let startIndex = 0;

function renderSlice() {
	if (!linkContainer) return;
	// Clear previous content
	linkContainer.innerHTML = "";

	// Slice the data based on the current startIndex and SLICE_SIZE
	const slice = linkData.slice(startIndex, startIndex + SLICE_SIZE);
	slice.forEach((element) => {
		let newLink = new SocialLinkUI(element.arcana, element.name, element.rank, element.hidden);
		linkContainer.appendChild(newLink.getUI());
	});
}

// Listen for scroll events on the container
if (linkContainer) {
	linkContainer.addEventListener("wheel", (event) => {
		// checks direction of scroll and updates accordingly (1 for up, -1 for down)
		const direction = event.deltaY > 0 ? 1 : -1;
		const maxIndex = Math.max(0, linkData.length - SLICE_SIZE);
		startIndex += direction;
		// Wrap to start
		if (startIndex > maxIndex) {
			startIndex = 0;

			// Wrap to end
		} else if (startIndex < 0) {
			startIndex = maxIndex;
		}
		renderSlice();
	});

	// Initial render
	renderSlice();
}

// has to start as true because browser autoplay restrictions are a thing
mute = true;
const muteButton = document.getElementById("muteButton");

if (muteButton) {
	muteButton.addEventListener("click", () => {
		mute = !mute;
	});
}

// Get the viewport dimensions and print them out
const debugDescription = document.getElementById("debugDesc");
if (debugDescription) {
	debugDescription.innerHTML = `Viewport width: ${window.innerWidth}, height: ${window.innerHeight}`;
}
