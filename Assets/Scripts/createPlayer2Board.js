#pragma strict

function Start () {
	CreateBoard();
}

function Update () {

}

function CreateBoard() {
	var prefab = Resources.Load("colourCube");
	for (var i : int = 0;i < 3; i++) {
		var cube1 : GameObject = Instantiate (prefab, Vector3(5+i, 0, 0), Quaternion.identity);
		cube1.tag = "player2";
		var cube2 : GameObject  = Instantiate (prefab, Vector3(5+i, 1, 0), Quaternion.identity);
		cube2.tag = "player2";
		var cube3 : GameObject  = Instantiate (prefab, Vector3(5+i, 2, 0), Quaternion.identity);
		cube3.tag = "player2";
		var cube4 : GameObject  = Instantiate (prefab, Vector3(5+i, 3, 0), Quaternion.identity);
		cube4.tag = "player2";
	}
}