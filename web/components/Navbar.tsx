 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/web/components/Navbar.tsx
index 0000000000000000000000000000000000000000..3223379cefd6bcae3d848920a5b832554c254681 100644
--- a//dev/null
+++ b/web/components/Navbar.tsx
@@ -0,0 +1,18 @@
+import Link from 'next/link';
+
+export default function Navbar() {
+  return (
+    <nav className="bg-gray-800 text-white p-4 flex justify-between">
+      <div className="font-bold">Tanganyikan</div>
+      <div className="space-x-4">
+        <Link href="/" className="hover:underline">Home</Link>
+        <Link href="/gallery" className="hover:underline">Gallery</Link>
+        <Link href="/map" className="hover:underline">Map</Link>
+        <Link href="/stats" className="hover:underline">Stats</Link>
+        <Link href="/about" className="hover:underline">About</Link>
+        <Link href="/contact" className="hover:underline">Contact</Link>
+        <Link href="/login" className="hover:underline">Login</Link>
+      </div>
+    </nav>
+  );
+}
 
EOF
)