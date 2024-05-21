document.oncontextmenu = function(){ return false; };
document.body.oncontextmenu = "return false;"
/*
async function makeKey(){
	let secret_key = await crypto.subtle.generateKey({name:'AES-GCM', length:256}, true, ['encrypt','decrypt'])
	let export_secret_key = await crypto.subtle.exportKey('jwk', secret_key)
	//console.log(export_secret_key)
	return export_secret_key
}
makeKey()
*/
