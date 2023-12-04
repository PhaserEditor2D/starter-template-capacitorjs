
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import { OnPointerDownScript } from "@phasereditor2d/scripts-core";
import { PushActionScript } from "@phasereditor2d/scripts-simple-animations";
import { OnAwakeScript } from "@phasereditor2d/scripts-core";
import { MoveInSceneActionScript } from "@phasereditor2d/scripts-simple-animations";
import { DurationConfigComp } from "@phasereditor2d/scripts-simple-animations";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// fufuSuperDino
		const fufuSuperDino = this.add.image(640, 257, "FufuSuperDino");

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(fufuSuperDino);

		// pushAction
		new PushActionScript(onPointerDownScript);

		// onAwakeScript
		const onAwakeScript = new OnAwakeScript(fufuSuperDino);

		// moveInSceneActionScript
		const moveInSceneActionScript = new MoveInSceneActionScript(onAwakeScript);

		// text
		const text = this.add.text(640, 458, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "Phaser 3 + Phaser Editor 2D\nWebpack + TypeScript\nCapacitorJS";
		text.setStyle({ "align": "center", "fontFamily": "Arial", "fontSize": "3em" });

		// onAwakeScript_1
		const onAwakeScript_1 = new OnAwakeScript(text);

		// moveInSceneActionScript_1
		const moveInSceneActionScript_1 = new MoveInSceneActionScript(onAwakeScript_1);

		// moveInSceneActionScript (prefab fields)
		moveInSceneActionScript.from = "TOP";

		// moveInSceneActionScript (components)
		const moveInSceneActionScriptDurationConfigComp = new DurationConfigComp(moveInSceneActionScript);
		moveInSceneActionScriptDurationConfigComp.duration = 512;

		// moveInSceneActionScript_1 (prefab fields)
		moveInSceneActionScript_1.from = "BOTTOM";

		// moveInSceneActionScript_1 (components)
		const moveInSceneActionScript_1DurationConfigComp = new DurationConfigComp(moveInSceneActionScript_1);
		moveInSceneActionScript_1DurationConfigComp.duration = 512;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
