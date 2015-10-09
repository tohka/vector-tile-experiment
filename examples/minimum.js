// vim: set fileencoding=utf-8:
// vim: set sw=4 ts=4 sts=4:
// †

var map = L.map('map',
	{
		center: [35.705698, 139.957527],
		zoom: 16
	}
);

L.tileLayer(
	'http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png',
	{
		attribution: "地理院タイル（標準地図）", 
		maxNativeZoom: 18,
		maxZoom: 18,
		opacity: 1
	}
).addTo(map);
