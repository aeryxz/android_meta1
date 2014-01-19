#pragma strict
var pickedColour : Color;
function Start () {
	var randomColour = Random.Range(0.0,3.0);
	if (randomColour <= 1.0) {
		pickedColour = Color.red;
	}
	else if (randomColour <= 2.0) {
		pickedColour = Color.blue;
	} 
	else {
		pickedColour = Color.green;
	}
	renderer.material.color = pickedColour;
}

function Update () {

}