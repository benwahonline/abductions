 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/web/app/map/MapClient.tsx
index 0000000000000000000000000000000000000000..524e81f82a7f83a1e3749ebde3ac67dab4b60b11 100644
--- a//dev/null
+++ b/web/app/map/MapClient.tsx
@@ -0,0 +1,30 @@
+'use client';
+import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
+import 'leaflet/dist/leaflet.css';
+import { persons } from '../../data/persons';
+import L from 'leaflet';
+
+// fix default icon issue in leaflet with nextjs
+// eslint-disable-next-line @typescript-eslint/no-explicit-any
+delete (L as any).Icon.Default.prototype._getIconUrl;
+L.Icon.Default.mergeOptions({
+  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
+  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
+  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
+});
+
+export default function MapClient() {
+  const position: [number, number] = [-6.7924, 39.2083];
+  return (
+    <MapContainer center={position} zoom={6} className="h-full w-full">
+      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
+      {persons.map(p => (
+        <Marker key={p.id} position={[p.lat, p.lng]}>
+          <Popup>
+            {p.name} - {p.location}
+          </Popup>
+        </Marker>
+      ))}
+    </MapContainer>
+  );
+}
 
EOF
)