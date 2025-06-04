 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/web/app/gallery/page.tsx
index 0000000000000000000000000000000000000000..43ddd17397ea460d50ed34e7dff2bc1432017cd7 100644
--- a//dev/null
+++ b/web/app/gallery/page.tsx
@@ -0,0 +1,19 @@
+import Image from 'next/image';
+import { persons } from '../../data/persons';
+
+export default function Gallery() {
+  return (
+    <div>
+      <h1 className="text-2xl font-bold mb-4">Missing Persons Gallery</h1>
+      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
+        {persons.map(p => (
+          <div key={p.id} className="text-center">
+            <Image src={p.image} alt={p.name} width={200} height={200} className="mx-auto" />
+            <div className="mt-2 font-medium">{p.name}</div>
+            <div className="text-sm text-gray-600">{p.location}</div>
+          </div>
+        ))}
+      </div>
+    </div>
+  );
+}
 
EOF
)